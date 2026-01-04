javascript:(function () {
  /*
    YouTube "Save to..." fullscreen bookmarklet
    Debug build: adds console logs showing the state machine decisions.

    Notes:
    - ES5 only
    - ASCII only
    - Multiline  
    - save slash star style comments only
  */

  function log(msg, obj) {
    try {
      if (obj !== undefined) console.log("[BM SaveSheet]", msg, obj);
      else console.log("[BM SaveSheet]", msg);
    } catch (e) {}
  }

  function warn(msg, obj) {
    try {
      if (obj !== undefined) console.warn("[BM SaveSheet]", msg, obj);
      else console.warn("[BM SaveSheet]", msg);
    } catch (e) {}
  }

  function qs(sel, root) {
    return (root || document).querySelector(sel);
  }

  function getWrapper() {
    return document.getElementById("contentWrapper") || qs("#contentWrapper");
  }

  function getSheet() {
    var w = getWrapper();
    return (w && qs("yt-sheet-view-model", w)) || qs("yt-sheet-view-model");
  }

  function getList(sheet) {
    return sheet ? qs("yt-list-view-model", sheet) : null;
  }

  function isVisible(el) {
    if (!el) return false;
    var r = el.getBoundingClientRect();
    var cs = window.getComputedStyle(el);
    var visible =
      r.width > 10 &&
      r.height > 10 &&
      cs &&
      cs.display !== "none" &&
      cs.visibility !== "hidden" &&
      cs.opacity !== "0";
    return visible;
  }

  function hasSavedStyle(el) {
    return !!(el && el.dataset && el.dataset.bmPrevStyle !== undefined);
  }

  function forceRestore(el) {
    if (!el || !el.dataset || el.dataset.bmPrevStyle === undefined) return false;
    el.setAttribute("style", el.dataset.bmPrevStyle);
    delete el.dataset.bmPrevStyle;
    return true;
  }

  function toggleInlineStyles(el, patch) {
    if (!el) return false;

    if (el.dataset && el.dataset.bmPrevStyle !== undefined) {
      el.setAttribute("style", el.dataset.bmPrevStyle);
      delete el.dataset.bmPrevStyle;
      return "restored";
    }

    if (el.dataset) {
      el.dataset.bmPrevStyle = el.getAttribute("style") || "";
    }

    for (var k in patch) {
      if (Object.prototype.hasOwnProperty.call(patch, k)) {
        el.style[k] = patch[k];
      }
    }

    return "patched";
  }

  function waitFor(getEl, timeoutMs) {
    timeoutMs = timeoutMs || 8000;

    return new Promise(function (resolve, reject) {
      var start = Date.now();
      var done = false;

      function finishOk(el) {
        if (done) return;
        done = true;
        resolve(el);
      }

      function finishErr(err) {
        if (done) return;
        done = true;
        reject(err);
      }

      function check() {
        var el = null;
        try {
          el = getEl();
        } catch (e) {
          finishErr(e);
          return;
        }

        if (el) {
          finishOk(el);
          return;
        }

        if (Date.now() - start > timeoutMs) {
          finishErr(new Error("Timed out waiting for element"));
        }
      }

      check();
      if (done) return;

      var obs = new MutationObserver(function () {
        check();
        if (done) obs.disconnect();
      });
      obs.observe(document.documentElement, { childList: true, subtree: true });

      setTimeout(function () {
        obs.disconnect();
        check();
      }, timeoutMs);
    });
  }

  function reliableClick(btn) {
    if (!btn) return false;

    function fire(type) {
      btn.dispatchEvent(
        new MouseEvent(type, {
          bubbles: true,
          cancelable: true,
          view: window
        })
      );
    }

    fire("mousedown");
    fire("mouseup");
    fire("click");
    return true;
  }

  function findSaveButton() {
    var byAria = qs('button[aria-label="Save to playlist"]');
    if (byAria) return byAria;

    var buttons = document.querySelectorAll("ytd-menu-renderer button");
    for (var i = 0; i < buttons.length; i++) {
      var t = (buttons[i].textContent || "").replace(/\s+/g, " ").trim().toLowerCase();
      if (t === "save") return buttons[i];
    }
    return null;
  }

  function findCloseButton(sheet) {
    if (!sheet) return null;
    return (
      qs('button[aria-label="Close"]', sheet) ||
      qs('yt-icon-button[aria-label="Close"] button', sheet) ||
      null
    );
  }

  function applyToggle(sheet) {
    var list = getList(sheet);

    log("applyToggle()", {
      sheetHasSavedStyle: hasSavedStyle(sheet),
      sheetVisible: isVisible(sheet),
      listExists: !!list,
      listHasSavedStyle: hasSavedStyle(list)
    });

    var sheetResult = toggleInlineStyles(sheet, {
      position: "fixed",
      top: "0",
      left: "0",
      right: "0",
      height: "100vh",
      maxHeight: "100vh",
      zIndex: "999999",
      overflow: "auto",
      boxSizing: "border-box"
    });

    var listResult = toggleInlineStyles(list, {
      maxHeight: "calc(100vh - 120px)",
      overflow: "auto"
    });

    log("applyToggle() results", { sheetResult: sheetResult, listResult: listResult });

    return sheetResult;
  }

  function forceRestoreIfHiddenButPatched() {
    var sheet = getSheet();
    var list = getList(sheet);

    log("forceRestoreIfHiddenButPatched() probe", {
      sheetFound: !!sheet,
      sheetVisible: isVisible(sheet),
      sheetHasSavedStyle: hasSavedStyle(sheet),
      listFound: !!list,
      listHasSavedStyle: hasSavedStyle(list)
    });

    if (sheet && hasSavedStyle(sheet) && !isVisible(sheet)) {
      log("forceRestoreIfHiddenButPatched(): restoring hidden patched sheet");
      forceRestore(sheet);
      if (list) forceRestore(list);
      return true;
    }

    log("forceRestoreIfHiddenButPatched(): nothing to restore");
    return false;
  }

  function monitorAutoCleanup(sheet) {
    log("monitorAutoCleanup(): start", {
      sheetHasSavedStyle: hasSavedStyle(sheet),
      sheetVisible: isVisible(sheet)
    });

    var list = getList(sheet);
    var stopped = false;

    function stop(obsA, obsB, intervalId, timeoutId) {
      if (stopped) return;
      stopped = true;
      if (obsA) obsA.disconnect();
      if (obsB) obsB.disconnect();
      if (intervalId) clearInterval(intervalId);
      if (timeoutId) clearTimeout(timeoutId);
      log("monitorAutoCleanup(): stopped");
    }

    function cleanupIfClosed(obsA, obsB, intervalId, timeoutId, reason) {
      if (stopped) return;

      var stillThere = document.documentElement.contains(sheet);
      var visible = stillThere && isVisible(sheet);

      log("monitorAutoCleanup(): check", {
        reason: reason,
        stillThere: stillThere,
        visible: visible,
        sheetHasSavedStyle: hasSavedStyle(sheet),
        listHasSavedStyle: hasSavedStyle(list)
      });

      if (!stillThere || !visible) {
        if (hasSavedStyle(sheet)) {
          log("monitorAutoCleanup(): restoring sheet styles because it closed/hidden");
          forceRestore(sheet);
        }
        if (list && hasSavedStyle(list)) {
          log("monitorAutoCleanup(): restoring list styles because it closed/hidden");
          forceRestore(list);
        }
        stop(obsA, obsB, intervalId, timeoutId);
      }
    }

    var obsSheet = null;
    try {
      obsSheet = new MutationObserver(function () {
        cleanupIfClosed(obsSheet, obsDoc, intervalId, timeoutId, "sheet mutation");
      });
      obsSheet.observe(sheet, {
        attributes: true,
        attributeFilter: ["style", "class", "hidden", "aria-hidden"]
      });
    } catch (e) {
      warn("monitorAutoCleanup(): could not observe sheet attributes", e);
    }

    var obsDoc = new MutationObserver(function () {
      cleanupIfClosed(obsSheet, obsDoc, intervalId, timeoutId, "doc mutation");
    });
    obsDoc.observe(document.documentElement, { childList: true, subtree: true });

    var intervalId = setInterval(function () {
      cleanupIfClosed(obsSheet, obsDoc, intervalId, timeoutId, "poll");
    }, 250);

    var timeoutId = setTimeout(function () {
      stop(obsSheet, obsDoc, intervalId, timeoutId);
    }, 30000);
  }

  function describeState() {
    var wrapper = getWrapper();
    var sheet = getSheet();
    var list = getList(sheet);

    return {
      wrapperFound: !!wrapper,
      sheetFound: !!sheet,
      sheetVisible: isVisible(sheet),
      sheetHasSavedStyle: hasSavedStyle(sheet),
      listFound: !!list,
      listHasSavedStyle: hasSavedStyle(list)
    };
  }

  (function run() {
    log("RUN: begin", describeState());

    forceRestoreIfHiddenButPatched();

    log("RUN: after forceRestoreIfHiddenButPatched()", describeState());

    var sheet = getSheet();

    if (sheet && isVisible(sheet)) {
      log("STATE: sheet is visible -> toggling styles (no Save click)");
      var res = applyToggle(sheet);

      if (res === "restored") {
        log("STATE: restored -> will attempt to close sheet");
        setTimeout(function () {
          var closeBtn = findCloseButton(sheet);
          if (closeBtn) {
            log("CLOSE: clicking Close button", closeBtn);
            reliableClick(closeBtn);
            return;
          }

          var saveBtnClose = findSaveButton();
          if (saveBtnClose) {
            log("CLOSE: no Close button found; clicking Save button to toggle close", saveBtnClose);
            reliableClick(saveBtnClose);
            return;
          }

          warn("CLOSE: could not find Close or Save button; cannot close");
        }, 0);
      } else {
        log("STATE: patched (expanded) -> start auto cleanup monitor");
        monitorAutoCleanup(sheet);
      }

      log("RUN: end (sheet visible branch)", describeState());
      return;
    }

    log("STATE: sheet not visible -> will click Save button and wait");

    var saveBtn = findSaveButton();
    if (!saveBtn) {
      warn('ERROR: could not find "Save to playlist" button');
      return;
    }

    var sx = window.scrollX || 0;
    var sy = window.scrollY || 0;

    log("OPEN: clicking Save button", saveBtn);
    reliableClick(saveBtn);

    setTimeout(function () { window.scrollTo(sx, sy); }, 0);
    setTimeout(function () { window.scrollTo(sx, sy); }, 50);
    setTimeout(function () { window.scrollTo(sx, sy); }, 150);

    waitFor(function () {
      var s = getSheet();
      if (s && isVisible(s)) return s;
      return null;
    }, 8000).then(function (s) {
      log("OPEN: sheet appeared visible -> applying fullscreen patch");
      applyToggle(s);
      log("OPEN: patched -> starting auto cleanup monitor");
      monitorAutoCleanup(s);
      log("RUN: end (opened branch)", describeState());
    }).catch(function (err) {
      warn("ERROR: waitFor(sheet) failed", err);
    });
  })();
})();

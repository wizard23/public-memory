/*
created with chatgpt using prompts:

please write a bookmarklet that:
* is human readable but still works when copied and pasted as a bookmarklet so 
  * make sure it does not contain // comments 
  * and all statements end with ; ) 
* that appends the current url to the copy paste buffer prepending it by "* " 
* shows an alert if this failed

do the following changes: 
* move the code for copyingtext to the clipboard in a seperate function called writeClipboard 
* also create a readClipboard function that reads the current clipboard content 
* then use this new function to read the current clipboard content and then: 
* if the clipboard content starts with a "#" then append the url with a "\n* " in front of it to the clipboard 
* else (the clipboard content does not start with a "#") then overwrite the clipboard content with: "## Links <current datetime in format YYYY/MM/DD HH:MM>\n* <the url>"
*/

javascript:(()=>{

  /* Build "* <url>" line */
  const urlLine = "* " + window.location.href;

  /* Format current local datetime as "YYYY/MM/DD HH:MM" */
  function nowYYYYMMDD_HHMM() {
    const d = new Date();
    const pad = (n) => String(n).padStart(2, "0");
    const yyyy = String(d.getFullYear());
    const mm = pad(d.getMonth() + 1);
    const dd = pad(d.getDate());
    const hh = pad(d.getHours());
    const mi = pad(d.getMinutes());
    return `${yyyy}/${mm}/${dd} ${hh}:${mi}`;
  }

  /* Report failure and show a useful manual fallback */
  function fail(err, fallbackText) {
    alert(
      "❌ Clipboard operation failed.\n\n" +
      "Reason: " + (err && err.message ? err.message : err) +
      (fallbackText ? ("\n\nYou can copy this manually:\n" + fallbackText) : "")
    );
  }

  /* Write text to clipboard (modern API first, then execCommand fallback) */
  async function writeClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return;
    }

    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.left = "-9999px";
    ta.style.top = "0";

    document.body.appendChild(ta);
    ta.select();
    ta.setSelectionRange(0, ta.value.length);

    const ok = document.execCommand("copy");
    document.body.removeChild(ta);

    if (!ok) {
      throw new Error("document.execCommand('copy') returned false");
    }
  }

  /* Read text from clipboard (only possible via modern Clipboard API) */
  async function readClipboard() {
    if (navigator.clipboard && window.isSecureContext) {
      return await navigator.clipboard.readText();
    }
    throw new Error("Reading clipboard is not available here (requires HTTPS + Clipboard API permission).");
  }

  (async () => {
    try {
      const current = await readClipboard();
      const trimmed = (current ?? "");

      let next;

      /* If clipboard starts with "#" -> append "\n* <url>" */
      if (trimmed.startsWith("#")) {
        const needsNewline = trimmed.length > 0 && !trimmed.endsWith("\n");
        next = trimmed + (needsNewline ? "" : "") + "\n" + urlLine;
      } else {
        /* Else overwrite with header + link */
        next = "## Links " + nowYYYYMMDD_HHMM() + "\n" + urlLine;
      }

      await writeClipboard(next);

    } catch (e) {
      const manual = "## Links " + nowYYYYMMDD_HHMM() + "\n" + urlLine;
      fail(e, manual);
    }
  })();

})()

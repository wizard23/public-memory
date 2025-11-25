javascript:(()=>{
  /* Prevent all context-menu-blocking listeners */
  const kills = ["contextmenu"]; /*,"mousedown","mouseup","pointerdown","pointerup"]; */
  for (const ev of kills) {
    window.addEventListener(ev, e => e.stopImmediatePropagation(), true);
  } 

  /* Remove inline handlers */
  document.querySelectorAll("*").forEach(el => {
    el.oncontextmenu = null;
    /*
    el.onmousedown = null;
    el.onmouseup = null;
    el.onpointerdown = null;
    el.onpointerup = null;
    */
  });
})();

javascript: (async () => {
    try {
        const s = String(window.getSelection());
        if (!s) {
            alert("No selection.");
            return;
        }
        const old = await navigator.clipboard.readText();
        /* let old = "";
        try {
            old = await navigator.clipboard.readText();
        } catch (e) {} */
        const txt = (old ? old + "\n" : "") + s;
        await navigator.clipboard.writeText(txt);
    } catch (e) {
        console.error(e);
        alert("Clipboard error: " + e);
    }
})();

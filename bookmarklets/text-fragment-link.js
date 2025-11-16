javascript: (function () {
/* https://developer.mozilla.org/en-US/docs/Web/URI/Reference/Fragment/Text_fragments */
    var s = window.getSelection().toString().trim();
    if (!s) {
        alert("Select some text first");
        return;
    }
    s = s.replace(/\s+/g, " ");
    var u = location.href.split("#")[0] + "#:~:text=" + encodeURIComponent(s);
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(u).then(
            function () {
                alert("Link copied to clipboard:\n" + u);
            },
            function () {
                prompt("Copy your link:", u);
            }
        );
    } else {
        prompt("Copy your link:", u);
    }
})();

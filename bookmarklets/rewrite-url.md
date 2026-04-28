## Prompt
Please write a bookmarklet (human readable, multiline, using /* */ style comments)  that rewrites the current url from this format:
https://ticket.orga.com/issue/13517

to this:
https://redmine.orgb/issues/13517

show an alert dialog when the url does not have this shape

javascript:(function () {
    /*
     * Rewrite ticket URLs to Redmine issue URLs.
     *
     * From:
     *   https://ticket.orga.com/issue/13517
     *
     * To:
     *   https://redmine.orgb/issues/13517
     */

    const match = window.location.href.match(
        /^https:\/\/ticket\.orga\.com\/issue\/([0-9]+)\/?$/
    );

    if (!match) {
        alert("This URL does not look like an orga.com ticket URL.");
        return;
    }

    const issueId = match[1];

    window.location.href = `https://redmine.orgb/issues/${issueId}`;
})();

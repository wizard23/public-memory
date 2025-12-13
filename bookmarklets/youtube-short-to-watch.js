javascript:(function () { try {
  var url = new URL(window.location.href);

  if (!/^(www\.|m\.)?youtube\.com$/.test(url.hostname)) {
    alert("This only works on youtube.com");
    return;
  }

  var shortsMatch = url.pathname.match(/^\/shorts\/([^/?#]+)/);
  if (!shortsMatch) {
    alert("Not a YouTube Shorts URL");
    return;
  }

  var videoId = shortsMatch[1];
  var watchUrl = new URL("https://www.youtube.com/watch");
  watchUrl.searchParams.set("v", videoId);

  window.location.href = watchUrl.toString();
} catch (err) {
  alert("Failed to convert Shorts URL:\n" + err);
}})();

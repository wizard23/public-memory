javascript:(() => {
  try {
    // Parse the current page URL
    const currentUrl = new URL(window.location.href);

    // Only run on YouTube
    if (!/^(www\.|m\.)?youtube\.com$/.test(currentUrl.hostname)) {
      alert("This bookmarklet only works on youtube.com");
      return;
    }

    // Check for /shorts/<videoId>
    const match = currentUrl.pathname.match(/^\/shorts\/([^/?#]+)/);
    if (!match) {
      alert("This is not a YouTube Shorts URL");
      return;
    }

    const videoId = match[1];

    // Build the normal watch URL
    const watchUrl = new URL("https://www.youtube.com/watch");
    watchUrl.searchParams.set("v", videoId);

    // Redirect to the normal YouTube player
    window.location.href = watchUrl.toString();

  } catch (error) {
    alert("Failed to transform YouTube Shorts URL:\n" + error);
  }
})();

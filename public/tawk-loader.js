// Loads tawk.to on every page, without waiting for cookie consent.
// Marked necessary so CookieYes auto-blocking does not stop the embed.
(function () {
  var PROPERTY = "https://embed.tawk.to/6af4235429fb483c3dd68f94/1k74qk0e3";
  var started = false;

  function bubbleOnly() {
    if (window.innerWidth > 700) return;
    document.querySelectorAll("body > div, body > iframe").forEach(function (node) {
      var mark = (node.id || "") + " " + (node.className || "") + " " + (node.title || "") + " " + (node.src || "");
      if (!/tawk/i.test(mark)) return;
      var box = node.getBoundingClientRect();
      var banner = box.width > 140 && box.height > 40 && box.height < 220;
      if (banner) node.style.setProperty("display", "none", "important");
    });
  }

  function load() {
    if (started) return;
    started = true;
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_API.customStyle = {
      zIndex: 40,
      visibility: {
        desktop: { position: "br", xOffset: 20, yOffset: 20 },
        mobile: { position: "br", xOffset: 12, yOffset: 12 },
      },
    };
    window.Tawk_LoadStart = new Date();
    if (document.body) {
      var watch = new MutationObserver(bubbleOnly);
      watch.observe(document.body, { childList: true, subtree: true });
      bubbleOnly();
    }
    var script = document.createElement("script");
    script.async = true;
    script.src = PROPERTY;
    script.charset = "UTF-8";
    script.setAttribute("data-cookieyes", "cookieyes-necessary");
    document.head.appendChild(script);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", load);
  else load();
})();

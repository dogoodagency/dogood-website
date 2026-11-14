// Loads tawk.to only after CookieYes reports functional consent.
// If CookieYes is missing or errors, the chat is never injected.
(function () {
  var PROPERTY = "https://embed.tawk.to/6af4235429fb483c3dd68f94/1k74qk0e3";
  var started = false;

  function functionalOn() {
    try {
      if (typeof window.getCkyConsent !== "function") return false;
      var consent = window.getCkyConsent();
      if (!consent || typeof consent !== "object") return false;
      var categories = consent.categories || consent;
      if (categories.functional === true || categories.functionality === true) return true;
      if (Array.isArray(categories)) {
        return categories.some(function (item) {
          var name = String(item && (item.name || item.category || item)).toLowerCase();
          var on = item && (item.accepted === true || item.status === true || item === true);
          return on && (name.indexOf("function") !== -1);
        });
      }
      return false;
    } catch (error) {
      return false;
    }
  }

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
    if (started || !functionalOn()) return;
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
    var watch = new MutationObserver(bubbleOnly);
    watch.observe(document.body, { childList: true, subtree: true });
    bubbleOnly();
    var script = document.createElement("script");
    script.async = true;
    script.src = PROPERTY;
    script.charset = "UTF-8";
    document.head.appendChild(script);
  }

  document.addEventListener("cookieyes_consent_update", load);
  window.addEventListener("load", load);
})();

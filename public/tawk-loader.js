// Loads tawk.to on every page, without waiting for cookie consent.
// Marked necessary so CookieYes auto-blocking does not stop the embed.
(function () {
  var PROPERTY = "https://embed.tawk.to/6af4235429fb483c3dd68f94/1k74qk0e3";
  var started = false;

  function markNecessary(node) {
    if (node && node.setAttribute) node.setAttribute("data-cookieyes", "cookieyes-necessary");
  }

  function watchSrc(node) {
    var proto = node.tagName === "IFRAME" ? HTMLIFrameElement.prototype : HTMLScriptElement.prototype;
    var desc = Object.getOwnPropertyDescriptor(proto, "src");
    if (desc && desc.set && desc.get) {
      Object.defineProperty(node, "src", {
        configurable: true,
        enumerable: true,
        get: function () {
          return desc.get.call(this);
        },
        set: function (value) {
          if (/tawk\.to/i.test(String(value))) markNecessary(this);
          desc.set.call(this, value);
        },
      });
    }
    var setAttr = node.setAttribute;
    node.setAttribute = function (name, value) {
      if (String(name).toLowerCase() === "src" && /tawk\.to/i.test(String(value))) markNecessary(this);
      return setAttr.call(this, name, value);
    };
  }

  var createElement = document.createElement.bind(document);
  document.createElement = function (name) {
    var node = createElement.apply(document, arguments);
    if (/^(script|iframe)$/i.test(String(name))) {
      try {
        watchSrc(node);
      } catch (error) {}
    }
    return node;
  };

  function bubbleOnly() {
    if (window.innerWidth > 700) return;
    document.querySelectorAll(".tawk-tooltip, #tawk-tooltip, iframe[title*='Attention']").forEach(function (node) {
      node.style.setProperty("display", "none", "important");
    });
  }

  function load() {
    if (started) return;
    started = true;
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_API.customStyle = {
      zIndex: 2147483000,
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

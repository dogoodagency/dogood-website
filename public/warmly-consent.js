// Check marketing consent on every page and when CookieYes records a new choice.
(function () {
  function hasAd() {
    var match = document.cookie.match(/(?:^|;\s*)cookieyes-consent=([^;]*)/);
    var consentCookie = match ? match[1] : "";
    try {
      consentCookie = decodeURIComponent(consentCookie);
    } catch (error) {}

    if (typeof window.getCkyConsent === "function") {
      try {
        var consent = window.getCkyConsent();
        if (consent && consent.categories && typeof consent.categories.advertisement === "boolean") {
          return consent.categories.advertisement;
        }
      } catch (error) {}
    }

    return /(?:^|,)advertisement:yes(?:,|$)/.test(consentCookie);
  }

  function load() {
    if (window.__dgWarmly) return;
    window.__dgWarmly = true;
    var s = document.createElement("script");
    s.id = "warmly-script-loader";
    s.src = "https://opps-widget.getwarmly.com/warmly.js?clientId=0cf35782a13b471ede6b1f7515edba55";
    s.defer = true;
    document.head.appendChild(s);
  }

  document.addEventListener("cookieyes_consent_update", function (event) {
    var accepted = event.detail && event.detail.accepted;
    if (Array.isArray(accepted) && accepted.indexOf("advertisement") !== -1) load();
  });

  if (hasAd()) load();
})();

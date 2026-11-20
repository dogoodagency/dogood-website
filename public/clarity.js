// Microsoft Clarity (Seb, 20 Nov 2026). Project ID zgclthwg5f.
// Loaded by Base.astro as type="text/plain" with data-cookieyes="cookieyes-analytics", so CookieYes only runs it
// after the visitor accepts analytics cookies. Live domain only. Because it only ever runs after analytics consent,
// it tells Clarity so (Consent API v2): analytics granted, ads denied. Clarity requires this signal for visitors
// from the EEA, UK and Switzerland.
(function () {
  var ID = "zgclthwg5f";
  if (location.hostname !== "www.dogoodagency.co" && location.hostname !== "dogoodagency.co") return;
  if (window.__dgClarity) return;
  window.__dgClarity = true;
  window.clarity =
    window.clarity ||
    function () {
      (window.clarity.q = window.clarity.q || []).push(arguments);
    };
  window.clarity("consentv2", { ad_Storage: "denied", analytics_Storage: "granted" });
  var s = document.createElement("script");
  s.async = true;
  s.src = "https://www.clarity.ms/tag/" + ID;
  document.head.appendChild(s);
})();

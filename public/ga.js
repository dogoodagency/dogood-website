// Google Analytics 4 (Seb, 20 Nov 2026). Measurement ID G-35DQF3LDYG.
// Loaded by Base.astro as type="text/plain" with data-cookieyes="cookieyes-analytics", so CookieYes only runs
// this file after the visitor accepts analytics cookies. It also only runs on the live domain, so preview and
// local visits never reach the GA4 property that the live site reports into.
(function () {
  var ID = "G-35DQF3LDYG";
  if (location.hostname !== "www.dogoodagency.co" && location.hostname !== "dogoodagency.co") return;
  if (window.__dgGa) return;
  window.__dgGa = true;
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", ID, { anonymize_ip: true });
  var s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + ID;
  document.head.appendChild(s);
})();

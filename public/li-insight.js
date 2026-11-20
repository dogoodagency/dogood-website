// LinkedIn Insight Tag (Seb, 20 Nov 2026). Partner ID 10160922 (DoGood Agency ad account).
// Loaded by Base.astro as type="text/plain" with data-cookieyes="cookieyes-advertisement", so CookieYes only
// runs it after the visitor accepts advertisement cookies. Live domain only, so preview visits are not counted.
(function () {
  var PARTNER_ID = "10160922";
  if (location.hostname !== "www.dogoodagency.co" && location.hostname !== "dogoodagency.co") return;
  if (window.__dgLi) return;
  window.__dgLi = true;
  window._linkedin_partner_id = PARTNER_ID;
  window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
  window._linkedin_data_partner_ids.push(PARTNER_ID);
  if (!window.lintrk) {
    window.lintrk = function (a, b) {
      window.lintrk.q.push([a, b]);
    };
    window.lintrk.q = [];
  }
  var s = document.createElement("script");
  s.type = "text/javascript";
  s.async = true;
  s.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
  document.head.appendChild(s);
})();

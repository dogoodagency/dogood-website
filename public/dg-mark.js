// G mark animation in the nav (20 Nov 2026): plays on the first page of a visit and again whenever the page
// is refreshed; moving between pages does not replay it. Loaded as an external file because the site's
// Content Security Policy blocks inline scripts. CSS: end of src/styles/site-rules.css (dg-mark-lock).
try {
  var nav = performance.getEntriesByType && performance.getEntriesByType("navigation")[0];
  var isReload = nav ? nav.type === "reload" : (performance.navigation && performance.navigation.type === 1);
  if (isReload || !sessionStorage.getItem("dg-mark-played")) {
    document.documentElement.classList.add("dg-mark-play");
    sessionStorage.setItem("dg-mark-played", "1");
  }
} catch (e) {
  document.documentElement.classList.add("dg-mark-play");
}

// G mark animation in the nav (20 Nov 2026): play once per visit. Loaded as an external file because the
// site's Content Security Policy blocks inline scripts. CSS: end of src/styles/site-rules.css (dg-mark-lock).
try {
  if (!sessionStorage.getItem("dg-mark-played")) {
    document.documentElement.classList.add("dg-mark-play");
    sessionStorage.setItem("dg-mark-played", "1");
  }
} catch (e) {}

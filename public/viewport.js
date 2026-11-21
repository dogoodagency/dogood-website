/* Tablet layout (Seb, 21 Nov 2026). The site has two finished layouts: phone (under 600px) and desktop
   (1366px and up). Tablets get one of them, scaled to fit, instead of an in-between layout:
   - portrait tablets (short side 600-1023px) lay the page out at 599px, the phone layout;
   - landscape tablets narrower than 1366px lay it out at 1366px, the desktop layout.
   Phones and computers are not touched. Runs before the page is drawn and again on rotation. */
(function () {
  var meta = document.querySelector('meta[name="viewport"]');
  if (!meta || !window.matchMedia) return;
  var coarse = window.matchMedia("(pointer: coarse)").matches || navigator.maxTouchPoints > 1;
  function apply() {
    var s = window.screen;
    var shortSide = Math.min(s.width, s.height);
    var longSide = Math.max(s.width, s.height);
    var portrait = window.matchMedia("(orientation: portrait)").matches;
    var content = "width=device-width, initial-scale=1";
    if (coarse && shortSide >= 600 && shortSide <= 1100) {
      if (portrait && shortSide <= 1023) content = "width=599";
      else if (!portrait && longSide < 1366) content = "width=1366";
    }
    if (meta.getAttribute("content") !== content) meta.setAttribute("content", content);
    document.documentElement.classList.toggle("is-tablet", content !== "width=device-width, initial-scale=1");
  }
  apply();
  window.addEventListener("orientationchange", function () { setTimeout(apply, 50); });
  window.matchMedia("(orientation: portrait)").addEventListener?.("change", apply);
})();

/* Seb round 2, 22 Nov 2026: use the device viewport at every size.
   Keep the first touch tap from navigating after pointerenter opens a desktop menu. */
(function () {
  var firstTap = null;
  document.addEventListener("pointerover", function (event) {
    firstTap = null;
    if (event.pointerType !== "touch" || !(event.target instanceof Element)) return;
    var link = event.target.closest(".nav-item.has-menu > a[aria-controls]");
    var list = link && link.closest(".nav-links");
    firstTap = list && getComputedStyle(list).display !== "none" && link.getAttribute("aria-expanded") !== "true"
      ? link : null;
  }, true);
  document.addEventListener("click", function (event) {
    if (firstTap && event.target instanceof Node && firstTap.contains(event.target)) event.preventDefault();
    firstTap = null;
  }, true);
  document.addEventListener("pointercancel", function () { firstTap = null; }, true);
})();

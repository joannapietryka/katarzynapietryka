(function () {
  var wraps = document.querySelectorAll(".nav-link-wrap, .nav-link-wrap-copy");
  if (!wraps.length) return;

  function resetWrap(wrap) {
    var primary = wrap.querySelector("._1, ._3");
    var secondary = wrap.querySelector("._2, ._4");
    var labels = wrap.querySelectorAll(".button-text-small, .button-text-small-copy");

    labels.forEach(function (el) {
      el.style.removeProperty("opacity");
      el.style.removeProperty("transform");
    });

    if (primary) primary.style.opacity = "1";
    if (secondary) secondary.style.opacity = "0";

    wrap.style.removeProperty("transform");
  }

  wraps.forEach(function (wrap) {
    wrap.addEventListener("mouseleave", function () {
      window.setTimeout(function () {
        resetWrap(wrap);
      }, 900);
    });
  });
})();

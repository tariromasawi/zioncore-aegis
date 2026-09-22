/* Extra loader only. Does not replace SQIE / Aegis engines. */
(function(){
  if (document.getElementById("zc-rm-loader")) return;
  var s = document.createElement("script");
  s.id = "zc-rm-loader";
  s.src = "js/ritual-matrix.js";
  document.documentElement.appendChild(s);
})();

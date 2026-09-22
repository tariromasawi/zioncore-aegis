/* Additional loader. Does not replace existing ZionCore scripts. */
(function(){
  if (document.getElementById("zc-ritual-frame")) return;
  var frame = document.createElement("iframe");
  frame.id = "zc-ritual-frame";
  frame.title = "Living Protection Matrix";
  frame.src = "ritual.html";
  frame.style.cssText = "display:block;width:100%;min-height:1700px;border:0;background:#020405;margin:0";
  var host = document.querySelector("main") || document.body;
  host.appendChild(frame);
})();

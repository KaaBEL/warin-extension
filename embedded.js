//@ts-check
"use strict";
/** @readonly */
var version_embedded_js = "0.1.2";
var CE = document.createElement.bind(document);
/** @param {HTMLElement} e @param {string} d */
function TXT(e, d) {
  e.appendChild(document.createTextNode(d));
  return e;
}
var html = function () {
  var el = document.head.parentNode;
  return el instanceof HTMLHtmlElement ? el : CE("html");
}();
html.style.colorScheme = "dark", "end";
html.lang = "en";

document.title = "War In Space (embedded)";
document.head.appendChild(TXT(CE("style"), "@font-face{font-family: 'xirod';\
src: url('http://warin.space/xirod.ttf');}body,html{background-color: #000;c\
olor: #aaa;color-scheme:dark;/*ckground-image: url('http://warin.space/blueb\
ackground.png'*/}body,div,input,button,h2,h3,p{font-family:xirod;padding-top\
: 0;padding-bottom: 0;}span{color: #888;font-size: 12px;}h2,h3,p,span{paddin\
g-left: 16px;line-height: 20px;}button,input[type=\"button\"]{color: #000;cu\
rsor: pointer;}/*{column-width: 512px;}*/#popup{position: fixed;top: 1em;rig\
ht: 1em;transition: 500ms;}#popup:hover{opacity:0.3;}.warn{color: #c8990c;ba\
ckground-color: #c8990c44;}.nocursor{cursor:none;}body.contr,body.contr span\
:not([class]){color: #fff;}body.contr .warn{color: #fb0;}#inp.hidden{width: \
0;height: 0;border: none;position: sticky;z-index: -1;}body.noimage{backgrou\
nd-image: none;background-color: rgb(0, 0, 0);}.none{display: none;}p.end{he\
ight: 150px;}input[max=\"150\"]{width: 238px;}input[max=\"100\"]{width: 164p\
x;}"));
document.body.style.margin = "0 0 0 25px";

while (document.body.firstChild)
  document.body.removeChild(document.body.firstChild);
var iframe = document.createElement("iframe");
iframe.src = "http://warin.space/";
iframe.name = "embedded";
iframe.title = "War In Space (iframe)";
iframe.style.border = "none";
var div = document.body.appendChild(CE("div"));
div.appendChild(iframe);

var p = document.body.appendChild(CE("p"));
p.appendChild(TXT(CE("span"), "width: "));
var inp = p.appendChild(CE("input"));
div.style.width = iframe.style.width = inp.value = "800px";
inp.oninput = function () {
  if (this instanceof HTMLInputElement)
    div.style.width = iframe.style.width = this.value;
};
p.appendChild(CE("br"));
p.appendChild(TXT(CE("span"), "height: "));
var inp = p.appendChild(CE("input"));
iframe.style.height = inp.value = "800px";
inp.oninput = function () {
  if (this instanceof HTMLInputElement)
    iframe.style.height = this.value;
};
p.appendChild(CE("br"));
p.appendChild(TXT(CE("span"), "margin: "));
var inp = p.appendChild(CE("input"));
div.style.margin = inp.value = "100px auto 200px auto";
inp.oninput = function () {
  if (this instanceof HTMLInputElement)
    div.style.margin = this.value;
};
p.appendChild(CE("br"));

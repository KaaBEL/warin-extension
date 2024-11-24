var html = document.head.parentNode;
html.style.colorScheme = "dark", "end";
html.setAttribute("lang", "en");
function CE(e) {
  return document.createElement(e);
}
function TXT(e, d) {
  e.appendChild(document.createTextNode(d));
  return e;
}
function QS(s) {
  return document.querySelector(s);
}
function addAttributes(el, attrs, sep) {
  for (var i = 0, ar = attrs.split(sep || " "); i < ar.length; i += 2)
    el.setAttribute(ar[i], ar[i + 1]);
}
var s = "http://www.w3.org/2000/svg",
  svg = document.createElementNS(s, "svg");
svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink",
  "http://www.w3.org/1999/xlink");
addAttributes(svg, "width 261.44 height 261.44 viewBox 0,0,261.44,261.44");
addAttributes(svg.appendChild(document.createElementNS(s, "g")), "data-paper\
-data+{&quot;isPaintingLayer&quot;:true}+fill-rule+nonzero+stroke-linejoin+m\
iter+stroke-miterlimit+10+stroke-dasharray++stroke-dashoffset+0+style+mix-bl\
end-mode: normal;", "+");
var clr = {
  0: "none",
  A: "#2a2003",
  B: "#9e7a0a",
  C: "#dca90d",
  D: "#000000",
  E: "#291f03"
}, wdt = [0, 1.5, 2, 2.5, 4.5],
  cap = ["butt", "round"];
"AB100M129.11986,43.3953v-30.64535h3.19614v30.64535zM120.60357,70.84814v-30.\
64535l1.85166,-2.42006v33.06541zM140.83229,70.84814v-30.64535l-1.85166,-2.42\
006v33.06541z\nA0000M14.79805,203.34904l5.19331,-42.98903l88.86324,-74.72591\
l-3.32393,21.11412l-69.07731,60.24959l-8.69982,23.00259l31.55207,9.80367l11.\
31143,-14.95575l24.76429,-0.20993l-1.00587,18.98738l-11.73738,0.56586l-12.44\
475,15.60288zM246.63781,203.34904l-5.19331,-42.98903l-88.86324,-74.72591l3.3\
2393,21.11412l69.07731,60.24959l8.69982,23.00259l-31.55207,9.80367l-11.31143\
,-14.95575l-24.76429,-0.20993l1.00587,18.98738l11.73738,0.56586l12.44475,15.\
60288z\nD0000M28.06695,190.93993l8.94403,-24.23543l68.37853,-61.16561l-2.264\
5,79.36735l-32.17135,-0.04336l-10.47001,15.86066zM233.36890,190.93993l-8.944\
03,-24.23543l-68.37853,-61.16561l2.2645,79.36735l32.17135,-0.04336l10.47001,\
15.86066z\nCB300M63.65264,164.49446v-40.6809l20.77322,-16.73399l-0.28852,51.\
64455l7.84727,5.6656l20.3328,42.15762l-5.71123,-2.97854l-16.80083,-0.43126l0\
.20513,-11.25994zM3.25737,199.3098l15.00288,-37.50721l3.75072,-2.88517v31.15\
984l23.13867,22.11108zM197.78321,164.49446v-40.6809l-20.77322,-16.73399l0.28\
852,51.64455l-7.84727,5.6656l-20.3328,42.15762l5.71123,-2.97854l16.80083,-0.\
43126l-0.20513,-11.25994zM258.17849,199.3098l-15.00288,-37.50721l-3.75072,-2\
.88517v31.15984l-23.13867,22.11108z\n0B300M27.9717,190.84472l8.94403,-24.235\
43l68.37853,-61.16561M27.9717,190.84472l8.94403,-24.23543l68.37853,-61.16561\
l-2.2645,79.36735l-32.17135,-0.04336l-10.47001,15.86066zM233.46416,190.84472\
l-8.94403,-24.23543l-68.37853,-61.16561M233.46416,190.84472l-8.94403,-24.235\
43l-68.37853,-61.16561l2.2645,79.36735l32.17135,-0.04336l10.47001,15.86066z\
\n0B410M130.71793,214.84393L106.7595,203.48415l-23.73276,0.00647l-12.7323,16\
.45898l-67.22999,-20.58753l16.32439,-37.70065l99.07545,-84.1421M130.71793,21\
4.84393L154.67636,203.48415l23.73276,0.00647l12.7323,16.45898l67.22999,-20.5\
8753l-16.32439,-37.70065l-99.07545,-84.1421\nDB411M130.71793,170.99755L134.6\
2415,170.99755l-43.29657,-8.18476l23.52532,-100.28682l15.59254,-20.43912H130\
.71793M130.71793,170.99755L126.81171,170.99755l43.29657,-8.18476l-23.52532,-\
100.28682l-15.59254,-20.43912H130.71793\nEB310M130.71793,213.48402L110.5572,\
205.01349l-19.84304,-41.85579l29.54902,-20.0818l7.10126,-34.57867l3.07372,-2\
.8715H130.71793M130.71793,213.48402L150.87866,205.01349l19.84304,-41.85579l-\
29.54902,-20.0818l-7.10126,-34.57867l-3.07372,-2.8715H130.71793\nDB110M121.1\
5704,165.10154v-11.38216h19.55809v11.38216zM122.56084,231.75238l-4.24005,-0.\
10002l0.06124,-7.0274l4.0185,-0.08663M122.59116,238.19519l-4.24005,-0.04223l\
0.06124,-2.96712l4.0185,-0.03658M128.71335,238.54613l-0.02328,9.44222l-4.216\
77,-0.02603l0.06124,-9.37961M122.50018,209.86505l-4.24005,-0.12858l0.06124,-\
9.03393l4.0185,-0.11137M122.53051,196.9343l-4.24005,-0.11558l0.06124,-11.326\
79l4.0185,-0.10011M122.57755,220.25651l-4.24005,-0.11883l0.06124,-8.34889l4.\
0185,-0.10293M138.87502,231.75238l4.24005,-0.10002l-0.06124,-7.0274l-4.0185,\
-0.08663M138.8447,238.19519l4.24005,-0.04223l-0.06124,-2.96712l-4.0185,-0.03\
658M132.72251,238.54613l0.02328,9.44222l4.21677,-0.02603l-0.06124,-9.37961M1\
38.93567,209.86505l4.24005,-0.12858l-0.06124,-9.03393l-4.0185,-0.11137M138.9\
0535,196.9343l4.24005,-0.11558l-0.06124,-11.32679l-4.0185,-0.10011M138.8583,\
220.25651l4.24005,-0.11883l-0.06124,-8.34889l-4.0185,-0.10293\nDB300M130.717\
93,82.27178l-3.80582,-2.68117l-5.03302,-18.15963l8.81476,-11.71092L130.71793\
,49.72l8.81476,11.710923l-5.03302,18.15963zM103.26451,142.81815l15.55028,-71\
.65954l2.565,8.17593l-10.5806,57.71238zM158.17134,142.81815l-15.55028,-71.65\
954l-2.565,8.17593l10.5806,57.71238z\nDB210M117.79048,155.00187v-3.84749h25.\
97057v3.84749zM118.43174,159.00967l25.32932,-0.16031M116.92470,185.14056v-21\
.32152H144.51116v21.32152L137.93836,185.14056v54.18552L130.71793,241.457748l\
-7.22043,-2.131669v-54.18552z".split("\n").forEach(function (e) {
  path = svg.firstChild.appendChild(document.createElementNS(s, "path"));
  path.setAttribute("d", e.slice(5));
  path.setAttribute("fill", clr[e[0]]);
  path.setAttribute("stroke", clr[e[1]]);
  path.setAttribute("stroke-width", wdt[e[2]]);
  path.setAttribute("stroke-linecap", cap[e[3]]);
  path.setAttribute("stroke-linejoin", cap[e[4]]);
});
!function (e) {
  var d = document.createElement("div"), a = CE("a"), b = d, c = d;
  d.style.margin = "270px 10px 0 69%";
  d.style.position = "fixed";
  d.style.fontFamily = "xirod";
  d.appendChild(a).id = "warin-extension";
  a.onclick = extensionPage;
  a.style.cursor = "pointer";
  (c = a.appendChild(CE("div"))).style.marginRight = "10px";
  c.style.float = "left";
  svg.style.width = c.appendChild(svg).style.height = "64px";
  a.appendChild(TXT(e, "loading...")).id = "extinf";
  e.style.color = "#da1";
  setTimeout(function () {
    e.id ? e.firstChild.data = "Loading Error" : 0;
    e.id ? e.style.color = "red" : 0;
  }, 1000);
  a.appendChild(CE("br"));
  TXT(a, "extension by kaabel");
  QS("#content").appendChild(b);
}(CE("span"));
var setgs = {
    noRld: 1,
    onlyK: "Ctrl+R",
    wBlur: 1,
    wBlnk: 1,
    stpRd: 0,
    tinys: 1,
    siglK: "Ctrl+CAPSLOCK",
    slshK: "Shift+CAPSLOCK",
    scrSW: 144E1,
    scrSH: 1440.,
    scrPS: (1E4/24)|16,
    storg: 0,
    uNTag: "",
    scrSh: 1,
    scrSE: 1,
    scrES: 1,
    scrEI: 1,
    scrDw: 1,
    sgsBg: 0,
    stgsV: 0,
    hidCG: 1,
    hidCE: 1,
    cable: 1,
    contr: 0,
    emtsK: ["", "D", "Shift+D"],
    emtsE: [-1, 0, 0],
    volSf: 1,
    volMu: 1,
    musTr: 0,
    lMFPS: 0,
    scrSC: 0,
    scrRR: 0,
    rCOUG: 0,
    tests: 0
  },
  defaultSettings = setgs,
  tmp = {
    0: 0,
    blink: 1,
    1: 0,
    volum: 1,
  },
  putToPopup = function () {},
  settings = function (s, p, o, e) {
    setgs = JSON.parse(JSON.stringify(setgs));
    if (s = localStorage.getItem("settings"))
      for (p in (o = JSON.parse(s)))
        setgs[p] = o[p];
    // remove as early as possibble
    console.log(setgs.rCOUG && (e = QS(".OurGames")) && QS("#content").removeChild(e));
    return function (ar, mesg) {
      s && mesg.setAttribute("datachanged", "");
      s && mesg.setAttribute("data", s);
      for (var p in defaultSettings)
        ar.push(p + ": " + JSON.stringify(defaultSettings[p]));
      for (var p in tmp)
        ar.push(p + ": " + JSON.stringify(tmp[p]));
      return "{\n    " + ar.join(",\n      ") + "\n    }";
    };
  }();
function dws() {
  var months = [30, 27, 30, 29, 30, 29, 30, 30, 29, 30, 29, 30],
    ch = QS("#warin-screenshots").childNodes,
    to = doc.getElementById("screenshots") || doc.body;
  to.style.display = "";
  function timeStr() {
    var i = 0, n = Number(regRes[3]), t = n / 60 | 0, s = t + ":" + n % 60;
    s = (regRes[2].charCodeAt() - 65) + ":" + s;
    n = Number(regRes[1]);
    t = Math.ceil(n % 365.25);
    if (t === 365 && !(n / 365.25 & 2))
      return Math.floor(n / 365.25 + 1971) + "-1-1 " + s;
    t -= n % 1461 > 788;
    while (t > months[i])
      t -= months[i++] + 1;
    s = (t + 1 + (n % 1461 === 789)) + " " + s
    s = ++i + "-" + s;
    return (n / 365.25 + 1970 | 0) + "-" + s;
  }
  function copying() {
    var inp = doc.getElementById("inp") || {focus: function () {}};
    inp.value = this.title;
    inp.focus();
  }
  for (var i = ch.length, regRes = ""; i-- > 0;) {
    if (doc.querySelector("img[src=\"" + ch[i].href + "\"]"))
      continue;
    var im = CE("img"), e0 = CE("div"), e1 = CE("span"), st = e1.style;
    im.style.width = e0.style.width = "100%";
    e0.appendChild(im).src = ch[i].href;
    im.title = ch[i].download;
    im.onclick = copying;
    regRes = /([0-9]+)([A-Y])([0-9]+)/g.exec(ch[i].download);
    st.padding = "5px";
    st.position = "absolute";
    st.left = 0;
    st.backgroundColor = "#0008";
    st.color = "#0c0";
    e0.appendChild(TXT(e1, regRes ? timeStr() : "time undetected"));
    to.id ? to.appendChild(e0) : to.insertBefore(e0, to.childNodes[2]);
  }
}
var lsUpd = 0, win = window, doc = document, pop = win, opt = {};
function updateSetting(s, v) {
  s ? setgs[s] = v : 0;
  var p = "", mesg = QS("#warin-screenshots"), chgd = {};
  for (p in defaultSettings)
    if (setgs[p] !== defaultSettings[p])
     chgd[p] = setgs[p];
  if (setgs.storg) {
    clearTimeout(lsUpd);
    s = JSON.stringify(chgd);
    lsUpd = setTimeout(function () {
      localStorage.setItem("settings", s);
    }, 1000);
  }
  for (p in tmp)
    chgd[p] = tmp[p];
  mesg.setAttribute("data", JSON.stringify(chgd));
  mesg.setAttribute("datachanged", "");
}
function blink(b) {
  tmp[0]++;
  updateSetting("", tmp["blink"] = b);
}
setgs.tinys ? QS("#MusicSelection").onchange = 
  function () {
    updateSetting("musTr", this.value);
  } : 0;
function updater(s) {
  function prcs(v) {
    return v;
  }
  arguments[2][arguments[1] === "checkbox" ? "checked" : "value"] =
    typeof s == "string" ?
      (typeof arguments[3] == "function" ?
        prcs = arguments[3] :
        1) && setgs[s] :
      arguments[3];
  return typeof s == "string" ? arguments[1] === "checkbox" ?
    function (e) {
      return updateSetting(s, prcs(+e.target.checked));
    } :
    function (e) {
      return updateSetting(s, prcs(e.target.value));
    } : s;
}
function extensionPage() {
  win !== window && win && win.close(win.onbeforeunload = null);
  if (!(pop = win = window.open()))
    return console.log("window.open() returned:", win);
  var D = doc = win.document, tag = document.createTextNode("");
  window.onbeforeunload = function () {
    win && win.close();
  };
  win.onbeforeunload = function () {
    setTimeout(window.onbeforeunload);
  };
  D.head.appendChild(TXT(CE("title"), "Warin Extension"));
  var el = D.head.appendChild(CE("link"));
  el.rel = "icon";
  el.type = "image/png";
  el.href = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8\
/9hAAAAAXNSR0IArs4c6QAAAnRJREFUOE+dk21IU1Ecxp9z793ddGqmpIj4wUZYvkQhliKVVETBv\
oQmShlYDWpZopmYUU0pk4YaBWoYCWZqHwxWgvQiWIKWBAoTa74WZuRLOdPl7t3uuTFFqXQSno/ne\
f6/8+c5PASrnNT9XJ5Lrn/lLHZnI6sBEhMWAI2tawBUG3x9a57NXiGAnLbL63r6bat1pcfcblCoU\
55u65YqHBKccRGc/uZDe9V/A+ry1YHVL4VL0zY5c3Eo54ikTC6A+C9k2Qb38j2DpqzyxSetYtaie\
etGtinAjzFtCmWb0gts3/6E/AUw3VAHzjnly6WPhXMrrZuRyN8RJKZIV2QbW9SXAJuD4R+9RVEYv\
43Vv+ulMA9I4LgFm1pFYLPLyE5R4k23VG75Ilxt6cR3lzYPCAuDNyeyJaFBRKeNV8BYL8DfZ3m+t\
/QqtJslNHc4qsYF6YLFghkSHQ3FzDh7f8JKj0dpGBj1Hqh9IaKrT0LwBgbDXykmp2WcTeRxIIZDS\
YOICauMneFsTSBjP0Uqcz3qSuvF1L4RCeu9CU5qeewIZ9Hy3omBUYqPnykStnM4vJtDa5cTtc8d8\
FETnNAq4OcprCOdVV6SeVBiih8JCAlg8GNahjaeg68XQaVJxOwvIDuFx08bYGpzIDyUgXmQwpihg\
iDQFtLf4BM7OSWz5U/tMTyLso4e+nZPFJMVoeFIbsVcWqSGPXPsIB/3od+J12ZalrxXETs0So9mJ\
qmGPo05FkJ0hWnMgWe/hQ9p7xVtPYMYcd0xDPIohQxgvkyRGoQk7ePVfkpx+PxdCEu/4K5QBTrlI\
UjAtQdC85raaDCAcQ0aDKDuAL8BqE/vjLxvx+IAAAAASUVORK5CYII=";
  el = D.head.appendChild(TXT(CE("style"), "@font-face{font-family: 'xirod';\
src: url('http://warin.space/xirod.ttf');}body,html{background-color: #000;c\
olor: #aaa;color-scheme:dark;background-image: url('http://warin.space/blueb\
ackground.png');}body,div,input,button,h2,h3,p{font-family:xirod;padding-top\
: 0;padding-bottom: 0;}span{color: #888;font-size: 12px;}h2,h3,p,span{paddin\
g-left: 16px;line-height: 20px;}button,input[type=\"button\"]{color: #000;cu\
rsor: pointer;}body{column-width: 512px;}#popup{position: fixed;top: 1em;rig\
ht: 1em;transition: 500ms;}#popup:hover{opacity:0.3;}.warn{color: #c8990c;ba\
ckground-color: #c8990c44;}.nocursor{cursor:none;}body.contr,body.contr span\
:not([class]){color: #fff;}body.contr .warn{color: #fb0;}#inp.hidden{width: \
0;height: 0;border: none;position: sticky;z-index: -1;}body.noimage{backgrou\
nd-image: none;background-color: rgb(0, 0, 0);}.none{display: none;}p.end{he\
ight: 150px;}input[max=\"150\"]{width: 238px;}input[max=\"100\"]{width: 164p\
x;}"));
  function appendSetting(type, value, meth, name, desc, opt) {
    !(opt instanceof Object) && (opt = {});
    var p = (opt.p || doc.body).appendChild(CE("p"));
    opt.p || (opt.p = p);
    p.appendChild(TXT(CE("div"), name));
    var inp = opt.inp = type ? p.appendChild(CE("input")) : p;
    inp.oninput = updater(meth, (inp.type = type), inp, value);
    type === "text" && inp.setAttribute("maxLenght", "255");
    opt.el && p.appendChild(opt.el);
    p.appendChild(TXT(el = CE("span"), desc));
  }
  function setKeysCode(s, o) {
    o.inp.value = setgs[s];
    o.inp.onkeydown = function (e) {
      e.key === "Tab" || e.preventDefault() && e.target.value ?
        0 : e.target.value =
        (e.key === "Backspace" || e.key === "Delete") && e.target.value ?
        "" : (e.ctrlKey ? "Ctrl+" : "") + (e.altKey ? "Alt+" : "") +
        (e.shiftKey ? "Shift+" : "") + (e.key || "").toUpperCase();
      o.inp.oninput(e);
    };
  }
  function clanTag(v) {
    tag.data = " " + (v && "[" + v + "] ") +
      (localStorage.getItem("username") || "hull");
    return v;
  }
  function setVolumeRange(s, o) {
    o ? o.el.data = " " + (setgs[s] * 100) + "%" :
      o = opt = {inp: CE("input")};
    o.inp.min = 0;
    o.inp.max = s === "volSf" ? 150 : 100;
    o.inp.value = Math.sqrt(setgs[s] * 1e4);
    o = {el: o.el = D.createTextNode("")};
    return function (v) {
      o.el.data = " " + (v = v * v / Number(100)) + "%";
      tmp[1]++;
      return v / 100;
    };
  }
  var tn = TXT(D.body, "window: ").appendChild(D.createTextNode(innerWidth +
    "px * " + innerHeight + "px"));
  window.onresize = function () {
    tn.data = innerWidth + "px * " + innerHeight + "px";
  };

  opt = {p: D.body.appendChild(CE("div")), el: CE("input")};
  opt.p.id = "screenshots";
  opt.p.className = "none";
  opt.p.appendChild(TXT(CE("h2"), "Screenshots"));

  opt.p.appendChild(opt.el).id = "inp";
  opt.el.oncopy = function (e) {
    e.clipboardData.setData("text/plain", this.value);
  };
  opt.el.className = "hidden";
  appendSetting("button", "Get Images", function () {}, "Get Images", "Shows\
 all collected screenshots here. This section is missing features for adding\
 backgruond to the screenshoted images, waiting for your feedback :D", opt);
  opt.inp.onclick = dws;

  /** @TODO add images to canvas, adding backgrounds */

  D.body.appendChild(TXT(CE("h2"), "Features"));

  appendSetting("checkbox", 0, "scrSh", "Ingame Screenshotting", "Renders a \
game frame(s) in specified size independent of size of window.", opt = {});
  appendSetting("checkbox", 0, "scrDw", "Auto Download", "After the image is\
 captured, it is added to images list. Because the game has long lag when im\
age is downloaded imediately the image list is checked evrery 3 seconds for \
next image. I recommend not closing downloads bar if one rolls up at bottom.\
 When disabled, they must be downloaded from here: ", opt);
  opt.p.lastChild.appendChild(TXT(CE("button"), "get images")).onclick = dws;
  appendSetting("text", 0, "", "Shortcut: single", "Keyboard shortcut for ta\
king 1 screenshot. Any keyboard shortcut used will prevent browser default b\
ehaviour for used shortcut.", opt);
  setKeysCode("siglK", opt);
  appendSetting("text", 0, "", "Shortcut: slideshow", "Keyboard shortcut for\
 turning on mass screenshoting. Use single or slideshow shortcut to stop scr\
eenshoting.", opt);
  setKeysCode("slshK", opt);
  opt.el = D.createTextNode(" px");
  appendSetting("number", setgs.scrSW, function (e) {
    updateSetting("scrSW", Math.min(Math.abs(e.target.value | 0), 4096));
  }, "Screenshot Width", "Positive integer, maximum is 4096px.", opt);
  opt.el = D.createTextNode(" px");
  appendSetting("number", setgs.scrSH, function (e) {
    updateSetting("scrSH", Math.min(Math.abs(e.target.value | 0), 4096));
  }, "Screenshot Height", "Positive integer, maximum is 4096px.", opt);
  opt.el = null;
  appendSetting("number", Number, "scrPS", "Screenshots Per Seconds", "Speci\
fies amount of screenshots taken each second while in slideshow mode.", opt);
  appendSetting("checkbox", 0, "scrSC", "Second canvas", "The frame is drawn\
 not on screen but it's drawn on not visible place, a second canvas. These c\
anvases are added directly into screenshots list, so they are first converte\
d into images and later downloaded, which takes 3 seconds more.", opt);
  appendSetting("checkbox", 0, "scrRR", "Repeat rendering", "After the game \
gets screenshoted, it draws new frame in usual size to be shown instead. Thi\
s and \"Second canvas\" setting are used to hide the weird flash.", opt);

  appendSetting("checkbox", 0, "scrSE", "Endscreen Screenshot", "Every 3 sec\
onds interval for auto downloading does not only checks for new images, but \
also for gamestats at the end of game. Can be disabled apart from manual scr\
eenshots.", opt = {});
  appendSetting("checkbox", 0, "scrES", "Compact Endscreen", "Purpouse of en\
dscreen is mostly to capture game stats, leaderboard, etc. To save disk spac\
e, images are just enough big to fit the stats. If disabled manual screensho\
t size will be used instead.", opt);
  appendSetting("checkbox", 0, "scrEI", "Additional Info", "It might be usef\
ul to know what world and ship were you playing. Questionmarked ship type me\
ans screenshot wasn't captured ingame and the ship type is incorrect.", opt);

  appendSetting("checkbox", function (v) {
    v || localStorage.removeItem("settings");
    return v;
  }, "storg", "Local Storage", "Enables use of browser feature to store data\
 localy on machine and remembers changes in settings (adds up to warin data)\
. Must be confirmed by enabling.", opt = {});
  opt.p.className = "warn";

  appendSetting("range", setVolumeRange(), "volSf", "Soundeffects Volume", "\
Changes volume of sounds.", opt);
  appendSetting("range", setVolumeRange("volSf", opt), "volMu", "Music volum\
e", "Changes volume of background music.", opt);
  setVolumeRange("volMu", opt);

  appendSetting("checkbox", 0, "noRld", "Ask For Unload", "Before leaving or\
 reloading page give confirm dialog. Useful to prevent leaving game by missc\
lick or key mispress.", opt = {});
  appendSetting("text", 0, "", "Shortcut: reload", "1 keyboard shortcut exce\
ption for fast page reload with keyboard.", opt);
  setKeysCode("onlyK", opt);

  appendSetting("text", clanTag, "uNTag", "Clan Tag", "A tag within square b\
rackets is prepended to username after logging in.", opt = {el: tag});
  clanTag(setgs.uNTag);

  appendSetting("checkbox", 0, "wBlur", "Foucusout Warning", "When different\
 window is active or it was clicked and key strokes aren't captured by warin\
 it makes it more obvious to click back. It doesn't watch for leaving game a\
fter inactivating window and can be a reminder you were playing.", opt = {});
  appendSetting("checkbox", 0, "wBlnk", "Warning blinking", "Warning text is\
 blinking by default and disabled it's less disturbing.", opt);

  /** @TODO debug show mouse */
  0 &&
  appendSetting("checkbox", 0, "hidCG", "Hide Cursor", "Hides cursor/mouse p\
ointer for game recording or just for fun.", opt = {})
  &&
  appendSetting("checkbox", 0, "hidCE", "Ship Upgrade Exception", "Shows the\
 cursor not only on menu, but when enabled cursor won't be hidden for ship u\
pgrading.", opt);

  el = TXT(CE("span"), "reload game to apply this setting");
  el.className = "warn";
  appendSetting("checkbox", 0, "tinys", "Tiny 'Lifequality' features", "So f\
ar only starting game with Enter key and fixes join error: \"Uncaught TypeEr\
ror: Cannot read properties of null (reading 'style')\", which fixes feature\
 glowing +2 bonus credits for add. But repairs also music to play more as in\
tended (probablly) and selected music track saves as setting, which makes it\
 play after reopening.", opt = {el: el});

  /** possible feature: username characters left */

  appendSetting("checkbox", function (v, el) {
    if (el = QS("#warin-extension"))
      el.lastChild.data = v ? "extension by kaabel" : "Warin Extension";
    return v;
  }, "cable", "Extension Author", "Disable to display \"Warin Extension\" in\
 main screen as extension button instead of \"extension by kaabel\".");

  appendSetting("button", "Add", function () {}, "Emotes Keyshortcuts", "Eac\
h not previously used shortcut, which use while playing game can be used sen\
ds emote specified by number 0 - 9. Add button adds new slot at the end, eac\
h can be deleted separately. Notice that shortcut \"D\" wouldn't work when s\
hip break is used with Shift, so emote 0 needs also \"Shift+D\", beacause th\
e Ctrl/Cmd, Alt nad Shift key count too.", opt = {});
  var emotes = opt.p, emKeys = setgs.emtsK, emEmts = setgs.emtsE;
  var emEls = [{el: opt.p, id: function (i) {}}];
  function appendEmoteKeys(id) {
    var ks = emKeys[id], emote = emEmts[id];
    var item = emotes.appendChild(CE("p")),
      warn = TXT(CE("span"), "emote shortcut already exists ");
    item.appendChild(CE("input")).onkeydown = function (e) {
      (e.key === "Tab" || e.preventDefault()) && e.target.value ?
        0 : ks = e.target.value =
        (e.key === "Backspace" || e.key === "Delete") && e.target.value ?
        "" : (e.ctrlKey ? "Ctrl+" : "") + (e.altKey ? "Alt+" : "") +
        (e.shiftKey ? "Shift+" : "") + (e.key || "").toUpperCase();
      var n0 = 0, n1 = emKeys.indexOf(ks), pr = emKeys[id];
      (n0 = pr !== (emKeys[id] = ks) ? emKeys.indexOf(pr) : -1) != -1 &&
        (n0 > id ? emEls[n0].el : warn).classList.add("none");
      pr !== ks && n1 != -1 &&
        (n1 > id ? emEls[n1].el : warn).classList.remove("none");
      updateSetting();
    };
    item.lastChild.value = ks;
    item.appendChild(TXT(CE("span"), "keyboard shortcut, "));
    item.appendChild(CE("input")).oninput = function () {
      emote = Number(this.value.slice(-1));
      emEmts[id] = this.value = emote >= 0 && emote <= 9 ? emote : 1;
      updateSetting();
    };
    item.lastChild.value = emote !== -1 ? emote : "";
    item.appendChild(TXT(CE("span"), "emote number "));
    item.appendChild(TXT(CE("button"), "remove")).onclick = function () {
      for (; ++id < emKeys.length;)
        emEls[id].id(id - 1);
      emEmts.length-- + emKeys.length--;
      var ch = item.childNodes, N = this.onclick = null;
      console.debug(ch[1].onclick && (ch[1].onclick = N));
      console.debug(ch[3].onclick && (ch[3].onclick = N));
      updateSetting();
      emotes.removeChild(item);
    };
    item.appendChild(warn).className = "warn";
    ks && emKeys.indexOf(ks) < id ? 0 : warn.className += " none";
    emEls.push({el: warn, id: function (i) {
      emEls[i] = emEls[id];
      emEmts[i] = emote;
      emKeys[i] = ks;
      id = i;
    }});
  }
  opt.inp.onclick = function () {
    emKeys.push("");
    appendEmoteKeys(emEmts.push(-1) - 1);
  };
  for (var i = 1; i < emKeys.length; i++)
    typeof emKeys[i] == "string" && typeof emEmts[i] == "number" ?
      appendEmoteKeys(i) : console.error("Emote keyshortcut item:", i);
  i < emEmts.length && console.error("Emote keyshortcuts length dif.");

  appendSetting("checkbox", function (v) {
    D.body.classList[v ? "add" : "remove"]("contr");
    return v;
  }, "contr", "High Contrast", "Makes text here super bright.");

  function bgColor(e, b) {
    b = e ? +e.target.checked : setgs.sgsBg;
    D.body.className = b ? "noimage" : "";
    if (!e) {
      return bgColor;
    }
    updateSetting("sgsBg", b);
  }
  appendSetting("checkbox", 0, "tests", "Custom DevTest", "If this feature d\
oes anything at all it's because I've not sanitized this public version from\
 it. You can find it only in source code.")

  appendSetting("checkbox", 0, "lMFPS", "Lowered FPS in mennu", "While in me\
nu next frame will render at least a second after the previous one.");

  appendSetting("checkbox", 0, "rCOUG", "Remove \"OurGames\"", "Removes the c\
heck out our new game: Zero King part together with the video.")

  appendSetting("checkbox", setgs.sgsBg, bgColor());
  D.body.appendChild(CE("p")).className = "end";
  function pageWindow(tab) {
    var p = "parentNode", body = tab.document.body, head = tab.document.head;
    body[p].replaceChild(doc.body[p].removeChild(doc.body), body);
    head[p].replaceChild(doc.head[p].removeChild(doc.head), head);
    win.close();
    D = doc = (win = tab).document;
  }
  doc.body.appendChild(TXT(CE("button"), "")).id = "popup";
  putToPopup = function putToPopup() {
    pageWindow(window.open("about:blank", "popuped", "left=" + 
      Math.max(0, window.screenLeft - 590) + ",top=" +  window.screenTop + 
      ",width=" + 590 + ",height=" + 480));
    (el = doc.getElementById("popup")).firstChild.data = "Back to tab";
    el.onclick = backToTab;
  }
  function backToTab(ev) {
    ev && pageWindow(window.open());
    (el = doc.getElementById("popup")).firstChild.data = "Put to popup";
    el.onclick = putToPopup;
  }
  backToTab();
}

function screenshot4k(rr, fn, el, fT, lE) {
  function gB(e) {
    return document.getElementById(e);
  }
  var id = "warin-screenshots", aR = [""], ims = gB(id), pD = Da, sC;
  var oG = 0, cIt = 0, eGm = 0, nE = 1, tK = 0, wIt = 0, vi = "hidden";
  ["", "webkit", "moz"].every(function (e) {
    return e + vi in document ? !(vi = e + vi) : !0;
  });
  var tt = [0], sG = setgs, sO = setgs, hidCrsr = function () {}, oX = Xf;
  function gSg(s, g, d, p, o) {
    if (ims[g = "getAttribute"](d = "datachanged") !== null) {
      o = JSON.parse(ims[g]("data"));
      for (p in sO)
        sG[p] = p in o ? o[p] : sO[p];
    }
    ims.removeAttribute(d);
    return sG[s];
  }
  function cwhide() {
    if (gSg("hidCG") && !Im()) {
      c.className += " nocursor";
      hidCrsr = cwshow;
    }
  }
  function cwshow() {
    if (!gSg("hidCG") || Im()) {
      c.className = c.className.replace(" nocursor", "");
      hidCrsr = cwhide;
    }
  }
  cwhide();

  function aE(e, p) {
    return (p || document.body).appendChild(document.createElement(e));
  }
  function fname() {
    var x = playerX, y = playerY, t = new Date();
    return "warin " + (t / 86400000 | 0) + "ABCDEFGHIJKLMNOPQ\
RSTUVWXY"[t.getUTCHours()] + ((t / 1000 | 0) % 3600) + " " + x.toFixed(7) +
      " " + y.toFixed(7) + ".png";
  }
  function setImg(blob, im) {
    if (!blob)
      throw "no image :F";
    (im = aE("a", ims)).href = URL.createObjectURL(blob);
    im.download = fname();
  }
  sG.uNm = Ea;
  if (!ims)
    (ims = aE("div")).id = id;
  ims.setAttribute("data", JSON.stringify(sG));
  ims.setAttribute("datachanged", "uNm");
  console.log("%cExecuted :O , interval: " + setInterval(function () {
    if (eGm |= Ad != lE && (lE = Ad) && gSg("scrSE"))
      Ke.fn || takeScrn(console.log(eGm));
    if (gSg("scrDw") && ims.childNodes.length)
      !function (e) {
        e instanceof HTMLCanvasElement ? e.toBlob(setImg) : e.click();
      }(ims.removeChild(ims.firstChild));
    hidCrsr();
    if (tt[1] !== sG[1]) 
      try {
        volume = sG.volSf;
        mS && (mS.textDecoration = sG.volMu ? "" : "line-through");
        audioLoop && audioLoop.volume(sG.volMu);
        tt[1] = sG[1];
      } catch (e) {}
  }, 3000), "color: #00ff00;");
  + function (e) {
    if (e) {
      gSg("cable") ? 0 : e.nextSibling.data = "Warin Extension";
      e.id = "";
      e.style.color = "green";
      e.firstChild.data = "Running";
    }
  } (gB("extinf"));
  var tn = gSg("tinys"), oP = prerollComplete, mS = null;
  function kD(e) {
    function PD(v) {
      e.preventDefault();
      return v;
    }
    var k = (e.ctrlKey ? "Ctrl+" : "") + (e.altKey ? "Alt+" : "") +
      (e.shiftKey ? "Shift+" : "") + (e.key || "*").toUpperCase();
    if (gSg("scrSh"))
      if (k === sG.siglK) {
        cIt = clearInterval(cIt);
        return takeScrn(PD(e));
      } else if (k === sG.slshK) {
        cIt = cIt ? clearInterval(cIt) : setInterval(takeScrn, sG.scrPS);
        return takeScrn(PD(e));
      }
    if (tn && k === "ENTER")
      if (document.activeElement === document.body ||
        document.activeElement.id === "NameArea" ||
        document.activeElement.className.slice(9) === "socialbtn")
        return gB(PD("playButton")).onclick();
    if (k === sG.onlyK) {
      nE = PD(0);
      return location.reload();
    }
    var id = Im() ? -1 : sG.emtsK.indexOf(k), n = 0;
    if (id !== -1) {
      n = Number(sG.emtsE[PD(id)]);
      return n >= 0 && n <= 9 ? Gf(n) : console.debug("skipped emote:", n);
    }
  };
  function rst() {
    render = rr;
    Ke = fn;
    G = oG;
    for (var i in el)
      el[i].removeAttribute("style");
    if (c === sC || k.canvas !== c)
      (k = (c = gB("canvas")).getContext("2d")).canvas.width = 0;
  }
  function takeScrn(e) {
    fT(Ke, "fn");
    Ke = function Ke() {  
      aR = eGm && gSg("scrES") ? [800, 590] : [sG.scrSW, sG.scrSH];
      if (gSg("scrSC"))
        [sC.width = aR[0], sC.height = aR[1]];
      else
        for (var i in el) {
          (function (w, h) {
            // console.log("w h", w, h);
          })(el[i].width = aR[0], el[i].height = aR[1]);
          el[i].style.width = innerWidth + "px";
          el[i].style.height = innerHeight + "px";
        }
      oG = G;
      fn();
      G = Xc;
    };
    Ke.fn = fn;
    fT(render, "r");
    render = function render() {
      if (gSg("scrSC"))
        k = (c = sC = aE("canvas", ims)).getContext("2d");
      c.width = 0;
      rr();
      var s = Gb[F];
      if (eGm && sG.scrEI) {
        if (!vd) {
          J = c.width / (I = .675);
          K = c.height / I;
          k.save();
          k.scale(I, I);
          ef();
          k.restore();
          s += "?";
        }
        k.font = "20px xirod";
        k.fillStyle = "#fff";
        k.fillText(s + " - world: " + (selfServer + 1), 72, 116);
      }
      eGm = 0;
      sG.scrSC || c.toBlob(setImg, "image/png");
      rst();
      sG.scrRR && rr();
    };
    render.r = rr;
  };
  function ctn(e, d) {
    e.appendChild(document.createTextNode(d));
    return e;
  }
  function Im() {
    return !ga.style.display;
  }
  window.onbeforeunload = function (e) {
    var msg = "";
    if (ims.childNodes.length)
      msg = "Not downloaded images are present.";
    else if (!gSg("noRld") || !nE++ || (Im() && document[vi]))
      return;
    e.preventDefault();
    return (e.returnValue = msg);
  };
  sG.bTI = sG.bTV = 0;
  function blink(b) {
    sG[0] === tt[0] ?
      sG.bTV ==! gSg("wBlnk") && sG.bTI && (sG.bTI = 0) :
      blink(gSg("blink"), tt[0] = sG[0]);
    if (!arguments.length)
      return sG.wBlnk ^ sG.bTI;
    sG.bTV = sG.wBlnk;
    sG.bTI = b ^ sG.wBlnk;
  }
  window.blink = blink;
  window.onblur = window.onfocusout = window.onpagehide = function () {
    if (!gSg("wBlur") || Im())
      return;
    var e = ctn(aE("div"), "window is not selected active!");
    e.id = "focusout-warning";
    e.setAttribute("style", "width: fit-content;padding: 50px 0;margin: 0 au\
to;font-family: xirod;color: #ff0;visibility: hidden;position: relative;");
    clearInterval(wIt);
    wIt = setInterval(function () {
      e.style.visibility = !e.style.visibility && blink() ? "hidden" : "";
    }, 700);
  };
  window.onfocus = window.onfocusin = window.onpageshow = function () {
    var e = gB("focusout-warning");
    e && document.body.removeChild(e);
    clearInterval(wIt);
  };
  gB("loginButton").onclick = function Da() {
    var b = pD(), s = gSg("uNTag");
    s && Ea && (gB("NameArea").value = "[" + s + "] " + Ea);
    return b;
  };
  if (gSg("stpRd"))
    window.stop();
  var Sp = SeamlessLoop.prototype, su = Sp.update;
  if (tn) {
    prerollComplete = (oP.o = prerollComplete) && function () {
      var s = "preroll", e = aE("div"), r;
      gB(s) || (e.id = s);
      oP();
      document.body.removeChild(e);
      return r;
    };
    fT(Xf, "o");
    Xf = function () {
      oX();
      setTimeout(ha.onclick, 255);
    };
    Xf.o = oX;
    Ba.value = sG.musTr;
    document.body.addEventListener("mousedown", function uI(e) {
      Tc();
      document.body.removeEventListener("mousedown", uI);
    });
    fT(Sp.update, "s");
    Sp.update = function (s) {
      var o = this;
      setTimeout(function () {
        su.call(o, s, tt[1] = !0);
      }, o.actual._length - 3e3);
      audioLoop && audioLoop.volume(sG.volMu);
    };
    Sp.update.s = su;
    !function (e, n) {
      if (!e)
        return;
      n = e.removeChild(e.firstChild) || {data: "music"};
      ctn(aE("span", e), n.data).style.color = "black";
      (mS = e.style).color = "red";
      sG.volMu || (mS.textDecoration = "line-through");
    }(gB("MusicIDText"));
  }
  (function (f, vt, v, e, p){
    e = document.querySelector("#Options span h3"), p = e.parentNode;
    p && p.insertBefore(document.createElement("h3").appendChild(vt), e);
    fT($a, "f");
    $a = function (a, b, c) {
      c || f(a, b *= volume)
      if (v !== volume) {
        v = volume;
        vt.data = "Volume: " + (v * 100);
        localStorage.setItem("volume", volume);
      }
    };
    $a.f = f;
  })($a, document.createTextNode(""));
  gSg("tests") && function (t) {
    window.addEventListener("keydown", function (e) {
      console.debug(Date.now() - t);
      t = Date.now();
    }, !1);
  }(Date.now());
  sG.lMFPS && !Rd.o && function (oR, tF) {
    (Rd = function () {
      window.requestAnimationFrame(Rd);
      vd ? render() :
        Date.now() > tF + 992 && (tF = Date.now()) && render();
    }).o = oR;
  }(Rd, Date.now());
  return kD;
}

document.head.appendChild(TXT(doc.createElement("style"), "div#Options h1, d\
iv#Options h3{padding: 0;margin: 5px;}div#Options button{margin: 0;}"));

var code = doc.createElement("div");
code.id = "warin-screenshots";
code.setAttribute("onclick", "var wsss = document.getElementById(\"warin-scr\
eenshots\");document.body.appendChild(document.createElement(\"script\")).ap\
pendChild(wsss.removeChild(wsss.firstChild));");
document.body.appendChild(TXT(code, "var volume = localStorage.getItem(\"vol\
ume\") || 1;\ndocument.onkeydown = (" + (screenshot4k + ")(render, Ke, [c, a\
a, ca, ea, l], function (f, p) {\n  if (typeof f[p] == \"function\")\n    th\
row f.name + \" already stolen\";\n}, Ad);").replace("setgs, sO = setgs,", "\
window.addonSettings = {},\n    sO = " + settings([], code) + ",\n   ")));
code.click();

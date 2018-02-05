/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-smil-setclasses !*/
!(function(e, n, s) {
  function o(e, n) {
    return typeof e === n;
  }
  function a() {
    var e, n, s, a, t, r, f;
    for (var c in l)
      if (l.hasOwnProperty(c)) {
        if (
          ((e = []),
           (n = l[c]),
           n.name &&
           (e.push(n.name.toLowerCase()),
            n.options && n.options.aliases && n.options.aliases.length))
        )
          for (s = 0; s < n.options.aliases.length; s++)
            e.push(n.options.aliases[s].toLowerCase());
        for (a = o(n.fn, "function") ? n.fn() : n.fn, t = 0; t < e.length; t++)
          (r = e[t]),
            (f = r.split(".")),
            1 === f.length
            ? (Modernizr[f[0]] = a)
          : (!Modernizr[f[0]] ||
             Modernizr[f[0]] instanceof Boolean ||
             (Modernizr[f[0]] = new Boolean(Modernizr[f[0]])),
             (Modernizr[f[0]][f[1]] = a)),
            i.push((a ? "" : "no-") + f.join("-"));
      }
  }
  function t(e) {
    var n = f.className,
        s = Modernizr._config.classPrefix || "";
    if ((c && (n = n.baseVal), Modernizr._config.enableJSClass)) {
      var o = new RegExp("(^|\\s)" + s + "no-js(\\s|$)");
      n = n.replace(o, "$1" + s + "js$2");
    }
    Modernizr._config.enableClasses &&
      ((n += " " + s + e.join(" " + s)),
       c ? (f.className.baseVal = n) : (f.className = n));
  }
  var i = [],
      l = [],
      r = {
        _version: "3.5.0",
        _config: {
          classPrefix: "",
          enableClasses: !0,
          enableJSClass: !0,
          usePrefixes: !0
        },
        _q: [],
        on: function(e, n) {
          var s = this;
          setTimeout(function() {
            n(s[e]);
          }, 0);
        },
        addTest: function(e, n, s) {
          l.push({ name: e, fn: n, options: s });
        },
        addAsyncTest: function(e) {
          l.push({ name: null, fn: e });
        }
      },
      Modernizr = function() {};
  (Modernizr.prototype = r), (Modernizr = new Modernizr());
  var f = n.documentElement,
      c = "svg" === f.nodeName.toLowerCase(),
      u = {}.toString;
  Modernizr.addTest("smil", function() {
    return (
      !!n.createElementNS &&
      /SVGAnimate/.test(
        u.call(n.createElementNS("http://www.w3.org/2000/svg", "animate"))
      )
    );
  }),
    a(),
    t(i),
    delete r.addTest,
    delete r.addAsyncTest;
  for (var d = 0; d < Modernizr._q.length; d++) Modernizr._q[d]();
  e.Modernizr = Modernizr;
})(window, document);

var _jf = _jf || [];
_jf.push(['p', '53364']);
_jf.push(['_setFont', 'cwtexqyuan', 'css', '.cwtexqyuan']);
_jf.push(['_setFont', 'cwtexqyuan', 'alias', 'cwtexqyuan']);
_jf.push(['_setFont', 'cwtexqyuan', 'weight', '500']);
_jf.push(['_setFont', 'wt014', 'css', '.wt014']);
_jf.push(['_setFont', 'wt014', 'alias', 'wt014']);
_jf.push(['_setFont', 'wt014', 'english', 'Asap']);
_jf.push(['_setFont', 'wt014', 'weight', '800']);
(function(y, p, f, l, z, A, e, B, D) {
    var a = y._jf;
    if (a.constructor !== Object) {
        var q = function(b) {
                var g = !0,
                    c;
                for (c in a) a[c][0] == b && (g && (g = g && !1 !== a[c][1].call(a)), a[c] = null, delete a[c])
            },
            r = /\S+/g,
            t = /[\t\r\n\f]/g,
            C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            k = "".trim,
            u = k && !k.call("\ufeff\u00a0") ? function(b) { return null == b ? "" : k.call(b) } : function(b) { return null == b ? "" : (b + "").replace(C, "") },
            m = function(b) {
                var g, c, a;
                if ("string" === typeof b && b && (b = (b || "").match(r) || [], g = e[f] ? (" " + e[f] + " ").replace(t, " ") : " ")) {
                    for (a = 0; c = b[a++];) 0 >
                        g.indexOf(" " + c + " ") && (g += c + " ");
                    e[f] = u(g)
                }
            },
            w = function(b) {
                var a, c, h, v;
                if (0 === arguments.length || "string" === typeof b && b)
                    if (a = (b || "").match(r) || [], c = e[f] ? (" " + e[f] + " ").replace(t, " ") : "") {
                        for (v = 0; h = a[v++];)
                            for (; 0 <= c.indexOf(" " + h + " ");) c = c.replace(" " + h + " ", " ");
                        e[f] = b ? u(c) : ""
                    }
            },
            x;
        a.addScript = x = function(b, a, c, h, f, e) {
            f = f || function() {};
            e = e || function() {};
            var d = p.createElement("script"),
                l = p.getElementsByTagName("script")[0],
                k, m = !1,
                n = function() {
                    d.src = "";
                    d.parentNode.removeChild(d);
                    d = d.onerror = d.onload = d.onreadystatechange =
                        null
                };
            h && (k = setTimeout(function() {
                n();
                e()
            }, h));
            d.type = a || "text/javascript";
            d.async = c;
            d.onload = d.onreadystatechange = function(b, a) { m || d.readyState && !/loaded|complete/.test(d.readyState) || (m = !0, h && clearTimeout(k), n(), a || f()) };
            d.onerror = function(a, b, c) {
                h && clearTimeout(k);
                n();
                e();
                return !0
            };
            d.src = b;
            l.parentNode.insertBefore(d, l)
        };
        a.push(["_eventPreload", function() {
            m(l);
            x(B, null, !1, 3E3, null, function() { q("_eventInactived") })
        }]);
        a.push(["_eventActived", function() {
            w(l);
            m(z)
        }]);
        a.push(["_eventInactived", function() {
            w(l);
            m(A)
        }]);
        q("_eventPreload")
    }
})(this, this.document, "className", "jf-loading", "jf-active", "jf-inactive", this.document.getElementsByTagName("html")[0], "../../assets/js/vendor/justFont/232443546677.js");
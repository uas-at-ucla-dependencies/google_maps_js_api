google.maps.__gjsload__('visualization_impl', function(_) {
    var l4 = function() {
        if (null != k4)
            return k4;
        var a = document.createElement("canvas");
        return k4 = !(!a.getContext || !a.getContext("2d"))
    }, m4 = function(a) {
        for (var b = Array(a), c = 0; c < a; ++c)
            b[c] = 0;
        c = Array(a);
        for (var d = 0; d < a; ++d)
            c[d] = b.concat();
        return c
    }, n4 = function(a) {
        if (!a || !a.getLength())
            return 1;
        var b = new _.Q;
        a.forEach(function(l) {
            l && b.extend(l.location ? l.location : l)
        });
        var c = b.na.j
          , d = b.ia.j
          , e = Math.max(b.na.l - c, b.ia.l - d);
        if (1E-9 > e) {
            var f = 0;
            a.forEach(function(l) {
                l instanceof _.P ? ++f : f += l.weight
            });
            return Math.max(1, f)
        }
        var g = 800 / e
          , h = m4(800)
          , k = 1;
        a.forEach(function(l) {
            if (l) {
                var m = l.location ? l.location : l;
                l = l.weight || 1;
                m = new _.M(Math.max(0, Math.min(799, Math.floor((m.lat() - c) * g))),Math.max(0, Math.min(799, Math.floor((m.lng() - d) * g))));
                h[m.x][m.y] += l;
                k = Math.max(k, h[m.x][m.y])
            }
        });
        return k
    }, p4 = function(a, b) {
        var c = []
          , d = []
          , e = 1E3 / (a.length - 1);
        _.C(a, function(h, k) {
            c.push(k * e);
            d.push(_.dI(h))
        });
        a = Array(1001);
        for (var f = 0, g = 0; 1001 > g; ++g)
            g > c[f + 1] && ++f,
            a[g] = f < c.length - 1 ? o4(e * f, g, e * (f + 1), d[f], d[f + 1]) : d[d.length - 1],
            a[g].alpha *= b,
            a[g].alpha = _.Mc(Math.floor(255 * a[g].alpha), 0, 255);
        return a
    }, o4 = function(a, b, c, d, e) {
        if (a == c)
            return d;
        a = (b - a) / (c - a);
        return new _.aI(Math.floor((e.m - d.m) * a + d.m),Math.floor((e.l - d.l) * a + d.l),Math.floor((e.j - d.j) * a + d.j),(e.alpha - d.alpha) * a + d.alpha)
    }, q4 = function(a, b) {
        this.A = a;
        this.l = b;
        this.j = 1;
        this.m = []
    }, s4 = function(a, b, c) {
        _.Pk(b.Z, "");
        if (l4()) {
            var d = b.ownerDocument, e, f = e = d.createElement("canvas");
            _.Uk(f);
            f.width = f.height = 256;
            f = f.getContext("2d");
            var g = 1 < a.j;
            b.Z.appendChild(e);
            b = r4(a, b);
            e = a.m;
            for (var h = Math.floor(e.length / 2), k = b.length, l = k - h, m = m4(k), q = 0; q < k; ++q)
                for (var r = b[q], v = m[q], u = 0; u < k; ++u) {
                    var w = r[u];
                    if (w)
                        for (var x = u - h, A = Math.min(l, u + h + 1), D = Math.max(h, x); D < A; ++D)
                            v[D] += w * e[D - x]
                }
            b = m4(k - 2 * h);
            for (q = 0; q < k; ++q)
                for (r = m[q],
                v = Math.max(h, q - h),
                u = Math.min(l, q + h + 1),
                w = q - h,
                x = h,
                A = 0; x < l; ++x,
                ++A)
                    if (D = r[x])
                        for (var E = v; E < u; ++E)
                            b[E - h][A] += D * e[E - w];
            e = Math.ceil(256 / a.j);
            e = f.createImageData(e, e);
            h = a.get("gradient");
            k = h[h.length - 1];
            c = h.length / c;
            l = e.data;
            q = m = 0;
            for (r = b.length; q < r; ++q)
                for (v = b[q],
                u = 0,
                w = v.length; u < w; ++u)
                    (x = v[u]) || h[0].alpha ? (x = h[Math.floor(x * c)] || k,
                    l[m++] = x.m,
                    l[m++] = x.l,
                    l[m++] = x.j,
                    l[m++] = x.alpha) : m += 4;
            g ? (d = d.createElement("canvas"),
            d.width = d.height = 256 / a.j,
            d.getContext("2d").putImageData(e, 0, 0),
            f.scale(a.j, a.j),
            f.drawImage(d, 0, 0)) : f.putImageData(e, 0, 0)
        }
    }, r4 = function(a, b) {
        var c = a.get("projection");
        c = _.ql(c);
        var d = a.get("radius");
        d = Math.round(d / a.j) * a.j;
        var e = b.Db, f = (256 + 2 * d) / a.j, g = m4(f), h;
        for (h in e) {
            var k = e[h]
              , l = c.fromLatLngToPoint(new _.P(k.V,k.X,!0))
              , m = c.fromLatLngToPoint(new _.P(k.aa,k.ba,!0))
              , q = null;
            q = _.nk(a.l, new _.md(l.x,l.y), b.zoom, _.ma());
            m = _.nk(a.l, new _.md(m.x,m.y), b.zoom, _.ma());
            l = d / 256;
            q = _.mk(a.l, {
                M: Math.min(q.M, m.M) + l,
                N: Math.min(q.N, m.N) + l,
                Y: b.zoom
            });
            q = new _.M(q.S,q.T);
            k = a.A.search(k);
            m = 0;
            for (l = k.length; m < l; ++m) {
                var r = k[m]
                  , v = c.fromLatLngToPoint(new _.P(r.qa.x,r.qa.y))
                  , u = 0
                  , w = 0;
                v = _.Wu(a.l, new _.md(v.x,v.y), new _.md(q.x,q.y), b.zoom);
                u = Math.floor(256 * v.M);
                w = Math.floor(256 * v.N);
                v = Math.floor((w + d) / a.j);
                u = Math.floor((u + d) / a.j);
                0 <= v && v < f && 0 <= u && u < f && (g[v][u] += r.weight)
            }
        }
        return g
    }, x4 = function(a, b) {
        b = void 0 === b ? _.kj : b;
        _.xh.call(this);
        var c = this;
        this.C = b;
        this.H = new _.O(256,256);
        this.j = {};
        b = _.td(-100, -300, 100, 300);
        this.D = new _.vC(b,void 0);
        b = _.td(-90, -180, 90, 180);
        this.m = _.ZH(b, function(d, e) {
            return d.qa.equals(e.qa) && d.weight == e.weight
        });
        this.ca = [];
        this.F = new _.he;
        this.l = 0;
        this.A = new q4(this.m,this.C);
        this.A.bindTo("projection", this, "projection", !0);
        this.A.bindTo("gradient", this, "gradient", !0);
        this.A.bindTo("radius", this, "radius", !0);
        a(this.F, function(d) {
            return s4(c.A, d, c.l)
        });
        this.K = new _.Un(function() {
            var d = c.l;
            c.l = t4(c);
            _.Oc(d, c.l) || u4(c)
        }
        ,0);
        this.addListener("data_changed", function() {
            return v4(c)
        });
        this.addListener("maxintensity_changed", function() {
            c.l = t4(c);
            u4(c)
        });
        this.addListener("gradient_changed", function() {
            u4(c)
        });
        this.addListener("opacity_changed", function() {
            var d = c.get("opacity"), e;
            for (e in c.j)
                c.j.hasOwnProperty(e) && _.Pv(c.j[e].Z, d)
        });
        this.addListener("radius_changed", function() {
            for (var d in c.j)
                if (c.j.hasOwnProperty(d)) {
                    var e = c.j[d]
                      , f = void 0
                      , g = e.Db;
                    for (f in g)
                        g.hasOwnProperty(f) && c.D.remove(g[f]);
                    e.Db = {};
                    w4(c, e)
                }
            u4(c)
        });
        this.triggersTileLoadEvent = !0
    }, w4 = function(a, b) {
        var c = {
            M: b.la.x,
            N: b.la.y,
            Y: b.zoom
        }
          , d = a.get("radius")
          , e = _.ql(a.get("projection"))
          , f = _.mk(a.C, c);
        f = new _.M(f.S,f.T);
        d = _.Vu(a.C, c, d / 256);
        c = d.min;
        d = d.max;
        c = _.td(c.S, c.T, d.S, d.T);
        _.$H(c, e, f, function(g) {
            g.j = b;
            b.Db[_.Sd(g)] = g;
            _.wC(a.D, g)
        })
    }, t4 = function(a) {
        var b = a.get("maxIntensity");
        return 1 <= b ? b : n4(a.get("data"))
    }, v4 = function(a) {
        a.m.clear();
        var b = a.get("data");
        b && (b.forEach(function(e) {
            e && _.YH(a.m, y4(e))
        }),
        a.K.Ma());
        u4(a);
        for (var c = _.ua(a.ca), d = c.next(); !d.done; d = c.next())
            _.R.removeListener(d.value);
        a.ca = b ? [b.addListener("insert_at", function(e) {
            return z4(a, e)
        }), b.addListener("remove_at", function(e, f) {
            return A4(a, f)
        }), b.addListener("set_at", function(e, f) {
            A4(a, f);
            z4(a, e)
        })] : []
    }, z4 = function(a, b) {
        if (b = a.get("data").getAt(b))
            b = y4(b),
            _.YH(a.m, b),
            a.K.Ma(),
            B4(a, b.qa)
    }, A4 = function(a, b) {
        b && (b = y4(b),
        a.m.remove(b),
        a.K.Ma(),
        B4(a, b.qa))
    }, B4 = function(a, b) {
        b = _.yC(a.D, b);
        b = _.ua(b);
        for (var c = b.next(); !c.done; c = b.next())
            _.ie(a.F, c.value.j)
    }, u4 = function(a) {
        for (var b in a.j)
            a.j.hasOwnProperty(b) && _.ie(a.F, a.j[b])
    }, y4 = function(a) {
        var b = a.location ? a.location : a;
        a = a.weight || 1;
        return {
            qa: new _.M(b.lat(),b.lng()),
            weight: a
        }
    }, C4 = function(a, b) {
        var c = new _.eB(_.gB(250));
        this.j = a;
        a.j = (0,
        _.z)(this.m, this);
        this.C = b;
        this.l = c
    }, D4 = _.n(), k4, E4 = "rgba(102, 255, 0, 0);rgba(102, 255, 0, 1);rgba(147, 255, 0, 1);rgba(193, 255, 0, 1);rgba(238, 255, 0, 1);rgba(244, 227, 0, 1);rgba(249, 198, 0, 1);rgba(255, 170, 0, 1);rgba(255, 113, 0, 1);rgba(255, 57, 0, 1);rgba(255, 0, 0, 1)".split(";");
    _.B(q4, _.S);
    q4.prototype.radius_changed = function() {
        var a = this.get("radius");
        l4() ? this.j = 20 > a ? 1 : 2 : this.j = 4;
        a = Math.round(a / this.j);
        for (var b = a / 3, c = [], d = -a; d <= a; d++)
            c.push(Math.exp(-d * d / (2 * b * b)));
        this.m = c
    }
    ;
    _.rj(x4, _.xh);
    x4.prototype.Na = function() {
        return {
            tileSize: {
                L: this.H.width,
                O: this.H.height
            },
            ka: this.C,
            Ta: 2,
            Wa: this.ja.bind(this)
        }
    }
    ;
    x4.prototype.ja = function(a, b) {
        var c = this
          , d = (void 0 === b ? {} : b).Ja
          , e = document.createElement("div");
        _.De(e, this.H);
        b = this.get("opacity");
        void 0 !== b && _.Pv(e, b);
        var f = {
            Z: e,
            zoom: a.Y,
            la: new _.M(a.M,a.N),
            Db: {},
            ownerDocument: document
        };
        e.Aa = f;
        this.j[_.Sd(f)] = f;
        w4(this, f);
        this.l || (this.l = t4(this));
        s4(this.A, f, this.l);
        var g = !1;
        a = Promise.resolve();
        a.then(function() {
            g = !0
        });
        return {
            Ga: function() {
                return e
            },
            fb: function() {
                return g
            },
            loaded: a,
            release: function() {
                _.Pk(e, "");
                delete c.j[_.Sd(f)];
                d && d()
            }
        }
    }
    ;
    x4.prototype.releaseTile = function(a) {
        if (a) {
            var b = a.Aa;
            a.Aa = null;
            delete this.j[_.Sd(b)];
            a = this.D;
            for (var c in b.Db)
                b.Db.hasOwnProperty(c) && a.remove(b.Db[c]);
            _.Pk(b.Z, "")
        }
    }
    ;
    C4.prototype.m = function() {
        _.fB(this.l, (0,
        _.z)(this.A, this))
    }
    ;
    C4.prototype.A = function() {
        a: {
            var a = this.j.l;
            for (var b in a) {
                a = a[b];
                this.j.remove(a);
                break a
            }
            a = null
        }
        a && this.C(a)
    }
    ;
    D4.prototype.j = function(a) {
        var b = a.m
          , c = a.m = a.get("map");
        b && (a.j && (a.j.unbindAll(),
        a.j = null),
        a.l && (a.l.release(),
        a.l = null),
        _.xm("Lh", "-p", a));
        if (c) {
            var d = function() {
                k && k.unbindAll();
                k = new x4(g,h);
                c && k.bindTo("projection", c);
                k.bindTo("data", a);
                k.bindTo("maxIntensity", a);
                k.bindTo("gradient", e, "colorGradient");
                k.bindTo("radius", f, "renderingRadius");
                a.j && (k.bindTo("opacity", a.j),
                e.set("opacity", 1))
            };
            a.j = new _.kr({
                dissipating: !0,
                gradient: E4,
                opacity: .6,
                radius: 10
            });
            a.j.bindTo("dissipating", a);
            a.j.bindTo("gradient", a);
            a.j.bindTo("opacity", a);
            a.j.bindTo("radius", a);
            var e = new _.Bw(["stringGradient", "opacity"],"colorGradient",function(q, r) {
                return p4(q, r)
            }
            );
            e.bindTo("stringGradient", a.j, "gradient", !0);
            var f = new _.Bw(["radius", "dissipating", "zoom"],"renderingRadius",function(q, r, v) {
                return r ? q : Math.min(Math.round(q * Math.pow(2, v)), 256)
            }
            );
            f.bindTo("radius", a.j);
            f.bindTo("zoom", c);
            f.bindTo("dissipating", a.j);
            var g = function(q, r) {
                new C4(q,r)
            };
            b = c.__gm;
            var h = void 0
              , k = null;
            d();
            var l = k.Na()
              , m = _.oe(l);
            b.j.then(function(q) {
                q.Lc.ma(function(r) {
                    r && h != r.ka && (h = r.ka,
                    d(),
                    m.set(k.Na()))
                })
            });
            _.tC(c, m, "overlayLayer", 15, {
                Ph: function(q) {
                    a.l && a.l.release();
                    a.l = q
                }
            });
            _.um(c, "Lh");
            _.wm("Lh", "-p", a)
        }
    }
    ;
    _.Ze("visualization_impl", new D4);
});

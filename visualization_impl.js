google.maps.__gjsload__('visualization_impl', function(_) {
    var A3 = function() {
        if (null != z3)
            return z3;
        var a = window.document.createElement("canvas");
        return z3 = !(!a.getContext || !a.getContext("2d"))
    }, B3 = function(a) {
        for (var b = Array(a), c = 0; c < a; ++c)
            b[c] = 0;
        c = Array(a);
        for (var d = 0; d < a; ++d)
            c[d] = b.concat();
        return c
    }, C3 = function(a) {
        if (!a || !a.getLength())
            return 1;
        var b = new _.Q;
        a.forEach(function(a) {
            a && b.extend(a.location ? a.location : a)
        });
        var c = b.ma.j
          , d = b.fa.j
          , e = Math.max(b.ma.l - c, b.fa.l - d);
        if (1E-9 > e) {
            var f = 0;
            a.forEach(function(a) {
                a instanceof _.P ? ++f : f += a.weight
            });
            return Math.max(1, f)
        }
        var g = 800 / e
          , h = B3(800)
          , k = 1;
        a.forEach(function(a) {
            if (a) {
                var b = a.location ? a.location : a;
                a = a.weight || 1;
                b = new _.N(Math.max(0, Math.min(799, Math.floor((b.lat() - c) * g))),Math.max(0, Math.min(799, Math.floor((b.lng() - d) * g))));
                h[b.x][b.y] += a;
                k = Math.max(k, h[b.x][b.y])
            }
        });
        return k
    }, E3 = function(a, b) {
        var c = []
          , d = []
          , e = 1E3 / (a.length - 1);
        _.C(a, function(a, b) {
            c.push(b * e);
            d.push(_.pH(a))
        });
        a = Array(1001);
        for (var f = 0, g = 0; 1001 > g; ++g)
            g > c[f + 1] && ++f,
            a[g] = f < c.length - 1 ? D3(e * f, g, e * (f + 1), d[f], d[f + 1]) : d[d.length - 1],
            a[g].alpha *= b,
            a[g].alpha = _.yc(Math.floor(255 * a[g].alpha), 0, 255);
        return a
    }, D3 = function(a, b, c, d, e) {
        if (a == c)
            return d;
        a = (b - a) / (c - a);
        return new _.mH(Math.floor((e.m - d.m) * a + d.m),Math.floor((e.l - d.l) * a + d.l),Math.floor((e.j - d.j) * a + d.j),(e.alpha - d.alpha) * a + d.alpha)
    }, F3 = function(a, b) {
        this.A = a;
        this.l = b;
        this.j = 1;
        this.m = []
    }, H3 = function(a, b, c) {
        _.Ak(b.Z, "");
        if (A3()) {
            var d = b.ownerDocument, e, f = e = d.createElement("canvas");
            _.Fk(f);
            f.width = f.height = 256;
            f = f.getContext("2d");
            var g = 1 < a.j;
            b.Z.appendChild(e);
            b = G3(a, b);
            e = a.m;
            for (var h = Math.floor(e.length / 2), k = b.length, m = k - h, p = B3(k), q = 0; q < k; ++q)
                for (var t = b[q], v = p[q], u = 0; u < k; ++u) {
                    var w = t[u];
                    if (w)
                        for (var x = u - h, B = Math.min(m, u + h + 1), D = Math.max(h, x); D < B; ++D)
                            v[D] += w * e[D - x]
                }
            b = B3(k - 2 * h);
            for (q = 0; q < k; ++q)
                for (t = p[q],
                v = Math.max(h, q - h),
                u = Math.min(m, q + h + 1),
                w = q - h,
                x = h,
                B = 0; x < m; ++x,
                ++B)
                    if (D = t[x])
                        for (var G = v; G < u; ++G)
                            b[G - h][B] += D * e[G - w];
            e = Math.ceil(256 / a.j);
            e = f.createImageData(e, e);
            h = a.get("gradient");
            k = h[h.length - 1];
            c = h.length / c;
            m = e.data;
            q = p = 0;
            for (t = b.length; q < t; ++q)
                for (v = b[q],
                u = 0,
                w = v.length; u < w; ++u)
                    (x = v[u]) || h[0].alpha ? (x = h[Math.floor(x * c)] || k,
                    m[p++] = x.m,
                    m[p++] = x.l,
                    m[p++] = x.j,
                    m[p++] = x.alpha) : p += 4;
            g ? (d = d.createElement("canvas"),
            d.width = d.height = 256 / a.j,
            d.getContext("2d").putImageData(e, 0, 0),
            f.scale(a.j, a.j),
            f.drawImage(d, 0, 0)) : f.putImageData(e, 0, 0)
        }
    }, G3 = function(a, b) {
        var c = a.get("projection");
        c = _.bl(c);
        var d = a.get("radius");
        d = Math.round(d / a.j) * a.j;
        var e = b.Ib, f = (256 + 2 * d) / a.j, g = B3(f), h;
        for (h in e) {
            var k = e[h]
              , m = c.fromLatLngToPoint(new _.P(k.W,k.Y,!0))
              , p = c.fromLatLngToPoint(new _.P(k.$,k.aa,!0))
              , q = null;
            q = _.Ij(a.l, new _.Yc(m.x,m.y), b.zoom, _.na());
            p = _.Ij(a.l, new _.Yc(p.x,p.y), b.zoom, _.na());
            m = d / 256;
            q = _.Hj(a.l, {
                M: Math.min(q.M, p.M) + m,
                N: Math.min(q.N, p.N) + m,
                U: b.zoom
            });
            q = new _.N(q.R,q.S);
            k = a.A.search(k);
            p = 0;
            for (m = k.length; p < m; ++p) {
                var t = k[p]
                  , v = c.fromLatLngToPoint(new _.P(t.pa.x,t.pa.y))
                  , u = 0
                  , w = 0;
                v = _.zu(a.l, new _.Yc(v.x,v.y), new _.Yc(q.x,q.y), b.zoom);
                u = Math.floor(256 * v.M);
                w = Math.floor(256 * v.N);
                v = Math.floor((w + d) / a.j);
                u = Math.floor((u + d) / a.j);
                0 <= v && v < f && 0 <= u && u < f && (g[v][u] += t.weight)
            }
        }
        return g
    }, M3 = function(a, b) {
        b = void 0 === b ? _.Vi : b;
        _.ih.call(this);
        var c = this;
        this.C = b;
        this.H = new _.O(256,256);
        this.j = {};
        b = _.ed(-100, -300, 100, 300);
        this.D = new _.ZB(b,void 0);
        b = _.ed(-90, -180, 90, 180);
        this.m = _.kH(b, function(a, b) {
            return a.pa.equals(b.pa) && a.weight == b.weight
        });
        this.da = [];
        this.F = new _.Ud;
        this.l = 0;
        this.A = new F3(this.m,this.C);
        this.A.bindTo("projection", this, "projection", !0);
        this.A.bindTo("gradient", this, "gradient", !0);
        this.A.bindTo("radius", this, "radius", !0);
        a(this.F, function(a) {
            return H3(c.A, a, c.l)
        });
        this.K = new _.Tn(function() {
            var a = c.l;
            c.l = I3(c);
            _.Ac(a, c.l) || J3(c)
        }
        ,0);
        this.addListener("data_changed", function() {
            return K3(c)
        });
        this.addListener("maxintensity_changed", function() {
            c.l = I3(c);
            J3(c)
        });
        this.addListener("gradient_changed", function() {
            J3(c)
        });
        this.addListener("opacity_changed", function() {
            var a = c.get("opacity"), b;
            for (b in c.j)
                c.j.hasOwnProperty(b) && _.tv(c.j[b].Z, a)
        });
        this.addListener("radius_changed", function() {
            for (var a in c.j)
                if (c.j.hasOwnProperty(a)) {
                    var b = c.j[a]
                      , f = void 0
                      , g = b.Ib;
                    for (f in g)
                        g.hasOwnProperty(f) && c.D.remove(g[f]);
                    b.Ib = {};
                    L3(c, b)
                }
            J3(c)
        });
        this.triggersTileLoadEvent = !0
    }, L3 = function(a, b) {
        var c = {
            M: b.ia.x,
            N: b.ia.y,
            U: b.zoom
        }
          , d = a.get("radius")
          , e = _.bl(a.get("projection"))
          , f = _.Hj(a.C, c);
        f = new _.N(f.R,f.S);
        d = _.yu(a.C, c, d / 256);
        c = d.min;
        d = d.max;
        c = _.ed(c.R, c.S, d.R, d.S);
        _.lH(c, e, f, function(c) {
            c.j = b;
            b.Ib[_.Ed(c)] = c;
            _.$B(a.D, c)
        })
    }, I3 = function(a) {
        var b = a.get("maxIntensity");
        return 1 <= b ? b : C3(a.get("data"))
    }, K3 = function(a) {
        a.m.clear();
        var b = a.get("data");
        b && (b.forEach(function(b) {
            b && _.jH(a.m, N3(b))
        }),
        a.K.Na());
        J3(a);
        for (var c = _.ua(a.da), d = c.next(); !d.done; d = c.next())
            _.R.removeListener(d.value);
        a.da = b ? [b.addListener("insert_at", function(b) {
            return O3(a, b)
        }), b.addListener("remove_at", function(b, c) {
            return P3(a, c)
        }), b.addListener("set_at", function(b, c) {
            P3(a, c);
            O3(a, b)
        })] : []
    }, O3 = function(a, b) {
        if (b = a.get("data").getAt(b))
            b = N3(b),
            _.jH(a.m, b),
            a.K.Na(),
            Q3(a, b.pa)
    }, P3 = function(a, b) {
        b && (b = N3(b),
        a.m.remove(b),
        a.K.Na(),
        Q3(a, b.pa))
    }, Q3 = function(a, b) {
        b = _.bC(a.D, b);
        b = _.ua(b);
        for (var c = b.next(); !c.done; c = b.next())
            _.Vd(a.F, c.value.j)
    }, J3 = function(a) {
        for (var b in a.j)
            a.j.hasOwnProperty(b) && _.Vd(a.F, a.j[b])
    }, N3 = function(a) {
        var b = a.location ? a.location : a;
        a = a.weight || 1;
        return {
            pa: new _.N(b.lat(),b.lng()),
            weight: a
        }
    }, R3 = function(a, b) {
        var c = new _.JA(_.LA(250));
        this.j = a;
        a.j = (0,
        _.z)(this.m, this);
        this.C = b;
        this.l = c
    }, S3 = _.l(), z3, T3 = "rgba(102, 255, 0, 0);rgba(102, 255, 0, 1);rgba(147, 255, 0, 1);rgba(193, 255, 0, 1);rgba(238, 255, 0, 1);rgba(244, 227, 0, 1);rgba(249, 198, 0, 1);rgba(255, 170, 0, 1);rgba(255, 113, 0, 1);rgba(255, 57, 0, 1);rgba(255, 0, 0, 1)".split(";");
    _.A(F3, _.S);
    F3.prototype.radius_changed = function() {
        var a = this.get("radius");
        A3() ? this.j = 20 > a ? 1 : 2 : this.j = 4;
        a = Math.round(a / this.j);
        for (var b = a / 3, c = [], d = -a; d <= a; d++)
            c.push(Math.exp(-d * d / (2 * b * b)));
        this.m = c
    }
    ;
    _.bj(M3, _.ih);
    M3.prototype.Oa = function() {
        return {
            tileSize: {
                L: this.H.width,
                P: this.H.height
            },
            ja: this.C,
            hb: !0,
            jb: 2,
            Za: this.ka.bind(this)
        }
    }
    ;
    M3.prototype.ka = function(a, b) {
        var c = this;
        b = void 0 === b ? {} : b;
        var d = void 0 === b.ya ? _.l() : b.ya
          , e = void 0 === b.Pa ? _.l() : b.Pa
          , f = !1
          , g = window.document.createElement("div");
        _.pe(g, this.H);
        b = this.get("opacity");
        void 0 !== b && _.tv(g, b);
        var h = {
            Z: g,
            zoom: a.U,
            ia: new _.N(a.M,a.N),
            Ib: {},
            ownerDocument: window.document
        };
        g.Ca = h;
        this.j[_.Ed(h)] = h;
        L3(this, h);
        this.l || (this.l = I3(this));
        H3(this.A, h, this.l);
        _.Hb(function() {
            f = !0;
            d()
        });
        return {
            Fa: function() {
                return g
            },
            Db: function() {
                return f
            },
            ia: a,
            release: function() {
                _.Ak(g, "");
                delete c.j[_.Ed(h)];
                e()
            }
        }
    }
    ;
    M3.prototype.releaseTile = function(a) {
        if (a) {
            var b = a.Ca;
            a.Ca = null;
            delete this.j[_.Ed(b)];
            a = this.D;
            for (var c in b.Ib)
                b.Ib.hasOwnProperty(c) && a.remove(b.Ib[c]);
            _.Ak(b.Z, "")
        }
    }
    ;
    R3.prototype.m = function() {
        _.KA(this.l, (0,
        _.z)(this.A, this))
    }
    ;
    R3.prototype.A = function() {
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
    S3.prototype.j = function(a) {
        var b = a.m
          , c = a.m = a.get("map");
        b && (a.j && (a.j.unbindAll(),
        a.j = null),
        a.l && (a.l.release(),
        a.l = null),
        _.vm("Lh", "-p", a));
        if (c) {
            var d = function() {
                k && k.unbindAll();
                k = new M3(g,h);
                c && k.bindTo("projection", c);
                k.bindTo("data", a);
                k.bindTo("maxIntensity", a);
                k.bindTo("gradient", e, "colorGradient");
                k.bindTo("radius", f, "renderingRadius");
                a.j && (k.bindTo("opacity", a.j),
                e.set("opacity", 1))
            };
            a.j = new _.gr({
                dissipating: !0,
                gradient: T3,
                opacity: .6,
                radius: 10
            });
            a.j.bindTo("dissipating", a);
            a.j.bindTo("gradient", a);
            a.j.bindTo("opacity", a);
            a.j.bindTo("radius", a);
            var e = new _.jw(["stringGradient", "opacity"],"colorGradient",function(a, b) {
                return E3(a, b)
            }
            );
            e.bindTo("stringGradient", a.j, "gradient", !0);
            var f = new _.jw(["radius", "dissipating", "zoom"],"renderingRadius",function(a, b, c) {
                return b ? a : Math.min(Math.round(a * Math.pow(2, c)), 256)
            }
            );
            f.bindTo("radius", a.j);
            f.bindTo("zoom", c);
            f.bindTo("dissipating", a.j);
            var g = function(a, b) {
                new R3(a,b)
            };
            b = c.__gm;
            var h = void 0
              , k = null;
            d();
            var m = k.Oa()
              , p = _.ae(m);
            b.j.then(function(a) {
                a.Pc.la(function(a) {
                    a && h != a.ja && (h = a.ja,
                    d(),
                    p.set(k.Oa()))
                })
            });
            _.XB(c, p, "overlayLayer", 15, {
                Wh: function(b) {
                    a.l && a.l.release();
                    a.l = b
                }
            });
            _.sm(c, "Lh");
            _.um("Lh", "-p", a)
        }
    }
    ;
    _.Je("visualization_impl", new S3);
});

google.maps.__gjsload__('poly', function(_) {
    var JU = function(a) {
            for (a = a.toString(16); 2 > a.length;)
                a = "0" + a;
            return a
        },
        KU = function(a) {
            var b = a.length;
            !b || a[0] == a[b - 2] && a[1] == a[b - 1] || (a.push(a[0]),
                a.push(a[1]))
        },
        LU = function(a, b) {
            for (var c = 0, d = a.length; c < d; c += 2) {
                var e = new _.P(a[c], a[c + 1], !0);
                e = _.rl(e, b);
                a[c] = e.S;
                a[c + 1] = e.T
            }
        },
        MU = function(a, b, c) {
            var d = a.path;
            a = a.j;
            for (var e = [], f = a ? [] : null, g = d[0] == d[d.length - 2] && d[1] == d[d.length - 1], h = 0, k = d.length - 2; h < k; h += 2) {
                var l = d[h],
                    m = d[h + 1],
                    q = d[h + 2],
                    r = d[h + 3];
                if (a) {
                    var v = a[h / 2];
                    var u = a[h / 2 + 1]
                }
                switch (b) {
                    case 0:
                        var w = l >= c;
                        var x = q >= c;
                        break;
                    case 1:
                        w = l <= c;
                        x = q <= c;
                        break;
                    case 2:
                        w = m >= c;
                        x = r >= c;
                        break;
                    case 3:
                        w = m <= c,
                            x = r <= c
                }!h && w && (e.push(l, m),
                    a && f.push(v));
                if (w != x) {
                    switch (b) {
                        case 0:
                        case 1:
                            var A = (c - l) / (q - l);
                            e.push(c, m + A * (r - m));
                            break;
                        case 2:
                        case 3:
                            A = (c - m) / (r - m),
                                e.push(l + A * (q - l), c)
                    }
                    a && f.push(v + A * (u - v))
                }
                x && (e.push(q, r),
                    a && f.push(u))
            }
            g && e.length && (e[0] != e[e.length - 2] || e[1] != e[e.length - 1]) && (e.push(e[0], e[1]),
                a && f.push(a[a.length - 1]));
            return {
                path: e,
                j: f
            }
        },
        NU = function(a, b) {
            a = MU(a, 0, b.V);
            a = MU(a, 1, b.aa);
            a = MU(a, 2, b.X);
            return MU(a, 3, b.ba)
        },
        OU = function(a, b, c) {
            for (var d = 0, e = 0, f = c.length; e < f; ++e)
                d += _.zC(a, b, c[e]);
            return !!(d & 1)
        },
        PU = function(a, b, c, d) {
            for (var e = null, f = c * c, g = 0, h = d.length; g < h; ++g) {
                var k = a,
                    l = b,
                    m = c,
                    q = d[g],
                    r = q.length;
                if (!r || 0 >= m)
                    var v = null;
                else {
                    var u = 0,
                        w = m * m * 1.01,
                        x = [0, 0];
                    var A = q[u++] - k;
                    var D = q[u++] - l;
                    v = (A < -m ? 1 : 0) | (A > m ? 2 : 0) | (D < -m ? 4 : 0) | (D > m ? 8 : 0);
                    var E = A * A + D * D;
                    !v && E <= w && (w = E,
                        x[0] = A,
                        x[1] = D);
                    for (; u < r;) {
                        var N = A;
                        var va = D;
                        var sa = v;
                        A = q[u++] - k;
                        D = q[u++] - l;
                        v = (A < -m ? 1 : 0) | (A > m ? 2 : 0) | (D < -m ? 4 : 0) | (D > m ? 8 : 0);
                        if (!(sa & v)) {
                            E = A * A + D * D;
                            !v && E <= w && (w = E,
                                x[0] = A,
                                x[1] = D);
                            sa = A - N;
                            var ab = D - va,
                                Wc = sa * sa + ab * ab;
                            if (!(1E-12 > Wc)) {
                                var yb = A * sa + D * ab;
                                0 > yb || yb > Wc || (E -= yb * yb / Wc,
                                    E <= w && (w = E,
                                        Wc = 1 - yb / Wc,
                                        x[0] = N + sa * Wc,
                                        x[1] = va + ab * Wc))
                            }
                        }
                    }
                    x[0] += k;
                    x[1] += l;
                    x[2] = w;
                    v = w <= m * m ? x : null
                }
                v && v[2] <= f && (f = v[2],
                    e = v)
            }
            return e
        },
        QU = function(a) {
            var b = new _.mH(["mousemove", "mouseup", "mousewheel"]);
            _.Gv(b, ["panes", "pixelBounds"], a);
            return b
        },
        RU = function(a) {
            var b = QU(a);
            _.R.addListener(b, "mousemove", _.Hd);
            _.R.addListener(b, "mouseup", _.Hd);
            _.R.addListener(b, "mousewheel", function(c) {
                var d = a.get("mouseEventTarget");
                d && _.R.trigger.apply(null, [d, "mousewheel"].concat(_.Zu(arguments, 0)))
            });
            return b
        },
        SU = _.n(),
        UU = function(a) {
            var b = ["px", "%"];
            if (!a || !_.J(b))
                return null;
            if ("0" == a)
                return {
                    value: 0,
                    j: b[0]
                };
            for (var c = 0, d = b.length; c < d; ++c) {
                var e = b[c],
                    f = (TU[e] = TU[e] || new RegExp("^(\\d+(?:\\.\\d+)?)" + e + "$")).exec(a);
                if (f)
                    return {
                        value: parseFloat(f[1]),
                        j: e
                    }
            }
            return null
        },
        VU = function(a, b, c) {
            var d = _.sl(new _.md(c.x, c.y), a);
            a = _.sl(new _.md(c.x + b, c.y + b), a);
            return Math.min(Math.abs(d.lat() - a.lat()), Math.abs(d.lng() - a.lng()))
        },
        WU = function(a) {
            this.y = this.x = 0;
            this.z = a
        },
        YU = function(a) {
            var b = Math.sqrt(XU(a, a));
            1E-12 > b || (a.x /= b,
                a.y /= b,
                a.z /= b)
        },
        XU = function(a, b) {
            return a.x * b.x + a.y * b.y + a.z * b.z
        },
        ZU = function(a, b, c) {
            c.x = a.y * b.z - a.z * b.y;
            c.y = a.z * b.x - a.x * b.z;
            c.z = a.x * b.y - a.y * b.x
        },
        $U = function(a, b) {
            var c = _.ec(a[0]);
            a = _.ec(a[1]);
            var d = Math.cos(c);
            b.x = Math.cos(a) * d;
            b.y = Math.sin(a) * d;
            b.z = Math.sin(c)
        },
        aV = function(a, b) {
            var c = Math.atan2(a.y, a.x);
            b[0] = _.fc(Math.atan2(a.z, Math.sqrt(a.x * a.x + a.y * a.y)));
            b[1] = _.fc(c)
        },
        bV = function(a, b, c) {
            c.x = a.x + b.x;
            c.y = a.y + b.y;
            c.z = a.z + b.z;
            YU(c)
        },
        dV = function() {
            var a = new _.oh({
                clickable: !1,
                fillOpacity: 0
            });
            a.bindTo("map", this);
            a.bindTo("strokeColor", this);
            a.bindTo("strokeOpacity", this);
            a.bindTo("strokeWeight", this);
            var b = ["center", "freeVertexPosition", "freeVertexIsCenter"],
                c = new _.Bw(b, "return", cV);
            _.Gv(c, b, this);
            a.bindTo("center", c, "return");
            b = ["center", "radius", "planetRadius", "freeVertexPosition", "freeVertexIsCenter"];
            c = new _.Bw(b, "return", (0,
                _.z)(this.l, this));
            _.Gv(c, b, this);
            a.bindTo("radius", c, "return");
            this.j = _.nH();
            this.j.bindTo("zIndex", this);
            a.bindTo("zIndex", this.j, "ghostZIndex")
        },
        cV = function(a, b, c) {
            return c && b || a
        },
        fV = function(a, b, c, d, e, f, g) {
            var h = this;
            a = _.X("div", a);
            a.style.display = "none";
            var k = 9 + 2 * (1 + c);
            _.De(a, new _.O(k, k));
            f.construct(a, c, 9, 1, g ? .5 : 1);
            f = new _.lC(a, !0);
            f.bindTo("containerPixelBounds", h, "mapPixelBounds");
            f.bindTo("panningEnabled", h);
            f.set("draggableCursor", d);
            f.bindTo("position", this);
            f.bindTo("deltaClientPosition", this);
            this.j = a;
            this.A = b;
            this.F = c;
            this.H = e;
            this.m = f;
            this.l = !1;
            var l;
            this.W = [_.R.addListener(f, "dragstart", function() {
                b.set("draggableCursor", d);
                b.set("active", !0)
            }), _.R.addListener(f, "dragend", function() {
                b.set("active", !1);
                l && (_.C(l, _.R.removeListener),
                    l = null)
            }), _.R.forward(f, "panbynow", h), _.R.forward(f, "dragstart", h), _.R.forward(f, "dragend", h)];
            this.C = _.mn(a, {
                Ha: function(m) {
                    _.Bm(m);
                    _.R.trigger(h, "mousedown", m.ea)
                },
                $b: function(m) {
                    _.Cm(m);
                    _.R.trigger(h, "mousemove", m.ea)
                },
                Ua: function(m) {
                    _.Cm(m);
                    _.R.trigger(h, "mousemove", m.ea)
                },
                Ka: function(m) {
                    _.Dm(m);
                    _.R.trigger(h, "mouseup", m.ea)
                },
                onClick: function(m) {
                    var q = m.event;
                    m = m.pc;
                    _.Em(q);
                    3 == q.button ? m || _.R.trigger(h, "rightclick", q.ea) : m ? _.R.trigger(h, "dblclick", q.ea) : _.R.trigger(h, "click", q.ea)
                }
            });
            this.D = new _.Gq(a, a, {
                Gd: function(m) {
                    h.l = !1;
                    eV(h);
                    _.Jd(m);
                    _.Kd(m);
                    _.R.trigger(h, "mouseout", m)
                },
                Hd: function(m) {
                    h.l = !0;
                    eV(h);
                    _.Jd(m);
                    _.Kd(m);
                    _.R.trigger(h, "mouseover", m)
                }
            })
        },
        eV = function(a) {
            if (a.l) {
                var b = _.dI(a.get("color"));
                if (b) {
                    b.m = Math.floor((b.m + 255) / 2);
                    b.l = Math.floor((b.l + 255) / 2);
                    b.j = Math.floor((b.j + 255) / 2);
                    var c = ["#", JU(b.m), JU(b.l), JU(b.j)].join("")
                }
            }
            a.j.firstChild.style.backgroundColor = c || "white"
        },
        hV = function(a, b, c, d, e, f, g, h) {
            function k() {
                l.D || _.R.trigger(l, "toolbar", {
                    j: !1
                })
            }
            this.ua = a;
            this.J = b;
            this.H = c;
            this.A = _.X("div", e, _.Hi);
            this.D = d;
            this.ja = f;
            this.j = g;
            this.m = h;
            this.l = [];
            a.forEach((0,
                _.z)(this.F, this));
            var l = this;
            this.K = [_.R.addListener(a, "insert_at", function(m) {
                l.F(a.getAt(m), m);
                gV(l, m + 1);
                k()
            }), _.R.addListener(a, "remove_at", function(m) {
                var q = l.l[m];
                l.l.splice(m, 1);
                l.ca(q);
                gV(l, m);
                k()
            }), _.R.addListener(a, "set_at", function(m) {
                l.l[m].l.set("latLngPosition", a.getAt(m));
                k()
            })]
        },
        iV = function(a, b, c) {
            if ((b = b.l.H) && a.j) {
                a = a.j.__gm.get("projectionController");
                var d = a.fromLatLngToDivPixel(c);
                b = b(d);
                if (b = a.fromDivPixelToLatLng(b))
                    return b
            }
            return c
        },
        jV = function(a, b) {
            if (b && a.m) {
                if (2 == a.D)
                    return {
                        clientX: a.m.clientX,
                        clientY: b.clientY
                    };
                if (1 == a.D)
                    return {
                        clientX: b.clientX,
                        clientY: a.m.clientY
                    }
            }
            return b
        },
        kV = function(a, b, c) {
            var d = b.index,
                e = b.l.get("position");
            b = (b = b.l.get("latLngPosition")) && a.j ? _.rl(b, a.j.get("projection")) : null;
            _.R.trigger(a, c, d, e, b)
        },
        gV = function(a, b) {
            for (var c = a.l.length; b < c; ++b)
                a.l[b].index = b
        },
        lV = function(a, b, c) {
            this.C = a;
            this.D = b;
            this.A = null;
            this.l = !1;
            this.j = new _.ge;
            this.m = !1;
            this.F = c;
            _.R.bind(this.j, "set_at", this, this.bn)
        },
        oV = function(a) {
            var b = a.get("panes");
            if (!b)
                return null;
            b = new hV(a.j, mV, nV, !1, b.overlayMouseTarget, a.D, a.get("map"), a.F);
            b.bindTo("projection", a);
            b.bindTo("zoom", a);
            b.bindTo("projectionCenterQ", a);
            b.bindTo("panningEnabled", a);
            b.bindTo("mapPixelBounds", a);
            b.bindTo("color", a);
            b.bindTo("zIndex", a);
            b.bindTo("offset", a);
            var c = a.C;
            c.bindTo("freeVertexPosition", b);
            var d, e;
            _.R.addListener(b, "dragstart", function(f) {
                d = a.get("center");
                e = a.get("radius");
                c.set("freeVertexIsCenter", 0 == f);
                c.set("map", a.get("map"))
            });
            _.R.addListener(b, "dragend", function(f, g, h) {
                c.set("map", null);
                _.R.trigger(a, "toolbar", {
                    j: !0,
                    l: h,
                    action: function() {
                        a.set("center", d);
                        a.set("radius", e)
                    }
                })
            });
            _.R.forward(b, "dragstart", a);
            _.R.forward(b, "dragend", a);
            _.R.forward(b, "panbynow", a);
            return b
        },
        pV = function(a) {
            var b = a.A;
            b && (b.unbindAll(),
                b.release(),
                _.R.clearInstanceListeners(b),
                a.A = null)
        },
        qV = _.n(),
        tV = function(a, b, c, d) {
            function e() {
                a.get("editable") ? rV(a, b, c, d) : (sV(a),
                    _.R.trigger(a, "toolbar", {
                        j: !1
                    }))
            }
            a.editable_changed = e;
            e()
        },
        rV = function(a, b, c, d) {
            if (!a.m) {
                var e = new _.zH(a, !0);
                a.A = e;
                var f = new dV;
                f.bindTo("strokeColor", e);
                f.bindTo("strokeOpacity", e, "ghostStrokeOpacity");
                f.bindTo("strokeWeight", e);
                f.bindTo("center", a);
                f.bindTo("radius", a);
                f.bindTo("planetRadius", c);
                f.bindTo("zIndex", a);
                a.C = f;
                var g = b.__gm;
                a.j = RU(g);
                var h = _.uC(g, a),
                    k = _.Lk() ? 9 : 0,
                    l = new qV;
                d = new lV(f, function(m, q, r) {
                    return new fV(m, a.j, k, q, h, l, r)
                }, d);
                d.set("map", b);
                d.bindTo("center", a);
                d.bindTo("radius", a);
                d.bindTo("planetRadius", c);
                d.bindTo("panes", g);
                d.bindTo("projection", b);
                d.bindTo("zoom", g);
                d.bindTo("projectionCenterQ", g);
                d.bindTo("panningEnabled", b, "draggable");
                d.bindTo("mapPixelBounds", g, "pixelBounds");
                d.bindTo("offset", g);
                d.bindTo("color", e, "strokeColor");
                d.bindTo("zIndex", a);
                a.m = d;
                _.R.forward(d, "panbynow", g);
                _.R.forward(d, "toolbar", a)
            }
        },
        sV = function(a) {
            var b = a.m;
            b && (b.unbindAll(),
                b.set("map", null),
                _.R.clearInstanceListeners(b),
                delete a.m,
                a.j.unbindAll(),
                a.j.release(),
                delete a.j,
                a.C.unbindAll(),
                delete a.C,
                a.A.release(),
                delete a.A)
        },
        uV = function(a, b, c, d, e) {
            this.m = a;
            this.da = c;
            a = a.get("center");
            b = c.fromDivPixelToLatLng(b);
            this.C = d(a, b);
            this.l = _.Uu(b, a);
            this.A = e
        },
        vV = function(a, b, c) {
            var d = 250;
            d = void 0 === d ? 250 : d;
            var e = Array(d),
                f = _.ec(a.lat()),
                g = _.ec(a.lng()),
                h = Math.cos(b),
                k = Math.sin(b),
                l = Math.cos(f);
            f = Math.sin(f);
            if (1E-6 < l)
                for (a = 0; a < d; ++a) {
                    b = a / d * Math.PI * 4;
                    b += Math.sin(b + Math.PI);
                    var m = b / 2,
                        q = f * h + l * k * Math.cos(m);
                    b = Math.asin(q);
                    m = g + Math.atan2(Math.sin(m) * k * l, h - f * q);
                    q = -Math.PI;
                    var r = Math.PI - q;
                    m = ((m - q) % r + r) % r + q;
                    e[a] = c(_.fc(b), _.fc(m))
                }
            else
                for (g = _.fc(b),
                    g = 0 < a.lat() ? a.lat() - g : a.lat() + g,
                    a = 0; a < d; ++a)
                    e[a] = c(g, 360 * a / d);
            return e
        },
        yV = function(a) {
            var b = this,
                c = this,
                d = new _.qh;
            this.l = d;
            d.sd = a;
            d.Zd = !0;
            d.bindTo("capturing", c);
            d.bindTo("cursor", c);
            d.bindTo("map", c);
            d.bindTo("strokeColor", c);
            d.bindTo("strokeOpacity", c);
            d.bindTo("strokeWeight", c);
            d.bindTo("strokePosition", c);
            d.bindTo("fillColor", c);
            d.bindTo("fillOpacity", c);
            d.bindTo("clickable", c);
            d.bindTo("zIndex", c);
            d.bindTo("suppressUndo", c);
            var e = this.j = [];
            _.C(wV, function(f) {
                e.push(_.R.forward(d, f, c))
            });
            e.push(_.R.forward(c, "toolbar", d));
            this.U = new _.xg(function() {
                var f = b.l;
                if (f) {
                    var g = b.get("radius"),
                        h = b.get("center");
                    _.K(g) && h ? (g /= b.get("planetRadius"),
                        f.setPaths(xV(h, g))) : f.setPaths([])
                }
            }, 0)
        },
        xV = function(a, b) {
            var c = [vV(a, b, function(d, e) {
                return new _.P(d, e)
            })];
            _.ec(a.lat()) - b < -Math.PI / 2 && (a = [new _.P(-90, -200, !0), new _.P(90, -200, !0), new _.P(90, -100, !0), new _.P(90, 0, !0), new _.P(90, 100, !0), new _.P(90, 200, !0), new _.P(-90, 200, !0), new _.P(-90, 100, !0), new _.P(-90, 0, !0), new _.P(-90, -100, !0), new _.P(-90, -200, !0)],
                c.push(a));
            return c
        },
        AV = function(a, b, c, d, e, f) {
            this.l = a;
            this.da = c;
            this.F = e;
            this.D = f;
            var g = zV(this);
            b = c.fromDivPixelToLatLng(b);
            this.H = _.Uu(g, b);
            this.J = d(g, b);
            var h = this.C = [];
            a.get("latLngs").forEach(function(k) {
                var l = [];
                k.forEach(function(m) {
                    l.push({
                        heading: d(g, m),
                        distance: _.Uu(m, g)
                    })
                });
                h.push(l)
            });
            this.m = g;
            this.A = b.lng() - g.lng()
        },
        zV = function(a) {
            a = a.l.get("latLngs");
            var b = new WU(0),
                c = new WU(0);
            a.forEach(function(d) {
                d.forEach(function(e) {
                    $U([e.lat(), e.lng()], c);
                    b.x += c.x;
                    b.y += c.y;
                    b.z += c.z
                })
            });
            YU(b);
            a = [0, 0];
            aV(b, a);
            a[0] = _.Mc(a[0], -89, 89);
            return new _.P(a[0], a[1])
        },
        BV = function(a, b, c) {
            this.m = a;
            this.da = c;
            this.l = c.fromDivPixelToLatLng(b);
            var d = this.A = [];
            a.get("latLngs").forEach(function(e) {
                d.push(_.Zu(e.getArray(), 0))
            })
        },
        CV = function(a, b, c) {
            this.j = null;
            this.F = a;
            this.A = b;
            var d = this;
            this.l = new _.Zv(c.l, {
                fd: function(e) {
                    e && d.set("position", new _.M(e.L, e.O))
                },
                bd: _.n()
            }, null, c);
            c.sa(this.l);
            this.W = null;
            this.m = new _.bC(function(e, f) {
                _.R.trigger(d, "panbynow", e, f)
            });
            a = new _.Bw(["waitingForQuiver", "dragging"], "active", function(e, f) {
                return e || f
            });
            a.bindTo("dragging", this, null, !0);
            a.bindTo("waitingForQuiver", this, null, !0);
            this.bindTo("active", a, null, !0)
        },
        DV = function(a, b) {
            var c = a.get("position");
            c = a.da.fromDivPixelToLatLng(c);
            c = new _.Fk(c);
            a.j && _.R.trigger(a.j, b, c)
        },
        EV = function(a, b) {
            function c() {
                var e = a.get("gestureHandling");
                null != e ? b.set("panningEnabled", "none" != e) : b.set("panningEnabled", a.get("draggable"))
            }
            var d = a.__gm;
            _.R.addListener(a, "gesturehandling_changed", c);
            _.R.addListener(a, "draggable_changed", c);
            b.bindTo("panes", d);
            b.bindTo("projectionController", d);
            b.bindTo("containerPixelBounds", d, "pixelBounds");
            d.nb = _.R.forward(b, "panbynow", d)
        },
        FV = function(a, b) {
            function c() {
                var d = a.getMap();
                a.getDraggable() && (_.um(d, "Od"),
                    _.wm("Od", "-p", a))
            }
            a.draggable_changed = c;
            c();
            a.qh = [_.R.addListener(a, "mouseover", function(d) {
                null == d.vertex && null == d.edge && b.set("poly", a)
            }), _.R.addListener(a, "click", function(d) {
                null == d.vertex && null == d.edge && a.getDraggable() && _.wm("Od", "-i", a)
            }), _.R.addListener(a, "mouseout", function(d) {
                null != d.vertex || null != d.edge || d.wa && _.hk(d.wa) || b.set("poly", null)
            })]
        },
        IV = function(a) {
            var b = this;
            this.l = a;
            this.j = a.__gm;
            this.A = this.m = null;
            this.j.j.then(function(c) {
                c = c.ra;
                b.A = c;
                GV(b, c)
            });
            this.j.C.j = function(c) {
                return HV(b, c)
            };
            this.j.C.onRemove = function(c) {
                if (b.A) {
                    var d = c.bh;
                    d.unbindAll();
                    d.set("map", null);
                    d.release();
                    delete c.bh;
                    c.listeners && _.C(c.listeners, _.R.removeListener);
                    delete c.listeners;
                    delete c.editable_changed;
                    sV(c);
                    _.xm("Oc", "-p", c)
                }
            }
        },
        GV = function(a, b) {
            _.T("geometry").then(function(c) {
                a.m = new CV(function(d, e, f) {
                    return new uV(d, e, f, c.computeHeading, c.computeOffsetOrigin)
                }, a.l, b);
                EV(a.l, a.m);
                a.j.C.forEach(function(d) {
                    return HV(a, d)
                })
            })
        },
        HV = function(a, b) {
            if (a.m && a.A) {
                var c = b.D = new _.Bw(["baseMapType"], "planetRadius", _.jh);
                c.bindTo("baseMapType", a.j);
                var d = b.bh = new yV(b);
                d.set("map", a.l);
                d.bindTo("radius", b);
                d.bindTo("center", b);
                d.bindTo("capturing", b);
                d.bindTo("clickable", b);
                d.bindTo("cursor", b);
                d.bindTo("fillColor", b);
                d.bindTo("fillOpacity", b);
                d.bindTo("strokeColor", b);
                d.bindTo("strokeOpacity", b);
                d.bindTo("strokeWeight", b);
                d.bindTo("strokePosition", b);
                d.bindTo("zIndex", b);
                d.bindTo("suppressUndo", b);
                d.bindTo("planetRadius", c);
                b.listeners = [];
                _.C(wV, function(e) {
                    b.listeners.push(_.R.forward(d, e, b))
                });
                b.listeners.push(_.R.forward(b, "toolbar", d));
                FV(b, a.m);
                tV(b, a.l, c, a.A);
                _.um(a.l, "Oc");
                _.wm("Oc", "-p", b);
                _.R.addListener(b, "click", function() {
                    _.wm("Oc", "-i", b)
                })
            }
        },
        JV = function(a, b, c, d) {
            a.capturing_changed = function() {
                if (a.get("capturing"))
                    if (0 == a.get("clickable")) {
                        var e = a.l = new SU;
                        e.bindTo("draggableCursor", a, "cursor");
                        e.set("active", !0);
                        b.bindTo("cursor", e);
                        d.register(e)
                    } else
                        d.j = c,
                        d.m = a;
                else
                    a.l ? (_.Ou(d.A, a.l),
                        a.l.unbindAll(),
                        b.unbind("cursor"),
                        b.set("cursor", ""),
                        delete a.l) : d.j == c && d.m == a && (d.j = null,
                        d.m = null)
            }
        },
        PV = function(a, b, c) {
            var d = this;
            this.F = a;
            this.A = b;
            this.C = c;
            this.l = {};
            this.j = {};
            this.m = 0;
            this.D = function(e) {
                KV(d, this, e)
            };
            a.j = function(e) {
                var f = d.get("projection");
                f = e.Ce = {
                    style: LV(d.C, e),
                    geometry: MV(e, f)
                };
                NV(d, e);
                e.changed = d.D;
                _.ie(d.A, f)
            };
            a.onRemove = function(e) {
                var f = e.Ce;
                delete e.Ce;
                d.A.remove(f);
                delete e.changed;
                OV(e);
                e = _.Sd(e);
                delete d.l[e];
                delete d.j[e]
            }
        },
        KV = function(a, b, c) {
            var d = _.Sd(b);
            c in QV && (a.j[d] = b,
                OV(b));
            c in RV && (a.l[d] = b);
            SV(a)
        },
        SV = function(a) {
            a.m || (a.m = _.Ck(function() {
                a.m = 0;
                var b = a.l;
                a.l = {};
                var c = a.j;
                a.j = {};
                for (var d in b) {
                    var e = b[d],
                        f = e.Ce;
                    f.style = LV(a.C, e);
                    f.Yf && !c[d] && f.Yf()
                }
                b = a.A;
                var g = a.get("projection");
                for (d in c)
                    e = c[d],
                    f = e.Ce,
                    b.remove(f),
                    f.geometry = MV(e, g),
                    _.ie(b, f),
                    NV(a, e)
            }))
        },
        NV = function(a, b) {
            function c() {
                KV(e, b, "latLngs")
            }
            var d = b.get("latLngs");
            if (d) {
                var e = a,
                    f = _.Sd(b);
                a = d.getArray();
                for (var g = 0, h = a.length; g < h; ++g) {
                    var k = a[g];
                    TV(k);
                    k.l.eb[f] = k.A.eb[f] = k.m.eb[f] = c
                }
                TV(d);
                d.A.eb[f] = d.m.eb[f] = function(l, m) {
                    UV(m, f);
                    c()
                };
                d.l.eb[f] = c
            }
        },
        OV = function(a) {
            var b = a.get("latLngs");
            if (b) {
                a = _.Sd(a);
                UV(b, a);
                b = b.getArray();
                for (var c = 0, d = b.length; c < d; ++c)
                    UV(b[c], a)
            }
        },
        TV = function(a) {
            a.l || (a.l = function(b) {
                    _.Kc(a.l.eb, function(c, d) {
                        d(b)
                    })
                },
                a.l.eb = {});
            a.A || (a.A = function(b, c) {
                    _.Kc(a.A.eb, function(d, e) {
                        e(b, c)
                    })
                },
                a.A.eb = {});
            a.m || (a.m = function(b, c) {
                    _.Kc(a.m.eb, function(d, e) {
                        e(b, c)
                    })
                },
                a.m.eb = {})
        },
        UV = function(a, b) {
            a.l && delete a.l.eb[b];
            a.A && delete a.A.eb[b];
            a.m && delete a.m.eb[b]
        },
        $V = function(a) {
            var b = this.l = _.X("div");
            _.Tk(b, -202);
            _.Ov(b, "pointer");
            _.Kv(b);
            this.j = _.yB(VV, b, _.Hi, WV);
            _.R.bind(this, "toolbar", this, this.ij);
            var c = this;
            this.A = new _.Zv(a.l, {
                fd: function(d) {
                    d && (d = new _.M(d.L, d.O),
                        _.Sk(c.l, new _.M(d.x + XV.x, d.y + XV.y)))
                },
                bd: _.n()
            }, null, a);
            a.sa(this.A);
            _.mn(b, {
                Ha: function(d) {
                    _.Bm(d);
                    c.Fe(YV)
                },
                $b: function(d) {
                    _.Cm(d)
                },
                Ua: function(d) {
                    _.Cm(d)
                },
                Ka: function(d) {
                    _.Dm(d)
                },
                onClick: function(d) {
                    d = d.event;
                    _.Em(d);
                    d = d.ea;
                    _.Jd(d);
                    _.Kd(d);
                    c.C();
                    c.Ac()
                },
                lc: {
                    Zb: function(d, e) {
                        e.ea.noDrag = !0
                    },
                    Yc: _.n(),
                    tc: _.n()
                }
            });
            new _.Gq(b, b, {
                Gd: (0,
                    _.z)(this.Fe, this, _.Hi),
                Hd: (0,
                    _.z)(this.Fe, this, ZV)
            })
        },
        aW = function(a) {
            a.m && _.R.clearListeners(a.m, "suppressundo_changed")
        },
        bW = function(a, b, c) {
            a.Fe(_.Hi);
            a.C = b;
            aW(a);
            a.m = c;
            _.Lv(a.l);
            _.R.addListener(c, "suppressundo_changed", function() {
                c.get("suppressUndo") && a.Ac()
            })
        },
        cW = function(a) {
            var b = this;
            this.j = a;
            _.R.addListener(a, "set_at", function(c) {
                _.R.trigger(b, "set_at", c);
                var d = a.getLength();
                0 == c && 1 < d && _.R.trigger(b, "set_at", d)
            });
            _.R.addListener(a, "insert_at", function(c) {
                _.R.trigger(b, "insert_at", c);
                var d = a.getLength();
                2 == d ? _.R.trigger(b, "insert_at", 2) : 0 == c && 1 < d && _.R.trigger(b, "set_at", d)
            });
            _.R.addListener(a, "remove_at", function(c) {
                _.R.trigger(b, "remove_at", c);
                var d = a.getLength();
                1 == d ? _.R.trigger(b, "remove_at", 1) : 0 == c && 1 < d && _.R.trigger(b, "set_at", d)
            })
        },
        dW = function(a, b, c) {
            this.l = a;
            this.m = b;
            this.j = c;
            this.W = [_.R.bind(a, "set_at", this, this.Sl), _.R.bind(a, "insert_at", this, this.Oh), _.R.bind(a, "remove_at", this, this.Ol)];
            b = 0;
            for (a = a.getLength(); b < a; ++b)
                this.Oh(b)
        },
        fW = function(a, b, c) {
            var d = a.get("projection");
            if (d) {
                var e = a.l,
                    f = e.getAt(c),
                    g = a.m,
                    h = a.get("geodesic");
                0 < c && g.setAt(c - 1, eW(e.getAt(c - 1), f, h, d, a.j));
                c < e.getLength() - 1 && (a = eW(f, e.getAt(c + 1), h, d, a.j),
                    b ? g.insertAt(c, a) : g.setAt(c, a))
            }
        },
        eW = function(a, b, c, d, e) {
            c ? d = e(a, b, .5) : (180 < Math.abs(a.lng() - b.lng()) && (a = new _.P(a.lat(), _.Nc(a.lng(), b.lng() - 180, b.lng() + 180), !0)),
                a = d.fromLatLngToPoint(a),
                b = d.fromLatLngToPoint(b),
                d = d.fromPointToLatLng(new _.M((a.x + b.x) / 2, (a.y + b.y) / 2)));
            return d
        },
        gW = function(a, b, c, d, e) {
            _.Fk.call(this, a, b);
            _.t(c) && (this.path = c);
            _.t(d) && (this.vertex = d);
            _.t(e) && (this.edge = e)
        },
        hW = function(a, b, c, d, e) {
            this.C = a;
            this.A = b;
            this.H = c;
            this.F = d;
            this.l = [];
            this.j = [];
            this.D = [];
            this.J = e
        },
        jW = function(a, b, c) {
            var d = iW(a, b, c, !1),
                e = a.C,
                f;
            _.R.addListener(d, "dragstart", function(g) {
                f = b.getAt(g);
                var h = b.getArray(),
                    k = a.A,
                    l = h.length;
                if (2 > l)
                    e.set("anchors", []);
                else {
                    var m = h[k && 0 == g ? l - 1 : g - 1];
                    g = h[k && g == l - 1 ? 0 : g + 1];
                    h = [];
                    m && h.push(m);
                    g && h.push(g);
                    e.set("anchors", h)
                }
                e.bindTo("freeVertexPosition", d);
                e.set("map", a.get("map"))
            });
            _.R.addListener(d, "dragend", function(g, h, k) {
                e.set("map", null);
                _.R.trigger(a, "toolbar", {
                    j: !0,
                    l: k,
                    action: function() {
                        b.setAt(g, f)
                    }
                })
            });
            return d
        },
        kW = function(a, b, c) {
            var d = new _.ge,
                e = a.A ? new cW(b) : b,
                f = new dW(e, d, a.F);
            f.bindTo("geodesic", a);
            f.bindTo("projection", a);
            var g = iW(a, d, c, !0);
            g.C = f;
            var h = a.C;
            _.R.addListener(g, "dragstart", function(k) {
                k = [e.getAt(k), e.getAt(k + 1)];
                h.set("anchors", k);
                h.bindTo("freeVertexPosition", g);
                h.set("map", a.get("map"))
            });
            _.R.addListener(g, "dragend", function(k, l, m) {
                b.insertAt(k + 1, d.getAt(k));
                h.set("map", null);
                _.R.trigger(a, "toolbar", {
                    j: !0,
                    l: m,
                    action: function() {
                        b.removeAt(k + 1)
                    }
                })
            });
            return g
        },
        iW = function(a, b, c, d) {
            var e = new hV(b, ["pointer"], [0], d, c, a.H, a.get("map"), a.J);
            e.bindTo("projection", a);
            e.bindTo("zoom", a);
            e.bindTo("projectionCenterQ", a);
            e.bindTo("panningEnabled", a);
            e.bindTo("mapPixelBounds", a);
            e.bindTo("color", a);
            e.bindTo("zIndex", a);
            e.bindTo("offset", a);
            _.R.forward(e, "dragstart", a);
            _.R.forward(e, "dragend", a);
            _.R.forward(e, "panbynow", a);
            _.R.forward(e, "toolbar", a);
            _.C(wV, function(f) {
                _.R.addListener(e, f, function(g) {
                    var h = b.getAt(g);
                    if (a.A)
                        for (var k = d ? a.j : a.l, l = 0; l < k.length; ++l)
                            if (k[l] == e) {
                                var m = l;
                                break
                            }
                    _.R.trigger(a, f, new gW(h, void 0, m, d ? void 0 : g, d ? g : void 0))
                })
            });
            return e
        },
        lW = function(a) {
            var b = (0,
                _.z)(a.m, a);
            _.C(a.l, b);
            _.C(a.j, b);
            a.l.length = 0;
            a.j.length = 0;
            _.C(a.D, _.R.removeListener);
            a.D.length = 0
        },
        pW = function(a, b, c) {
            function d() {
                g[v++] = u.latLng[0];
                g[v++] = u.latLng[1];
                f && (h[m++] = u.distance);
                k = u
            }
            var e = a.path,
                f = a.j;
            if (!e.length)
                return a;
            var g = Array(e.length),
                h = f ? Array(f.length) : null;
            a = [];
            var k = mW();
            g[0] = k.latLng[0] = e[0];
            g[1] = k.latLng[1] = e[1];
            f && (h[0] = k.distance = f[0]);
            k.depth = 0;
            $U(k.latLng, k.ad);
            for (var l = 1, m = 1, q = [], r = 2, v = 2; r < e.length || q.length;) {
                if (q.length)
                    var u = q.pop();
                else
                    u = mW(),
                    u.depth = 0,
                    u.latLng[0] = e[r++],
                    u.latLng[1] = e[r++],
                    f && (u.distance = f[l++]),
                    $U(u.latLng, u.ad);
                if (12 <= Math.max(k.depth, u.depth))
                    d();
                else {
                    var w = new _.sd;
                    w.V = Math.min(k.latLng[0], u.latLng[0]);
                    w.aa = Math.max(k.latLng[0], u.latLng[0]);
                    w.X = Math.min(k.latLng[1], u.latLng[1]);
                    w.ba = Math.max(k.latLng[1], u.latLng[1]);
                    if (_.Fv(b, w)) {
                        var x = mW();
                        bV(k.ad, u.ad, x.ad);
                        aV(x.ad, x.latLng);
                        x.depth = Math.max(k.depth, u.depth) + 1;
                        f && (x.distance = (k.distance + u.distance) / 2);
                        var A = w.X - 1E-6,
                            D = w.ba + 1E-6;
                        w = x.latLng;
                        w[1] = nW(A, D, w[1]);
                        oW(k.latLng, u.latLng, a);
                        Math.max(Math.abs(x.latLng[0] - a[0]), Math.abs(x.latLng[1] - a[1])) <= c ? d() : (q.push(u),
                            q.push(x))
                    } else
                        d()
                }
            }
            return {
                path: g,
                j: h
            }
        },
        oW = function(a, b, c) {
            c[0] = (a[0] + b[0]) / 2;
            c[1] = (a[1] + b[1]) / 2
        },
        nW = function(a, b, c) {
            for (; c < a;)
                c += 360;
            for (; c > b;)
                c -= 360;
            return c
        },
        mW = function() {
            return {
                latLng: [0, 0],
                ad: new WU(0)
            }
        },
        qW = function(a) {
            return function(b, c) {
                if ("px" == b.j)
                    b = b.value / a;
                else {
                    var d = _.J(c);
                    b = d ? b.value / 100 * c[d - 1] : 0
                }
                return b
            }
        },
        yW = function(a, b, c, d) {
            --b;
            if (!(0 > b)) {
                var e = a.length,
                    f = 0;
                for (d(0); f < b;) {
                    var g = 1 << e,
                        h = e ? a[e - 1][f / g] : 0,
                        k = f + g;
                    k >= b && (k = b);
                    e && c(f, k, h) ? --e : (d(k),
                        f = k,
                        f & g || ++e)
                }
            }
        },
        zW = function(a, b) {
            return function(c, d) {
                if (0 == c)
                    return !0;
                c = a[c];
                d = a[d];
                for (var e = 0, f; f = b[e]; ++e) {
                    var g = f.offset;
                    if (f = f.repeat) {
                        if (Math.floor((c - g) / f) != Math.floor((d - g) / f))
                            return !0
                    } else if (c < g && g <= d)
                        return !0
                }
                return !1
            }
        },
        AW = function(a, b, c, d) {
            var e = a.V,
                f = a.X,
                g = a.aa,
                h = a.ba;
            return function(k, l, m) {
                var q = d[2 * k],
                    r = d[2 * k + 1];
                k = d[2 * l];
                l = d[2 * l + 1];
                var v = Math.min(r, l) - m,
                    u = Math.max(q, k) + m,
                    w = Math.max(r, l) + m;
                Math.min(q, k) - m <= g && e <= u && v <= h && f <= w ? m > b ? m = !0 : (v = c.fromLatLngToPoint(new _.P(q, r, !0)),
                    u = c.fromLatLngToPoint(new _.P(k, l, !0)),
                    v = c.fromPointToLatLng(new _.M((v.x + u.x) / 2, (v.y + u.y) / 2), !0),
                    r = (r + l) / 2,
                    q = (q + k) / 2 - v.lat(),
                    k = r - v.lng(),
                    m = Math.sqrt(q * q + k * k) + m > b) : m = !1;
                return m
            }
        },
        BW = function(a, b, c) {
            return function(d, e, f) {
                var g = d.path,
                    h = d.j,
                    k = AW(a, b, c, g);
                d = k;
                if (h) {
                    var l = zW(h, f);
                    d = function(r, v, u) {
                        return k(r, v, u) || l(r, v)
                    }
                }
                var m = [],
                    q = h ? [] : null;
                yW(e, g.length / 2, d, function(r) {
                    m.push(g[2 * r], g[2 * r + 1]);
                    h && q.push(h[r])
                });
                return {
                    path: m,
                    j: q
                }
            }
        },
        DW = function(a, b, c, d) {
            var e = a.j;
            if (!e)
                return null;
            a = a.path;
            for (var f = [], g = 0, h = a.length - 2; g < h;) {
                var k = a[g],
                    l = a[g + 1],
                    m = e[g / 2],
                    q = m - b;
                g += 2;
                var r = a[g],
                    v = a[g + 1];
                if (!(CW(k, l, d) & CW(r, v, d))) {
                    for (; _.Oc(k, r) && _.Oc(l, v) && g < h;)
                        g += 2,
                        r = a[g],
                        v = a[g + 1];
                    var u = e[g / 2] - b,
                        w = Math.atan2(r - k, l - v);
                    0 == m && (q -= 1E-9);
                    if (c)
                        for (m = Math.floor(u / c) * c; m > q;) {
                            var x = (m - q) / (u - q);
                            f.push(k + (r - k) * x, l + (v - l) * x, w);
                            m -= c
                        }
                    else
                        0 > q && 0 <= u && (q = (0 - q) / (u - q),
                            f.push(k + (r - k) * q, l + (v - l) * q, w))
                }
            }
            return f
        },
        CW = function(a, b, c) {
            var d = 0;
            _.Oc(a, -16, .001) && (d |= 1);
            _.Oc(a, c.L + 16, .001) && (d |= 2);
            _.Oc(b, -16, .001) && (d |= 4);
            _.Oc(b, c.O + 16, .001) && (d |= 8);
            return d
        },
        EW = function(a, b, c, d) {
            this.j = d;
            this.H = b;
            var e = this.J = 1 << b;
            b = _.Vu(this.j, {
                M: a.x,
                N: a.y,
                Y: b
            }, 16 / d.size.L);
            b = _.td(b.min.S, b.min.T, b.max.S, b.max.T);
            this.F = c;
            var f = b;
            d = new _.md(f.V, f.X);
            f = new _.md(f.aa, f.ba);
            b = _.sl(d, c, !0);
            var g = _.sl(f, c, !0);
            f = Math.min(b.lat(), g.lat());
            d = Math.max(b.lat(), g.lat());
            var h = Math.min(b.lng(), g.lng());
            g = Math.max(b.lng(), g.lng());
            b = (h + g) / 2;
            var k = _.Nc(b, -180, 180);
            h += k - b;
            g += k - b;
            b = _.td(f, h, d, g);
            f = new _.P(f, h, !0);
            h = new _.P(d, g, !0);
            d = _.rl(f, c);
            d = new _.M(d.S, d.T);
            f = _.rl(h, c);
            f = new _.sd([d, new _.M(f.S, f.T)]);
            this.l = b;
            this.A = f;
            this.C = a;
            a = .5 / e;
            b = this.A;
            this.D = Math.min(VU(c, a, new _.M(b.V, b.X)), VU(c, a, new _.M(b.aa, b.ba)));
            this.K = BW(this.l, this.D, c);
            this.m = qW(e)
        },
        GW = function(a, b, c, d) {
            for (var e = [], f = [], g = 0, h = d.length; g < h; ++g)
                f.push([]);
            g = 0;
            for (h = b.length; g < h; ++g) {
                var k = b[g],
                    l = k.l,
                    m = FW(a, d, l.j);
                l = k.j ? a.K(l, k.j, m) : {
                    path: _.Zu(l.path, 0),
                    j: l.j
                };
                if (l.path.length) {
                    c && (l = pW(l, a.l, a.D));
                    LU(l.path, a.F);
                    l = NU(l, a.A);
                    var q = l.path;
                    k = a.j.size;
                    if (q.length) {
                        e.push(q);
                        for (var r = 0; r < q.length; r += 2) {
                            var v = _.nk(a.j, new _.md(q[r], q[r + 1]), a.H, _.ma());
                            q[r] = (v.M - a.C.x) * k.L;
                            q[r + 1] = (v.N - a.C.y) * k.O
                        }
                        for (r = 0; q = m[r]; ++r)
                            (q = DW(l, q.offset, q.repeat, k)) && (f[r] = f[r].concat(q))
                    }
                }
            }
            return {
                paths: e,
                Me: f
            }
        },
        FW = function(a, b, c) {
            var d = [];
            if (c)
                for (var e = 0, f; f = b[e]; ++e)
                    d.push({
                        offset: a.m(f.offset, c),
                        repeat: a.m(f.repeat, c)
                    });
            return d
        },
        HW = function(a, b, c, d, e) {
            this.A = b;
            this.F = c;
            this.D = new _.rC(a.l, d, e);
            this.C = e;
            this.j = null;
            this.xb = !1
        },
        IW = function(a) {
            return _.Pc(a, function(b) {
                return _.Pc(b, function(c) {
                    return Math.round(c)
                })
            })
        },
        LW = function(a, b, c, d, e) {
            function f() {
                a.get("editable") ? (JW(a, b, d, e),
                    _.um(b, "Oe"),
                    _.wm("Oe", "-p", a)) : (_.R.trigger(c, "toolbar", {
                        j: !1,
                        poly: a
                    }),
                    KW(a))
            }
            a.editable_changed = f;
            f();
            a.ug = _.R.addListener(a, "toolbar", function(g) {
                g.poly = a;
                _.R.trigger(c, "toolbar", g)
            })
        },
        JW = function(a, b, c, d) {
            if (!a.A) {
                var e = new _.zH(a, a.Za);
                a.C = e;
                var f = new _.oH;
                f.bindTo("strokeColor", e);
                f.bindTo("strokeOpacity", e, "ghostStrokeOpacity");
                f.bindTo("strokeWeight", e);
                f.bindTo("geodesic", a);
                f.bindTo("zIndex", a);
                a.Mb = f;
                var g = b.__gm;
                a.j = RU(g);
                var h = _.uC(g, a),
                    k = _.Lk() ? 9 : 0,
                    l = new qV,
                    m = new hW(f, a.Za, function(q, r, v) {
                        return new fV(q, a.j, k, r, h, l, v)
                    }, c, d);
                m.set("map", b);
                m.bindTo("paths", a, "latLngs");
                m.bindTo("panes", g);
                m.bindTo("projection", b);
                m.bindTo("zoom", g);
                m.bindTo("projectionCenterQ", g);
                m.bindTo("panningEnabled", b, "draggable");
                m.bindTo("mapPixelBounds", g, "pixelBounds");
                m.bindTo("offset", g);
                m.bindTo("color", e, "strokeColor");
                m.bindTo("zIndex", a);
                m.bindTo("geodesic", a);
                m.bindTo("suppressGhostControlPoints", a);
                a.A = m;
                _.R.addListener(a, "click", function() {
                    a.get("editable") && _.wm("Oe", "-i", a)
                });
                _.R.forward(m, "panbynow", g);
                _.R.forward(m, "toolbar", a);
                _.C(wV, function(q) {
                    _.R.forward(m, q, a)
                })
            }
        },
        KW = function(a) {
            var b = a.A;
            b && (b.unbindAll(),
                b.set("map", null),
                _.R.clearInstanceListeners(b),
                delete a.A,
                a.j.unbindAll(),
                a.j.release(),
                delete a.j,
                a.Mb.unbindAll(),
                delete a.Mb,
                a.C.release(),
                delete a.C)
        },
        MW = function(a, b, c) {
            _.xh.call(this);
            this.m = Math.min(2, _.Kk());
            this.C = b;
            this.l = a;
            this.j = c || _.kj
        },
        PW = function(a, b, c, d, e) {
            this.j = c.size;
            this.F = d;
            this.C = b;
            this.l = NW(a, this.j, e);
            _.Sk(this.l, _.Hi);
            this.D = OW(this.l, e);
            this.H = NW(a, this.j, e);
            this.J = OW(this.H, e);
            this.fa = new _.IC(this.D);
            this.K = new _.IC(this.J);
            this.m = {};
            this.A = 0
        },
        NW = function(a, b, c) {
            a = a.createElement("canvas");
            a.width = b.L * c;
            a.height = b.O * c;
            a.style.width = _.W(b.L);
            a.style.height = _.W(b.O);
            _.Uk(a);
            return a
        },
        OW = function(a, b) {
            a = a.context = a.getContext("2d");
            a.scale(b, b);
            a.lineCap = a.lineJoin = "round";
            return a
        },
        SW = function(a) {
            a.A || (a.A = _.Ck(function() {
                a.A = 0;
                var b = QW(a);
                if (b.length) {
                    a.l.parentNode || a.C.appendChild(a.l);
                    var c = a.D,
                        d = a.J;
                    c.clearRect(0, 0, a.j.L, a.j.O);
                    for (var e = null, f = 0; f < b.length; ++f) {
                        var g = b[f],
                            h = g.j,
                            k = h.l;
                        _.Oc(1, k) ? (a.F(c, g.paths, h.strokeColor, h.strokeOpacity, h.strokeWeight, h.strokePosition, h.fillColor, h.fillOpacity),
                            RW(g.Me, h.j, c, a.fa, 1)) : (d.clearRect(0, 0, a.j.L, a.j.O),
                            a.F(d, g.paths, h.strokeColor, h.strokeOpacity / k, h.strokeWeight, h.strokePosition),
                            RW(g.Me, h.j, d, a.K, k),
                            c.globalAlpha = k,
                            c.drawImage(a.H, 0, 0, a.j.L, a.j.O));
                        !e && g.Aa && g.Aa.ac && (e = g.Aa.ac)
                    }
                    e && e()
                } else
                    a.l.parentNode && a.C.removeChild(a.l)
            }))
        },
        RW = function(a, b, c, d, e) {
            for (var f = 0, g = a.length; f < g; ++f) {
                var h = b[f],
                    k = c,
                    l = d,
                    m = a[f],
                    q = h.j,
                    r = h.scale,
                    v = h.rotation,
                    u = h.l,
                    w = h.strokeColor,
                    x = h.strokeOpacity / e,
                    A = h.strokeWeight,
                    D = h.fillColor;
                h = h.fillOpacity / e;
                k.beginPath();
                for (var E = 0, N = m.length; E < N; E += 3)
                    _.JC(l, q, m[E], m[E + 1], v + (u ? m[E + 2] : 0), r);
                h && (k.fillStyle = D,
                    k.globalAlpha = h,
                    k.fill());
                A && (k.lineWidth = A,
                    k.strokeStyle = w,
                    k.globalAlpha = x,
                    k.stroke())
            }
        },
        QW = function(a) {
            var b = [];
            a = a.m;
            for (var c in a)
                b.push(a[c]);
            b.sort(function(d, e) {
                return d.zIndex - e.zIndex
            });
            return b
        },
        TW = function(a, b, c) {
            function d(k, l) {
                k.beginPath();
                for (var m = 0, q; q = l[m]; ++m)
                    if (q.length) {
                        k.moveTo(Math.round(q[0]), Math.round(q[1]));
                        for (var r = 2, v = q.length; r < v;)
                            k.lineTo(Math.round(q[r++]), Math.round(q[r++]))
                    }
            }
            var e = c.size,
                f = a.createElement("canvas");
            f.width = b * e.L;
            f.height = b * e.O;
            var g = f.getContext("2d");
            g.lineCap = g.lineJoin = "round";
            g.scale(b, b);
            var h = [function(k, l, m, q, r) {
                k.lineWidth = r;
                k.strokeStyle = m;
                k.globalAlpha = q;
                k.stroke()
            }, function(k, l, m, q, r) {
                k.lineWidth = 2 * r;
                k.strokeStyle = m;
                k.globalAlpha = q;
                k.save();
                k.clip();
                k.stroke();
                k.restore()
            }, function(k, l, m, q, r) {
                g.lineWidth = 2 * r;
                g.strokeStyle = m;
                g.globalCompositeOperation = "source-over";
                g.clearRect(0, 0, e.L, e.O);
                d(g, l);
                g.stroke();
                g.globalCompositeOperation = "destination-out";
                g.fill();
                k.globalAlpha = q;
                k.drawImage(f, 0, 0, e.L, e.O)
            }];
            return function(k, l, m, q, r, v, u, w) {
                d(k, l);
                w && (k.fillStyle = u,
                    k.globalAlpha = w,
                    k.fill());
                if (r)
                    h[v](k, l, m, q, r)
            }
        },
        UW = function(a, b) {
            this.m = a;
            this.l = b;
            this.j = null
        },
        XW = function(a, b, c, d) {
            var e = this;
            this.l = b;
            this.j = d;
            a.j = function(g) {
                VW(e, g)
            };
            a.onRemove = function(g) {
                delete g.Yf;
                e.l.remove(g.bounds);
                g = g.geometry;
                var h = g.ta;
                for (q in h) {
                    var k = h[q],
                        l = k.Aa,
                        m = l.bg;
                    delete m.m[_.Sd(k)];
                    SW(m);
                    delete l.ta[_.Sd(k)]
                }
                g.ta = {};
                var q = g.Vb;
                _.xm(q.Za ? "Op" : "Ol", "-v", q)
            };
            c.j = function(g) {
                WW(e, g)
            };
            c.onRemove = function(g) {
                e.j.remove(g.bounds);
                var h = g.ta,
                    k;
                for (k in h) {
                    var l = h[k],
                        m = l.l;
                    delete m.ta[_.Sd(l)];
                    l = m.Vb;
                    _.xm(l.Za ? "Op" : "Ol", "-v", l)
                }
                g.ta = {}
            };
            a = a.l;
            for (var f in a)
                VW(e, a[f]);
            c = c.l;
            for (f in c)
                WW(e, c[f])
        },
        VW = function(a, b) {
            b.Yf = function() {
                var f = b.geometry.ta,
                    g;
                for (g in f) {
                    var h = f[g];
                    h.j = b.style;
                    h.zIndex = b.style.zIndex;
                    SW(h.Aa.bg)
                }
            };
            var c = b.geometry,
                d = c.bounds;
            d.poly = b;
            b.bounds = d;
            _.wC(a.l, d);
            a = a.j.search(d);
            d = 0;
            for (var e = a.length; d < e; ++d)
                YW(b, a[d].nd || null);
            0 < a.length && (c = c.Vb,
                _.wm(c.Za ? "Op" : "Ol", "-v", c))
        },
        WW = function(a, b) {
            var c = b.bounds;
            c.nd = b;
            _.wC(a.j, c);
            a = a.l.search(b.bounds);
            if (0 == a.length)
                b.ac && _.ac((0,
                    _.z)(b.ac, b));
            else {
                c = 0;
                for (var d = a.length; c < d; ++c)
                    YW(a[c].poly || null, b),
                    _.wm(a[c].poly.geometry.Vb.Za ? "Op" : "Ol", "-v", a[c].poly.geometry.Vb)
            }
        },
        YW = function(a, b) {
            var c = a.geometry,
                d = GW(b.Km, c.l, c.geodesic, c.j);
            if (d.paths.length) {
                var e = {};
                e.paths = d.paths;
                e.Me = d.Me;
                e.j = a.style;
                e.zIndex = a.style.zIndex;
                e.Aa = b;
                e.l = c;
                a = _.Sd(e);
                c.ta[a] = e;
                b.ta[a] = e;
                b = b.bg;
                b.m[_.Sd(e)] = e;
                SW(b)
            } else
                b.ac && _.ac((0,
                    _.z)(b.ac, b))
        },
        ZW = function(a) {
            return _.Pc(a, function(b) {
                var c = {},
                    d = b.path;
                if (50 <= d.length) {
                    for (var e = [], f = d.length - 2, g, h = 2; h < f; h <<= 1) {
                        for (var k = d[0], l = d[1], m = Math.ceil(f / (2 * h)), q = Array(m), r = 0, v = 0, u = d.length - 1 - h; r < u;) {
                            r += h;
                            var w = d[r],
                                x = d[r + 1];
                            r += h;
                            r > d.length - 2 && (r = d.length - 2);
                            var A = d[r],
                                D = d[r + 1],
                                E = w - k,
                                N = x - l;
                            k = A - k;
                            var va = D - l,
                                sa = E * k + N * va;
                            l = k * k + va * va;
                            sa >= l ? (w = A - w,
                                x = D - x,
                                x = w * w + x * x) : 0 >= sa ? x = E * E + N * N : (x = E * va - N * k,
                                x *= x,
                                x /= l + 1E-16);
                            x = Math.sqrt(x);
                            g && (x += Math.max(g[2 * v], g[2 * v + 1] || 0));
                            q[v++] = x;
                            k = A;
                            l = D
                        }
                        v < m && (q[v] = g ? g[2 * v] : 0);
                        g = q;
                        e.push(q)
                    }
                    c.j = e
                }
                c.l = b;
                b = f = Infinity;
                e = g = -Infinity;
                h = 0;
                for (m = d.length; h < m;)
                    q = d[h++],
                    b = Math.min(b, q),
                    e = Math.max(e, q),
                    q = d[h++],
                    f = Math.min(f, q),
                    g = Math.max(g, q);
                d = new _.sd;
                d.V = b;
                d.aa = e;
                d.X = f;
                d.ba = g;
                c.bounds = d;
                return c
            })
        },
        bX = function(a, b, c, d) {
            return _.Pc(a, function(e) {
                var f = e.path;
                e = e.j;
                var g = null;
                if (b) {
                    g = c ? $W(f) : aX(f, d);
                    for (var h = {
                            0: 0
                        }, k = 0, l = [0], m = 1, q = e.length; m < q; ++m) {
                        var r = e[m];
                        r in h ? k = h[r] : (k += g(m - 1),
                            h[r] = k);
                        l.push(k)
                    }
                    g = l
                }
                return {
                    path: f,
                    j: g
                }
            })
        },
        aX = function(a, b) {
            var c = _.Zu(a, 0);
            LU(c, b);
            return function(d) {
                d *= 2;
                var e = c[d] - c[d + 2];
                d = c[d + 1] - c[d + 3];
                return Math.sqrt(e * e + d * d)
            }
        },
        $W = function(a) {
            return function(b) {
                b *= 2;
                var c = new _.P(a[b], a[b + 1]);
                b = new _.P(a[b + 2], a[b + 3]);
                return _.Uu(c, b, 1)
            }
        },
        fX = function(a) {
            a.length && (a = cX(a, dX),
                a = cX(a, eX));
            return a
        },
        cX = function(a, b) {
            var c = [],
                d = new WU(0),
                e = new WU(0),
                f = new WU(0),
                g = Array(a.length);
            g[0] = a[0];
            g[1] = a[1];
            $U(a, d);
            for (var h = 2, k = 2; h < a.length;) {
                c[0] = a[h];
                c[1] = a[h + 1];
                $U(c, f);
                b(d, f, e) && (aV(e, c),
                    g[k++] = c[0],
                    g[k++] = c[1]);
                g[k++] = a[h++];
                g[k++] = a[h++];
                var l = d;
                d = f;
                f = l
            }
            return g
        },
        dX = function(a, b, c) {
            if (0 < a.z == 0 < b.z)
                return !1;
            ZU(a, b, gX);
            ZU(gX, hX, c);
            c.z = 0;
            if (1E-12 > XU(c, c))
                return !1;
            0 > XU(c, a) + XU(c, b) && (c.x = -c.x,
                c.y = -c.y);
            return !0
        },
        eX = function(a, b, c) {
            ZU(a, b, gX);
            ZU(hX, gX, iX);
            ZU(gX, iX, c);
            if (1E-12 > XU(c, c) || 0 < XU(a, iX) == 0 < XU(b, iX))
                return !1;
            0 > XU(c, a) + XU(c, b) && (c.x = -c.x,
                c.y = -c.y,
                c.z = -c.z);
            return !0
        },
        kX = function(a, b, c) {
            if (!b)
                return null;
            var d = [];
            b.forEach(function(e) {
                d.push(jX(e))
            });
            a && _.C(d, KU);
            if (c)
                for (a = 0,
                    b = d.length; a < b; ++a)
                    d[a] = fX(d[a]);
            return d
        },
        lX = function(a) {
            return _.Pc(a, function(b) {
                if (b.length) {
                    var c = b[1];
                    for (var d = [0], e = 1, f = 1; e < b.length / 2; ++e,
                        ++f) {
                        var g = b[2 * e + 1];
                        if (180 < Math.abs(c - g)) {
                            var h = g < c ? 1 : -1,
                                k = b[2 * e - 2],
                                l = b[2 * e];
                            b.splice(2 * e, 0, l, g + 360 * h, l, g + 450 * h, 90, g + 450 * h, 90, c - 450 * h, k, c - 450 * h, k, c - 360 * h);
                            d.push(f, f, f, f, f, f - 1);
                            e += 6
                        }
                        d.push(f);
                        c = g
                    }
                    c = d
                } else
                    c = [];
                return {
                    path: b,
                    j: c
                }
            })
        },
        jX = function(a) {
            a = a.j;
            for (var b = a.length, c = Array(2 * b), d = 0, e = 0; d < b; ++d) {
                var f = a[d];
                c[e++] = f.lat();
                c[e++] = f.lng()
            }
            return c
        },
        mX = _.n(),
        MV = function(a, b) {
            var c = {},
                d = a.get("icons"),
                e = !a.Za && !!_.J(d),
                f = !0;
            c.j = [];
            e && _.C(d, function(k) {
                var l = UU(k.offset) || nX;
                k = UU(k.repeat) || oX;
                c.j.push({
                    offset: l,
                    repeat: k
                });
                f = f && (0 == l.value || "%" == l.j) && (0 == k.value || "%" == k.j)
            });
            d = c.geodesic = a.get("geodesic");
            var g = kX(a.Za, a.get("latLngs"), d);
            g = lX(g);
            var h = d && f;
            d && e && !h && (g = pX(g));
            g = bX(g, e, h, b);
            b = c.l = ZW(g);
            if (1 == b.length)
                e = b[0].bounds;
            else
                for (e = new _.sd,
                    d = 0,
                    g = b.length; d < g; ++d)
                    _.Pu(e, b[d].bounds);
            c.bounds = e;
            c.Vb = a;
            c.ta = {};
            return c
        },
        pX = function(a) {
            return _.Pc(a, function(b) {
                return pW(b, _.Ki, .1)
            })
        },
        qX = function() {
            var a = _.UC();
            this.m = _.qH;
            this.j = _.pH;
            this.l = a
        },
        LV = function(a, b) {
            function c(l) {
                return _.Qc(b.get(l), f[l])
            }
            var d = {},
                e = d.Za = b.Za,
                f = e ? a.j : a.m;
            d.strokeColor = c("strokeColor");
            d.strokeOpacity = c("strokeOpacity");
            d.strokeWeight = c("strokeWeight");
            d.clickable = c("clickable");
            e ? (d.strokePosition = c("strokePosition"),
                d.fillColor = c("fillColor"),
                d.fillOpacity = c("fillOpacity")) : d.strokePosition = a.j.strokePosition;
            var g = b.get("zIndex") || 0;
            d.zIndex = 1E3 * g + _.Sd(b) % 1E3;
            d.strokeWeight = Math.min(d.strokeWeight, 0 == d.strokePosition ? 32 : 16);
            d.m = b.get("hitStrokeWeight") || rX(d.strokeWeight, d.strokePosition);
            d.j = [];
            d.l = 1;
            if (!e) {
                e = b.get("icons") || [];
                var h = a.l,
                    k = 0;
                _.C(e, function(l) {
                    var m = h(l.icon || {}, d.strokeColor, d.strokeOpacity, d.strokeWeight);
                    m.l = !l.fixedRotation;
                    d.j.push(m);
                    k = Math.max(k, m.strokeOpacity);
                    k = Math.max(k, m.fillOpacity)
                });
                _.Oc(0, k) || (_.Oc(0, d.strokeOpacity) || _.Oc(0, d.strokeWeight)) && 1 == d.j.length || (d.l = Math.max(k, d.strokeOpacity));
                _.J(e) && (a = b.get("map"),
                    _.um(a, "Os"),
                    _.wm("Os", "-p", b))
            }
            return d
        },
        rX = function(a, b) {
            switch (b) {
                case 1:
                    return 0;
                case 2:
                    return 2 * a;
                default:
                    return a
            }
        },
        uX = function(a) {
            var b = this;
            this.l = a;
            this.j = a.__gm;
            var c = new _.he;
            (new PV(this.j.A, c, new qX, new mX)).bindTo("projection", a);
            var d = _.td(-100, -200, 100, 200),
                e = new _.vC(d);
            d = new _.vC(d);
            this.J = new _.he;
            new XW(c, e, this.J, d);
            var f = _.Nk(a.getDiv()),
                g = void 0,
                h = null;
            this.H = new _.ne(null, void 0);
            _.tC(a, this.H, "overlayLayer", 30);
            this.D = this.C = this.A = this.F = this.m = null;
            this.j.j.then(function(k) {
                b.D = k.ra;
                sX(b, k.ra);
                k.Lc.ma(function(l) {
                    if (l && g != l.ka) {
                        h && h.unbindAll();
                        g = l.ka;
                        var m = new UW(g, f);
                        h = new MW(b.J, function(q) {
                            for (var r = [], v = 0; v < arguments.length; ++v)
                                r[v - 0] = arguments[v];
                            return m.A.apply(m, _.wa(r))
                        }, g);
                        h.bindTo("projection", a);
                        b.H.set(h.Na())
                    }
                })
            });
            _.R.addListener(this.j.A, "insert", function(k) {
                return tX(b, k)
            });
            _.R.addListener(this.j.A, "remove", function(k) {
                if (b.A && b.D) {
                    _.C(k.qh || [], _.R.removeListener);
                    delete k.draggable_changed;
                    delete k.qh;
                    _.xm("Od", "-p", k);
                    var l = b.A;
                    delete k.editable_changed;
                    KW(k);
                    _.R.trigger(l, "toolbar", {
                        j: !1,
                        poly: k
                    });
                    k.ug && (_.R.removeListener(k.ug),
                        delete k.ug);
                    _.xm("Oe", "-p", k);
                    k.set("capturing", !1);
                    delete k.capturing_changed;
                    k.Zd || (k.Za ? _.xm("Op", "-p", k) : (_.xm("Ol", "-p", k),
                        l = k.get("icons"),
                        _.J(l) && _.xm("Os", "-p", k)))
                }
            })
        },
        sX = function(a, b) {
            a.C = new HW(a.J, a.j, function(c) {
                return a.l.getProjection().fromPointToLatLng(c)
            }, b.l, a.H);
            a.j.m.register(a.C);
            a.A = vX(a, b);
            _.T("geometry").then(function(c) {
                a.m = c;
                a.F = new CV(function(d, e, f) {
                    return d.get("geodesic") ? new AV(d, e, f, a.m.computeHeading, a.m.computeOffset, a.m.computeOffsetOrigin) : new BV(d, e, f)
                }, a.l, b);
                EV(a.l, a.F);
                a.j.A.forEach(function(d) {
                    return tX(a, d)
                })
            })
        },
        vX = function(a, b) {
            b = new $V(b);
            b.bindTo("panes", a.j);
            b.bindTo("projection", a.l);
            b.bindTo("zoom", a.j);
            b.bindTo("projectionCenterQ", a.j);
            b.bindTo("offset", a.j);
            _.R.bind(a.l, "click", b, b.Ac);
            return b
        },
        tX = function(a, b) {
            if (a.F && a.A && a.C && a.m && a.D) {
                FV(b, a.F);
                LW(b, a.l, a.A, a.m.interpolate, a.D);
                JV(b, a.j, a.C, a.j.m);
                if (!b.Zd) {
                    var c = b.Za ? "Op" : "Ol";
                    _.um(a.l, c);
                    _.wm(c, "-p", b)
                }
                _.R.addListener(b, "click", function() {
                    b.Za ? b.Zd || _.wm("Op", "-i", b) : _.wm("Ol", "-i", b)
                })
            }
        },
        wX = function(a, b, c) {
            if (!a || !b || !c)
                return null;
            var d = c.lat(),
                e = c.lng();
            c = b & 1 ? d : a.na.j;
            var f = b & 2 ? e : a.ia.j;
            d = b & 4 ? d : a.na.l;
            var g = b & 8 ? e : a.ia.l;
            if (c > d) {
                var h = c;
                c = d;
                d = h
            }
            b & 10 && !a.ia.contains(e) && (h = _.Bd(e, a.ia.j),
                a = _.Bd(a.ia.l, e),
                b & 2 ? h > a : a > h) && (h = f,
                f = g,
                g = h);
            return _.Ed(c, f, d, g)
        },
        xX = function() {
            var a = new _.sh({
                clickable: !1,
                fillOpacity: 0
            });
            a.bindTo("map", this);
            a.bindTo("strokeColor", this);
            a.bindTo("strokeOpacity", this);
            a.bindTo("strokeWeight", this);
            var b = new _.Bw(["bounds", "freeControlPoint", "freeVertexPosition"], "return", wX);
            b.bindTo("bounds", this);
            b.bindTo("freeControlPoint", this);
            b.bindTo("freeVertexPosition", this);
            a.bindTo("bounds", b, "return");
            this.j = _.nH();
            this.j.bindTo("zIndex", this);
            a.bindTo("zIndex", this.j, "ghostZIndex")
        },
        yX = function(a, b, c) {
            this.H = a;
            this.D = b;
            this.m = this.C = null;
            this.l = new _.ge;
            _.R.bind(this.l, "set_at", this, this.$m);
            this.A = new _.ge;
            _.R.bind(this.A, "set_at", this, this.an);
            this.j = !1;
            this.F = c
        },
        FX = function(a, b, c) {
            var d = c ? new hV(a.l, zX, AX, !1, b.overlayMouseTarget, a.D, a.get("map"), a.F) : new hV(a.A, BX, CX, !0, b.overlayMouseTarget, a.D, a.get("map"), a.F);
            d.bindTo("projection", a);
            d.bindTo("zoom", a);
            d.bindTo("projectionCenterQ", a);
            d.bindTo("panningEnabled", a);
            d.bindTo("mapPixelBounds", a);
            d.bindTo("color", a);
            d.bindTo("zIndex", a);
            d.bindTo("offset", a);
            var e = a.H,
                f = c ? DX : EX,
                g;
            _.R.addListener(d, "dragstart", function(h) {
                g = a.get("bounds");
                e.bindTo("freeVertexPosition", d);
                e.set("freeControlPoint", f[h]);
                e.set("map", a.get("map"))
            });
            _.R.addListener(d, "dragend", function(h, k, l) {
                e.set("map", null);
                _.R.trigger(a, "toolbar", {
                    j: !0,
                    l: l,
                    action: function() {
                        a.set("bounds", g)
                    }
                })
            });
            _.R.forward(d, "dragstart", a);
            _.R.forward(d, "dragend", a);
            _.R.forward(d, "panbynow", a);
            return d
        },
        GX = function(a) {
            a && (a.unbindAll(),
                a.release(),
                _.R.clearInstanceListeners(a))
        },
        HX = function(a, b, c) {
            a.j || (a.j = !0,
                b = wX(a.get("bounds"), b, c),
                a.set("bounds", b),
                a.j = !1)
        },
        KX = function(a, b, c) {
            function d() {
                a.get("editable") ? IX(a, b, c) : (JX(a),
                    _.R.trigger(a, "toolbar", {
                        j: !1
                    }))
            }
            a.editable_changed = d;
            d()
        },
        IX = function(a, b, c) {
            if (!a.m) {
                var d = new _.zH(a, !0);
                a.A = d;
                var e = new xX;
                e.bindTo("strokeColor", d);
                e.bindTo("strokeOpacity", d, "ghostStrokeOpacity");
                e.bindTo("strokeWeight", d);
                e.bindTo("bounds", a);
                e.bindTo("zIndex", a);
                a.C = e;
                var f = b.__gm;
                a.j = RU(f);
                var g = _.uC(f, a),
                    h = _.Lk() ? 9 : 0,
                    k = new qV;
                c = new yX(e, function(l, m, q) {
                    return new fV(l, a.j, h, m, g, k, q)
                }, c);
                c.set("map", b);
                c.bindTo("bounds", a);
                c.bindTo("panes", f);
                c.bindTo("projection", b);
                c.bindTo("zoom", f);
                c.bindTo("projectionCenterQ", f);
                c.bindTo("panningEnabled", b, "draggable");
                c.bindTo("mapPixelBounds", f, "pixelBounds");
                c.bindTo("offset", f);
                c.bindTo("color", d, "strokeColor");
                c.bindTo("zIndex", a);
                c.bindTo("suppressGhostControlPoints", a);
                a.m = c;
                _.R.forward(c, "panbynow", f);
                _.R.forward(c, "toolbar", a)
            }
        },
        JX = function(a) {
            var b = a.m;
            b && (b.unbindAll(),
                b.set("map", null),
                _.R.clearInstanceListeners(b),
                delete a.m,
                a.j.unbindAll(),
                a.j.release(),
                delete a.j,
                a.C.unbindAll(),
                delete a.C,
                a.A.release(),
                delete a.A)
        },
        LX = function(a, b, c) {
            this.m = a;
            this.da = c;
            a = a.get("bounds");
            this.C = a.getSouthWest();
            this.A = a.getNorthEast();
            this.l = c.fromDivPixelToLatLng(b)
        },
        MX = function(a) {
            var b = this,
                c = this.j = new _.qh;
            c.sd = a;
            c.Zd = !0;
            c.bindTo("capturing", b);
            c.bindTo("cursor", b);
            c.bindTo("map", b);
            c.bindTo("strokeColor", b);
            c.bindTo("strokeOpacity", b);
            c.bindTo("strokeWeight", b);
            c.bindTo("strokePosition", b);
            c.bindTo("fillColor", b);
            c.bindTo("fillOpacity", b);
            c.bindTo("clickable", b);
            c.bindTo("zIndex", b);
            c.bindTo("suppressUndo", b);
            var d = this.l = [];
            _.C(wV, function(e) {
                d.push(_.R.forward(c, e, b))
            });
            d.push(_.R.forward(b, "toolbar", c))
        },
        PX = function(a) {
            var b = this;
            this.j = a;
            this.l = a.__gm;
            this.m = this.A = null;
            this.l.j.then(function(c) {
                c = c.ra;
                b.m = c;
                NX(b, c)
            });
            this.l.D.j = function(c) {
                return OX(b, c)
            };
            this.l.D.onRemove = function(c) {
                if (b.m) {
                    var d = c.Zh;
                    d.unbindAll();
                    d.set("map", null);
                    d.release();
                    delete c.Zh;
                    c.listeners && _.C(c.listeners, _.R.removeListener);
                    delete c.listeners;
                    delete c.editable_changed;
                    JX(c);
                    _.xm("Or", "-p", c)
                }
            }
        },
        NX = function(a, b) {
            a.A = new CV(function(c, d, e) {
                return new LX(c, d, e)
            }, a.j, b);
            EV(a.j, a.A);
            a.l.D.forEach(function(c) {
                return OX(a, c)
            })
        },
        OX = function(a, b) {
            if (a.A && a.m) {
                var c = b.Zh = new MX(b);
                c.set("map", a.j);
                c.bindTo("bounds", b);
                c.bindTo("capturing", b);
                c.bindTo("cursor", b);
                c.bindTo("clickable", b);
                c.bindTo("fillColor", b);
                c.bindTo("fillOpacity", b);
                c.bindTo("strokeColor", b);
                c.bindTo("strokeOpacity", b);
                c.bindTo("strokeWeight", b);
                c.bindTo("strokePosition", b);
                c.bindTo("suppressUndo", b);
                c.bindTo("zIndex", b);
                var d = b.listeners = [];
                _.C(wV, function(e) {
                    d.push(_.R.forward(c, e, b))
                });
                d.push(_.R.forward(b, "toolbar", c));
                FV(b, a.A);
                KX(b, a.j, a.m);
                _.um(a.j, "Or");
                _.wm("Or", "-p", b);
                _.R.addListener(b, "click", function() {
                    _.wm("Or", "-i", b)
                })
            }
        },
        QX = _.n(),
        wV = "click dblclick mousedown mousemove mouseout mouseover mouseup rightclick".split(" ");
    _.B(SU, _.S);
    SU.prototype.l = function(a) {
        return "dragstart" != a && "drag" != a && "dragend" != a
    };
    SU.prototype.m = function() {
        return this.get("active") ? this : null
    };
    SU.prototype.handleEvent = function(a, b, c) {
        if ("mouseout" == a)
            this.set("cursor", "");
        else if ("mouseover" == a) {
            var d = this.get("draggableCursor");
            d && this.set("cursor", d)
        }
        _.R.trigger(c, a, new _.Fk(b.latLng, b.wa))
    };
    SU.prototype.zIndex = Infinity;
    var TU = {};
    WU.prototype.equals = function(a) {
        return this.x == a.x && this.y == a.y && this.z == a.z
    };
    _.B(dV, _.S);
    dV.prototype.l = function(a, b, c, d, e) {
        return !e && d && a ? _.Uu(d, a, c) : b
    };
    _.B(fV, _.S);
    fV.prototype.release = function() {
        _.ic(this.j);
        _.C(this.W, _.R.removeListener);
        this.W.length = 0;
        this.C.remove();
        this.D.remove();
        this.m.unbindAll();
        this.m.release();
        this.A.set("active", !1)
    };
    fV.prototype.position_changed = function() {
        var a = this.get("position");
        if (a) {
            this.j.style.display = "block";
            var b = 5 + this.F;
            _.Sk(this.j, new _.M(a.x - b, a.y - b))
        } else
            this.j.style.display = "none"
    };
    fV.prototype.color_changed = function() {
        var a = this.get("color");
        this.j.firstChild.style.borderColor = a;
        eV(this)
    };
    _.B(hV, _.S);
    hV.prototype.release = function() {
        _.C(this.K, _.R.removeListener);
        this.K.length = 0;
        _.C(this.l, (0,
            _.z)(this.ca, this));
        this.l.length = 0;
        _.R.clearInstanceListeners(this.A);
        _.ic(this.A)
    };
    hV.prototype.zIndex_changed = function() {
        var a = this.get("zIndex") || 0;
        this.D && --a;
        _.Tk(this.A, a)
    };
    hV.prototype.F = function(a, b) {
        var c = this,
            d = {};
        d.index = b;
        c.l.splice(b, 0, d);
        d.D = c.H[b % c.H.length];
        var e = this.ja(c.A, c.J[b % c.J.length], c.D);
        e.bindTo("color", c);
        e.bindTo("panningEnabled", c);
        e.bindTo("mapPixelBounds", c);
        d.l = e;
        var f = [_.R.forward(e, "panbynow", c)];
        b = a && this.j ? _.rl(a, this.j.getProjection()) : null;
        e.set("latLngPosition", a);
        d.C = !0;
        d.m = null;
        d.A = null;
        a = new _.Zv(this.m.l, {
            fd: function(g) {
                g ? e.set("position", new _.M(g.L, g.O)) : e.set("position", null)
            },
            bd: _.n()
        }, b, this.m, function() {
            if (c.j) {
                var g = d.j.getPosition();
                g && (g = _.sl(g, c.j.getProjection()),
                    d.C = !1,
                    d.l.set("latLngPosition", g),
                    d.C = !0)
            }
        });
        this.m.sa(a);
        d.j = a;
        f.push(_.R.addListener(e, "latlngposition_changed", function() {
            if (d.C && c.j) {
                var g = d.l.get("latLngPosition");
                g ? d.j.setPosition(_.rl(g, c.j.get("projection"))) : d.j.setPosition(null)
            }
        }));
        f.push(_.R.addListener(e, "dragstart", function() {
            d.m = _.$v(d.j);
            d.m && _.aw(d.j, d.m)
        }));
        f.push(_.R.addListener(e, "dragend", function() {
            var g = d.j.getPosition();
            if (g && c.j && (g = _.sl(g, c.j.get("projection")),
                    g = iV(c, d, g)) && (g = _.rl(g, c.j.get("projection")),
                    g = _.$v(d.j, g),
                    g = jV(d, g)) && (g = d.j.getPosition(g))) {
                var h = _.sl(g, c.j.get("projection"));
                d.C = !1;
                d.l.set("latLngPosition", h);
                d.C = !0;
                d.j.setPosition(g)
            }
            d.m = null;
            d.A = null
        }));
        f.push(_.R.addListener(e, "deltaclientposition_changed", function() {
            var g = d.l.get("deltaClientPosition");
            if (g && (d.m || d.A) && c.j) {
                var h = d.A || d.m;
                d.A = {
                    clientX: h.clientX + g.clientX,
                    clientY: h.clientY + g.clientY
                };
                g = c.m.yb(d.A);
                g = _.sl(g, c.j.get("projection"));
                h = d.A;
                var k = iV(c, d, g);
                k && !k.equals(g) && (g = _.rl(k, c.j.get("projection")),
                    h = _.$v(d.j, g));
                (h = jV(d, h)) && _.aw(d.j, h)
            }
        }));
        f.push(_.R.addListener(e, "dragstart", function() {
            c.bindTo("freeVertexPosition", e, "latLngPosition");
            kV(c, d, "dragstart")
        }));
        f.push(_.R.addListener(e, "dragend", function() {
            c.ua.setAt(d.index, e.get("latLngPosition"));
            kV(c, d, "dragend")
        }));
        _.C(wV, function(g) {
            f.push(_.R.addListener(e, g, function() {
                kV(c, d, g)
            }))
        });
        d.listeners = f
    };
    hV.prototype.ca = function(a) {
        a.l.unbindAll();
        a.l.release();
        a.j && this.m.Vc(a.j);
        _.C(a.listeners, _.R.removeListener);
        a.listeners.length = 0
    };
    _.B(lV, _.S);
    var mV = ["pointer", "row-resize", "row-resize", "col-resize", "col-resize"],
        nV = [0, 2, 2, 1, 1];
    _.p = lV.prototype;
    _.p.map_changed = function() {
        this.get("map") || (this.C.set("map", null),
            pV(this),
            _.R.clearInstanceListeners(this.j))
    };
    _.p.panes_changed = function() {
        pV(this);
        this.A = oV(this)
    };
    _.p.fg = function() {
        var a = this.j,
            b = this.get("center"),
            c = this.get("radius");
        if (b && _.K(c)) {
            this.m = !0;
            var d = this.get("planetRadius"),
                e = _.fc(c / d);
            var f = _.ec(b.lat());
            if (d = c / d) {
                c = Math.cos(d);
                d = Math.sin(d);
                var g = Math.sin(f);
                f = Math.atan2(Math.sin(Math.acos((1 - c) / d * Math.tan(f))) * d * Math.cos(f), c - g * g)
            } else
                f = 0;
            f = _.fc(f);
            a.setAt(0, b);
            c = b.lat() + e;
            90 > c ? a.setAt(1, new _.P(c, b.lng())) : a.setAt(1, null);
            e = b.lat() - e; -
            90 < e ? a.setAt(2, new _.P(e, b.lng())) : a.setAt(2, null);
            180 >= f ? (e = b.lng() + f,
                f = b.lng() - f,
                a.setAt(3, new _.P(b.lat(), e)),
                a.setAt(4, new _.P(b.lat(), f))) : (a.setAt(3, null),
                a.setAt(4, null));
            this.m = !1;
            this.l || _.R.trigger(this, "toolbar", {
                j: !1
            })
        } else
            a.clear()
    };
    _.p.center_changed = lV.prototype.fg;
    _.p.radius_changed = lV.prototype.fg;
    _.p.planetRadius_changed = lV.prototype.fg;
    _.p.bn = function(a) {
        if (!this.m) {
            var b = this.j.getAt(a);
            if (0 == a)
                _.Dv(this, function() {
                    this.l = !0;
                    this.set("center", b);
                    this.l = !1
                }, 0);
            else {
                var c = _.Uu(this.get("center"), b, this.get("planetRadius"));
                _.Dv(this, function() {
                    this.l = !0;
                    this.set("radius", c);
                    this.l = !1
                }, 0)
            }
        }
    };
    qV.prototype.construct = function(a, b, c, d, e) {
        a = _.X("div", a, new _.M(b, b), new _.O(c, c));
        a.style.borderWidth = _.W(d);
        a.style.borderStyle = "solid";
        a.style.borderRadius = _.W(Math.ceil(c / 2 + d));
        _.Pv(a, e)
    };
    var RX = new _.P(90, 0),
        SX = new _.P(-90, 0);
    uV.prototype.j = function(a) {
        a = this.da.fromDivPixelToLatLng(a);
        var b = this.A(a, this.l, this.C);
        b || (b = Math.abs(_.Uu(a, RX) - this.l) < Math.abs(_.Uu(a, SX) - this.l) ? RX : SX);
        this.m.set("center", b)
    };
    _.B(yV, _.S);
    yV.prototype.center_changed = function() {
        _.yg(this.U)
    };
    yV.prototype.radius_changed = function() {
        _.yg(this.U)
    };
    yV.prototype.planetRadius_changed = function() {
        _.yg(this.U)
    };
    yV.prototype.release = function() {
        for (var a = this.j, b = 0, c = a.length; b < c; ++b)
            _.R.removeListener(a[b]);
        this.j = null;
        this.l.unbindAll();
        this.l = null
    };
    AV.prototype.j = function(a) {
        var b = this;
        a = b.da.fromDivPixelToLatLng(a);
        var c = this.D(a, this.H, this.J);
        c ? 89 < Math.abs(c.lat()) && (c = new _.P(_.Mc(c.lat(), -89, 89), c.lng())) : c = new _.P(this.m.lat(), a.lng() - this.A);
        b.l.get("latLngs").forEach(function(d, e) {
            for (var f = 0, g = d.getLength(); f < g; ++f) {
                var h = b.F(c, b.C[e][f].distance, b.C[e][f].heading);
                d.setAt(f, h)
            }
        });
        this.m = c;
        this.A = a.lng() - c.lng()
    };
    BV.prototype.j = function(a) {
        var b = this.m.get("latLngs"),
            c = this.da,
            d = c.fromLatLngToDivPixel(this.l),
            e = new _.M(d.x - a.x, d.y - a.y);
        _.C(this.A, function(f, g) {
            var h = b.getAt(g);
            _.C(f, function(k, l) {
                k = c.fromLatLngToDivPixel(k);
                k.x -= e.x;
                k.y -= e.y;
                h.setAt(l, c.fromDivPixelToLatLng(k))
            })
        })
    };
    _.B(CV, _.S);
    CV.prototype.release = function() {
        this.m.release();
        this.W && _.C(this.W, _.R.removeListener);
        this.W = null
    };
    var TX = new _.O(30, 30),
        UX = new _.M(TX.width / 2, TX.height / 2);
    _.p = CV.prototype;
    _.p.Ge = function() {
        if (!this.get("active")) {
            var a = this.get("panes"),
                b = this.get("projectionController"),
                c = this.get("poly");
            if (a != this.C || b != this.da || c != this.j)
                if (this.C = a,
                    this.da = b,
                    this.j = c,
                    this.W && _.C(this.W, _.R.removeListener),
                    this.W = null,
                    this.C && this.da && this.j) {
                    this.W = [_.R.bind(this.j, "mousedown", this, this.Ml), _.R.bind(this.j, "mouseup", this, this.Nl), _.R.bind(this.j, "movestart", this, this.gj), _.R.bind(this.j, "move", this, this.hj), _.R.bind(this.j, "moveend", this, this.fj)];
                    var d = this;
                    this.W.push(_.R.addListener(this.j, "editable_changed", function() {
                        if (d.get("storeEditable")) {
                            var e = d.j.get("editable");
                            d.D = e;
                            d.set("storeEditable", !1);
                            d.j.set("editable", !1);
                            d.set("storeEditable", !0)
                        }
                    }));
                    this.bindTo("draggable", this.j)
                } else
                    this.unbind("draggable"),
                    this.set("draggable", !1)
        }
    };
    _.p.active_changed = CV.prototype.Ge;
    _.p.panes_changed = CV.prototype.Ge;
    _.p.poly_changed = CV.prototype.Ge;
    _.p.projectionController_changed = CV.prototype.Ge;
    _.p.gj = function(a) {
        !this.get("draggable") || !this.j || a.wa && _.hk(a.wa) || (a.stop(),
            !this.get("dragging") && a.latLng && (this.set("position", this.da.fromLatLngToDivPixel(a.latLng)),
                a = _.rl(a.latLng, this.A.getProjection()),
                (a = _.$v(this.l, a)) && _.aw(this.l, a),
                a = this.get("position"),
                this.set("dragging", !0),
                this.set("waitingForQuiver", !1),
                this.H = this.F(this.j, a, this.da),
                DV(this, "dragstart"),
                this.D = this.j.get("editable"),
                this.j.set("editable", !1),
                this.set("storeEditable", !0)))
    };
    _.p.hj = function(a) {
        this.get("dragging") && a.latLng && (a = _.rl(a.latLng, this.A.getProjection()),
            (a = _.$v(this.l, a)) && _.aw(this.l, a))
    };
    _.p.fj = function() {
        if (this.get("dragging")) {
            var a = this.l.getPosition();
            if (a) {
                var b = _.sl(a, this.A.getProjection());
                b = this.da.fromLatLngToDivPixel(b);
                this.set("position", b);
                this.l.setPosition(a)
            }
            this.set("storeEditable", !1);
            this.j.set("editable", this.D);
            DV(this, "dragend");
            this.set("dragging", !1)
        }
    };
    _.p.position_changed = function() {
        var a = this.get("position");
        a ? _.dC(this.m, _.kC(a, TX, UX)) : _.dC(this.m, null);
        this.get("dragging") && (this.H.j(a),
            DV(this, "drag"))
    };
    _.p.yi = function() {
        _.gC(this.m, 0 != this.get("panningEnabled") && this.get("dragging"))
    };
    _.p.dragging_changed = CV.prototype.yi;
    _.p.panningEnabled_changed = CV.prototype.yi;
    _.p.containerPixelBounds_changed = function() {
        _.fC(this.m, this.get("containerPixelBounds"))
    };
    _.p.Ml = function() {
        this.get("dragging") || this.set("waitingForQuiver", !0)
    };
    _.p.Nl = function() {
        this.set("waitingForQuiver", !1)
    };
    _.B(PV, _.S);
    PV.prototype.projection_changed = function() {
        var a = this;
        a.F.forEach(function(b) {
            if (b.get("icons")) {
                var c = _.Sd(b);
                a.j[c] = b;
                OV(b)
            }
        });
        SV(a)
    };
    var QV = {
            latLngs: 1,
            geodesic: 1,
            icons: 1
        },
        RV = {
            strokeColor: 1,
            strokeOpacity: 1,
            strokePosition: 1,
            strokeWeight: 1,
            fillColor: 1,
            fillOpacity: 1,
            hitStrokeWeight: 1,
            zIndex: 1,
            clickable: 1,
            icons: 1
        };
    _.B($V, _.S);
    _.p = $V.prototype;
    _.p.panes_changed = function() {
        var a = this.l,
            b = this.get("panes");
        b ? b.floatPane.appendChild(a) : a.parentNode && _.ic(a)
    };
    _.p.Ac = function() {
        _.Kv(this.l);
        this.C = null;
        aW(this);
        this.m = null
    };
    _.p.changed = $V.prototype.Ac;
    _.p.ij = function(a) {
        a.j && a.poly ? a.poly.get("suppressUndo") ? this.Ac() : (a.l && this.A.setPosition(a.l),
            bW(this, a.action, a.poly)) : a.poly == this.m && this.Ac()
    };
    _.p.Fe = function(a) {
        _.zB(this.j, WV, a)
    };
    var VV = _.im("undo_poly"),
        WV = new _.O(30, 27),
        ZV = new _.M(30, 0),
        YV = new _.M(60, 0),
        XV = new _.M(10, -11);
    cW.prototype.getLength = function() {
        var a = this.j.getLength();
        1 < a && ++a;
        return a
    };
    cW.prototype.getAt = function(a) {
        this.j.getLength() == a && 1 < a && (a = 0);
        return this.j.getAt(a)
    };
    _.B(dW, _.S);
    _.p = dW.prototype;
    _.p.release = function() {
        _.C(this.W, _.R.removeListener)
    };
    _.p.fm = function() {
        var a = this.get("projection"),
            b = this.m;
        if (a)
            for (var c = this.l, d = c.getLength(), e = this.get("geodesic"), f = 0; f < d - 1; ++f)
                b.setAt(f, eW(c.getAt(f), c.getAt(f + 1), e, a, this.j));
        else
            b.clear()
    };
    _.p.geodesic_changed = dW.prototype.projection_changed = dW.prototype.fm;
    _.p.Sl = function(a) {
        fW(this, !1, a)
    };
    _.p.Oh = function(a) {
        fW(this, !0, a)
    };
    _.p.Ol = function(a) {
        var b = this.get("projection");
        if (b) {
            var c = this.l,
                d = this.m,
                e = this.get("geodesic");
            a < c.getLength() ? (0 < a && d.setAt(a - 1, eW(c.getAt(a - 1), c.getAt(a), e, b, this.j)),
                d.removeAt(a)) : 0 < a && d.removeAt(a - 1)
        }
    };
    _.B(gW, _.Fk);
    _.B(hW, _.S);
    hW.prototype.map_changed = function() {
        this.get("map") || (this.C.set("map", null),
            lW(this))
    };
    hW.prototype.panes_changed = hW.prototype.paths_changed = hW.prototype.suppressGhostControlPoints_changed = function() {
        var a = this;
        lW(a);
        var b = a.get("paths"),
            c = a.get("panes");
        if (b && c) {
            var d = c.overlayMouseTarget;
            b.forEach(function(f) {
                a.l.push(jW(a, f, d));
                a.get("suppressGhostControlPoints") || a.j.push(kW(a, f, d))
            });
            var e = function() {
                _.R.trigger(a, "toolbar", {
                    j: !1
                })
            };
            e();
            c = a.D;
            c.push(_.R.addListener(b, "insert_at", function(f) {
                var g = a.get("suppressGhostControlPoints"),
                    h = b.getAt(f);
                a.l.splice(f, 0, jW(a, h, d));
                g || a.j.splice(f, 0, kW(a, h, d));
                e()
            }));
            c.push(_.R.addListener(b, "remove_at", function(f) {
                var g = a.get("suppressGhostControlPoints");
                a.m(a.l[f]);
                a.l.splice(f, 1);
                g || (a.m(a.j[f]),
                    a.j.splice(f, 1));
                e()
            }));
            c.push(_.R.addListener(b, "set_at", function(f) {
                var g = a.get("suppressGhostControlPoints");
                a.m(a.l[f]);
                var h = b.getAt(f);
                a.l[f] = jW(a, h, d);
                g || (a.m(a.j[f]),
                    a.j[f] = kW(a, h, d));
                e()
            }))
        }
    };
    hW.prototype.m = function(a) {
        a.unbindAll();
        a.release();
        _.R.clearInstanceListeners(a);
        a.C && (a.C.release(),
            a.C.unbindAll())
    };
    EW.prototype.getBounds = _.oa("l");
    HW.prototype.l = function(a, b) {
        if ("dragstart" != a && "drag" != a && "dragend" != a)
            return !0;
        a = (a = (b.sd || b).get("map")) && 0 != a.get("draggable") && "none" != a.get("gestureHandling");
        return !!this.j || !a
    };
    var VX = new _.M(.5, .5);
    HW.prototype.m = function(a, b) {
        var c = this.C.get();
        if (!c)
            return null;
        c = c.ka.size;
        var d = _.sC(this.D, a.qa, VX);
        if (!d)
            return null;
        var e = new _.M(d.Pc.M * c.L, d.Pc.N * c.O),
            f = new _.M(d.od.M * c.L, d.od.N * c.O),
            g = [],
            h = d.Aa.ta;
        for (k in h)
            g.push(h[k]);
        g.reverse();
        g.sort(function(w, x) {
            return x.zIndex - w.zIndex || 0
        });
        var k = null;
        h = b ? 15 : 0;
        for (var l = 0, m = g.length; l < m; ++l) {
            var q = g[l],
                r = q.j;
            if (r.clickable) {
                var v = q.l.Vb,
                    u = r.m / 2 + h;
                q = IW(q.paths);
                if (u = PU(e.x, e.y, u, q)) {
                    k = v;
                    b = this.C.get();
                    b = _.mk(b && b.ka, {
                        M: (u[0] + f.x) / c.L,
                        N: (u[1] + f.y) / c.O,
                        Y: d.od.Y
                    });
                    a.qa = new _.M(b.S, b.T);
                    a.latLng = this.F(a.qa);
                    break
                }
                if (r.Za && !b && OU(e.x, e.y, q)) {
                    k = v;
                    break
                }
            }
        }
        return k
    };
    HW.prototype.handleEvent = function(a, b, c) {
        !this.j || "mousedown" != a && "dragstart" != a && "drag" != a || (this.xb = !0);
        this.j && !this.xb && (b.qa = this.j.qa,
            b.latLng = this.j.latLng);
        var d = c.sd || c;
        !this.j && "mousedown" == a && d.get("draggable") && (this.j = b,
            c.set("capturing", !0));
        d = c;
        if (this.j) {
            if (this.xb && "dragend" == a || !this.xb && "mouseup" == a)
                this.xb = !1,
                this.j = null,
                c.set("capturing", !1);
            "dragstart" != a && "drag" != a && "dragend" != a || !c.sd || (d = c.sd);
            "dragstart" == a && (a = "movestart");
            "drag" == a && (a = "move");
            "dragend" == a && (a = "moveend")
        } else {
            if ("dragstart" == a || "dragend" == a)
                return;
            "drag" == a && (a = "mousemove")
        }
        "mouseout" == a ? this.A.set("cursor", "") : "mousemove" == a && (c = c.get && c.get("cursor"),
            _.t(c) || (c = "pointer"),
            this.A.set("cursor", c));
        _.R.trigger(d, a, new gW(b.latLng, b.wa))
    };
    HW.prototype.zIndex = 30;
    _.rj(MW, _.xh);
    MW.prototype.Na = function() {
        return {
            ka: this.j,
            Ta: 2,
            Wa: this.A.bind(this)
        }
    };
    MW.prototype.A = function(a, b) {
        var c = this;
        b = void 0 === b ? {} : b;
        var d = document.createElement("div"),
            e = this.j.size;
        d.style.width = e.L + "px";
        d.style.height = e.O + "px";
        var f = new _.M(a.M, a.N);
        e = this.get("projection");
        var g = new EW(f, a.Y, e, this.j),
            h = g.getBounds(),
            k = this.C(this.m, d),
            l = !1,
            m;
        return {
            Ga: function() {
                return d
            },
            fb: function() {
                return l
            },
            loaded: new Promise(function(q) {
                m = {
                    bounds: h,
                    la: f,
                    Z: d,
                    bg: k,
                    ta: {},
                    ac: function() {
                        l = !0;
                        q()
                    },
                    Km: g,
                    zoom: a.Y
                };
                _.ie(c.l, m)
            }),
            release: function() {
                _.Pk(d, "");
                c.l.remove(m);
                b.Ja && b.Ja()
            }
        }
    };
    UW.prototype.A = function(a, b) {
        this.j = this.j || TW(this.l, a, this.m);
        return new PW(this.l, b, this.m, this.j, a)
    };
    var hX = new WU(1),
        gX = new WU(0),
        iX = new WU(0);
    var nX = {
            value: 100,
            j: "%"
        },
        oX = {
            value: 0,
            j: "px"
        };
    _.B(xX, _.S);
    _.B(yX, _.S);
    var DX = [12, 6, 9, 3],
        EX = [1, 2, 4, 8],
        zX = ["ne-resize", "nw-resize", "se-resize", "sw-resize"],
        BX = ["row-resize", "col-resize"],
        AX = [0],
        CX = [2, 1];
    _.p = yX.prototype;
    _.p.map_changed = function() {
        this.get("map") || (this.H.set("map", null),
            GX(this.C),
            this.get("suppressGhostControlPoints") || GX(this.m),
            _.R.clearInstanceListeners(this.l))
    };
    _.p.panes_changed = yX.prototype.suppressGhostControlPoints_changed = function() {
        GX(this.C);
        GX(this.m);
        this.m = null;
        var a = this.get("panes");
        a && (this.C = FX(this, a, !0),
            this.get("suppressGhostControlPoints") || (this.m = FX(this, a, !1)))
    };
    _.p.bounds_changed = function() {
        var a = this.l,
            b = this.A,
            c = this.get("bounds");
        if (c) {
            this.j = !0;
            a.setAt(0, c.getNorthEast());
            a.setAt(1, _.fk(c));
            a.setAt(2, _.ek(c));
            a.setAt(3, c.getSouthWest());
            a = c.na.center();
            var d = c.ia.center();
            b.setAt(0, new _.P(c.na.j, d));
            b.setAt(1, new _.P(a, c.ia.j));
            b.setAt(2, new _.P(c.na.l, d));
            b.setAt(3, new _.P(a, c.ia.l));
            this.j = !1;
            _.R.trigger(this, "toolbar", {
                j: !1
            })
        } else
            a.clear(),
            b.clear()
    };
    _.p.$m = function(a) {
        HX(this, DX[a], this.l.getAt(a))
    };
    _.p.an = function(a) {
        HX(this, EX[a], this.A.getAt(a))
    };
    LX.prototype.j = function(a) {
        var b = this.da,
            c = b.fromLatLngToDivPixel(this.l),
            d = b.fromLatLngToDivPixel(this.C);
        b = b.fromLatLngToDivPixel(this.A);
        b = new _.M(b.x - c.x + a.x, b.y - c.y + a.y);
        a = new _.Q(this.da.fromDivPixelToLatLng(new _.M(d.x - c.x + a.x, d.y - c.y + a.y)), this.da.fromDivPixelToLatLng(b));
        this.m.set("bounds", a)
    };
    _.B(MX, _.S);
    MX.prototype.bounds_changed = function() {
        var a = this.j;
        if (a) {
            var b = this.get("bounds");
            if (b) {
                var c = b.getSouthWest(),
                    d = b.getNorthEast();
                b = b.getCenter();
                a.setPaths([new _.P(d.lat(), d.lng()), new _.P(d.lat(), b.lng()), new _.P(d.lat(), c.lng()), new _.P(c.lat(), c.lng()), new _.P(c.lat(), b.lng()), new _.P(c.lat(), d.lng())])
            } else
                a.setPaths([])
        }
    };
    MX.prototype.release = function() {
        for (var a = this.l, b = 0, c = a.length; b < c; ++b)
            _.R.removeListener(a[b]);
        delete this.l;
        this.j.unbindAll();
        delete this.j
    };
    QX.prototype.j = function(a) {
        var b = 0 != a.getVisible() ? a.getMap() : null;
        a.l != b && (a.l && a.l.__gm.C.remove(a),
            b && (b.__gm.C.j || new IV(b),
                _.ie(b.__gm.C, a)),
            a.l = b)
    };
    QX.prototype.l = function(a) {
        var b = 0 != a.getVisible() ? a.getMap() : null;
        a.m != b && (a.m && a.m.__gm.A.remove(a),
            b && (b.__gm.A.j || new uX(b),
                _.ie(b.__gm.A, a)),
            a.m = b)
    };
    QX.prototype.m = function(a) {
        var b = 0 != a.getVisible() ? a.getMap() : null;
        a.l != b && (a.l && a.l.__gm.D.remove(a),
            b && (b.__gm.D.j || new PX(b),
                _.ie(b.__gm.D, a)),
            a.l = b)
    };
    _.Ze("poly", new QX);
});

google.maps.__gjsload__('poly', function(_) {
    var eU = function(a) {
        for (a = a.toString(16); 2 > a.length; )
            a = "0" + a;
        return a
    }
      , fU = function(a) {
        var b = a.length;
        !b || a[0] == a[b - 2] && a[1] == a[b - 1] || (a.push(a[0]),
        a.push(a[1]))
    }
      , gU = function(a, b) {
        for (var c = 0, d = a.length; c < d; c += 2) {
            var e = new _.P(a[c],a[c + 1],!0);
            e = _.cl(e, b);
            a[c] = e.R;
            a[c + 1] = e.S
        }
    }
      , hU = function(a, b, c) {
        var d = a.path;
        a = a.j;
        for (var e = [], f = a ? [] : null, g = d[0] == d[d.length - 2] && d[1] == d[d.length - 1], h = 0, k = d.length - 2; h < k; h += 2) {
            var m = d[h]
              , p = d[h + 1]
              , q = d[h + 2]
              , t = d[h + 3];
            if (a) {
                var v = a[h / 2];
                var u = a[h / 2 + 1]
            }
            switch (b) {
            case 0:
                var w = m >= c;
                var x = q >= c;
                break;
            case 1:
                w = m <= c;
                x = q <= c;
                break;
            case 2:
                w = p >= c;
                x = t >= c;
                break;
            case 3:
                w = p <= c,
                x = t <= c
            }
            !h && w && (e.push(m, p),
            a && f.push(v));
            if (w != x) {
                switch (b) {
                case 0:
                case 1:
                    var B = (c - m) / (q - m);
                    e.push(c, p + B * (t - p));
                    break;
                case 2:
                case 3:
                    B = (c - p) / (t - p),
                    e.push(m + B * (q - m), c)
                }
                a && f.push(v + B * (u - v))
            }
            x && (e.push(q, t),
            a && f.push(u))
        }
        g && e.length && (e[0] != e[e.length - 2] || e[1] != e[e.length - 1]) && (e.push(e[0], e[1]),
        a && f.push(a[a.length - 1]));
        return {
            path: e,
            j: f
        }
    }
      , iU = function(a, b) {
        a = hU(a, 0, b.W);
        a = hU(a, 1, b.$);
        a = hU(a, 2, b.Y);
        return hU(a, 3, b.aa)
    }
      , jU = function(a, b, c) {
        for (var d = 0, e = 0, f = c.length; e < f; ++e)
            d += _.cC(a, b, c[e]);
        return !!(d & 1)
    }
      , kU = function(a, b, c, d) {
        for (var e = null, f = c * c, g = 0, h = d.length; g < h; ++g) {
            var k = a
              , m = b
              , p = c
              , q = d[g]
              , t = q.length;
            if (!t || 0 >= p)
                var v = null;
            else {
                var u = 0
                  , w = p * p * 1.01
                  , x = [0, 0];
                var B = q[u++] - k;
                var D = q[u++] - m;
                v = (B < -p ? 1 : 0) | (B > p ? 2 : 0) | (D < -p ? 4 : 0) | (D > p ? 8 : 0);
                var G = B * B + D * D;
                !v && G <= w && (w = G,
                x[0] = B,
                x[1] = D);
                for (; u < t; ) {
                    var K = B;
                    var ma = D;
                    var Za = v;
                    B = q[u++] - k;
                    D = q[u++] - m;
                    v = (B < -p ? 1 : 0) | (B > p ? 2 : 0) | (D < -p ? 4 : 0) | (D > p ? 8 : 0);
                    if (!(Za & v)) {
                        G = B * B + D * D;
                        !v && G <= w && (w = G,
                        x[0] = B,
                        x[1] = D);
                        Za = B - K;
                        var Qd = D - ma
                          , ud = Za * Za + Qd * Qd;
                        if (!(1E-12 > ud)) {
                            var tb = B * Za + D * Qd;
                            0 > tb || tb > ud || (G -= tb * tb / ud,
                            G <= w && (w = G,
                            ud = 1 - tb / ud,
                            x[0] = K + Za * ud,
                            x[1] = ma + Qd * ud))
                        }
                    }
                }
                x[0] += k;
                x[1] += m;
                x[2] = w;
                v = w <= p * p ? x : null
            }
            v && v[2] <= f && (f = v[2],
            e = v)
        }
        return e
    }
      , lU = function(a) {
        var b = new _.BG(["mousemove", "mouseup", "mousewheel"]);
        _.lv(b, ["panes", "pixelBounds"], a);
        return b
    }
      , mU = function(a) {
        var b = lU(a);
        _.R.addListener(b, "mousemove", _.sd);
        _.R.addListener(b, "mouseup", _.sd);
        _.R.addListener(b, "mousewheel", function(b) {
            var c = a.get("mouseEventTarget");
            c && _.R.trigger.apply(null, [c, "mousewheel"].concat(_.Cu(arguments, 0)))
        });
        return b
    }
      , nU = _.l()
      , pU = function(a) {
        var b = ["px", "%"];
        if (!a || !_.J(b))
            return null;
        if ("0" == a)
            return {
                value: 0,
                j: b[0]
            };
        for (var c = 0, d = b.length; c < d; ++c) {
            var e = b[c]
              , f = (oU[e] = oU[e] || new RegExp("^(\\d+(?:\\.\\d+)?)" + e + "$")).exec(a);
            if (f)
                return {
                    value: (0,
                    window.parseFloat)(f[1]),
                    j: e
                }
        }
        return null
    }
      , qU = function(a, b, c) {
        var d = _.dl(new _.Yc(c.x,c.y), a);
        a = _.dl(new _.Yc(c.x + b,c.y + b), a);
        return Math.min(Math.abs(d.lat() - a.lat()), Math.abs(d.lng() - a.lng()))
    }
      , rU = function(a) {
        this.y = this.x = 0;
        this.z = a
    }
      , tU = function(a) {
        var b = Math.sqrt(sU(a, a));
        1E-12 > b || (a.x /= b,
        a.y /= b,
        a.z /= b)
    }
      , sU = function(a, b) {
        return a.x * b.x + a.y * b.y + a.z * b.z
    }
      , uU = function(a, b, c) {
        c.x = a.y * b.z - a.z * b.y;
        c.y = a.z * b.x - a.x * b.z;
        c.z = a.x * b.y - a.y * b.x
    }
      , vU = function(a, b) {
        var c = _.Rb(a[0]);
        a = _.Rb(a[1]);
        var d = Math.cos(c);
        b.x = Math.cos(a) * d;
        b.y = Math.sin(a) * d;
        b.z = Math.sin(c)
    }
      , wU = function(a, b) {
        var c = Math.atan2(a.y, a.x);
        b[0] = _.Sb(Math.atan2(a.z, Math.sqrt(a.x * a.x + a.y * a.y)));
        b[1] = _.Sb(c)
    }
      , xU = function(a, b, c) {
        c.x = a.x + b.x;
        c.y = a.y + b.y;
        c.z = a.z + b.z;
        tU(c)
    }
      , zU = function() {
        var a = new _.$g({
            clickable: !1,
            fillOpacity: 0
        });
        a.bindTo("map", this);
        a.bindTo("strokeColor", this);
        a.bindTo("strokeOpacity", this);
        a.bindTo("strokeWeight", this);
        var b = ["center", "freeVertexPosition", "freeVertexIsCenter"]
          , c = new _.jw(b,"return",yU);
        _.lv(c, b, this);
        a.bindTo("center", c, "return");
        b = ["center", "radius", "planetRadius", "freeVertexPosition", "freeVertexIsCenter"];
        c = new _.jw(b,"return",(0,
        _.z)(this.l, this));
        _.lv(c, b, this);
        a.bindTo("radius", c, "return");
        this.j = _.CG();
        this.j.bindTo("zIndex", this);
        a.bindTo("zIndex", this.j, "ghostZIndex")
    }
      , yU = function(a, b, c) {
        return c && b || a
    }
      , BU = function(a, b, c, d, e, f, g) {
        var h = this;
        a = _.X("div", a);
        a.style.display = "none";
        var k = 9 + 2 * (1 + c);
        _.pe(a, new _.O(k,k));
        f.construct(a, c, 9, 1, g ? .5 : 1);
        f = new _.PB(a,!0);
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
        var m;
        this.X = [_.R.addListener(f, "dragstart", function() {
            b.set("draggableCursor", d);
            b.set("active", !0)
        }), _.R.addListener(f, "dragend", function() {
            b.set("active", !1);
            m && (_.C(m, _.R.removeListener),
            m = null)
        }), _.R.forward(f, "panbynow", h), _.R.forward(f, "dragstart", h), _.R.forward(f, "dragend", h)];
        this.C = _.kn(a, {
            Ja: function(a) {
                _.zm(a);
                _.R.trigger(h, "mousedown", a.ea)
            },
            bc: function(a) {
                _.Am(a);
                _.R.trigger(h, "mousemove", a.ea)
            },
            Xa: function(a) {
                _.Am(a);
                _.R.trigger(h, "mousemove", a.ea)
            },
            La: function(a) {
                _.Bm(a);
                _.R.trigger(h, "mouseup", a.ea)
            },
            onClick: function(a) {
                var b = a.event;
                a = a.vc;
                _.Cm(b);
                3 == b.button ? a || _.R.trigger(h, "rightclick", b.ea) : a ? _.R.trigger(h, "dblclick", b.ea) : _.R.trigger(h, "click", b.ea)
            }
        });
        this.D = new _.Cq(a,a,{
            Id: function(a) {
                h.l = !1;
                AU(h);
                _.vd(a);
                _.wd(a);
                _.R.trigger(h, "mouseout", a)
            },
            Jd: function(a) {
                h.l = !0;
                AU(h);
                _.vd(a);
                _.wd(a);
                _.R.trigger(h, "mouseover", a)
            }
        })
    }
      , AU = function(a) {
        if (a.l) {
            var b = _.pH(a.get("color"));
            if (b) {
                b.m = Math.floor((b.m + 255) / 2);
                b.l = Math.floor((b.l + 255) / 2);
                b.j = Math.floor((b.j + 255) / 2);
                var c = ["#", eU(b.m), eU(b.l), eU(b.j)].join("")
            }
        }
        a.j.firstChild.style.backgroundColor = c || "white"
    }
      , DU = function(a, b, c, d, e, f, g, h) {
        function k() {
            m.D || _.R.trigger(m, "toolbar", {
                j: !1
            })
        }
        this.Da = a;
        this.J = b;
        this.H = c;
        this.A = _.X("div", e, _.ri);
        this.D = d;
        this.ka = f;
        this.j = g;
        this.m = h;
        this.l = [];
        a.forEach((0,
        _.z)(this.F, this));
        var m = this;
        this.K = [_.R.addListener(a, "insert_at", function(b) {
            m.F(a.getAt(b), b);
            CU(m, b + 1);
            k()
        }), _.R.addListener(a, "remove_at", function(a) {
            var b = m.l[a];
            m.l.splice(a, 1);
            m.da(b);
            CU(m, a);
            k()
        }), _.R.addListener(a, "set_at", function(b) {
            m.l[b].l.set("latLngPosition", a.getAt(b));
            k()
        })]
    }
      , EU = function(a, b, c) {
        if ((b = b.l.H) && a.j) {
            a = a.j.__gm.get("projectionController");
            var d = a.fromLatLngToDivPixel(c);
            b = b(d);
            if (b = a.fromDivPixelToLatLng(b))
                return b
        }
        return c
    }
      , FU = function(a, b) {
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
    }
      , GU = function(a, b, c) {
        var d = b.index
          , e = b.l.get("position");
        b = (b = b.l.get("latLngPosition")) && a.j ? _.cl(b, a.j.get("projection")) : null;
        _.R.trigger(a, c, d, e, b)
    }
      , CU = function(a, b) {
        for (var c = a.l.length; b < c; ++b)
            a.l[b].index = b
    }
      , HU = function(a, b, c) {
        this.C = a;
        this.D = b;
        this.A = null;
        this.l = !1;
        this.j = new _.T;
        this.m = !1;
        this.F = c;
        _.R.bind(this.j, "set_at", this, this.fn)
    }
      , KU = function(a) {
        var b = a.get("panes");
        if (!b)
            return null;
        b = new DU(a.j,IU,JU,!1,b.overlayMouseTarget,a.D,a.get("map"),a.F);
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
        _.R.addListener(b, "dragstart", function(b) {
            d = a.get("center");
            e = a.get("radius");
            c.set("freeVertexIsCenter", 0 == b);
            c.set("map", a.get("map"))
        });
        _.R.addListener(b, "dragend", function(b, g, h) {
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
    }
      , LU = function(a) {
        var b = a.A;
        b && (b.unbindAll(),
        b.release(),
        _.R.clearInstanceListeners(b),
        a.A = null)
    }
      , MU = _.l()
      , PU = function(a, b, c, d) {
        function e() {
            a.get("editable") ? NU(a, b, c, d) : (OU(a),
            _.R.trigger(a, "toolbar", {
                j: !1
            }))
        }
        a.editable_changed = e;
        e()
    }
      , NU = function(a, b, c, d) {
        if (!a.m) {
            var e = new _.GG(a,!0);
            a.A = e;
            var f = new zU;
            f.bindTo("strokeColor", e);
            f.bindTo("strokeOpacity", e, "ghostStrokeOpacity");
            f.bindTo("strokeWeight", e);
            f.bindTo("center", a);
            f.bindTo("radius", a);
            f.bindTo("planetRadius", c);
            f.bindTo("zIndex", a);
            a.C = f;
            var g = b.__gm;
            a.j = mU(g);
            var h = _.YB(g, a)
              , k = _.wk() ? 9 : 0
              , m = new MU;
            d = new HU(f,function(b, c, d) {
                return new BU(b,a.j,k,c,h,m,d)
            }
            ,d);
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
    }
      , OU = function(a) {
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
    }
      , QU = function(a, b, c, d, e) {
        this.m = a;
        this.ca = c;
        a = a.get("center");
        b = c.fromDivPixelToLatLng(b);
        this.C = d(a, b);
        this.l = _.xu(b, a);
        this.A = e
    }
      , RU = function(a, b, c) {
        var d = 250;
        d = void 0 === d ? 250 : d;
        var e = Array(d)
          , f = _.Rb(a.lat())
          , g = _.Rb(a.lng())
          , h = Math.cos(b)
          , k = Math.sin(b)
          , m = Math.cos(f);
        f = Math.sin(f);
        if (1E-6 < m)
            for (a = 0; a < d; ++a) {
                b = a / d * Math.PI * 4;
                b += Math.sin(b + Math.PI);
                var p = b / 2
                  , q = f * h + m * k * Math.cos(p);
                b = Math.asin(q);
                p = g + Math.atan2(Math.sin(p) * k * m, h - f * q);
                q = -Math.PI;
                var t = Math.PI - q;
                p = ((p - q) % t + t) % t + q;
                e[a] = c(_.Sb(b), _.Sb(p))
            }
        else
            for (g = _.Sb(b),
            g = 0 < a.lat() ? a.lat() - g : a.lat() + g,
            a = 0; a < d; ++a)
                e[a] = c(g, 360 * a / d);
        return e
    }
      , UU = function(a) {
        var b = this
          , c = this
          , d = new _.bh;
        this.l = d;
        d.vd = a;
        d.be = !0;
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
        _.C(SU, function(a) {
            e.push(_.R.forward(d, a, c))
        });
        e.push(_.R.forward(c, "toolbar", d));
        this.V = new _.gg(function() {
            var a = b.l;
            if (a) {
                var c = b.get("radius")
                  , d = b.get("center");
                _.L(c) && d ? (c /= b.get("planetRadius"),
                a.setPaths(TU(d, c))) : a.setPaths([])
            }
        }
        ,0)
    }
      , TU = function(a, b) {
        var c = [RU(a, b, function(a, b) {
            return new _.P(a,b)
        })];
        _.Rb(a.lat()) - b < -Math.PI / 2 && (a = [new _.P(-90,-200,!0), new _.P(90,-200,!0), new _.P(90,-100,!0), new _.P(90,0,!0), new _.P(90,100,!0), new _.P(90,200,!0), new _.P(-90,200,!0), new _.P(-90,100,!0), new _.P(-90,0,!0), new _.P(-90,-100,!0), new _.P(-90,-200,!0)],
        c.push(a));
        return c
    }
      , WU = function(a, b, c, d, e, f) {
        this.l = a;
        this.ca = c;
        this.F = e;
        this.D = f;
        var g = VU(this);
        b = c.fromDivPixelToLatLng(b);
        this.H = _.xu(g, b);
        this.J = d(g, b);
        var h = this.C = [];
        a.get("latLngs").forEach(function(a) {
            var b = [];
            a.forEach(function(a) {
                b.push({
                    heading: d(g, a),
                    distance: _.xu(a, g)
                })
            });
            h.push(b)
        });
        this.m = g;
        this.A = b.lng() - g.lng()
    }
      , VU = function(a) {
        a = a.l.get("latLngs");
        var b = new rU(0)
          , c = new rU(0);
        a.forEach(function(a) {
            a.forEach(function(a) {
                vU([a.lat(), a.lng()], c);
                b.x += c.x;
                b.y += c.y;
                b.z += c.z
            })
        });
        tU(b);
        a = [0, 0];
        wU(b, a);
        a[0] = _.yc(a[0], -89, 89);
        return new _.P(a[0],a[1])
    }
      , XU = function(a, b, c) {
        this.m = a;
        this.ca = c;
        this.l = c.fromDivPixelToLatLng(b);
        var d = this.A = [];
        a.get("latLngs").forEach(function(a) {
            d.push(_.Cu(a.getArray(), 0))
        })
    }
      , YU = function(a, b, c) {
        this.j = null;
        this.F = a;
        this.A = b;
        var d = this;
        this.l = new _.Dv(c.l,{
            kd: function(a) {
                a && d.set("position", new _.N(a.L,a.P))
            },
            fd: _.l()
        },null,c);
        c.ra(this.l);
        this.X = null;
        this.m = new _.FB(function(a, b) {
            _.R.trigger(d, "panbynow", a, b)
        }
        );
        a = new _.jw(["waitingForQuiver", "dragging"],"active",function(a, b) {
            return a || b
        }
        );
        a.bindTo("dragging", this, null, !0);
        a.bindTo("waitingForQuiver", this, null, !0);
        this.bindTo("active", a, null, !0)
    }
      , ZU = function(a, b) {
        var c = a.get("position");
        c = a.ca.fromDivPixelToLatLng(c);
        c = new _.qk(c);
        a.j && _.R.trigger(a.j, b, c)
    }
      , $U = function(a, b) {
        function c() {
            var c = a.get("gestureHandling");
            null != c ? b.set("panningEnabled", "none" != c) : b.set("panningEnabled", a.get("draggable"))
        }
        var d = a.__gm;
        _.R.addListener(a, "gesturehandling_changed", c);
        _.R.addListener(a, "draggable_changed", c);
        b.bindTo("panes", d);
        b.bindTo("projectionController", d);
        b.bindTo("containerPixelBounds", d, "pixelBounds");
        d.Ab = _.R.forward(b, "panbynow", d)
    }
      , aV = function(a, b) {
        function c() {
            var b = a.getMap();
            a.getDraggable() && (_.sm(b, "Od"),
            _.um("Od", "-p", a))
        }
        a.draggable_changed = c;
        c();
        a.wh = [_.R.addListener(a, "mouseover", function(c) {
            null == c.vertex && null == c.edge && b.set("poly", a)
        }), _.R.addListener(a, "click", function(b) {
            null == b.vertex && null == b.edge && a.getDraggable() && _.um("Od", "-i", a)
        }), _.R.addListener(a, "mouseout", function(a) {
            null != a.vertex || null != a.edge || a.va && _.Cj(a.va) || b.set("poly", null)
        })]
    }
      , dV = function(a) {
        var b = this;
        this.l = a;
        this.j = a.__gm;
        this.A = this.m = null;
        this.j.j.then(function(a) {
            a = a.qa;
            b.A = a;
            bV(b, a)
        });
        this.j.C.j = function(a) {
            return cV(b, a)
        }
        ;
        this.j.C.onRemove = function(a) {
            if (b.A) {
                var c = a.ih;
                c.unbindAll();
                c.set("map", null);
                c.release();
                delete a.ih;
                a.listeners && _.C(a.listeners, _.R.removeListener);
                delete a.listeners;
                delete a.editable_changed;
                OU(a);
                _.vm("Oc", "-p", a)
            }
        }
    }
      , bV = function(a, b) {
        _.U("geometry").then(function(c) {
            a.m = new YU(function(a, b, f) {
                return new QU(a,b,f,c.computeHeading,c.computeOffsetOrigin)
            }
            ,a.l,b);
            $U(a.l, a.m);
            a.j.C.forEach(function(b) {
                return cV(a, b)
            })
        })
    }
      , cV = function(a, b) {
        if (a.m && a.A) {
            var c = b.D = new _.jw(["baseMapType"],"planetRadius",_.Vg);
            c.bindTo("baseMapType", a.j);
            var d = b.ih = new UU(b);
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
            _.C(SU, function(a) {
                b.listeners.push(_.R.forward(d, a, b))
            });
            b.listeners.push(_.R.forward(b, "toolbar", d));
            aV(b, a.m);
            PU(b, a.l, c, a.A);
            _.sm(a.l, "Oc");
            _.um("Oc", "-p", b);
            _.R.addListener(b, "click", function() {
                _.um("Oc", "-i", b)
            })
        }
    }
      , eV = function(a, b, c, d) {
        a.capturing_changed = function() {
            if (a.get("capturing"))
                if (0 == a.get("clickable")) {
                    var e = a.l = new nU;
                    e.bindTo("draggableCursor", a, "cursor");
                    e.set("active", !0);
                    b.bindTo("cursor", e);
                    d.register(e)
                } else
                    d.j = c,
                    d.m = a;
            else
                a.l ? (_.ru(d.A, a.l),
                a.l.unbindAll(),
                b.unbind("cursor"),
                b.set("cursor", ""),
                delete a.l) : d.j == c && d.m == a && (d.j = null,
                d.m = null)
        }
    }
      , kV = function(a, b, c) {
        var d = this;
        this.F = a;
        this.A = b;
        this.C = c;
        this.l = {};
        this.j = {};
        this.m = 0;
        this.D = function(a) {
            fV(d, this, a)
        }
        ;
        a.j = function(a) {
            var b = d.get("projection");
            b = a.He = {
                style: gV(d.C, a),
                geometry: hV(a, b)
            };
            iV(d, a);
            a.changed = d.D;
            _.Vd(d.A, b)
        }
        ;
        a.onRemove = function(a) {
            var b = a.He;
            delete a.He;
            d.A.remove(b);
            delete a.changed;
            jV(a);
            a = _.Ed(a);
            delete d.l[a];
            delete d.j[a]
        }
    }
      , fV = function(a, b, c) {
        var d = _.Ed(b);
        c in lV && (a.j[d] = b,
        jV(b));
        c in mV && (a.l[d] = b);
        nV(a)
    }
      , nV = function(a) {
        a.m || (a.m = _.nk(function() {
            a.m = 0;
            var b = a.l;
            a.l = {};
            var c = a.j;
            a.j = {};
            for (var d in b) {
                var e = b[d]
                  , f = e.He;
                f.style = gV(a.C, e);
                f.fg && !c[d] && f.fg()
            }
            b = a.A;
            var g = a.get("projection");
            for (d in c)
                e = c[d],
                f = e.He,
                b.remove(f),
                f.geometry = hV(e, g),
                _.Vd(b, f),
                iV(a, e)
        }))
    }
      , iV = function(a, b) {
        function c() {
            fV(e, b, "latLngs")
        }
        var d = b.get("latLngs");
        if (d) {
            var e = a
              , f = _.Ed(b);
            a = d.getArray();
            for (var g = 0, h = a.length; g < h; ++g) {
                var k = a[g];
                oV(k);
                k.l.ib[f] = k.A.ib[f] = k.m.ib[f] = c
            }
            oV(d);
            d.A.ib[f] = d.m.ib[f] = function(a, b) {
                pV(b, f);
                c()
            }
            ;
            d.l.ib[f] = c
        }
    }
      , jV = function(a) {
        var b = a.get("latLngs");
        if (b) {
            a = _.Ed(a);
            pV(b, a);
            b = b.getArray();
            for (var c = 0, d = b.length; c < d; ++c)
                pV(b[c], a)
        }
    }
      , oV = function(a) {
        a.l || (a.l = function(b) {
            _.wc(a.l.ib, function(a, d) {
                d(b)
            })
        }
        ,
        a.l.ib = {});
        a.A || (a.A = function(b, c) {
            _.wc(a.A.ib, function(a, e) {
                e(b, c)
            })
        }
        ,
        a.A.ib = {});
        a.m || (a.m = function(b, c) {
            _.wc(a.m.ib, function(a, e) {
                e(b, c)
            })
        }
        ,
        a.m.ib = {})
    }
      , pV = function(a, b) {
        a.l && delete a.l.ib[b];
        a.A && delete a.A.ib[b];
        a.m && delete a.m.ib[b]
    }
      , vV = function(a) {
        var b = this.l = _.X("div");
        _.Ek(b, -202);
        _.sv(b, "pointer");
        _.pv(b);
        this.j = _.cB(qV, b, _.ri, rV);
        _.R.bind(this, "toolbar", this, this.lj);
        var c = this;
        this.A = new _.Dv(a.l,{
            kd: function(a) {
                a && (a = new _.N(a.L,a.P),
                _.Dk(c.l, new _.N(a.x + sV.x,a.y + sV.y)))
            },
            fd: _.l()
        },null,a);
        a.ra(this.A);
        _.kn(b, {
            Ja: function(a) {
                _.zm(a);
                c.Ke(tV)
            },
            bc: function(a) {
                _.Am(a)
            },
            Xa: function(a) {
                _.Am(a)
            },
            La: function(a) {
                _.Bm(a)
            },
            onClick: function(a) {
                a = a.event;
                _.Cm(a);
                a = a.ea;
                _.vd(a);
                _.wd(a);
                c.C();
                c.Fc()
            },
            oc: {
                ac: function(a, b) {
                    b.ea.noDrag = !0
                },
                bd: _.l(),
                yc: _.l()
            }
        });
        new _.Cq(b,b,{
            Id: (0,
            _.z)(this.Ke, this, _.ri),
            Jd: (0,
            _.z)(this.Ke, this, uV)
        })
    }
      , wV = function(a) {
        a.m && _.R.clearListeners(a.m, "suppressundo_changed")
    }
      , xV = function(a, b, c) {
        a.Ke(_.ri);
        a.C = b;
        wV(a);
        a.m = c;
        _.qv(a.l);
        _.R.addListener(c, "suppressundo_changed", function() {
            c.get("suppressUndo") && a.Fc()
        })
    }
      , yV = function(a) {
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
    }
      , zV = function(a, b, c) {
        this.l = a;
        this.m = b;
        this.j = c;
        this.X = [_.R.bind(a, "set_at", this, this.Yl), _.R.bind(a, "insert_at", this, this.Vh), _.R.bind(a, "remove_at", this, this.Ul)];
        b = 0;
        for (a = a.getLength(); b < a; ++b)
            this.Vh(b)
    }
      , BV = function(a, b, c) {
        var d = a.get("projection");
        if (d) {
            var e = a.l
              , f = e.getAt(c)
              , g = a.m
              , h = a.get("geodesic");
            0 < c && g.setAt(c - 1, AV(e.getAt(c - 1), f, h, d, a.j));
            c < e.getLength() - 1 && (a = AV(f, e.getAt(c + 1), h, d, a.j),
            b ? g.insertAt(c, a) : g.setAt(c, a))
        }
    }
      , AV = function(a, b, c, d, e) {
        c ? d = e(a, b, .5) : (180 < Math.abs(a.lng() - b.lng()) && (a = new _.P(a.lat(),_.zc(a.lng(), b.lng() - 180, b.lng() + 180),!0)),
        a = d.fromLatLngToPoint(a),
        b = d.fromLatLngToPoint(b),
        d = d.fromPointToLatLng(new _.N((a.x + b.x) / 2,(a.y + b.y) / 2)));
        return d
    }
      , CV = function(a, b, c, d, e) {
        _.qk.call(this, a, b);
        _.r(c) && (this.path = c);
        _.r(d) && (this.vertex = d);
        _.r(e) && (this.edge = e)
    }
      , DV = function(a, b, c, d, e) {
        this.C = a;
        this.A = b;
        this.H = c;
        this.F = d;
        this.l = [];
        this.j = [];
        this.D = [];
        this.J = e
    }
      , FV = function(a, b, c) {
        var d = EV(a, b, c, !1), e = a.C, f;
        _.R.addListener(d, "dragstart", function(c) {
            f = b.getAt(c);
            var g = b.getArray()
              , k = a.A
              , m = g.length;
            if (2 > m)
                e.set("anchors", []);
            else {
                var p = g[k && 0 == c ? m - 1 : c - 1];
                c = g[k && c == m - 1 ? 0 : c + 1];
                g = [];
                p && g.push(p);
                c && g.push(c);
                e.set("anchors", g)
            }
            e.bindTo("freeVertexPosition", d);
            e.set("map", a.get("map"))
        });
        _.R.addListener(d, "dragend", function(c, d, k) {
            e.set("map", null);
            _.R.trigger(a, "toolbar", {
                j: !0,
                l: k,
                action: function() {
                    b.setAt(c, f)
                }
            })
        });
        return d
    }
      , GV = function(a, b, c) {
        var d = new _.T
          , e = a.A ? new yV(b) : b
          , f = new zV(e,d,a.F);
        f.bindTo("geodesic", a);
        f.bindTo("projection", a);
        var g = EV(a, d, c, !0);
        g.C = f;
        var h = a.C;
        _.R.addListener(g, "dragstart", function(b) {
            b = [e.getAt(b), e.getAt(b + 1)];
            h.set("anchors", b);
            h.bindTo("freeVertexPosition", g);
            h.set("map", a.get("map"))
        });
        _.R.addListener(g, "dragend", function(c, e, f) {
            b.insertAt(c + 1, d.getAt(c));
            h.set("map", null);
            _.R.trigger(a, "toolbar", {
                j: !0,
                l: f,
                action: function() {
                    b.removeAt(c + 1)
                }
            })
        });
        return g
    }
      , EV = function(a, b, c, d) {
        var e = new DU(b,["pointer"],[0],d,c,a.H,a.get("map"),a.J);
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
        _.C(SU, function(c) {
            _.R.addListener(e, c, function(f) {
                var g = b.getAt(f);
                if (a.A)
                    for (var k = d ? a.j : a.l, m = 0; m < k.length; ++m)
                        if (k[m] == e) {
                            var p = m;
                            break
                        }
                _.R.trigger(a, c, new CV(g,void 0,p,d ? void 0 : f,d ? f : void 0))
            })
        });
        return e
    }
      , NV = function(a) {
        var b = (0,
        _.z)(a.m, a);
        _.C(a.l, b);
        _.C(a.j, b);
        a.l.length = 0;
        a.j.length = 0;
        _.C(a.D, _.R.removeListener);
        a.D.length = 0
    }
      , RV = function(a, b, c) {
        function d() {
            g[v++] = u.latLng[0];
            g[v++] = u.latLng[1];
            f && (h[p++] = u.distance);
            k = u
        }
        var e = a.path
          , f = a.j;
        if (!e.length)
            return a;
        var g = Array(e.length)
          , h = f ? Array(f.length) : null;
        a = [];
        var k = OV();
        g[0] = k.latLng[0] = e[0];
        g[1] = k.latLng[1] = e[1];
        f && (h[0] = k.distance = f[0]);
        k.depth = 0;
        vU(k.latLng, k.dd);
        for (var m = 1, p = 1, q = [], t = 2, v = 2; t < e.length || q.length; ) {
            if (q.length)
                var u = q.pop();
            else
                u = OV(),
                u.depth = 0,
                u.latLng[0] = e[t++],
                u.latLng[1] = e[t++],
                f && (u.distance = f[m++]),
                vU(u.latLng, u.dd);
            if (12 <= Math.max(k.depth, u.depth))
                d();
            else {
                var w = new _.dd;
                w.W = Math.min(k.latLng[0], u.latLng[0]);
                w.$ = Math.max(k.latLng[0], u.latLng[0]);
                w.Y = Math.min(k.latLng[1], u.latLng[1]);
                w.aa = Math.max(k.latLng[1], u.latLng[1]);
                if (_.kv(b, w)) {
                    var x = OV();
                    xU(k.dd, u.dd, x.dd);
                    wU(x.dd, x.latLng);
                    x.depth = Math.max(k.depth, u.depth) + 1;
                    f && (x.distance = (k.distance + u.distance) / 2);
                    var B = w.Y - 1E-6
                      , D = w.aa + 1E-6;
                    w = x.latLng;
                    w[1] = PV(B, D, w[1]);
                    QV(k.latLng, u.latLng, a);
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
    }
      , QV = function(a, b, c) {
        c[0] = (a[0] + b[0]) / 2;
        c[1] = (a[1] + b[1]) / 2
    }
      , PV = function(a, b, c) {
        for (; c < a; )
            c += 360;
        for (; c > b; )
            c -= 360;
        return c
    }
      , OV = function() {
        return {
            latLng: [0, 0],
            dd: new rU(0)
        }
    }
      , SV = function(a) {
        return function(b, c) {
            if ("px" == b.j)
                b = b.value / a;
            else {
                var d = _.J(c);
                b = d ? b.value / 100 * c[d - 1] : 0
            }
            return b
        }
    }
      , TV = function(a, b, c, d) {
        --b;
        if (!(0 > b)) {
            var e = a.length
              , f = 0;
            for (d(0); f < b; ) {
                var g = 1 << e
                  , h = e ? a[e - 1][f / g] : 0
                  , k = f + g;
                k >= b && (k = b);
                e && c(f, k, h) ? --e : (d(k),
                f = k,
                f & g || ++e)
            }
        }
    }
      , UV = function(a, b) {
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
    }
      , VV = function(a, b, c, d) {
        var e = a.W
          , f = a.Y
          , g = a.$
          , h = a.aa;
        return function(a, m, p) {
            var k = d[2 * a]
              , t = d[2 * a + 1];
            a = d[2 * m];
            m = d[2 * m + 1];
            var v = Math.min(t, m) - p
              , u = Math.max(k, a) + p
              , w = Math.max(t, m) + p;
            Math.min(k, a) - p <= g && e <= u && v <= h && f <= w ? p > b ? p = !0 : (v = c.fromLatLngToPoint(new _.P(k,t,!0)),
            u = c.fromLatLngToPoint(new _.P(a,m,!0)),
            v = c.fromPointToLatLng(new _.N((v.x + u.x) / 2,(v.y + u.y) / 2), !0),
            t = (t + m) / 2,
            k = (k + a) / 2 - v.lat(),
            a = t - v.lng(),
            p = Math.sqrt(k * k + a * a) + p > b) : p = !1;
            return p
        }
    }
      , WV = function(a, b, c) {
        return function(d, e, f) {
            var g = d.path
              , h = d.j
              , k = VV(a, b, c, g);
            d = k;
            if (h) {
                var m = UV(h, f);
                d = function(a, b, c) {
                    return k(a, b, c) || m(a, b)
                }
            }
            var p = []
              , q = h ? [] : null;
            TV(e, g.length / 2, d, function(a) {
                p.push(g[2 * a], g[2 * a + 1]);
                h && q.push(h[a])
            });
            return {
                path: p,
                j: q
            }
        }
    }
      , YV = function(a, b, c, d) {
        var e = a.j;
        if (!e)
            return null;
        a = a.path;
        for (var f = [], g = 0, h = a.length - 2; g < h; ) {
            var k = a[g]
              , m = a[g + 1]
              , p = e[g / 2]
              , q = p - b;
            g += 2;
            var t = a[g]
              , v = a[g + 1];
            if (!(XV(k, m, d) & XV(t, v, d))) {
                for (; _.Ac(k, t) && _.Ac(m, v) && g < h; )
                    g += 2,
                    t = a[g],
                    v = a[g + 1];
                var u = e[g / 2] - b
                  , w = Math.atan2(t - k, m - v);
                0 == p && (q -= 1E-9);
                if (c)
                    for (p = Math.floor(u / c) * c; p > q; ) {
                        var x = (p - q) / (u - q);
                        f.push(k + (t - k) * x, m + (v - m) * x, w);
                        p -= c
                    }
                else
                    0 > q && 0 <= u && (q = (0 - q) / (u - q),
                    f.push(k + (t - k) * q, m + (v - m) * q, w))
            }
        }
        return f
    }
      , XV = function(a, b, c) {
        var d = 0;
        _.Ac(a, -16, .001) && (d |= 1);
        _.Ac(a, c.L + 16, .001) && (d |= 2);
        _.Ac(b, -16, .001) && (d |= 4);
        _.Ac(b, c.P + 16, .001) && (d |= 8);
        return d
    }
      , ZV = function(a, b, c, d) {
        this.j = d;
        this.H = b;
        var e = this.J = 1 << b;
        b = _.yu(this.j, {
            M: a.x,
            N: a.y,
            U: b
        }, 16 / d.size.L);
        b = _.ed(b.min.R, b.min.S, b.max.R, b.max.S);
        this.F = c;
        var f = b;
        d = new _.Yc(f.W,f.Y);
        f = new _.Yc(f.$,f.aa);
        b = _.dl(d, c, !0);
        var g = _.dl(f, c, !0);
        f = Math.min(b.lat(), g.lat());
        d = Math.max(b.lat(), g.lat());
        var h = Math.min(b.lng(), g.lng());
        g = Math.max(b.lng(), g.lng());
        b = (h + g) / 2;
        var k = _.zc(b, -180, 180);
        h += k - b;
        g += k - b;
        b = _.ed(f, h, d, g);
        f = new _.P(f,h,!0);
        h = new _.P(d,g,!0);
        d = _.cl(f, c);
        d = new _.N(d.R,d.S);
        f = _.cl(h, c);
        f = new _.dd([d, new _.N(f.R,f.S)]);
        this.l = b;
        this.A = f;
        this.C = a;
        a = .5 / e;
        b = this.A;
        this.D = Math.min(qU(c, a, new _.N(b.W,b.Y)), qU(c, a, new _.N(b.$,b.aa)));
        this.K = WV(this.l, this.D, c);
        this.m = SV(e)
    }
      , aW = function(a, b, c, d) {
        for (var e = [], f = [], g = 0, h = d.length; g < h; ++g)
            f.push([]);
        g = 0;
        for (h = b.length; g < h; ++g) {
            var k = b[g]
              , m = k.l
              , p = $V(a, d, m.j);
            m = k.j ? a.K(m, k.j, p) : {
                path: _.Cu(m.path, 0),
                j: m.j
            };
            if (m.path.length) {
                c && (m = RV(m, a.l, a.D));
                gU(m.path, a.F);
                m = iU(m, a.A);
                var q = m.path;
                k = a.j.size;
                if (q.length) {
                    e.push(q);
                    for (var t = 0; t < q.length; t += 2) {
                        var v = _.Ij(a.j, new _.Yc(q[t],q[t + 1]), a.H, _.na());
                        q[t] = (v.M - a.C.x) * k.L;
                        q[t + 1] = (v.N - a.C.y) * k.P
                    }
                    for (t = 0; q = p[t]; ++t)
                        (q = YV(m, q.offset, q.repeat, k)) && (f[t] = f[t].concat(q))
                }
            }
        }
        return {
            paths: e,
            Re: f
        }
    }
      , $V = function(a, b, c) {
        var d = [];
        if (c)
            for (var e = 0, f; f = b[e]; ++e)
                d.push({
                    offset: a.m(f.offset, c),
                    repeat: a.m(f.repeat, c)
                });
        return d
    }
      , bW = function(a, b, c, d, e) {
        this.A = b;
        this.F = c;
        this.D = new _.VB(a.l,d,e);
        this.C = e;
        this.j = null;
        this.Cb = !1
    }
      , cW = function(a) {
        return _.Bc(a, function(a) {
            return _.Bc(a, function(a) {
                return Math.round(a)
            })
        })
    }
      , fW = function(a, b, c, d, e) {
        function f() {
            a.get("editable") ? (dW(a, b, d, e),
            _.sm(b, "Oe"),
            _.um("Oe", "-p", a)) : (_.R.trigger(c, "toolbar", {
                j: !1,
                poly: a
            }),
            eW(a))
        }
        a.editable_changed = f;
        f();
        a.Cg = _.R.addListener(a, "toolbar", function(b) {
            b.poly = a;
            _.R.trigger(c, "toolbar", b)
        })
    }
      , dW = function(a, b, c, d) {
        if (!a.A) {
            var e = new _.GG(a,a.eb);
            a.C = e;
            var f = new _.DG;
            f.bindTo("strokeColor", e);
            f.bindTo("strokeOpacity", e, "ghostStrokeOpacity");
            f.bindTo("strokeWeight", e);
            f.bindTo("geodesic", a);
            f.bindTo("zIndex", a);
            a.Pb = f;
            var g = b.__gm;
            a.j = mU(g);
            var h = _.YB(g, a)
              , k = _.wk() ? 9 : 0
              , m = new MU
              , p = new DV(f,a.eb,function(b, c, d) {
                return new BU(b,a.j,k,c,h,m,d)
            }
            ,c,d);
            p.set("map", b);
            p.bindTo("paths", a, "latLngs");
            p.bindTo("panes", g);
            p.bindTo("projection", b);
            p.bindTo("zoom", g);
            p.bindTo("projectionCenterQ", g);
            p.bindTo("panningEnabled", b, "draggable");
            p.bindTo("mapPixelBounds", g, "pixelBounds");
            p.bindTo("offset", g);
            p.bindTo("color", e, "strokeColor");
            p.bindTo("zIndex", a);
            p.bindTo("geodesic", a);
            p.bindTo("suppressGhostControlPoints", a);
            a.A = p;
            _.R.addListener(a, "click", function() {
                a.get("editable") && _.um("Oe", "-i", a)
            });
            _.R.forward(p, "panbynow", g);
            _.R.forward(p, "toolbar", a);
            _.C(SU, function(b) {
                _.R.forward(p, b, a)
            })
        }
    }
      , eW = function(a) {
        var b = a.A;
        b && (b.unbindAll(),
        b.set("map", null),
        _.R.clearInstanceListeners(b),
        delete a.A,
        a.j.unbindAll(),
        a.j.release(),
        delete a.j,
        a.Pb.unbindAll(),
        delete a.Pb,
        a.C.release(),
        delete a.C)
    }
      , gW = function(a, b, c) {
        _.ih.call(this);
        this.m = Math.min(2, _.vk());
        this.C = b;
        this.l = a;
        this.j = c || _.Vi
    }
      , jW = function(a, b, c, d) {
        this.j = b.size;
        this.F = c;
        this.C = a;
        this.l = hW(this.j, d);
        _.Dk(this.l, _.ri);
        this.D = iW(this.l, d);
        this.H = hW(this.j, d);
        this.J = iW(this.H, d);
        this.ga = new _.lC(this.D);
        this.K = new _.lC(this.J);
        this.m = {};
        this.A = 0
    }
      , hW = function(a, b) {
        var c = window.document.createElement("canvas");
        c.width = a.L * b;
        c.height = a.P * b;
        c.style.width = _.W(a.L);
        c.style.height = _.W(a.P);
        _.Fk(c);
        return c
    }
      , iW = function(a, b) {
        a = a.context = a.getContext("2d");
        a.scale(b, b);
        a.lineCap = a.lineJoin = "round";
        return a
    }
      , mW = function(a) {
        a.A || (a.A = _.nk(function() {
            a.A = 0;
            var b = kW(a);
            if (b.length) {
                a.l.parentNode || a.C.appendChild(a.l);
                var c = a.D
                  , d = a.J;
                c.clearRect(0, 0, a.j.L, a.j.P);
                for (var e = null, f = 0; f < b.length; ++f) {
                    var g = b[f]
                      , h = g.j
                      , k = h.l;
                    _.Ac(1, k) ? (a.F(c, g.paths, h.strokeColor, h.strokeOpacity, h.strokeWeight, h.strokePosition, h.fillColor, h.fillOpacity),
                    lW(g.Re, h.j, c, a.ga, 1)) : (d.clearRect(0, 0, a.j.L, a.j.P),
                    a.F(d, g.paths, h.strokeColor, h.strokeOpacity / k, h.strokeWeight, h.strokePosition),
                    lW(g.Re, h.j, d, a.K, k),
                    c.globalAlpha = k,
                    c.drawImage(a.H, 0, 0, a.j.L, a.j.P));
                    !e && g.Ca && g.Ca.ya && (e = g.Ca.ya)
                }
                e && e()
            } else
                a.l.parentNode && a.C.removeChild(a.l)
        }))
    }
      , lW = function(a, b, c, d, e) {
        for (var f = 0, g = a.length; f < g; ++f) {
            var h = b[f]
              , k = c
              , m = d
              , p = a[f]
              , q = h.j
              , t = h.scale
              , v = h.rotation
              , u = h.l
              , w = h.strokeColor
              , x = h.strokeOpacity / e
              , B = h.strokeWeight
              , D = h.fillColor;
            h = h.fillOpacity / e;
            k.beginPath();
            for (var G = 0, K = p.length; G < K; G += 3)
                m.Qa(q, p[G], p[G + 1], v + (u ? p[G + 2] : 0), t);
            h && (k.fillStyle = D,
            k.globalAlpha = h,
            k.fill());
            B && (k.lineWidth = B,
            k.strokeStyle = w,
            k.globalAlpha = x,
            k.stroke())
        }
    }
      , kW = function(a) {
        var b = [];
        a = a.m;
        for (var c in a)
            b.push(a[c]);
        b.sort(function(a, b) {
            return a.zIndex - b.zIndex
        });
        return b
    }
      , nW = function(a, b, c) {
        function d(a, b) {
            a.beginPath();
            for (var c = 0, d; d = b[c]; ++c)
                if (d.length) {
                    a.moveTo(Math.round(d[0]), Math.round(d[1]));
                    for (var e = 2, f = d.length; e < f; )
                        a.lineTo(Math.round(d[e++]), Math.round(d[e++]))
                }
        }
        var e = c.size
          , f = a.createElement("canvas");
        f.width = b * e.L;
        f.height = b * e.P;
        var g = f.getContext("2d");
        g.lineCap = g.lineJoin = "round";
        g.scale(b, b);
        var h = [function(a, b, c, d, e) {
            a.lineWidth = e;
            a.strokeStyle = c;
            a.globalAlpha = d;
            a.stroke()
        }
        , function(a, b, c, d, e) {
            a.lineWidth = 2 * e;
            a.strokeStyle = c;
            a.globalAlpha = d;
            a.save();
            a.clip();
            a.stroke();
            a.restore()
        }
        , function(a, b, c, h, t) {
            g.lineWidth = 2 * t;
            g.strokeStyle = c;
            g.globalCompositeOperation = "source-over";
            g.clearRect(0, 0, e.L, e.P);
            d(g, b);
            g.stroke();
            g.globalCompositeOperation = "destination-out";
            g.fill();
            a.globalAlpha = h;
            a.drawImage(f, 0, 0, e.L, e.P)
        }
        ];
        return function(a, b, c, e, f, g, u, w) {
            d(a, b);
            w && (a.fillStyle = u,
            a.globalAlpha = w,
            a.fill());
            if (f)
                h[g](a, b, c, e, f)
        }
    }
      , oW = function(a, b) {
        this.l = a;
        this.m = b;
        this.j = null
    }
      , rW = function(a, b, c, d) {
        var e = this;
        this.l = b;
        this.j = d;
        a.j = function(a) {
            pW(e, a)
        }
        ;
        a.onRemove = function(a) {
            delete a.fg;
            e.l.remove(a.bounds);
            a = a.geometry;
            var b = a.ta;
            for (g in b) {
                var c = b[g]
                  , d = c.Ca
                  , f = d.jg;
                delete f.m[_.Ed(c)];
                mW(f);
                delete d.ta[_.Ed(c)]
            }
            a.ta = {};
            var g = a.Xb;
            _.vm(g.eb ? "Op" : "Ol", "-v", g)
        }
        ;
        c.j = function(a) {
            qW(e, a)
        }
        ;
        c.onRemove = function(a) {
            e.j.remove(a.bounds);
            var b = a.ta, c;
            for (c in b) {
                var d = b[c]
                  , f = d.l;
                delete f.ta[_.Ed(d)];
                d = f.Xb;
                _.vm(d.eb ? "Op" : "Ol", "-v", d)
            }
            a.ta = {}
        }
        ;
        a = a.l;
        for (var f in a)
            pW(e, a[f]);
        c = c.l;
        for (f in c)
            qW(e, c[f])
    }
      , pW = function(a, b) {
        b.fg = function() {
            var a = b.geometry.ta, c;
            for (c in a) {
                var d = a[c];
                d.j = b.style;
                d.zIndex = b.style.zIndex;
                mW(d.Ca.jg)
            }
        }
        ;
        var c = b.geometry
          , d = c.bounds;
        d.poly = b;
        b.bounds = d;
        _.$B(a.l, d);
        a = a.j.search(d);
        d = 0;
        for (var e = a.length; d < e; ++d)
            sW(b, a[d].pd || null);
        0 < a.length && (c = c.Xb,
        _.um(c.eb ? "Op" : "Ol", "-v", c))
    }
      , qW = function(a, b) {
        var c = b.bounds;
        c.pd = b;
        _.$B(a.j, c);
        a = a.l.search(b.bounds);
        if (0 == a.length)
            b.ya && _.Hb((0,
            _.z)(b.ya, b));
        else {
            c = 0;
            for (var d = a.length; c < d; ++c)
                sW(a[c].poly || null, b),
                _.um(a[c].poly.geometry.Xb.eb ? "Op" : "Ol", "-v", a[c].poly.geometry.Xb)
        }
    }
      , sW = function(a, b) {
        var c = a.geometry
          , d = aW(b.Pm, c.l, c.geodesic, c.j);
        if (d.paths.length) {
            var e = {};
            e.paths = d.paths;
            e.Re = d.Re;
            e.j = a.style;
            e.zIndex = a.style.zIndex;
            e.Ca = b;
            e.l = c;
            a = _.Ed(e);
            c.ta[a] = e;
            b.ta[a] = e;
            b = b.jg;
            b.m[_.Ed(e)] = e;
            mW(b)
        } else
            b.ya && _.Hb((0,
            _.z)(b.ya, b))
    }
      , tW = function(a) {
        return _.Bc(a, function(a) {
            var b = {}
              , d = a.path;
            if (50 <= d.length) {
                for (var e = [], f = d.length - 2, g, h = 2; h < f; h <<= 1) {
                    for (var k = d[0], m = d[1], p = Math.ceil(f / (2 * h)), q = Array(p), t = 0, v = 0, u = d.length - 1 - h; t < u; ) {
                        t += h;
                        var w = d[t]
                          , x = d[t + 1];
                        t += h;
                        t > d.length - 2 && (t = d.length - 2);
                        var B = d[t]
                          , D = d[t + 1]
                          , G = w - k
                          , K = x - m;
                        k = B - k;
                        var ma = D - m
                          , Za = G * k + K * ma;
                        m = k * k + ma * ma;
                        Za >= m ? (w = B - w,
                        x = D - x,
                        x = w * w + x * x) : 0 >= Za ? x = G * G + K * K : (x = G * ma - K * k,
                        x *= x,
                        x /= m + 1E-16);
                        x = Math.sqrt(x);
                        g && (x += Math.max(g[2 * v], g[2 * v + 1] || 0));
                        q[v++] = x;
                        k = B;
                        m = D
                    }
                    v < p && (q[v] = g ? g[2 * v] : 0);
                    g = q;
                    e.push(q)
                }
                b.j = e
            }
            b.l = a;
            a = f = window.Infinity;
            e = g = -window.Infinity;
            h = 0;
            for (p = d.length; h < p; )
                q = d[h++],
                a = Math.min(a, q),
                e = Math.max(e, q),
                q = d[h++],
                f = Math.min(f, q),
                g = Math.max(g, q);
            d = new _.dd;
            d.W = a;
            d.$ = e;
            d.Y = f;
            d.aa = g;
            b.bounds = d;
            return b
        })
    }
      , wW = function(a, b, c, d) {
        return _.Bc(a, function(a) {
            var e = a.path;
            a = a.j;
            var g = null;
            if (b) {
                g = c ? uW(e) : vW(e, d);
                for (var h = {
                    0: 0
                }, k = 0, m = [0], p = 1, q = a.length; p < q; ++p) {
                    var t = a[p];
                    t in h ? k = h[t] : (k += g(p - 1),
                    h[t] = k);
                    m.push(k)
                }
                g = m
            }
            return {
                path: e,
                j: g
            }
        })
    }
      , vW = function(a, b) {
        var c = _.Cu(a, 0);
        gU(c, b);
        return function(a) {
            a *= 2;
            var b = c[a] - c[a + 2];
            a = c[a + 1] - c[a + 3];
            return Math.sqrt(b * b + a * a)
        }
    }
      , uW = function(a) {
        return function(b) {
            b *= 2;
            var c = new _.P(a[b],a[b + 1]);
            b = new _.P(a[b + 2],a[b + 3]);
            return _.xu(c, b, 1)
        }
    }
      , AW = function(a) {
        a.length && (a = xW(a, yW),
        a = xW(a, zW));
        return a
    }
      , xW = function(a, b) {
        var c = []
          , d = new rU(0)
          , e = new rU(0)
          , f = new rU(0)
          , g = Array(a.length);
        g[0] = a[0];
        g[1] = a[1];
        vU(a, d);
        for (var h = 2, k = 2; h < a.length; ) {
            c[0] = a[h];
            c[1] = a[h + 1];
            vU(c, f);
            b(d, f, e) && (wU(e, c),
            g[k++] = c[0],
            g[k++] = c[1]);
            g[k++] = a[h++];
            g[k++] = a[h++];
            var m = d;
            d = f;
            f = m
        }
        return g
    }
      , yW = function(a, b, c) {
        if (0 < a.z == 0 < b.z)
            return !1;
        uU(a, b, BW);
        uU(BW, CW, c);
        c.z = 0;
        if (1E-12 > sU(c, c))
            return !1;
        0 > sU(c, a) + sU(c, b) && (c.x = -c.x,
        c.y = -c.y);
        return !0
    }
      , zW = function(a, b, c) {
        uU(a, b, BW);
        uU(CW, BW, DW);
        uU(BW, DW, c);
        if (1E-12 > sU(c, c) || 0 < sU(a, DW) == 0 < sU(b, DW))
            return !1;
        0 > sU(c, a) + sU(c, b) && (c.x = -c.x,
        c.y = -c.y,
        c.z = -c.z);
        return !0
    }
      , FW = function(a, b, c) {
        if (!b)
            return null;
        var d = [];
        b.forEach(function(a) {
            d.push(EW(a))
        });
        a && _.C(d, fU);
        if (c)
            for (a = 0,
            b = d.length; a < b; ++a)
                d[a] = AW(d[a]);
        return d
    }
      , GW = function(a) {
        return _.Bc(a, function(a) {
            if (a.length) {
                var b = a[1];
                for (var d = [0], e = 1, f = 1; e < a.length / 2; ++e,
                ++f) {
                    var g = a[2 * e + 1];
                    if (180 < Math.abs(b - g)) {
                        var h = g < b ? 1 : -1
                          , k = a[2 * e - 2]
                          , m = a[2 * e];
                        a.splice(2 * e, 0, m, g + 360 * h, m, g + 450 * h, 90, g + 450 * h, 90, b - 450 * h, k, b - 450 * h, k, b - 360 * h);
                        d.push(f, f, f, f, f, f - 1);
                        e += 6
                    }
                    d.push(f);
                    b = g
                }
                b = d
            } else
                b = [];
            return {
                path: a,
                j: b
            }
        })
    }
      , EW = function(a) {
        a = a.j;
        for (var b = a.length, c = Array(2 * b), d = 0, e = 0; d < b; ++d) {
            var f = a[d];
            c[e++] = f.lat();
            c[e++] = f.lng()
        }
        return c
    }
      , HW = _.l()
      , hV = function(a, b) {
        var c = {}
          , d = a.get("icons")
          , e = !a.eb && !!_.J(d)
          , f = !0;
        c.j = [];
        e && _.C(d, function(a) {
            var b = pU(a.offset) || IW;
            a = pU(a.repeat) || JW;
            c.j.push({
                offset: b,
                repeat: a
            });
            f = f && (0 == b.value || "%" == b.j) && (0 == a.value || "%" == a.j)
        });
        d = c.geodesic = a.get("geodesic");
        var g = FW(a.eb, a.get("latLngs"), d);
        g = GW(g);
        var h = d && f;
        d && e && !h && (g = KW(g));
        g = wW(g, e, h, b);
        b = c.l = tW(g);
        if (1 == b.length)
            e = b[0].bounds;
        else
            for (e = new _.dd,
            d = 0,
            g = b.length; d < g; ++d)
                _.su(e, b[d].bounds);
        c.bounds = e;
        c.Xb = a;
        c.ta = {};
        return c
    }
      , KW = function(a) {
        return _.Bc(a, function(a) {
            return RV(a, _.ui, .1)
        })
    }
      , LW = function() {
        var a = _.wC();
        this.m = _.FG;
        this.j = _.EG;
        this.l = a
    }
      , gV = function(a, b) {
        function c(a) {
            return _.Cc(b.get(a), f[a])
        }
        var d = {}
          , e = d.eb = b.eb
          , f = e ? a.j : a.m;
        d.strokeColor = c("strokeColor");
        d.strokeOpacity = c("strokeOpacity");
        d.strokeWeight = c("strokeWeight");
        d.clickable = c("clickable");
        e ? (d.strokePosition = c("strokePosition"),
        d.fillColor = c("fillColor"),
        d.fillOpacity = c("fillOpacity")) : d.strokePosition = a.j.strokePosition;
        var g = b.get("zIndex") || 0;
        d.zIndex = 1E3 * g + _.Ed(b) % 1E3;
        d.strokeWeight = Math.min(d.strokeWeight, 0 == d.strokePosition ? 32 : 16);
        d.m = b.get("hitStrokeWeight") || MW(d.strokeWeight, d.strokePosition);
        d.j = [];
        d.l = 1;
        if (!e) {
            e = b.get("icons") || [];
            var h = a.l
              , k = 0;
            _.C(e, function(a) {
                var b = h(a.icon || {}, d.strokeColor, d.strokeOpacity, d.strokeWeight);
                b.l = !a.fixedRotation;
                d.j.push(b);
                k = Math.max(k, b.strokeOpacity);
                k = Math.max(k, b.fillOpacity)
            });
            _.Ac(0, k) || (_.Ac(0, d.strokeOpacity) || _.Ac(0, d.strokeWeight)) && 1 == d.j.length || (d.l = Math.max(k, d.strokeOpacity));
            _.J(e) && (a = b.get("map"),
            _.sm(a, "Os"),
            _.um("Os", "-p", b))
        }
        return d
    }
      , MW = function(a, b) {
        switch (b) {
        case 1:
            return 0;
        case 2:
            return 2 * a;
        default:
            return a
        }
    }
      , PW = function(a) {
        var b = this;
        this.l = a;
        this.j = a.__gm;
        var c = new _.Ud;
        (new kV(this.j.A,c,new LW,new HW)).bindTo("projection", a);
        var d = _.ed(-100, -200, 100, 200)
          , e = new _.ZB(d);
        d = new _.ZB(d);
        this.J = new _.Ud;
        new rW(c,e,this.J,d);
        var f = _.yk(a.getDiv())
          , g = void 0
          , h = null;
        this.H = new _.$d(null,void 0);
        _.XB(a, this.H, "overlayLayer", 30);
        this.D = this.C = this.A = this.F = this.m = null;
        this.j.j.then(function(c) {
            b.D = c.qa;
            NW(b, c.qa);
            c.Pc.la(function(c) {
                if (c && g != c.ja) {
                    h && h.unbindAll();
                    g = c.ja;
                    var d = new oW(g,f);
                    h = new gW(b.J,function(a) {
                        for (var b = [], c = 0; c < arguments.length; ++c)
                            b[c - 0] = arguments[c];
                        return d.A.apply(d, _.aj(b))
                    }
                    ,g);
                    h.bindTo("projection", a);
                    b.H.set(h.Oa())
                }
            })
        });
        _.R.addListener(this.j.A, "insert", function(a) {
            return OW(b, a)
        });
        _.R.addListener(this.j.A, "remove", function(a) {
            if (b.A && b.D) {
                _.C(a.wh || [], _.R.removeListener);
                delete a.draggable_changed;
                delete a.wh;
                _.vm("Od", "-p", a);
                var c = b.A;
                delete a.editable_changed;
                eW(a);
                _.R.trigger(c, "toolbar", {
                    j: !1,
                    poly: a
                });
                a.Cg && (_.R.removeListener(a.Cg),
                delete a.Cg);
                _.vm("Oe", "-p", a);
                a.set("capturing", !1);
                delete a.capturing_changed;
                a.be || (a.eb ? _.vm("Op", "-p", a) : (_.vm("Ol", "-p", a),
                c = a.get("icons"),
                _.J(c) && _.vm("Os", "-p", a)))
            }
        })
    }
      , NW = function(a, b) {
        a.C = new bW(a.J,a.j,function(b) {
            return a.l.getProjection().fromPointToLatLng(b)
        }
        ,b.l,a.H);
        a.j.m.register(a.C);
        a.A = QW(a, b);
        _.U("geometry").then(function(c) {
            a.m = c;
            a.F = new YU(function(b, c, f) {
                return b.get("geodesic") ? new WU(b,c,f,a.m.computeHeading,a.m.computeOffset,a.m.computeOffsetOrigin) : new XU(b,c,f)
            }
            ,a.l,b);
            $U(a.l, a.F);
            a.j.A.forEach(function(b) {
                return OW(a, b)
            })
        })
    }
      , QW = function(a, b) {
        b = new vV(b);
        b.bindTo("panes", a.j);
        b.bindTo("projection", a.l);
        b.bindTo("zoom", a.j);
        b.bindTo("projectionCenterQ", a.j);
        b.bindTo("offset", a.j);
        _.R.bind(a.l, "click", b, b.Fc);
        return b
    }
      , OW = function(a, b) {
        if (a.F && a.A && a.C && a.m && a.D) {
            aV(b, a.F);
            fW(b, a.l, a.A, a.m.interpolate, a.D);
            eV(b, a.j, a.C, a.j.m);
            if (!b.be) {
                var c = b.eb ? "Op" : "Ol";
                _.sm(a.l, c);
                _.um(c, "-p", b)
            }
            _.R.addListener(b, "click", function() {
                b.eb ? b.be || _.um("Op", "-i", b) : _.um("Ol", "-i", b)
            })
        }
    }
      , RW = function(a, b, c) {
        if (!a || !b || !c)
            return null;
        var d = c.lat()
          , e = c.lng();
        c = b & 1 ? d : a.ma.j;
        var f = b & 2 ? e : a.fa.j;
        d = b & 4 ? d : a.ma.l;
        var g = b & 8 ? e : a.fa.l;
        if (c > d) {
            var h = c;
            c = d;
            d = h
        }
        b & 10 && !a.fa.contains(e) && (h = _.md(e, a.fa.j),
        a = _.md(a.fa.l, e),
        b & 2 ? h > a : a > h) && (h = f,
        f = g,
        g = h);
        return _.pd(c, f, d, g)
    }
      , SW = function() {
        var a = new _.dh({
            clickable: !1,
            fillOpacity: 0
        });
        a.bindTo("map", this);
        a.bindTo("strokeColor", this);
        a.bindTo("strokeOpacity", this);
        a.bindTo("strokeWeight", this);
        var b = new _.jw(["bounds", "freeControlPoint", "freeVertexPosition"],"return",RW);
        b.bindTo("bounds", this);
        b.bindTo("freeControlPoint", this);
        b.bindTo("freeVertexPosition", this);
        a.bindTo("bounds", b, "return");
        this.j = _.CG();
        this.j.bindTo("zIndex", this);
        a.bindTo("zIndex", this.j, "ghostZIndex")
    }
      , TW = function(a, b, c) {
        this.H = a;
        this.D = b;
        this.m = this.C = null;
        this.l = new _.T;
        _.R.bind(this.l, "set_at", this, this.dn);
        this.A = new _.T;
        _.R.bind(this.A, "set_at", this, this.en);
        this.j = !1;
        this.F = c
    }
      , $W = function(a, b, c) {
        var d = c ? new DU(a.l,UW,VW,!1,b.overlayMouseTarget,a.D,a.get("map"),a.F) : new DU(a.A,WW,XW,!0,b.overlayMouseTarget,a.D,a.get("map"),a.F);
        d.bindTo("projection", a);
        d.bindTo("zoom", a);
        d.bindTo("projectionCenterQ", a);
        d.bindTo("panningEnabled", a);
        d.bindTo("mapPixelBounds", a);
        d.bindTo("color", a);
        d.bindTo("zIndex", a);
        d.bindTo("offset", a);
        var e = a.H, f = c ? YW : ZW, g;
        _.R.addListener(d, "dragstart", function(b) {
            g = a.get("bounds");
            e.bindTo("freeVertexPosition", d);
            e.set("freeControlPoint", f[b]);
            e.set("map", a.get("map"))
        });
        _.R.addListener(d, "dragend", function(b, c, d) {
            e.set("map", null);
            _.R.trigger(a, "toolbar", {
                j: !0,
                l: d,
                action: function() {
                    a.set("bounds", g)
                }
            })
        });
        _.R.forward(d, "dragstart", a);
        _.R.forward(d, "dragend", a);
        _.R.forward(d, "panbynow", a);
        return d
    }
      , aX = function(a) {
        a && (a.unbindAll(),
        a.release(),
        _.R.clearInstanceListeners(a))
    }
      , bX = function(a, b, c) {
        a.j || (a.j = !0,
        b = RW(a.get("bounds"), b, c),
        a.set("bounds", b),
        a.j = !1)
    }
      , eX = function(a, b, c) {
        function d() {
            a.get("editable") ? cX(a, b, c) : (dX(a),
            _.R.trigger(a, "toolbar", {
                j: !1
            }))
        }
        a.editable_changed = d;
        d()
    }
      , cX = function(a, b, c) {
        if (!a.m) {
            var d = new _.GG(a,!0);
            a.A = d;
            var e = new SW;
            e.bindTo("strokeColor", d);
            e.bindTo("strokeOpacity", d, "ghostStrokeOpacity");
            e.bindTo("strokeWeight", d);
            e.bindTo("bounds", a);
            e.bindTo("zIndex", a);
            a.C = e;
            var f = b.__gm;
            a.j = mU(f);
            var g = _.YB(f, a)
              , h = _.wk() ? 9 : 0
              , k = new MU;
            c = new TW(e,function(b, c, d) {
                return new BU(b,a.j,h,c,g,k,d)
            }
            ,c);
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
    }
      , dX = function(a) {
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
    }
      , fX = function(a, b, c) {
        this.m = a;
        this.ca = c;
        a = a.get("bounds");
        this.C = a.getSouthWest();
        this.A = a.getNorthEast();
        this.l = c.fromDivPixelToLatLng(b)
    }
      , gX = function(a) {
        var b = this
          , c = this.j = new _.bh;
        c.vd = a;
        c.be = !0;
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
        _.C(SU, function(a) {
            d.push(_.R.forward(c, a, b))
        });
        d.push(_.R.forward(b, "toolbar", c))
    }
      , jX = function(a) {
        var b = this;
        this.j = a;
        this.l = a.__gm;
        this.m = this.A = null;
        this.l.j.then(function(a) {
            a = a.qa;
            b.m = a;
            hX(b, a)
        });
        this.l.D.j = function(a) {
            return iX(b, a)
        }
        ;
        this.l.D.onRemove = function(a) {
            if (b.m) {
                var c = a.fi;
                c.unbindAll();
                c.set("map", null);
                c.release();
                delete a.fi;
                a.listeners && _.C(a.listeners, _.R.removeListener);
                delete a.listeners;
                delete a.editable_changed;
                dX(a);
                _.vm("Or", "-p", a)
            }
        }
    }
      , hX = function(a, b) {
        a.A = new YU(function(a, b, e) {
            return new fX(a,b,e)
        }
        ,a.j,b);
        $U(a.j, a.A);
        a.l.D.forEach(function(b) {
            return iX(a, b)
        })
    }
      , iX = function(a, b) {
        if (a.A && a.m) {
            var c = b.fi = new gX(b);
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
            _.C(SU, function(a) {
                d.push(_.R.forward(c, a, b))
            });
            d.push(_.R.forward(b, "toolbar", c));
            aV(b, a.A);
            eX(b, a.j, a.m);
            _.sm(a.j, "Or");
            _.um("Or", "-p", b);
            _.R.addListener(b, "click", function() {
                _.um("Or", "-i", b)
            })
        }
    }
      , kX = _.l()
      , SU = "click dblclick mousedown mousemove mouseout mouseover mouseup rightclick".split(" ");
    _.A(nU, _.S);
    nU.prototype.l = function(a) {
        return "dragstart" != a && "drag" != a && "dragend" != a
    }
    ;
    nU.prototype.m = function() {
        return this.get("active") ? this : null
    }
    ;
    nU.prototype.handleEvent = function(a, b, c) {
        if ("mouseout" == a)
            this.set("cursor", "");
        else if ("mouseover" == a) {
            var d = this.get("draggableCursor");
            d && this.set("cursor", d)
        }
        _.R.trigger(c, a, new _.qk(b.latLng,b.va))
    }
    ;
    nU.prototype.zIndex = window.Infinity;
    var oU = {};
    rU.prototype.equals = function(a) {
        return this.x == a.x && this.y == a.y && this.z == a.z
    }
    ;
    _.A(zU, _.S);
    zU.prototype.l = function(a, b, c, d, e) {
        return !e && d && a ? _.xu(d, a, c) : b
    }
    ;
    _.A(BU, _.S);
    BU.prototype.release = function() {
        _.Vb(this.j);
        _.C(this.X, _.R.removeListener);
        this.X.length = 0;
        this.C.remove();
        this.D.remove();
        this.m.unbindAll();
        this.m.release();
        this.A.set("active", !1)
    }
    ;
    BU.prototype.position_changed = function() {
        var a = this.get("position");
        if (a) {
            this.j.style.display = "block";
            var b = 5 + this.F;
            _.Dk(this.j, new _.N(a.x - b,a.y - b))
        } else
            this.j.style.display = "none"
    }
    ;
    BU.prototype.color_changed = function() {
        var a = this.get("color");
        this.j.firstChild.style.borderColor = a;
        AU(this)
    }
    ;
    _.A(DU, _.S);
    DU.prototype.release = function() {
        _.C(this.K, _.R.removeListener);
        this.K.length = 0;
        _.C(this.l, (0,
        _.z)(this.da, this));
        this.l.length = 0;
        _.R.clearInstanceListeners(this.A);
        _.Vb(this.A)
    }
    ;
    DU.prototype.zIndex_changed = function() {
        var a = this.get("zIndex") || 0;
        this.D && --a;
        _.Ek(this.A, a)
    }
    ;
    DU.prototype.F = function(a, b) {
        var c = this
          , d = {};
        d.index = b;
        c.l.splice(b, 0, d);
        d.D = c.H[b % c.H.length];
        var e = this.ka(c.A, c.J[b % c.J.length], c.D);
        e.bindTo("color", c);
        e.bindTo("panningEnabled", c);
        e.bindTo("mapPixelBounds", c);
        d.l = e;
        var f = [_.R.forward(e, "panbynow", c)];
        b = a && this.j ? _.cl(a, this.j.getProjection()) : null;
        e.set("latLngPosition", a);
        d.C = !0;
        d.m = null;
        d.A = null;
        a = new _.Dv(this.m.l,{
            kd: function(a) {
                a ? e.set("position", new _.N(a.L,a.P)) : e.set("position", null)
            },
            fd: _.l()
        },b,this.m,function() {
            if (c.j) {
                var a = d.j.getPosition();
                a && (a = _.dl(a, c.j.getProjection()),
                d.C = !1,
                d.l.set("latLngPosition", a),
                d.C = !0)
            }
        }
        );
        this.m.ra(a);
        d.j = a;
        f.push(_.R.addListener(e, "latlngposition_changed", function() {
            if (d.C && c.j) {
                var a = d.l.get("latLngPosition");
                a ? d.j.setPosition(_.cl(a, c.j.get("projection"))) : d.j.setPosition(null)
            }
        }));
        f.push(_.R.addListener(e, "dragstart", function() {
            d.m = _.Ev(d.j);
            d.m && _.Fv(d.j, d.m)
        }));
        f.push(_.R.addListener(e, "dragend", function() {
            var a = d.j.getPosition();
            if (a && c.j && (a = _.dl(a, c.j.get("projection")),
            a = EU(c, d, a)) && (a = _.cl(a, c.j.get("projection")),
            a = _.Ev(d.j, a),
            a = FU(d, a)) && (a = d.j.getPosition(a))) {
                var b = _.dl(a, c.j.get("projection"));
                d.C = !1;
                d.l.set("latLngPosition", b);
                d.C = !0;
                d.j.setPosition(a)
            }
            d.m = null;
            d.A = null
        }));
        f.push(_.R.addListener(e, "deltaclientposition_changed", function() {
            var a = d.l.get("deltaClientPosition");
            if (a && (d.m || d.A) && c.j) {
                var b = d.A || d.m;
                d.A = {
                    clientX: b.clientX + a.clientX,
                    clientY: b.clientY + a.clientY
                };
                a = c.m.Eb(d.A);
                a = _.dl(a, c.j.get("projection"));
                b = d.A;
                var e = EU(c, d, a);
                e && !e.equals(a) && (a = _.cl(e, c.j.get("projection")),
                b = _.Ev(d.j, a));
                (b = FU(d, b)) && _.Fv(d.j, b)
            }
        }));
        f.push(_.R.addListener(e, "dragstart", function() {
            c.bindTo("freeVertexPosition", e, "latLngPosition");
            GU(c, d, "dragstart")
        }));
        f.push(_.R.addListener(e, "dragend", function() {
            c.Da.setAt(d.index, e.get("latLngPosition"));
            GU(c, d, "dragend")
        }));
        _.C(SU, function(a) {
            f.push(_.R.addListener(e, a, function() {
                GU(c, d, a)
            }))
        });
        d.listeners = f
    }
    ;
    DU.prototype.da = function(a) {
        a.l.unbindAll();
        a.l.release();
        a.j && this.m.Yc(a.j);
        _.C(a.listeners, _.R.removeListener);
        a.listeners.length = 0
    }
    ;
    _.A(HU, _.S);
    var IU = ["pointer", "row-resize", "row-resize", "col-resize", "col-resize"]
      , JU = [0, 2, 2, 1, 1];
    _.n = HU.prototype;
    _.n.map_changed = function() {
        this.get("map") || (this.C.set("map", null),
        LU(this),
        _.R.clearInstanceListeners(this.j))
    }
    ;
    _.n.panes_changed = function() {
        LU(this);
        this.A = KU(this)
    }
    ;
    _.n.ng = function() {
        var a = this.j
          , b = this.get("center")
          , c = this.get("radius");
        if (b && _.L(c)) {
            this.m = !0;
            var d = this.get("planetRadius")
              , e = _.Sb(c / d);
            var f = _.Rb(b.lat());
            if (d = c / d) {
                c = Math.cos(d);
                d = Math.sin(d);
                var g = Math.sin(f);
                f = Math.atan2(Math.sin(Math.acos((1 - c) / d * Math.tan(f))) * d * Math.cos(f), c - g * g)
            } else
                f = 0;
            f = _.Sb(f);
            a.setAt(0, b);
            c = b.lat() + e;
            90 > c ? a.setAt(1, new _.P(c,b.lng())) : a.setAt(1, null);
            e = b.lat() - e;
            -90 < e ? a.setAt(2, new _.P(e,b.lng())) : a.setAt(2, null);
            180 >= f ? (e = b.lng() + f,
            f = b.lng() - f,
            a.setAt(3, new _.P(b.lat(),e)),
            a.setAt(4, new _.P(b.lat(),f))) : (a.setAt(3, null),
            a.setAt(4, null));
            this.m = !1;
            this.l || _.R.trigger(this, "toolbar", {
                j: !1
            })
        } else
            a.clear()
    }
    ;
    _.n.center_changed = HU.prototype.ng;
    _.n.radius_changed = HU.prototype.ng;
    _.n.planetRadius_changed = HU.prototype.ng;
    _.n.fn = function(a) {
        if (!this.m) {
            var b = this.j.getAt(a);
            if (0 == a)
                _.iv(this, function() {
                    this.l = !0;
                    this.set("center", b);
                    this.l = !1
                }, 0);
            else {
                var c = _.xu(this.get("center"), b, this.get("planetRadius"));
                _.iv(this, function() {
                    this.l = !0;
                    this.set("radius", c);
                    this.l = !1
                }, 0)
            }
        }
    }
    ;
    MU.prototype.construct = function(a, b, c, d, e) {
        a = _.X("div", a, new _.N(b,b), new _.O(c,c));
        a.style.borderWidth = _.W(d);
        a.style.borderStyle = "solid";
        a.style.borderRadius = _.W(Math.ceil(c / 2 + d));
        _.tv(a, e)
    }
    ;
    var lX = new _.P(90,0)
      , mX = new _.P(-90,0);
    QU.prototype.j = function(a) {
        a = this.ca.fromDivPixelToLatLng(a);
        var b = this.A(a, this.l, this.C);
        b || (b = Math.abs(_.xu(a, lX) - this.l) < Math.abs(_.xu(a, mX) - this.l) ? lX : mX);
        this.m.set("center", b)
    }
    ;
    _.A(UU, _.S);
    UU.prototype.center_changed = function() {
        _.hg(this.V)
    }
    ;
    UU.prototype.radius_changed = function() {
        _.hg(this.V)
    }
    ;
    UU.prototype.planetRadius_changed = function() {
        _.hg(this.V)
    }
    ;
    UU.prototype.release = function() {
        for (var a = this.j, b = 0, c = a.length; b < c; ++b)
            _.R.removeListener(a[b]);
        this.j = null;
        this.l.unbindAll();
        this.l = null
    }
    ;
    WU.prototype.j = function(a) {
        var b = this;
        a = b.ca.fromDivPixelToLatLng(a);
        var c = this.D(a, this.H, this.J);
        c ? 89 < Math.abs(c.lat()) && (c = new _.P(_.yc(c.lat(), -89, 89),c.lng())) : c = new _.P(this.m.lat(),a.lng() - this.A);
        b.l.get("latLngs").forEach(function(a, e) {
            for (var d = 0, g = a.getLength(); d < g; ++d) {
                var h = b.F(c, b.C[e][d].distance, b.C[e][d].heading);
                a.setAt(d, h)
            }
        });
        this.m = c;
        this.A = a.lng() - c.lng()
    }
    ;
    XU.prototype.j = function(a) {
        var b = this.m.get("latLngs")
          , c = this.ca
          , d = c.fromLatLngToDivPixel(this.l)
          , e = new _.N(d.x - a.x,d.y - a.y);
        _.C(this.A, function(a, d) {
            var f = b.getAt(d);
            _.C(a, function(a, b) {
                a = c.fromLatLngToDivPixel(a);
                a.x -= e.x;
                a.y -= e.y;
                f.setAt(b, c.fromDivPixelToLatLng(a))
            })
        })
    }
    ;
    _.A(YU, _.S);
    YU.prototype.release = function() {
        this.m.release();
        this.X && _.C(this.X, _.R.removeListener);
        this.X = null
    }
    ;
    var nX = new _.O(30,30)
      , oX = new _.N(nX.width / 2,nX.height / 2);
    _.n = YU.prototype;
    _.n.Le = function() {
        if (!this.get("active")) {
            var a = this.get("panes")
              , b = this.get("projectionController")
              , c = this.get("poly");
            if (a != this.C || b != this.ca || c != this.j)
                if (this.C = a,
                this.ca = b,
                this.j = c,
                this.X && _.C(this.X, _.R.removeListener),
                this.X = null,
                this.C && this.ca && this.j) {
                    this.X = [_.R.bind(this.j, "mousedown", this, this.Sl), _.R.bind(this.j, "mouseup", this, this.Tl), _.R.bind(this.j, "movestart", this, this.jj), _.R.bind(this.j, "move", this, this.kj), _.R.bind(this.j, "moveend", this, this.ij)];
                    var d = this;
                    this.X.push(_.R.addListener(this.j, "editable_changed", function() {
                        if (d.get("storeEditable")) {
                            var a = d.j.get("editable");
                            d.D = a;
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
    }
    ;
    _.n.active_changed = YU.prototype.Le;
    _.n.panes_changed = YU.prototype.Le;
    _.n.poly_changed = YU.prototype.Le;
    _.n.projectionController_changed = YU.prototype.Le;
    _.n.jj = function(a) {
        !this.get("draggable") || !this.j || a.va && _.Cj(a.va) || (a.stop(),
        !this.get("dragging") && a.latLng && (this.set("position", this.ca.fromLatLngToDivPixel(a.latLng)),
        a = _.cl(a.latLng, this.A.getProjection()),
        (a = _.Ev(this.l, a)) && _.Fv(this.l, a),
        a = this.get("position"),
        this.set("dragging", !0),
        this.set("waitingForQuiver", !1),
        this.H = this.F(this.j, a, this.ca),
        ZU(this, "dragstart"),
        this.D = this.j.get("editable"),
        this.j.set("editable", !1),
        this.set("storeEditable", !0)))
    }
    ;
    _.n.kj = function(a) {
        this.get("dragging") && a.latLng && (a = _.cl(a.latLng, this.A.getProjection()),
        (a = _.Ev(this.l, a)) && _.Fv(this.l, a))
    }
    ;
    _.n.ij = function() {
        if (this.get("dragging")) {
            var a = this.l.getPosition();
            if (a) {
                var b = _.dl(a, this.A.getProjection());
                b = this.ca.fromLatLngToDivPixel(b);
                this.set("position", b);
                this.l.setPosition(a)
            }
            this.set("storeEditable", !1);
            this.j.set("editable", this.D);
            ZU(this, "dragend");
            this.set("dragging", !1)
        }
    }
    ;
    _.n.position_changed = function() {
        var a = this.get("position");
        a ? _.HB(this.m, _.OB(a, nX, oX)) : _.HB(this.m, null);
        this.get("dragging") && (this.H.j(a),
        ZU(this, "drag"))
    }
    ;
    _.n.Ei = function() {
        _.KB(this.m, 0 != this.get("panningEnabled") && this.get("dragging"))
    }
    ;
    _.n.dragging_changed = YU.prototype.Ei;
    _.n.panningEnabled_changed = YU.prototype.Ei;
    _.n.containerPixelBounds_changed = function() {
        _.JB(this.m, this.get("containerPixelBounds"))
    }
    ;
    _.n.Sl = function() {
        this.get("dragging") || this.set("waitingForQuiver", !0)
    }
    ;
    _.n.Tl = function() {
        this.set("waitingForQuiver", !1)
    }
    ;
    _.A(kV, _.S);
    kV.prototype.projection_changed = function() {
        var a = this;
        a.F.forEach(function(b) {
            if (b.get("icons")) {
                var c = _.Ed(b);
                a.j[c] = b;
                jV(b)
            }
        });
        nV(a)
    }
    ;
    var lV = {
        latLngs: 1,
        geodesic: 1,
        icons: 1
    }
      , mV = {
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
    _.A(vV, _.S);
    _.n = vV.prototype;
    _.n.panes_changed = function() {
        var a = this.l
          , b = this.get("panes");
        b ? b.floatPane.appendChild(a) : a.parentNode && _.Vb(a)
    }
    ;
    _.n.Fc = function() {
        _.pv(this.l);
        this.C = null;
        wV(this);
        this.m = null
    }
    ;
    _.n.changed = vV.prototype.Fc;
    _.n.lj = function(a) {
        a.j && a.poly ? a.poly.get("suppressUndo") ? this.Fc() : (a.l && this.A.setPosition(a.l),
        xV(this, a.action, a.poly)) : a.poly == this.m && this.Fc()
    }
    ;
    _.n.Ke = function(a) {
        _.dB(this.j, rV, a)
    }
    ;
    var qV = _.gm("undo_poly")
      , rV = new _.O(30,27)
      , uV = new _.N(30,0)
      , tV = new _.N(60,0)
      , sV = new _.N(10,-11);
    yV.prototype.getLength = function() {
        var a = this.j.getLength();
        1 < a && ++a;
        return a
    }
    ;
    yV.prototype.getAt = function(a) {
        this.j.getLength() == a && 1 < a && (a = 0);
        return this.j.getAt(a)
    }
    ;
    _.A(zV, _.S);
    _.n = zV.prototype;
    _.n.release = function() {
        _.C(this.X, _.R.removeListener)
    }
    ;
    _.n.lm = function() {
        var a = this.get("projection")
          , b = this.m;
        if (a)
            for (var c = this.l, d = c.getLength(), e = this.get("geodesic"), f = 0; f < d - 1; ++f)
                b.setAt(f, AV(c.getAt(f), c.getAt(f + 1), e, a, this.j));
        else
            b.clear()
    }
    ;
    _.n.geodesic_changed = zV.prototype.projection_changed = zV.prototype.lm;
    _.n.Yl = function(a) {
        BV(this, !1, a)
    }
    ;
    _.n.Vh = function(a) {
        BV(this, !0, a)
    }
    ;
    _.n.Ul = function(a) {
        var b = this.get("projection");
        if (b) {
            var c = this.l
              , d = this.m
              , e = this.get("geodesic");
            a < c.getLength() ? (0 < a && d.setAt(a - 1, AV(c.getAt(a - 1), c.getAt(a), e, b, this.j)),
            d.removeAt(a)) : 0 < a && d.removeAt(a - 1)
        }
    }
    ;
    _.A(CV, _.qk);
    _.A(DV, _.S);
    DV.prototype.map_changed = function() {
        this.get("map") || (this.C.set("map", null),
        NV(this))
    }
    ;
    DV.prototype.panes_changed = DV.prototype.paths_changed = DV.prototype.suppressGhostControlPoints_changed = function() {
        var a = this;
        NV(a);
        var b = a.get("paths")
          , c = a.get("panes");
        if (b && c) {
            var d = c.overlayMouseTarget;
            b.forEach(function(b) {
                a.l.push(FV(a, b, d));
                a.get("suppressGhostControlPoints") || a.j.push(GV(a, b, d))
            });
            var e = function() {
                _.R.trigger(a, "toolbar", {
                    j: !1
                })
            };
            e();
            c = a.D;
            c.push(_.R.addListener(b, "insert_at", function(c) {
                var f = a.get("suppressGhostControlPoints")
                  , h = b.getAt(c);
                a.l.splice(c, 0, FV(a, h, d));
                f || a.j.splice(c, 0, GV(a, h, d));
                e()
            }));
            c.push(_.R.addListener(b, "remove_at", function(b) {
                var c = a.get("suppressGhostControlPoints");
                a.m(a.l[b]);
                a.l.splice(b, 1);
                c || (a.m(a.j[b]),
                a.j.splice(b, 1));
                e()
            }));
            c.push(_.R.addListener(b, "set_at", function(c) {
                var f = a.get("suppressGhostControlPoints");
                a.m(a.l[c]);
                var h = b.getAt(c);
                a.l[c] = FV(a, h, d);
                f || (a.m(a.j[c]),
                a.j[c] = GV(a, h, d));
                e()
            }))
        }
    }
    ;
    DV.prototype.m = function(a) {
        a.unbindAll();
        a.release();
        _.R.clearInstanceListeners(a);
        a.C && (a.C.release(),
        a.C.unbindAll())
    }
    ;
    ZV.prototype.getBounds = _.pa("l");
    bW.prototype.l = function(a, b) {
        if ("dragstart" != a && "drag" != a && "dragend" != a)
            return !0;
        a = (a = (b.vd || b).get("map")) && 0 != a.get("draggable") && "none" != a.get("gestureHandling");
        return !!this.j || !a
    }
    ;
    var pX = new _.N(.5,.5);
    bW.prototype.m = function(a, b) {
        var c = this.C.get();
        if (!c)
            return null;
        c = c.ja.size;
        var d = _.WB(this.D, a.pa, pX);
        if (!d)
            return null;
        var e = new _.N(d.Tc.M * c.L,d.Tc.N * c.P)
          , f = new _.N(d.qd.M * c.L,d.qd.N * c.P)
          , g = []
          , h = d.Ca.ta;
        for (k in h)
            g.push(h[k]);
        g.reverse();
        g.sort(function(a, b) {
            return b.zIndex - a.zIndex || 0
        });
        var k = null;
        h = b ? 15 : 0;
        for (var m = 0, p = g.length; m < p; ++m) {
            var q = g[m]
              , t = q.j;
            if (t.clickable) {
                var v = q.l.Xb
                  , u = t.m / 2 + h;
                q = cW(q.paths);
                if (u = kU(e.x, e.y, u, q)) {
                    k = v;
                    b = this.C.get();
                    b = _.Hj(b && b.ja, {
                        M: (u[0] + f.x) / c.L,
                        N: (u[1] + f.y) / c.P,
                        U: d.qd.U
                    });
                    a.pa = new _.N(b.R,b.S);
                    a.latLng = this.F(a.pa);
                    break
                }
                if (t.eb && !b && jU(e.x, e.y, q)) {
                    k = v;
                    break
                }
            }
        }
        return k
    }
    ;
    bW.prototype.handleEvent = function(a, b, c) {
        !this.j || "mousedown" != a && "dragstart" != a && "drag" != a || (this.Cb = !0);
        this.j && !this.Cb && (b.pa = this.j.pa,
        b.latLng = this.j.latLng);
        var d = c.vd || c;
        !this.j && "mousedown" == a && d.get("draggable") && (this.j = b,
        c.set("capturing", !0));
        d = c;
        if (this.j) {
            if (this.Cb && "dragend" == a || !this.Cb && "mouseup" == a)
                this.Cb = !1,
                this.j = null,
                c.set("capturing", !1);
            "dragstart" != a && "drag" != a && "dragend" != a || !c.vd || (d = c.vd);
            "dragstart" == a && (a = "movestart");
            "drag" == a && (a = "move");
            "dragend" == a && (a = "moveend")
        } else {
            if ("dragstart" == a || "dragend" == a)
                return;
            "drag" == a && (a = "mousemove")
        }
        "mouseout" == a ? this.A.set("cursor", "") : "mousemove" == a && (c = c.get && c.get("cursor"),
        _.r(c) || (c = "pointer"),
        this.A.set("cursor", c));
        _.R.trigger(d, a, new CV(b.latLng,b.va))
    }
    ;
    bW.prototype.zIndex = 30;
    _.bj(gW, _.ih);
    gW.prototype.Oa = function() {
        return {
            ja: this.j,
            hb: !0,
            jb: 2,
            Za: this.A.bind(this)
        }
    }
    ;
    gW.prototype.A = function(a, b) {
        var c = this;
        b = void 0 === b ? {} : b;
        var d = !1
          , e = window.document.createElement("div")
          , f = this.j.size;
        e.style.width = f.L + "px";
        e.style.height = f.P + "px";
        f = new _.N(a.M,a.N);
        var g = this.get("projection");
        g = new ZV(f,a.U,g,this.j);
        var h = g.getBounds()
          , k = this.C(this.m, e)
          , m = {
            bounds: h,
            ia: f,
            Z: e,
            jg: k,
            ta: {},
            ya: function() {
                d = !0;
                b.ya && b.ya()
            },
            Pm: g,
            zoom: a.U
        };
        _.Vd(this.l, m);
        return {
            ia: a,
            Fa: function() {
                return e
            },
            Db: function() {
                return d
            },
            release: function() {
                _.Ak(e, "");
                c.l.remove(m);
                b.Pa && b.Pa()
            }
        }
    }
    ;
    oW.prototype.A = function(a, b) {
        this.j = this.j || nW(this.m, a, this.l);
        return new jW(b,this.l,this.j,a)
    }
    ;
    var CW = new rU(1)
      , BW = new rU(0)
      , DW = new rU(0);
    var IW = {
        value: 100,
        j: "%"
    }
      , JW = {
        value: 0,
        j: "px"
    };
    _.A(SW, _.S);
    _.A(TW, _.S);
    var YW = [12, 6, 9, 3]
      , ZW = [1, 2, 4, 8]
      , UW = ["ne-resize", "nw-resize", "se-resize", "sw-resize"]
      , WW = ["row-resize", "col-resize"]
      , VW = [0]
      , XW = [2, 1];
    _.n = TW.prototype;
    _.n.map_changed = function() {
        this.get("map") || (this.H.set("map", null),
        aX(this.C),
        this.get("suppressGhostControlPoints") || aX(this.m),
        _.R.clearInstanceListeners(this.l))
    }
    ;
    _.n.panes_changed = TW.prototype.suppressGhostControlPoints_changed = function() {
        aX(this.C);
        aX(this.m);
        this.m = null;
        var a = this.get("panes");
        a && (this.C = $W(this, a, !0),
        this.get("suppressGhostControlPoints") || (this.m = $W(this, a, !1)))
    }
    ;
    _.n.bounds_changed = function() {
        var a = this.l
          , b = this.A
          , c = this.get("bounds");
        if (c) {
            this.j = !0;
            a.setAt(0, c.getNorthEast());
            a.setAt(1, _.Aj(c));
            a.setAt(2, _.zj(c));
            a.setAt(3, c.getSouthWest());
            a = c.ma.center();
            var d = c.fa.center();
            b.setAt(0, new _.P(c.ma.j,d));
            b.setAt(1, new _.P(a,c.fa.j));
            b.setAt(2, new _.P(c.ma.l,d));
            b.setAt(3, new _.P(a,c.fa.l));
            this.j = !1;
            _.R.trigger(this, "toolbar", {
                j: !1
            })
        } else
            a.clear(),
            b.clear()
    }
    ;
    _.n.dn = function(a) {
        bX(this, YW[a], this.l.getAt(a))
    }
    ;
    _.n.en = function(a) {
        bX(this, ZW[a], this.A.getAt(a))
    }
    ;
    fX.prototype.j = function(a) {
        var b = this.ca
          , c = b.fromLatLngToDivPixel(this.l)
          , d = b.fromLatLngToDivPixel(this.C);
        b = b.fromLatLngToDivPixel(this.A);
        b = new _.N(b.x - c.x + a.x,b.y - c.y + a.y);
        a = new _.Q(this.ca.fromDivPixelToLatLng(new _.N(d.x - c.x + a.x,d.y - c.y + a.y)),this.ca.fromDivPixelToLatLng(b));
        this.m.set("bounds", a)
    }
    ;
    _.A(gX, _.S);
    gX.prototype.bounds_changed = function() {
        var a = this.j;
        if (a) {
            var b = this.get("bounds");
            if (b) {
                var c = b.getSouthWest()
                  , d = b.getNorthEast();
                b = b.getCenter();
                a.setPaths([new _.P(d.lat(),d.lng()), new _.P(d.lat(),b.lng()), new _.P(d.lat(),c.lng()), new _.P(c.lat(),c.lng()), new _.P(c.lat(),b.lng()), new _.P(c.lat(),d.lng())])
            } else
                a.setPaths([])
        }
    }
    ;
    gX.prototype.release = function() {
        for (var a = this.l, b = 0, c = a.length; b < c; ++b)
            _.R.removeListener(a[b]);
        delete this.l;
        this.j.unbindAll();
        delete this.j
    }
    ;
    kX.prototype.j = function(a) {
        var b = 0 != a.getVisible() ? a.getMap() : null;
        a.l != b && (a.l && a.l.__gm.C.remove(a),
        b && (b.__gm.C.j || new dV(b),
        _.Vd(b.__gm.C, a)),
        a.l = b)
    }
    ;
    kX.prototype.l = function(a) {
        var b = 0 != a.getVisible() ? a.getMap() : null;
        a.m != b && (a.m && a.m.__gm.A.remove(a),
        b && (b.__gm.A.j || new PW(b),
        _.Vd(b.__gm.A, a)),
        a.m = b)
    }
    ;
    kX.prototype.m = function(a) {
        var b = 0 != a.getVisible() ? a.getMap() : null;
        a.l != b && (a.l && a.l.__gm.D.remove(a),
        b && (b.__gm.D.j || new jX(b),
        _.Vd(b.__gm.D, a)),
        a.l = b)
    }
    ;
    _.Je("poly", new kX);
});

google.maps.__gjsload__('infowindow', function(_) {
    var CQ = function() {
            this.j = new _.lw
        },
        DQ = function(a, b) {
            if (1 == a.j.lb()) {
                var c = a.j.Ra()[0];
                c.l != b.l && (c.set("map", null),
                    a.j.remove(c))
            }
            a.j.add(b)
        },
        EQ = function(a, b) {
            var c = this,
                d = this.j = _.X("div");
            _.Ov(d, "default");
            d.style.position = "absolute";
            d.style.left = d.style.top = "0";
            a.floatPane.appendChild(this.j);
            this.H = _.X("div", this.j);
            this.D = _.X("div", this.H);
            this.l = _.X("div", this.D);
            this.m = _.X("div", this.l);
            _.UB(this.j);
            _.tk(this.l, "gm-style-iw");
            _.tk(this.H, "gm-style-iw-a");
            _.tk(this.D, "gm-style-iw-t");
            _.tk(this.l, "gm-style-iw-c");
            _.tk(this.m, "gm-style-iw-d");
            _.ze.m && (b ? this.l.style.paddingLeft = 0 : this.l.style.paddingRight = 0,
                this.l.style.paddingBottom = 0,
                this.m.style.overflow = "scroll");
            _.Nv(this.j, !1);
            _.R.addDomListener(d, "mousedown", _.Kd);
            _.R.addDomListener(d, "mouseup", _.Kd);
            _.R.addDomListener(d, "mousemove", _.Kd);
            _.R.addDomListener(d, "pointerdown", _.Kd);
            _.R.addDomListener(d, "pointerup", _.Kd);
            _.R.addDomListener(d, "pointermove", _.Kd);
            _.R.addDomListener(d, "dblclick", _.Kd);
            _.R.addDomListener(d, "click", _.Kd);
            _.R.addDomListener(d, "touchstart", _.Kd);
            _.R.addDomListener(d, "touchend", _.Kd);
            _.R.addDomListener(d, "touchmove", _.Kd);
            _.R.pa(d, "contextmenu", this, this.Rl);
            _.R.pa(d, "wheel", this, _.Kd);
            _.R.pa(d, "mousewheel", this, _.Hd);
            _.R.pa(d, "MozMousePixelScroll", this, _.Hd);
            _.ZB(this.l, function(e) {
                _.Kd(e);
                _.R.trigger(c, "closeclick");
                c.set("open", !1)
            }, {
                Eh: new _.O(14, 14),
                padding: new _.M(8, 8),
                offset: new _.M(-6, -6)
            });
            this.A = null;
            this.F = !1;
            this.C = new _.xg(function() {
                !c.F && c.get("content") && c.get("visible") && (_.R.trigger(c, "domready"),
                    c.F = !0)
            }, 0)
        },
        GQ = function(a) {
            var b = !!a.get("open"),
                c = b && a.get("position");
            _.Nv(a.j, c);
            c = a.get("content");
            b = b ? c : null;
            b != a.A && (b && (a.F = !1,
                    a.m.appendChild(c)),
                a.A && (c = a.A.parentNode,
                    c == a.m && c.removeChild(a.A)),
                a.A = b,
                FQ(a))
        },
        HQ = function(a) {
            var b = a.get("pixelOffset") || new _.O(0, 0),
                c = new _.O(a.l.offsetWidth, a.l.offsetHeight);
            a = -b.height + c.height + 11 + 60;
            var d = b.height + 60,
                e = -b.width + c.width / 2 + 60;
            c = b.width + c.width / 2 + 60;
            0 > b.height && (d -= b.height);
            return {
                top: a,
                bottom: d,
                left: e,
                right: c
            }
        },
        FQ = function(a) {
            var b = a.get("layoutPixelBounds");
            var c = a.get("maxWidth");
            var d = a.get("pixelOffset");
            if (d) {
                if (b) {
                    var e = b.aa - b.V;
                    b = b.ba - b.X - (11 + -d.height);
                    240 <= e && (e -= 120);
                    240 <= b && (b -= 120)
                } else
                    b = e = 654;
                e = Math.min(e, 654);
                null != c && (e = Math.min(e, c));
                e = Math.max(0, e);
                b = Math.max(0, b);
                c = new _.O(e, b)
            } else
                c = null;
            c && (a.l.style.maxWidth = _.W(c.width),
                a.l.style.maxHeight = _.W(c.height),
                _.ze.m ? (a.m.style.maxWidth = _.W(c.width - 18),
                    a.m.style.maxHeight = _.W(c.height - 18)) : (a.m.style.maxWidth = _.W(c.width - 36),
                    a.m.style.maxHeight = _.W(c.height - 36)),
                IQ(a),
                a.C.start())
        },
        IQ = function(a) {
            var b = a.get("position");
            if (b && a.get("pixelOffset")) {
                var c = HQ(a),
                    d = b.x - c.left,
                    e = b.y - c.top,
                    f = b.x + c.right;
                c = b.y + c.bottom;
                _.Sk(a.H, b);
                b = a.get("zIndex");
                _.Tk(a.j, _.K(b) ? b : e + 60);
                a.set("pixelBounds", _.td(d, e, f, c))
            }
        },
        JQ = function(a) {
            a = a.__gm.get("panes");
            return new EQ(a, _.wr.j)
        },
        KQ = function(a, b, c) {
            var d = this;
            this.D = !0;
            this.da = this.C = this.A = null;
            var e = b.__gm,
                f = b instanceof _.se;
            f && c ? c.then(function(m) {
                d.D && (d.A = m,
                    d.da = new _.RB(function(q) {
                        d.C = new _.jm(b, m, q, _.n());
                        m.sa(d.C);
                        return d.C
                    }),
                    d.da.bindTo("latLngPosition", a, "position"),
                    h.bindTo("position", d.da, "pixelPosition"))
            }) : (this.da = new _.RB,
                this.da.bindTo("latLngPosition", a, "position"),
                this.da.bindTo("center", e, "projectionCenterQ"),
                this.da.bindTo("zoom", e),
                this.da.bindTo("offset", e),
                this.da.bindTo("projection", b),
                this.da.bindTo("focus", b, "position"));
            this.j = f ? a.j.get("logAsInternal") ? "Ia" : "Id" : null;
            this.m = [];
            var g = new _.Bw(["scale"], "visible", function(m) {
                return null == m || .3 <= m
            });
            this.da && g.bindTo("scale", this.da);
            var h = this.F = JQ(b);
            h.set("logAsInternal", !!a.j.get("logAsInternal"));
            h.bindTo("zIndex", a);
            h.bindTo("layoutPixelBounds", e, "pixelBounds");
            h.bindTo("maxWidth", a);
            h.bindTo("content", a);
            h.bindTo("pixelOffset", a);
            h.bindTo("visible", g);
            this.da && h.bindTo("position", this.da, "pixelPosition");
            this.l = new _.xg(function() {
                if (b instanceof _.se)
                    if (d.A) {
                        var m = a.get("position");
                        m && _.Fq(b, d.A, new _.Q(m), HQ(h))
                    } else
                        c.then(function() {
                            return d.l.start()
                        });
                else
                    (m = h.get("pixelBounds")) ? _.R.trigger(e, "pantobounds", m) : d.l.start()
            }, 150);
            if (f) {
                var k = null;
                this.m.push(_.R.ma(a, "position_changed", function() {
                    var m = a.get("position");
                    !m || a.get("disableAutoPan") || m.equals(k) || (d.l.start(),
                        k = m)
                }))
            } else
                a.get("disableAutoPan") || this.l.start();
            h.set("open", !0);
            this.m.push(_.R.addListener(h, "domready", function() {
                a.trigger("domready")
            }));
            this.m.push(_.R.addListener(h, "closeclick", function() {
                a.close();
                a.trigger("closeclick");
                d.j && _.wm(d.j, "-i", d)
            }));
            if (this.j) {
                var l = this.j;
                _.um(b, this.j);
                _.wm(l, "-p", this);
                f = function() {
                    var m = a.get("position"),
                        q = b.getBounds();
                    m && q && q.contains(m) ? _.wm(l, "-v", d) : _.xm(l, "-v", d)
                };
                this.m.push(_.R.addListener(b, "idle", f));
                f()
            }
        },
        LQ = function(a, b, c) {
            return b instanceof _.se ? new KQ(a, b, c) : new KQ(a, b)
        },
        MQ = function(a) {
            a = a.__gm;
            return a.IW_AUTO_CLOSER = a.IW_AUTO_CLOSER || new CQ
        };
    _.rj(EQ, _.S);
    _.p = EQ.prototype;
    _.p.open_changed = function() {
        GQ(this)
    };
    _.p.content_changed = function() {
        GQ(this)
    };
    _.p.dispose = function() {
        this.j.parentNode.removeChild(this.j);
        this.C.stop();
        this.C.dispose()
    };
    _.p.pixelOffset_changed = function() {
        var a = this.get("pixelOffset") || new _.O(0, 0);
        this.D.style.right = _.W(-a.width);
        this.D.style.bottom = _.W(-a.height + 11);
        FQ(this)
    };
    _.p.layoutPixelBounds_changed = function() {
        FQ(this)
    };
    _.p.position_changed = function() {
        if (this.get("position")) {
            IQ(this);
            var a = !!this.get("open");
            _.Nv(this.j, a)
        } else
            _.Nv(this.j, !1)
    };
    _.p.zIndex_changed = function() {
        IQ(this)
    };
    _.p.visible_changed = function() {
        _.Jv(this.j, this.get("visible"));
        this.C.start()
    };
    _.p.Rl = function(a) {
        for (var b = !1, c = this.get("content"), d = a.target; !b && d;)
            b = d == c,
            d = d.parentNode;
        b ? _.Hd(a) : _.Jd(a)
    };
    Object.freeze(new _.M(0, 0));
    KQ.prototype.close = function() {
        if (this.D) {
            this.D = !1;
            this.j && (_.xm(this.j, "-p", this),
                _.xm(this.j, "-v", this));
            for (var a = _.ua(this.m), b = a.next(); !b.done; b = a.next())
                _.R.removeListener(b.value);
            this.m.length = 0;
            this.l.stop();
            this.l.dispose();
            this.A && this.C && this.A.Vc(this.C);
            a = this.F;
            a.unbindAll();
            a.set("open", !1);
            a.dispose();
            this.da && this.da.unbindAll()
        }
    };
    _.Ze("infowindow", {
        Aj: function(a) {
            var b = null;
            (0,
                _.R.ma)(a, "map_changed", function d() {
                var e = a.get("map");
                b && (b.Qg.j.remove(a),
                    b.dm.close(),
                    b = null);
                if (e) {
                    var f = e.__gm;
                    f.get("panes") ? (b = {
                            dm: LQ(a, e, e instanceof _.se ? f.j.then(function(g) {
                                return g.ra
                            }) : void 0),
                            Qg: MQ(e)
                        },
                        DQ(b.Qg, a)) : _.R.addListenerOnce(f, "panes_changed", d)
                }
            })
        }
    });
});
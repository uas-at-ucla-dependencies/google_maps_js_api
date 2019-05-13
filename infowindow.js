google.maps.__gjsload__('infowindow', function(_) {
    var SP = function() {
        this.j = new _.Nv
    }
      , TP = function(a, b) {
        if (1 == a.j.qb()) {
            var c = a.j.Va()[0];
            c.l != b.l && (c.set("map", null),
            a.j.remove(c))
        }
        a.j.add(b)
    }
      , VP = function() {
        this.sa = _.X("div");
        this.A = _.X("div", this.sa);
        UP(this.A, "rgba(0,0,0,0.1)", !1);
        this.j = _.X("div", this.sa, _.ri);
        this.j.style.backgroundColor = "rgba(0,0,0,0.2)";
        _.Wv(this.j, _.W(2));
        _.Vv(this.j, "0 1px 4px -1px rgba(0,0,0,0.3)");
        this.m = _.X("div", this.sa);
        UP(this.m, "#fff", !0);
        this.l = _.X("div", this.sa, new _.N(1,1));
        _.Wv(this.l, _.W(2));
        this.l.style.backgroundColor = "#fff"
    }
      , UP = function(a, b, c) {
        if (c) {
            c = _.xi.j;
            var d = _.X("div", a);
            a = _.X("div", a);
            var e = _.X("div", d)
              , f = _.X("div", a);
            e.style.position = d.style.position = f.style.position = a.style.position = "absolute";
            d.style.overflow = a.style.overflow = "hidden";
            e.style.left = f.style.left = a.style.top = "0";
            d.style.left = _.W(-6);
            d.style.top = a.style.top = _.W(-1);
            e.style.left = _.W(6);
            a.style.left = _.W(10);
            d.style.width = a.style.width = _.W(16);
            d.style.height = a.style.height = _.W(30);
            e.style.backgroundColor = f.style.backgroundColor = b;
            c && (e.style[c] = "skewX(22.6deg)",
            f.style[c] = "skewX(-22.6deg)",
            e.style[c + "Origin"] = "0 0",
            f.style[c + "Origin"] = _.W(10) + " 0");
            e.style.height = f.style.height = _.W(24);
            e.style.width = f.style.width = _.W(10);
            e.style.boxShadow = f.style.boxShadow = "rgba(0,0,0,0.6) 0px 1px " + _.W(6)
        } else
            _.pe(a, _.si),
            a.style.borderLeft = a.style.borderRight = "0 solid transparent",
            a.style.borderTop = "0 solid " + b,
            a.style.borderLeftWidth = a.style.borderRightWidth = _.W(10)
    }
      , XP = function(a, b) {
        return new WP(a,b)
    }
      , WP = function(a, b) {
        var c = a.offsetWidth
          , d = a.offsetHeight;
        this.j = window.setInterval(function() {
            var e = a.offsetWidth
              , f = a.offsetHeight;
            if (e != c || f != d)
                b(new _.O(e,f)),
                c = e,
                d = f
        }, 100)
    }
      , $P = function(a, b) {
        var c = this;
        this.A = null;
        this.J = new VP;
        var d = this.l = _.X("div");
        _.sv(d, "default");
        d.style.position = "absolute";
        d.style.left = d.style.top = "0";
        a.floatPane.appendChild(this.l);
        a = this.J.Fa();
        _.Dk(a, _.ri);
        this.l.appendChild(a);
        this.j = _.X("div", d);
        this.j.style.top = _.W(9);
        this.j.style.position = "absolute";
        b ? this.j.style.right = _.W(15) : this.j.style.left = _.W(15);
        this.m = _.X("div", this.j);
        this.m.style.display = "inline-block";
        this.m.style.overflow = "auto";
        _.xB();
        _.ek(this.j, "gm-style-iw");
        YP(this, !1);
        _.R.addDomListener(d, "mousedown", _.wd);
        _.R.addDomListener(d, "mouseup", _.wd);
        _.R.addDomListener(d, "mousemove", _.wd);
        _.R.addDomListener(d, "pointerdown", _.wd);
        _.R.addDomListener(d, "pointerup", _.wd);
        _.R.addDomListener(d, "pointermove", _.wd);
        _.R.addDomListener(d, "dblclick", _.wd);
        _.R.addDomListener(d, "click", _.wd);
        _.R.addDomListener(d, "touchstart", _.wd);
        _.R.addDomListener(d, "touchend", _.wd);
        _.R.addDomListener(d, "touchmove", _.wd);
        _.R.oa(d, "contextmenu", this, this.Xl);
        _.R.oa(d, "wheel", this, _.wd);
        _.R.oa(d, "mousewheel", this, _.sd);
        _.R.oa(d, "MozMousePixelScroll", this, _.sd);
        _.CB(this.l, function(a) {
            _.wd(a);
            _.R.trigger(c, "closeclick");
            c.set("open", !1)
        }, {
            padding: ZP
        });
        this.C = null;
        this.H = !1;
        this.F = new _.gg(function() {
            !c.H && c.get("content") && c.get("visible") && (_.R.trigger(c, "domready"),
            c.H = !0)
        }
        ,0);
        this.D = null
    }
      , bQ = function(a) {
        var b = !!a.get("open");
        YP(a, b && a.get("position"));
        var c = a.get("content");
        b = b ? c : null;
        b != a.C && (b && (a.H = !1,
        a.m.appendChild(c)),
        a.C && (c = a.C.parentNode,
        c == a.m && c.removeChild(a.C)),
        a.C = b,
        aQ(a))
    }
      , cQ = function(a) {
        var b = a.get("pixelOffset") || new _.O(0,0)
          , c = a.A || new _.O(0,0);
        a = -b.height + c.height + 24 + 50;
        var d = b.height + 50
          , e = -b.width + c.width / 2 + 50;
        c = b.width + c.width / 2 + 50;
        0 > b.height && (d -= b.height);
        return {
            top: a,
            bottom: d,
            left: e,
            right: c
        }
    }
      , YP = function(a, b) {
        a.l.style.visibility = b ? "" : "hidden";
        a.j.style.overflow = b ? "" : "hidden";
        b || _.pe(a.j, _.si)
    }
      , dQ = function(a) {
        var b = a.get("layoutPixelBounds")
          , c = a.get("maxWidth")
          , d = a.get("pixelOffset");
        if (!d)
            return null;
        b ? (a = b.$ - b.W,
        a -= 53,
        b = b.aa - b.Y - (24 + -d.height),
        b -= 18,
        200 <= a && (a -= 100),
        200 <= b && (b -= 100)) : b = a = 654;
        a = Math.min(a, 654);
        null != c && (a = Math.min(a, c));
        a = Math.max(0, a);
        b = Math.max(0, b);
        return new _.O(a,b)
    }
      , aQ = function(a) {
        a.D && (a.D.Mj.cancel(),
        a.D.Yj.cancel(),
        a.D = null);
        var b = dQ(a);
        if (b) {
            a.m.style.maxHeight = _.W(Math.max(0, b.height));
            a.m.style.maxWidth = _.W(b.width);
            a.j.style.width = _.W(b.width);
            var c = 30 + Math.min(b.width, a.m.offsetWidth) + 23;
            a.j.style.width = _.W(c - 30);
            a.j.style.height = "";
            a.A = new _.O(c,18 + Math.min(b.height, a.j.offsetHeight));
            a.J.setSize(a.A);
            _.pe(a.l, a.A);
            eQ(a);
            a.F.start();
            a.D = {
                Yj: XP(a.m, function() {
                    return aQ(a)
                }),
                Mj: XP(a.j, function() {
                    return aQ(a)
                })
            }
        }
    }
      , eQ = function(a) {
        var b = a.get("position");
        if (b && a.get("pixelOffset") && a.A) {
            var c = cQ(a)
              , d = b.x - c.left
              , e = b.y - c.top
              , f = b.x + c.right;
            b = b.y + c.bottom;
            _.Dk(a.l, new _.N(d + 50,e + 50));
            c = a.get("zIndex");
            _.Ek(a.l, _.L(c) ? c : e + 50);
            a.set("pixelBounds", _.ed(d, e, f, b))
        }
    }
      , fQ = function(a) {
        a = a.__gm.get("panes");
        return new $P(a,_.tr.j)
    }
      , gQ = function(a, b, c) {
        var d = this;
        this.D = !0;
        this.ca = this.C = this.A = null;
        var e = b.__gm
          , f = b instanceof _.ee;
        f && c ? c.then(function(c) {
            d.D && (d.A = c,
            d.ca = new _.vB(function(a) {
                d.C = new _.hm(b,c,a,_.l());
                c.ra(d.C);
                return d.C
            }
            ),
            d.ca.bindTo("latLngPosition", a, "position"),
            h.bindTo("position", d.ca, "pixelPosition"))
        }) : (this.ca = new _.vB,
        this.ca.bindTo("latLngPosition", a, "position"),
        this.ca.bindTo("center", e, "projectionCenterQ"),
        this.ca.bindTo("zoom", e),
        this.ca.bindTo("offset", e),
        this.ca.bindTo("projection", b),
        this.ca.bindTo("focus", b, "position"));
        this.j = f ? a.j.get("logAsInternal") ? "Ia" : "Id" : null;
        this.m = [];
        var g = new _.jw(["scale"],"visible",function(a) {
            return null == a || .3 <= a
        }
        );
        this.ca && g.bindTo("scale", this.ca);
        var h = this.F = fQ(b);
        h.set("logAsInternal", !!a.j.get("logAsInternal"));
        h.bindTo("zIndex", a);
        h.bindTo("layoutPixelBounds", e, "pixelBounds");
        h.bindTo("maxWidth", a);
        h.bindTo("content", a);
        h.bindTo("pixelOffset", a);
        h.bindTo("visible", g);
        this.ca && h.bindTo("position", this.ca, "pixelPosition");
        this.l = new _.gg(function() {
            if (b instanceof _.ee)
                if (d.A) {
                    var f = a.get("position");
                    f && _.Bq(b, d.A, new _.Q(f), cQ(h))
                } else
                    c.then(function() {
                        return d.l.start()
                    });
            else
                (f = h.get("pixelBounds")) ? _.R.trigger(e, "pantobounds", f) : d.l.start()
        }
        ,150);
        if (f) {
            var k = null;
            this.m.push(_.R.la(a, "position_changed", function() {
                var b = a.get("position");
                !b || a.get("disableAutoPan") || b.equals(k) || (d.l.start(),
                k = b)
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
            d.j && _.um(d.j, "-i", d)
        }));
        if (this.j) {
            var m = this.j;
            _.sm(b, this.j);
            _.um(m, "-p", this);
            f = function() {
                var c = a.get("position")
                  , e = b.getBounds();
                c && e && e.contains(c) ? _.um(m, "-v", d) : _.vm(m, "-v", d)
            }
            ;
            this.m.push(_.R.addListener(b, "idle", f));
            f()
        }
    }
      , hQ = function(a, b, c) {
        return b instanceof _.ee ? new gQ(a,b,c) : new gQ(a,b)
    }
      , iQ = function(a) {
        a = a.__gm;
        return a.IW_AUTO_CLOSER = a.IW_AUTO_CLOSER || new SP
    };
    VP.prototype.Fa = _.pa("sa");
    VP.prototype.setSize = function(a) {
        var b = a.width
          , c = a.height;
        _.pe(this.j, a);
        _.pe(this.l, new _.O(b - 2,c - 2));
        this.A.style.borderTopWidth = this.m.style.borderTopWidth = _.W(24);
        a = Math.round(b / 2) - 10;
        _.Dk(this.A, new _.N(a,c));
        _.Dk(this.m, new _.N(a,c - 3))
    }
    ;
    WP.prototype.cancel = function() {
        window.clearInterval(this.j)
    }
    ;
    _.bj($P, _.S);
    _.n = $P.prototype;
    _.n.open_changed = function() {
        bQ(this)
    }
    ;
    _.n.content_changed = function() {
        bQ(this)
    }
    ;
    _.n.dispose = function() {
        this.l.parentNode.removeChild(this.l);
        this.F.stop();
        this.F.dispose()
    }
    ;
    _.n.pixelOffset_changed = function() {
        aQ(this)
    }
    ;
    _.n.layoutPixelBounds_changed = _.l();
    _.n.position_changed = function() {
        this.get("position") ? (eQ(this),
        YP(this, !!this.get("open"))) : YP(this, !1)
    }
    ;
    _.n.zIndex_changed = function() {
        eQ(this)
    }
    ;
    _.n.visible_changed = function() {
        _.ov(this.l, this.get("visible"));
        this.F.start()
    }
    ;
    _.n.Xl = function(a) {
        for (var b = !1, c = this.get("content"), d = a.target; !b && d; )
            b = d == c,
            d = d.parentNode;
        b ? _.sd(a) : _.vd(a)
    }
    ;
    var ZP = Object.freeze(new _.N(12,10));
    gQ.prototype.close = function() {
        if (this.D) {
            this.D = !1;
            this.j && (_.vm(this.j, "-p", this),
            _.vm(this.j, "-v", this));
            for (var a = _.ua(this.m), b = a.next(); !b.done; b = a.next())
                _.R.removeListener(b.value);
            this.m.length = 0;
            this.l.stop();
            this.l.dispose();
            this.A && this.C && this.A.Yc(this.C);
            a = this.F;
            a.unbindAll();
            a.set("open", !1);
            a.dispose();
            this.ca && this.ca.unbindAll()
        }
    }
    ;
    _.Je("infowindow", {
        Dj: function(a) {
            var b = null;
            (0,
            _.R.la)(a, "map_changed", function d() {
                var e = a.get("map");
                b && (b.Zg.j.remove(a),
                b.jm.close(),
                b = null);
                if (e) {
                    var f = e.__gm;
                    f.get("panes") ? (b = {
                        jm: hQ(a, e, e instanceof _.ee ? f.j.then(function(a) {
                            return a.qa
                        }) : void 0),
                        Zg: iQ(e)
                    },
                    TP(b.Zg, a)) : _.R.addListenerOnce(f, "panes_changed", d)
                }
            })
        }
    });
});

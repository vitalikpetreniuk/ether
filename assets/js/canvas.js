/*
 CanvasJS HTML5 & JavaScript Charts - v2.0.1 GA - https://canvasjs.com/ 
 Copyright 2017 fenopix

  --------------------- License Information --------------------
 CanvasJS is a commercial product which requires purchase of license. Without a commercial license you can use it for evaluation purposes for upto 30 days. Please refer to the following link for further details.
     https://canvasjs.com/license-canvasjs/

*/
(function() {
    function pa(m, s) {
        m.prototype = $a(s.prototype);
        m.prototype.constructor = m;
        m.base = s.prototype
    }

    function $a(m) {
        function s() {}
        s.prototype = m;
        return new s
    }

    function Ta(m, s, q) {
        "millisecond" === q ? m.setMilliseconds(m.getMilliseconds() + 1 * s) : "second" === q ? m.setSeconds(m.getSeconds() + 1 * s) : "minute" === q ? m.setMinutes(m.getMinutes() + 1 * s) : "hour" === q ? m.setHours(m.getHours() + 1 * s) : "day" === q ? m.setDate(m.getDate() + 1 * s) : "week" === q ? m.setDate(m.getDate() + 7 * s) : "month" === q ? m.setMonth(m.getMonth() + 1 * s) : "year" === q && m.setFullYear(m.getFullYear() +
            1 * s);
        return m
    }

    function ia(m, s) {
        var q = !1;
        0 > m && (q = !0, m *= -1);
        m = "" + m;
        for (s = s ? s : 1; m.length < s;) m = "0" + m;
        return q ? "-" + m : m
    }

    function Ga(m) {
        if (!m) return m;
        m = m.replace(/^\s\s*/, "");
        for (var s = /\s/, q = m.length; s.test(m.charAt(--q)););
        return m.slice(0, q + 1)
    }

    function Ca(m) {
        m.roundRect = function(m, q, v, y, x, z, Q, C) {
            Q && (this.fillStyle = Q);
            C && (this.strokeStyle = C);
            "undefined" === typeof x && (x = 5);
            this.lineWidth = z;
            this.beginPath();
            this.moveTo(m + x, q);
            this.lineTo(m + v - x, q);
            this.quadraticCurveTo(m + v, q, m + v, q + x);
            this.lineTo(m + v, q + y -
                x);
            this.quadraticCurveTo(m + v, q + y, m + v - x, q + y);
            this.lineTo(m + x, q + y);
            this.quadraticCurveTo(m, q + y, m, q + y - x);
            this.lineTo(m, q + x);
            this.quadraticCurveTo(m, q, m + x, q);
            this.closePath();
            Q && this.fill();
            C && 0 < z && this.stroke()
        }
    }

    function Pa(m, s) {
        return m - s
    }

    function R(m) {
        var s = ((m & 16711680) >> 16).toString(16),
            q = ((m & 65280) >> 8).toString(16);
        m = ((m & 255) >> 0).toString(16);
        s = 2 > s.length ? "0" + s : s;
        q = 2 > q.length ? "0" + q : q;
        m = 2 > m.length ? "0" + m : m;
        return "#" + s + q + m
    }

    function ab(m, s) {
        var q = this.length >>> 0,
            v = Number(s) || 0,
            v = 0 > v ? Math.ceil(v) : Math.floor(v);
        for (0 > v && (v += q); v < q; v++)
            if (v in this && this[v] === m) return v;
        return -1
    }

    function y(m) {
        return null === m || "undefined" === typeof m
    }

    function Da(m) {
        m.indexOf || (m.indexOf = ab);
        return m
    }

    function bb(m) {
        if (Z.fSDec) m[ka("`eeDwdouMhrudods")](ka("e`u`@ohl`uhnoHuds`uhnoDoe"), function() {
            Z._fTWm && Z._fTWm(m)
        })
    }

    function Ua(m, s, q) {
        q = q || "normal";
        var v = m + "_" + s + "_" + q,
            y = Va[v];
        if (isNaN(y)) {
            try {
                m = "position:absolute; left:0px; top:-20000px; padding:0px;margin:0px;border:none;white-space:pre;line-height:normal;font-family:" + m + "; font-size:" +
                    s + "px; font-weight:" + q + ";";
                if (!ra) {
                    var x = document.body;
                    ra = document.createElement("span");
                    ra.innerHTML = "";
                    var z = document.createTextNode("Mpgyi");
                    ra.appendChild(z);
                    x.appendChild(ra)
                }
                ra.style.display = "";
                ra.setAttribute("style", m);
                y = Math.round(ra.offsetHeight);
                ra.style.display = "none"
            } catch (Q) {
                y = Math.ceil(1.1 * s)
            }
            y = Math.max(y, s);
            Va[v] = y
        }
        return y
    }

    function G(m, s) {
        var q = [];
        if (q = {
                solid: [],
                shortDash: [3, 1],
                shortDot: [1, 1],
                shortDashDot: [3, 1, 1, 1],
                shortDashDotDot: [3, 1, 1, 1, 1, 1],
                dot: [1, 2],
                dash: [4, 2],
                dashDot: [4, 2, 1,
                    2
                ],
                longDash: [8, 2],
                longDashDot: [8, 2, 1, 2],
                longDashDotDot: [8, 2, 1, 2, 1, 2]
            }[m || "solid"])
            for (var v = 0; v < q.length; v++) q[v] *= s;
        else q = [];
        return q
    }

    function N(m, s, q, v) {
        return m.addEventListener ? (m.addEventListener(s, q, v || !1), q) : m.attachEvent ? (v = function(s) {
            s = s || window.event;
            s.preventDefault = s.preventDefault || function() {
                s.returnValue = !1
            };
            s.stopPropagation = s.stopPropagation || function() {
                s.cancelBubble = !0
            };
            q.call(m, s)
        }, m.attachEvent("on" + s, v), v) : !1
    }

    function Wa(m, s, q) {
        m *= ha;
        s *= ha;
        m = q.getImageData(m, s, 2, 2).data;
        s = !0;
        for (q = 0; 4 > q; q++)
            if (m[q] !== m[q + 4] | m[q] !== m[q + 8] | m[q] !== m[q + 12]) {
                s = !1;
                break
            }
        return s ? m[0] << 16 | m[1] << 8 | m[2] : 0
    }

    function na(m, s, q) {
        return m in s ? s[m] : q[m]
    }

    function Ha(m, s, q) {
        if (v && Xa) {
            var y = m.getContext("2d");
            La = y.webkitBackingStorePixelRatio || y.mozBackingStorePixelRatio || y.msBackingStorePixelRatio || y.oBackingStorePixelRatio || y.backingStorePixelRatio || 1;
            ha = Qa / La;
            m.width = s * ha;
            m.height = q * ha;
            Qa !== La && (m.style.width = s + "px", m.style.height = q + "px", y.scale(ha, ha))
        } else m.width = s, m.height = q
    }

    function cb(m) {
        if (!Ya) {
            var s = !1,
                q = !1;
            "undefined" === typeof sa.Chart.creditHref ? (m.creditHref = ka("iuuqr;..b`ow`rkr/bnl."), m.creditText = ka("B`ow`rKR/bnl")) : (s = m.updateOption("creditText"), q = m.updateOption("creditHref"));
            if (m.creditHref && m.creditText) {
                m._creditLink || (m._creditLink = document.createElement("a"), m._creditLink.setAttribute("class", "canvasjs-chart-credit"), m._creditLink.setAttribute("style", "outline:none;margin:0px;position:absolute;right:2px;top:" + (m.height - 14) + "px;color:dimgrey;text-decoration:none;font-size:11px;font-family: Calibri, Lucida Grande, Lucida Sans Unicode, Arial, sans-serif"),
                    m._creditLink.setAttribute("tabIndex", -1), m._creditLink.setAttribute("target", "_blank"));
                if (0 === m.renderCount || s || q) m._creditLink.setAttribute("href", m.creditHref), m._creditLink.innerHTML = m.creditText;
                m._creditLink && m.creditHref && m.creditText ? (m._creditLink.parentElement || m._canvasJSContainer.appendChild(m._creditLink), m._creditLink.style.top = m.height - 14 + "px") : m._creditLink.parentElement && m._canvasJSContainer.removeChild(m._creditLink)
            }
        }
    }

    function ua(m, s) {
        var q = document.createElement("canvas");
        q.setAttribute("class",
            "canvasjs-chart-canvas");
        Ha(q, m, s);
        v || "undefined" === typeof G_vmlCanvasManager || G_vmlCanvasManager.initElement(q);
        return q
    }

    function qa(m, s, q) {
        for (var v in q) s.style[v] = q[v]
    }

    function va(m, s, q) {
        s.getAttribute("state") || (s.style.backgroundColor = m.toolbar.backgroundColor, s.style.color = m.toolbar.fontColor, s.style.border = "none", qa(m, s, {
            WebkitUserSelect: "none",
            MozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none"
        }));
        s.getAttribute("state") !== q && (s.setAttribute("state", q), s.setAttribute("type", "button"),
            qa(m, s, {
                padding: "5px 12px",
                cursor: "pointer",
                "float": "left",
                width: "40px",
                height: "25px",
                outline: "0px",
                verticalAlign: "baseline",
                lineHeight: "0"
            }), s.setAttribute("title", m._cultureInfo[q + "Text"]), s.innerHTML = "<img style='height:95%;' src='" + db[q].image + "' alt='" + m._cultureInfo[q + "Text"] + "' />")
    }

    function Ma() {
        for (var m = null, s = 0; s < arguments.length; s++) m = arguments[s], m.style && (m.style.display = "inline")
    }

    function wa() {
        for (var m = null, s = 0; s < arguments.length; s++)(m = arguments[s]) && m.style && (m.style.display = "none")
    }

    function X(m, s, q, v, x) {
        this._defaultsKey = m;
        this._themeOptionsKey = s;
        this._index = v;
        this.parent = x;
        this._eventListeners = [];
        m = {};
        this.theme && y(s) && y(v) ? m = y(ya[this.theme]) ? ya.light1 : ya[this.theme] : this.parent && (this.parent.themeOptions && this.parent.themeOptions[s]) && (null === v ? m = this.parent.themeOptions[s] : 0 < this.parent.themeOptions[s].length && (v = Math.min(this.parent.themeOptions[s].length - 1, v), m = this.parent.themeOptions[s][v]));
        this.themeOptions = m;
        this.options = q ? q : {
            _isPlaceholder: !0
        };
        this.setOptions(this.options,
            m)
    }

    function Ea(m, s, q, v, y) {
        "undefined" === typeof y && (y = 0);
        this._padding = y;
        this._x1 = m;
        this._y1 = s;
        this._x2 = q;
        this._y2 = v;
        this._rightOccupied = this._leftOccupied = this._bottomOccupied = this._topOccupied = this._padding
    }

    function la(m, s) {
        la.base.constructor.call(this, "TextBlock", null, s, null, null);
        this.ctx = m;
        this._isDirty = !0;
        this._wrappedText = null;
        this._initialize()
    }

    function Ra(m, s) {
        Ra.base.constructor.call(this, "Toolbar", "toolbar", s, null, m);
        this.chart = m;
        this.canvas = m.canvas;
        this.ctx = this.chart.ctx;
        this.optionsName =
            "toolbar"
    }

    function Ia(m, s) {
        Ia.base.constructor.call(this, "Title", "title", s, null, m);
        this.chart = m;
        this.canvas = m.canvas;
        this.ctx = this.chart.ctx;
        this.optionsName = "title";
        if (y(this.options.margin) && m.options.subtitles)
            for (var q = m.options.subtitles, v = 0; v < q.length; v++)
                if ((y(q[v].horizontalAlign) && "center" === this.horizontalAlign || q[v].horizontalAlign === this.horizontalAlign) && (y(q[v].verticalAlign) && "top" === this.verticalAlign || q[v].verticalAlign === this.verticalAlign) && !q[v].dockInsidePlotArea === !this.dockInsidePlotArea) {
                    this.margin =
                        0;
                    break
                }
        "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
        this.height = this.width = null;
        this.bounds = {
            x1: null,
            y1: null,
            x2: null,
            y2: null
        }
    }

    function Na(m, s, q) {
        Na.base.constructor.call(this, "Subtitle", "subtitles", s, q, m);
        this.chart = m;
        this.canvas = m.canvas;
        this.ctx = this.chart.ctx;
        this.optionsName = "subtitles";
        this.isOptionsInArray = !0;
        "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
        this.height = this.width = null;
        this.bounds = {
            x1: null,
            y1: null,
            x2: null,
            y2: null
        }
    }

    function Ja(m) {
        var s;
        m && Ka[m] && (s = Ka[m]);
        Ja.base.constructor.call(this, "CultureInfo", null, s, null, null)
    }
    var Z = {},
        v = !!document.createElement("canvas").getContext,
        sa = {
            Chart: {
                width: 500,
                height: 400,
                zoomEnabled: !1,
                zoomType: "x",
                backgroundColor: "white",
                theme: "light1",
                animationEnabled: !1,
                animationDuration: 1200,
                dataPointWidth: null,
                dataPointMinWidth: null,
                dataPointMaxWidth: null,
                colorSet: "colorSet1",
                culture: "en",
                creditHref: "",
                creditText: "CanvasJS",
                interactivityEnabled: !0,
                exportEnabled: !1,
                exportFileName: "Chart",
                rangeChanging: null,
                rangeChanged: null,
                publicProperties: {
                    title: "readWrite",
                    subtitles: "readWrite",
                    toolbar: "readWrite",
                    toolTip: "readWrite",
                    legend: "readWrite",
                    axisX: "readWrite",
                    axisY: "readWrite",
                    axisX2: "readWrite",
                    axisY2: "readWrite",
                    data: "readWrite",
                    options: "readWrite",
                    bounds: "readOnly",
                    container: "readOnly"
                }
            },
            Title: {
                padding: 0,
                text: null,
                verticalAlign: "top",
                horizontalAlign: "center",
                fontSize: 20,
                fontFamily: "Calibri",
                fontWeight: "normal",
                fontColor: "black",
                fontStyle: "normal",
                borderThickness: 0,
                borderColor: "black",
                cornerRadius: 0,
                backgroundColor: v ? "transparent" : null,
                margin: 5,
                wrap: !0,
                maxWidth: null,
                dockInsidePlotArea: !1,
                publicProperties: {
                    options: "readWrite",
                    bounds: "readOnly",
                    chart: "readOnly"
                }
            },
            Subtitle: {
                padding: 0,
                text: null,
                verticalAlign: "top",
                horizontalAlign: "center",
                fontSize: 14,
                fontFamily: "Calibri",
                fontWeight: "normal",
                fontColor: "black",
                fontStyle: "normal",
                borderThickness: 0,
                borderColor: "black",
                cornerRadius: 0,
                backgroundColor: null,
                margin: 2,
                wrap: !0,
                maxWidth: null,
                dockInsidePlotArea: !1,
                publicProperties: {
                    options: "readWrite",
                    bounds: "readOnly",
                    chart: "readOnly"
                }
            },
            Toolbar: {
                backgroundColor: "white",
                backgroundColorOnHover: "#2196f3",
                borderColor: "#2196f3",
                borderThickness: 1,
                fontColor: "black",
                fontColorOnHover: "white",
                publicProperties: {
                    options: "readWrite",
                    chart: "readOnly"
                }
            },
            Legend: {
                name: null,
                verticalAlign: "center",
                horizontalAlign: "right",
                fontSize: 14,
                fontFamily: "calibri",
                fontWeight: "normal",
                fontColor: "black",
                fontStyle: "normal",
                cursor: null,
                itemmouseover: null,
                itemmouseout: null,
                itemmousemove: null,
                itemclick: null,
                dockInsidePlotArea: !1,
                reversed: !1,
                backgroundColor: v ? "transparent" : null,
                borderColor: v ? "transparent" : null,
                borderThickness: 0,
                cornerRadius: 0,
                maxWidth: null,
                maxHeight: null,
                markerMargin: null,
                itemMaxWidth: null,
                itemWidth: null,
                itemWrap: !0,
                itemTextFormatter: null,
                publicProperties: {
                    options: "readWrite",
                    bounds: "readOnly",
                    chart: "readOnly"
                }
            },
            ToolTip: {
                enabled: !0,
                shared: !1,
                animationEnabled: !0,
                content: null,
                contentFormatter: null,
                reversed: !1,
                backgroundColor: v ? "rgba(255,255,255,.9)" : "rgb(255,255,255)",
                borderColor: null,
                borderThickness: 2,
                cornerRadius: 5,
                fontSize: 14,
                fontColor: "black",
                fontFamily: "Calibri, Arial, Georgia, serif;",
                fontWeight: "normal",
                fontStyle: "italic",
                publicProperties: {
                    options: "readWrite",
                    chart: "readOnly"
                }
            },
            Axis: {
                minimum: null,
                maximum: null,
                viewportMinimum: null,
                viewportMaximum: null,
                interval: null,
                intervalType: null,
                reversed: !1,
                logarithmic: !1,
                logarithmBase: 10,
                title: null,
                titleFontColor: "black",
                titleFontSize: 20,
                titleFontFamily: "arial",
                titleFontWeight: "normal",
                titleFontStyle: "normal",
                titleWrap: !0,
                titleMaxWidth: null,
                titleBackgroundColor: v ? "transparent" : null,
                titleBorderColor: v ? "transparent" : null,
                titleBorderThickness: 0,
                titleCornerRadius: 0,
                labelAngle: 0,
                labelFontFamily: "arial",
                labelFontColor: "black",
                labelFontSize: 12,
                labelFontWeight: "normal",
                labelFontStyle: "normal",
                labelAutoFit: !0,
                labelWrap: !0,
                labelMaxWidth: null,
                labelFormatter: null,
                labelBackgroundColor: v ? "transparent" : null,
                labelBorderColor: v ? "transparent" : null,
                labelBorderThickness: 0,
                labelCornerRadius: 0,
                labelPlacement: "outside",
                prefix: "",
                suffix: "",
                includeZero: !0,
                tickLength: 5,
                tickColor: "black",
                tickThickness: 1,
                lineColor: "black",
                lineThickness: 1,
                lineDashType: "solid",
                gridColor: "A0A0A0",
                gridThickness: 0,
                gridDashType: "solid",
                interlacedColor: v ? "transparent" : null,
                valueFormatString: null,
                margin: 2,
                publicProperties: {
                    options: "readWrite",
                    stripLines: "readWrite",
                    scaleBreaks: "readWrite",
                    crosshair: "readWrite",
                    bounds: "readOnly",
                    chart: "readOnly"
                }
            },
            StripLine: {
                value: null,
                startValue: null,
                endValue: null,
                color: "orange",
                opacity: null,
                thickness: 2,
                lineDashType: "solid",
                label: "",
                labelPlacement: "inside",
                labelAlign: "far",
                labelWrap: !0,
                labelMaxWidth: null,
                labelBackgroundColor: null,
                labelBorderColor: v ? "transparent" : null,
                labelBorderThickness: 0,
                labelCornerRadius: 0,
                labelFontFamily: "arial",
                labelFontColor: "orange",
                labelFontSize: 12,
                labelFontWeight: "normal",
                labelFontStyle: "normal",
                labelFormatter: null,
                showOnTop: !1,
                publicProperties: {
                    options: "readWrite",
                    axis: "readOnly",
                    bounds: "readOnly",
                    chart: "readOnly"
                }
            },
            ScaleBreaks: {
                autoCalculate: !1,
                collapsibleThreshold: "25%",
                maxNumberOfAutoBreaks: 2,
                spacing: 8,
                type: "straight",
                color: "#FFFFFF",
                fillOpacity: 0.9,
                lineThickness: 2,
                lineColor: "#E16E6E",
                lineDashType: "solid",
                publicProperties: {
                    options: "readWrite",
                    customBreaks: "readWrite",
                    axis: "readOnly",
                    autoBreaks: "readOnly",
                    bounds: "readOnly",
                    chart: "readOnly"
                }
            },
            Break: {
                startValue: null,
                endValue: null,
                spacing: 8,
                type: "straight",
                color: "#FFFFFF",
                fillOpacity: 0.9,
                lineThickness: 2,
                lineColor: "#E16E6E",
                lineDashType: "solid",
                publicProperties: {
                    options: "readWrite",
                    scaleBreaks: "readOnly",
                    bounds: "readOnly",
                    chart: "readOnly"
                }
            },
            Crosshair: {
                enabled: !1,
                snapToDataPoint: !1,
                color: "grey",
                opacity: null,
                thickness: 2,
                lineDashType: "solid",
                label: "",
                labelWrap: !0,
                labelMaxWidth: null,
                labelBackgroundColor: v ? "grey" : null,
                labelBorderColor: v ? "grey" : null,
                labelBorderThickness: 0,
                labelCornerRadius: 0,
                labelFontFamily: v ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
                labelFontSize: 12,
                labelFontColor: "#fff",
                labelFontWeight: "normal",
                labelFontStyle: "normal",
                labelFormatter: null,
                valueFormatString: null,
                publicProperties: {
                    options: "readWrite",
                    axis: "readOnly",
                    bounds: "readOnly",
                    chart: "readOnly"
                }
            },
            DataSeries: {
                name: null,
                dataPoints: null,
                label: "",
                bevelEnabled: !1,
                highlightEnabled: !0,
                cursor: "default",
                indexLabel: "",
                indexLabelPlacement: "auto",
                indexLabelOrientation: "horizontal",
                indexLabelFontColor: "black",
                indexLabelFontSize: 12,
                indexLabelFontStyle: "normal",
                indexLabelFontFamily: "Arial",
                indexLabelFontWeight: "normal",
                indexLabelBackgroundColor: null,
                indexLabelLineColor: "gray",
                indexLabelLineThickness: 1,
                indexLabelLineDashType: "solid",
                indexLabelMaxWidth: null,
                indexLabelWrap: !0,
                indexLabelFormatter: null,
                lineThickness: 0,
                lineDashType: "solid",
                connectNullData: !1,
                nullDataLineDashType: "dash",
                color: null,
                lineColor: null,
                risingColor: "#14d197",
                fallingColor: "#ce4b59",
                fillOpacity: null,
                startAngle: 0,
                radius: null,
                innerRadius: null,
                neckHeight: null,
                neckWidth: null,
                reversed: !1,
                valueRepresents: null,
                linkedDataSeriesIndex: null,
                whiskerThickness: 0,
                whiskerDashType: "solid",
                whiskerColor: null,
                whiskerLength: null,
                stemThickness: 0,
                stemColor: null,
                stemDashType: "solid",
                upperBoxColor: "white",
                lowerBoxColor: "white",
                type: "column",
                xValueType: "number",
                axisXType: "primary",
                axisYType: "primary",
                axisXIndex: 0,
                axisYIndex: 0,
                xValueFormatString: null,
                yValueFormatString: null,
                zValueFormatString: null,
                percentFormatString: null,
                showInLegend: null,
                legendMarkerType: null,
                legendMarkerColor: null,
                legendText: null,
                legendMarkerBorderColor: v ? "transparent" : null,
                legendMarkerBorderThickness: 0,
                markerType: "circle",
                markerColor: null,
                markerSize: null,
                markerBorderColor: v ? "transparent" : null,
                markerBorderThickness: 0,
                mouseover: null,
                mouseout: null,
                mousemove: null,
                click: null,
                toolTipContent: null,
                visible: !0,
                publicProperties: {
                    options: "readWrite",
                    axisX: "readWrite",
                    axisY: "readWrite",
                    chart: "readOnly"
                }
            },
            TextBlock: {
                x: 0,
                y: 0,
                width: null,
                height: null,
                maxWidth: null,
                maxHeight: null,
                padding: 0,
                angle: 0,
                text: "",
                horizontalAlign: "center",
                fontSize: 12,
                fontFamily: "calibri",
                fontWeight: "normal",
                fontColor: "black",
                fontStyle: "normal",
                borderThickness: 0,
                borderColor: "black",
                cornerRadius: 0,
                backgroundColor: null,
                textBaseline: "top"
            },
            CultureInfo: {
                decimalSeparator: ".",
                digitGroupSeparator: ",",
                zoomText: "Zoom",
                panText: "Pan",
                resetText: "Reset",
                menuText: "More Options",
                saveJPGText: "Save as JPEG",
                savePNGText: "Save as PNG",
                printText: "Print",
                days: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                shortDays: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                months: "January February March April May June July August September October November December".split(" "),
                shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ")
            }
        },
        Ka = {
            en: {}
        },
        x = v ? "Trebuchet MS, Helvetica, sans-serif" : "Arial",
        Fa = v ? "Impact, Charcoal, sans-serif" : "Arial",
        Aa = {
            colorSet1: "#4F81BC #C0504E #9BBB58 #23BFAA #8064A1 #4AACC5 #F79647 #7F6084 #77A033 #33558B #E59566".split(" "),
            colorSet2: "#6D78AD #51CDA0 #DF7970 #4C9CA0 #AE7D99 #C9D45C #5592AD #DF874D #52BCA8 #8E7AA3 #E3CB64 #C77B85 #C39762 #8DD17E #B57952 #FCC26C".split(" "),
            colorSet3: "#8CA1BC #36845C #017E82 #8CB9D0 #708C98 #94838D #F08891 #0366A7 #008276 #EE7757 #E5BA3A #F2990B #03557B #782970".split(" ")
        },
        O, ga, T, Y, fa;
    ga = "#333333";
    T = "#000000";
    O = "#666666";
    fa = Y = "#000000";
    var aa = 20,
        z = 14,
        Sa = {
            colorSet: "colorSet1",
            backgroundColor: "#FFFFFF",
            title: {
                fontFamily: Fa,
                fontSize: 32,
                fontColor: ga,
                fontWeight: "normal",
                verticalAlign: "top",
                margin: 5
            },
            subtitles: [{
                fontFamily: Fa,
                fontSize: z,
                fontColor: ga,
                fontWeight: "normal",
                verticalAlign: "top",
                margin: 5
            }],
            data: [{
                indexLabelFontFamily: x,
                indexLabelFontSize: z,
                indexLabelFontColor: ga,
                indexLabelFontWeight: "normal",
                indexLabelLineThickness: 1
            }],
            axisX: [{
                titleFontFamily: x,
                titleFontSize: aa,
                titleFontColor: ga,
                titleFontWeight: "normal",
                labelFontFamily: x,
                labelFontSize: z,
                labelFontColor: T,
                labelFontWeight: "normal",
                lineThickness: 1,
                lineColor: O,
                tickThickness: 1,
                tickColor: O,
                gridThickness: 0,
                gridColor: O,
                stripLines: [{
                    labelFontFamily: x,
                    labelFontSize: z,
                    labelFontColor: "#FF7300",
                    labelFontWeight: "normal",
                    labelBackgroundColor: null,
                    color: "#FF7300",
                    thickness: 1
                }],
                crosshair: {
                    labelFontFamily: x,
                    labelFontSize: z,
                    labelFontColor: "#EEEEEE",
                    labelFontWeight: "normal",
                    labelBackgroundColor: fa,
                    color: Y,
                    thickness: 1,
                    lineDashType: "dash"
                },
                scaleBreaks: {
                    type: "zigzag",
                    spacing: "2%",
                    lineColor: "#BBBBBB",
                    lineThickness: 1,
                    lineDashType: "solid"
                }
            }],
            axisX2: [{
                titleFontFamily: x,
                titleFontSize: aa,
                titleFontColor: ga,
                titleFontWeight: "normal",
                labelFontFamily: x,
                labelFontSize: z,
                labelFontColor: T,
                labelFontWeight: "normal",
                lineThickness: 1,
                lineColor: O,
                tickThickness: 1,
                tickColor: O,
                gridThickness: 0,
                gridColor: O,
                stripLines: [{
                    labelFontFamily: x,
                    labelFontSize: z,
                    labelFontColor: "#FF7300",
                    labelFontWeight: "normal",
                    labelBackgroundColor: null,
                    color: "#FF7300",
                    thickness: 1
                }],
                crosshair: {
                    labelFontFamily: x,
                    labelFontSize: z,
                    labelFontColor: "#EEEEEE",
                    labelFontWeight: "normal",
                    labelBackgroundColor: fa,
                    color: Y,
                    thickness: 1,
                    lineDashType: "dash"
                },
                scaleBreaks: {
                    type: "zigzag",
                    spacing: "2%",
                    lineColor: "#BBBBBB",
                    lineThickness: 1,
                    lineDashType: "solid"
                }
            }],
            axisY: [{
                titleFontFamily: x,
                titleFontSize: aa,
                titleFontColor: ga,
                titleFontWeight: "normal",
                labelFontFamily: x,
                labelFontSize: z,
                labelFontColor: T,
                labelFontWeight: "normal",
                lineThickness: 1,
                lineColor: O,
                tickThickness: 1,
                tickColor: O,
                gridThickness: 1,
                gridColor: O,
                stripLines: [{
                    labelFontFamily: x,
                    labelFontSize: z,
                    labelFontColor: "#FF7300",
                    labelFontWeight: "normal",
                    labelBackgroundColor: null,
                    color: "#FF7300",
                    thickness: 1
                }],
                crosshair: {
                    labelFontFamily: x,
                    labelFontSize: z,
                    labelFontColor: "#EEEEEE",
                    labelFontWeight: "normal",
                    labelBackgroundColor: fa,
                    color: Y,
                    thickness: 1,
                    lineDashType: "dash"
                },
                scaleBreaks: {
                    type: "zigzag",
                    spacing: "2%",
                    lineColor: "#BBBBBB",
                    lineThickness: 1,
                    lineDashType: "solid"
                }
            }],
            axisY2: [{
                titleFontFamily: x,
                titleFontSize: aa,
                titleFontColor: ga,
                titleFontWeight: "normal",
                labelFontFamily: x,
                labelFontSize: z,
                labelFontColor: T,
                labelFontWeight: "normal",
                lineThickness: 1,
                lineColor: O,
                tickThickness: 1,
                tickColor: O,
                gridThickness: 1,
                gridColor: O,
                stripLines: [{
                    labelFontFamily: x,
                    labelFontSize: z,
                    labelFontColor: "#FF7300",
                    labelFontWeight: "normal",
                    labelBackgroundColor: null,
                    color: "#FF7300",
                    thickness: 1
                }],
                crosshair: {
                    labelFontFamily: x,
                    labelFontSize: z,
                    labelFontColor: "#EEEEEE",
                    labelFontWeight: "normal",
                    labelBackgroundColor: fa,
                    color: Y,
                    thickness: 1,
                    lineDashType: "dash"
                },
                scaleBreaks: {
                    type: "zigzag",
                    spacing: "2%",
                    lineColor: "#BBBBBB",
                    lineThickness: 1,
                    lineDashType: "solid"
                }
            }],
            legend: {
                fontFamily: x,
                fontSize: 14,
                fontColor: ga,
                fontWeight: "bold",
                verticalAlign: "bottom",
                horizontalAlign: "center"
            },
            toolTip: {
                fontFamily: x,
                fontSize: 14,
                fontStyle: "normal",
                cornerRadius: 0,
                borderThickness: 1
            }
        };
    T = ga = "#F5F5F5";
    O = "#FFFFFF";
    Y = "#40BAF1";
    fa = "#F5F5F5";
    var aa = 20,
        z = 14,
        Za = {
            colorSet: "colorSet2",
            title: {
                fontFamily: x,
                fontSize: 33,
                fontColor: "#3A3A3A",
                fontWeight: "bold",
                verticalAlign: "top",
                margin: 5
            },
            subtitles: [{
                fontFamily: x,
                fontSize: z,
                fontColor: "#3A3A3A",
                fontWeight: "normal",
                verticalAlign: "top",
                margin: 5
            }],
            data: [{
                indexLabelFontFamily: x,
                indexLabelFontSize: z,
                indexLabelFontColor: "#666666",
                indexLabelFontWeight: "normal",
                indexLabelLineThickness: 1
            }],
            axisX: [{
                titleFontFamily: x,
                titleFontSize: aa,
                titleFontColor: "#666666",
                titleFontWeight: "normal",
                labelFontFamily: x,
                labelFontSize: z,
                labelFontColor: "#666666",
                labelFontWeight: "normal",
                lineThickness: 1,
                lineColor: "#BBBBBB",
                tickThickness: 1,
                tickColor: "#BBBBBB",
                gridThickness: 1,
                gridColor: "#BBBBBB",
                stripLines: [{
                    labelFontFamily: x,
                    labelFontSize: z,
                    labelFontColor: "#FFA500",
                    labelFontWeight: "normal",
                    labelBackgroundColor: null,
                    color: "#FFA500",
                    thickness: 1
                }],
                crosshair: {
                    labelFontFamily: x,
                    labelFontSize: z,
                    labelFontColor: "#EEEEEE",
                    labelFontWeight: "normal",
                    labelBackgroundColor: "black",
                    color: "black",
                    thickness: 1,
                    lineDashType: "dot"
                },
                scaleBreaks: {
                    type: "zigzag",
                    spacing: "2%",
                    lineColor: "#BBBBBB",
                    lineThickness: 1,
                    lineDashType: "solid"
                }
            }],
            axisX2: [{
                titleFontFamily: x,
                titleFontSize: aa,
                titleFontColor: "#666666",
                titleFontWeight: "normal",
                labelFontFamily: x,
                labelFontSize: z,
                labelFontColor: "#666666",
                labelFontWeight: "normal",
                lineThickness: 1,
                lineColor: "#BBBBBB",
                tickColor: "#BBBBBB",
                tickThickness: 1,
                gridThickness: 1,
                gridColor: "#BBBBBB",
                stripLines: [{
                    labelFontFamily: x,
                    labelFontSize: z,
                    labelFontColor: "#FFA500",
                    labelFontWeight: "normal",
                    labelBackgroundColor: null,
                    color: "#FFA500",
                    thickness: 1
                }],
                crosshair: {
                    labelFontFamily: x,
                    labelFontSize: z,
                    labelFontColor: "#EEEEEE",
                    labelFontWeight: "normal",
                    labelBackgroundColor: "black",
                    color: "black",
                    thickness: 1,
                    lineDashType: "dot"
                },
                scaleBreaks: {
                    type: "zigzag",
                    spacing: "2%",
                    lineColor: "#BBBBBB",
                    lineThickness: 1,
                    lineDashType: "solid"
                }
            }],
            axisY: [{
                titleFontFamily: x,
                titleFontSize: aa,
                titleFontColor: "#666666",
                titleFontWeight: "normal",
                labelFontFamily: x,
                labelFontSize: z,
                labelFontColor: "#666666",
                labelFontWeight: "normal",
                lineThickness: 0,
                lineColor: "#BBBBBB",
                tickColor: "#BBBBBB",
                tickThickness: 1,
                gridThickness: 1,
                gridColor: "#BBBBBB",
                stripLines: [{
                    labelFontFamily: x,
                    labelFontSize: z,
                    labelFontColor: "#FFA500",
                    labelFontWeight: "normal",
                    labelBackgroundColor: null,
                    color: "#FFA500",
                    thickness: 1
                }],
                crosshair: {
                    labelFontFamily: x,
                    labelFontSize: z,
                    labelFontColor: "#EEEEEE",
                    labelFontWeight: "normal",
                    labelBackgroundColor: "black",
                    color: "black",
                    thickness: 1,
                    lineDashType: "dot"
                },
                scaleBreaks: {
                    type: "zigzag",
                    spacing: "2%",
                    lineColor: "#BBBBBB",
                    lineThickness: 1,
                    lineDashType: "solid"
                }
            }],
            axisY2: [{
                titleFontFamily: x,
                titleFontSize: aa,
                titleFontColor: "#666666",
                titleFontWeight: "normal",
                labelFontFamily: x,
                labelFontSize: z,
                labelFontColor: "#666666",
                labelFontWeight: "normal",
                lineThickness: 0,
                lineColor: "#BBBBBB",
                tickColor: "#BBBBBB",
                tickThickness: 1,
                gridThickness: 1,
                gridColor: "#BBBBBB",
                stripLines: [{
                    labelFontFamily: x,
                    labelFontSize: z,
                    labelFontColor: "#FFA500",
                    labelFontWeight: "normal",
                    labelBackgroundColor: null,
                    color: "#FFA500",
                    thickness: 1
                }],
                crosshair: {
                    labelFontFamily: x,
                    labelFontSize: z,
                    labelFontColor: "#EEEEEE",
                    labelFontWeight: "normal",
                    labelBackgroundColor: "black",
                    color: "black",
                    thickness: 1,
                    lineDashType: "dot"
                },
                scaleBreaks: {
                    type: "zigzag",
                    spacing: "2%",
                    lineColor: "#BBBBBB",
                    lineThickness: 1,
                    lineDashType: "solid"
                }
            }],
            legend: {
                fontFamily: x,
                fontSize: 14,
                fontColor: "#3A3A3A",
                fontWeight: "bold",
                verticalAlign: "bottom",
                horizontalAlign: "center"
            },
            toolTip: {
                fontFamily: x,
                fontSize: 14,
                fontStyle: "normal",
                cornerRadius: 0,
                borderThickness: 1
            }
        };
    T = ga = "#F5F5F5";
    O = "#FFFFFF";
    Y = "#40BAF1";
    fa = "#F5F5F5";
    aa = 20;
    z = 14;
    Fa = {
        colorSet: "colorSet12",
        backgroundColor: "#2A2A2A",
        title: {
            fontFamily: Fa,
            fontSize: 32,
            fontColor: ga,
            fontWeight: "normal",
            verticalAlign: "top",
            margin: 5
        },
        subtitles: [{
            fontFamily: Fa,
            fontSize: z,
            fontColor: ga,
            fontWeight: "normal",
            verticalAlign: "top",
            margin: 5
        }],
        toolbar: {
            backgroundColor: "#666666",
            backgroundColorOnHover: "#FF7372",
            borderColor: "#FF7372",
            borderThickness: 1,
            fontColor: "#F5F5F5",
            fontColorOnHover: "#F5F5F5"
        },
        data: [{
            indexLabelFontFamily: x,
            indexLabelFontSize: z,
            indexLabelFontColor: T,
            indexLabelFontWeight: "normal",
            indexLabelLineThickness: 1
        }],
        axisX: [{
            titleFontFamily: x,
            titleFontSize: aa,
            titleFontColor: T,
            titleFontWeight: "normal",
            labelFontFamily: x,
            labelFontSize: z,
            labelFontColor: T,
            labelFontWeight: "normal",
            lineThickness: 1,
            lineColor: O,
            tickThickness: 1,
            tickColor: O,
            gridThickness: 0,
            gridColor: O,
            stripLines: [{
                labelFontFamily: x,
                labelFontSize: z,
                labelFontColor: "#FF7300",
                labelFontWeight: "normal",
                labelBackgroundColor: null,
                color: "#FF7300",
                thickness: 1
            }],
            crosshair: {
                labelFontFamily: x,
                labelFontSize: z,
                labelFontColor: "#000000",
                labelFontWeight: "normal",
                labelBackgroundColor: fa,
                color: Y,
                thickness: 1,
                lineDashType: "dash"
            },
            scaleBreaks: {
                type: "zigzag",
                spacing: "2%",
                lineColor: "#777777",
                lineThickness: 1,
                lineDashType: "solid",
                color: "#111111"
            }
        }],
        axisX2: [{
            titleFontFamily: x,
            titleFontSize: aa,
            titleFontColor: T,
            titleFontWeight: "normal",
            labelFontFamily: x,
            labelFontSize: z,
            labelFontColor: T,
            labelFontWeight: "normal",
            lineThickness: 1,
            lineColor: O,
            tickThickness: 1,
            tickColor: O,
            gridThickness: 0,
            gridColor: O,
            stripLines: [{
                labelFontFamily: x,
                labelFontSize: z,
                labelFontColor: "#FF7300",
                labelFontWeight: "normal",
                labelBackgroundColor: null,
                color: "#FF7300",
                thickness: 1
            }],
            crosshair: {
                labelFontFamily: x,
                labelFontSize: z,
                labelFontColor: "#000000",
                labelFontWeight: "normal",
                labelBackgroundColor: fa,
                color: Y,
                thickness: 1,
                lineDashType: "dash"
            },
            scaleBreaks: {
                type: "zigzag",
                spacing: "2%",
                lineColor: "#777777",
                lineThickness: 1,
                lineDashType: "solid",
                color: "#111111"
            }
        }],
        axisY: [{
            titleFontFamily: x,
            titleFontSize: aa,
            titleFontColor: T,
            titleFontWeight: "normal",
            labelFontFamily: x,
            labelFontSize: z,
            labelFontColor: T,
            labelFontWeight: "normal",
            lineThickness: 1,
            lineColor: O,
            tickThickness: 1,
            tickColor: O,
            gridThickness: 1,
            gridColor: O,
            stripLines: [{
                labelFontFamily: x,
                labelFontSize: z,
                labelFontColor: "#FF7300",
                labelFontWeight: "normal",
                labelBackgroundColor: null,
                color: "#FF7300",
                thickness: 1
            }],
            crosshair: {
                labelFontFamily: x,
                labelFontSize: z,
                labelFontColor: "#000000",
                labelFontWeight: "normal",
                labelBackgroundColor: fa,
                color: Y,
                thickness: 1,
                lineDashType: "dash"
            },
            scaleBreaks: {
                type: "zigzag",
                spacing: "2%",
                lineColor: "#777777",
                lineThickness: 1,
                lineDashType: "solid",
                color: "#111111"
            }
        }],
        axisY2: [{
            titleFontFamily: x,
            titleFontSize: aa,
            titleFontColor: T,
            titleFontWeight: "normal",
            labelFontFamily: x,
            labelFontSize: z,
            labelFontColor: T,
            labelFontWeight: "normal",
            lineThickness: 1,
            lineColor: O,
            tickThickness: 1,
            tickColor: O,
            gridThickness: 1,
            gridColor: O,
            stripLines: [{
                labelFontFamily: x,
                labelFontSize: z,
                labelFontColor: "#FF7300",
                labelFontWeight: "normal",
                labelBackgroundColor: null,
                color: "#FF7300",
                thickness: 1
            }],
            crosshair: {
                labelFontFamily: x,
                labelFontSize: z,
                labelFontColor: "#000000",
                labelFontWeight: "normal",
                labelBackgroundColor: fa,
                color: Y,
                thickness: 1,
                lineDashType: "dash"
            },
            scaleBreaks: {
                type: "zigzag",
                spacing: "2%",
                lineColor: "#777777",
                lineThickness: 1,
                lineDashType: "solid",
                color: "#111111"
            }
        }],
        legend: {
            fontFamily: x,
            fontSize: 14,
            fontColor: ga,
            fontWeight: "bold",
            verticalAlign: "bottom",
            horizontalAlign: "center"
        },
        toolTip: {
            fontFamily: x,
            fontSize: 14,
            fontStyle: "normal",
            cornerRadius: 0,
            borderThickness: 1,
            fontColor: T,
            backgroundColor: "rgba(0, 0, 0, .7)"
        }
    };
    O = "#FFFFFF";
    T = ga = "#FAFAFA";
    Y = "#40BAF1";
    fa = "#F5F5F5";
    var aa = 20,
        z = 14,
        ya = {
            light1: Sa,
            light2: Za,
            dark1: Fa,
            dark2: {
                colorSet: "colorSet2",
                backgroundColor: "#313447",
                title: {
                    fontFamily: x,
                    fontSize: 32,
                    fontColor: ga,
                    fontWeight: "normal",
                    verticalAlign: "top",
                    margin: 5
                },
                subtitles: [{
                    fontFamily: x,
                    fontSize: z,
                    fontColor: ga,
                    fontWeight: "normal",
                    verticalAlign: "top",
                    margin: 5
                }],
                toolbar: {
                    backgroundColor: "#666666",
                    backgroundColorOnHover: "#FF7372",
                    borderColor: "#FF7372",
                    borderThickness: 1,
                    fontColor: "#F5F5F5",
                    fontColorOnHover: "#F5F5F5"
                },
                data: [{
                    indexLabelFontFamily: x,
                    indexLabelFontSize: z,
                    indexLabelFontColor: T,
                    indexLabelFontWeight: "normal",
                    indexLabelLineThickness: 1
                }],
                axisX: [{
                    titleFontFamily: x,
                    titleFontSize: aa,
                    titleFontColor: T,
                    titleFontWeight: "normal",
                    labelFontFamily: x,
                    labelFontSize: z,
                    labelFontColor: T,
                    labelFontWeight: "normal",
                    lineThickness: 1,
                    lineColor: O,
                    tickThickness: 1,
                    tickColor: O,
                    gridThickness: 0,
                    gridColor: O,
                    stripLines: [{
                        labelFontFamily: x,
                        labelFontSize: z,
                        labelFontColor: "#FF7300",
                        labelFontWeight: "normal",
                        labelBackgroundColor: null,
                        color: "#FF7300",
                        thickness: 1
                    }],
                    crosshair: {
                        labelFontFamily: x,
                        labelFontSize: z,
                        labelFontColor: "#000000",
                        labelFontWeight: "normal",
                        labelBackgroundColor: fa,
                        color: Y,
                        thickness: 1,
                        lineDashType: "dash"
                    },
                    scaleBreaks: {
                        type: "zigzag",
                        spacing: "2%",
                        lineColor: "#777777",
                        lineThickness: 1,
                        lineDashType: "solid",
                        color: "#111111"
                    }
                }],
                axisX2: [{
                    titleFontFamily: x,
                    titleFontSize: aa,
                    titleFontColor: T,
                    titleFontWeight: "normal",
                    labelFontFamily: x,
                    labelFontSize: z,
                    labelFontColor: T,
                    labelFontWeight: "normal",
                    lineThickness: 1,
                    lineColor: O,
                    tickThickness: 1,
                    tickColor: O,
                    gridThickness: 0,
                    gridColor: O,
                    stripLines: [{
                        labelFontFamily: x,
                        labelFontSize: z,
                        labelFontColor: "#FF7300",
                        labelFontWeight: "normal",
                        labelBackgroundColor: null,
                        color: "#FF7300",
                        thickness: 1
                    }],
                    crosshair: {
                        labelFontFamily: x,
                        labelFontSize: z,
                        labelFontColor: "#000000",
                        labelFontWeight: "normal",
                        labelBackgroundColor: fa,
                        color: Y,
                        thickness: 1,
                        lineDashType: "dash"
                    },
                    scaleBreaks: {
                        type: "zigzag",
                        spacing: "2%",
                        lineColor: "#777777",
                        lineThickness: 1,
                        lineDashType: "solid",
                        color: "#111111"
                    }
                }],
                axisY: [{
                    titleFontFamily: x,
                    titleFontSize: aa,
                    titleFontColor: T,
                    titleFontWeight: "normal",
                    labelFontFamily: x,
                    labelFontSize: z,
                    labelFontColor: T,
                    labelFontWeight: "normal",
                    lineThickness: 0,
                    lineColor: O,
                    tickThickness: 1,
                    tickColor: O,
                    gridThickness: 1,
                    gridColor: O,
                    stripLines: [{
                        labelFontFamily: x,
                        labelFontSize: z,
                        labelFontColor: "#FF7300",
                        labelFontWeight: "normal",
                        labelBackgroundColor: null,
                        color: "#FF7300",
                        thickness: 1
                    }],
                    crosshair: {
                        labelFontFamily: x,
                        labelFontSize: z,
                        labelFontColor: "#000000",
                        labelFontWeight: "normal",
                        labelBackgroundColor: fa,
                        color: Y,
                        thickness: 1,
                        lineDashType: "dash"
                    },
                    scaleBreaks: {
                        type: "zigzag",
                        spacing: "2%",
                        lineColor: "#777777",
                        lineThickness: 1,
                        lineDashType: "solid",
                        color: "#111111"
                    }
                }],
                axisY2: [{
                    titleFontFamily: x,
                    titleFontSize: aa,
                    titleFontColor: T,
                    titleFontWeight: "normal",
                    labelFontFamily: x,
                    labelFontSize: z,
                    labelFontColor: T,
                    labelFontWeight: "normal",
                    lineThickness: 0,
                    lineColor: O,
                    tickThickness: 1,
                    tickColor: O,
                    gridThickness: 1,
                    gridColor: O,
                    stripLines: [{
                        labelFontFamily: x,
                        labelFontSize: z,
                        labelFontColor: "#FF7300",
                        labelFontWeight: "normal",
                        labelBackgroundColor: null,
                        color: "#FF7300",
                        thickness: 1
                    }],
                    crosshair: {
                        labelFontFamily: x,
                        labelFontSize: z,
                        labelFontColor: "#000000",
                        labelFontWeight: "normal",
                        labelBackgroundColor: fa,
                        color: Y,
                        thickness: 1,
                        lineDashType: "dash"
                    },
                    scaleBreaks: {
                        type: "zigzag",
                        spacing: "2%",
                        lineColor: "#777777",
                        lineThickness: 1,
                        lineDashType: "solid",
                        color: "#111111"
                    }
                }],
                legend: {
                    fontFamily: x,
                    fontSize: 14,
                    fontColor: ga,
                    fontWeight: "bold",
                    verticalAlign: "bottom",
                    horizontalAlign: "center"
                },
                toolTip: {
                    fontFamily: x,
                    fontSize: 14,
                    fontStyle: "normal",
                    cornerRadius: 0,
                    borderThickness: 1,
                    fontColor: T,
                    backgroundColor: "rgba(0, 0, 0, .7)"
                }
            },
            theme1: Sa,
            theme2: Za,
            theme3: Sa
        },
        U = {
            numberDuration: 1,
            yearDuration: 314496E5,
            monthDuration: 2592E6,
            weekDuration: 6048E5,
            dayDuration: 864E5,
            hourDuration: 36E5,
            minuteDuration: 6E4,
            secondDuration: 1E3,
            millisecondDuration: 1,
            dayOfWeekFromInt: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ")
        };
    (function() {
        Z.fSDec = function(m) {
            for (var s = "", q = 0; q < m.length; q++) s += String.fromCharCode(Math.ceil(m.length / 57 / 5) ^ m.charCodeAt(q));
            return s
        };
        Z.obj = {
            trVs: "Ush`m!Wdsrhno",
            fntStr: "qy!B`mhcsh-!Mtbhe`!Fs`oed-!Mtbhe`!R`or!Tohbned-!@sh`m-!r`or,rdshg",
            txtBl: "udyuC`rdmhod",
            fnt: "gnou",
            fSy: "ghmmRuxmd",
            fTx: "ghmmUdyu",
            grClr: "fsdx",
            cntx: "buy",
            tp: "unq"
        };
        delete sa[Z.fSDec("Bi`su")][Z.fSDec("bsdehuIsdg")];
        Z.pro = {
            sCH: sa[Z.fSDec("Bi`su")][Z.fSDec("bsdehuIsdg")]
        };
        Z._fTWm = function(m) {
            if ("undefined" === typeof Z.pro.sCH && !Ya) try {
                var s = m[Z.fSDec(Z.obj.cntx)];
                s[Z.fSDec(Z.obj.txtBl)] = Z.fSDec(Z.obj.tp);
                s[Z.fSDec(Z.obj.fnt)] = 11 + Z.fSDec(Z.obj.fntStr);
                s[Z.fSDec(Z.obj.fSy)] = Z.fSDec(Z.obj.grClr);
                s[Z.fSDec(Z.obj.fTx)](Z.fSDec(Z.obj.trVs), 2, m.height - 11 - 2)
            } catch (q) {}
        }
    })();
    var Va = {},
        ra = null,
        Ba = function() {
            var m = /D{1,4}|M{1,4}|Y{1,4}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|f{1,3}|t{1,2}|T{1,2}|K|z{1,3}|"[^"]*"|'[^']*'/g,
                s = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                q = "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                v = "January February March April May June July August September October November December".split(" "),
                y = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                x = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
                z = /[^-+\dA-Z]/g;
            return function(Q, C, P) {
                var G = P ? P.days : s,
                    O = P ? P.months : v,
                    R = P ? P.shortDays : q,
                    N = P ? P.shortMonths : y;
                P = "";
                var U = !1;
                Q = Q && Q.getTime ? Q : Q ? new Date(Q) : new Date;
                if (isNaN(Q)) throw SyntaxError("invalid date");
                "UTC:" === C.slice(0, 4) && (C = C.slice(4), U = !0);
                P = U ? "getUTC" : "get";
                var Z = Q[P + "Date"](),
                    V = Q[P + "Day"](),
                    X = Q[P + "Month"](),
                    T = Q[P + "FullYear"](),
                    H = Q[P + "Hours"](),
                    W = Q[P + "Minutes"](),
                    a = Q[P + "Seconds"](),
                    f = Q[P + "Milliseconds"](),
                    b = U ? 0 : Q.getTimezoneOffset();
                return P = C.replace(m, function(c) {
                    switch (c) {
                        case "D":
                            return Z;
                        case "DD":
                            return ia(Z, 2);
                        case "DDD":
                            return R[V];
                        case "DDDD":
                            return G[V];
                        case "M":
                            return X + 1;
                        case "MM":
                            return ia(X + 1, 2);
                        case "MMM":
                            return N[X];
                        case "MMMM":
                            return O[X];
                        case "Y":
                            return parseInt(String(T).slice(-2));
                        case "YY":
                            return ia(String(T).slice(-2), 2);
                        case "YYY":
                            return ia(String(T).slice(-3), 3);
                        case "YYYY":
                            return ia(T, 4);
                        case "h":
                            return H % 12 || 12;
                        case "hh":
                            return ia(H % 12 || 12, 2);
                        case "H":
                            return H;
                        case "HH":
                            return ia(H, 2);
                        case "m":
                            return W;
                        case "mm":
                            return ia(W, 2);
                        case "s":
                            return a;
                        case "ss":
                            return ia(a, 2);
                        case "f":
                            return String(f).slice(0, 1);
                        case "ff":
                            return ia(String(f).slice(0, 2), 2);
                        case "fff":
                            return ia(String(f).slice(0, 3), 3);
                        case "t":
                            return 12 > H ? "a" : "p";
                        case "tt":
                            return 12 > H ? "am" : "pm";
                        case "T":
                            return 12 > H ? "A" : "P";
                        case "TT":
                            return 12 > H ? "AM" : "PM";
                        case "K":
                            return U ? "UTC" : (String(Q).match(x) || [""]).pop().replace(z, "");
                        case "z":
                            return (0 < b ? "-" : "+") + Math.floor(Math.abs(b) / 60);
                        case "zz":
                            return (0 < b ? "-" : "+") + ia(Math.floor(Math.abs(b) / 60), 2);
                        case "zzz":
                            return (0 < b ? "-" : "+") + ia(Math.floor(Math.abs(b) / 60), 2) + ia(Math.abs(b) % 60, 2);
                        default:
                            return c.slice(1, c.length - 1)
                    }
                })
            }
        }(),
        W = function(m, s, q) {
            if (null === m) return "";
            if (!isFinite(m)) return m;
            m = Number(m);
            var v = 0 > m ? !0 :
                !1;
            v && (m *= -1);
            var y = q ? q.decimalSeparator : ".",
                x = q ? q.digitGroupSeparator : ",",
                z = "";
            s = String(s);
            var z = 1,
                Q = q = "",
                C = -1,
                P = [],
                G = [],
                O = 0,
                R = 0,
                U = 0,
                N = !1,
                Z = 0,
                Q = s.match(/"[^"]*"|'[^']*'|[eE][+-]*[0]+|[,]+[.]|\u2030|./g);
            s = null;
            for (var V = 0; Q && V < Q.length; V++)
                if (s = Q[V], "." === s && 0 > C) C = V;
                else {
                    if ("%" === s) z *= 100;
                    else if ("\u2030" === s) {
                        z *= 1E3;
                        continue
                    } else if ("," === s[0] && "." === s[s.length - 1]) {
                        z /= Math.pow(1E3, s.length - 1);
                        C = V + s.length - 1;
                        continue
                    } else "E" !== s[0] && "e" !== s[0] || "0" !== s[s.length - 1] || (N = !0);
                    0 > C ? (P.push(s), "#" === s ||
                    "0" === s ? O++ : "," === s && U++) : (G.push(s), "#" !== s && "0" !== s || R++)
                }
            N && (s = Math.floor(m), Q = -Math.floor(Math.log(m) / Math.LN10 + 1), Z = 0 === m ? 0 : 0 === s ? -(O + Q) : String(s).length - O, z /= Math.pow(10, Z));
            0 > C && (C = V);
            z = (m * z).toFixed(R);
            s = z.split(".");
            z = (s[0] + "").split("");
            m = (s[1] + "").split("");
            z && "0" === z[0] && z.shift();
            for (N = Q = V = R = C = 0; 0 < P.length;)
                if (s = P.pop(), "#" === s || "0" === s)
                    if (C++, C === O) {
                        var X = z,
                            z = [];
                        if ("0" === s)
                            for (s = O - R - (X ? X.length : 0); 0 < s;) X.unshift("0"), s--;
                        for (; 0 < X.length;) q = X.pop() + q, N++, 0 === N % Q && (V === U && 0 < X.length) &&
                        (q = x + q)
                    } else 0 < z.length ? (q = z.pop() + q, R++, N++) : "0" === s && (q = "0" + q, R++, N++), 0 === N % Q && (V === U && 0 < z.length) && (q = x + q);
                else "E" !== s[0] && "e" !== s[0] || "0" !== s[s.length - 1] || !/[eE][+-]*[0]+/.test(s) ? "," === s ? (V++, Q = N, N = 0, 0 < z.length && (q = x + q)) : q = 1 < s.length && ('"' === s[0] && '"' === s[s.length - 1] || "'" === s[0] && "'" === s[s.length - 1]) ? s.slice(1, s.length - 1) + q : s + q : (s = 0 > Z ? s.replace("+", "").replace("-", "") : s.replace("-", ""), q += s.replace(/[0]+/, function(m) {
                    return ia(Z, m.length)
                }));
            x = "";
            for (P = !1; 0 < G.length;) s = G.shift(), "#" === s || "0" ===
            s ? 0 < m.length && 0 !== Number(m.join("")) ? (x += m.shift(), P = !0) : "0" === s && (x += "0", P = !0) : 1 < s.length && ('"' === s[0] && '"' === s[s.length - 1] || "'" === s[0] && "'" === s[s.length - 1]) ? x += s.slice(1, s.length - 1) : "E" !== s[0] && "e" !== s[0] || "0" !== s[s.length - 1] || !/[eE][+-]*[0]+/.test(s) ? x += s : (s = 0 > Z ? s.replace("+", "").replace("-", "") : s.replace("-", ""), x += s.replace(/[0]+/, function(m) {
                return ia(Z, m.length)
            }));
            q += (P ? y : "") + x;
            return v ? "-" + q : q
        },
        Oa = function(m) {
            var s = 0,
                q = 0;
            m = m || window.event;
            m.offsetX || 0 === m.offsetX ? (s = m.offsetX, q = m.offsetY) :
                m.layerX || 0 == m.layerX ? (s = m.layerX, q = m.layerY) : (s = m.pageX - m.target.offsetLeft, q = m.pageY - m.target.offsetTop);
            return {
                x: s,
                y: q
            }
        },
        Xa = !0,
        Qa = window.devicePixelRatio || 1,
        La = 1,
        ha = Xa ? Qa / La : 1,
        ka = function(m) {
            for (var s = "", q = 0; q < m.length; q++) s += String.fromCharCode(Math.ceil(m.length / 57 / 5) ^ m.charCodeAt(q));
            return s
        },
        Ya = window && window[ka("mnb`uhno")] && window[ka("mnb`uhno")].href && window[ka("mnb`uhno")].href.indexOf && (-1 !== window[ka("mnb`uhno")].href.indexOf(ka("b`ow`rkr/bnl")) || -1 !== window[ka("mnb`uhno")].href.indexOf(ka("gdonqhy/bnl")) ||
            -1 !== window[ka("mnb`uhno")].href.indexOf(ka("gheemd"))),
        db = {
            reset: {
                image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAeCAYAAABJ/8wUAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPjSURBVFhHxVdJaFNRFP1J/jwkP5MxsbaC1WJEglSxOFAXIsFpVRE3ggi1K90obioRRBA33XXnQnciirhQcMCdorgQxBkXWlREkFKsWkv5npvckp/XnzRpKh64kLw733fffe9L/wrL0+mVUdO8uTSZ3MBL/we2qg4rkuSpodCELstXE46ziVkLQ6FQcGOmeSSq6wd4aV50d3drWjj8kQKZJTUc9kxFGenv79dZrDksTSTWWJp2QYtEPiErysyzdX0LsxsCQR8keX8gs6RHIk8ysdgKFg2G53mhuOPsshTlBjKaFo1g7SqLNoShKLdFXT8huQ/paLSbxatYnc2mHMM4hr18Vi8TIvCmXF3vYrW6cF23gGTOk0M1wA4RKvOmq6vLZRVJipvmSWT6tZ6CSEYkco5V50VPT4+D7RwOqi6RiSZm0fJ+vggSqkeoypdsNmuyelNwbXsbgvkWYMtzDWNvWaijoyOBqE+hVK8abcssUeXQ/YfKyi0gFYv1Ipgfoj34fYGTJLOYJA0ODirok32GLN8XhUWCwSes1hIwBg6LydJ/tEeRRapAdUp+wSAiZchtZZWWgAZ+JNpD8peYXQVK9UwUxNpzOK8pq97kURZhYTCKBwPD7h2zK+js7Myi7D8Fod+0TkMI8+EMAngLGc/WtBFWawkFHFnoj/t9KLgGmF0B3QfkxC+EarxkdhnFYlFLY06USqUwL7UMjICHfh/wOc2sCqhpxGbCkLvL7EUDbF73+6DkmVWB6zi7xUDQSLeYvWjAILvm9zEnkJhlbRcDQZcv6Kg2AipyT/Axw6wKlqVSqxDdjF8Izfod13qURdrG/nxehY+xGh+h0CSzKygGvSNQIcc097BI24jb9hax6kj2E7OrMFX1il+ICEf2NrPbhiXLl+fYl+U7zK4iYdsDcyLGf+ofFlkwcN+s10KhmpuYhhtm0hCLVIFL0MDsqNlDIqy9x2CLs1jL6OvrI7vPRbtohXG6eFmsFnHDGAp6n9AgyuVySRZrGvROxRgIfLXhzjrNYnNBUxNX/dMgRWT1mt4XLDovaApD53E9W3ilNX5M55LJHpRtIsgAvciR4WWcgK2Dvb1YqgXevmF8z2zEBTcKG39EfSKsT9EbhVUaI2FZO+oZIqImxol6j66/hcAu4sSN4vc1ZPoKeoE6RGhYL2YYA+ymOSSi0Z0wWntbtkGUWCvfSDXIxONraZ/FY90KUfNTpfC5spnNLgxoYNnR9RO4F8ofXEHOgogCQE99w+fF2Xw+b7O59rEOsyRqGEfpVoaDMQQ1CZrG46bcM6AZ0C/wPqNfHliqejyTySxh9TqQpL+xmbIlkB9SlAAAAABJRU5ErkJggg=="
            },
            pan: {
                image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAICSURBVEhLxZbPahNRGMUn/5MpuAiBEAIufQGfzr5E40YptBXajYzudCEuGqS+gGlrFwquDGRTutBdYfydzJ3LzeQmJGZue+Dw/Z17Mnfmu5Pof9Hr9Z61Wq0bWZMKj263O6xWq99wU9lOpzPMKgEhEcRucNOcioOK+0RzBhNvt9tPV4nmVF19+OWhVqt9xXgFXZq+8lCv119UKpUJ7iX2FmvFTKz8RH34YdBsNk8wVtjE4fGYwm8wrrDi3WBG5oKXZGRSS9hGuNFojLTe2lFz5xThWZIktayyiE2FdT3rzXBXz7krKiL8c17wAKFDjCus2AvW+YGZ9y2JF0VFRuMPfI//rsCE/C+s26s4gQu9ul7r4NteKx7H8XOC724xNNGbaNu++IrBqbOV7Tj3FgMRvc/YKOr3+3sE47wgEt/Bl/gaK5cHbNU11vYSXylfpK7XOvjuumPp4Wcoipu30Qsez2uMXYz4lfI+mOmwothY+SLiXJy7mKVpWs3Si0CoOMfeI9Od43Wic+jO+ZVv+crsm9QSNhUW9LXSeoPBYLXopthGuFQgdIxxhY+UDwlt1x5CZ1hX+NTUdt/OIvjKaDSmuOJfaIVNPKX+W18j/PLA2/kR44p5Sd8HbHngT/yTfNRWUXX14ZcL3wmX0+TLf8YO7CGT8yFE5zB3/gney25/OETRP9CtPDFe5jShAAAAAElFTkSuQmCC"
            },
            zoom: {
                image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALWSURBVEhLvZZLaBNRFIabyftBIgEfqCCBoCC6MYqiXYiIj4U76U4X7sUHbhQhUBfixhZEUBDB16YuFERaUaQLK7ooCOJj4UKtYEFU0EptShO/A9Ph3js3k8lo/eHnP7n3nP/M3LlzMz1hkUwmNziOcyKRSFyFt+LxeD/c2Wq1Ym7Kv0M2m11Os1OxWGycn1OwZXCGuXfwIhezkd9/jRgNT2L4ldhs1pbkX5OLJe4euVxuGQaPCa3mnUjtJx7BDuKusJTCV6jVVGHTMuYRjxma7yIOhTgFY6jNaAKew2xPKpVay9ganmkvj+M448/MfJdT5K5Gg4HJacRngPFgqVRaRNwW1B4i7yehWfsEDdz1K+A01AoxPIqGAiuwGfkOTY8+1A6u7AyiFTB2Hu0KPIrdiOnzHLWDybeImvy+Wq2mZa5bUHsD0Zpz+KxHdWQymV6kAb1ElqeORgJLvgnRdj1+R1AfzkIvSUjxVjQSarVakrueIPT8+H1F5jSUy+WXiJrUYBVWyVxU4PEU8TzhfaijUqnMIWrjaY492eWRwdKOIqrnIxnXwLLeRLwk2GQzrEMjg0avEbXxkIxr4OoOImpj2QwyFgms1koa/SZUG8s+0iGnEhNfCNXEhzIXBVz0McTzEvJ+70P9oNFtxEzei3aFYrFYxmuSUPWSv9Yi9IMm2xE1We56Mp1OV4nDwqFmBDV9gk9AEh4gZtFHNt8W4kAUCoXF5MorY9Z/kDni9nDv7hc0i2fhgLvTtX8a99PoMPPagTFPxofRzmDJ9yM+AyEmTfgGysYbQcfhDzPPJDmX0c7gDg4gs9BqFIWhm/Nct5H8gtBq1I7UfIbtvmIuoaGQcp+fdpbbSM43eEH5wrwLbXmhm/fU63VHXjcuok7hEByFY/AeHGC8L5/PL3HT5xGH1uYwfPOICGo+CBcU0vwO1BqzUqILDl/z/9VYIMfpddiAc47jDP8BsUpb13wOLRwAAAAASUVORK5CYII="
            },
            menu: {
                image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAeCAYAAABE4bxTAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADoSURBVFhH7dc9CsJAFATgRxIIBCwCqZKATX5sbawsY2MvWOtF9AB6AU8gguAJbD2AnZ2VXQT/Ko2TYGCL2OYtYQc+BuYA+1hCtnCVwMm27SGaXpDJIAiCvCkVR05hGOZNN3HkFMdx3nQRR06+76/R1IcFLJlNQEWlmWlBTwJtKLKHynehZqnjOGM0PYWRVXk61C37p7xlZ3Hk5HneCk1dmMH811xGoKLSzDiQwIBZB4ocoPJdqNkDt2yKlueWRVGUtzy3rPwo3sWRU3nLjuLI6OO67oZM00wMw3hrmpZx0XU9syxrR0T0BeMpb9dneSR2AAAAAElFTkSuQmCC"
            }
        };
    X.prototype.setOptions = function(m, s) {
        if (sa[this._defaultsKey]) {
            var q = sa[this._defaultsKey],
                v;
            for (v in q) "publicProperties" !== v && q.hasOwnProperty(v) && (this[v] = m && v in m ? m[v] : s && v in s ? s[v] : q[v])
        }
    };
    X.prototype.get = function(m) {
        var s = sa[this._defaultsKey];
        if ("options" === m) return this.options && this.options._isPlaceholder ? null : this.options;
        if (s.hasOwnProperty(m) || s.publicProperties && s.publicProperties.hasOwnProperty(m)) return this[m];
        window.console && window.console.log('Property "' + m + "\" doesn't exist. Please check for typo.")
    };
    X.prototype.set = function(m, s, q) {
        q = "undefined" === typeof q ? !0 : q;
        var v = sa[this._defaultsKey];
        if ("options" === m) this.createUserOptions(s);
        else if (v.hasOwnProperty(m) || v.publicProperties && v.publicProperties.hasOwnProperty(m) && "readWrite" === v.publicProperties[m]) this.options._isPlaceholder && this.createUserOptions(), this.options[m] = s;
        else {
            window.console && (v.publicProperties && v.publicProperties.hasOwnProperty(m) && "readOnly" === v.publicProperties[m] ? window.console.log('Property "' + m + '" is read-only.') : window.console.log('Property "' +
                m + "\" doesn't exist. Please check for typo."));
            return
        }
        q && (this.chart || this).render()
    };
    X.prototype.addTo = function(m, s, q, v) {
        v = "undefined" === typeof v ? !0 : v;
        var y = sa[this._defaultsKey];
        y.hasOwnProperty(m) || y.publicProperties && y.publicProperties.hasOwnProperty(m) && "readWrite" === y.publicProperties[m] ? (this.options._isPlaceholder && this.createUserOptions(), "undefined" === typeof this.options[m] && (this.options[m] = []), m = this.options[m], q = "undefined" === typeof q || null === q ? m.length : q, m.splice(q, 0, s), v && (this.chart ||
            this).render()) : window.console && (y.publicProperties && y.publicProperties.hasOwnProperty(m) && "readOnly" === y.publicProperties[m] ? window.console.log('Property "' + m + '" is read-only.') : window.console.log('Property "' + m + "\" doesn't exist. Please check for typo."))
    };
    X.prototype.createUserOptions = function(m) {
        if ("undefined" !== typeof m || this.options._isPlaceholder)
            if (this.parent.options._isPlaceholder && this.parent.createUserOptions(), this.isOptionsInArray) {
                this.parent.options[this.optionsName] || (this.parent.options[this.optionsName] = []);
                var s = this.parent.options[this.optionsName],
                    q = s.length;
                this.options._isPlaceholder || (Da(s), q = s.indexOf(this.options));
                this.options = "undefined" === typeof m ? {} : m;
                s[q] = this.options
            } else this.options = "undefined" === typeof m ? {} : m, m = this.parent.options, this.optionsName ? s = this.optionsName : (s = this._defaultsKey) && 0 !== s.length ? (q = s.charAt(0).toLowerCase(), 1 < s.length && (q = q.concat(s.slice(1))), s = q) : s = void 0, m[s] = this.options
    };
    X.prototype.remove = function(m) {
        m = "undefined" === typeof m ? !0 : m;
        if (this.isOptionsInArray) {
            var s =
                this.parent.options[this.optionsName];
            Da(s);
            var q = s.indexOf(this.options);
            0 <= q && s.splice(q, 1)
        } else delete this.parent.options[this.optionsName];
        m && (this.chart || this).render()
    };
    X.prototype.updateOption = function(m) {
        var s = sa[this._defaultsKey],
            q = {},
            v = this[m],
            x = this._themeOptionsKey,
            z = this._index;
        this.theme && y(x) && y(z) ? q = y(ya[this.theme]) ? ya.light1 : ya[this.theme] : this.parent && (this.parent.themeOptions && this.parent.themeOptions[x]) && (null === z ? q = this.parent.themeOptions[x] : 0 < this.parent.themeOptions[x].length &&
            (q = Math.min(this.parent.themeOptions[x].length - 1, z), q = this.parent.themeOptions[x][q]));
        this.themeOptions = q;
        m in s && (v = m in this.options ? this.options[m] : q && m in q ? q[m] : s[m]);
        if (v === this[m]) return !1;
        this[m] = v;
        return !0
    };
    X.prototype.trackChanges = function(m) {
        if (!this.sessionVariables) throw "Session Variable Store not set";
        this.sessionVariables[m] = this.options[m]
    };
    X.prototype.isBeingTracked = function(m) {
        this.options._oldOptions || (this.options._oldOptions = {});
        return this.options._oldOptions[m] ? !0 : !1
    };
    X.prototype.hasOptionChanged =
        function(m) {
            if (!this.sessionVariables) throw "Session Variable Store not set";
            return this.sessionVariables[m] !== this.options[m]
        };
    X.prototype.addEventListener = function(m, s, v) {
        m && s && (this._eventListeners[m] = this._eventListeners[m] || [], this._eventListeners[m].push({
            context: v || this,
            eventHandler: s
        }))
    };
    X.prototype.removeEventListener = function(m, s) {
        if (m && s && this._eventListeners[m])
            for (var v = this._eventListeners[m], y = 0; y < v.length; y++)
                if (v[y].eventHandler === s) {
                    v[y].splice(y, 1);
                    break
                }
    };
    X.prototype.removeAllEventListeners =
        function() {
            this._eventListeners = []
        };
    X.prototype.dispatchEvent = function(m, s, v) {
        if (m && this._eventListeners[m]) {
            s = s || {};
            for (var y = this._eventListeners[m], x = 0; x < y.length; x++) y[x].eventHandler.call(y[x].context, s)
        }
        "function" === typeof this[m] && this[m].call(v || this.chart, s)
    };
    Ea.prototype.registerSpace = function(m, s) {
        "top" === m ? this._topOccupied += s.height : "bottom" === m ? this._bottomOccupied += s.height : "left" === m ? this._leftOccupied += s.width : "right" === m && (this._rightOccupied += s.width)
    };
    Ea.prototype.unRegisterSpace =
        function(m, s) {
            "top" === m ? this._topOccupied -= s.height : "bottom" === m ? this._bottomOccupied -= s.height : "left" === m ? this._leftOccupied -= s.width : "right" === m && (this._rightOccupied -= s.width)
        };
    Ea.prototype.getFreeSpace = function() {
        return {
            x1: this._x1 + this._leftOccupied,
            y1: this._y1 + this._topOccupied,
            x2: this._x2 - this._rightOccupied,
            y2: this._y2 - this._bottomOccupied,
            width: this._x2 - this._x1 - this._rightOccupied - this._leftOccupied,
            height: this._y2 - this._y1 - this._bottomOccupied - this._topOccupied
        }
    };
    Ea.prototype.reset = function() {
        this._rightOccupied =
            this._leftOccupied = this._bottomOccupied = this._topOccupied = this._padding
    };
    pa(la, X);
    la.prototype._initialize = function() {
        y(this.padding) || "object" !== typeof this.padding ? this.topPadding = this.rightPadding = this.bottomPadding = this.leftPadding = Number(this.padding) | 0 : (this.topPadding = y(this.padding.top) ? 0 : Number(this.padding.top) | 0, this.rightPadding = y(this.padding.right) ? 0 : Number(this.padding.right) | 0, this.bottomPadding = y(this.padding.bottom) ? 0 : Number(this.padding.bottom) | 0, this.leftPadding = y(this.padding.left) ?
            0 : Number(this.padding.left) | 0)
    };
    la.prototype.render = function(m) {
        if (0 !== this.fontSize) {
            m && this.ctx.save();
            var s = this.ctx.font;
            this.ctx.textBaseline = this.textBaseline;
            var v = 0;
            this._isDirty && this.measureText(this.ctx);
            this.ctx.translate(this.x, this.y + v);
            "middle" === this.textBaseline && (v = -this._lineHeight / 2);
            this.ctx.font = this._getFontString();
            this.ctx.rotate(Math.PI / 180 * this.angle);
            var y = 0,
                x = this.topPadding,
                z = null;
            this.ctx.roundRect || Ca(this.ctx);
            (0 < this.borderThickness && this.borderColor || this.backgroundColor) &&
            this.ctx.roundRect(0, v, this.width, this.height, this.cornerRadius, this.borderThickness, this.backgroundColor, this.borderColor);
            this.ctx.fillStyle = this.fontColor;
            for (v = 0; v < this._wrappedText.lines.length; v++) z = this._wrappedText.lines[v], "right" === this.horizontalAlign ? y = (this.width - (this.leftPadding + this.rightPadding)) / 2 - z.width / 2 + this.leftPadding : "left" === this.horizontalAlign ? y = this.leftPadding : "center" === this.horizontalAlign && (y = (this.width - (this.leftPadding + this.rightPadding)) / 2 - z.width / 2 + this.leftPadding),
                this.ctx.fillText(z.text, y, x), x += z.height;
            this.ctx.font = s;
            m && this.ctx.restore()
        }
    };
    la.prototype.setText = function(m) {
        this.text = m;
        this._isDirty = !0;
        this._wrappedText = null
    };
    la.prototype.measureText = function() {
        this._lineHeight = Ua(this.fontFamily, this.fontSize, this.fontWeight);
        if (null === this.maxWidth) throw "Please set maxWidth and height for TextBlock";
        this._wrapText(this.ctx);
        this._isDirty = !1;
        return {
            width: this.width,
            height: this.height
        }
    };
    la.prototype._getLineWithWidth = function(m, s, v) {
        m = String(m);
        if (!m) return {
            text: "",
            width: 0
        };
        var y = v = 0,
            x = m.length - 1,
            z = Infinity;
        for (this.ctx.font = this._getFontString(); y <= x;) {
            var z = Math.floor((y + x) / 2),
                G = m.substr(0, z + 1);
            v = this.ctx.measureText(G).width;
            if (v < s) y = z + 1;
            else if (v > s) x = z - 1;
            else break
        }
        v > s && 1 < G.length && (G = G.substr(0, G.length - 1), v = this.ctx.measureText(G).width);
        s = !0;
        if (G.length === m.length || " " === m[G.length]) s = !1;
        s && (m = G.split(" "), 1 < m.length && m.pop(), G = m.join(" "), v = this.ctx.measureText(G).width);
        return {
            text: G,
            width: v
        }
    };
    la.prototype._wrapText = function() {
        var m = new String(Ga(String(this.text))),
            v = [],
            q = this.ctx.font,
            y = 0,
            x = 0;
        this.ctx.font = this._getFontString();
        if (0 === this.frontSize) x = y = 0;
        else
            for (; 0 < m.length;) {
                var z = this.maxHeight - (this.topPadding + this.bottomPadding),
                    G = this._getLineWithWidth(m, this.maxWidth - (this.leftPadding + this.rightPadding), !1);
                G.height = this._lineHeight;
                v.push(G);
                var Q = x,
                    x = Math.max(x, G.width),
                    y = y + G.height,
                    m = Ga(m.slice(G.text.length, m.length));
                z && y > z && (G = v.pop(), y -= G.height, x = Q)
            }
        this._wrappedText = {
            lines: v,
            width: x,
            height: y
        };
        this.width = x + (this.leftPadding + this.rightPadding);
        this.height = y + (this.topPadding + this.bottomPadding);
        this.ctx.font = q
    };
    la.prototype._getFontString = function() {
        var m;
        m = "" + (this.fontStyle ? this.fontStyle + " " : "");
        m += this.fontWeight ? this.fontWeight + " " : "";
        m += this.fontSize ? this.fontSize + "px " : "";
        var s = this.fontFamily ? this.fontFamily + "" : "";
        !v && s && (s = s.split(",")[0], "'" !== s[0] && '"' !== s[0] && (s = "'" + s + "'"));
        return m += s
    };
    pa(Ra, X);
    pa(Ia, X);
    Ia.prototype.render = function() {
        if (this.text) {
            var m = this.dockInsidePlotArea ? this.chart.plotArea : this.chart,
                v = m.layoutManager.getFreeSpace(),
                q = v.x1,
                x = v.y1,
                z = 0,
                G = 0,
                R = this.chart._menuButton && this.chart.exportEnabled && "top" === this.verticalAlign ? 22 : 0,
                Q, C;
            "top" === this.verticalAlign || "bottom" === this.verticalAlign ? (null === this.maxWidth && (this.maxWidth = v.width - 4 - R * ("center" === this.horizontalAlign ? 2 : 1)), G = 0.5 * v.height - this.margin - 2, z = 0) : "center" === this.verticalAlign && ("left" === this.horizontalAlign || "right" === this.horizontalAlign ? (null === this.maxWidth && (this.maxWidth = v.height - 4), G = 0.5 * v.width - this.margin - 2) : "center" === this.horizontalAlign && (null ===
            this.maxWidth && (this.maxWidth = v.width - 4), G = 0.5 * v.height - 4));
            var P;
            y(this.padding) || "number" !== typeof this.padding ? y(this.padding) || "object" !== typeof this.padding || (P = this.padding.top ? this.padding.top : this.padding.bottom ? this.padding.bottom : 0, P += this.padding.bottom ? this.padding.bottom : this.padding.top ? this.padding.top : 0, P *= 1.25) : P = 2.5 * this.padding;
            this.wrap || (G = Math.min(G, Math.max(1.5 * this.fontSize, this.fontSize + P)));
            G = new la(this.ctx, {
                fontSize: this.fontSize,
                fontFamily: this.fontFamily,
                fontColor: this.fontColor,
                fontStyle: this.fontStyle,
                fontWeight: this.fontWeight,
                horizontalAlign: this.horizontalAlign,
                verticalAlign: this.verticalAlign,
                borderColor: this.borderColor,
                borderThickness: this.borderThickness,
                backgroundColor: this.backgroundColor,
                maxWidth: this.maxWidth,
                maxHeight: G,
                cornerRadius: this.cornerRadius,
                text: this.text,
                padding: this.padding,
                textBaseline: "top"
            });
            P = G.measureText();
            "top" === this.verticalAlign || "bottom" === this.verticalAlign ? ("top" === this.verticalAlign ? (x = v.y1 + 2, C = "top") : "bottom" === this.verticalAlign &&
                (x = v.y2 - 2 - P.height, C = "bottom"), "left" === this.horizontalAlign ? q = v.x1 + 2 : "center" === this.horizontalAlign ? q = v.x1 + v.width / 2 - P.width / 2 : "right" === this.horizontalAlign && (q = v.x2 - 2 - P.width - R), Q = this.horizontalAlign, this.width = P.width, this.height = P.height) : "center" === this.verticalAlign && ("left" === this.horizontalAlign ? (q = v.x1 + 2, x = v.y2 - 2 - (this.maxWidth / 2 - P.width / 2), z = -90, C = "left", this.width = P.height, this.height = P.width) : "right" === this.horizontalAlign ? (q = v.x2 - 2, x = v.y1 + 2 + (this.maxWidth / 2 - P.width / 2), z = 90, C = "right",
                this.width = P.height, this.height = P.width) : "center" === this.horizontalAlign && (x = m.y1 + (m.height / 2 - P.height / 2), q = m.x1 + (m.width / 2 - P.width / 2), C = "center", this.width = P.width, this.height = P.height), Q = "center");
            G.x = q;
            G.y = x;
            G.angle = z;
            G.horizontalAlign = Q;
            G.render(!0);
            m.layoutManager.registerSpace(C, {
                width: this.width + ("left" === C || "right" === C ? this.margin + 2 : 0),
                height: this.height + ("top" === C || "bottom" === C ? this.margin + 2 : 0)
            });
            this.bounds = {
                x1: q,
                y1: x,
                x2: q + this.width,
                y2: x + this.height
            };
            this.ctx.textBaseline = "top"
        }
    };
    pa(Na,
        X);
    Na.prototype.render = Ia.prototype.render;
    pa(Ja, X);
    x = {
        addTheme: function(m, v) {
            ya[m] = v
        },
        addColorSet: function(m, v) {
            Aa[m] = v
        },
        addCultureInfo: function(m, v) {
            Ka[m] = v
        },
        formatNumber: function(m, v, q) {
            q = q || "en";
            if (Ka[q]) return W(m, v || "#,##0.##", new Ja(q));
            throw "Unknown Culture Name";
        },
        formatDate: function(m, v, q) {
            q = q || "en";
            if (Ka[q]) return Ba(m, v || "DD MMM YYYY", new Ja(q));
            throw "Unknown Culture Name";
        }
    };
    window.CanvasJS = x;
    x.Chart = function() {
        function m(a, f) {
            return a.x - f.x
        }

        function s(a, f, b) {
            if (a && f && b) {
                b = b + "." + f;
                var c =
                    "image/" + f;
                a = a.toDataURL(c);
                var e = !1,
                    g = document.createElement("a");
                g.download = b;
                g.href = a;
                if ("undefined" !== typeof Blob && new Blob) {
                    for (var h = a.replace(/^data:[a-z\/]*;base64,/, ""), h = atob(h), l = new ArrayBuffer(h.length), l = new Uint8Array(l), t = 0; t < h.length; t++) l[t] = h.charCodeAt(t);
                    f = new Blob([l.buffer], {
                        type: "image/" + f
                    });
                    try {
                        window.navigator.msSaveBlob(f, b), e = !0
                    } catch (k) {
                        g.dataset.downloadurl = [c, g.download, g.href].join(":"), g.href = window.URL.createObjectURL(f)
                    }
                }
                if (!e) try {
                    event = document.createEvent("MouseEvents"),
                        event.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), g.dispatchEvent ? g.dispatchEvent(event) : g.fireEvent && g.fireEvent("onclick")
                } catch (r) {
                    f = window.open(), f.document.write("<img src='" + a + "'></img><div>Please right click on the image and save it to your device</div>"), f.document.close()
                }
            }
        }

        function q(a, f) {
            f = f || {};
            this.theme = y(f.theme) || y(ya[f.theme]) ? "light1" : f.theme;
            q.base.constructor.call(this, "Chart", null, f, null, null);
            var b = this;
            this._containerId = a;
            this._objectsInitialized = !1;
            this.overlaidCanvasCtx =
                this.ctx = null;
            this._indexLabels = [];
            this._panTimerId = 0;
            this._lastTouchEventType = "";
            this._lastTouchData = null;
            this.isAnimating = !1;
            this.renderCount = 0;
            this.panEnabled = this.disableToolTip = this.animatedRender = !1;
            this._defaultCursor = "default";
            this.plotArea = {
                canvas: null,
                ctx: null,
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 0,
                width: 0,
                height: 0
            };
            this._dataInRenderedOrder = [];
            if (this.container = "string" === typeof this._containerId ? document.getElementById(this._containerId) : this._containerId) {
                this.container.innerHTML = "";
                var c = 0,
                    e = 0,
                    c = this.options.width ?
                        this.width : 0 < this.container.clientWidth ? this.container.clientWidth : this.width,
                    e = this.options.height ? this.height : 0 < this.container.clientHeight ? this.container.clientHeight : this.height;
                this.width = c;
                this.height = e;
                this.x1 = this.y1 = 0;
                this.x2 = this.width;
                this.y2 = this.height;
                this._selectedColorSet = "undefined" !== typeof Aa[this.colorSet] ? Aa[this.colorSet] : Aa.colorSet1;
                this._canvasJSContainer = document.createElement("div");
                this._canvasJSContainer.setAttribute("class", "canvasjs-chart-container");
                this._canvasJSContainer.style.position =
                    "relative";
                this._canvasJSContainer.style.textAlign = "left";
                this._canvasJSContainer.style.cursor = "auto";
                v || (this._canvasJSContainer.style.height = "0px");
                this.container.appendChild(this._canvasJSContainer);
                this.canvas = ua(c, e);
                this._preRenderCanvas = ua(c, e);
                this.canvas.style.position = "absolute";
                this.canvas.getContext && (this._canvasJSContainer.appendChild(this.canvas), this.ctx = this.canvas.getContext("2d"), this.ctx.textBaseline = "top", Ca(this.ctx), this._preRenderCtx = this._preRenderCanvas.getContext("2d"),
                    this._preRenderCtx.textBaseline = "top", Ca(this._preRenderCtx), v ? this.plotArea.ctx = this.ctx : (this.plotArea.canvas = ua(c, e), this.plotArea.canvas.style.position = "absolute", this.plotArea.canvas.setAttribute("class", "plotAreaCanvas"), this._canvasJSContainer.appendChild(this.plotArea.canvas), this.plotArea.ctx = this.plotArea.canvas.getContext("2d")), this.overlaidCanvas = ua(c, e), this.overlaidCanvas.style.position = "absolute", this.overlaidCanvas.style.webkitTapHighlightColor = "transparent", this.overlaidCanvas.getContext &&
                (this._canvasJSContainer.appendChild(this.overlaidCanvas), this.overlaidCanvasCtx = this.overlaidCanvas.getContext("2d"), this.overlaidCanvasCtx.textBaseline = "top", Ca(this.overlaidCanvasCtx)), this._eventManager = new fa(this), this.windowResizeHandler = N(window, "resize", function() {
                    b._updateSize() && b.render()
                }), this._toolBar = document.createElement("div"), this._toolBar.setAttribute("class", "canvasjs-chart-toolbar"), this._toolBar.style.cssText = "position: absolute; right: 1px; top: 1px;", this._canvasJSContainer.appendChild(this._toolBar),
                    this.bounds = {
                        x1: 0,
                        y1: 0,
                        x2: this.width,
                        y2: this.height
                    }, N(this.overlaidCanvas, "click", function(a) {
                    b._mouseEventHandler(a)
                }), N(this.overlaidCanvas, "mousemove", function(a) {
                    b._mouseEventHandler(a)
                }), N(this.overlaidCanvas, "mouseup", function(a) {
                    b._mouseEventHandler(a)
                }), N(this.overlaidCanvas, "mousedown", function(a) {
                    b._mouseEventHandler(a);
                    wa(b._dropdownMenu)
                }), N(this.overlaidCanvas, "mouseout", function(a) {
                    b._mouseEventHandler(a)
                }), N(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerDown" : "touchstart",
                    function(a) {
                        b._touchEventHandler(a)
                    }), N(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerMove" : "touchmove", function(a) {
                    b._touchEventHandler(a)
                }), N(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerUp" : "touchend", function(a) {
                    b._touchEventHandler(a)
                }), N(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerCancel" : "touchcancel", function(a) {
                    b._touchEventHandler(a)
                }), this.toolTip = new Y(this, this.options.toolTip), this.data = null, this.axisX = [], this.axisX2 = [], this.axisY = [], this.axisY2 = [], this.sessionVariables = {
                    axisX: [],
                    axisX2: [],
                    axisY: [],
                    axisY2: []
                })
            } else window.console && window.console.log('CanvasJS Error: Chart Container with id "' + this._containerId + '" was not found')
        }

        function x(a, f) {
            for (var b = [], c, e = 0; e < a.length; e++)
                if (0 == e) b.push(a[0]);
                else {
                    var g, h, l;
                    l = e - 1;
                    g = 0 === l ? 0 : l - 1;
                    h = l === a.length - 1 ? l : l + 1;
                    c = Math.abs((a[h].x - a[g].x) / (0 === a[h].x - a[l].x ? 0.01 : a[h].x - a[l].x)) * (f - 1) / 2 + 1;
                    var t = (a[h].x - a[g].x) / c;
                    c = (a[h].y - a[g].y) / c;
                    b[b.length] = a[l].x > a[g].x && 0 < t || a[l].x < a[g].x && 0 >
                    t ? {
                        x: a[l].x + t / 3,
                        y: a[l].y + c / 3
                    } : {
                        x: a[l].x,
                        y: a[l].y + c / 9
                    };
                    l = e;
                    g = 0 === l ? 0 : l - 1;
                    h = l === a.length - 1 ? l : l + 1;
                    c = Math.abs((a[h].x - a[g].x) / (0 === a[l].x - a[g].x ? 0.01 : a[l].x - a[g].x)) * (f - 1) / 2 + 1;
                    t = (a[h].x - a[g].x) / c;
                    c = (a[h].y - a[g].y) / c;
                    b[b.length] = a[l].x > a[g].x && 0 < t || a[l].x < a[g].x && 0 > t ? {
                        x: a[l].x - t / 3,
                        y: a[l].y - c / 3
                    } : {
                        x: a[l].x,
                        y: a[l].y - c / 9
                    };
                    b[b.length] = a[e]
                }
            return b
        }

        function z(a, f, b, c, e, g, h, l, t, k) {
            var r = 0;
            k ? (h.color = g, l.color = g) : k = 1;
            r = t ? Math.abs(e - b) : Math.abs(c - f);
            r = 0 < h.trimLength ? Math.abs(r * h.trimLength / 100) : Math.abs(r - h.length);
            t ? (b += r / 2, e -= r / 2) : (f += r / 2, c -= r / 2);
            var r = 1 === Math.round(h.thickness) % 2 ? 0.5 : 0,
                p = 1 === Math.round(l.thickness) % 2 ? 0.5 : 0;
            a.save();
            a.globalAlpha = k;
            a.strokeStyle = l.color || g;
            a.lineWidth = l.thickness || 2;
            a.setLineDash && a.setLineDash(G(l.dashType, l.thickness));
            a.beginPath();
            t && 0 < l.thickness ? (a.moveTo(c - h.thickness / 2, Math.round((b + e) / 2) - p), a.lineTo(f + h.thickness / 2, Math.round((b + e) / 2) - p)) : 0 < l.thickness && (a.moveTo(Math.round((f + c) / 2) - p, b + h.thickness / 2), a.lineTo(Math.round((f + c) / 2) - p, e - h.thickness / 2));
            a.stroke();
            a.strokeStyle =
                h.color || g;
            a.lineWidth = h.thickness || 2;
            a.setLineDash && a.setLineDash(G(h.dashType, h.thickness));
            a.beginPath();
            t && 0 < h.thickness ? (a.moveTo(c - r, b), a.lineTo(c - r, e), a.moveTo(f + r, b), a.lineTo(f + r, e)) : 0 < h.thickness && (a.moveTo(f, b + r), a.lineTo(c, b + r), a.moveTo(f, e - r), a.lineTo(c, e - r));
            a.stroke();
            a.restore()
        }

        function O(a, f, b, c, e) {
            if (null === a || "undefined" === typeof a) return "undefined" === typeof b ? f : b;
            a = parseFloat(a.toString()) * (0 <= a.toString().indexOf("%") ? f / 100 : 1);
            "undefined" !== typeof c && (a = Math.min(c, a), "undefined" !==
            typeof e && (a = Math.max(e, a)));
            return !isNaN(a) && a <= f && 0 <= a ? a : "undefined" === typeof b ? f : b
        }

        function T(a, f) {
            T.base.constructor.call(this, "Legend", "legend", f, null, a);
            this.chart = a;
            this.canvas = a.canvas;
            this.ctx = this.chart.ctx;
            this.ghostCtx = this.chart._eventManager.ghostCtx;
            this.items = [];
            this.optionsName = "legend";
            this.height = this.width = 0;
            this.orientation = null;
            this.dataSeries = [];
            this.bounds = {
                x1: null,
                y1: null,
                x2: null,
                y2: null
            };
            "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
            this.lineHeight = Ua(this.fontFamily, this.fontSize, this.fontWeight);
            this.horizontalSpacing = this.fontSize
        }

        function Q(a, f, b, c) {
            Q.base.constructor.call(this, "DataSeries", "data", f, b, a);
            this.chart = a;
            this.canvas = a.canvas;
            this._ctx = a.canvas.ctx;
            this.index = b;
            this.noDataPointsInPlotArea = 0;
            this.id = c;
            this.chart._eventManager.objectMap[c] = {
                id: c,
                objectType: "dataSeries",
                dataSeriesIndex: b
            };
            a = f.dataPoints ? f.dataPoints.length : 0;
            this.dataPointEOs = [];
            for (f = 0; f < a; f++) this.dataPointEOs[f] = {};
            this.dataPointIds = [];
            this.plotUnit = [];
            this.axisY = this.axisX = null;
            this.optionsName = "data";
            this.isOptionsInArray = !0;
            null === this.fillOpacity && (this.type.match(/area/i) ? this.fillOpacity = 0.7 : this.fillOpacity = 1);
            this.axisPlacement = this.getDefaultAxisPlacement();
            "undefined" === typeof this.options.indexLabelFontSize && (this.indexLabelFontSize = this.chart.getAutoFontSize(this.indexLabelFontSize))
        }

        function C(a, f, b, c, e, g) {
            C.base.constructor.call(this, "Axis", f, b, c, a);
            this.chart = a;
            this.canvas = a.canvas;
            this.ctx = a.ctx;
            this.intervalStartPosition = this.maxHeight =
                this.maxWidth = 0;
            this.labels = [];
            this.dataSeries = [];
            this._stripLineLabels = this._ticks = this._labels = null;
            this.dataInfo = {
                min: Infinity,
                max: -Infinity,
                viewPortMin: Infinity,
                viewPortMax: -Infinity,
                minDiff: Infinity
            };
            this.isOptionsInArray = !0;
            "axisX" === e ? ("left" === g || "bottom" === g ? (this.optionsName = "axisX", y(this.chart.sessionVariables.axisX[c]) && (this.chart.sessionVariables.axisX[c] = {}), this.sessionVariables = this.chart.sessionVariables.axisX[c]) : (this.optionsName = "axisX2", y(this.chart.sessionVariables.axisX2[c]) &&
            (this.chart.sessionVariables.axisX2[c] = {}), this.sessionVariables = this.chart.sessionVariables.axisX2[c]), this.options.interval || (this.intervalType = null)) : "left" === g || "bottom" === g ? (this.optionsName = "axisY", y(this.chart.sessionVariables.axisY[c]) && (this.chart.sessionVariables.axisY[c] = {}), this.sessionVariables = this.chart.sessionVariables.axisY[c]) : (this.optionsName = "axisY2", y(this.chart.sessionVariables.axisY2[c]) && (this.chart.sessionVariables.axisY2[c] = {}), this.sessionVariables = this.chart.sessionVariables.axisY2[c]);
            "undefined" === typeof this.options.titleFontSize && (this.titleFontSize = this.chart.getAutoFontSize(this.titleFontSize));
            "undefined" === typeof this.options.labelFontSize && (this.labelFontSize = this.chart.getAutoFontSize(this.labelFontSize));
            this.type = e;
            "axisX" !== e || b && "undefined" !== typeof b.gridThickness || (this.gridThickness = 0);
            this._position = g;
            this.lineCoordinates = {
                x1: null,
                y1: null,
                x2: null,
                y2: null,
                width: null
            };
            this.labelAngle = (this.labelAngle % 360 + 360) % 360;
            90 < this.labelAngle && 270 > this.labelAngle ? this.labelAngle -=
                180 : 270 <= this.labelAngle && 360 >= this.labelAngle && (this.labelAngle -= 360);
            this.options.scaleBreaks && (this.scaleBreaks = new P(this.chart, this.options.scaleBreaks, ++this.chart._eventManager.lastObjectId, this));
            this.stripLines = [];
            if (this.options.stripLines && 0 < this.options.stripLines.length)
                for (a = 0; a < this.options.stripLines.length; a++) this.stripLines.push(new ga(this.chart, this.options.stripLines[a], a, ++this.chart._eventManager.lastObjectId, this));
            this.options.crosshair && (this.crosshair = new ia(this.chart,
                this.options.crosshair, this));
            this._titleTextBlock = null;
            this.hasOptionChanged("viewportMinimum") && null === this.viewportMinimum && (this.options.viewportMinimum = void 0, this.sessionVariables.viewportMinimum = null);
            this.hasOptionChanged("viewportMinimum") || isNaN(this.sessionVariables.newViewportMinimum) || null === this.sessionVariables.newViewportMinimum ? this.sessionVariables.newViewportMinimum = null : this.viewportMinimum = this.sessionVariables.newViewportMinimum;
            this.hasOptionChanged("viewportMaximum") && null ===
            this.viewportMaximum && (this.options.viewportMaximum = void 0, this.sessionVariables.viewportMaximum = null);
            this.hasOptionChanged("viewportMaximum") || isNaN(this.sessionVariables.newViewportMaximum) || null === this.sessionVariables.newViewportMaximum ? this.sessionVariables.newViewportMaximum = null : this.viewportMaximum = this.sessionVariables.newViewportMaximum;
            null !== this.minimum && null !== this.viewportMinimum && (this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum));
            null !== this.maximum && null !== this.viewportMaximum &&
            (this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum));
            this.trackChanges("viewportMinimum");
            this.trackChanges("viewportMaximum")
        }

        function P(a, f, b, c) {
            P.base.constructor.call(this, "ScaleBreaks", "scaleBreaks", f, null, c);
            this.id = b;
            this.chart = a;
            this.ctx = this.chart.ctx;
            this.axis = c;
            this.optionsName = "scaleBreaks";
            this.isOptionsInArray = !1;
            this._appliedBreaks = [];
            this.customBreaks = [];
            this.autoBreaks = [];
            "string" === typeof this.spacing ? (this.spacing = parseFloat(this.spacing), this.spacing = isNaN(this.spacing) ?
                8 : (10 < this.spacing ? 10 : this.spacing) + "%") : "number" !== typeof this.spacing && (this.spacing = 8);
            this.autoCalculate && (this.maxNumberOfAutoBreaks = Math.min(this.maxNumberOfAutoBreaks, 5));
            if (this.options.customBreaks && 0 < this.options.customBreaks.length) {
                for (a = 0; a < this.options.customBreaks.length; a++) this.customBreaks.push(new aa(this.chart, "customBreaks", this.options.customBreaks[a], a, ++this.chart._eventManager.lastObjectId, this)), "number" === typeof this.customBreaks[a].startValue && ("number" === typeof this.customBreaks[a].endValue &&
                    this.customBreaks[a].endValue !== this.customBreaks[a].startValue) && this._appliedBreaks.push(this.customBreaks[a]);
                this._appliedBreaks.sort(function(a, c) {
                    return a.startValue - c.startValue
                });
                for (a = 0; a < this._appliedBreaks.length - 1; a++) this._appliedBreaks[a].endValue >= this._appliedBreaks[a + 1].startValue && (this._appliedBreaks[a].endValue = Math.max(this._appliedBreaks[a].endValue, this._appliedBreaks[a + 1].endValue), window.console && window.console.log("CanvasJS Error: Breaks " + a + " and " + (a + 1) + " are overlapping."),
                    this._appliedBreaks.splice(a, 2), a--)
            }
        }

        function aa(a, f, b, c, e, g) {
            aa.base.constructor.call(this, "Break", f, b, c, g);
            this.id = e;
            this.chart = a;
            this.ctx = this.chart.ctx;
            this.scaleBreaks = g;
            this.optionsName = f;
            this.isOptionsInArray = !0;
            this.type = b.type ? this.type : g.type;
            this.fillOpacity = y(b.fillOpacity) ? g.fillOpacity : this.fillOpacity;
            this.lineThickness = y(b.lineThickness) ? g.lineThickness : this.lineThickness;
            this.color = b.color ? this.color : g.color;
            this.lineColor = b.lineColor ? this.lineColor : g.lineColor;
            this.lineDashType =
                b.lineDashType ? this.lineDashType : g.lineDashType;
            !y(this.startValue) && this.startValue.getTime && (this.startValue = this.startValue.getTime());
            !y(this.endValue) && this.endValue.getTime && (this.endValue = this.endValue.getTime());
            "number" === typeof this.startValue && ("number" === typeof this.endValue && this.endValue < this.startValue) && (a = this.startValue, this.startValue = this.endValue, this.endValue = a);
            this.spacing = "undefined" === typeof b.spacing ? g.spacing : b.spacing;
            "string" === typeof this.options.spacing ? (this.spacing =
                parseFloat(this.spacing), this.spacing = isNaN(this.spacing) ? 0 : (10 < this.spacing ? 10 : this.spacing) + "%") : "number" !== typeof this.options.spacing && (this.spacing = g.spacing);
            this.size = g.parent.logarithmic ? 1 : 0
        }

        function ga(a, f, b, c, e) {
            ga.base.constructor.call(this, "StripLine", "stripLines", f, b, e);
            this.id = c;
            this.chart = a;
            this.ctx = this.chart.ctx;
            this.label = this.label;
            this.axis = e;
            this.optionsName = "stripLines";
            this.isOptionsInArray = !0;
            this._thicknessType = "pixel";
            null !== this.startValue && null !== this.endValue && (this.value =
                e.logarithmic ? Math.sqrt((this.startValue.getTime ? this.startValue.getTime() : this.startValue) * (this.endValue.getTime ? this.endValue.getTime() : this.endValue)) : ((this.startValue.getTime ? this.startValue.getTime() : this.startValue) + (this.endValue.getTime ? this.endValue.getTime() : this.endValue)) / 2, this._thicknessType = null)
        }

        function ia(a, f, b) {
            ia.base.constructor.call(this, "Crosshair", "crosshair", f, null, b);
            this.chart = a;
            this.ctx = this.chart.ctx;
            this.axis = b;
            this.optionsName = "crosshair";
            this._thicknessType = "pixel"
        }

        function Y(a, f) {
            Y.base.constructor.call(this, "ToolTip", "toolTip", f, null, a);
            this.chart = a;
            this.canvas = a.canvas;
            this.ctx = this.chart.ctx;
            this.currentDataPointIndex = this.currentSeriesIndex = -1;
            this._timerId = 0;
            this._prevY = this._prevX = NaN;
            this.containerTransitionDuration = 0.1;
            this.mozContainerTransition = this.getContainerTransition(this.containerTransitionDuration);
            this.optionsName = "toolTip";
            this._initialize()
        }

        function fa(a) {
            this.chart = a;
            this.lastObjectId = 0;
            this.objectMap = [];
            this.rectangularRegionEventSubscriptions = [];
            this.previousDataPointEventObject = null;
            this.ghostCanvas = ua(this.chart.width, this.chart.height);
            this.ghostCtx = this.ghostCanvas.getContext("2d");
            this.mouseoveredObjectMaps = []
        }

        function ka(a) {
            this.chart = a;
            this.ctx = this.chart.plotArea.ctx;
            this.animations = [];
            this.animationRequestId = null
        }
        pa(q, X);
        q.prototype.destroy = function() {
            var a = window,
                f = this.windowResizeHandler;
            a.removeEventListener ? a.removeEventListener("resize", f) : a.detachEvent && a.detachEvent("onresize", f)
        };
        q.prototype._updateOptions = function() {
            var a =
                this;
            this.updateOption("width");
            this.updateOption("height");
            this.updateOption("dataPointWidth");
            this.updateOption("dataPointMinWidth");
            this.updateOption("dataPointMaxWidth");
            this.updateOption("interactivityEnabled");
            this.updateOption("theme");
            this.updateOption("colorSet") && (this._selectedColorSet = "undefined" !== typeof Aa[this.colorSet] ? Aa[this.colorSet] : Aa.colorSet1);
            this.updateOption("backgroundColor");
            this.backgroundColor || (this.backgroundColor = "rgba(0,0,0,0)");
            this.updateOption("culture");
            this._cultureInfo =
                new Ja(this.options.culture);
            this.updateOption("animationEnabled");
            this.animationEnabled = this.animationEnabled && v;
            this.updateOption("animationDuration");
            this.updateOption("rangeChanging");
            this.updateOption("rangeChanged");
            this.updateOption("exportEnabled");
            this.updateOption("exportFileName");
            this.updateOption("zoomType");
            if (this.options.zoomEnabled) {
                if (!this._zoomButton) {
                    var f = !1;
                    wa(this._zoomButton = document.createElement("button"));
                    va(this, this._zoomButton, "pan");
                    this._toolBar.appendChild(this._zoomButton);
                    this._zoomButton.style.borderRight = this.toolbar.borderThickness + "px solid " + this.toolbar.borderColor;
                    N(this._zoomButton, "touchstart", function(a) {
                        f = !0
                    });
                    N(this._zoomButton, "click", function() {
                        a.zoomEnabled ? (a.zoomEnabled = !1, a.panEnabled = !0, va(a, a._zoomButton, "zoom")) : (a.zoomEnabled = !0, a.panEnabled = !1, va(a, a._zoomButton, "pan"));
                        a.render()
                    });
                    N(this._zoomButton, "mouseover", function() {
                        f ? f = !1 : (qa(a, a._zoomButton, {
                            backgroundColor: a.toolbar.backgroundColorOnHover,
                            color: a.toolbar.fontColorOnHover,
                            transition: "0.4s",
                            WebkitTransition: "0.4s"
                        }), 0 >= navigator.userAgent.search("MSIE") && qa(a, a._zoomButton.childNodes[0], {
                            WebkitFilter: "invert(100%)",
                            filter: "invert(100%)"
                        }))
                    });
                    N(this._zoomButton, "mouseout", function() {
                        f || (qa(a, a._zoomButton, {
                            backgroundColor: a.toolbar.backgroundColor,
                            color: a.toolbar.fontColor,
                            transition: "0.4s",
                            WebkitTransition: "0.4s"
                        }), 0 >= navigator.userAgent.search("MSIE") && qa(a, a._zoomButton.childNodes[0], {
                            WebkitFilter: "invert(0%)",
                            filter: "invert(0%)"
                        }))
                    })
                }
                this._resetButton || (f = !1, wa(this._resetButton =
                    document.createElement("button")), va(this, this._resetButton, "reset"), this._resetButton.style.borderRight = (this.exportEnabled ? this.toolbar.borderThickness : 0) + "px solid " + this.toolbar.borderColor, this._toolBar.appendChild(this._resetButton), N(this._resetButton, "touchstart", function(a) {
                    f = !0
                }), N(this._resetButton, "click", function() {
                    a.toolTip.hide();
                    a.zoomEnabled || a.panEnabled ? (a.zoomEnabled = !0, a.panEnabled = !1, va(a, a._zoomButton, "pan"), a._defaultCursor = "default", a.overlaidCanvas.style.cursor = a._defaultCursor) :
                        (a.zoomEnabled = !1, a.panEnabled = !1);
                    if (a.sessionVariables.axisX)
                        for (var c = 0; c < a.sessionVariables.axisX.length; c++) a.sessionVariables.axisX[c].newViewportMinimum = null, a.sessionVariables.axisX[c].newViewportMaximum = null;
                    if (a.sessionVariables.axisX2)
                        for (c = 0; c < a.sessionVariables.axisX2.length; c++) a.sessionVariables.axisX2[c].newViewportMinimum = null, a.sessionVariables.axisX2[c].newViewportMaximum = null;
                    if (a.sessionVariables.axisY)
                        for (c = 0; c < a.sessionVariables.axisY.length; c++) a.sessionVariables.axisY[c].newViewportMinimum =
                            null, a.sessionVariables.axisY[c].newViewportMaximum = null;
                    if (a.sessionVariables.axisY2)
                        for (c = 0; c < a.sessionVariables.axisY2.length; c++) a.sessionVariables.axisY2[c].newViewportMinimum = null, a.sessionVariables.axisY2[c].newViewportMaximum = null;
                    a.resetOverlayedCanvas();
                    wa(a._zoomButton, a._resetButton);
                    a._dispatchRangeEvent("rangeChanging", "reset");
                    a.render();
                    a._dispatchRangeEvent("rangeChanged", "reset")
                }), N(this._resetButton, "mouseover", function() {
                    f || (qa(a, a._resetButton, {
                        backgroundColor: a.toolbar.backgroundColorOnHover,
                        color: a.toolbar.hoverFfontColorOnHoverontColor,
                        transition: "0.4s",
                        WebkitTransition: "0.4s"
                    }), 0 >= navigator.userAgent.search("MSIE") && qa(a, a._resetButton.childNodes[0], {
                        WebkitFilter: "invert(100%)",
                        filter: "invert(100%)"
                    }))
                }), N(this._resetButton, "mouseout", function() {
                    f || (qa(a, a._resetButton, {
                        backgroundColor: a.toolbar.backgroundColor,
                        color: a.toolbar.fontColor,
                        transition: "0.4s",
                        WebkitTransition: "0.4s"
                    }), 0 >= navigator.userAgent.search("MSIE") && qa(a, a._resetButton.childNodes[0], {
                        WebkitFilter: "invert(0%)",
                        filter: "invert(0%)"
                    }))
                }),
                    this.overlaidCanvas.style.cursor = a._defaultCursor);
                this.zoomEnabled || this.panEnabled || (this._zoomButton ? (a._zoomButton.getAttribute("state") === a._cultureInfo.zoomText ? (this.panEnabled = !0, this.zoomEnabled = !1) : (this.zoomEnabled = !0, this.panEnabled = !1), Ma(a._zoomButton, a._resetButton)) : (this.zoomEnabled = !0, this.panEnabled = !1))
            } else this.panEnabled = this.zoomEnabled = !1;
            this._menuButton ? this.exportEnabled ? Ma(this._menuButton) : wa(this._menuButton) : this.exportEnabled && v && (f = !1, this._menuButton = document.createElement("button"),
                va(this, this._menuButton, "menu"), this._toolBar.appendChild(this._menuButton), N(this._menuButton, "touchstart", function(a) {
                f = !0
            }), N(this._menuButton, "click", function() {
                "none" !== a._dropdownMenu.style.display || a._dropDownCloseTime && 500 >= (new Date).getTime() - a._dropDownCloseTime.getTime() || (a._dropdownMenu.style.display = "block", a._menuButton.blur(), a._dropdownMenu.focus())
            }, !0), N(this._menuButton, "mouseover", function() {
                f || (qa(a, a._menuButton, {
                    backgroundColor: a.toolbar.backgroundColorOnHover,
                    color: a.toolbar.fontColorOnHover
                }),
                0 >= navigator.userAgent.search("MSIE") && qa(a, a._menuButton.childNodes[0], {
                    WebkitFilter: "invert(100%)",
                    filter: "invert(100%)"
                }))
            }, !0), N(this._menuButton, "mouseout", function() {
                f || (qa(a, a._menuButton, {
                    backgroundColor: a.toolbar.backgroundColor,
                    color: a.toolbar.fontColor
                }), 0 >= navigator.userAgent.search("MSIE") && qa(a, a._menuButton.childNodes[0], {
                    WebkitFilter: "invert(0%)",
                    filter: "invert(0%)"
                }))
            }, !0));
            if (!this._dropdownMenu && this.exportEnabled && v) {
                f = !1;
                this._dropdownMenu = document.createElement("div");
                this._dropdownMenu.setAttribute("tabindex", -1);
                var b = -1 !== this.theme.indexOf("dark") ? "black" : "#888888";
                this._dropdownMenu.style.cssText = "position: absolute; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; cursor: pointer;right: 0px;top: 25px;min-width: 120px;outline: 0;font-size: 14px; font-family: Arial, Helvetica, sans-serif;padding: 5px 0px 5px 0px;text-align: left;line-height: 10px;background-color:" + this.toolbar.backgroundColor + ";box-shadow: 2px 2px 10px " + b;
                a._dropdownMenu.style.display = "none";
                this._toolBar.appendChild(this._dropdownMenu);
                N(this._dropdownMenu, "blur", function() {
                    wa(a._dropdownMenu);
                    a._dropDownCloseTime = new Date
                }, !0);
                b = document.createElement("div");
                b.style.cssText = "padding: 12px 8px 12px 8px";
                b.innerHTML = this._cultureInfo.printText;
                b.style.backgroundColor = this.toolbar.backgroundColor;
                b.style.color = this.toolbar.fontColor;
                this._dropdownMenu.appendChild(b);
                N(b, "touchstart", function(a) {
                    f = !0
                });
                N(b, "mouseover", function() {
                    f || (this.style.backgroundColor = a.toolbar.backgroundColorOnHover,
                        this.style.color = a.toolbar.fontColorOnHover)
                }, !0);
                N(b, "mouseout", function() {
                    f || (this.style.backgroundColor = a.toolbar.backgroundColor, this.style.color = a.toolbar.fontColor)
                }, !0);
                N(b, "click", function() {
                    a.print();
                    wa(a._dropdownMenu)
                }, !0);
                b = document.createElement("div");
                b.style.cssText = "padding: 12px 8px 12px 8px";
                b.innerHTML = this._cultureInfo.saveJPGText;
                b.style.backgroundColor = this.toolbar.backgroundColor;
                b.style.color = this.toolbar.fontColor;
                this._dropdownMenu.appendChild(b);
                N(b, "touchstart", function(a) {
                    f = !0
                });
                N(b, "mouseover", function() {
                    f || (this.style.backgroundColor = a.toolbar.backgroundColorOnHover, this.style.color = a.toolbar.fontColorOnHover)
                }, !0);
                N(b, "mouseout", function() {
                    f || (this.style.backgroundColor = a.toolbar.backgroundColor, this.style.color = a.toolbar.fontColor)
                }, !0);
                N(b, "click", function() {
                    s(a.canvas, "jpeg", a.exportFileName);
                    wa(a._dropdownMenu)
                }, !0);
                b = document.createElement("div");
                b.style.cssText = "padding: 12px 8px 12px 8px";
                b.innerHTML = this._cultureInfo.savePNGText;
                b.style.backgroundColor = this.toolbar.backgroundColor;
                b.style.color = this.toolbar.fontColor;
                this._dropdownMenu.appendChild(b);
                N(b, "touchstart", function(a) {
                    f = !0
                });
                N(b, "mouseover", function() {
                    f || (this.style.backgroundColor = a.toolbar.backgroundColorOnHover, this.style.color = a.toolbar.fontColorOnHover)
                }, !0);
                N(b, "mouseout", function() {
                    f || (this.style.backgroundColor = a.toolbar.backgroundColor, this.style.color = a.toolbar.fontColor)
                }, !0);
                N(b, "click", function() {
                    s(a.canvas, "png", a.exportFileName);
                    wa(a._dropdownMenu)
                }, !0)
            }
            "none" !== this._toolBar.style.display && this._zoomButton &&
            (this.panEnabled ? va(a, a._zoomButton, "zoom") : va(a, a._zoomButton, "pan"), a._resetButton.getAttribute("state") !== a._cultureInfo.resetText && va(a, a._resetButton, "reset"));
            this.options.toolTip && this.toolTip.options !== this.options.toolTip && (this.toolTip.options = this.options.toolTip);
            for (var c in this.toolTip.options) this.toolTip.options.hasOwnProperty(c) && this.toolTip.updateOption(c)
        };
        q.prototype._updateSize = function() {
            var a = 0,
                f = 0;
            this.options.width ? a = this.width : this.width = a = 0 < this.container.clientWidth ?
                this.container.clientWidth : this.width;
            this.options.height ? f = this.height : this.height = f = 0 < this.container.clientHeight ? this.container.clientHeight : this.height;
            return this.canvas.width !== a * ha || this.canvas.height !== f * ha ? (Ha(this.canvas, a, f), Ha(this._preRenderCanvas, a, f), Ha(this.overlaidCanvas, a, f), Ha(this._eventManager.ghostCanvas, a, f), this.bounds = {
                x1: 0,
                y1: 0,
                x2: this.width,
                y2: this.height
            }, !0) : !1
        };
        q.prototype._initialize = function() {
            this.toolbar = new Ra(this, this.options.toolbar);
            this._animator ? this._animator.cancelAllAnimations() :
                this._animator = new ka(this);
            this.removeAllEventListeners();
            this.disableToolTip = !1;
            this._axes = [];
            this.funnelPyramidClickHandler = this.pieDoughnutClickHandler = null;
            this.animationRequestId && this.cancelRequestAnimFrame.call(window, this.animationRequestId);
            this._updateOptions();
            this.animatedRender = v && this.animationEnabled && 0 === this.renderCount;
            this._updateSize();
            this.clearCanvas();
            this.ctx.beginPath();
            this.axisX = [];
            this.axisX2 = [];
            this.axisY = [];
            this.axisY2 = [];
            this._indexLabels = [];
            this._dataInRenderedOrder = [];
            this._events = [];
            this._eventManager && this._eventManager.reset();
            this.plotInfo = {
                axisPlacement: null,
                plotTypes: []
            };
            this.layoutManager = new Ea(0, 0, this.width, this.height, 2);
            this.plotArea.layoutManager && this.plotArea.layoutManager.reset();
            this.data = [];
            var a = 0,
                f = null;
            if (this.options.data) {
                for (var b = 0; b < this.options.data.length; b++)
                    if (a++, !this.options.data[b].type || 0 <= q._supportedChartTypes.indexOf(this.options.data[b].type)) {
                        var c = new Q(this, this.options.data[b], a - 1, ++this._eventManager.lastObjectId);
                        "error" === c.type && (c.linkedDataSeriesIndex = y(this.options.data[b].linkedDataSeriesIndex) ? b - 1 : this.options.data[b].linkedDataSeriesIndex, 0 > c.linkedDataSeriesIndex || c.linkedDataSeriesIndex >= this.options.data.length || "number" !== typeof c.linkedDataSeriesIndex || "error" === this.options.data[c.linkedDataSeriesIndex].type) && (c.linkedDataSeriesIndex = null);
                        null === c.name && (c.name = "DataSeries " + a);
                        null === c.color ? 1 < this.options.data.length ? (c._colorSet = [this._selectedColorSet[c.index % this._selectedColorSet.length]],
                            c.color = this._selectedColorSet[c.index % this._selectedColorSet.length]) : c._colorSet = "line" === c.type || "stepLine" === c.type || "spline" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" === c.type || "stackedArea" === c.type || "stackedArea100" === c.type || "rangeArea" === c.type || "rangeSplineArea" === c.type || "candlestick" === c.type || "ohlc" === c.type || "waterfall" === c.type || "boxAndWhisker" === c.type ? [this._selectedColorSet[0]] : this._selectedColorSet : c._colorSet = [c.color];
                        null === c.markerSize && (("line" === c.type ||
                            "stepLine" === c.type || "spline" === c.type || 0 <= c.type.toLowerCase().indexOf("area")) && c.dataPoints && c.dataPoints.length < this.width / 16 || "scatter" === c.type) && (c.markerSize = 8);
                        "bubble" !== c.type && "scatter" !== c.type || !c.dataPoints || (c.dataPoints.some ? c.dataPoints.some(function(a) {
                            return a.x
                        }) && c.dataPoints.sort(m) : c.dataPoints.sort(m));
                        this.data.push(c);
                        var e = c.axisPlacement,
                            f = f || e,
                            g;
                        "normal" === e ? "xySwapped" === this.plotInfo.axisPlacement ? g = 'You cannot combine "' + c.type + '" with bar chart' : "none" === this.plotInfo.axisPlacement ?
                            g = 'You cannot combine "' + c.type + '" with pie chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "normal") : "xySwapped" === e ? "normal" === this.plotInfo.axisPlacement ? g = 'You cannot combine "' + c.type + '" with line, area, column or pie chart' : "none" === this.plotInfo.axisPlacement ? g = 'You cannot combine "' + c.type + '" with pie chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "xySwapped") : "none" === e ? "normal" === this.plotInfo.axisPlacement ? g = 'You cannot combine "' + c.type +
                            '" with line, area, column or bar chart' : "xySwapped" === this.plotInfo.axisPlacement ? g = 'You cannot combine "' + c.type + '" with bar chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "none") : null === e && "none" === this.plotInfo.axisPlacement && (g = 'You cannot combine "' + c.type + '" with pie chart');
                        if (g && window.console) {
                            window.console.log(g);
                            return
                        }
                    }
                for (b = 0; b < this.data.length; b++) {
                    if ("none" == f && "error" === this.data[b].type && window.console) {
                        window.console.log('You cannot combine "' + c.type + '" with error chart');
                        return
                    }
                    "error" === this.data[b].type && (this.data[b].axisPlacement = this.plotInfo.axisPlacement = f || "normal", this.data[b]._linkedSeries = null === this.data[b].linkedDataSeriesIndex ? null : this.data[this.data[b].linkedDataSeriesIndex])
                }
            }
            this._objectsInitialized = !0
        };
        q._supportedChartTypes = Da("line stepLine spline column area stepArea splineArea bar bubble scatter stackedColumn stackedColumn100 stackedBar stackedBar100 stackedArea stackedArea100 candlestick ohlc boxAndWhisker rangeColumn error rangeBar rangeArea rangeSplineArea pie doughnut funnel pyramid waterfall".split(" "));
        q.prototype.render = function(a) {
            a && (this.options = a);
            this._initialize();
            bb(this);
            cb(this);
            var f = [];
            for (a = 0; a < this.data.length; a++)
                if ("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) {
                    if (!this.data[a].axisYType || "primary" === this.data[a].axisYType)
                        if (this.options.axisY && 0 < this.options.axisY.length) {
                            if (!this.axisY.length)
                                for (var b = 0; b < this.options.axisY.length; b++) "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY[b] = new C(this, "axisY", this.options.axisY[b],
                                    b, "axisY", "left")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY[b] = new C(this, "axisY", this.options.axisY[b], b, "axisY", "bottom"));
                            this.data[a].axisY = this.axisY[0 <= this.data[a].axisYIndex && this.data[a].axisYIndex < this.axisY.length ? this.data[a].axisYIndex : 0];
                            this.axisY[0 <= this.data[a].axisYIndex && this.data[a].axisYIndex < this.axisY.length ? this.data[a].axisYIndex : 0].dataSeries.push(this.data[a])
                        } else this.axisY.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY[0] =
                            new C(this, "axisY", this.options.axisY, 0, "axisY", "left")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY[0] = new C(this, "axisY", this.options.axisY, 0, "axisY", "bottom"))), this.data[a].axisY = this.axisY[0], this.axisY[0].dataSeries.push(this.data[a]);
                    if ("secondary" === this.data[a].axisYType)
                        if (this.options.axisY2 && 0 < this.options.axisY2.length) {
                            if (!this.axisY2.length)
                                for (b = 0; b < this.options.axisY2.length; b++) "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY2[b] = new C(this,
                                    "axisY2", this.options.axisY2[b], b, "axisY", "right")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY2[b] = new C(this, "axisY2", this.options.axisY2[b], b, "axisY", "top"));
                            this.data[a].axisY = this.axisY2[0 <= this.data[a].axisYIndex && this.data[a].axisYIndex < this.axisY2.length ? this.data[a].axisYIndex : 0];
                            this.axisY2[0 <= this.data[a].axisYIndex && this.data[a].axisYIndex < this.axisY2.length ? this.data[a].axisYIndex : 0].dataSeries.push(this.data[a])
                        } else this.axisY2.length || ("normal" === this.plotInfo.axisPlacement ?
                            this._axes.push(this.axisY2[0] = new C(this, "axisY2", this.options.axisY2, 0, "axisY", "right")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY2[0] = new C(this, "axisY2", this.options.axisY2, 0, "axisY", "top"))), this.data[a].axisY = this.axisY2[0], this.axisY2[0].dataSeries.push(this.data[a]);
                    if (!this.data[a].axisXType || "primary" === this.data[a].axisXType)
                        if (this.options.axisX && 0 < this.options.axisX.length) {
                            if (!this.axisX.length)
                                for (b = 0; b < this.options.axisX.length; b++) "normal" === this.plotInfo.axisPlacement ?
                                    this._axes.push(this.axisX[b] = new C(this, "axisX", this.options.axisX[b], b, "axisX", "bottom")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX[b] = new C(this, "axisX", this.options.axisX[b], b, "axisX", "left"));
                            this.data[a].axisX = this.axisX[0 <= this.data[a].axisXIndex && this.data[a].axisXIndex < this.axisX.length ? this.data[a].axisXIndex : 0];
                            this.axisX[0 <= this.data[a].axisXIndex && this.data[a].axisXIndex < this.axisX.length ? this.data[a].axisXIndex : 0].dataSeries.push(this.data[a])
                        } else this.axisX.length ||
                        ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX[0] = new C(this, "axisX", this.options.axisX, 0, "axisX", "bottom")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX[0] = new C(this, "axisX", this.options.axisX, 0, "axisX", "left"))), this.data[a].axisX = this.axisX[0], this.axisX[0].dataSeries.push(this.data[a]);
                    if ("secondary" === this.data[a].axisXType)
                        if (this.options.axisX2 && 0 < this.options.axisX2.length) {
                            if (!this.axisX2.length)
                                for (b = 0; b < this.options.axisX2.length; b++) "normal" ===
                                this.plotInfo.axisPlacement ? this._axes.push(this.axisX2[b] = new C(this, "axisX2", this.options.axisX2[b], b, "axisX", "top")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX2[b] = new C(this, "axisX2", this.options.axisX2[b], b, "axisX", "right"));
                            this.data[a].axisX = this.axisX2[0 <= this.data[a].axisXIndex && this.data[a].axisXIndex < this.axisX2.length ? this.data[a].axisXIndex : 0];
                            this.axisX2[0 <= this.data[a].axisXIndex && this.data[a].axisXIndex < this.axisX2.length ? this.data[a].axisXIndex : 0].dataSeries.push(this.data[a])
                        } else this.axisX2.length ||
                        ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX2[0] = new C(this, "axisX2", this.options.axisX2, 0, "axisX", "top")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX2[0] = new C(this, "axisX2", this.options.axisX2, 0, "axisX", "right"))), this.data[a].axisX = this.axisX2[0], this.axisX2[0].dataSeries.push(this.data[a])
                }
            if (this.axisY) {
                for (b = 1; b < this.axisY.length; b++) "undefined" === typeof this.axisY[b].options.gridThickness && (this.axisY[b].gridThickness = 0);
                for (b = 0; b < this.axisY.length -
                1; b++) "undefined" === typeof this.axisY[b].options.margin && (this.axisY[b].margin = 10)
            }
            if (this.axisY2) {
                for (b = 1; b < this.axisY2.length; b++) "undefined" === typeof this.axisY2[b].options.gridThickness && (this.axisY2[b].gridThickness = 0);
                for (b = 0; b < this.axisY2.length - 1; b++) "undefined" === typeof this.axisY2[b].options.margin && (this.axisY2[b].margin = 10)
            }
            this.axisY && 0 < this.axisY.length && (this.axisY2 && 0 < this.axisY2.length) && (0 < this.axisY[0].gridThickness && "undefined" === typeof this.axisY2[0].options.gridThickness ? this.axisY2[0].gridThickness =
                0 : 0 < this.axisY2[0].gridThickness && "undefined" === typeof this.axisY[0].options.gridThickness && (this.axisY[0].gridThickness = 0));
            if (this.axisX)
                for (b = 0; b < this.axisX.length; b++) "undefined" === typeof this.axisX[b].options.gridThickness && (this.axisX[b].gridThickness = 0);
            if (this.axisX2)
                for (b = 0; b < this.axisX2.length; b++) "undefined" === typeof this.axisX2[b].options.gridThickness && (this.axisX2[b].gridThickness = 0);
            this.axisX && 0 < this.axisX.length && (this.axisX2 && 0 < this.axisX2.length) && (0 < this.axisX[0].gridThickness &&
            "undefined" === typeof this.axisX2[0].options.gridThickness ? this.axisX2[0].gridThickness = 0 : 0 < this.axisX2[0].gridThickness && "undefined" === typeof this.axisX[0].options.gridThickness && (this.axisX[0].gridThickness = 0));
            b = !1;
            if (0 < this._axes.length && (this.zoomEnabled || this.panEnabled))
                for (a = 0; a < this._axes.length; a++)
                    if (null !== this._axes[a].viewportMinimum || null !== this._axes[a].viewportMaximum) {
                        b = !0;
                        break
                    }
            b ? (Ma(this._zoomButton, this._resetButton), this._toolBar.style.border = this.toolbar.borderThickness + "px solid " +
                this.toolbar.borderColor, this._zoomButton.style.borderRight = this.toolbar.borderThickness + "px solid " + this.toolbar.borderColor, this._resetButton.style.borderRight = (this.exportEnabled ? this.toolbar.borderThickness : 0) + "px solid " + this.toolbar.borderColor) : (wa(this._zoomButton, this._resetButton), this._toolBar.style.border = this.toolbar.borderThickness + "px solid transparent", this.options.zoomEnabled && (this.zoomEnabled = !0, this.panEnabled = !1));
            this._processData();
            this.options.title && (this.title = new Ia(this,
                this.options.title), this.title.dockInsidePlotArea ? f.push(this.title) : this.title.render());
            if (this.options.subtitles)
                for (this.subtitles = [], a = 0; a < this.options.subtitles.length; a++) b = new Na(this, this.options.subtitles[a], a), this.subtitles.push(b), b.dockInsidePlotArea ? f.push(b) : b.render();
            this.legend = new T(this, this.options.legend);
            for (a = 0; a < this.data.length; a++)(this.data[a].showInLegend || "pie" === this.data[a].type || "doughnut" === this.data[a].type || "funnel" === this.data[a].type || "pyramid" === this.data[a].type) &&
            this.legend.dataSeries.push(this.data[a]);
            this.legend.dockInsidePlotArea ? f.push(this.legend) : this.legend.render();
            for (a = 0; a < this._axes.length; a++)
                if (this._axes[a].scaleBreaks && this._axes[a].scaleBreaks._appliedBreaks.length) {
                    v ? (this._breaksCanvas = ua(this.width, this.height, !0), this._breaksCanvasCtx = this._breaksCanvas.getContext("2d")) : (this._breaksCanvas = this.canvas, this._breaksCanvasCtx = this.ctx);
                    break
                }
            this._preRenderCanvas = ua(this.width, this.height);
            this._preRenderCtx = this._preRenderCanvas.getContext("2d");
            if ("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) C.setLayoutAndRender(this.axisX, this.axisX2, this.axisY, this.axisY2, this.plotInfo.axisPlacement, this.layoutManager.getFreeSpace());
            else if ("none" === this.plotInfo.axisPlacement) this.preparePlotArea();
            else return;
            for (a = 0; a < f.length; a++) f[a].render();
            var c = [];
            if (this.animatedRender) {
                var e = ua(this.width, this.height);
                e.getContext("2d").drawImage(this.canvas, 0, 0, this.width, this.height)
            }
            var f = this.ctx.miterLimit,
                g;
            this.ctx.miterLimit =
                3;
            v && this._breaksCanvas && (this._preRenderCtx.drawImage(this.canvas, 0, 0, this.width, this.height), this._preRenderCtx.drawImage(this._breaksCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx.globalCompositeOperation = "source-atop", this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), this._preRenderCtx.clearRect(0, 0, this.width, this.height));
            for (a = 0; a < this.plotInfo.plotTypes.length; a++)
                for (var h = this.plotInfo.plotTypes[a], l = 0; l < h.plotUnits.length; l++) {
                    var t = h.plotUnits[l],
                        k = null;
                    t.targetCanvas = null;
                    this.animatedRender && (t.targetCanvas = ua(this.width, this.height), t.targetCanvasCtx = t.targetCanvas.getContext("2d"), g = t.targetCanvasCtx.miterLimit, t.targetCanvasCtx.miterLimit = 3);
                    "line" === t.type ? k = this.renderLine(t) : "stepLine" === t.type ? k = this.renderStepLine(t) : "spline" === t.type ? k = this.renderSpline(t) : "column" === t.type ? k = this.renderColumn(t) : "bar" === t.type ? k = this.renderBar(t) : "area" === t.type ? k = this.renderArea(t) : "stepArea" === t.type ? k = this.renderStepArea(t) : "splineArea" === t.type ?
                        k = this.renderSplineArea(t) : "stackedColumn" === t.type ? k = this.renderStackedColumn(t) : "stackedColumn100" === t.type ? k = this.renderStackedColumn100(t) : "stackedBar" === t.type ? k = this.renderStackedBar(t) : "stackedBar100" === t.type ? k = this.renderStackedBar100(t) : "stackedArea" === t.type ? k = this.renderStackedArea(t) : "stackedArea100" === t.type ? k = this.renderStackedArea100(t) : "bubble" === t.type ? k = k = this.renderBubble(t) : "scatter" === t.type ? k = this.renderScatter(t) : "pie" === t.type ? this.renderPie(t) : "doughnut" === t.type ? this.renderPie(t) :
                            "funnel" === t.type ? k = this.renderFunnel(t) : "pyramid" === t.type ? k = this.renderFunnel(t) : "candlestick" === t.type ? k = this.renderCandlestick(t) : "ohlc" === t.type ? k = this.renderCandlestick(t) : "rangeColumn" === t.type ? k = this.renderRangeColumn(t) : "error" === t.type ? k = this.renderError(t) : "rangeBar" === t.type ? k = this.renderRangeBar(t) : "rangeArea" === t.type ? k = this.renderRangeArea(t) : "rangeSplineArea" === t.type ? k = this.renderRangeSplineArea(t) : "waterfall" === t.type ? k = this.renderWaterfall(t) : "boxAndWhisker" === t.type && (k = this.renderBoxAndWhisker(t));
                    for (b = 0; b < t.dataSeriesIndexes.length; b++) this._dataInRenderedOrder.push(this.data[t.dataSeriesIndexes[b]]);
                    this.animatedRender && (t.targetCanvasCtx.miterLimit = g, k && c.push(k))
                }
            this.ctx.miterLimit = f;
            this.animatedRender && this._breaksCanvasCtx && c.push({
                source: this._breaksCanvasCtx,
                dest: this.plotArea.ctx,
                animationCallback: H.fadeInAnimation,
                easingFunction: H.easing.easeInQuad,
                animationBase: 0,
                startTimePercent: 0.7
            });
            this.animatedRender && 0 < this._indexLabels.length && (g = ua(this.width, this.height).getContext("2d"),
                c.push(this.renderIndexLabels(g)));
            var r = this;
            if (0 < c.length) r.disableToolTip = !0, r._animator.animate(200, r.animationDuration, function(a) {
                r.ctx.clearRect(0, 0, r.width, r.height);
                r.ctx.drawImage(e, 0, 0, Math.floor(r.width * ha), Math.floor(r.height * ha), 0, 0, r.width, r.height);
                for (var b = 0; b < c.length; b++) k = c[b], 1 > a && "undefined" !== typeof k.startTimePercent ? a >= k.startTimePercent && k.animationCallback(k.easingFunction(a - k.startTimePercent, 0, 1, 1 - k.startTimePercent), k) : k.animationCallback(k.easingFunction(a, 0, 1, 1), k);
                r.dispatchEvent("dataAnimationIterationEnd", {
                    chart: r
                })
            }, function() {
                c = [];
                for (var a = 0; a < r.plotInfo.plotTypes.length; a++)
                    for (var b = r.plotInfo.plotTypes[a], d = 0; d < b.plotUnits.length; d++) b.plotUnits[d].targetCanvas = null;
                e = null;
                r.disableToolTip = !1
            });
            else {
                if (r._breaksCanvas)
                    if (v) r.plotArea.ctx.drawImage(r._breaksCanvas, 0, 0, this.width, this.height);
                    else
                        for (b = 0; b < r._axes.length; b++) r._axes[b].createMask();
                0 < r._indexLabels.length && r.renderIndexLabels();
                r.dispatchEvent("dataAnimationIterationEnd", {
                    chart: r
                })
            }
            this.attachPlotAreaEventHandlers();
            this.zoomEnabled || (this.panEnabled || !this._zoomButton || "none" === this._zoomButton.style.display) || wa(this._zoomButton, this._resetButton);
            this.toolTip._updateToolTip();
            this.renderCount++;
            this._breaksCanvas && (delete this._breaksCanvas, delete this._breaksCanvasCtx);
            for (b = 0; b < this._axes.length; b++) this._axes[b].maskCanvas && (delete this._axes[b].maskCanvas, delete this._axes[b].maskCtx)
        };
        q.prototype.attachPlotAreaEventHandlers = function() {
            this.attachEvent({
                context: this,
                chart: this,
                mousedown: this._plotAreaMouseDown,
                mouseup: this._plotAreaMouseUp,
                mousemove: this._plotAreaMouseMove,
                cursor: this.panEnabled ? "move" : "default",
                capture: !0,
                bounds: this.plotArea
            })
        };
        q.prototype.categoriseDataSeries = function() {
            for (var a = "", f = 0; f < this.data.length; f++)
                if (a = this.data[f], a.dataPoints && (0 !== a.dataPoints.length && a.visible) && 0 <= q._supportedChartTypes.indexOf(a.type)) {
                    for (var b = null, c = !1, e = null, g = !1, h = 0; h < this.plotInfo.plotTypes.length; h++)
                        if (this.plotInfo.plotTypes[h].type === a.type) {
                            c = !0;
                            b = this.plotInfo.plotTypes[h];
                            break
                        }
                    c || (b = {
                        type: a.type,
                        totalDataSeries: 0,
                        plotUnits: []
                    }, this.plotInfo.plotTypes.push(b));
                    for (h = 0; h < b.plotUnits.length; h++)
                        if (b.plotUnits[h].axisYType === a.axisYType && b.plotUnits[h].axisXType === a.axisXType && b.plotUnits[h].axisYIndex === a.axisYIndex && b.plotUnits[h].axisXIndex === a.axisXIndex) {
                            g = !0;
                            e = b.plotUnits[h];
                            break
                        }
                    g || (e = {
                        type: a.type,
                        previousDataSeriesCount: 0,
                        index: b.plotUnits.length,
                        plotType: b,
                        axisXType: a.axisXType,
                        axisYType: a.axisYType,
                        axisYIndex: a.axisYIndex,
                        axisXIndex: a.axisXIndex,
                        axisY: "primary" === a.axisYType ? this.axisY[0 <=
                        a.axisYIndex && a.axisYIndex < this.axisY.length ? a.axisYIndex : 0] : this.axisY2[0 <= a.axisYIndex && a.axisYIndex < this.axisY2.length ? a.axisYIndex : 0],
                        axisX: "primary" === a.axisXType ? this.axisX[0 <= a.axisXIndex && a.axisXIndex < this.axisX.length ? a.axisXIndex : 0] : this.axisX2[0 <= a.axisXIndex && a.axisXIndex < this.axisX2.length ? a.axisXIndex : 0],
                        dataSeriesIndexes: [],
                        yTotals: []
                    }, b.plotUnits.push(e));
                    b.totalDataSeries++;
                    e.dataSeriesIndexes.push(f);
                    a.plotUnit = e
                }
            for (f = 0; f < this.plotInfo.plotTypes.length; f++)
                for (b = this.plotInfo.plotTypes[f],
                         h = a = 0; h < b.plotUnits.length; h++) b.plotUnits[h].previousDataSeriesCount = a, a += b.plotUnits[h].dataSeriesIndexes.length
        };
        q.prototype.assignIdToDataPoints = function() {
            for (var a = 0; a < this.data.length; a++) {
                var f = this.data[a];
                if (f.dataPoints)
                    for (var b = f.dataPoints.length, c = 0; c < b; c++) f.dataPointIds[c] = ++this._eventManager.lastObjectId
            }
        };
        q.prototype._processData = function() {
            this.assignIdToDataPoints();
            this.categoriseDataSeries();
            for (var a = 0; a < this.plotInfo.plotTypes.length; a++)
                for (var f = this.plotInfo.plotTypes[a],
                         b = 0; b < f.plotUnits.length; b++) {
                    var c = f.plotUnits[b];
                    "line" === c.type || "stepLine" === c.type || "spline" === c.type || "column" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" === c.type || "bar" === c.type || "bubble" === c.type || "scatter" === c.type ? this._processMultiseriesPlotUnit(c) : "stackedColumn" === c.type || "stackedBar" === c.type || "stackedArea" === c.type ? this._processStackedPlotUnit(c) : "stackedColumn100" === c.type || "stackedBar100" === c.type || "stackedArea100" === c.type ? this._processStacked100PlotUnit(c) : "candlestick" ===
                    c.type || "ohlc" === c.type || "rangeColumn" === c.type || "rangeBar" === c.type || "rangeArea" === c.type || "rangeSplineArea" === c.type || "error" === c.type || "boxAndWhisker" === c.type ? this._processMultiYPlotUnit(c) : "waterfall" === c.type && this._processSpecificPlotUnit(c)
                }
            this.calculateAutoBreaks()
        };
        q.prototype._processMultiseriesPlotUnit = function(a) {
            if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
                for (var f = a.axisY.dataInfo, b = a.axisX.dataInfo, c, e, g = !1, h = 0; h < a.dataSeriesIndexes.length; h++) {
                    var l = this.data[a.dataSeriesIndexes[h]],
                        t = 0,
                        k = !1,
                        r = !1,
                        p;
                    if ("normal" === l.axisPlacement || "xySwapped" === l.axisPlacement) var n = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : this.options.axisX && this.options.axisX.viewportMinimum ? this.options.axisX.viewportMinimum : this.options.axisX && this.options.axisX.minimum ? this.options.axisX.minimum : a.axisX.logarithmic ? 0 : -Infinity,
                        d = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : this.options.axisX && this.options.axisX.viewportMaximum ?
                            this.options.axisX.viewportMaximum : this.options.axisX && this.options.axisX.maximum ? this.options.axisX.maximum : Infinity;
                    if (l.dataPoints[t].x && l.dataPoints[t].x.getTime || "dateTime" === l.xValueType) g = !0;
                    for (t = 0; t < l.dataPoints.length; t++) {
                        "undefined" === typeof l.dataPoints[t].x && (l.dataPoints[t].x = t + (a.axisX.logarithmic ? 1 : 0));
                        l.dataPoints[t].x.getTime ? (g = !0, c = l.dataPoints[t].x.getTime()) : c = l.dataPoints[t].x;
                        e = l.dataPoints[t].y;
                        c < b.min && (b.min = c);
                        c > b.max && (b.max = c);
                        e < f.min && "number" === typeof e && (f.min = e);
                        e > f.max && "number" === typeof e && (f.max = e);
                        if (0 < t) {
                            if (a.axisX.logarithmic) {
                                var w = c / l.dataPoints[t - 1].x;
                                1 > w && (w = 1 / w);
                                b.minDiff > w && 1 !== w && (b.minDiff = w)
                            } else w = c - l.dataPoints[t - 1].x, 0 > w && (w *= -1), b.minDiff > w && 0 !== w && (b.minDiff = w);
                            null !== e && null !== l.dataPoints[t - 1].y && (a.axisY.logarithmic ? (w = e / l.dataPoints[t - 1].y, 1 > w && (w = 1 / w), f.minDiff > w && 1 !== w && (f.minDiff = w)) : (w = e - l.dataPoints[t - 1].y, 0 > w && (w *= -1), f.minDiff > w && 0 !== w && (f.minDiff = w)))
                        }
                        if (c < n && !k) null !== e && (p = c);
                        else {
                            if (!k && (k = !0, 0 < t)) {
                                t -= 2;
                                continue
                            }
                            if (c > d &&
                                !r) r = !0;
                            else if (c > d && r) continue;
                            l.dataPoints[t].label && (a.axisX.labels[c] = l.dataPoints[t].label);
                            c < b.viewPortMin && (b.viewPortMin = c);
                            c > b.viewPortMax && (b.viewPortMax = c);
                            null === e ? b.viewPortMin === c && p < c && (b.viewPortMin = p) : (e < f.viewPortMin && "number" === typeof e && (f.viewPortMin = e), e > f.viewPortMax && "number" === typeof e && (f.viewPortMax = e))
                        }
                    }
                    l.axisX.valueType = l.xValueType = g ? "dateTime" : "number"
                }
        };
        q.prototype._processStackedPlotUnit = function(a) {
            if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
                for (var f =
                    a.axisY.dataInfo, b = a.axisX.dataInfo, c, e, g = !1, h = [], l = [], t = Infinity, k = -Infinity, r = 0; r < a.dataSeriesIndexes.length; r++) {
                    var p = this.data[a.dataSeriesIndexes[r]],
                        n = 0,
                        d = !1,
                        w = !1,
                        za;
                    if ("normal" === p.axisPlacement || "xySwapped" === p.axisPlacement) var D = this.sessionVariables.axisX.newViewportMinimum ? this.sessionVariables.axisX.newViewportMinimum : this.options.axisX && this.options.axisX.viewportMinimum ? this.options.axisX.viewportMinimum : this.options.axisX && this.options.axisX.minimum ? this.options.axisX.minimum : -Infinity,
                        u = this.sessionVariables.axisX.newViewportMaximum ? this.sessionVariables.axisX.newViewportMaximum : this.options.axisX && this.options.axisX.viewportMaximum ? this.options.axisX.viewportMaximum : this.options.axisX && this.options.axisX.maximum ? this.options.axisX.maximum : Infinity;
                    if (p.dataPoints[n].x && p.dataPoints[n].x.getTime || "dateTime" === p.xValueType) g = !0;
                    for (n = 0; n < p.dataPoints.length; n++) {
                        "undefined" === typeof p.dataPoints[n].x && (p.dataPoints[n].x = n + (a.axisX.logarithmic ? 1 : 0));
                        p.dataPoints[n].x.getTime ? (g = !0, c = p.dataPoints[n].x.getTime()) : c = p.dataPoints[n].x;
                        e = y(p.dataPoints[n].y) ? 0 : p.dataPoints[n].y;
                        c < b.min && (b.min = c);
                        c > b.max && (b.max = c);
                        if (0 < n) {
                            if (a.axisX.logarithmic) {
                                var m = c / p.dataPoints[n - 1].x;
                                1 > m && (m = 1 / m);
                                b.minDiff > m && 1 !== m && (b.minDiff = m)
                            } else m = c - p.dataPoints[n - 1].x, 0 > m && (m *= -1), b.minDiff > m && 0 !== m && (b.minDiff = m);
                            null !== e && null !== p.dataPoints[n - 1].y && (a.axisY.logarithmic ? 0 < e && (m = e / p.dataPoints[n - 1].y, 1 > m && (m = 1 / m), f.minDiff > m && 1 !== m && (f.minDiff = m)) : (m = e - p.dataPoints[n - 1].y, 0 > m && (m *= -1), f.minDiff >
                            m && 0 !== m && (f.minDiff = m)))
                        }
                        if (c < D && !d) null !== p.dataPoints[n].y && (za = c);
                        else {
                            if (!d && (d = !0, 0 < n)) {
                                n -= 2;
                                continue
                            }
                            if (c > u && !w) w = !0;
                            else if (c > u && w) continue;
                            p.dataPoints[n].label && (a.axisX.labels[c] = p.dataPoints[n].label);
                            c < b.viewPortMin && (b.viewPortMin = c);
                            c > b.viewPortMax && (b.viewPortMax = c);
                            null === p.dataPoints[n].y ? b.viewPortMin === c && za < c && (b.viewPortMin = za) : (a.yTotals[c] = (a.yTotals[c] ? a.yTotals[c] : 0) + e, 0 <= e ? h[c] ? h[c] += e : (h[c] = e, t = Math.min(e, t)) : l[c] ? l[c] += e : (l[c] = e, k = Math.max(e, k)))
                        }
                    }
                    a.axisY.scaleBreaks &&
                    (a.axisY.scaleBreaks.autoCalculate && 1 <= a.axisY.scaleBreaks.maxNumberOfAutoBreaks) && (f.dataPointYPositiveSums ? (f.dataPointYPositiveSums.push.apply(f.dataPointYPositiveSums, h), f.dataPointYNegativeSums.push.apply(f.dataPointYPositiveSums, l)) : (f.dataPointYPositiveSums = h, f.dataPointYNegativeSums = l));
                    p.axisX.valueType = p.xValueType = g ? "dateTime" : "number"
                }
                for (n in h) h.hasOwnProperty(n) && !isNaN(n) && (a = h[n], a < f.min && (f.min = Math.min(a, t)), a > f.max && (f.max = a), n < b.viewPortMin || n > b.viewPortMax || (a < f.viewPortMin &&
                (f.viewPortMin = Math.min(a, t)), a > f.viewPortMax && (f.viewPortMax = a)));
                for (n in l) l.hasOwnProperty(n) && !isNaN(n) && (a = l[n], a < f.min && (f.min = a), a > f.max && (f.max = Math.max(a, k)), n < b.viewPortMin || n > b.viewPortMax || (a < f.viewPortMin && (f.viewPortMin = a), a > f.viewPortMax && (f.viewPortMax = Math.max(a, k))))
            }
        };
        q.prototype._processStacked100PlotUnit = function(a) {
            if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
                for (var f = a.axisY.dataInfo, b = a.axisX.dataInfo, c, e, g = !1, h = !1, l = !1, t = [], k = 0; k < a.dataSeriesIndexes.length; k++) {
                    var r =
                            this.data[a.dataSeriesIndexes[k]],
                        p = 0,
                        n = !1,
                        d = !1,
                        w;
                    if ("normal" === r.axisPlacement || "xySwapped" === r.axisPlacement) var m = this.sessionVariables.axisX.newViewportMinimum ? this.sessionVariables.axisX.newViewportMinimum : this.options.axisX && this.options.axisX.viewportMinimum ? this.options.axisX.viewportMinimum : this.options.axisX && this.options.axisX.minimum ? this.options.axisX.minimum : -Infinity,
                        D = this.sessionVariables.axisX.newViewportMaximum ? this.sessionVariables.axisX.newViewportMaximum : this.options.axisX &&
                        this.options.axisX.viewportMaximum ? this.options.axisX.viewportMaximum : this.options.axisX && this.options.axisX.maximum ? this.options.axisX.maximum : Infinity;
                    if (r.dataPoints[p].x && r.dataPoints[p].x.getTime || "dateTime" === r.xValueType) g = !0;
                    for (p = 0; p < r.dataPoints.length; p++) {
                        "undefined" === typeof r.dataPoints[p].x && (r.dataPoints[p].x = p + (a.axisX.logarithmic ? 1 : 0));
                        r.dataPoints[p].x.getTime ? (g = !0, c = r.dataPoints[p].x.getTime()) : c = r.dataPoints[p].x;
                        e = y(r.dataPoints[p].y) ? null : r.dataPoints[p].y;
                        c < b.min && (b.min =
                            c);
                        c > b.max && (b.max = c);
                        if (0 < p) {
                            if (a.axisX.logarithmic) {
                                var u = c / r.dataPoints[p - 1].x;
                                1 > u && (u = 1 / u);
                                b.minDiff > u && 1 !== u && (b.minDiff = u)
                            } else u = c - r.dataPoints[p - 1].x, 0 > u && (u *= -1), b.minDiff > u && 0 !== u && (b.minDiff = u);
                            y(e) || null === r.dataPoints[p - 1].y || (a.axisY.logarithmic ? 0 < e && (u = e / r.dataPoints[p - 1].y, 1 > u && (u = 1 / u), f.minDiff > u && 1 !== u && (f.minDiff = u)) : (u = e - r.dataPoints[p - 1].y, 0 > u && (u *= -1), f.minDiff > u && 0 !== u && (f.minDiff = u)))
                        }
                        if (c < m && !n) null !== e && (w = c);
                        else {
                            if (!n && (n = !0, 0 < p)) {
                                p -= 2;
                                continue
                            }
                            if (c > D && !d) d = !0;
                            else if (c >
                                D && d) continue;
                            r.dataPoints[p].label && (a.axisX.labels[c] = r.dataPoints[p].label);
                            c < b.viewPortMin && (b.viewPortMin = c);
                            c > b.viewPortMax && (b.viewPortMax = c);
                            null === e ? b.viewPortMin === c && w < c && (b.viewPortMin = w) : (a.yTotals[c] = (a.yTotals[c] ? a.yTotals[c] : 0) + e, 0 <= e ? h = !0 : 0 > e && (l = !0), t[c] = t[c] ? t[c] + Math.abs(e) : Math.abs(e))
                        }
                    }
                    r.axisX.valueType = r.xValueType = g ? "dateTime" : "number"
                }
                a.axisY.logarithmic ? (f.max = y(f.viewPortMax) ? 99 * Math.pow(a.axisY.logarithmBase, -0.05) : Math.max(f.viewPortMax, 99 * Math.pow(a.axisY.logarithmBase, -0.05)), f.min = y(f.viewPortMin) ? 1 : Math.min(f.viewPortMin, 1)) : h && !l ? (f.max = y(f.viewPortMax) ? 99 : Math.max(f.viewPortMax, 99), f.min = y(f.viewPortMin) ? 1 : Math.min(f.viewPortMin, 1)) : h && l ? (f.max = y(f.viewPortMax) ? 99 : Math.max(f.viewPortMax, 99), f.min = y(f.viewPortMin) ? -99 : Math.min(f.viewPortMin, -99)) : !h && l && (f.max = y(f.viewPortMax) ? -1 : Math.max(f.viewPortMax, -1), f.min = y(f.viewPortMin) ? -99 : Math.min(f.viewPortMin, -99));
                f.viewPortMin = f.min;
                f.viewPortMax = f.max;
                a.dataPointYSums = t
            }
        };
        q.prototype._processMultiYPlotUnit = function(a) {
            if (a.dataSeriesIndexes &&
                !(1 > a.dataSeriesIndexes.length))
                for (var f = a.axisY.dataInfo, b = a.axisX.dataInfo, c, e, g, h, l = !1, t = 0; t < a.dataSeriesIndexes.length; t++) {
                    var k = this.data[a.dataSeriesIndexes[t]],
                        r = 0,
                        p = !1,
                        n = !1,
                        d, w, m;
                    if ("normal" === k.axisPlacement || "xySwapped" === k.axisPlacement) var D = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : this.options.axisX && this.options.axisX.viewportMinimum ? this.options.axisX.viewportMinimum : this.options.axisX && this.options.axisX.minimum ? this.options.axisX.minimum :
                        a.axisX.logarithmic ? 0 : -Infinity,
                        u = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : this.options.axisX && this.options.axisX.viewportMaximum ? this.options.axisX.viewportMaximum : this.options.axisX && this.options.axisX.maximum ? this.options.axisX.maximum : Infinity;
                    if (k.dataPoints[r].x && k.dataPoints[r].x.getTime || "dateTime" === k.xValueType) l = !0;
                    for (r = 0; r < k.dataPoints.length; r++) {
                        "undefined" === typeof k.dataPoints[r].x && (k.dataPoints[r].x = r + (a.axisX.logarithmic ? 1 : 0));
                        k.dataPoints[r].x.getTime ?
                            (l = !0, c = k.dataPoints[r].x.getTime()) : c = k.dataPoints[r].x;
                        if ((e = k.dataPoints[r].y) && e.length) {
                            g = Math.min.apply(null, e);
                            h = Math.max.apply(null, e);
                            w = !0;
                            for (var v = 0; v < e.length; v++) null === e.k && (w = !1);
                            w && (p || (m = d), d = c)
                        }
                        c < b.min && (b.min = c);
                        c > b.max && (b.max = c);
                        g < f.min && (f.min = g);
                        h > f.max && (f.max = h);
                        0 < r && (a.axisX.logarithmic ? (w = c / k.dataPoints[r - 1].x, 1 > w && (w = 1 / w), b.minDiff > w && 1 !== w && (b.minDiff = w)) : (w = c - k.dataPoints[r - 1].x, 0 > w && (w *= -1), b.minDiff > w && 0 !== w && (b.minDiff = w)), e && (null !== e[0] && k.dataPoints[r - 1].y && null !==
                            k.dataPoints[r - 1].y[0]) && (a.axisY.logarithmic ? (w = e[0] / k.dataPoints[r - 1].y[0], 1 > w && (w = 1 / w), f.minDiff > w && 1 !== w && (f.minDiff = w)) : (w = e[0] - k.dataPoints[r - 1].y[0], 0 > w && (w *= -1), f.minDiff > w && 0 !== w && (f.minDiff = w))));
                        if (!(c < D) || p) {
                            if (!p && (p = !0, 0 < r)) {
                                r -= 2;
                                d = m;
                                continue
                            }
                            if (c > u && !n) n = !0;
                            else if (c > u && n) continue;
                            k.dataPoints[r].label && (a.axisX.labels[c] = k.dataPoints[r].label);
                            c < b.viewPortMin && (b.viewPortMin = c);
                            c > b.viewPortMax && (b.viewPortMax = c);
                            if (b.viewPortMin === c && e)
                                for (v = 0; v < e.length; v++)
                                    if (null === e[v] && d < c) {
                                        b.viewPortMin =
                                            d;
                                        break
                                    }
                            null === e ? b.viewPortMin === c && d < c && (b.viewPortMin = d) : (g < f.viewPortMin && (f.viewPortMin = g), h > f.viewPortMax && (f.viewPortMax = h))
                        }
                    }
                    k.axisX.valueType = k.xValueType = l ? "dateTime" : "number"
                }
        };
        q.prototype._processSpecificPlotUnit = function(a) {
            if ("waterfall" === a.type && a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
                for (var f = a.axisY.dataInfo, b = a.axisX.dataInfo, c, e, g = !1, h = 0; h < a.dataSeriesIndexes.length; h++) {
                    var l = this.data[a.dataSeriesIndexes[h]],
                        t = 0,
                        k = !1,
                        r = !1,
                        p = c = 0;
                    if ("normal" === l.axisPlacement || "xySwapped" ===
                        l.axisPlacement) var n = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : this.options.axisX && this.options.axisX.viewportMinimum ? this.options.axisX.viewportMinimum : this.options.axisX && this.options.axisX.minimum ? this.options.axisX.minimum : a.axisX.logarithmic ? 0 : -Infinity,
                        d = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : this.options.axisX && this.options.axisX.viewportMaximum ? this.options.axisX.viewportMaximum : this.options.axisX &&
                        this.options.axisX.maximum ? this.options.axisX.maximum : Infinity;
                    if (l.dataPoints[t].x && l.dataPoints[t].x.getTime || "dateTime" === l.xValueType) g = !0;
                    for (t = 0; t < l.dataPoints.length; t++) "undefined" !== typeof l.dataPoints[t].isCumulativeSum && !0 === l.dataPoints[t].isCumulativeSum ? (l.dataPointEOs[t].cumulativeSumYStartValue = 0, l.dataPointEOs[t].cumulativeSum = 0 === t ? 0 : l.dataPointEOs[t - 1].cumulativeSum, l.dataPoints[t].y = 0 === t ? 0 : l.dataPointEOs[t - 1].cumulativeSum) : "undefined" !== typeof l.dataPoints[t].isIntermediateSum &&
                    !0 === l.dataPoints[t].isIntermediateSum ? (l.dataPointEOs[t].cumulativeSumYStartValue = p, l.dataPointEOs[t].cumulativeSum = 0 === t ? 0 : l.dataPointEOs[t - 1].cumulativeSum, l.dataPoints[t].y = 0 === t ? 0 : c, p = 0 === t ? 0 : l.dataPointEOs[t - 1].cumulativeSum, c = 0) : (e = "number" !== typeof l.dataPoints[t].y ? 0 : l.dataPoints[t].y, l.dataPointEOs[t].cumulativeSumYStartValue = 0 === t ? 0 : l.dataPointEOs[t - 1].cumulativeSum, l.dataPointEOs[t].cumulativeSum = 0 === t ? e : l.dataPointEOs[t - 1].cumulativeSum + e, c += e);
                    for (t = 0; t < l.dataPoints.length; t++)
                        if ("undefined" ===
                            typeof l.dataPoints[t].x && (l.dataPoints[t].x = t + (a.axisX.logarithmic ? 1 : 0)), l.dataPoints[t].x.getTime ? (g = !0, c = l.dataPoints[t].x.getTime()) : c = l.dataPoints[t].x, e = l.dataPoints[t].y, c < b.min && (b.min = c), c > b.max && (b.max = c), l.dataPointEOs[t].cumulativeSum < f.min && (f.min = l.dataPointEOs[t].cumulativeSum), l.dataPointEOs[t].cumulativeSum > f.max && (f.max = l.dataPointEOs[t].cumulativeSum), 0 < t && (a.axisX.logarithmic ? (p = c / l.dataPoints[t - 1].x, 1 > p && (p = 1 / p), b.minDiff > p && 1 !== p && (b.minDiff = p)) : (p = c - l.dataPoints[t - 1].x, 0 > p &&
                            (p *= -1), b.minDiff > p && 0 !== p && (b.minDiff = p)), null !== e && null !== l.dataPoints[t - 1].y && (a.axisY.logarithmic ? (e = l.dataPointEOs[t].cumulativeSum / l.dataPointEOs[t - 1].cumulativeSum, 1 > e && (e = 1 / e), f.minDiff > e && 1 !== e && (f.minDiff = e)) : (e = l.dataPointEOs[t].cumulativeSum - l.dataPointEOs[t - 1].cumulativeSum, 0 > e && (e *= -1), f.minDiff > e && 0 !== e && (f.minDiff = e)))), !(c < n) || k) {
                            if (!k && (k = !0, 0 < t)) {
                                t -= 2;
                                continue
                            }
                            if (c > d && !r) r = !0;
                            else if (c > d && r) continue;
                            l.dataPoints[t].label && (a.axisX.labels[c] = l.dataPoints[t].label);
                            c < b.viewPortMin &&
                            (b.viewPortMin = c);
                            c > b.viewPortMax && (b.viewPortMax = c);
                            0 < t && (l.dataPointEOs[t - 1].cumulativeSum < f.viewPortMin && (f.viewPortMin = l.dataPointEOs[t - 1].cumulativeSum), l.dataPointEOs[t - 1].cumulativeSum > f.viewPortMax && (f.viewPortMax = l.dataPointEOs[t - 1].cumulativeSum));
                            l.dataPointEOs[t].cumulativeSum < f.viewPortMin && (f.viewPortMin = l.dataPointEOs[t].cumulativeSum);
                            l.dataPointEOs[t].cumulativeSum > f.viewPortMax && (f.viewPortMax = l.dataPointEOs[t].cumulativeSum)
                        }
                    l.axisX.valueType = l.xValueType = g ? "dateTime" : "number"
                }
        };
        q.prototype.calculateAutoBreaks = function() {
            function a(a, c, b, e) {
                if (e) return b = Math.pow(Math.min(b * a / c, c / a), 0.2), 1 >= b && (b = Math.pow(1 > a ? 1 / a : Math.min(c / a, a), 0.25)), {
                    startValue: a * b,
                    endValue: c / b
                };
                b = 0.2 * Math.min(b - c + a, c - a);
                0 >= b && (b = 0.25 * Math.min(c - a, Math.abs(a)));
                return {
                    startValue: a + b,
                    endValue: c - b
                }
            }

            function f(a) {
                if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
                    var c = a.axisX.scaleBreaks && a.axisX.scaleBreaks.autoCalculate && 1 <= a.axisX.scaleBreaks.maxNumberOfAutoBreaks,
                        b = a.axisY.scaleBreaks && a.axisY.scaleBreaks.autoCalculate &&
                            1 <= a.axisY.scaleBreaks.maxNumberOfAutoBreaks;
                    if (c || b)
                        for (var f = a.axisY.dataInfo, g = a.axisX.dataInfo, k, h = g.min, n = g.max, l = f.min, t = f.max, g = g._dataRanges, f = f._dataRanges, p, r = 0, m = 0; m < a.dataSeriesIndexes.length; m++) {
                            var v = e.data[a.dataSeriesIndexes[m]];
                            if (!(4 > v.dataPoints.length))
                                for (r = 0; r < v.dataPoints.length; r++)
                                    if (c && (p = (n + 1 - h) * Math.max(parseFloat(a.axisX.scaleBreaks.collapsibleThreshold) || 10, 10) / 100, k = v.dataPoints[r].x.getTime ? v.dataPoints[r].x.getTime() : v.dataPoints[r].x, p = Math.floor((k - h) / p), k < g[p].min &&
                                        (g[p].min = k), k > g[p].max && (g[p].max = k)), b) {
                                        var s = (t + 1 - l) * Math.max(parseFloat(a.axisY.scaleBreaks.collapsibleThreshold) || 10, 10) / 100;
                                        if ((k = "waterfall" === a.type ? v.dataPointEOs[r].cumulativeSum : v.dataPoints[r].y) && k.length)
                                            for (var q = 0; q < k.length; q++) p = Math.floor((k[q] - l) / s), k[q] < f[p].min && (f[p].min = k[q]), k[q] > f[p].max && (f[p].max = k[q]);
                                        else y(k) || (p = Math.floor((k - l) / s), k < f[p].min && (f[p].min = k), k > f[p].max && (f[p].max = k))
                                    }
                        }
                }
            }

            function b(a) {
                if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length) && a.axisX.scaleBreaks &&
                    a.axisX.scaleBreaks.autoCalculate && 1 <= a.axisX.scaleBreaks.maxNumberOfAutoBreaks)
                    for (var c = a.axisX.dataInfo, b = c.min, f = c.max, g = c._dataRanges, k, h = 0, n = 0; n < a.dataSeriesIndexes.length; n++) {
                        var l = e.data[a.dataSeriesIndexes[n]];
                        if (!(4 > l.dataPoints.length))
                            for (h = 0; h < l.dataPoints.length; h++) k = (f + 1 - b) * Math.max(parseFloat(a.axisX.scaleBreaks.collapsibleThreshold) || 10, 10) / 100, c = l.dataPoints[h].x.getTime ? l.dataPoints[h].x.getTime() : l.dataPoints[h].x, k = Math.floor((c - b) / k), c < g[k].min && (g[k].min = c), c > g[k].max && (g[k].max =
                                c)
                    }
            }
            for (var c, e = this, g = !1, h = 0; h < this._axes.length; h++)
                if (this._axes[h].scaleBreaks && this._axes[h].scaleBreaks.autoCalculate && 1 <= this._axes[h].scaleBreaks.maxNumberOfAutoBreaks) {
                    g = !0;
                    this._axes[h].dataInfo._dataRanges = [];
                    for (var l = 0; l < 100 / Math.max(parseFloat(this._axes[h].scaleBreaks.collapsibleThreshold) || 10, 10); l++) this._axes[h].dataInfo._dataRanges.push({
                        min: Infinity,
                        max: -Infinity
                    })
                }
            if (g) {
                for (h = 0; h < this.plotInfo.plotTypes.length; h++)
                    for (g = this.plotInfo.plotTypes[h], l = 0; l < g.plotUnits.length; l++) c =
                        g.plotUnits[l], "line" === c.type || "stepLine" === c.type || "spline" === c.type || "column" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" === c.type || "bar" === c.type || "bubble" === c.type || "scatter" === c.type || "candlestick" === c.type || "ohlc" === c.type || "rangeColumn" === c.type || "rangeBar" === c.type || "rangeArea" === c.type || "rangeSplineArea" === c.type || "waterfall" === c.type || "error" === c.type || "boxAndWhisker" === c.type ? f(c) : 0 <= c.type.indexOf("stacked") && b(c);
                for (h = 0; h < this._axes.length; h++)
                    if (this._axes[h].dataInfo._dataRanges) {
                        var t =
                            this._axes[h].dataInfo.min;
                        c = (this._axes[h].dataInfo.max + 1 - t) * Math.max(parseFloat(this._axes[h].scaleBreaks.collapsibleThreshold) || 10, 10) / 100;
                        var k = this._axes[h].dataInfo._dataRanges,
                            r, p, g = [];
                        if (this._axes[h].dataInfo.dataPointYPositiveSums) {
                            var n = this._axes[h].dataInfo.dataPointYPositiveSums;
                            r = k;
                            for (l in n) n.hasOwnProperty(l) && !isNaN(l) && (p = n[l], y(p) || (index = Math.floor((p - t) / c), p < r[index].min && (r[index].min = p), p > r[index].max && (r[index].max = p)));
                            delete this._axes[h].dataInfo.dataPointYPositiveSums
                        }
                        if (this._axes[h].dataInfo.dataPointYNegativeSums) {
                            n =
                                this._axes[h].dataInfo.dataPointYNegativeSums;
                            r = k;
                            for (l in n) n.hasOwnProperty(l) && !isNaN(l) && (p = -1 * n[l], y(p) || (index = Math.floor((p - t) / c), p < r[index].min && (r[index].min = p), p > r[index].max && (r[index].max = p)));
                            delete this._axes[h].dataInfo.dataPointYNegativeSums
                        }
                        for (l = 0; l < k.length - 1; l++)
                            if (r = k[l].max, isFinite(r))
                                for (; l < k.length - 1;)
                                    if (t = k[l + 1].min, isFinite(t)) {
                                        p = t - r;
                                        p > c && g.push({
                                            diff: p,
                                            start: r,
                                            end: t
                                        });
                                        break
                                    } else l++;
                        if (this._axes[h].scaleBreaks.customBreaks)
                            for (l = 0; l < this._axes[h].scaleBreaks.customBreaks.length; l++)
                                for (c =
                                         0; c < g.length; c++)
                                    if (this._axes[h].scaleBreaks.customBreaks[l].startValue <= g[c].start && g[c].start <= this._axes[h].scaleBreaks.customBreaks[l].endValue || this._axes[h].scaleBreaks.customBreaks[l].startValue <= g[c].start && g[c].start <= this._axes[h].scaleBreaks.customBreaks[l].endValue || g[c].start <= this._axes[h].scaleBreaks.customBreaks[l].startValue && this._axes[h].scaleBreaks.customBreaks[l].startValue <= g[c].end || g[c].start <= this._axes[h].scaleBreaks.customBreaks[l].endValue && this._axes[h].scaleBreaks.customBreaks[l].endValue <=
                                        g[c].end) g.splice(c, 1), c--;
                        g.sort(function(a, c) {
                            return c.diff - a.diff
                        });
                        for (l = 0; l < Math.min(g.length, this._axes[h].scaleBreaks.maxNumberOfAutoBreaks); l++) c = a(g[l].start, g[l].end, this._axes[h].logarithmic ? this._axes[h].dataInfo.max / this._axes[h].dataInfo.min : this._axes[h].dataInfo.max - this._axes[h].dataInfo.min, this._axes[h].logarithmic), this._axes[h].scaleBreaks.autoBreaks.push(new aa(this, "autoBreaks", c, l, ++this._eventManager.lastObjectId, this._axes[h].scaleBreaks)), this._axes[h].scaleBreaks._appliedBreaks.push(this._axes[h].scaleBreaks.autoBreaks[this._axes[h].scaleBreaks.autoBreaks.length -
                        1]);
                        this._axes[h].scaleBreaks._appliedBreaks.sort(function(a, c) {
                            return a.startValue - c.startValue
                        })
                    }
            }
        };
        q.prototype.getDataPointAtXY = function(a, f, b) {
            b = b || !1;
            for (var c = [], e = this._dataInRenderedOrder.length - 1; 0 <= e; e--) {
                var g = null;
                (g = this._dataInRenderedOrder[e].getDataPointAtXY(a, f, b)) && c.push(g)
            }
            a = null;
            f = !1;
            for (b = 0; b < c.length; b++)
                if ("line" === c[b].dataSeries.type || "stepLine" === c[b].dataSeries.type || "area" === c[b].dataSeries.type || "stepArea" === c[b].dataSeries.type)
                    if (e = na("markerSize", c[b].dataPoint, c[b].dataSeries) ||
                            8, c[b].distance <= e / 2) {
                        f = !0;
                        break
                    }
            for (b = 0; b < c.length; b++) f && "line" !== c[b].dataSeries.type && "stepLine" !== c[b].dataSeries.type && "area" !== c[b].dataSeries.type && "stepArea" !== c[b].dataSeries.type || (a ? c[b].distance <= a.distance && (a = c[b]) : a = c[b]);
            return a
        };
        q.prototype.getObjectAtXY = function(a, f, b) {
            var c = null;
            if (b = this.getDataPointAtXY(a, f, b || !1)) c = b.dataSeries.dataPointIds[b.dataPointIndex];
            else if (v) c = Wa(a, f, this._eventManager.ghostCtx);
            else
                for (b = 0; b < this.legend.items.length; b++) {
                    var e = this.legend.items[b];
                    a >= e.x1 && (a <= e.x2 && f >= e.y1 && f <= e.y2) && (c = e.id)
                }
            return c
        };
        q.prototype.getAutoFontSize = function(a, f, b) {
            f = Math.min(this.width, this.height);
            return Math.max("theme4" === this.theme ? 0 : 300 <= f ? 12 : 10, Math.round(f * (a / 400)))
        };
        q.prototype.resetOverlayedCanvas = function() {
            this.overlaidCanvasCtx.clearRect(0, 0, this.width, this.height)
        };
        q.prototype.clearCanvas = function() {
            this.ctx.clearRect(0, 0, this.width, this.height);
            this.backgroundColor && (this.ctx.fillStyle = this.backgroundColor, this.ctx.fillRect(0, 0, this.width, this.height))
        };
        q.prototype.attachEvent = function(a) {
            this._events.push(a)
        };
        q.prototype._touchEventHandler = function(a) {
            if (a.changedTouches && this.interactivityEnabled) {
                var f = [],
                    b = a.changedTouches,
                    c = b ? b[0] : a,
                    e = null;
                switch (a.type) {
                    case "touchstart":
                    case "MSPointerDown":
                        f = ["mousemove", "mousedown"];
                        this._lastTouchData = Oa(c);
                        this._lastTouchData.time = new Date;
                        break;
                    case "touchmove":
                    case "MSPointerMove":
                        f = ["mousemove"];
                        break;
                    case "touchend":
                    case "MSPointerUp":
                        var g = this._lastTouchData && this._lastTouchData.time ? new Date - this._lastTouchData.time :
                            0,
                            f = "touchstart" === this._lastTouchEventType || "MSPointerDown" === this._lastTouchEventType || 300 > g ? ["mouseup", "click"] : ["mouseup"];
                        break;
                    default:
                        return
                }
                if (!(b && 1 < b.length)) {
                    e = Oa(c);
                    e.time = new Date;
                    try {
                        var h = e.y - this._lastTouchData.y,
                            g = e.time - this._lastTouchData.time;
                        if (15 < Math.abs(h) && (this._lastTouchData.scroll || 300 > g)) {
                            this._lastTouchData.scroll = !0;
                            var l = window.parent || window;
                            l && l.scrollBy && l.scrollBy(0, -h)
                        }
                    } catch (t) {}
                    this._lastTouchEventType = a.type;
                    if (this._lastTouchData.scroll && this.zoomEnabled) this.isDrag &&
                    this.resetOverlayedCanvas(), this.isDrag = !1;
                    else
                        for (b = 0; b < f.length; b++) e = f[b], g = document.createEvent("MouseEvent"), g.initMouseEvent(e, !0, !0, window, 1, c.screenX, c.screenY, c.clientX, c.clientY, !1, !1, !1, !1, 0, null), c.target.dispatchEvent(g), a.preventManipulation && a.preventManipulation(), a.preventDefault && a.preventDefault()
                }
            }
        };
        q.prototype._dispatchRangeEvent = function(a, f) {
            var b = {
                chart: this
            };
            b.type = a;
            b.trigger = f;
            var c = [];
            this.axisX && 0 < this.axisX.length && c.push("axisX");
            this.axisX2 && 0 < this.axisX2.length &&
            c.push("axisX2");
            this.axisY && 0 < this.axisY.length && c.push("axisY");
            this.axisY2 && 0 < this.axisY2.length && c.push("axisY2");
            for (var e = 0; e < c.length; e++)
                if (y(b[c[e]]) && (b[c[e]] = []), "axisY" === c[e])
                    for (var g = 0; g < this.axisY.length; g++) b[c[e]].push({
                        viewportMinimum: this[c[e]][g].sessionVariables.newViewportMinimum,
                        viewportMaximum: this[c[e]][g].sessionVariables.newViewportMaximum
                    });
                else if ("axisY2" === c[e])
                    for (g = 0; g < this.axisY2.length; g++) b[c[e]].push({
                        viewportMinimum: this[c[e]][g].sessionVariables.newViewportMinimum,
                        viewportMaximum: this[c[e]][g].sessionVariables.newViewportMaximum
                    });
                else if ("axisX" === c[e])
                    for (g = 0; g < this.axisX.length; g++) b[c[e]].push({
                        viewportMinimum: this[c[e]][g].sessionVariables.newViewportMinimum,
                        viewportMaximum: this[c[e]][g].sessionVariables.newViewportMaximum
                    });
                else if ("axisX2" === c[e])
                    for (g = 0; g < this.axisX2.length; g++) b[c[e]].push({
                        viewportMinimum: this[c[e]][g].sessionVariables.newViewportMinimum,
                        viewportMaximum: this[c[e]][g].sessionVariables.newViewportMaximum
                    });
            this.dispatchEvent(a, b, this)
        };
        q.prototype._mouseEventHandler = function(a) {
            "undefined" === typeof a.target && a.srcElement && (a.target = a.srcElement);
            var f = Oa(a),
                b = a.type,
                c, e;
            a.which ? e = 3 == a.which : a.button && (e = 2 == a.button);
            q.capturedEventParam && (c = q.capturedEventParam, "mouseup" === b && (q.capturedEventParam = null, c.chart.overlaidCanvas.releaseCapture ? c.chart.overlaidCanvas.releaseCapture() : document.documentElement.removeEventListener("mouseup", c.chart._mouseEventHandler, !1)), c.hasOwnProperty(b) && ("mouseup" !== b || c.chart.overlaidCanvas.releaseCapture ?
                a.target !== c.chart.overlaidCanvas && v || c[b].call(c.context, f.x, f.y) : a.target !== c.chart.overlaidCanvas && (c.chart.isDrag = !1)));
            if (this.interactivityEnabled)
                if (this._ignoreNextEvent) this._ignoreNextEvent = !1;
                else if (a.preventManipulation && a.preventManipulation(), a.preventDefault && a.preventDefault(), !e) {
                    if (!q.capturedEventParam && this._events) {
                        for (var g = 0; g < this._events.length; g++)
                            if (this._events[g].hasOwnProperty(b))
                                if (c = this._events[g], e = c.bounds, f.x >= e.x1 && f.x <= e.x2 && f.y >= e.y1 && f.y <= e.y2) {
                                    c[b].call(c.context,
                                        f.x, f.y);
                                    "mousedown" === b && !0 === c.capture ? (q.capturedEventParam = c, this.overlaidCanvas.setCapture ? this.overlaidCanvas.setCapture() : document.documentElement.addEventListener("mouseup", this._mouseEventHandler, !1)) : "mouseup" === b && (c.chart.overlaidCanvas.releaseCapture ? c.chart.overlaidCanvas.releaseCapture() : document.documentElement.removeEventListener("mouseup", this._mouseEventHandler, !1));
                                    break
                                } else c = null;
                        a.target.style.cursor = c && c.cursor ? c.cursor : this._defaultCursor
                    }
                    b = this.plotArea;
                    if (f.x < b.x1 || f.x >
                        b.x2 || f.y < b.y1 || f.y > b.y2) this.toolTip && this.toolTip.enabled ? this.toolTip.hide() : this.resetOverlayedCanvas();
                    this.isDrag && this.zoomEnabled || !this._eventManager || this._eventManager.mouseEventHandler(a)
                }
        };
        q.prototype._plotAreaMouseDown = function(a, f) {
            this.isDrag = !0;
            this.dragStartPoint = {
                x: a,
                y: f
            }
        };
        q.prototype._plotAreaMouseUp = function(a, f) {
            if (("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) && this.isDrag) {
                var b = f - this.dragStartPoint.y,
                    c = a - this.dragStartPoint.x,
                    e = 0 <= this.zoomType.indexOf("x"),
                    g = 0 <= this.zoomType.indexOf("y"),
                    h = !1;
                this.resetOverlayedCanvas();
                if ("xySwapped" === this.plotInfo.axisPlacement) var l = g,
                    g = e,
                    e = l;
                if (this.panEnabled || this.zoomEnabled) {
                    if (this.panEnabled)
                        for (e = g = 0; e < this._axes.length; e++) b = this._axes[e], b.logarithmic ? b.viewportMinimum < b.minimum ? (g = b.minimum / b.viewportMinimum, b.sessionVariables.newViewportMinimum = b.viewportMinimum * g, b.sessionVariables.newViewportMaximum = b.viewportMaximum * g, h = !0) : b.viewportMaximum > b.maximum && (g = b.viewportMaximum / b.maximum, b.sessionVariables.newViewportMinimum =
                            b.viewportMinimum / g, b.sessionVariables.newViewportMaximum = b.viewportMaximum / g, h = !0) : b.viewportMinimum < b.minimum ? (g = b.minimum - b.viewportMinimum, b.sessionVariables.newViewportMinimum = b.viewportMinimum + g, b.sessionVariables.newViewportMaximum = b.viewportMaximum + g, h = !0) : b.viewportMaximum > b.maximum && (g = b.viewportMaximum - b.maximum, b.sessionVariables.newViewportMinimum = b.viewportMinimum - g, b.sessionVariables.newViewportMaximum = b.viewportMaximum - g, h = !0);
                    else if ((!e || 2 < Math.abs(c)) && (!g || 2 < Math.abs(b)) && this.zoomEnabled) {
                        if (!this.dragStartPoint) return;
                        b = e ? this.dragStartPoint.x : this.plotArea.x1;
                        c = g ? this.dragStartPoint.y : this.plotArea.y1;
                        e = e ? a : this.plotArea.x2;
                        g = g ? f : this.plotArea.y2;
                        2 < Math.abs(b - e) && 2 < Math.abs(c - g) && this._zoomPanToSelectedRegion(b, c, e, g) && (h = !0)
                    }
                    h && (this._ignoreNextEvent = !0, this._dispatchRangeEvent("rangeChanging", "zoom"), this.render(), this._dispatchRangeEvent("rangeChanged", "zoom"), h && (this.zoomEnabled && "none" === this._zoomButton.style.display) && (Ma(this._zoomButton, this._resetButton), va(this, this._zoomButton, "pan"), va(this, this._resetButton,
                        "reset")))
                }
            }
            this.isDrag = !1;
            if ("none" !== this.plotInfo.axisPlacement) {
                this.resetOverlayedCanvas();
                if (this.axisX && 0 < this.axisX.length)
                    for (h = 0; h < this.axisX.length; h++) this.axisX[h].crosshair && this.axisX[h].crosshair.enabled && this.axisX[h].renderCrosshair(a, f);
                if (this.axisX2 && 0 < this.axisX2.length)
                    for (h = 0; h < this.axisX2.length; h++) this.axisX2[h].crosshair && this.axisX2[h].crosshair.enabled && this.axisX2[h].renderCrosshair(a, f);
                if (this.axisY && 0 < this.axisY.length)
                    for (h = 0; h < this.axisY.length; h++) this.axisY[h].crosshair &&
                    this.axisY[h].crosshair.enabled && this.axisY[h].renderCrosshair(a, f);
                if (this.axisY2 && 0 < this.axisY2.length)
                    for (h = 0; h < this.axisY2.length; h++) this.axisY2[h].crosshair && this.axisY2[h].crosshair.enabled && this.axisY2[h].renderCrosshair(a, f)
            }
        };
        q.prototype._plotAreaMouseMove = function(a, f) {
            if (this.isDrag && "none" !== this.plotInfo.axisPlacement) {
                var b = 0,
                    c = 0,
                    e = b = null,
                    e = 0 <= this.zoomType.indexOf("x"),
                    g = 0 <= this.zoomType.indexOf("y"),
                    h = this;
                "xySwapped" === this.plotInfo.axisPlacement && (b = g, g = e, e = b);
                b = this.dragStartPoint.x -
                    a;
                c = this.dragStartPoint.y - f;
                2 < Math.abs(b) && 8 > Math.abs(b) && (this.panEnabled || this.zoomEnabled) ? this.toolTip.hide() : this.panEnabled || this.zoomEnabled || this.toolTip.mouseMoveHandler(a, f);
                if ((!e || 2 < Math.abs(b) || !g || 2 < Math.abs(c)) && (this.panEnabled || this.zoomEnabled))
                    if (this.panEnabled) e = {
                        x1: e ? this.plotArea.x1 + b : this.plotArea.x1,
                        y1: g ? this.plotArea.y1 + c : this.plotArea.y1,
                        x2: e ? this.plotArea.x2 + b : this.plotArea.x2,
                        y2: g ? this.plotArea.y2 + c : this.plotArea.y2
                    }, clearTimeout(h._panTimerId), h._panTimerId = setTimeout(function(c,
                                                                                        b, e, d) {
                        return function() {
                            h._zoomPanToSelectedRegion(c, b, e, d, !0) && (h._dispatchRangeEvent("rangeChanging", "pan"), h.render(), h._dispatchRangeEvent("rangeChanged", "pan"), h.dragStartPoint.x = a, h.dragStartPoint.y = f)
                        }
                    }(e.x1, e.y1, e.x2, e.y2), 0);
                    else if (this.zoomEnabled) {
                        this.resetOverlayedCanvas();
                        b = this.overlaidCanvasCtx.globalAlpha;
                        this.overlaidCanvasCtx.fillStyle = "#A89896";
                        var c = e ? this.dragStartPoint.x : this.plotArea.x1,
                            l = g ? this.dragStartPoint.y : this.plotArea.y1,
                            t = e ? a - this.dragStartPoint.x : this.plotArea.x2 -
                                this.plotArea.x1,
                            k = g ? f - this.dragStartPoint.y : this.plotArea.y2 - this.plotArea.y1;
                        this.validateRegion(c, l, e ? a : this.plotArea.x2 - this.plotArea.x1, g ? f : this.plotArea.y2 - this.plotArea.y1, "xy" !== this.zoomType).isValid && (this.resetOverlayedCanvas(), this.overlaidCanvasCtx.fillStyle = "#99B2B5");
                        this.overlaidCanvasCtx.globalAlpha = 0.7;
                        this.overlaidCanvasCtx.fillRect(c, l, t, k);
                        this.overlaidCanvasCtx.globalAlpha = b
                    }
            } else if (this.toolTip.mouseMoveHandler(a, f), "none" !== this.plotInfo.axisPlacement) {
                if (this.axisX && 0 < this.axisX.length)
                    for (e =
                             0; e < this.axisX.length; e++) this.axisX[e].crosshair && this.axisX[e].crosshair.enabled && this.axisX[e].renderCrosshair(a, f);
                if (this.axisX2 && 0 < this.axisX2.length)
                    for (e = 0; e < this.axisX2.length; e++) this.axisX2[e].crosshair && this.axisX2[e].crosshair.enabled && this.axisX2[e].renderCrosshair(a, f);
                if (this.axisY && 0 < this.axisY.length)
                    for (e = 0; e < this.axisY.length; e++) this.axisY[e].crosshair && this.axisY[e].crosshair.enabled && this.axisY[e].renderCrosshair(a, f);
                if (this.axisY2 && 0 < this.axisY2.length)
                    for (e = 0; e < this.axisY2.length; e++) this.axisY2[e].crosshair &&
                    this.axisY2[e].crosshair.enabled && this.axisY2[e].renderCrosshair(a, f)
            }
        };
        q.prototype._zoomPanToSelectedRegion = function(a, f, b, c, e) {
            a = this.validateRegion(a, f, b, c, e);
            f = a.axesWithValidRange;
            b = a.axesRanges;
            if (a.isValid)
                for (c = 0; c < f.length; c++) e = b[c], f[c].setViewPortRange(e.val1, e.val2);
            return a.isValid
        };
        q.prototype.validateRegion = function(a, f, b, c, e) {
            e = e || !1;
            for (var g = 0 <= this.zoomType.indexOf("x"), h = 0 <= this.zoomType.indexOf("y"), l = !1, t = [], k = [], r = [], p = 0; p < this._axes.length; p++)("axisX" === this._axes[p].type &&
                g || "axisY" === this._axes[p].type && h) && k.push(this._axes[p]);
            for (h = 0; h < k.length; h++) {
                var p = k[h],
                    g = !1,
                    n = p.convertPixelToValue({
                        x: a,
                        y: f
                    }),
                    d = p.convertPixelToValue({
                        x: b,
                        y: c
                    });
                if (n > d) var w = d,
                    d = n,
                    n = w;
                if (p.scaleBreaks)
                    for (w = 0; !g && w < p.scaleBreaks._appliedBreaks.length; w++) g = p.scaleBreaks._appliedBreaks[w].startValue <= n && p.scaleBreaks._appliedBreaks[w].endValue >= d;
                if (isFinite(p.dataInfo.minDiff))
                    if (w = p.getApparentDifference(n, d, null, !0), !(g || !(this.panEnabled && p.scaleBreaks && p.scaleBreaks._appliedBreaks.length) &&
                            (p.logarithmic && w < Math.pow(p.dataInfo.minDiff, 3) || !p.logarithmic && w < 3 * Math.abs(p.dataInfo.minDiff)) || n < p.minimum || d > p.maximum)) t.push(p), r.push({
                        val1: n,
                        val2: d
                    }), l = !0;
                    else if (!e) {
                        l = !1;
                        break
                    }
            }
            return {
                isValid: l,
                axesWithValidRange: t,
                axesRanges: r
            }
        };
        q.prototype.preparePlotArea = function() {
            var a = this.plotArea;
            !v && (0 < a.x1 || 0 < a.y1) && a.ctx.translate(a.x1, a.y1);
            if ((this.axisX[0] || this.axisX2[0]) && (this.axisY[0] || this.axisY2[0])) {
                var f = this.axisX[0] ? this.axisX[0].lineCoordinates : this.axisX2[0].lineCoordinates;
                if (this.axisY && 0 < this.axisY.length && this.axisY[0]) {
                    var b = this.axisY[0];
                    a.x1 = f.x1 < f.x2 ? f.x1 : b.lineCoordinates.x1;
                    a.y1 = f.y1 < b.lineCoordinates.y1 ? f.y1 : b.lineCoordinates.y1;
                    a.x2 = f.x2 > b.lineCoordinates.x2 ? f.x2 : b.lineCoordinates.x2;
                    a.y2 = f.y2 > f.y1 ? f.y2 : b.lineCoordinates.y2;
                    a.width = a.x2 - a.x1;
                    a.height = a.y2 - a.y1
                }
                this.axisY2 && 0 < this.axisY2.length && this.axisY2[0] && (b = this.axisY2[0], a.x1 = f.x1 < f.x2 ? f.x1 : b.lineCoordinates.x1, a.y1 = f.y1 < b.lineCoordinates.y1 ? f.y1 : b.lineCoordinates.y1, a.x2 = f.x2 > b.lineCoordinates.x2 ?
                    f.x2 : b.lineCoordinates.x2, a.y2 = f.y2 > f.y1 ? f.y2 : b.lineCoordinates.y2, a.width = a.x2 - a.x1, a.height = a.y2 - a.y1)
            } else f = this.layoutManager.getFreeSpace(), a.x1 = f.x1, a.x2 = f.x2, a.y1 = f.y1, a.y2 = f.y2, a.width = f.width, a.height = f.height;
            v || (a.canvas.width = a.width, a.canvas.height = a.height, a.canvas.style.left = a.x1 + "px", a.canvas.style.top = a.y1 + "px", (0 < a.x1 || 0 < a.y1) && a.ctx.translate(-a.x1, -a.y1));
            a.layoutManager = new Ea(a.x1, a.y1, a.x2, a.y2, 2)
        };
        q.prototype.renderIndexLabels = function(a) {
            var f = a || this.plotArea.ctx,
                b = this.plotArea,
                c = 0,
                e = 0,
                g = 0,
                h = 0,
                l = c = h = e = g = 0,
                t = 0;
            for (a = 0; a < this._indexLabels.length; a++) {
                var k = this._indexLabels[a],
                    r = k.chartType.toLowerCase(),
                    p, n, l = na("indexLabelFontColor", k.dataPoint, k.dataSeries),
                    t = na("indexLabelFontSize", k.dataPoint, k.dataSeries);
                p = na("indexLabelFontFamily", k.dataPoint, k.dataSeries);
                n = na("indexLabelFontStyle", k.dataPoint, k.dataSeries);
                var h = na("indexLabelFontWeight", k.dataPoint, k.dataSeries),
                    d = na("indexLabelBackgroundColor", k.dataPoint, k.dataSeries),
                    e = na("indexLabelMaxWidth", k.dataPoint, k.dataSeries),
                    g = na("indexLabelWrap", k.dataPoint, k.dataSeries),
                    w = na("indexLabelLineDashType", k.dataPoint, k.dataSeries),
                    m = na("indexLabelLineColor", k.dataPoint, k.dataSeries),
                    D = y(k.dataPoint.indexLabelLineThickness) ? y(k.dataSeries.options.indexLabelLineThickness) ? 0 : k.dataSeries.options.indexLabelLineThickness : k.dataPoint.indexLabelLineThickness,
                    c = 0 < D ? Math.min(10, ("normal" === this.plotInfo.axisPlacement ? this.plotArea.height : this.plotArea.width) << 0) : 0,
                    u = {
                        percent: null,
                        total: null
                    },
                    S = null;
                if (0 <= k.dataSeries.type.indexOf("stacked") ||
                    "pie" === k.dataSeries.type || "doughnut" === k.dataSeries.type) u = this.getPercentAndTotal(k.dataSeries, k.dataPoint);
                if (k.dataSeries.indexLabelFormatter || k.dataPoint.indexLabelFormatter) S = {
                    chart: this,
                    dataSeries: k.dataSeries,
                    dataPoint: k.dataPoint,
                    index: k.indexKeyword,
                    total: u.total,
                    percent: u.percent
                };
                var ca = k.dataPoint.indexLabelFormatter ? k.dataPoint.indexLabelFormatter(S) : k.dataPoint.indexLabel ? this.replaceKeywordsWithValue(k.dataPoint.indexLabel, k.dataPoint, k.dataSeries, null, k.indexKeyword) : k.dataSeries.indexLabelFormatter ?
                    k.dataSeries.indexLabelFormatter(S) : k.dataSeries.indexLabel ? this.replaceKeywordsWithValue(k.dataSeries.indexLabel, k.dataPoint, k.dataSeries, null, k.indexKeyword) : null;
                if (null !== ca && "" !== ca) {
                    var u = na("indexLabelPlacement", k.dataPoint, k.dataSeries),
                        S = na("indexLabelOrientation", k.dataPoint, k.dataSeries),
                        s = k.direction,
                        q = k.dataSeries.axisX,
                        A = k.dataSeries.axisY,
                        x = !1,
                        d = new la(f, {
                            x: 0,
                            y: 0,
                            maxWidth: e ? e : 0.5 * this.width,
                            maxHeight: g ? 5 * t : 1.5 * t,
                            angle: "horizontal" === S ? 0 : -90,
                            text: ca,
                            padding: 0,
                            backgroundColor: d,
                            horizontalAlign: "left",
                            fontSize: t,
                            fontFamily: p,
                            fontWeight: h,
                            fontColor: l,
                            fontStyle: n,
                            textBaseline: "top"
                        });
                    d.measureText();
                    k.dataSeries.indexLabelMaxWidth = d.maxWidth;
                    if ("stackedarea100" === r) {
                        if (k.point.x < b.x1 || k.point.x > b.x2 || k.point.y < b.y1 - 1 || k.point.y > b.y2 + 1) continue
                    } else if ("rangearea" === r || "rangesplinearea" === r) {
                        if (k.dataPoint.x < q.viewportMinimum || k.dataPoint.x > q.viewportMaximum || Math.max.apply(null, k.dataPoint.y) < A.viewportMinimum || Math.min.apply(null, k.dataPoint.y) > A.viewportMaximum) continue
                    } else if (0 <= r.indexOf("line") ||
                        0 <= r.indexOf("area") || 0 <= r.indexOf("bubble") || 0 <= r.indexOf("scatter")) {
                        if (k.dataPoint.x < q.viewportMinimum || k.dataPoint.x > q.viewportMaximum || k.dataPoint.y < A.viewportMinimum || k.dataPoint.y > A.viewportMaximum) continue
                    } else if (0 <= r.indexOf("column") || "waterfall" === r || "error" === r && !k.axisSwapped) {
                        if (k.dataPoint.x < q.viewportMinimum || k.dataPoint.x > q.viewportMaximum || k.bounds.y1 > b.y2 || k.bounds.y2 < b.y1) continue
                    } else if (0 <= r.indexOf("bar") || "error" === r) {
                        if (k.dataPoint.x < q.viewportMinimum || k.dataPoint.x > q.viewportMaximum ||
                            k.bounds.x1 > b.x2 || k.bounds.x2 < b.x1) continue
                    } else if ("candlestick" === r || "ohlc" === r) {
                        if (k.dataPoint.x < q.viewportMinimum || k.dataPoint.x > q.viewportMaximum || Math.max.apply(null, k.dataPoint.y) < A.viewportMinimum || Math.min.apply(null, k.dataPoint.y) > A.viewportMaximum) continue
                    } else if (k.dataPoint.x < q.viewportMinimum || k.dataPoint.x > q.viewportMaximum) continue;
                    e = h = 2;
                    "horizontal" === S ? (l = d.width, t = d.height) : (t = d.width, l = d.height);
                    if ("normal" === this.plotInfo.axisPlacement) {
                        if (0 <= r.indexOf("line") || 0 <= r.indexOf("area")) u =
                            "auto", h = 4;
                        else if (0 <= r.indexOf("stacked")) "auto" === u && (u = "inside");
                        else if ("bubble" === r || "scatter" === r) u = "inside";
                        p = k.point.x - l / 2;
                        "inside" !== u ? (e = b.y1, g = b.y2, 0 < s ? (n = k.point.y - t - h - c, n < e && (n = "auto" === u ? Math.max(k.point.y, e) + h + c : e + h + c, x = n + t > k.point.y)) : (n = k.point.y + h + c, n > g - t - h - c && (n = "auto" === u ? Math.min(k.point.y, g) - t - h - c : g - t - h - c, x = n < k.point.y))) : (e = Math.max(k.bounds.y1, b.y1), g = Math.min(k.bounds.y2, b.y2), c = 0 <= r.indexOf("range") || "error" === r ? 0 < s ? Math.max(k.bounds.y1, b.y1) + t / 2 + h : Math.min(k.bounds.y2, b.y2) -
                            t / 2 - h : (Math.max(k.bounds.y1, b.y1) + Math.min(k.bounds.y2, b.y2)) / 2, 0 < s ? (n = Math.max(k.point.y, c) - t / 2, n < e && ("bubble" === r || "scatter" === r) && (n = Math.max(k.point.y - t - h, b.y1 + h))) : (n = Math.min(k.point.y, c) - t / 2, n > g - t - h && ("bubble" === r || "scatter" === r) && (n = Math.min(k.point.y + h, b.y2 - t - h))), n = Math.min(n, g - t))
                    } else 0 <= r.indexOf("line") || 0 <= r.indexOf("area") || 0 <= r.indexOf("scatter") ? (u = "auto", e = 4) : 0 <= r.indexOf("stacked") ? "auto" === u && (u = "inside") : "bubble" === r && (u = "inside"), n = k.point.y - t / 2, "inside" !== u ? (h = b.x1, g = b.x2,
                        0 > s ? (p = k.point.x - l - e - c, p < h && (p = "auto" === u ? Math.max(k.point.x, h) + e + c : h + e + c, x = p + l > k.point.x)) : (p = k.point.x + e + c, p > g - l - e - c && (p = "auto" === u ? Math.min(k.point.x, g) - l - e - c : g - l - e - c, x = p < k.point.x))) : (h = Math.max(k.bounds.x1, b.x1), Math.min(k.bounds.x2, b.x2), c = 0 <= r.indexOf("range") || "error" === r ? 0 > s ? Math.max(k.bounds.x1, b.x1) + l / 2 + e : Math.min(k.bounds.x2, b.x2) - l / 2 - e : (Math.max(k.bounds.x1, b.x1) + Math.min(k.bounds.x2, b.x2)) / 2, p = 0 > s ? Math.max(k.point.x, c) - l / 2 : Math.min(k.point.x, c) - l / 2, p = Math.max(p, h));
                    "vertical" === S && (n +=
                        t);
                    d.x = p;
                    d.y = n;
                    d.render(!0);
                    D && ("inside" !== u && (0 > r.indexOf("bar") && ("error" !== r || !k.axisSwapped) && k.point.x > b.x1 && k.point.x < b.x2 || !x) && (0 > r.indexOf("column") && ("error" !== r || k.axisSwapped) && k.point.y > b.y1 && k.point.y < b.y2 || !x)) && (f.lineWidth = D, f.strokeStyle = m ? m : "gray", f.setLineDash && f.setLineDash(G(w, D)), f.beginPath(), f.moveTo(k.point.x, k.point.y), 0 <= r.indexOf("bar") || "error" === r && k.axisSwapped ? f.lineTo(p + (0 < k.direction ? 0 : l), n + ("horizontal" === S ? t : -t) / 2) : 0 <= r.indexOf("column") || "error" === r && !k.axisSwapped ?
                        f.lineTo(p + l / 2, n + ((0 < k.direction ? t : -t) + ("horizontal" === S ? t : -t)) / 2) : f.lineTo(p + l / 2, n + ((n < k.point.y ? t : -t) + ("horizontal" === S ? t : -t)) / 2), f.stroke())
                }
            }
            f = {
                source: f,
                dest: this.plotArea.ctx,
                animationCallback: H.fadeInAnimation,
                easingFunction: H.easing.easeInQuad,
                animationBase: 0,
                startTimePercent: 0.7
            };
            for (a = 0; a < this._indexLabels.length; a++) k = this._indexLabels[a], d = na("indexLabelBackgroundColor", k.dataPoint, k.dataSeries), k.dataSeries.indexLabelBackgroundColor = y(d) ? v ? "transparent" : null : d;
            return f
        };
        q.prototype.renderLine =
            function(a) {
                var f = a.targetCanvasCtx || this.plotArea.ctx,
                    b = v ? this._preRenderCtx : f;
                if (!(0 >= a.dataSeriesIndexes.length)) {
                    var c = this._eventManager.ghostCtx;
                    b.save();
                    var e = this.plotArea;
                    b.beginPath();
                    b.rect(e.x1, e.y1, e.width, e.height);
                    b.clip();
                    for (var g = [], h, l = 0; l < a.dataSeriesIndexes.length; l++) {
                        var t = a.dataSeriesIndexes[l],
                            k = this.data[t];
                        b.lineWidth = k.lineThickness;
                        var r = k.dataPoints,
                            p = "solid";
                        if (b.setLineDash) {
                            var n = G(k.nullDataLineDashType, k.lineThickness),
                                p = k.lineDashType,
                                d = G(p, k.lineThickness);
                            b.setLineDash(d)
                        }
                        var w =
                            k.id;
                        this._eventManager.objectMap[w] = {
                            objectType: "dataSeries",
                            dataSeriesIndex: t
                        };
                        w = R(w);
                        c.strokeStyle = w;
                        c.lineWidth = 0 < k.lineThickness ? Math.max(k.lineThickness, 4) : 0;
                        var w = k._colorSet,
                            m = w = k.lineColor = k.options.lineColor ? k.options.lineColor : w[0];
                        b.strokeStyle = w;
                        var D = !0,
                            u = 0,
                            S, ca;
                        b.beginPath();
                        if (0 < r.length) {
                            for (var s = !1, u = 0; u < r.length; u++)
                                if (S = r[u].x.getTime ? r[u].x.getTime() : r[u].x, !(S < a.axisX.dataInfo.viewPortMin || S > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !s)))
                                    if ("number" !== typeof r[u].y) 0 <
                                    u && !(k.connectNullData || s || D) && (b.stroke(), v && c.stroke()), s = !0;
                                    else {
                                        S = a.axisX.convertValueToPixel(S);
                                        ca = a.axisY.convertValueToPixel(r[u].y);
                                        var q = k.dataPointIds[u];
                                        this._eventManager.objectMap[q] = {
                                            id: q,
                                            objectType: "dataPoint",
                                            dataSeriesIndex: t,
                                            dataPointIndex: u,
                                            x1: S,
                                            y1: ca
                                        };
                                        D || s ? (!D && k.connectNullData ? (b.setLineDash && (k.options.nullDataLineDashType || p === k.lineDashType && k.lineDashType !== k.nullDataLineDashType) && (b.stroke(), b.beginPath(), b.moveTo(h.x, h.y), p = k.nullDataLineDashType, b.setLineDash(n)), b.lineTo(S,
                                            ca), v && c.lineTo(S, ca)) : (b.beginPath(), b.moveTo(S, ca), v && (c.beginPath(), c.moveTo(S, ca))), s = D = !1) : (b.lineTo(S, ca), v && c.lineTo(S, ca), 0 == u % 500 && (b.stroke(), b.beginPath(), b.moveTo(S, ca), v && (c.stroke(), c.beginPath(), c.moveTo(S, ca))));
                                        h = {
                                            x: S,
                                            y: ca
                                        };
                                        u < r.length - 1 && (m !== (r[u].lineColor || w) || p !== (r[u].lineDashType || k.lineDashType)) && (b.stroke(), b.beginPath(), b.moveTo(S, ca), m = r[u].lineColor || w, b.strokeStyle = m, b.setLineDash && (r[u].lineDashType ? (p = r[u].lineDashType, b.setLineDash(G(p, k.lineThickness))) : (p = k.lineDashType,
                                            b.setLineDash(d))));
                                        if (0 < r[u].markerSize || 0 < k.markerSize) {
                                            var A = k.getMarkerProperties(u, S, ca, b);
                                            g.push(A);
                                            q = R(q);
                                            v && g.push({
                                                x: S,
                                                y: ca,
                                                ctx: c,
                                                type: A.type,
                                                size: A.size,
                                                color: q,
                                                borderColor: q,
                                                borderThickness: A.borderThickness
                                            })
                                        }(r[u].indexLabel || k.indexLabel || r[u].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({
                                            chartType: "line",
                                            dataPoint: r[u],
                                            dataSeries: k,
                                            point: {
                                                x: S,
                                                y: ca
                                            },
                                            direction: 0 > r[u].y === a.axisY.reversed ? 1 : -1,
                                            color: w
                                        })
                                    }
                            b.stroke();
                            v && c.stroke()
                        }
                    }
                    ja.drawMarkers(g);
                    v && (f.drawImage(this._preRenderCanvas,
                        0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(e.x1, e.y1, e.width, e.height), c.beginPath());
                    b.restore();
                    b.beginPath();
                    return {
                        source: f,
                        dest: this.plotArea.ctx,
                        animationCallback: H.xClipAnimation,
                        easingFunction: H.easing.linear,
                        animationBase: 0
                    }
                }
            };
        q.prototype.renderStepLine = function(a) {
            var f = a.targetCanvasCtx || this.plotArea.ctx,
                b = v ? this._preRenderCtx : f;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = this._eventManager.ghostCtx;
                b.save();
                var e = this.plotArea;
                b.beginPath();
                b.rect(e.x1, e.y1, e.width, e.height);
                b.clip();
                for (var g = [], h, l = 0; l < a.dataSeriesIndexes.length; l++) {
                    var t = a.dataSeriesIndexes[l],
                        k = this.data[t];
                    b.lineWidth = k.lineThickness;
                    var r = k.dataPoints,
                        p = "solid";
                    if (b.setLineDash) {
                        var n = G(k.nullDataLineDashType, k.lineThickness),
                            p = k.lineDashType,
                            d = G(p, k.lineThickness);
                        b.setLineDash(d)
                    }
                    var w = k.id;
                    this._eventManager.objectMap[w] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: t
                    };
                    w = R(w);
                    c.strokeStyle = w;
                    c.lineWidth = 0 < k.lineThickness ? Math.max(k.lineThickness, 4) : 0;
                    var w = k._colorSet,
                        m = w = k.lineColor = k.options.lineColor ? k.options.lineColor : w[0];
                    b.strokeStyle = w;
                    var D = !0,
                        u = 0,
                        S, ca;
                    b.beginPath();
                    if (0 < r.length) {
                        for (var s = !1, u = 0; u < r.length; u++)
                            if (S = r[u].getTime ? r[u].x.getTime() : r[u].x, !(S < a.axisX.dataInfo.viewPortMin || S > a.axisX.dataInfo.viewPortMax &&
                                    (!k.connectNullData || !s)))
                                if ("number" !== typeof r[u].y) 0 < u && !(k.connectNullData || s || D) && (b.stroke(), v && c.stroke()), s = !0;
                                else {
                                    var q = ca;
                                    S = a.axisX.convertValueToPixel(S);
                                    ca = a.axisY.convertValueToPixel(r[u].y);
                                    var A = k.dataPointIds[u];
                                    this._eventManager.objectMap[A] = {
                                        id: A,
                                        objectType: "dataPoint",
                                        dataSeriesIndex: t,
                                        dataPointIndex: u,
                                        x1: S,
                                        y1: ca
                                    };
                                    D || s ? (!D && k.connectNullData ? (b.setLineDash && (k.options.nullDataLineDashType || p === k.lineDashType && k.lineDashType !== k.nullDataLineDashType) && (b.stroke(), b.beginPath(),
                                        b.moveTo(h.x, h.y), p = k.nullDataLineDashType, b.setLineDash(n)), b.lineTo(S, q), b.lineTo(S, ca), v && (c.lineTo(S, q), c.lineTo(S, ca))) : (b.beginPath(), b.moveTo(S, ca), v && (c.beginPath(), c.moveTo(S, ca))), s = D = !1) : (b.lineTo(S, q), v && c.lineTo(S, q), b.lineTo(S, ca), v && c.lineTo(S, ca), 0 == u % 500 && (b.stroke(), b.beginPath(), b.moveTo(S, ca), v && (c.stroke(), c.beginPath(), c.moveTo(S, ca))));
                                    h = {
                                        x: S,
                                        y: ca
                                    };
                                    u < r.length - 1 && (m !== (r[u].lineColor || w) || p !== (r[u].lineDashType || k.lineDashType)) && (b.stroke(), b.beginPath(), b.moveTo(S, ca), m = r[u].lineColor ||
                                        w, b.strokeStyle = m, b.setLineDash && (r[u].lineDashType ? (p = r[u].lineDashType, b.setLineDash(G(p, k.lineThickness))) : (p = k.lineDashType, b.setLineDash(d))));
                                    if (0 < r[u].markerSize || 0 < k.markerSize) q = k.getMarkerProperties(u, S, ca, b), g.push(q), A = R(A), v && g.push({
                                        x: S,
                                        y: ca,
                                        ctx: c,
                                        type: q.type,
                                        size: q.size,
                                        color: A,
                                        borderColor: A,
                                        borderThickness: q.borderThickness
                                    });
                                    (r[u].indexLabel || k.indexLabel || r[u].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({
                                        chartType: "stepLine",
                                        dataPoint: r[u],
                                        dataSeries: k,
                                        point: {
                                            x: S,
                                            y: ca
                                        },
                                        direction: 0 > r[u].y === a.axisY.reversed ? 1 : -1,
                                        color: w
                                    })
                                }
                        b.stroke();
                        v && c.stroke()
                    }
                }
                ja.drawMarkers(g);
                v && (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(e.x1, e.y1, e.width,
                    e.height), c.beginPath());
                b.restore();
                b.beginPath();
                return {
                    source: f,
                    dest: this.plotArea.ctx,
                    animationCallback: H.xClipAnimation,
                    easingFunction: H.easing.linear,
                    animationBase: 0
                }
            }
        };
        q.prototype.renderSpline = function(a) {
            function f(a) {
                a = x(a, 2);
                if (0 < a.length) {
                    c.beginPath();
                    v && e.beginPath();
                    c.moveTo(a[0].x, a[0].y);
                    a[0].newStrokeStyle && (c.strokeStyle = a[0].newStrokeStyle);
                    a[0].newLineDashArray && c.setLineDash(a[0].newLineDashArray);
                    v && e.moveTo(a[0].x, a[0].y);
                    for (var b = 0; b < a.length - 3; b += 3)
                        if (c.bezierCurveTo(a[b +
                            1].x, a[b + 1].y, a[b + 2].x, a[b + 2].y, a[b + 3].x, a[b + 3].y), v && e.bezierCurveTo(a[b + 1].x, a[b + 1].y, a[b + 2].x, a[b + 2].y, a[b + 3].x, a[b + 3].y), 0 < b && 0 === b % 3E3 || a[b + 3].newStrokeStyle || a[b + 3].newLineDashArray) c.stroke(), c.beginPath(), c.moveTo(a[b + 3].x, a[b + 3].y), a[b + 3].newStrokeStyle && (c.strokeStyle = a[b + 3].newStrokeStyle), a[b + 3].newLineDashArray && c.setLineDash(a[b + 3].newLineDashArray), v && (e.stroke(), e.beginPath(), e.moveTo(a[b + 3].x, a[b + 3].y));
                    c.stroke();
                    v && e.stroke()
                }
            }
            var b = a.targetCanvasCtx || this.plotArea.ctx,
                c = v ? this._preRenderCtx :
                    b;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e = this._eventManager.ghostCtx;
                c.save();
                var g = this.plotArea;
                c.beginPath();
                c.rect(g.x1, g.y1, g.width, g.height);
                c.clip();
                for (var h = [], l = 0; l < a.dataSeriesIndexes.length; l++) {
                    var t = a.dataSeriesIndexes[l],
                        k = this.data[t];
                    c.lineWidth = k.lineThickness;
                    var r = k.dataPoints,
                        p = "solid";
                    if (c.setLineDash) {
                        var n = G(k.nullDataLineDashType, k.lineThickness),
                            p = k.lineDashType,
                            d = G(p, k.lineThickness);
                        c.setLineDash(d)
                    }
                    var w = k.id;
                    this._eventManager.objectMap[w] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: t
                    };
                    w = R(w);
                    e.strokeStyle = w;
                    e.lineWidth = 0 < k.lineThickness ? Math.max(k.lineThickness, 4) : 0;
                    var w = k._colorSet,
                        m = w = k.lineColor = k.options.lineColor ? k.options.lineColor : w[0];
                    c.strokeStyle = w;
                    var D = 0,
                        u, S, q = [];
                    c.beginPath();
                    if (0 < r.length)
                        for (S = !1, D = 0; D < r.length; D++)
                            if (u = r[D].getTime ? r[D].x.getTime() : r[D].x, !(u < a.axisX.dataInfo.viewPortMin || u > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !S)))
                                if ("number" !== typeof r[D].y) 0 < D && !S && (k.connectNullData ? c.setLineDash && (0 < q.length && (k.options.nullDataLineDashType ||
                                    !r[D - 1].lineDashType)) && (q[q.length - 1].newLineDashArray = n, p = k.nullDataLineDashType) : (f(q), q = [])), S = !0;
                                else {
                                    u = a.axisX.convertValueToPixel(u);
                                    S = a.axisY.convertValueToPixel(r[D].y);
                                    var s = k.dataPointIds[D];
                                    this._eventManager.objectMap[s] = {
                                        id: s,
                                        objectType: "dataPoint",
                                        dataSeriesIndex: t,
                                        dataPointIndex: D,
                                        x1: u,
                                        y1: S
                                    };
                                    q[q.length] = {
                                        x: u,
                                        y: S
                                    };
                                    D < r.length - 1 && (m !== (r[D].lineColor || w) || p !== (r[D].lineDashType || k.lineDashType)) && (m = r[D].lineColor || w, q[q.length - 1].newStrokeStyle = m, c.setLineDash && (r[D].lineDashType ? (p =
                                        r[D].lineDashType, q[q.length - 1].newLineDashArray = G(p, k.lineThickness)) : (p = k.lineDashType, q[q.length - 1].newLineDashArray = d)));
                                    if (0 < r[D].markerSize || 0 < k.markerSize) {
                                        var y = k.getMarkerProperties(D, u, S, c);
                                        h.push(y);
                                        s = R(s);
                                        v && h.push({
                                            x: u,
                                            y: S,
                                            ctx: e,
                                            type: y.type,
                                            size: y.size,
                                            color: s,
                                            borderColor: s,
                                            borderThickness: y.borderThickness
                                        })
                                    }(r[D].indexLabel || k.indexLabel || r[D].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({
                                        chartType: "spline",
                                        dataPoint: r[D],
                                        dataSeries: k,
                                        point: {
                                            x: u,
                                            y: S
                                        },
                                        direction: 0 >
                                        r[D].y === a.axisY.reversed ? 1 : -1,
                                        color: w
                                    });
                                    S = !1
                                }
                    f(q)
                }
                ja.drawMarkers(h);
                v && (b.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(g.x1, g.y1, g.width, g.height), e.beginPath());
                c.restore();
                c.beginPath();
                return {
                    source: b,
                    dest: this.plotArea.ctx,
                    animationCallback: H.xClipAnimation,
                    easingFunction: H.easing.linear,
                    animationBase: 0
                }
            }
        };
        var V = function(a, f, b, c, e, g, h, l, t, k, r, p, n) {
            "undefined" === typeof n && (n = 1);
            h = h || 0;
            l = l || "black";
            var d = 15 < c - f && 15 < e - b ? 8 : 0.35 * Math.min(c - f, e - b);
            a.beginPath();
            a.moveTo(f, b);
            a.save();
            a.fillStyle = g;
            a.globalAlpha = n;
            a.fillRect(f, b, c - f, e - b);
            a.globalAlpha = 1;
            0 < h && (n = 0 === h % 2 ? 0 : 0.5, a.beginPath(), a.lineWidth = h, a.strokeStyle = l, a.moveTo(f, b), a.rect(f - n, b - n, c - f + 2 * n, e - b + 2 * n), a.stroke());
            a.restore();
            !0 === t && (a.save(), a.beginPath(), a.moveTo(f, b), a.lineTo(f + d, b + d), a.lineTo(c - d, b + d), a.lineTo(c, b), a.closePath(), h = a.createLinearGradient((c + f) / 2, b + d, (c + f) / 2, b), h.addColorStop(0, g), h.addColorStop(1, "rgba(255, 255, 255, .4)"), a.fillStyle = h, a.fill(), a.restore());
            !0 === k && (a.save(), a.beginPath(), a.moveTo(f, e), a.lineTo(f + d, e - d), a.lineTo(c - d, e - d), a.lineTo(c, e), a.closePath(), h = a.createLinearGradient((c + f) / 2, e - d, (c + f) / 2, e), h.addColorStop(0, g), h.addColorStop(1, "rgba(255, 255, 255, .4)"), a.fillStyle =
                h, a.fill(), a.restore());
            !0 === r && (a.save(), a.beginPath(), a.moveTo(f, b), a.lineTo(f + d, b + d), a.lineTo(f + d, e - d), a.lineTo(f, e), a.closePath(), h = a.createLinearGradient(f + d, (e + b) / 2, f, (e + b) / 2), h.addColorStop(0, g), h.addColorStop(1, "rgba(255, 255, 255, 0.1)"), a.fillStyle = h, a.fill(), a.restore());
            !0 === p && (a.save(), a.beginPath(), a.moveTo(c, b), a.lineTo(c - d, b + d), a.lineTo(c - d, e - d), a.lineTo(c, e), h = a.createLinearGradient(c - d, (e + b) / 2, c, (e + b) / 2), h.addColorStop(0, g), h.addColorStop(1, "rgba(255, 255, 255, 0.1)"), a.fillStyle =
                h, h.addColorStop(0, g), h.addColorStop(1, "rgba(255, 255, 255, 0.1)"), a.fillStyle = h, a.fill(), a.closePath(), a.restore())
        };
        q.prototype.renderColumn = function(a) {
            var f = a.targetCanvasCtx || this.plotArea.ctx,
                b = v ? this._preRenderCtx : f;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = null,
                    e = this.plotArea,
                    g = 0,
                    h, l, t, k = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    g = this.dataPointMinWidth = this.dataPointMinWidth ? this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth : 1,
                    r = this.dataPointMaxWidth =
                        this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.width, 0.9 * (this.plotArea.width / a.plotType.totalDataSeries)) << 0,
                    p = a.axisX.dataInfo.minDiff;
                isFinite(p) || (p = 0.3 * Math.abs(a.axisX.range));
                p = this.dataPointWidth = this.dataPointWidth ? this.dataPointWidth : 0.9 * (e.width * (a.axisX.logarithmic ? Math.log(p) / Math.log(a.axisX.range) : Math.abs(p) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
                this.dataPointMaxWidth && g > r && (g = Math.min(this.dataPointWidth ?
                    this.dataPointWidth : Infinity, r));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && r < g) && (r = Math.max(this.dataPointWidth ? this.dataPointWidth : -Infinity, g));
                p < g && (p = g);
                p > r && (p = r);
                b.save();
                v && this._eventManager.ghostCtx.save();
                b.beginPath();
                b.rect(e.x1, e.y1, e.width, e.height);
                b.clip();
                v && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
                for (r = 0; r < a.dataSeriesIndexes.length; r++) {
                    var n = a.dataSeriesIndexes[r],
                        d = this.data[n],
                        w = d.dataPoints;
                    if (0 < w.length)
                        for (var m = 5 < p && d.bevelEnabled ? !0 : !1, g = 0; g < w.length; g++)
                            if (w[g].getTime ? t = w[g].x.getTime() : t = w[g].x, !(t < a.axisX.dataInfo.viewPortMin || t > a.axisX.dataInfo.viewPortMax) && "number" === typeof w[g].y) {
                                h = a.axisX.convertValueToPixel(t);
                                l = a.axisY.convertValueToPixel(w[g].y);
                                h = a.axisX.reversed ? h + a.plotType.totalDataSeries * p / 2 - (a.previousDataSeriesCount + r) * p << 0 : h - a.plotType.totalDataSeries * p / 2 + (a.previousDataSeriesCount + r) * p << 0;
                                var D = a.axisX.reversed ? h - p << 0 : h + p << 0,
                                    u;
                                0 <= w[g].y ? u = k : (u =
                                    l, l = k);
                                l > u && (c = l, l = u, u = c);
                                c = w[g].color ? w[g].color : d._colorSet[g % d._colorSet.length];
                                V(b, h, l, D, u, c, 0, null, m && 0 <= w[g].y, 0 > w[g].y && m, !1, !1, d.fillOpacity);
                                c = d.dataPointIds[g];
                                this._eventManager.objectMap[c] = {
                                    id: c,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: n,
                                    dataPointIndex: g,
                                    x1: h,
                                    y1: l,
                                    x2: D,
                                    y2: u
                                };
                                c = R(c);
                                v && V(this._eventManager.ghostCtx, h, l, D, u, c, 0, null, !1, !1, !1, !1);
                                (w[g].indexLabel || d.indexLabel || w[g].indexLabelFormatter || d.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "column",
                                    dataPoint: w[g],
                                    dataSeries: d,
                                    point: {
                                        x: h + (D - h) / 2,
                                        y: 0 > w[g].y === a.axisY.reversed ? l : u
                                    },
                                    direction: 0 > w[g].y === a.axisY.reversed ? 1 : -1,
                                    bounds: {
                                        x1: h,
                                        y1: Math.min(l, u),
                                        x2: D,
                                        y2: Math.max(l, u)
                                    },
                                    color: c
                                })
                            }
                }
                v && (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas,
                    0, 0, this.width, this.height), b.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
                b.restore();
                return {
                    source: f,
                    dest: this.plotArea.ctx,
                    animationCallback: H.yScaleAnimation,
                    easingFunction: H.easing.easeOutQuart,
                    animationBase: k < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : k > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : k
                }
            }
        };
        q.prototype.renderStackedColumn = function(a) {
            var f = a.targetCanvasCtx || this.plotArea.ctx,
                b = v ? this._preRenderCtx : f;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = null,
                    e = this.plotArea,
                    g = [],
                    h = [],
                    l = [],
                    t = [],
                    k = 0,
                    r, p, n = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    k = this.dataPointMinWidth ? this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth : 1;
                r = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ? this.dataPointWidth : 0.15 * this.width << 0;
                var d = a.axisX.dataInfo.minDiff;
                isFinite(d) || (d = 0.3 * Math.abs(a.axisX.range));
                d = this.dataPointWidth ? this.dataPointWidth : 0.9 * (e.width * (a.axisX.logarithmic ? Math.log(d) / Math.log(a.axisX.range) : Math.abs(d) /
                    Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
                this.dataPointMaxWidth && k > r && (k = Math.min(this.dataPointWidth ? this.dataPointWidth : Infinity, r));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && r < k) && (r = Math.max(this.dataPointWidth ? this.dataPointWidth : -Infinity, k));
                d < k && (d = k);
                d > r && (d = r);
                b.save();
                v && this._eventManager.ghostCtx.save();
                b.beginPath();
                b.rect(e.x1, e.y1, e.width, e.height);
                b.clip();
                v && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height),
                    this._eventManager.ghostCtx.clip());
                for (var w = 0; w < a.dataSeriesIndexes.length; w++) {
                    var m = a.dataSeriesIndexes[w],
                        D = this.data[m],
                        u = D.dataPoints;
                    if (0 < u.length) {
                        var q = 5 < d && D.bevelEnabled ? !0 : !1;
                        b.strokeStyle = "#4572A7 ";
                        for (k = 0; k < u.length; k++)
                            if (c = u[k].x.getTime ? u[k].x.getTime() : u[k].x, !(c < a.axisX.dataInfo.viewPortMin || c > a.axisX.dataInfo.viewPortMax) && "number" === typeof u[k].y) {
                                r = a.axisX.convertValueToPixel(c);
                                var s = r - a.plotType.plotUnits.length * d / 2 + a.index * d << 0,
                                    y = s + d << 0,
                                    B;
                                if (a.axisY.logarithmic || a.axisY.scaleBreaks &&
                                    0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < u[k].y) l[c] = u[k].y + (l[c] ? l[c] : 0), 0 < l[c] && (p = a.axisY.convertValueToPixel(l[c]), B = "undefined" !== typeof g[c] ? g[c] : n, g[c] = p);
                                else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= u[k].y) t[c] = u[k].y + (t[c] ? t[c] : 0), B = a.axisY.convertValueToPixel(t[c]), p = "undefined" !== typeof h[c] ? h[c] : n, h[c] = B;
                                else if (p = a.axisY.convertValueToPixel(u[k].y), 0 <= u[k].y) {
                                    var A = "undefined" !== typeof g[c] ? g[c] : 0;
                                    p -= A;
                                    B = n - A;
                                    g[c] = A + (B - p)
                                } else A = h[c] ? h[c] : 0, B = p + A,
                                    p = n + A, h[c] = A + (B - p);
                                c = u[k].color ? u[k].color : D._colorSet[k % D._colorSet.length];
                                V(b, s, p, y, B, c, 0, null, q && 0 <= u[k].y, 0 > u[k].y && q, !1, !1, D.fillOpacity);
                                c = D.dataPointIds[k];
                                this._eventManager.objectMap[c] = {
                                    id: c,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: m,
                                    dataPointIndex: k,
                                    x1: s,
                                    y1: p,
                                    x2: y,
                                    y2: B
                                };
                                c = R(c);
                                v && V(this._eventManager.ghostCtx, s, p, y, B, c, 0, null, !1, !1, !1, !1);
                                (u[k].indexLabel || D.indexLabel || u[k].indexLabelFormatter || D.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "stackedColumn",
                                    dataPoint: u[k],
                                    dataSeries: D,
                                    point: {
                                        x: r,
                                        y: 0 <= u[k].y ? p : B
                                    },
                                    direction: 0 > u[k].y === a.axisY.reversed ? 1 : -1,
                                    bounds: {
                                        x1: s,
                                        y1: Math.min(p, B),
                                        x2: y,
                                        y2: Math.max(p, B)
                                    },
                                    color: c
                                })
                            }
                    }
                }
                v && (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    b.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
                b.restore();
                return {
                    source: f,
                    dest: this.plotArea.ctx,
                    animationCallback: H.yScaleAnimation,
                    easingFunction: H.easing.easeOutQuart,
                    animationBase: n < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : n > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : n
                }
            }
        };
        q.prototype.renderStackedColumn100 = function(a) {
            var f = a.targetCanvasCtx || this.plotArea.ctx,
                b = v ? this._preRenderCtx : f;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = null,
                    e = this.plotArea,
                    g = [],
                    h = [],
                    l = [],
                    t = [],
                    k = 0,
                    r, p, n = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    k = this.dataPointMinWidth ? this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth : 1;
                r = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ? this.dataPointWidth : 0.15 * this.width << 0;
                var d = a.axisX.dataInfo.minDiff;
                isFinite(d) || (d = 0.3 * Math.abs(a.axisX.range));
                d = this.dataPointWidth ? this.dataPointWidth : 0.9 * (e.width * (a.axisX.logarithmic ? Math.log(d) / Math.log(a.axisX.range) : Math.abs(d) / Math.abs(a.axisX.range)) /
                    a.plotType.plotUnits.length) << 0;
                this.dataPointMaxWidth && k > r && (k = Math.min(this.dataPointWidth ? this.dataPointWidth : Infinity, r));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && r < k) && (r = Math.max(this.dataPointWidth ? this.dataPointWidth : -Infinity, k));
                d < k && (d = k);
                d > r && (d = r);
                b.save();
                v && this._eventManager.ghostCtx.save();
                b.beginPath();
                b.rect(e.x1, e.y1, e.width, e.height);
                b.clip();
                v && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
                for (var w = 0; w < a.dataSeriesIndexes.length; w++) {
                    var m = a.dataSeriesIndexes[w],
                        D = this.data[m],
                        u = D.dataPoints;
                    if (0 < u.length)
                        for (var q = 5 < d && D.bevelEnabled ? !0 : !1, k = 0; k < u.length; k++)
                            if (c = u[k].x.getTime ? u[k].x.getTime() : u[k].x, !(c < a.axisX.dataInfo.viewPortMin || c > a.axisX.dataInfo.viewPortMax) && "number" === typeof u[k].y) {
                                r = a.axisX.convertValueToPixel(c);
                                p = 0 !== a.dataPointYSums[c] ? 100 * (u[k].y / a.dataPointYSums[c]) : 0;
                                var s = r - a.plotType.plotUnits.length * d / 2 + a.index * d << 0,
                                    y = s + d << 0,
                                    B;
                                if (a.axisY.logarithmic || a.axisY.scaleBreaks &&
                                    0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < u[k].y) {
                                    l[c] = p + ("undefined" !== typeof l[c] ? l[c] : 0);
                                    if (0 >= l[c]) continue;
                                    p = a.axisY.convertValueToPixel(l[c]);
                                    B = g[c] ? g[c] : n;
                                    g[c] = p
                                } else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= u[k].y) t[c] = p + ("undefined" !== typeof t[c] ? t[c] : 0), B = a.axisY.convertValueToPixel(t[c]), p = h[c] ? h[c] : n, h[c] = B;
                                else if (p = a.axisY.convertValueToPixel(p), 0 <= u[k].y) {
                                    var A = "undefined" !== typeof g[c] ? g[c] : 0;
                                    p -= A;
                                    B = n - A;
                                    g[c] = A + (B - p)
                                } else A = "undefined" !== typeof h[c] ?
                                    h[c] : 0, B = p + A, p = n + A, h[c] = A + (B - p);
                                c = u[k].color ? u[k].color : D._colorSet[k % D._colorSet.length];
                                V(b, s, p, y, B, c, 0, null, q && 0 <= u[k].y, 0 > u[k].y && q, !1, !1, D.fillOpacity);
                                c = D.dataPointIds[k];
                                this._eventManager.objectMap[c] = {
                                    id: c,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: m,
                                    dataPointIndex: k,
                                    x1: s,
                                    y1: p,
                                    x2: y,
                                    y2: B
                                };
                                c = R(c);
                                v && V(this._eventManager.ghostCtx, s, p, y, B, c, 0, null, !1, !1, !1, !1);
                                (u[k].indexLabel || D.indexLabel || u[k].indexLabelFormatter || D.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "stackedColumn100",
                                    dataPoint: u[k],
                                    dataSeries: D,
                                    point: {
                                        x: r,
                                        y: 0 <= u[k].y ? p : B
                                    },
                                    direction: 0 > u[k].y === a.axisY.reversed ? 1 : -1,
                                    bounds: {
                                        x1: s,
                                        y1: Math.min(p, B),
                                        x2: y,
                                        y2: Math.max(p, B)
                                    },
                                    color: c
                                })
                            }
                }
                v && (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width,
                    this.height), b.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
                b.restore();
                return {
                    source: f,
                    dest: this.plotArea.ctx,
                    animationCallback: H.yScaleAnimation,
                    easingFunction: H.easing.easeOutQuart,
                    animationBase: n < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : n > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : n
                }
            }
        };
        q.prototype.renderBar = function(a) {
            var f = a.targetCanvasCtx || this.plotArea.ctx,
                b = v ? this._preRenderCtx : f;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = null,
                    e = this.plotArea,
                    g = 0,
                    h, l, t, k = a.axisY.convertValueToPixel(a.axisY.logarithmic ?
                    a.axisY.viewportMinimum : 0),
                    g = this.dataPointMinWidth ? this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth : 1,
                    r = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / a.plotType.totalDataSeries)) << 0,
                    p = a.axisX.dataInfo.minDiff;
                isFinite(p) || (p = 0.3 * Math.abs(a.axisX.range));
                p = this.dataPointWidth ? this.dataPointWidth : 0.9 * (e.height * (a.axisX.logarithmic ? Math.log(p) / Math.log(a.axisX.range) : Math.abs(p) / Math.abs(a.axisX.range)) /
                    a.plotType.totalDataSeries) << 0;
                this.dataPointMaxWidth && g > r && (g = Math.min(this.dataPointWidth ? this.dataPointWidth : Infinity, r));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && r < g) && (r = Math.max(this.dataPointWidth ? this.dataPointWidth : -Infinity, g));
                p < g && (p = g);
                p > r && (p = r);
                b.save();
                v && this._eventManager.ghostCtx.save();
                b.beginPath();
                b.rect(e.x1, e.y1, e.width, e.height);
                b.clip();
                v && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
                for (r = 0; r < a.dataSeriesIndexes.length; r++) {
                    var n = a.dataSeriesIndexes[r],
                        d = this.data[n],
                        w = d.dataPoints;
                    if (0 < w.length) {
                        var m = 5 < p && d.bevelEnabled ? !0 : !1;
                        b.strokeStyle = "#4572A7 ";
                        for (g = 0; g < w.length; g++)
                            if (w[g].getTime ? t = w[g].x.getTime() : t = w[g].x, !(t < a.axisX.dataInfo.viewPortMin || t > a.axisX.dataInfo.viewPortMax) && "number" === typeof w[g].y) {
                                l = a.axisX.convertValueToPixel(t);
                                h = a.axisY.convertValueToPixel(w[g].y);
                                l = a.axisX.reversed ? l + a.plotType.totalDataSeries * p / 2 - (a.previousDataSeriesCount + r) * p << 0 : l - a.plotType.totalDataSeries *
                                    p / 2 + (a.previousDataSeriesCount + r) * p << 0;
                                var D = a.axisX.reversed ? l - p << 0 : l + p << 0,
                                    u;
                                0 <= w[g].y ? u = k : (u = h, h = k);
                                c = w[g].color ? w[g].color : d._colorSet[g % d._colorSet.length];
                                V(b, u, l, h, D, c, 0, null, m, !1, !1, !1, d.fillOpacity);
                                c = d.dataPointIds[g];
                                this._eventManager.objectMap[c] = {
                                    id: c,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: n,
                                    dataPointIndex: g,
                                    x1: u,
                                    y1: l,
                                    x2: h,
                                    y2: D
                                };
                                c = R(c);
                                v && V(this._eventManager.ghostCtx, u, l, h, D, c, 0, null, !1, !1, !1, !1);
                                (w[g].indexLabel || d.indexLabel || w[g].indexLabelFormatter || d.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "bar",
                                    dataPoint: w[g],
                                    dataSeries: d,
                                    point: {
                                        x: 0 <= w[g].y ? h : u,
                                        y: l + (D - l) / 2
                                    },
                                    direction: 0 > w[g].y === a.axisY.reversed ? 1 : -1,
                                    bounds: {
                                        x1: Math.min(u, h),
                                        y1: l,
                                        x2: Math.max(u, h),
                                        y2: D
                                    },
                                    color: c
                                })
                            }
                    }
                }
                v && (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas,
                    0, 0, this.width, this.height), b.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
                b.restore();
                return {
                    source: f,
                    dest: this.plotArea.ctx,
                    animationCallback: H.xScaleAnimation,
                    easingFunction: H.easing.easeOutQuart,
                    animationBase: k < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : k > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : k
                }
            }
        };
        q.prototype.renderStackedBar = function(a) {
            var f = a.targetCanvasCtx || this.plotArea.ctx,
                b = v ? this._preRenderCtx : f;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = null,
                    e = this.plotArea,
                    g = [],
                    h = [],
                    l = [],
                    t = [],
                    k = 0,
                    r, p, n = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    k = this.dataPointMinWidth ? this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth : 1;
                p = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ? this.dataPointWidth : 0.15 * this.height << 0;
                var d = a.axisX.dataInfo.minDiff;
                isFinite(d) || (d = 0.3 * Math.abs(a.axisX.range));
                d = this.dataPointWidth ? this.dataPointWidth : 0.9 * (e.height * (a.axisX.logarithmic ? Math.log(d) / Math.log(a.axisX.range) : Math.abs(d) /
                    Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
                this.dataPointMaxWidth && k > p && (k = Math.min(this.dataPointWidth ? this.dataPointWidth : Infinity, p));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && p < k) && (p = Math.max(this.dataPointWidth ? this.dataPointWidth : -Infinity, k));
                d < k && (d = k);
                d > p && (d = p);
                b.save();
                v && this._eventManager.ghostCtx.save();
                b.beginPath();
                b.rect(e.x1, e.y1, e.width, e.height);
                b.clip();
                v && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height),
                    this._eventManager.ghostCtx.clip());
                for (var w = 0; w < a.dataSeriesIndexes.length; w++) {
                    var m = a.dataSeriesIndexes[w],
                        D = this.data[m],
                        u = D.dataPoints;
                    if (0 < u.length) {
                        var q = 5 < d && D.bevelEnabled ? !0 : !1;
                        b.strokeStyle = "#4572A7 ";
                        for (k = 0; k < u.length; k++)
                            if (c = u[k].x.getTime ? u[k].x.getTime() : u[k].x, !(c < a.axisX.dataInfo.viewPortMin || c > a.axisX.dataInfo.viewPortMax) && "number" === typeof u[k].y) {
                                p = a.axisX.convertValueToPixel(c);
                                var s = p - a.plotType.plotUnits.length * d / 2 + a.index * d << 0,
                                    y = s + d << 0,
                                    B;
                                if (a.axisY.logarithmic || a.axisY.scaleBreaks &&
                                    0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < u[k].y) l[c] = u[k].y + (l[c] ? l[c] : 0), 0 < l[c] && (B = g[c] ? g[c] : n, g[c] = r = a.axisY.convertValueToPixel(l[c]));
                                else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= u[k].y) t[c] = u[k].y + (t[c] ? t[c] : 0), r = h[c] ? h[c] : n, h[c] = B = a.axisY.convertValueToPixel(t[c]);
                                else if (r = a.axisY.convertValueToPixel(u[k].y), 0 <= u[k].y) {
                                    var A = g[c] ? g[c] : 0;
                                    B = n + A;
                                    r += A;
                                    g[c] = A + (r - B)
                                } else A = h[c] ? h[c] : 0, B = r - A, r = n - A, h[c] = A + (r - B);
                                c = u[k].color ? u[k].color : D._colorSet[k % D._colorSet.length];
                                V(b, B, s, r, y, c, 0, null, q, !1, !1, !1, D.fillOpacity);
                                c = D.dataPointIds[k];
                                this._eventManager.objectMap[c] = {
                                    id: c,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: m,
                                    dataPointIndex: k,
                                    x1: B,
                                    y1: s,
                                    x2: r,
                                    y2: y
                                };
                                c = R(c);
                                v && V(this._eventManager.ghostCtx, B, s, r, y, c, 0, null, !1, !1, !1, !1);
                                (u[k].indexLabel || D.indexLabel || u[k].indexLabelFormatter || D.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "stackedBar",
                                    dataPoint: u[k],
                                    dataSeries: D,
                                    point: {
                                        x: 0 <= u[k].y ? r : B,
                                        y: p
                                    },
                                    direction: 0 > u[k].y === a.axisY.reversed ? 1 : -1,
                                    bounds: {
                                        x1: Math.min(B,
                                            r),
                                        y1: s,
                                        x2: Math.max(B, r),
                                        y2: y
                                    },
                                    color: c
                                })
                            }
                    }
                }
                v && (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
                b.restore();
                return {
                    source: f,
                    dest: this.plotArea.ctx,
                    animationCallback: H.xScaleAnimation,
                    easingFunction: H.easing.easeOutQuart,
                    animationBase: n < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : n > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : n
                }
            }
        };
        q.prototype.renderStackedBar100 = function(a) {
            var f = a.targetCanvasCtx || this.plotArea.ctx,
                b = v ? this._preRenderCtx : f;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = null,
                    e = this.plotArea,
                    g = [],
                    h = [],
                    l = [],
                    t = [],
                    k = 0,
                    r, p, n = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    k = this.dataPointMinWidth ?
                        this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth : 1;
                p = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ? this.dataPointWidth : 0.15 * this.height << 0;
                var d = a.axisX.dataInfo.minDiff;
                isFinite(d) || (d = 0.3 * Math.abs(a.axisX.range));
                d = this.dataPointWidth ? this.dataPointWidth : 0.9 * (e.height * (a.axisX.logarithmic ? Math.log(d) / Math.log(a.axisX.range) : Math.abs(d) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
                this.dataPointMaxWidth && k > p && (k = Math.min(this.dataPointWidth ? this.dataPointWidth :
                    Infinity, p));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && p < k) && (p = Math.max(this.dataPointWidth ? this.dataPointWidth : -Infinity, k));
                d < k && (d = k);
                d > p && (d = p);
                b.save();
                v && this._eventManager.ghostCtx.save();
                b.beginPath();
                b.rect(e.x1, e.y1, e.width, e.height);
                b.clip();
                v && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
                for (var w = 0; w < a.dataSeriesIndexes.length; w++) {
                    var m = a.dataSeriesIndexes[w],
                        D = this.data[m],
                        u = D.dataPoints;
                    if (0 < u.length) {
                        var q = 5 < d && D.bevelEnabled ? !0 : !1;
                        b.strokeStyle = "#4572A7 ";
                        for (k = 0; k < u.length; k++)
                            if (c = u[k].x.getTime ? u[k].x.getTime() : u[k].x, !(c < a.axisX.dataInfo.viewPortMin || c > a.axisX.dataInfo.viewPortMax) && "number" === typeof u[k].y) {
                                p = a.axisX.convertValueToPixel(c);
                                var s;
                                s = 0 !== a.dataPointYSums[c] ? 100 * (u[k].y / a.dataPointYSums[c]) : 0;
                                var y = p - a.plotType.plotUnits.length * d / 2 + a.index * d << 0,
                                    B = y + d << 0;
                                if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < u[k].y) {
                                    l[c] = s +
                                        (l[c] ? l[c] : 0);
                                    if (0 >= l[c]) continue;
                                    s = g[c] ? g[c] : n;
                                    g[c] = r = a.axisY.convertValueToPixel(l[c])
                                } else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= u[k].y) t[c] = s + (t[c] ? t[c] : 0), r = h[c] ? h[c] : n, h[c] = s = a.axisY.convertValueToPixel(t[c]);
                                else if (r = a.axisY.convertValueToPixel(s), 0 <= u[k].y) {
                                    var A = g[c] ? g[c] : 0;
                                    s = n + A;
                                    r += A;
                                    g[c] = A + (r - s)
                                } else A = h[c] ? h[c] : 0, s = r - A, r = n - A, h[c] = A + (r - s);
                                c = u[k].color ? u[k].color : D._colorSet[k % D._colorSet.length];
                                V(b, s, y, r, B, c, 0, null, q, !1, !1, !1, D.fillOpacity);
                                c = D.dataPointIds[k];
                                this._eventManager.objectMap[c] = {
                                    id: c,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: m,
                                    dataPointIndex: k,
                                    x1: s,
                                    y1: y,
                                    x2: r,
                                    y2: B
                                };
                                c = R(c);
                                v && V(this._eventManager.ghostCtx, s, y, r, B, c, 0, null, !1, !1, !1, !1);
                                (u[k].indexLabel || D.indexLabel || u[k].indexLabelFormatter || D.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "stackedBar100",
                                    dataPoint: u[k],
                                    dataSeries: D,
                                    point: {
                                        x: 0 <= u[k].y ? r : s,
                                        y: p
                                    },
                                    direction: 0 > u[k].y === a.axisY.reversed ? 1 : -1,
                                    bounds: {
                                        x1: Math.min(s, r),
                                        y1: y,
                                        x2: Math.max(s, r),
                                        y2: B
                                    },
                                    color: c
                                })
                            }
                    }
                }
                v && (f.drawImage(this._preRenderCanvas,
                    0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
                b.restore();
                return {
                    source: f,
                    dest: this.plotArea.ctx,
                    animationCallback: H.xScaleAnimation,
                    easingFunction: H.easing.easeOutQuart,
                    animationBase: n < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : n > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : n
                }
            }
        };
        q.prototype.renderArea = function(a) {
            var f, b;

            function c() {
                A && (0 < w.lineThickness && g.stroke(), a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? B = y : 0 > a.axisY.viewportMaximum ? B = t.y1 : 0 < a.axisY.viewportMinimum && (B = l.y2), g.lineTo(u, B), g.lineTo(A.x, B), g.closePath(), g.globalAlpha = w.fillOpacity, g.fill(), g.globalAlpha = 1, v && (h.lineTo(u, B), h.lineTo(A.x, B), h.closePath(), h.fill()), g.beginPath(),
                    g.moveTo(u, s), h.beginPath(), h.moveTo(u, s), A = {
                    x: u,
                    y: s
                })
            }
            var e = a.targetCanvasCtx || this.plotArea.ctx,
                g = v ? this._preRenderCtx : e;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var h = this._eventManager.ghostCtx,
                    l = a.axisX.lineCoordinates,
                    t = a.axisY.lineCoordinates,
                    k = [],
                    r = this.plotArea,
                    p;
                g.save();
                v && h.save();
                g.beginPath();
                g.rect(r.x1, r.y1, r.width, r.height);
                g.clip();
                v && (h.beginPath(), h.rect(r.x1, r.y1, r.width, r.height), h.clip());
                for (var n = 0; n < a.dataSeriesIndexes.length; n++) {
                    var d = a.dataSeriesIndexes[n],
                        w = this.data[d],
                        m = w.dataPoints,
                        k = w.id;
                    this._eventManager.objectMap[k] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: d
                    };
                    k = R(k);
                    h.fillStyle = k;
                    k = [];
                    f = !0;
                    var D = 0,
                        u, s, q, y = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                        B, A = null;
                    if (0 < m.length) {
                        var x = w._colorSet[D % w._colorSet.length],
                            z = w.lineColor = w.options.lineColor || x,
                            J = z;
                        g.fillStyle = x;
                        g.strokeStyle = z;
                        g.lineWidth = w.lineThickness;
                        b = "solid";
                        if (g.setLineDash) {
                            var I = G(w.nullDataLineDashType, w.lineThickness);
                            b = w.lineDashType;
                            var da = G(b, w.lineThickness);
                            g.setLineDash(da)
                        }
                        for (var ea = !0; D < m.length; D++)
                            if (q = m[D].x.getTime ? m[D].x.getTime() : m[D].x, !(q < a.axisX.dataInfo.viewPortMin || q > a.axisX.dataInfo.viewPortMax && (!w.connectNullData || !ea)))
                                if ("number" !== typeof m[D].y) w.connectNullData || (ea || f) || c(), ea = !0;
                                else {
                                    u = a.axisX.convertValueToPixel(q);
                                    s = a.axisY.convertValueToPixel(m[D].y);
                                    f || ea ? (!f && w.connectNullData ? (g.setLineDash && (w.options.nullDataLineDashType || b === w.lineDashType && w.lineDashType !== w.nullDataLineDashType) && (f = u, b = s, u = p.x, s = p.y, c(), g.moveTo(p.x,
                                        p.y), u = f, s = b, A = p, b = w.nullDataLineDashType, g.setLineDash(I)), g.lineTo(u, s), v && h.lineTo(u, s)) : (g.beginPath(), g.moveTo(u, s), v && (h.beginPath(), h.moveTo(u, s)), A = {
                                        x: u,
                                        y: s
                                    }), ea = f = !1) : (g.lineTo(u, s), v && h.lineTo(u, s), 0 == D % 250 && c());
                                    p = {
                                        x: u,
                                        y: s
                                    };
                                    D < m.length - 1 && (J !== (m[D].lineColor || z) || b !== (m[D].lineDashType || w.lineDashType)) && (c(), J = m[D].lineColor || z, g.strokeStyle = J, g.setLineDash && (m[D].lineDashType ? (b = m[D].lineDashType, g.setLineDash(G(b, w.lineThickness))) : (b = w.lineDashType, g.setLineDash(da))));
                                    var $ = w.dataPointIds[D];
                                    this._eventManager.objectMap[$] = {
                                        id: $,
                                        objectType: "dataPoint",
                                        dataSeriesIndex: d,
                                        dataPointIndex: D,
                                        x1: u,
                                        y1: s
                                    };
                                    0 !== m[D].markerSize && (0 < m[D].markerSize || 0 < w.markerSize) && (q = w.getMarkerProperties(D, u, s, g), k.push(q), $ = R($), v && k.push({
                                        x: u,
                                        y: s,
                                        ctx: h,
                                        type: q.type,
                                        size: q.size,
                                        color: $,
                                        borderColor: $,
                                        borderThickness: q.borderThickness
                                    }));
                                    (m[D].indexLabel || w.indexLabel || m[D].indexLabelFormatter || w.indexLabelFormatter) && this._indexLabels.push({
                                        chartType: "area",
                                        dataPoint: m[D],
                                        dataSeries: w,
                                        point: {
                                            x: u,
                                            y: s
                                        },
                                        direction: 0 >
                                        m[D].y === a.axisY.reversed ? 1 : -1,
                                        color: x
                                    })
                                }
                        c();
                        ja.drawMarkers(k)
                    }
                }
                v && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), g.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && g.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && g.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), g.clearRect(r.x1, r.y1, r.width, r.height), this._eventManager.ghostCtx.restore());
                g.restore();
                return {
                    source: e,
                    dest: this.plotArea.ctx,
                    animationCallback: H.xClipAnimation,
                    easingFunction: H.easing.linear,
                    animationBase: 0
                }
            }
        };
        q.prototype.renderSplineArea = function(a) {
            function f() {
                var b = x(q, 2);
                if (0 < b.length) {
                    if (0 < p.lineThickness) {
                        c.beginPath();
                        c.moveTo(b[0].x, b[0].y);
                        b[0].newStrokeStyle && (c.strokeStyle = b[0].newStrokeStyle);
                        b[0].newLineDashArray && c.setLineDash(b[0].newLineDashArray);
                        for (var d = 0; d < b.length - 3; d += 3)
                            if (c.bezierCurveTo(b[d + 1].x, b[d + 1].y, b[d + 2].x, b[d + 2].y, b[d + 3].x, b[d + 3].y), v &&
                                e.bezierCurveTo(b[d + 1].x, b[d + 1].y, b[d + 2].x, b[d + 2].y, b[d + 3].x, b[d + 3].y), b[d + 3].newStrokeStyle || b[d + 3].newLineDashArray) c.stroke(), c.beginPath(), c.moveTo(b[d + 3].x, b[d + 3].y), b[d + 3].newStrokeStyle && (c.strokeStyle = b[d + 3].newStrokeStyle), b[d + 3].newLineDashArray && c.setLineDash(b[d + 3].newLineDashArray);
                        c.stroke()
                    }
                    c.beginPath();
                    c.moveTo(b[0].x, b[0].y);
                    v && (e.beginPath(), e.moveTo(b[0].x, b[0].y));
                    for (d = 0; d < b.length - 3; d += 3) c.bezierCurveTo(b[d + 1].x, b[d + 1].y, b[d + 2].x, b[d + 2].y, b[d + 3].x, b[d + 3].y), v && e.bezierCurveTo(b[d +
                    1].x, b[d + 1].y, b[d + 2].x, b[d + 2].y, b[d + 3].x, b[d + 3].y);
                    a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? u = D : 0 > a.axisY.viewportMaximum ? u = h.y1 : 0 < a.axisY.viewportMinimum && (u = g.y2);
                    s = {
                        x: b[0].x,
                        y: b[0].y
                    };
                    c.lineTo(b[b.length - 1].x, u);
                    c.lineTo(s.x, u);
                    c.closePath();
                    c.globalAlpha = p.fillOpacity;
                    c.fill();
                    c.globalAlpha = 1;
                    v && (e.lineTo(b[b.length - 1].x, u), e.lineTo(s.x, u), e.closePath(), e.fill())
                }
            }
            var b = a.targetCanvasCtx || this.plotArea.ctx,
                c = v ? this._preRenderCtx : b;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e =
                        this._eventManager.ghostCtx,
                    g = a.axisX.lineCoordinates,
                    h = a.axisY.lineCoordinates,
                    l = [],
                    t = this.plotArea;
                c.save();
                v && e.save();
                c.beginPath();
                c.rect(t.x1, t.y1, t.width, t.height);
                c.clip();
                v && (e.beginPath(), e.rect(t.x1, t.y1, t.width, t.height), e.clip());
                for (var k = 0; k < a.dataSeriesIndexes.length; k++) {
                    var r = a.dataSeriesIndexes[k],
                        p = this.data[r],
                        n = p.dataPoints,
                        l = p.id;
                    this._eventManager.objectMap[l] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: r
                    };
                    l = R(l);
                    e.fillStyle = l;
                    var l = [],
                        d = 0,
                        w, m, D = a.axisY.convertValueToPixel(a.axisY.logarithmic ?
                        a.axisY.viewportMinimum : 0),
                        u, s = null,
                        q = [];
                    if (0 < n.length) {
                        var y = p._colorSet[d % p._colorSet.length],
                            B = p.lineColor = p.options.lineColor || y,
                            A = B;
                        c.fillStyle = y;
                        c.strokeStyle = B;
                        c.lineWidth = p.lineThickness;
                        var z = "solid";
                        if (c.setLineDash) {
                            var L = G(p.nullDataLineDashType, p.lineThickness),
                                z = p.lineDashType,
                                J = G(z, p.lineThickness);
                            c.setLineDash(J)
                        }
                        for (m = !1; d < n.length; d++)
                            if (w = n[d].x.getTime ? n[d].x.getTime() : n[d].x, !(w < a.axisX.dataInfo.viewPortMin || w > a.axisX.dataInfo.viewPortMax && (!p.connectNullData || !m)))
                                if ("number" !==
                                    typeof n[d].y) 0 < d && !m && (p.connectNullData ? c.setLineDash && (0 < q.length && (p.options.nullDataLineDashType || !n[d - 1].lineDashType)) && (q[q.length - 1].newLineDashArray = L, z = p.nullDataLineDashType) : (f(), q = [])), m = !0;
                                else {
                                    w = a.axisX.convertValueToPixel(w);
                                    m = a.axisY.convertValueToPixel(n[d].y);
                                    var I = p.dataPointIds[d];
                                    this._eventManager.objectMap[I] = {
                                        id: I,
                                        objectType: "dataPoint",
                                        dataSeriesIndex: r,
                                        dataPointIndex: d,
                                        x1: w,
                                        y1: m
                                    };
                                    q[q.length] = {
                                        x: w,
                                        y: m
                                    };
                                    d < n.length - 1 && (A !== (n[d].lineColor || B) || z !== (n[d].lineDashType || p.lineDashType)) &&
                                    (A = n[d].lineColor || B, q[q.length - 1].newStrokeStyle = A, c.setLineDash && (n[d].lineDashType ? (z = n[d].lineDashType, q[q.length - 1].newLineDashArray = G(z, p.lineThickness)) : (z = p.lineDashType, q[q.length - 1].newLineDashArray = J)));
                                    if (0 !== n[d].markerSize && (0 < n[d].markerSize || 0 < p.markerSize)) {
                                        var da = p.getMarkerProperties(d, w, m, c);
                                        l.push(da);
                                        I = R(I);
                                        v && l.push({
                                            x: w,
                                            y: m,
                                            ctx: e,
                                            type: da.type,
                                            size: da.size,
                                            color: I,
                                            borderColor: I,
                                            borderThickness: da.borderThickness
                                        })
                                    }(n[d].indexLabel || p.indexLabel || n[d].indexLabelFormatter || p.indexLabelFormatter) &&
                                    this._indexLabels.push({
                                        chartType: "splineArea",
                                        dataPoint: n[d],
                                        dataSeries: p,
                                        point: {
                                            x: w,
                                            y: m
                                        },
                                        direction: 0 > n[d].y === a.axisY.reversed ? 1 : -1,
                                        color: y
                                    });
                                    m = !1
                                }
                        f();
                        ja.drawMarkers(l)
                    }
                }
                v && (b.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas,
                    0, 0, this.width, this.height), c.clearRect(t.x1, t.y1, t.width, t.height), this._eventManager.ghostCtx.restore());
                c.restore();
                return {
                    source: b,
                    dest: this.plotArea.ctx,
                    animationCallback: H.xClipAnimation,
                    easingFunction: H.easing.linear,
                    animationBase: 0
                }
            }
        };
        q.prototype.renderStepArea = function(a) {
            var f, b;

            function c() {
                A && (0 < w.lineThickness && g.stroke(), a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? B = y : 0 > a.axisY.viewportMaximum ? B = t.y1 : 0 < a.axisY.viewportMinimum && (B = l.y2), g.lineTo(u, B), g.lineTo(A.x,
                    B), g.closePath(), g.globalAlpha = w.fillOpacity, g.fill(), g.globalAlpha = 1, v && (h.lineTo(u, B), h.lineTo(A.x, B), h.closePath(), h.fill()), g.beginPath(), g.moveTo(u, s), h.beginPath(), h.moveTo(u, s), A = {
                    x: u,
                    y: s
                })
            }
            var e = a.targetCanvasCtx || this.plotArea.ctx,
                g = v ? this._preRenderCtx : e;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var h = this._eventManager.ghostCtx,
                    l = a.axisX.lineCoordinates,
                    t = a.axisY.lineCoordinates,
                    k = [],
                    r = this.plotArea,
                    p;
                g.save();
                v && h.save();
                g.beginPath();
                g.rect(r.x1, r.y1, r.width, r.height);
                g.clip();
                v && (h.beginPath(),
                    h.rect(r.x1, r.y1, r.width, r.height), h.clip());
                for (var n = 0; n < a.dataSeriesIndexes.length; n++) {
                    var d = a.dataSeriesIndexes[n],
                        w = this.data[d],
                        m = w.dataPoints,
                        k = w.id;
                    this._eventManager.objectMap[k] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: d
                    };
                    k = R(k);
                    h.fillStyle = k;
                    k = [];
                    f = !0;
                    var D = 0,
                        u, s, q, y = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                        B, A = null;
                    b = !1;
                    if (0 < m.length) {
                        var x = w._colorSet[D % w._colorSet.length],
                            z = w.lineColor = w.options.lineColor || x,
                            J = z;
                        g.fillStyle = x;
                        g.strokeStyle = z;
                        g.lineWidth =
                            w.lineThickness;
                        var I = "solid";
                        if (g.setLineDash) {
                            var da = G(w.nullDataLineDashType, w.lineThickness),
                                I = w.lineDashType,
                                ea = G(I, w.lineThickness);
                            g.setLineDash(ea)
                        }
                        for (; D < m.length; D++)
                            if (q = m[D].x.getTime ? m[D].x.getTime() : m[D].x, !(q < a.axisX.dataInfo.viewPortMin || q > a.axisX.dataInfo.viewPortMax && (!w.connectNullData || !b))) {
                                var $ = s;
                                "number" !== typeof m[D].y ? (w.connectNullData || (b || f) || c(), b = !0) : (u = a.axisX.convertValueToPixel(q), s = a.axisY.convertValueToPixel(m[D].y), f || b ? (!f && w.connectNullData ? (g.setLineDash && (w.options.nullDataLineDashType ||
                                    I === w.lineDashType && w.lineDashType !== w.nullDataLineDashType) && (f = u, b = s, u = p.x, s = p.y, c(), g.moveTo(p.x, p.y), u = f, s = b, A = p, I = w.nullDataLineDashType, g.setLineDash(da)), g.lineTo(u, $), g.lineTo(u, s), v && (h.lineTo(u, $), h.lineTo(u, s))) : (g.beginPath(), g.moveTo(u, s), v && (h.beginPath(), h.moveTo(u, s)), A = {
                                    x: u,
                                    y: s
                                }), b = f = !1) : (g.lineTo(u, $), v && h.lineTo(u, $), g.lineTo(u, s), v && h.lineTo(u, s), 0 == D % 250 && c()), p = {
                                    x: u,
                                    y: s
                                }, D < m.length - 1 && (J !== (m[D].lineColor || z) || I !== (m[D].lineDashType || w.lineDashType)) && (c(), J = m[D].lineColor ||
                                    z, g.strokeStyle = J, g.setLineDash && (m[D].lineDashType ? (I = m[D].lineDashType, g.setLineDash(G(I, w.lineThickness))) : (I = w.lineDashType, g.setLineDash(ea)))), q = w.dataPointIds[D], this._eventManager.objectMap[q] = {
                                    id: q,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: d,
                                    dataPointIndex: D,
                                    x1: u,
                                    y1: s
                                }, 0 !== m[D].markerSize && (0 < m[D].markerSize || 0 < w.markerSize) && ($ = w.getMarkerProperties(D, u, s, g), k.push($), q = R(q), v && k.push({
                                    x: u,
                                    y: s,
                                    ctx: h,
                                    type: $.type,
                                    size: $.size,
                                    color: q,
                                    borderColor: q,
                                    borderThickness: $.borderThickness
                                })), (m[D].indexLabel ||
                                    w.indexLabel || m[D].indexLabelFormatter || w.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "stepArea",
                                    dataPoint: m[D],
                                    dataSeries: w,
                                    point: {
                                        x: u,
                                        y: s
                                    },
                                    direction: 0 > m[D].y === a.axisY.reversed ? 1 : -1,
                                    color: x
                                }))
                            }
                        c();
                        ja.drawMarkers(k)
                    }
                }
                v && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), g.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && g.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && g.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx &&
                this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), g.clearRect(r.x1, r.y1, r.width, r.height), this._eventManager.ghostCtx.restore());
                g.restore();
                return {
                    source: e,
                    dest: this.plotArea.ctx,
                    animationCallback: H.xClipAnimation,
                    easingFunction: H.easing.linear,
                    animationBase: 0
                }
            }
        };
        q.prototype.renderStackedArea = function(a) {
            function f() {
                if (!(1 > t.length)) {
                    for (0 < A.lineThickness && c.stroke(); 0 < t.length;) {
                        var a = t.pop();
                        c.lineTo(a.x, a.y);
                        v && s.lineTo(a.x, a.y)
                    }
                    c.closePath();
                    c.globalAlpha = A.fillOpacity;
                    c.fill();
                    c.globalAlpha = 1;
                    c.beginPath();
                    v && (s.closePath(), s.fill(), s.beginPath());
                    t = []
                }
            }
            var b = a.targetCanvasCtx || this.plotArea.ctx,
                c = v ? this._preRenderCtx : b;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e = null,
                    g = [],
                    h = this.plotArea,
                    l = [],
                    t = [],
                    k = [],
                    r = [],
                    p = 0,
                    n, d, w, m = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    s = this._eventManager.ghostCtx,
                    u, q, y;
                v && s.beginPath();
                c.save();
                v && s.save();
                c.beginPath();
                c.rect(h.x1, h.y1, h.width, h.height);
                c.clip();
                v && (s.beginPath(), s.rect(h.x1, h.y1, h.width,
                    h.height), s.clip());
                for (var e = [], x = 0; x < a.dataSeriesIndexes.length; x++) {
                    var B = a.dataSeriesIndexes[x],
                        A = this.data[B],
                        z = A.dataPoints;
                    A.dataPointIndexes = [];
                    for (p = 0; p < z.length; p++) B = z[p].x.getTime ? z[p].x.getTime() : z[p].x, A.dataPointIndexes[B] = p, e[B] || (k.push(B), e[B] = !0);
                    k.sort(Pa)
                }
                for (x = 0; x < a.dataSeriesIndexes.length; x++) {
                    B = a.dataSeriesIndexes[x];
                    A = this.data[B];
                    z = A.dataPoints;
                    q = !0;
                    t = [];
                    p = A.id;
                    this._eventManager.objectMap[p] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: B
                    };
                    p = R(p);
                    s.fillStyle = p;
                    if (0 < k.length) {
                        var e =
                                A._colorSet[0],
                            L = A.lineColor = A.options.lineColor || e,
                            J = L;
                        c.fillStyle = e;
                        c.strokeStyle = L;
                        c.lineWidth = A.lineThickness;
                        y = "solid";
                        if (c.setLineDash) {
                            var I = G(A.nullDataLineDashType, A.lineThickness);
                            y = A.lineDashType;
                            var da = G(y, A.lineThickness);
                            c.setLineDash(da)
                        }
                        for (var ea = !0, p = 0; p < k.length; p++) {
                            w = k[p];
                            var $ = null,
                                $ = 0 <= A.dataPointIndexes[w] ? z[A.dataPointIndexes[w]] : {
                                    x: w,
                                    y: null
                                };
                            if (!(w < a.axisX.dataInfo.viewPortMin || w > a.axisX.dataInfo.viewPortMax && (!A.connectNullData || !ea)))
                                if ("number" !== typeof $.y) A.connectNullData ||
                                (ea || q) || f(), ea = !0;
                                else {
                                    n = a.axisX.convertValueToPixel(w);
                                    var xa = l[w] ? l[w] : 0;
                                    if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length) {
                                        r[w] = $.y + (r[w] ? r[w] : 0);
                                        if (0 >= r[w] && a.axisY.logarithmic) continue;
                                        d = a.axisY.convertValueToPixel(r[w])
                                    } else d = a.axisY.convertValueToPixel($.y), d -= xa;
                                    t.push({
                                        x: n,
                                        y: m - xa
                                    });
                                    l[w] = m - d;
                                    q || ea ? (!q && A.connectNullData ? (c.setLineDash && (A.options.nullDataLineDashType || y === A.lineDashType && A.lineDashType !== A.nullDataLineDashType) && (q = t.pop(), y = t[t.length -
                                    1], f(), c.moveTo(u.x, u.y), t.push(y), t.push(q), y = A.nullDataLineDashType, c.setLineDash(I)), c.lineTo(n, d), v && s.lineTo(n, d)) : (c.beginPath(), c.moveTo(n, d), v && (s.beginPath(), s.moveTo(n, d))), ea = q = !1) : (c.lineTo(n, d), v && s.lineTo(n, d), 0 == p % 250 && (f(), c.moveTo(n, d), v && s.moveTo(n, d), t.push({
                                        x: n,
                                        y: m - xa
                                    })));
                                    u = {
                                        x: n,
                                        y: d
                                    };
                                    p < z.length - 1 && (J !== (z[p].lineColor || L) || y !== (z[p].lineDashType || A.lineDashType)) && (f(), c.beginPath(), c.moveTo(n, d), t.push({
                                        x: n,
                                        y: m - xa
                                    }), J = z[p].lineColor || L, c.strokeStyle = J, c.setLineDash && (z[p].lineDashType ?
                                        (y = z[p].lineDashType, c.setLineDash(G(y, A.lineThickness))) : (y = A.lineDashType, c.setLineDash(da))));
                                    if (0 <= A.dataPointIndexes[w]) {
                                        var oa = A.dataPointIds[A.dataPointIndexes[w]];
                                        this._eventManager.objectMap[oa] = {
                                            id: oa,
                                            objectType: "dataPoint",
                                            dataSeriesIndex: B,
                                            dataPointIndex: A.dataPointIndexes[w],
                                            x1: n,
                                            y1: d
                                        }
                                    }
                                    0 <= A.dataPointIndexes[w] && 0 !== $.markerSize && (0 < $.markerSize || 0 < A.markerSize) && (w = A.getMarkerProperties(A.dataPointIndexes[w], n, d, c), g.push(w), markerColor = R(oa), v && g.push({
                                        x: n,
                                        y: d,
                                        ctx: s,
                                        type: w.type,
                                        size: w.size,
                                        color: markerColor,
                                        borderColor: markerColor,
                                        borderThickness: w.borderThickness
                                    }));
                                    ($.indexLabel || A.indexLabel || $.indexLabelFormatter || A.indexLabelFormatter) && this._indexLabels.push({
                                        chartType: "stackedArea",
                                        dataPoint: $,
                                        dataSeries: A,
                                        point: {
                                            x: n,
                                            y: d
                                        },
                                        direction: 0 > z[p].y === a.axisY.reversed ? 1 : -1,
                                        color: e
                                    })
                                }
                        }
                        f();
                        c.moveTo(n, d);
                        v && s.moveTo(n, d)
                    }
                    delete A.dataPointIndexes
                }
                ja.drawMarkers(g);
                v && (b.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas &&
                c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(h.x1, h.y1, h.width, h.height), s.restore());
                c.restore();
                return {
                    source: b,
                    dest: this.plotArea.ctx,
                    animationCallback: H.xClipAnimation,
                    easingFunction: H.easing.linear,
                    animationBase: 0
                }
            }
        };
        q.prototype.renderStackedArea100 = function(a) {
            function f() {
                for (0 < A.lineThickness &&
                     c.stroke(); 0 < t.length;) {
                    var a = t.pop();
                    c.lineTo(a.x, a.y);
                    v && y.lineTo(a.x, a.y)
                }
                c.closePath();
                c.globalAlpha = A.fillOpacity;
                c.fill();
                c.globalAlpha = 1;
                c.beginPath();
                v && (y.closePath(), y.fill(), y.beginPath());
                t = []
            }
            var b = a.targetCanvasCtx || this.plotArea.ctx,
                c = v ? this._preRenderCtx : b;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e = null,
                    g = this.plotArea,
                    h = [],
                    l = [],
                    t = [],
                    k = [],
                    r = [],
                    p = 0,
                    n, d, w, m, s, u, q = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    y = this._eventManager.ghostCtx;
                c.save();
                v && y.save();
                c.beginPath();
                c.rect(g.x1, g.y1, g.width, g.height);
                c.clip();
                v && (y.beginPath(), y.rect(g.x1, g.y1, g.width, g.height), y.clip());
                for (var e = [], x = 0; x < a.dataSeriesIndexes.length; x++) {
                    var B = a.dataSeriesIndexes[x],
                        A = this.data[B],
                        z = A.dataPoints;
                    A.dataPointIndexes = [];
                    for (p = 0; p < z.length; p++) B = z[p].x.getTime ? z[p].x.getTime() : z[p].x, A.dataPointIndexes[B] = p, e[B] || (k.push(B), e[B] = !0);
                    k.sort(Pa)
                }
                for (x = 0; x < a.dataSeriesIndexes.length; x++) {
                    B = a.dataSeriesIndexes[x];
                    A = this.data[B];
                    z = A.dataPoints;
                    s = !0;
                    e = A.id;
                    this._eventManager.objectMap[e] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: B
                    };
                    e = R(e);
                    y.fillStyle = e;
                    t = [];
                    if (0 < k.length) {
                        var e = A._colorSet[p % A._colorSet.length],
                            L = A.lineColor = A.options.lineColor || e,
                            J = L;
                        c.fillStyle = e;
                        c.strokeStyle = L;
                        c.lineWidth = A.lineThickness;
                        u = "solid";
                        if (c.setLineDash) {
                            var I = G(A.nullDataLineDashType, A.lineThickness);
                            u = A.lineDashType;
                            var da = G(u, A.lineThickness);
                            c.setLineDash(da)
                        }
                        for (var ea = !0, p = 0; p < k.length; p++) {
                            w = k[p];
                            var $ = null,
                                $ = 0 <= A.dataPointIndexes[w] ? z[A.dataPointIndexes[w]] : {
                                    x: w,
                                    y: null
                                };
                            if (!(w < a.axisX.dataInfo.viewPortMin ||
                                    w > a.axisX.dataInfo.viewPortMax && (!A.connectNullData || !ea)))
                                if ("number" !== typeof $.y) A.connectNullData || (ea || s) || f(), ea = !0;
                                else {
                                    var xa;
                                    xa = 0 !== a.dataPointYSums[w] ? 100 * ($.y / a.dataPointYSums[w]) : 0;
                                    n = a.axisX.convertValueToPixel(w);
                                    var oa = l[w] ? l[w] : 0;
                                    if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length) {
                                        r[w] = xa + (r[w] ? r[w] : 0);
                                        if (0 >= r[w] && a.axisY.logarithmic) continue;
                                        d = a.axisY.convertValueToPixel(r[w])
                                    } else d = a.axisY.convertValueToPixel(xa), d -= oa;
                                    t.push({
                                        x: n,
                                        y: q - oa
                                    });
                                    l[w] =
                                        q - d;
                                    s || ea ? (!s && A.connectNullData ? (c.setLineDash && (A.options.nullDataLineDashType || u === A.lineDashType && A.lineDashType !== A.nullDataLineDashType) && (s = t.pop(), u = t[t.length - 1], f(), c.moveTo(m.x, m.y), t.push(u), t.push(s), u = A.nullDataLineDashType, c.setLineDash(I)), c.lineTo(n, d), v && y.lineTo(n, d)) : (c.beginPath(), c.moveTo(n, d), v && (y.beginPath(), y.moveTo(n, d))), ea = s = !1) : (c.lineTo(n, d), v && y.lineTo(n, d), 0 == p % 250 && (f(), c.moveTo(n, d), v && y.moveTo(n, d), t.push({
                                        x: n,
                                        y: q - oa
                                    })));
                                    m = {
                                        x: n,
                                        y: d
                                    };
                                    p < z.length - 1 && (J !== (z[p].lineColor ||
                                        L) || u !== (z[p].lineDashType || A.lineDashType)) && (f(), c.beginPath(), c.moveTo(n, d), t.push({
                                        x: n,
                                        y: q - oa
                                    }), J = z[p].lineColor || L, c.strokeStyle = J, c.setLineDash && (z[p].lineDashType ? (u = z[p].lineDashType, c.setLineDash(G(u, A.lineThickness))) : (u = A.lineDashType, c.setLineDash(da))));
                                    if (0 <= A.dataPointIndexes[w]) {
                                        var E = A.dataPointIds[A.dataPointIndexes[w]];
                                        this._eventManager.objectMap[E] = {
                                            id: E,
                                            objectType: "dataPoint",
                                            dataSeriesIndex: B,
                                            dataPointIndex: A.dataPointIndexes[w],
                                            x1: n,
                                            y1: d
                                        }
                                    }
                                    0 <= A.dataPointIndexes[w] && 0 !== $.markerSize &&
                                    (0 < $.markerSize || 0 < A.markerSize) && (w = A.getMarkerProperties(p, n, d, c), h.push(w), markerColor = R(E), v && h.push({
                                        x: n,
                                        y: d,
                                        ctx: y,
                                        type: w.type,
                                        size: w.size,
                                        color: markerColor,
                                        borderColor: markerColor,
                                        borderThickness: w.borderThickness
                                    }));
                                    ($.indexLabel || A.indexLabel || $.indexLabelFormatter || A.indexLabelFormatter) && this._indexLabels.push({
                                        chartType: "stackedArea100",
                                        dataPoint: $,
                                        dataSeries: A,
                                        point: {
                                            x: n,
                                            y: d
                                        },
                                        direction: 0 > z[p].y === a.axisY.reversed ? 1 : -1,
                                        color: e
                                    })
                                }
                        }
                        f();
                        c.moveTo(n, d);
                        v && y.moveTo(n, d)
                    }
                    delete A.dataPointIndexes
                }
                ja.drawMarkers(h);
                v && (b.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(g.x1, g.y1, g.width, g.height), y.restore());
                c.restore();
                return {
                    source: b,
                    dest: this.plotArea.ctx,
                    animationCallback: H.xClipAnimation,
                    easingFunction: H.easing.linear,
                    animationBase: 0
                }
            }
        };
        q.prototype.renderBubble = function(a) {
            var f = a.targetCanvasCtx || this.plotArea.ctx,
                b = v ? this._preRenderCtx : f;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = this.plotArea,
                    e = 0,
                    g, h;
                b.save();
                v && this._eventManager.ghostCtx.save();
                b.beginPath();
                b.rect(c.x1, c.y1, c.width, c.height);
                b.clip();
                v && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(c.x1, c.y1, c.width, c.height), this._eventManager.ghostCtx.clip());
                for (var l = -Infinity, t = Infinity, k = 0; k <
                a.dataSeriesIndexes.length; k++)
                    for (var r = a.dataSeriesIndexes[k], p = this.data[r], n = p.dataPoints, d = 0, e = 0; e < n.length; e++) g = n[e].getTime ? g = n[e].x.getTime() : g = n[e].x, g < a.axisX.dataInfo.viewPortMin || g > a.axisX.dataInfo.viewPortMax || "undefined" === typeof n[e].z || (d = n[e].z, d > l && (l = d), d < t && (t = d));
                for (var w = 25 * Math.PI, m = Math.max(Math.pow(0.25 * Math.min(c.height, c.width) / 2, 2) * Math.PI, w), k = 0; k < a.dataSeriesIndexes.length; k++)
                    if (r = a.dataSeriesIndexes[k], p = this.data[r], n = p.dataPoints, 0 < n.length)
                        for (b.strokeStyle = "#4572A7 ",
                                 e = 0; e < n.length; e++)
                            if (g = n[e].getTime ? g = n[e].x.getTime() : g = n[e].x, !(g < a.axisX.dataInfo.viewPortMin || g > a.axisX.dataInfo.viewPortMax) && "number" === typeof n[e].y) {
                                g = a.axisX.convertValueToPixel(g);
                                h = a.axisY.convertValueToPixel(n[e].y);
                                var d = n[e].z,
                                    s = 2 * Math.max(Math.sqrt((l === t ? m / 2 : w + (m - w) / (l - t) * (d - t)) / Math.PI) << 0, 1),
                                    d = p.getMarkerProperties(e, b);
                                d.size = s;
                                b.globalAlpha = p.fillOpacity;
                                ja.drawMarker(g, h, b, d.type, d.size, d.color, d.borderColor, d.borderThickness);
                                b.globalAlpha = 1;
                                var u = p.dataPointIds[e];
                                this._eventManager.objectMap[u] = {
                                    id: u,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: r,
                                    dataPointIndex: e,
                                    x1: g,
                                    y1: h,
                                    size: s
                                };
                                s = R(u);
                                v && ja.drawMarker(g, h, this._eventManager.ghostCtx, d.type, d.size, s, s, d.borderThickness);
                                (n[e].indexLabel || p.indexLabel || n[e].indexLabelFormatter || p.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "bubble",
                                    dataPoint: n[e],
                                    dataSeries: p,
                                    point: {
                                        x: g,
                                        y: h
                                    },
                                    direction: 1,
                                    bounds: {
                                        x1: g - d.size / 2,
                                        y1: h - d.size / 2,
                                        x2: g + d.size / 2,
                                        y2: h + d.size / 2
                                    },
                                    color: null
                                })
                            }
                v && (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation =
                    "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(c.x1, c.y1, c.width, c.height), this._eventManager.ghostCtx.restore());
                b.restore();
                return {
                    source: f,
                    dest: this.plotArea.ctx,
                    animationCallback: H.fadeInAnimation,
                    easingFunction: H.easing.easeInQuad,
                    animationBase: 0
                }
            }
        };
        q.prototype.renderScatter =
            function(a) {
                var f = a.targetCanvasCtx || this.plotArea.ctx,
                    b = v ? this._preRenderCtx : f;
                if (!(0 >= a.dataSeriesIndexes.length)) {
                    var c = this.plotArea,
                        e = 0,
                        g, h;
                    b.save();
                    v && this._eventManager.ghostCtx.save();
                    b.beginPath();
                    b.rect(c.x1, c.y1, c.width, c.height);
                    b.clip();
                    v && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(c.x1, c.y1, c.width, c.height), this._eventManager.ghostCtx.clip());
                    for (var l = 0; l < a.dataSeriesIndexes.length; l++) {
                        var t = a.dataSeriesIndexes[l],
                            k = this.data[t],
                            r = k.dataPoints;
                        if (0 <
                            r.length) {
                            b.strokeStyle = "#4572A7 ";
                            Math.pow(0.3 * Math.min(c.height, c.width) / 2, 2);
                            for (var p = 0, n = 0, e = 0; e < r.length; e++)
                                if (g = r[e].getTime ? g = r[e].x.getTime() : g = r[e].x, !(g < a.axisX.dataInfo.viewPortMin || g > a.axisX.dataInfo.viewPortMax) && "number" === typeof r[e].y) {
                                    g = a.axisX.convertValueToPixel(g);
                                    h = a.axisY.convertValueToPixel(r[e].y);
                                    var d = k.getMarkerProperties(e, g, h, b);
                                    b.globalAlpha = k.fillOpacity;
                                    ja.drawMarker(d.x, d.y, d.ctx, d.type, d.size, d.color, d.borderColor, d.borderThickness);
                                    b.globalAlpha = 1;
                                    Math.sqrt((p -
                                        g) * (p - g) + (n - h) * (n - h)) < Math.min(d.size, 5) && r.length > Math.min(this.plotArea.width, this.plotArea.height) || (p = k.dataPointIds[e], this._eventManager.objectMap[p] = {
                                        id: p,
                                        objectType: "dataPoint",
                                        dataSeriesIndex: t,
                                        dataPointIndex: e,
                                        x1: g,
                                        y1: h
                                    }, p = R(p), v && ja.drawMarker(d.x, d.y, this._eventManager.ghostCtx, d.type, d.size, p, p, d.borderThickness), (r[e].indexLabel || k.indexLabel || r[e].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({
                                        chartType: "scatter",
                                        dataPoint: r[e],
                                        dataSeries: k,
                                        point: {
                                            x: g,
                                            y: h
                                        },
                                        direction: 1,
                                        bounds: {
                                            x1: g - d.size / 2,
                                            y1: h - d.size / 2,
                                            x2: g + d.size / 2,
                                            y2: h + d.size / 2
                                        },
                                        color: null
                                    }), p = g, n = h)
                                }
                        }
                    }
                    v && (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(c.x1, c.y1, c.width, c.height), this._eventManager.ghostCtx.restore());
                    b.restore();
                    return {
                        source: f,
                        dest: this.plotArea.ctx,
                        animationCallback: H.fadeInAnimation,
                        easingFunction: H.easing.easeInQuad,
                        animationBase: 0
                    }
                }
            };
        q.prototype.renderCandlestick = function(a) {
            var f = a.targetCanvasCtx || this.plotArea.ctx,
                b = v ? this._preRenderCtx : f,
                c = this._eventManager.ghostCtx;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e = null,
                    g = null,
                    h = this.plotArea,
                    l = 0,
                    t, k, r, p, n, d, e = this.dataPointMinWidth ? this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth : 1,
                    g = this.dataPointMaxWidth ? this.dataPointMaxWidth :
                        this.dataPointWidth ? this.dataPointWidth : 0.015 * this.width,
                    w = a.axisX.dataInfo.minDiff;
                isFinite(w) || (w = 0.3 * Math.abs(a.axisX.range));
                w = this.dataPointWidth ? this.dataPointWidth : 0.7 * h.width * (a.axisX.logarithmic ? Math.log(w) / Math.log(a.axisX.range) : Math.abs(w) / Math.abs(a.axisX.range)) << 0;
                this.dataPointMaxWidth && e > g && (e = Math.min(this.dataPointWidth ? this.dataPointWidth : Infinity, g));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && g < e) && (g = Math.max(this.dataPointWidth ? this.dataPointWidth : -Infinity, e));
                w < e &&
                (w = e);
                w > g && (w = g);
                b.save();
                v && c.save();
                b.beginPath();
                b.rect(h.x1, h.y1, h.width, h.height);
                b.clip();
                v && (c.beginPath(), c.rect(h.x1, h.y1, h.width, h.height), c.clip());
                for (var m = 0; m < a.dataSeriesIndexes.length; m++) {
                    var s = a.dataSeriesIndexes[m],
                        u = this.data[s],
                        q = u.dataPoints;
                    if (0 < q.length)
                        for (var ca = 5 < w && u.bevelEnabled ? !0 : !1, l = 0; l < q.length; l++)
                            if (q[l].getTime ? d = q[l].x.getTime() : d = q[l].x, !(d < a.axisX.dataInfo.viewPortMin || d > a.axisX.dataInfo.viewPortMax) && !y(q[l].y) && q[l].y.length && "number" === typeof q[l].y[0] &&
                                "number" === typeof q[l].y[1] && "number" === typeof q[l].y[2] && "number" === typeof q[l].y[3]) {
                                t = a.axisX.convertValueToPixel(d);
                                k = a.axisY.convertValueToPixel(q[l].y[0]);
                                r = a.axisY.convertValueToPixel(q[l].y[1]);
                                p = a.axisY.convertValueToPixel(q[l].y[2]);
                                n = a.axisY.convertValueToPixel(q[l].y[3]);
                                var x = t - w / 2 << 0,
                                    B = x + w << 0,
                                    g = u.options.fallingColor ? u.fallingColor : u._colorSet[0],
                                    e = q[l].color ? q[l].color : u._colorSet[0],
                                    A = Math.round(Math.max(1, 0.15 * w)),
                                    z = 0 === A % 2 ? 0 : 0.5,
                                    L = u.dataPointIds[l];
                                this._eventManager.objectMap[L] = {
                                    id: L,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: s,
                                    dataPointIndex: l,
                                    x1: x,
                                    y1: k,
                                    x2: B,
                                    y2: r,
                                    x3: t,
                                    y3: p,
                                    x4: t,
                                    y4: n,
                                    borderThickness: A,
                                    color: e
                                };
                                b.strokeStyle = e;
                                b.beginPath();
                                b.lineWidth = A;
                                c.lineWidth = Math.max(A, 4);
                                "candlestick" === u.type ? (b.moveTo(t - z, r), b.lineTo(t - z, Math.min(k, n)), b.stroke(), b.moveTo(t - z, Math.max(k, n)), b.lineTo(t - z, p), b.stroke(), V(b, x, Math.min(k, n), B, Math.max(k, n), q[l].y[0] <= q[l].y[3] ? u.risingColor : g, A, e, ca, ca, !1, !1, u.fillOpacity), v && (e = R(L), c.strokeStyle = e, c.moveTo(t - z, r), c.lineTo(t - z, Math.min(k,
                                    n)), c.stroke(), c.moveTo(t - z, Math.max(k, n)), c.lineTo(t - z, p), c.stroke(), V(c, x, Math.min(k, n), B, Math.max(k, n), e, 0, null, !1, !1, !1, !1))) : "ohlc" === u.type && (b.moveTo(t - z, r), b.lineTo(t - z, p), b.stroke(), b.beginPath(), b.moveTo(t, k), b.lineTo(x, k), b.stroke(), b.beginPath(), b.moveTo(t, n), b.lineTo(B, n), b.stroke(), v && (e = R(L), c.strokeStyle = e, c.moveTo(t - z, r), c.lineTo(t - z, p), c.stroke(), c.beginPath(), c.moveTo(t, k), c.lineTo(x, k), c.stroke(), c.beginPath(), c.moveTo(t, n), c.lineTo(B, n), c.stroke()));
                                (q[l].indexLabel || u.indexLabel ||
                                    q[l].indexLabelFormatter || u.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: u.type,
                                    dataPoint: q[l],
                                    dataSeries: u,
                                    point: {
                                        x: x + (B - x) / 2,
                                        y: a.axisY.reversed ? p : r
                                    },
                                    direction: 1,
                                    bounds: {
                                        x1: x,
                                        y1: Math.min(r, p),
                                        x2: B,
                                        y2: Math.max(r, p)
                                    },
                                    color: e
                                })
                            }
                }
                v && (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(h.x1, h.y1, h.width, h.height), c.restore());
                b.restore();
                return {
                    source: f,
                    dest: this.plotArea.ctx,
                    animationCallback: H.fadeInAnimation,
                    easingFunction: H.easing.easeInQuad,
                    animationBase: 0
                }
            }
        };
        q.prototype.renderBoxAndWhisker = function(a) {
            var f = a.targetCanvasCtx || this.plotArea.ctx,
                b = v ? this._preRenderCtx : f,
                c = this._eventManager.ghostCtx;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e = null,
                    g = this.plotArea,
                    h = 0,
                    l, t, k, r, p, n, d, e = this.dataPointMinWidth ? this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth : 1,
                    h = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ? this.dataPointWidth : 0.015 * this.width,
                    w = a.axisX.dataInfo.minDiff;
                isFinite(w) || (w = 0.3 * Math.abs(a.axisX.range));
                w = this.dataPointWidth ? this.dataPointWidth : 0.7 * g.width * (a.axisX.logarithmic ? Math.log(w) / Math.log(a.axisX.range) : Math.abs(w) / Math.abs(a.axisX.range)) << 0;
                this.dataPointMaxWidth && e > h && (e = Math.min(this.dataPointWidth ? this.dataPointWidth :
                    Infinity, h));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && h < e) && (h = Math.max(this.dataPointWidth ? this.dataPointWidth : -Infinity, e));
                w < e && (w = e);
                w > h && (w = h);
                b.save();
                v && c.save();
                b.beginPath();
                b.rect(g.x1, g.y1, g.width, g.height);
                b.clip();
                v && (c.beginPath(), c.rect(g.x1, g.y1, g.width, g.height), c.clip());
                for (var m = !1, m = !!a.axisY.reversed, s = 0; s < a.dataSeriesIndexes.length; s++) {
                    var u = a.dataSeriesIndexes[s],
                        q = this.data[u],
                        x = q.dataPoints;
                    if (0 < x.length)
                        for (var z = 5 < w && q.bevelEnabled ? !0 : !1, h = 0; h < x.length; h++)
                            if (x[h].getTime ?
                                    d = x[h].x.getTime() : d = x[h].x, !(d < a.axisX.dataInfo.viewPortMin || d > a.axisX.dataInfo.viewPortMax) && !y(x[h].y) && x[h].y.length && "number" === typeof x[h].y[0] && "number" === typeof x[h].y[1] && "number" === typeof x[h].y[2] && "number" === typeof x[h].y[3] && "number" === typeof x[h].y[4] && 5 === x[h].y.length) {
                                l = a.axisX.convertValueToPixel(d);
                                t = a.axisY.convertValueToPixel(x[h].y[0]);
                                k = a.axisY.convertValueToPixel(x[h].y[1]);
                                r = a.axisY.convertValueToPixel(x[h].y[2]);
                                p = a.axisY.convertValueToPixel(x[h].y[3]);
                                n = a.axisY.convertValueToPixel(x[h].y[4]);
                                var B = l - w / 2 << 0,
                                    A = l + w / 2 << 0,
                                    e = x[h].color ? x[h].color : q._colorSet[0],
                                    C = Math.round(Math.max(1, 0.15 * w)),
                                    L = 0 === C % 2 ? 0 : 0.5,
                                    J = x[h].whiskerColor ? x[h].whiskerColor : x[h].color ? q.whiskerColor ? q.whiskerColor : x[h].color : q.whiskerColor ? q.whiskerColor : e,
                                    I = "number" === typeof x[h].whiskerThickness ? x[h].whiskerThickness : "number" === typeof q.options.whiskerThickness ? q.whiskerThickness : C,
                                    da = x[h].whiskerDashType ? x[h].whiskerDashType : q.whiskerDashType,
                                    ea = y(x[h].whiskerLength) ? y(q.options.whiskerLength) ? w : q.whiskerLength : x[h].whiskerLength,
                                    ea = "number" === typeof ea ? 0 >= ea ? 0 : ea >= w ? w : ea : "string" === typeof ea ? parseInt(ea) * w / 100 > w ? w : parseInt(ea) * w / 100 : w,
                                    $ = 1 === Math.round(I) % 2 ? 0.5 : 0,
                                    xa = x[h].stemColor ? x[h].stemColor : x[h].color ? q.stemColor ? q.stemColor : x[h].color : q.stemColor ? q.stemColor : e,
                                    oa = "number" === typeof x[h].stemThickness ? x[h].stemThickness : "number" === typeof q.options.stemThickness ? q.stemThickness : C,
                                    E = 1 === Math.round(oa) % 2 ? 0.5 : 0,
                                    eb = x[h].stemDashType ? x[h].stemDashType : q.stemDashType,
                                    P = x[h].lineColor ? x[h].lineColor : x[h].color ? q.lineColor ? q.lineColor :
                                        x[h].color : q.lineColor ? q.lineColor : e,
                                    O = "number" === typeof x[h].lineThickness ? x[h].lineThickness : "number" === typeof q.options.lineThickness ? q.lineThickness : C,
                                    Q = x[h].lineDashType ? x[h].lineDashType : q.lineDashType,
                                    K = 1 === Math.round(O) % 2 ? 0.5 : 0,
                                    N = q.upperBoxColor,
                                    U = q.lowerBoxColor,
                                    ta = y(q.options.fillOpacity) ? 1 : q.fillOpacity,
                                    M = q.dataPointIds[h];
                                this._eventManager.objectMap[M] = {
                                    id: M,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: u,
                                    dataPointIndex: h,
                                    x1: B,
                                    y1: t,
                                    x2: A,
                                    y2: k,
                                    x3: l,
                                    y3: r,
                                    x4: l,
                                    y4: p,
                                    y5: n,
                                    borderThickness: C,
                                    color: e,
                                    stemThickness: oa,
                                    stemColor: xa,
                                    whiskerThickness: I,
                                    whiskerLength: ea,
                                    whiskerColor: J,
                                    lineThickness: O,
                                    lineColor: P
                                };
                                b.save();
                                0 < oa && (b.beginPath(), b.strokeStyle = xa, b.lineWidth = oa, b.setLineDash && b.setLineDash(G(eb, oa)), b.moveTo(l - E, k), b.lineTo(l - E, t), b.stroke(), b.moveTo(l - E, p), b.lineTo(l - E, r), b.stroke());
                                b.restore();
                                c.lineWidth = Math.max(C, 4);
                                b.beginPath();
                                V(b, B, Math.min(n, k), A, Math.max(k, n), U, 0, e, m ? z : !1, m ? !1 : z, !1, !1, ta);
                                b.beginPath();
                                V(b, B, Math.min(r, n), A, Math.max(n, r), N, 0, e, m ? !1 : z, m ? z : !1, !1, !1, ta);
                                b.beginPath();
                                b.lineWidth = C;
                                b.strokeStyle = e;
                                b.rect(B - L, Math.min(k, r) - L, A - B + 2 * L, Math.max(k, r) - Math.min(k, r) + 2 * L);
                                b.stroke();
                                b.save();
                                0 < O && (b.beginPath(), b.globalAlpha = 1, b.setLineDash && b.setLineDash(G(Q, O)), b.strokeStyle = P, b.lineWidth = O, b.moveTo(B, n - K), b.lineTo(A, n - K), b.stroke());
                                b.restore();
                                b.save();
                                0 < I && (b.beginPath(), b.setLineDash && b.setLineDash(G(da, I)), b.strokeStyle = J, b.lineWidth = I, b.moveTo(l - ea / 2 << 0, p - $), b.lineTo(l + ea / 2 << 0, p - $), b.stroke(), b.moveTo(l - ea / 2 << 0, t + $), b.lineTo(l + ea / 2 << 0, t + $), b.stroke());
                                b.restore();
                                v && (e = R(M), c.strokeStyle = e, c.lineWidth = oa, 0 < oa && (c.moveTo(l - L - E, k), c.lineTo(l - L - E, Math.max(t, p)), c.stroke(), c.moveTo(l - L - E, Math.min(t, p)), c.lineTo(l - L - E, r), c.stroke()), V(c, B, Math.max(k, r), A, Math.min(k, r), e, 0, null, !1, !1, !1, !1), 0 < I && (c.beginPath(), c.lineWidth = I, c.moveTo(l + ea / 2, p - $), c.lineTo(l - ea / 2, p - $), c.stroke(), c.moveTo(l + ea / 2, t + $), c.lineTo(l - ea / 2, t + $), c.stroke()));
                                (x[h].indexLabel || q.indexLabel || x[h].indexLabelFormatter || q.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: q.type,
                                    dataPoint: x[h],
                                    dataSeries: q,
                                    point: {
                                        x: B + (A - B) / 2,
                                        y: a.axisY.reversed ? t : p
                                    },
                                    direction: 1,
                                    bounds: {
                                        x1: B,
                                        y1: Math.min(t, p),
                                        x2: A,
                                        y2: Math.max(t, p)
                                    },
                                    color: e
                                })
                            }
                }
                v && (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    b.clearRect(g.x1, g.y1, g.width, g.height), c.restore());
                b.restore();
                return {
                    source: f,
                    dest: this.plotArea.ctx,
                    animationCallback: H.fadeInAnimation,
                    easingFunction: H.easing.easeInQuad,
                    animationBase: 0
                }
            }
        };
        q.prototype.renderRangeColumn = function(a) {
            var f = a.targetCanvasCtx || this.plotArea.ctx,
                b = v ? this._preRenderCtx : f;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = null,
                    e = this.plotArea,
                    g = 0,
                    h, l, t, g = this.dataPointMinWidth ? this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth : 1;
                h = this.dataPointMaxWidth ? this.dataPointMaxWidth :
                    this.dataPointWidth ? this.dataPointWidth : 0.03 * this.width;
                var k = a.axisX.dataInfo.minDiff;
                isFinite(k) || (k = 0.3 * Math.abs(a.axisX.range));
                k = this.dataPointWidth ? this.dataPointWidth : 0.9 * (e.width * (a.axisX.logarithmic ? Math.log(k) / Math.log(a.axisX.range) : Math.abs(k) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
                this.dataPointMaxWidth && g > h && (g = Math.min(this.dataPointWidth ? this.dataPointWidth : Infinity, h));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && h < g) && (h = Math.max(this.dataPointWidth ? this.dataPointWidth :
                    -Infinity, g));
                k < g && (k = g);
                k > h && (k = h);
                b.save();
                v && this._eventManager.ghostCtx.save();
                b.beginPath();
                b.rect(e.x1, e.y1, e.width, e.height);
                b.clip();
                v && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
                for (var r = 0; r < a.dataSeriesIndexes.length; r++) {
                    var p = a.dataSeriesIndexes[r],
                        n = this.data[p],
                        d = n.dataPoints;
                    if (0 < d.length)
                        for (var w = 5 < k && n.bevelEnabled ? !0 : !1, g = 0; g < d.length; g++)
                            if (d[g].getTime ? t = d[g].x.getTime() : t = d[g].x, !(t <
                                    a.axisX.dataInfo.viewPortMin || t > a.axisX.dataInfo.viewPortMax) && !y(d[g].y) && d[g].y.length && "number" === typeof d[g].y[0] && "number" === typeof d[g].y[1]) {
                                c = a.axisX.convertValueToPixel(t);
                                h = a.axisY.convertValueToPixel(d[g].y[0]);
                                l = a.axisY.convertValueToPixel(d[g].y[1]);
                                var m = a.axisX.reversed ? c + a.plotType.totalDataSeries * k / 2 - (a.previousDataSeriesCount + r) * k << 0 : c - a.plotType.totalDataSeries * k / 2 + (a.previousDataSeriesCount + r) * k << 0,
                                    q = a.axisX.reversed ? m - k << 0 : m + k << 0,
                                    c = d[g].color ? d[g].color : n._colorSet[g % n._colorSet.length];
                                if (h > l) {
                                    var u = h;
                                    h = l;
                                    l = u
                                }
                                u = n.dataPointIds[g];
                                this._eventManager.objectMap[u] = {
                                    id: u,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: p,
                                    dataPointIndex: g,
                                    x1: m,
                                    y1: h,
                                    x2: q,
                                    y2: l
                                };
                                V(b, m, h, q, l, c, 0, c, w, w, !1, !1, n.fillOpacity);
                                c = R(u);
                                v && V(this._eventManager.ghostCtx, m, h, q, l, c, 0, null, !1, !1, !1, !1);
                                if (d[g].indexLabel || n.indexLabel || d[g].indexLabelFormatter || n.indexLabelFormatter) this._indexLabels.push({
                                    chartType: "rangeColumn",
                                    dataPoint: d[g],
                                    dataSeries: n,
                                    indexKeyword: 0,
                                    point: {
                                        x: m + (q - m) / 2,
                                        y: d[g].y[1] >= d[g].y[0] ? l : h
                                    },
                                    direction: d[g].y[1] >=
                                    d[g].y[0] ? -1 : 1,
                                    bounds: {
                                        x1: m,
                                        y1: Math.min(h, l),
                                        x2: q,
                                        y2: Math.max(h, l)
                                    },
                                    color: c
                                }), this._indexLabels.push({
                                    chartType: "rangeColumn",
                                    dataPoint: d[g],
                                    dataSeries: n,
                                    indexKeyword: 1,
                                    point: {
                                        x: m + (q - m) / 2,
                                        y: d[g].y[1] >= d[g].y[0] ? h : l
                                    },
                                    direction: d[g].y[1] >= d[g].y[0] ? 1 : -1,
                                    bounds: {
                                        x1: m,
                                        y1: Math.min(h, l),
                                        x2: q,
                                        y2: Math.max(h, l)
                                    },
                                    color: c
                                })
                            }
                }
                v && (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
                b.restore();
                return {
                    source: f,
                    dest: this.plotArea.ctx,
                    animationCallback: H.fadeInAnimation,
                    easingFunction: H.easing.easeInQuad,
                    animationBase: 0
                }
            }
        };
        q.prototype.renderError = function(a) {
            var f = a.targetCanvasCtx || this.plotArea.ctx,
                b = v ? this._preRenderCtx :
                    f,
                c = a.axisY._position ? "left" === a.axisY._position || "right" === a.axisY._position ? !1 : !0 : !1;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e = null,
                    g = !1,
                    h = this.plotArea,
                    l = 0,
                    t, k, r, p, n, d, w, m = a.axisX.dataInfo.minDiff;
                isFinite(m) || (m = 0.3 * Math.abs(a.axisX.range));
                b.save();
                v && this._eventManager.ghostCtx.save();
                b.beginPath();
                b.rect(h.x1, h.y1, h.width, h.height);
                b.clip();
                v && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(h.x1, h.y1, h.width, h.height), this._eventManager.ghostCtx.clip());
                for (var q =
                    0, u = 0; u < this.data.length; u++) !this.data[u].type.match(/(bar|column)/ig) || !this.data[u].visible || this.data[u].type.match(/(stacked)/ig) && q || q++;
                for (var s = 0; s < a.dataSeriesIndexes.length; s++) {
                    var x = a.dataSeriesIndexes[s],
                        ba = this.data[x],
                        B = ba.dataPoints,
                        A = y(ba._linkedSeries) ? !1 : ba._linkedSeries.type.match(/(bar|column)/ig) && ba._linkedSeries.visible ? !0 : !1,
                        C = 0;
                    if (A)
                        for (e = ba._linkedSeries.id, u = 0; u < e; u++) !this.data[u].type.match(/(bar|column)/ig) || !this.data[u].visible || this.data[u].type.match(/(stacked)/ig) &&
                        C || (this.data[u].type.match(/(range)/ig) && (g = !0), C++);
                    e = this.dataPointMinWidth ? this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth : 1;
                    l = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ? this.dataPointWidth : c ? Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / (A ? q : 1))) << 0 : 0.3 * this.width;
                    g && (l = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ? this.dataPointWidth : c ? Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / (A ? q : 1))) << 0 : 0.03 * this.width);
                    u = this.options.dataPointWidth ?
                        this.dataPointWidth : 0.9 * ((c ? h.height : h.width) * (a.axisX.logarithmic ? Math.log(m) / Math.log(a.axisX.range) : Math.abs(m) / Math.abs(a.axisX.range)) / (A ? q : 1)) << 0;
                    this.dataPointMaxWidth && e > l && (e = Math.min(this.dataPointWidth ? this.dataPointWidth : Infinity, l));
                    !this.dataPointMaxWidth && (this.dataPointMinWidth && l < e) && (l = Math.max(this.dataPointWidth ? this.dataPointWidth : -Infinity, e));
                    u < e && (u = e);
                    u > l && (u = l);
                    if (0 < B.length)
                        for (var L = ba._colorSet, l = 0; l < B.length; l++) {
                            var e = ba.lineColor = ba.options.color ? ba.options.color : L[0],
                                J = {
                                    color: B[l].whiskerColor ? B[l].whiskerColor : B[l].color ? ba.whiskerColor ? ba.whiskerColor : B[l].color : ba.whiskerColor ? ba.whiskerColor : e,
                                    thickness: y(B[l].whiskerThickness) ? ba.whiskerThickness : B[l].whiskerThickness,
                                    dashType: B[l].whiskerDashType ? B[l].whiskerDashType : ba.whiskerDashType,
                                    length: y(B[l].whiskerLength) ? y(ba.options.whiskerLength) ? u : ba.options.whiskerLength : B[l].whiskerLength,
                                    trimLength: y(B[l].whiskerLength) ? y(ba.options.whiskerLength) ? 50 : 0 : 0
                                };
                            J.length = "number" === typeof J.length ? 0 >= J.length ? 0 :
                                J.length >= u ? u : J.length : "string" === typeof J.length ? parseInt(J.length) * u / 100 > u ? u : parseInt(J.length) * u / 100 > u : u;
                            J.thickness = "number" === typeof J.thickness ? 0 > J.thickness ? 0 : Math.round(J.thickness) : 2;
                            var I = {
                                color: B[l].stemColor ? B[l].stemColor : B[l].color ? ba.stemColor ? ba.stemColor : B[l].color : ba.stemColor ? ba.stemColor : e,
                                thickness: B[l].stemThickness ? B[l].stemThickness : ba.stemThickness,
                                dashType: B[l].stemDashType ? B[l].stemDashType : ba.stemDashType
                            };
                            I.thickness = "number" === typeof I.thickness ? 0 > I.thickness ? 0 : Math.round(I.thickness) :
                                2;
                            B[l].getTime ? w = B[l].x.getTime() : w = B[l].x;
                            if (!(w < a.axisX.dataInfo.viewPortMin || w > a.axisX.dataInfo.viewPortMax) && !y(B[l].y) && B[l].y.length && "number" === typeof B[l].y[0] && "number" === typeof B[l].y[1]) {
                                var da = a.axisX.convertValueToPixel(w);
                                c ? k = da : t = da;
                                da = a.axisY.convertValueToPixel(B[l].y[0]);
                                c ? r = da : n = da;
                                da = a.axisY.convertValueToPixel(B[l].y[1]);
                                c ? p = da : d = da;
                                c ? (n = a.axisX.reversed ? k + (A ? q : 1) * u / 2 - (A ? C - 1 : 0) * u << 0 : k - (A ? q : 1) * u / 2 + (A ? C - 1 : 0) * u << 0, d = a.axisX.reversed ? n - u << 0 : n + u << 0) : (r = a.axisX.reversed ? t + (A ? q : 1) * u /
                                    2 - (A ? C - 1 : 0) * u << 0 : t - (A ? q : 1) * u / 2 + (A ? C - 1 : 0) * u << 0, p = a.axisX.reversed ? r - u << 0 : r + u << 0);
                                !c && n > d && (da = n, n = d, d = da);
                                c && r > p && (da = r, r = p, p = da);
                                da = ba.dataPointIds[l];
                                this._eventManager.objectMap[da] = {
                                    id: da,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: x,
                                    dataPointIndex: l,
                                    x1: Math.min(r, p),
                                    y1: Math.min(n, d),
                                    x2: Math.max(p, r),
                                    y2: Math.max(d, n),
                                    isXYSwapped: c,
                                    stemProperties: I,
                                    whiskerProperties: J
                                };
                                z(b, Math.min(r, p), Math.min(n, d), Math.max(p, r), Math.max(d, n), e, J, I, c);
                                v && z(this._eventManager.ghostCtx, r, n, p, d, e, J, I, c);
                                if (B[l].indexLabel ||
                                    ba.indexLabel || B[l].indexLabelFormatter || ba.indexLabelFormatter) this._indexLabels.push({
                                    chartType: "error",
                                    dataPoint: B[l],
                                    dataSeries: ba,
                                    indexKeyword: 0,
                                    point: {
                                        x: c ? B[l].y[1] >= B[l].y[0] ? r : p : r + (p - r) / 2,
                                        y: c ? n + (d - n) / 2 : B[l].y[1] >= B[l].y[0] ? d : n
                                    },
                                    direction: B[l].y[1] >= B[l].y[0] ? -1 : 1,
                                    bounds: {
                                        x1: c ? Math.min(r, p) : r,
                                        y1: c ? n : Math.min(n, d),
                                        x2: c ? Math.max(r, p) : p,
                                        y2: c ? d : Math.max(n, d)
                                    },
                                    color: e,
                                    axisSwapped: c
                                }), this._indexLabels.push({
                                    chartType: "error",
                                    dataPoint: B[l],
                                    dataSeries: ba,
                                    indexKeyword: 1,
                                    point: {
                                        x: c ? B[l].y[1] >= B[l].y[0] ?
                                            p : r : r + (p - r) / 2,
                                        y: c ? n + (d - n) / 2 : B[l].y[1] >= B[l].y[0] ? n : d
                                    },
                                    direction: B[l].y[1] >= B[l].y[0] ? 1 : -1,
                                    bounds: {
                                        x1: c ? Math.min(r, p) : r,
                                        y1: c ? n : Math.min(n, d),
                                        x2: c ? Math.max(r, p) : p,
                                        y2: c ? d : Math.max(n, d)
                                    },
                                    color: e,
                                    axisSwapped: c
                                })
                            }
                        }
                }
                v && (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas,
                    0, 0, this.width, this.height), b.clearRect(h.x1, h.y1, h.width, h.height), this._eventManager.ghostCtx.restore());
                b.restore();
                return {
                    source: f,
                    dest: this.plotArea.ctx,
                    animationCallback: H.fadeInAnimation,
                    easingFunction: H.easing.easeInQuad,
                    animationBase: 0
                }
            }
        };
        q.prototype.renderRangeBar = function(a) {
            var f = a.targetCanvasCtx || this.plotArea.ctx,
                b = v ? this._preRenderCtx : f;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = null,
                    e = this.plotArea,
                    g = 0,
                    h, l, t, k, g = this.dataPointMinWidth ? this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth :
                    1;
                h = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / a.plotType.totalDataSeries)) << 0;
                var r = a.axisX.dataInfo.minDiff;
                isFinite(r) || (r = 0.3 * Math.abs(a.axisX.range));
                r = this.dataPointWidth ? this.dataPointWidth : 0.9 * (e.height * (a.axisX.logarithmic ? Math.log(r) / Math.log(a.axisX.range) : Math.abs(r) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
                this.dataPointMaxWidth && g > h && (g = Math.min(this.dataPointWidth ? this.dataPointWidth :
                    Infinity, h));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && h < g) && (h = Math.max(this.dataPointWidth ? this.dataPointWidth : -Infinity, g));
                r < g && (r = g);
                r > h && (r = h);
                b.save();
                v && this._eventManager.ghostCtx.save();
                b.beginPath();
                b.rect(e.x1, e.y1, e.width, e.height);
                b.clip();
                v && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
                for (var p = 0; p < a.dataSeriesIndexes.length; p++) {
                    var n = a.dataSeriesIndexes[p],
                        d = this.data[n],
                        w = d.dataPoints;
                    if (0 < w.length) {
                        var m = 5 < r && d.bevelEnabled ? !0 : !1;
                        b.strokeStyle = "#4572A7 ";
                        for (g = 0; g < w.length; g++)
                            if (w[g].getTime ? k = w[g].x.getTime() : k = w[g].x, !(k < a.axisX.dataInfo.viewPortMin || k > a.axisX.dataInfo.viewPortMax) && !y(w[g].y) && w[g].y.length && "number" === typeof w[g].y[0] && "number" === typeof w[g].y[1]) {
                                h = a.axisY.convertValueToPixel(w[g].y[0]);
                                l = a.axisY.convertValueToPixel(w[g].y[1]);
                                t = a.axisX.convertValueToPixel(k);
                                t = a.axisX.reversed ? t + a.plotType.totalDataSeries * r / 2 - (a.previousDataSeriesCount + p) * r << 0 : t - a.plotType.totalDataSeries *
                                    r / 2 + (a.previousDataSeriesCount + p) * r << 0;
                                var q = a.axisX.reversed ? t - r << 0 : t + r << 0;
                                h > l && (c = h, h = l, l = c);
                                c = w[g].color ? w[g].color : d._colorSet[g % d._colorSet.length];
                                V(b, h, t, l, q, c, 0, null, m, !1, !1, !1, d.fillOpacity);
                                c = d.dataPointIds[g];
                                this._eventManager.objectMap[c] = {
                                    id: c,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: n,
                                    dataPointIndex: g,
                                    x1: h,
                                    y1: t,
                                    x2: l,
                                    y2: q
                                };
                                c = R(c);
                                v && V(this._eventManager.ghostCtx, h, t, l, q, c, 0, null, !1, !1, !1, !1);
                                if (w[g].indexLabel || d.indexLabel || w[g].indexLabelFormatter || d.indexLabelFormatter) this._indexLabels.push({
                                    chartType: "rangeBar",
                                    dataPoint: w[g],
                                    dataSeries: d,
                                    indexKeyword: 0,
                                    point: {
                                        x: w[g].y[1] >= w[g].y[0] ? h : l,
                                        y: t + (q - t) / 2
                                    },
                                    direction: w[g].y[1] >= w[g].y[0] ? -1 : 1,
                                    bounds: {
                                        x1: Math.min(h, l),
                                        y1: t,
                                        x2: Math.max(h, l),
                                        y2: q
                                    },
                                    color: c
                                }), this._indexLabels.push({
                                    chartType: "rangeBar",
                                    dataPoint: w[g],
                                    dataSeries: d,
                                    indexKeyword: 1,
                                    point: {
                                        x: w[g].y[1] >= w[g].y[0] ? l : h,
                                        y: t + (q - t) / 2
                                    },
                                    direction: w[g].y[1] >= w[g].y[0] ? 1 : -1,
                                    bounds: {
                                        x1: Math.min(h, l),
                                        y1: t,
                                        x2: Math.max(h, l),
                                        y2: q
                                    },
                                    color: c
                                })
                            }
                    }
                }
                v && (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation =
                    "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
                b.restore();
                return {
                    source: f,
                    dest: this.plotArea.ctx,
                    animationCallback: H.fadeInAnimation,
                    easingFunction: H.easing.easeInQuad,
                    animationBase: 0
                }
            }
        };
        q.prototype.renderRangeArea =
            function(a) {
                function f() {
                    if (s) {
                        var a = null;
                        0 < r.lineThickness && c.stroke();
                        for (var b = t.length - 1; 0 <= b; b--) a = t[b], c.lineTo(a.x, a.y), e.lineTo(a.x, a.y);
                        c.closePath();
                        c.globalAlpha = r.fillOpacity;
                        c.fill();
                        c.globalAlpha = 1;
                        e.fill();
                        if (0 < r.lineThickness) {
                            c.beginPath();
                            c.moveTo(a.x, a.y);
                            for (b = 0; b < t.length; b++) a = t[b], c.lineTo(a.x, a.y);
                            c.stroke()
                        }
                        c.beginPath();
                        c.moveTo(w, m);
                        e.beginPath();
                        e.moveTo(w, m);
                        s = {
                            x: w,
                            y: m
                        };
                        t = [];
                        t.push({
                            x: w,
                            y: q
                        })
                    }
                }
                var b = a.targetCanvasCtx || this.plotArea.ctx,
                    c = v ? this._preRenderCtx : b;
                if (!(0 >=
                        a.dataSeriesIndexes.length)) {
                    var e = this._eventManager.ghostCtx,
                        g = [],
                        h = this.plotArea;
                    c.save();
                    v && e.save();
                    c.beginPath();
                    c.rect(h.x1, h.y1, h.width, h.height);
                    c.clip();
                    v && (e.beginPath(), e.rect(h.x1, h.y1, h.width, h.height), e.clip());
                    for (var l = 0; l < a.dataSeriesIndexes.length; l++) {
                        var t = [],
                            k = a.dataSeriesIndexes[l],
                            r = this.data[k],
                            p = r.dataPoints,
                            g = r.id;
                        this._eventManager.objectMap[g] = {
                            objectType: "dataSeries",
                            dataSeriesIndex: k
                        };
                        g = R(g);
                        e.fillStyle = g;
                        var g = [],
                            n = !0,
                            d = 0,
                            w, m, q, u, s = null;
                        if (0 < p.length) {
                            var y = r._colorSet[d %
                                r._colorSet.length],
                                x = r.lineColor = r.options.lineColor || y,
                                B = x;
                            c.fillStyle = y;
                            c.strokeStyle = x;
                            c.lineWidth = r.lineThickness;
                            var A = "solid";
                            if (c.setLineDash) {
                                var z = G(r.nullDataLineDashType, r.lineThickness),
                                    A = r.lineDashType,
                                    C = G(A, r.lineThickness);
                                c.setLineDash(C)
                            }
                            for (var J = !0; d < p.length; d++)
                                if (u = p[d].x.getTime ? p[d].x.getTime() : p[d].x, !(u < a.axisX.dataInfo.viewPortMin || u > a.axisX.dataInfo.viewPortMax && (!r.connectNullData || !J)))
                                    if (null !== p[d].y && p[d].y.length && "number" === typeof p[d].y[0] && "number" === typeof p[d].y[1]) {
                                        w =
                                            a.axisX.convertValueToPixel(u);
                                        m = a.axisY.convertValueToPixel(p[d].y[0]);
                                        q = a.axisY.convertValueToPixel(p[d].y[1]);
                                        n || J ? (r.connectNullData && !n ? (c.setLineDash && (r.options.nullDataLineDashType || A === r.lineDashType && r.lineDashType !== r.nullDataLineDashType) && (t[t.length - 1].newLineDashArray = C, A = r.nullDataLineDashType, c.setLineDash(z)), c.lineTo(w, m), v && e.lineTo(w, m), t.push({
                                            x: w,
                                            y: q
                                        })) : (c.beginPath(), c.moveTo(w, m), s = {
                                            x: w,
                                            y: m
                                        }, t = [], t.push({
                                            x: w,
                                            y: q
                                        }), v && (e.beginPath(), e.moveTo(w, m))), J = n = !1) : (c.lineTo(w, m), t.push({
                                            x: w,
                                            y: q
                                        }), v && e.lineTo(w, m), 0 == d % 250 && f());
                                        u = r.dataPointIds[d];
                                        this._eventManager.objectMap[u] = {
                                            id: u,
                                            objectType: "dataPoint",
                                            dataSeriesIndex: k,
                                            dataPointIndex: d,
                                            x1: w,
                                            y1: m,
                                            y2: q
                                        };
                                        d < p.length - 1 && (B !== (p[d].lineColor || x) || A !== (p[d].lineDashType || r.lineDashType)) && (f(), B = p[d].lineColor || x, t[t.length - 1].newStrokeStyle = B, c.strokeStyle = B, c.setLineDash && (p[d].lineDashType ? (A = p[d].lineDashType, t[t.length - 1].newLineDashArray = G(A, r.lineThickness), c.setLineDash(t[t.length - 1].newLineDashArray)) : (A = r.lineDashType, t[t.length -
                                        1].newLineDashArray = C, c.setLineDash(C))));
                                        if (0 !== p[d].markerSize && (0 < p[d].markerSize || 0 < r.markerSize)) {
                                            var I = r.getMarkerProperties(d, w, q, c);
                                            g.push(I);
                                            var da = R(u);
                                            v && g.push({
                                                x: w,
                                                y: q,
                                                ctx: e,
                                                type: I.type,
                                                size: I.size,
                                                color: da,
                                                borderColor: da,
                                                borderThickness: I.borderThickness
                                            });
                                            I = r.getMarkerProperties(d, w, m, c);
                                            g.push(I);
                                            da = R(u);
                                            v && g.push({
                                                x: w,
                                                y: m,
                                                ctx: e,
                                                type: I.type,
                                                size: I.size,
                                                color: da,
                                                borderColor: da,
                                                borderThickness: I.borderThickness
                                            })
                                        }
                                        if (p[d].indexLabel || r.indexLabel || p[d].indexLabelFormatter || r.indexLabelFormatter) this._indexLabels.push({
                                            chartType: "rangeArea",
                                            dataPoint: p[d],
                                            dataSeries: r,
                                            indexKeyword: 0,
                                            point: {
                                                x: w,
                                                y: m
                                            },
                                            direction: p[d].y[0] > p[d].y[1] === a.axisY.reversed ? -1 : 1,
                                            color: y
                                        }), this._indexLabels.push({
                                            chartType: "rangeArea",
                                            dataPoint: p[d],
                                            dataSeries: r,
                                            indexKeyword: 1,
                                            point: {
                                                x: w,
                                                y: q
                                            },
                                            direction: p[d].y[0] > p[d].y[1] === a.axisY.reversed ? 1 : -1,
                                            color: y
                                        })
                                    } else J || n || f(), J = !0;
                            f();
                            ja.drawMarkers(g)
                        }
                    }
                    v && (b.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width,
                        this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(h.x1, h.y1, h.width, h.height), this._eventManager.ghostCtx.restore());
                    c.restore();
                    return {
                        source: b,
                        dest: this.plotArea.ctx,
                        animationCallback: H.xClipAnimation,
                        easingFunction: H.easing.linear,
                        animationBase: 0
                    }
                }
            };
        q.prototype.renderRangeSplineArea = function(a) {
            function f(a, b) {
                var d = x(m, 2);
                if (0 < d.length) {
                    if (0 <
                        k.lineThickness) {
                        c.strokeStyle = b;
                        c.setLineDash && c.setLineDash(a);
                        c.beginPath();
                        c.moveTo(d[0].x, d[0].y);
                        for (var f = 0; f < d.length - 3; f += 3) {
                            if (d[f].newStrokeStyle || d[f].newLineDashArray) c.stroke(), c.beginPath(), c.moveTo(d[f].x, d[f].y), d[f].newStrokeStyle && (c.strokeStyle = d[f].newStrokeStyle), d[f].newLineDashArray && c.setLineDash(d[f].newLineDashArray);
                            c.bezierCurveTo(d[f + 1].x, d[f + 1].y, d[f + 2].x, d[f + 2].y, d[f + 3].x, d[f + 3].y)
                        }
                        c.stroke()
                    }
                    c.beginPath();
                    c.moveTo(d[0].x, d[0].y);
                    v && (e.beginPath(), e.moveTo(d[0].x, d[0].y));
                    for (f = 0; f < d.length - 3; f += 3) c.bezierCurveTo(d[f + 1].x, d[f + 1].y, d[f + 2].x, d[f + 2].y, d[f + 3].x, d[f + 3].y), v && e.bezierCurveTo(d[f + 1].x, d[f + 1].y, d[f + 2].x, d[f + 2].y, d[f + 3].x, d[f + 3].y);
                    d = x(q, 2);
                    c.lineTo(q[q.length - 1].x, q[q.length - 1].y);
                    for (f = d.length - 1; 2 < f; f -= 3) c.bezierCurveTo(d[f - 1].x, d[f - 1].y, d[f - 2].x, d[f - 2].y, d[f - 3].x, d[f - 3].y), v && e.bezierCurveTo(d[f - 1].x, d[f - 1].y, d[f - 2].x, d[f - 2].y, d[f - 3].x, d[f - 3].y);
                    c.closePath();
                    c.globalAlpha = k.fillOpacity;
                    c.fill();
                    v && (e.closePath(), e.fill());
                    c.globalAlpha = 1;
                    if (0 < k.lineThickness) {
                        c.strokeStyle =
                            b;
                        c.setLineDash && c.setLineDash(a);
                        c.beginPath();
                        c.moveTo(d[0].x, d[0].y);
                        for (var g = f = 0; f < d.length - 3; f += 3, g++) {
                            if (m[g].newStrokeStyle || m[g].newLineDashArray) c.stroke(), c.beginPath(), c.moveTo(d[f].x, d[f].y), m[g].newStrokeStyle && (c.strokeStyle = m[g].newStrokeStyle), m[g].newLineDashArray && c.setLineDash(m[g].newLineDashArray);
                            c.bezierCurveTo(d[f + 1].x, d[f + 1].y, d[f + 2].x, d[f + 2].y, d[f + 3].x, d[f + 3].y)
                        }
                        c.stroke()
                    }
                    c.beginPath()
                }
            }
            var b = a.targetCanvasCtx || this.plotArea.ctx,
                c = v ? this._preRenderCtx : b;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e =
                        this._eventManager.ghostCtx,
                    g = [],
                    h = this.plotArea;
                c.save();
                v && e.save();
                c.beginPath();
                c.rect(h.x1, h.y1, h.width, h.height);
                c.clip();
                v && (e.beginPath(), e.rect(h.x1, h.y1, h.width, h.height), e.clip());
                for (var l = 0; l < a.dataSeriesIndexes.length; l++) {
                    var t = a.dataSeriesIndexes[l],
                        k = this.data[t],
                        r = k.dataPoints,
                        g = k.id;
                    this._eventManager.objectMap[g] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: t
                    };
                    g = R(g);
                    e.fillStyle = g;
                    var g = [],
                        p = 0,
                        n, d, w, m = [],
                        q = [];
                    if (0 < r.length) {
                        var u = k._colorSet[p % k._colorSet.length],
                            s = k.lineColor = k.options.lineColor ||
                                u,
                            y = s;
                        c.fillStyle = u;
                        c.lineWidth = k.lineThickness;
                        var z = "solid",
                            B;
                        if (c.setLineDash) {
                            var A = G(k.nullDataLineDashType, k.lineThickness),
                                z = k.lineDashType;
                            B = G(z, k.lineThickness)
                        }
                        for (d = !1; p < r.length; p++)
                            if (n = r[p].x.getTime ? r[p].x.getTime() : r[p].x, !(n < a.axisX.dataInfo.viewPortMin || n > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !d)))
                                if (null !== r[p].y && r[p].y.length && "number" === typeof r[p].y[0] && "number" === typeof r[p].y[1]) {
                                    n = a.axisX.convertValueToPixel(n);
                                    d = a.axisY.convertValueToPixel(r[p].y[0]);
                                    w = a.axisY.convertValueToPixel(r[p].y[1]);
                                    var C = k.dataPointIds[p];
                                    this._eventManager.objectMap[C] = {
                                        id: C,
                                        objectType: "dataPoint",
                                        dataSeriesIndex: t,
                                        dataPointIndex: p,
                                        x1: n,
                                        y1: d,
                                        y2: w
                                    };
                                    m[m.length] = {
                                        x: n,
                                        y: d
                                    };
                                    q[q.length] = {
                                        x: n,
                                        y: w
                                    };
                                    p < r.length - 1 && (y !== (r[p].lineColor || s) || z !== (r[p].lineDashType || k.lineDashType)) && (y = r[p].lineColor || s, m[m.length - 1].newStrokeStyle = y, c.setLineDash && (r[p].lineDashType ? (z = r[p].lineDashType, m[m.length - 1].newLineDashArray = G(z, k.lineThickness)) : (z = k.lineDashType, m[m.length - 1].newLineDashArray = B)));
                                    if (0 !== r[p].markerSize && (0 <
                                            r[p].markerSize || 0 < k.markerSize)) {
                                        var L = k.getMarkerProperties(p, n, d, c);
                                        g.push(L);
                                        var J = R(C);
                                        v && g.push({
                                            x: n,
                                            y: d,
                                            ctx: e,
                                            type: L.type,
                                            size: L.size,
                                            color: J,
                                            borderColor: J,
                                            borderThickness: L.borderThickness
                                        });
                                        L = k.getMarkerProperties(p, n, w, c);
                                        g.push(L);
                                        J = R(C);
                                        v && g.push({
                                            x: n,
                                            y: w,
                                            ctx: e,
                                            type: L.type,
                                            size: L.size,
                                            color: J,
                                            borderColor: J,
                                            borderThickness: L.borderThickness
                                        })
                                    }
                                    if (r[p].indexLabel || k.indexLabel || r[p].indexLabelFormatter || k.indexLabelFormatter) this._indexLabels.push({
                                        chartType: "rangeSplineArea",
                                        dataPoint: r[p],
                                        dataSeries: k,
                                        indexKeyword: 0,
                                        point: {
                                            x: n,
                                            y: d
                                        },
                                        direction: r[p].y[0] <= r[p].y[1] ? -1 : 1,
                                        color: u
                                    }), this._indexLabels.push({
                                        chartType: "rangeSplineArea",
                                        dataPoint: r[p],
                                        dataSeries: k,
                                        indexKeyword: 1,
                                        point: {
                                            x: n,
                                            y: w
                                        },
                                        direction: r[p].y[0] <= r[p].y[1] ? 1 : -1,
                                        color: u
                                    });
                                    d = !1
                                } else 0 < p && !d && (k.connectNullData ? c.setLineDash && (0 < m.length && (k.options.nullDataLineDashType || !r[p - 1].lineDashType)) && (m[m.length - 1].newLineDashArray = A, z = k.nullDataLineDashType) : (f(B, s), m = [], q = [])), d = !0;
                        f(B, s);
                        ja.drawMarkers(g)
                    }
                }
                v && (b.drawImage(this._preRenderCanvas,
                    0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(h.x1, h.y1, h.width, h.height), this._eventManager.ghostCtx.restore());
                c.restore();
                return {
                    source: b,
                    dest: this.plotArea.ctx,
                    animationCallback: H.xClipAnimation,
                    easingFunction: H.easing.linear,
                    animationBase: 0
                }
            }
        };
        q.prototype.renderWaterfall = function(a) {
            var f = a.targetCanvasCtx || this.plotArea.ctx,
                b = v ? this._preRenderCtx : f;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = this._eventManager.ghostCtx,
                    e = null,
                    g = this.plotArea,
                    h = 0,
                    l, t, k, r, p = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    h = this.dataPointMinWidth ? this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth : 1;
                t = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ? this.dataPointWidth : Math.min(0.15 *
                    this.width, 0.9 * (this.plotArea.width / a.plotType.totalDataSeries)) << 0;
                var n = a.axisX.dataInfo.minDiff;
                isFinite(n) || (n = 0.3 * Math.abs(a.axisX.range));
                n = this.dataPointWidth ? this.dataPointWidth : 0.6 * (g.width * (a.axisX.logarithmic ? Math.log(n) / Math.log(a.axisX.range) : Math.abs(n) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
                this.dataPointMaxWidth && h > t && (h = Math.min(this.dataPointWidth ? this.dataPointWidth : Infinity, t));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && t < h) && (t = Math.max(this.dataPointWidth ?
                    this.dataPointWidth : -Infinity, h));
                n < h && (n = h);
                n > t && (n = t);
                b.save();
                v && this._eventManager.ghostCtx.save();
                b.beginPath();
                b.rect(g.x1, g.y1, g.width, g.height);
                b.clip();
                v && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(g.x1, g.y1, g.width, g.height), this._eventManager.ghostCtx.clip());
                for (var d = 0; d < a.dataSeriesIndexes.length; d++) {
                    var w = a.dataSeriesIndexes[d],
                        m = this.data[w],
                        q = m.dataPoints,
                        e = m._colorSet[0];
                    m.risingColor = m.options.risingColor ? m.options.risingColor : e;
                    m.fallingColor = m.options.fallingColor ?
                        m.options.fallingColor : "#e40a0a";
                    var u = "number" === typeof m.options.lineThickness ? Math.round(m.lineThickness) : 1,
                        s = 1 === Math.round(u) % 2 ? -0.5 : 0;
                    if (0 < q.length)
                        for (var y = 5 < n && m.bevelEnabled ? !0 : !1, x = !1, B = null, A = null, h = 0; h < q.length; h++)
                            if (q[h].getTime ? r = q[h].x.getTime() : r = q[h].x, "number" !== typeof q[h].y) {
                                if (0 < h && !x && m.connectNullData) var z = m.options.nullDataLineDashType || !q[h - 1].lineDashType ? m.nullDataLineDashType : q[h - 1].lineDashType;
                                x = !0
                            } else {
                                l = a.axisX.convertValueToPixel(r);
                                t = 0 === m.dataPointEOs[h].cumulativeSum ?
                                    p : a.axisY.convertValueToPixel(m.dataPointEOs[h].cumulativeSum);
                                k = 0 === m.dataPointEOs[h].cumulativeSumYStartValue ? p : a.axisY.convertValueToPixel(m.dataPointEOs[h].cumulativeSumYStartValue);
                                l = a.axisX.reversed ? l + a.plotType.totalDataSeries * n / 2 - (a.previousDataSeriesCount + d) * n << 0 : l - a.plotType.totalDataSeries * n / 2 + (a.previousDataSeriesCount + d) * n << 0;
                                var C = a.axisX.reversed ? l - n << 0 : l + n << 0;
                                t > k && (e = t, t = k, k = e);
                                a.axisY.reversed && (e = t, t = k, k = e);
                                e = m.dataPointIds[h];
                                this._eventManager.objectMap[e] = {
                                    id: e,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: w,
                                    dataPointIndex: h,
                                    x1: l,
                                    y1: t,
                                    x2: C,
                                    y2: k
                                };
                                var J = q[h].color ? q[h].color : -1 < q[h].y ? m.risingColor : m.fallingColor;
                                V(b, l, t, C, k, J, 0, J, y, y, !1, !1, m.fillOpacity);
                                e = R(e);
                                v && V(this._eventManager.ghostCtx, l, t, C, k, e, 0, null, !1, !1, !1, !1);
                                var I, J = l;
                                I = "undefined" !== typeof q[h].isIntermediateSum && !0 === q[h].isIntermediateSum || "undefined" !== typeof q[h].isCumulativeSum && !0 === q[h].isCumulativeSum ? -1 < q[h].y ? t : k : -1 < q[h].y ? k : t;
                                0 < h && B && (!x || m.connectNullData) && (x && b.setLineDash && b.setLineDash(G(z, u)), b.beginPath(),
                                    b.moveTo(B, A - s), b.lineTo(J, I - s), 0 < u && b.stroke(), v && (c.beginPath(), c.moveTo(B, A - s), c.lineTo(J, I - s), 0 < u && c.stroke()));
                                x = !1;
                                B = C;
                                A = -1 < q[h].y ? t : k;
                                J = q[h].lineDashType ? q[h].lineDashType : m.options.lineDashType ? m.options.lineDashType : "shortDash";
                                b.strokeStyle = q[h].lineColor ? q[h].lineColor : m.options.lineColor ? m.options.lineColor : "#9e9e9e";
                                b.lineWidth = u;
                                b.setLineDash && (J = G(J, u), b.setLineDash(J));
                                (q[h].indexLabel || m.indexLabel || q[h].indexLabelFormatter || m.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "waterfall",
                                    dataPoint: q[h],
                                    dataSeries: m,
                                    point: {
                                        x: l + (C - l) / 2,
                                        y: 0 <= q[h].y ? t : k
                                    },
                                    direction: 0 > q[h].y === a.axisY.reversed ? 1 : -1,
                                    bounds: {
                                        x1: l,
                                        y1: Math.min(t, k),
                                        x2: C,
                                        y2: Math.max(t, k)
                                    },
                                    color: e
                                })
                            }
                }
                v && (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas,
                    0, 0, this.width, this.height), b.clearRect(g.x1, g.y1, g.width, g.height), this._eventManager.ghostCtx.restore());
                b.restore();
                return {
                    source: f,
                    dest: this.plotArea.ctx,
                    animationCallback: H.fadeInAnimation,
                    easingFunction: H.easing.easeInQuad,
                    animationBase: 0
                }
            }
        };
        var ra = function(a, f, b, c, e, g, h, l, t) {
            if (!(0 > b)) {
                "undefined" === typeof l && (l = 1);
                if (!v) {
                    var k = Number((h % (2 * Math.PI)).toFixed(8));
                    Number((g % (2 * Math.PI)).toFixed(8)) === k && (h -= 1E-4)
                }
                a.save();
                a.globalAlpha = l;
                "pie" === e ? (a.beginPath(), a.moveTo(f.x, f.y), a.arc(f.x, f.y,
                    b, g, h, !1), a.fillStyle = c, a.strokeStyle = "white", a.lineWidth = 2, a.closePath(), a.fill()) : "doughnut" === e && (a.beginPath(), a.arc(f.x, f.y, b, g, h, !1), 0 <= t && a.arc(f.x, f.y, t * b, h, g, !0), a.closePath(), a.fillStyle = c, a.strokeStyle = "white", a.lineWidth = 2, a.fill());
                a.globalAlpha = 1;
                a.restore()
            }
        };
        q.prototype.renderPie = function(a) {
            function f() {
                if (k && r) {
                    for (var a = 0, b = 0, c = 0, e = 0, f = 0; f < r.length; f++) {
                        var g = r[f],
                            h = k.dataPointIds[f];
                        d[f].id = h;
                        d[f].objectType = "dataPoint";
                        d[f].dataPointIndex = f;
                        d[f].dataSeriesIndex = 0;
                        var l = d[f],
                            p = {
                                percent: null,
                                total: null
                            },
                            m = null,
                            p = t.getPercentAndTotal(k, g);
                        if (k.indexLabelFormatter || g.indexLabelFormatter) m = {
                            chart: t.options,
                            dataSeries: k,
                            dataPoint: g,
                            total: p.total,
                            percent: p.percent
                        };
                        p = g.indexLabelFormatter ? g.indexLabelFormatter(m) : g.indexLabel ? t.replaceKeywordsWithValue(g.indexLabel, g, k, f) : k.indexLabelFormatter ? k.indexLabelFormatter(m) : k.indexLabel ? t.replaceKeywordsWithValue(k.indexLabel, g, k, f) : g.label ? g.label : "";
                        t._eventManager.objectMap[h] = l;
                        l.center = {
                            x: x.x,
                            y: x.y
                        };
                        l.y = g.y;
                        l.radius = A;
                        l.percentInnerRadius =
                            L;
                        l.indexLabelText = p;
                        l.indexLabelPlacement = k.indexLabelPlacement;
                        l.indexLabelLineColor = g.indexLabelLineColor ? g.indexLabelLineColor : k.options.indexLabelLineColor ? k.options.indexLabelLineColor : g.color ? g.color : k._colorSet[f % k._colorSet.length];
                        l.indexLabelLineThickness = y(g.indexLabelLineThickness) ? k.indexLabelLineThickness : g.indexLabelLineThickness;
                        l.indexLabelLineDashType = g.indexLabelLineDashType ? g.indexLabelLineDashType : k.indexLabelLineDashType;
                        l.indexLabelFontColor = g.indexLabelFontColor ? g.indexLabelFontColor :
                            k.indexLabelFontColor;
                        l.indexLabelFontStyle = g.indexLabelFontStyle ? g.indexLabelFontStyle : k.indexLabelFontStyle;
                        l.indexLabelFontWeight = g.indexLabelFontWeight ? g.indexLabelFontWeight : k.indexLabelFontWeight;
                        l.indexLabelFontSize = y(g.indexLabelFontSize) ? k.indexLabelFontSize : g.indexLabelFontSize;
                        l.indexLabelFontFamily = g.indexLabelFontFamily ? g.indexLabelFontFamily : k.indexLabelFontFamily;
                        l.indexLabelBackgroundColor = g.indexLabelBackgroundColor ? g.indexLabelBackgroundColor : k.options.indexLabelBackgroundColor ?
                            k.options.indexLabelBackgroundColor : k.indexLabelBackgroundColor;
                        l.indexLabelMaxWidth = g.indexLabelMaxWidth ? g.indexLabelMaxWidth : k.indexLabelMaxWidth ? k.indexLabelMaxWidth : 0.33 * n.width;
                        l.indexLabelWrap = "undefined" !== typeof g.indexLabelWrap ? g.indexLabelWrap : k.indexLabelWrap;
                        l.startAngle = 0 === f ? k.startAngle ? k.startAngle / 180 * Math.PI : 0 : d[f - 1].endAngle;
                        l.startAngle = (l.startAngle + 2 * Math.PI) % (2 * Math.PI);
                        l.endAngle = l.startAngle + 2 * Math.PI / z * Math.abs(g.y);
                        g = (l.endAngle + l.startAngle) / 2;
                        g = (g + 2 * Math.PI) % (2 * Math.PI);
                        l.midAngle = g;
                        if (l.midAngle > Math.PI / 2 - u && l.midAngle < Math.PI / 2 + u) {
                            if (0 === a || d[c].midAngle > l.midAngle) c = f;
                            a++
                        } else if (l.midAngle > 3 * Math.PI / 2 - u && l.midAngle < 3 * Math.PI / 2 + u) {
                            if (0 === b || d[e].midAngle > l.midAngle) e = f;
                            b++
                        }
                        l.hemisphere = g > Math.PI / 2 && g <= 3 * Math.PI / 2 ? "left" : "right";
                        l.indexLabelTextBlock = new la(t.plotArea.ctx, {
                            fontSize: l.indexLabelFontSize,
                            fontFamily: l.indexLabelFontFamily,
                            fontColor: l.indexLabelFontColor,
                            fontStyle: l.indexLabelFontStyle,
                            fontWeight: l.indexLabelFontWeight,
                            horizontalAlign: "left",
                            backgroundColor: l.indexLabelBackgroundColor,
                            maxWidth: l.indexLabelMaxWidth,
                            maxHeight: l.indexLabelWrap ? 5 * l.indexLabelFontSize : 1.5 * l.indexLabelFontSize,
                            text: l.indexLabelText,
                            padding: 0,
                            textBaseline: "top"
                        });
                        l.indexLabelTextBlock.measureText()
                    }
                    h = g = 0;
                    p = !1;
                    for (f = 0; f < r.length; f++) l = d[(c + f) % r.length], 1 < a && (l.midAngle > Math.PI / 2 - u && l.midAngle < Math.PI / 2 + u) && (g <= a / 2 && !p ? (l.hemisphere = "right", g++) : (l.hemisphere = "left", p = !0));
                    p = !1;
                    for (f = 0; f < r.length; f++) l = d[(e + f) % r.length], 1 < b && (l.midAngle > 3 * Math.PI / 2 - u && l.midAngle < 3 * Math.PI / 2 + u) && (h <= b / 2 && !p ? (l.hemisphere =
                        "left", h++) : (l.hemisphere = "right", p = !0))
                }
            }

            function b(a) {
                var b = t.plotArea.ctx;
                b.clearRect(n.x1, n.y1, n.width, n.height);
                b.fillStyle = t.backgroundColor;
                b.fillRect(n.x1, n.y1, n.width, n.height);
                for (b = 0; b < r.length; b++) {
                    var c = d[b].startAngle,
                        e = d[b].endAngle;
                    if (e > c) {
                        var f = 0.07 * A * Math.cos(d[b].midAngle),
                            g = 0.07 * A * Math.sin(d[b].midAngle),
                            h = !1;
                        if (r[b].exploded) {
                            if (1E-9 < Math.abs(d[b].center.x - (x.x + f)) || 1E-9 < Math.abs(d[b].center.y - (x.y + g))) d[b].center.x = x.x + f * a, d[b].center.y = x.y + g * a, h = !0
                        } else if (0 < Math.abs(d[b].center.x -
                                x.x) || 0 < Math.abs(d[b].center.y - x.y)) d[b].center.x = x.x + f * (1 - a), d[b].center.y = x.y + g * (1 - a), h = !0;
                        h && (f = {}, f.dataSeries = k, f.dataPoint = k.dataPoints[b], f.index = b, t.toolTip.highlightObjects([f]));
                        ra(t.plotArea.ctx, d[b].center, d[b].radius, r[b].color ? r[b].color : k._colorSet[b % k._colorSet.length], k.type, c, e, k.fillOpacity, d[b].percentInnerRadius)
                    }
                }
                a = t.plotArea.ctx;
                a.save();
                a.fillStyle = "black";
                a.strokeStyle = "grey";
                a.textBaseline = "middle";
                a.lineJoin = "round";
                for (b = b = 0; b < r.length; b++) c = d[b], c.indexLabelText && (c.indexLabelTextBlock.y -=
                    c.indexLabelTextBlock.height / 2, e = 0, e = "left" === c.hemisphere ? "inside" !== k.indexLabelPlacement ? -(c.indexLabelTextBlock.width + p) : -c.indexLabelTextBlock.width / 2 : "inside" !== k.indexLabelPlacement ? p : -c.indexLabelTextBlock.width / 2, c.indexLabelTextBlock.x += e, c.indexLabelTextBlock.render(!0), c.indexLabelTextBlock.x -= e, c.indexLabelTextBlock.y += c.indexLabelTextBlock.height / 2, "inside" !== c.indexLabelPlacement && 0 < c.indexLabelLineThickness && (e = c.center.x + A * Math.cos(c.midAngle), f = c.center.y + A * Math.sin(c.midAngle),
                    a.strokeStyle = c.indexLabelLineColor, a.lineWidth = c.indexLabelLineThickness, a.setLineDash && a.setLineDash(G(c.indexLabelLineDashType, c.indexLabelLineThickness)), a.beginPath(), a.moveTo(e, f), a.lineTo(c.indexLabelTextBlock.x, c.indexLabelTextBlock.y), a.lineTo(c.indexLabelTextBlock.x + ("left" === c.hemisphere ? -p : p), c.indexLabelTextBlock.y), a.stroke()), a.lineJoin = "miter");
                a.save()
            }

            function c(a, b) {
                var c = 0,
                    c = a.indexLabelTextBlock.y - a.indexLabelTextBlock.height / 2,
                    d = a.indexLabelTextBlock.y + a.indexLabelTextBlock.height /
                        2,
                    e = b.indexLabelTextBlock.y - b.indexLabelTextBlock.height / 2,
                    f = b.indexLabelTextBlock.y + b.indexLabelTextBlock.height / 2;
                return c = b.indexLabelTextBlock.y > a.indexLabelTextBlock.y ? e - d : c - f
            }

            function e(a) {
                for (var b = null, e = 1; e < r.length; e++)
                    if (b = (a + e + d.length) % d.length, d[b].hemisphere !== d[a].hemisphere) {
                        b = null;
                        break
                    } else if (d[b].indexLabelText && b !== a && (0 > c(d[b], d[a]) || ("right" === d[a].hemisphere ? d[b].indexLabelTextBlock.y >= d[a].indexLabelTextBlock.y : d[b].indexLabelTextBlock.y <= d[a].indexLabelTextBlock.y))) break;
                    else b = null;
                return b
            }

            function g(a, b, f) {
                f = (f || 0) + 1;
                if (1E3 < f) return 0;
                b = b || 0;
                var k = 0,
                    h = x.y - 1 * q,
                    n = x.y + 1 * q;
                if (0 <= a && a < r.length) {
                    var l = d[a];
                    if (0 > b && l.indexLabelTextBlock.y < h || 0 < b && l.indexLabelTextBlock.y > n) return 0;
                    var t = 0,
                        p = 0,
                        p = t = t = 0;
                    0 > b ? l.indexLabelTextBlock.y - l.indexLabelTextBlock.height / 2 > h && l.indexLabelTextBlock.y - l.indexLabelTextBlock.height / 2 + b < h && (b = -(h - (l.indexLabelTextBlock.y - l.indexLabelTextBlock.height / 2 + b))) : l.indexLabelTextBlock.y + l.indexLabelTextBlock.height / 2 < h && l.indexLabelTextBlock.y +
                        l.indexLabelTextBlock.height / 2 + b > n && (b = l.indexLabelTextBlock.y + l.indexLabelTextBlock.height / 2 + b - n);
                    b = l.indexLabelTextBlock.y + b;
                    h = 0;
                    h = "right" === l.hemisphere ? x.x + Math.sqrt(Math.pow(q, 2) - Math.pow(b - x.y, 2)) : x.x - Math.sqrt(Math.pow(q, 2) - Math.pow(b - x.y, 2));
                    p = x.x + A * Math.cos(l.midAngle);
                    t = x.y + A * Math.sin(l.midAngle);
                    t = Math.sqrt(Math.pow(h - p, 2) + Math.pow(b - t, 2));
                    p = Math.acos(A / q);
                    t = Math.acos((q * q + A * A - t * t) / (2 * A * q));
                    b = t < p ? b - l.indexLabelTextBlock.y : 0;
                    h = null;
                    for (n = 1; n < r.length; n++)
                        if (h = (a - n + d.length) % d.length, d[h].hemisphere !==
                            d[a].hemisphere) {
                            h = null;
                            break
                        } else if (d[h].indexLabelText && d[h].hemisphere === d[a].hemisphere && h !== a && (0 > c(d[h], d[a]) || ("right" === d[a].hemisphere ? d[h].indexLabelTextBlock.y <= d[a].indexLabelTextBlock.y : d[h].indexLabelTextBlock.y >= d[a].indexLabelTextBlock.y))) break;
                        else h = null;
                    p = h;
                    t = e(a);
                    n = h = 0;
                    0 > b ? (n = "right" === l.hemisphere ? p : t, k = b, null !== n && (p = -b, b = l.indexLabelTextBlock.y - l.indexLabelTextBlock.height / 2 - (d[n].indexLabelTextBlock.y + d[n].indexLabelTextBlock.height / 2), b - p < m && (h = -p, n = g(n, h, f + 1), +n.toFixed(v) >
                    +h.toFixed(v) && (k = b > m ? -(b - m) : -(p - (n - h)))))) : 0 < b && (n = "right" === l.hemisphere ? t : p, k = b, null !== n && (p = b, b = d[n].indexLabelTextBlock.y - d[n].indexLabelTextBlock.height / 2 - (l.indexLabelTextBlock.y + l.indexLabelTextBlock.height / 2), b - p < m && (h = p, n = g(n, h, f + 1), +n.toFixed(v) < +h.toFixed(v) && (k = b > m ? b - m : p - (h - n)))));
                    k && (f = l.indexLabelTextBlock.y + k, b = 0, b = "right" === l.hemisphere ? x.x + Math.sqrt(Math.pow(q, 2) - Math.pow(f - x.y, 2)) : x.x - Math.sqrt(Math.pow(q, 2) - Math.pow(f - x.y, 2)), l.midAngle > Math.PI / 2 - u && l.midAngle < Math.PI / 2 + u ? (h = (a -
                        1 + d.length) % d.length, h = d[h], a = d[(a + 1 + d.length) % d.length], "left" === l.hemisphere && "right" === h.hemisphere && b > h.indexLabelTextBlock.x ? b = h.indexLabelTextBlock.x - 15 : "right" === l.hemisphere && ("left" === a.hemisphere && b < a.indexLabelTextBlock.x) && (b = a.indexLabelTextBlock.x + 15)) : l.midAngle > 3 * Math.PI / 2 - u && l.midAngle < 3 * Math.PI / 2 + u && (h = (a - 1 + d.length) % d.length, h = d[h], a = d[(a + 1 + d.length) % d.length], "right" === l.hemisphere && "left" === h.hemisphere && b < h.indexLabelTextBlock.x ? b = h.indexLabelTextBlock.x + 15 : "left" === l.hemisphere &&
                        ("right" === a.hemisphere && b > a.indexLabelTextBlock.x) && (b = a.indexLabelTextBlock.x - 15)), l.indexLabelTextBlock.y = f, l.indexLabelTextBlock.x = b, l.indexLabelAngle = Math.atan2(l.indexLabelTextBlock.y - x.y, l.indexLabelTextBlock.x - x.x))
                }
                return k
            }

            function h() {
                var a = t.plotArea.ctx;
                a.fillStyle = "grey";
                a.strokeStyle = "grey";
                a.font = "16px Arial";
                a.textBaseline = "middle";
                for (var b = a = 0, f = 0, h = !0, b = 0; 10 > b && (1 > b || 0 < f); b++) {
                    if (k.radius || !k.radius && "undefined" !== typeof k.innerRadius && null !== k.innerRadius && A - f <= C) h = !1;
                    h && (A -=
                        f);
                    f = 0;
                    if ("inside" !== k.indexLabelPlacement) {
                        q = A * s;
                        for (a = 0; a < r.length; a++) {
                            var l = d[a];
                            l.indexLabelTextBlock.x = x.x + q * Math.cos(l.midAngle);
                            l.indexLabelTextBlock.y = x.y + q * Math.sin(l.midAngle);
                            l.indexLabelAngle = l.midAngle;
                            l.radius = A;
                            l.percentInnerRadius = L
                        }
                        for (var u, y, a = 0; a < r.length; a++) {
                            var l = d[a],
                                B = e(a);
                            if (null !== B) {
                                u = d[a];
                                y = d[B];
                                var z = 0,
                                    z = c(u, y) - m;
                                if (0 > z) {
                                    for (var ba = y = 0, G = 0; G < r.length; G++) G !== a && d[G].hemisphere === l.hemisphere && (d[G].indexLabelTextBlock.y < l.indexLabelTextBlock.y ? y++ : ba++);
                                    y = z / (y + ba || 1) *
                                        ba;
                                    var ba = -1 * (z - y),
                                        H = G = 0;
                                    "right" === l.hemisphere ? (G = g(a, y), ba = -1 * (z - G), H = g(B, ba), +H.toFixed(v) < +ba.toFixed(v) && +G.toFixed(v) <= +y.toFixed(v) && g(a, -(ba - H))) : (G = g(B, y), ba = -1 * (z - G), H = g(a, ba), +H.toFixed(v) < +ba.toFixed(v) && +G.toFixed(v) <= +y.toFixed(v) && g(B, -(ba - H)))
                                }
                            }
                        }
                    } else
                        for (a = 0; a < r.length; a++) l = d[a], q = "pie" === k.type ? 0.7 * A : 0.8 * A, B = x.x + q * Math.cos(l.midAngle), y = x.y + q * Math.sin(l.midAngle), l.indexLabelTextBlock.x = B, l.indexLabelTextBlock.y = y;
                    for (a = 0; a < r.length; a++)
                        if (l = d[a], B = l.indexLabelTextBlock.measureText(),
                            0 !== B.height && 0 !== B.width) B = B = 0, "right" === l.hemisphere ? (B = n.x2 - (l.indexLabelTextBlock.x + l.indexLabelTextBlock.width + p), B *= -1) : B = n.x1 - (l.indexLabelTextBlock.x - l.indexLabelTextBlock.width - p), 0 < B && (!h && l.indexLabelText && (y = "right" === l.hemisphere ? n.x2 - l.indexLabelTextBlock.x : l.indexLabelTextBlock.x - n.x1, 0.3 * l.indexLabelTextBlock.maxWidth > y ? l.indexLabelText = "" : l.indexLabelTextBlock.maxWidth = 0.85 * y, 0.3 * l.indexLabelTextBlock.maxWidth < y && (l.indexLabelTextBlock.x -= "right" === l.hemisphere ? 2 : -2)), Math.abs(l.indexLabelTextBlock.y -
                            l.indexLabelTextBlock.height / 2 - x.y) < A || Math.abs(l.indexLabelTextBlock.y + l.indexLabelTextBlock.height / 2 - x.y) < A) && (B /= Math.abs(Math.cos(l.indexLabelAngle)), 9 < B && (B *= 0.3), B > f && (f = B)), B = B = 0, 0 < l.indexLabelAngle && l.indexLabelAngle < Math.PI ? (B = n.y2 - (l.indexLabelTextBlock.y + l.indexLabelTextBlock.height / 2 + 5), B *= -1) : B = n.y1 - (l.indexLabelTextBlock.y - l.indexLabelTextBlock.height / 2 - 5), 0 < B && (!h && l.indexLabelText && (y = 0 < l.indexLabelAngle && l.indexLabelAngle < Math.PI ? -1 : 1, 0 === g(a, B * y) && g(a, 2 * y)), Math.abs(l.indexLabelTextBlock.x -
                            x.x) < A && (B /= Math.abs(Math.sin(l.indexLabelAngle)), 9 < B && (B *= 0.3), B > f && (f = B)));
                    var K = function(a, b, c) {
                        for (var e = [], f = 0; e.push(d[b]), b !== c; b = (b + 1 + r.length) % r.length);
                        e.sort(function(a, b) {
                            return a.y - b.y
                        });
                        for (b = 0; b < e.length; b++)
                            if (c = e[b], f < 0.7 * a) f += c.indexLabelTextBlock.height, c.indexLabelTextBlock.text = "", c.indexLabelText = "", c.indexLabelTextBlock.measureText();
                            else break
                    };
                    (function() {
                        for (var a = -1, b = -1, f = 0, g = !1, h = 0; h < r.length; h++)
                            if (g = !1, u = d[h], u.indexLabelText) {
                                var k = e(h);
                                if (null !== k) {
                                    var l = d[k];
                                    z = 0;
                                    z = c(u, l);
                                    var n;
                                    if (n = 0 > z) {
                                        n = u.indexLabelTextBlock.x;
                                        var t = u.indexLabelTextBlock.y - u.indexLabelTextBlock.height / 2,
                                            m = u.indexLabelTextBlock.y + u.indexLabelTextBlock.height / 2,
                                            w = l.indexLabelTextBlock.y - l.indexLabelTextBlock.height / 2,
                                            q = l.indexLabelTextBlock.x + l.indexLabelTextBlock.width,
                                            s = l.indexLabelTextBlock.y + l.indexLabelTextBlock.height / 2;
                                        n = u.indexLabelTextBlock.x + u.indexLabelTextBlock.width < l.indexLabelTextBlock.x - p || n > q + p || t > s + p || m < w - p ? !1 : !0
                                    }
                                    n ? (0 > a && (a = h), k !== a && (b = k, f += -z), 0 === h % Math.max(r.length /
                                        10, 3) && (g = !0)) : g = !0;
                                    g && (0 < f && 0 <= a && 0 <= b) && (K(f, a, b), b = a = -1, f = 0)
                                }
                            }
                        0 < f && K(f, a, b)
                    })()
                }
            }

            function l() {
                t.plotArea.layoutManager.reset();
                t.title && (t.title.dockInsidePlotArea || "center" === t.title.horizontalAlign && "center" === t.title.verticalAlign) && t.title.render();
                if (t.subtitles)
                    for (var a = 0; a < t.subtitles.length; a++) {
                        var b = t.subtitles[a];
                        (b.dockInsidePlotArea || "center" === b.horizontalAlign && "center" === b.verticalAlign) && b.render()
                    }
                t.legend && (t.legend.dockInsidePlotArea || "center" === t.legend.horizontalAlign && "center" ===
                    t.legend.verticalAlign) && t.legend.render()
            }
            var t = this;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var k = this.data[a.dataSeriesIndexes[0]],
                    r = k.dataPoints,
                    p = 10,
                    n = this.plotArea,
                    d = k.dataPointEOs,
                    m = 2,
                    q, s = 1.3,
                    u = 20 / 180 * Math.PI,
                    v = 6,
                    x = {
                        x: (n.x2 + n.x1) / 2,
                        y: (n.y2 + n.y1) / 2
                    },
                    z = 0;
                a = !1;
                for (var B = 0; B < r.length; B++) z += Math.abs(r[B].y), !a && ("undefined" !== typeof r[B].indexLabel && null !== r[B].indexLabel && 0 < r[B].indexLabel.toString().length) && (a = !0), !a && ("undefined" !== typeof r[B].label && null !== r[B].label && 0 < r[B].label.toString().length) &&
                (a = !0);
                if (0 !== z) {
                    a = a || "undefined" !== typeof k.indexLabel && null !== k.indexLabel && 0 < k.indexLabel.toString().length;
                    var A = "inside" !== k.indexLabelPlacement && a ? 0.75 * Math.min(n.width, n.height) / 2 : 0.92 * Math.min(n.width, n.height) / 2;
                    k.radius && (A = O(k.radius, A));
                    var C = "undefined" !== typeof k.innerRadius && null !== k.innerRadius ? O(k.innerRadius, A) : 0.7 * A;
                    k.radius = A;
                    "doughnut" === k.type && (k.innerRadius = C);
                    var L = Math.min(C / A, (A - 1) / A);
                    this.pieDoughnutClickHandler = function(a) {
                        t.isAnimating || !y(a.dataSeries.explodeOnClick) &&
                        !a.dataSeries.explodeOnClick || (a = a.dataPoint, a.exploded = a.exploded ? !1 : !0, 1 < this.dataPoints.length && t._animator.animate(0, 500, function(a) {
                            b(a);
                            l()
                        }))
                    };
                    f();
                    h();
                    h();
                    h();
                    h();
                    this.disableToolTip = !0;
                    this._animator.animate(0, this.animatedRender ? this.animationDuration : 0, function(a) {
                        var b = t.plotArea.ctx;
                        b.clearRect(n.x1, n.y1, n.width, n.height);
                        b.fillStyle = t.backgroundColor;
                        b.fillRect(n.x1, n.y1, n.width, n.height);
                        a = d[0].startAngle + 2 * Math.PI * a;
                        for (b = 0; b < r.length; b++) {
                            var c = 0 === b ? d[b].startAngle : e,
                                e = c + (d[b].endAngle -
                                    d[b].startAngle),
                                f = !1;
                            e > a && (e = a, f = !0);
                            var g = r[b].color ? r[b].color : k._colorSet[b % k._colorSet.length];
                            e > c && ra(t.plotArea.ctx, d[b].center, d[b].radius, g, k.type, c, e, k.fillOpacity, d[b].percentInnerRadius);
                            if (f) break
                        }
                        l()
                    }, function() {
                        t.disableToolTip = !1;
                        t._animator.animate(0, t.animatedRender ? 500 : 0, function(a) {
                            b(a);
                            l()
                        })
                    })
                }
            }
        };
        var sa = function(a, f, b, c) {
            "undefined" === typeof b && (b = 1);
            0 >= Math.round(f.y4 - f.y1) || (a.save(), a.globalAlpha = b, a.beginPath(), a.moveTo(Math.round(f.x1), Math.round(f.y1)), a.lineTo(Math.round(f.x2),
                Math.round(f.y2)), a.lineTo(Math.round(f.x3), Math.round(f.y3)), a.lineTo(Math.round(f.x4), Math.round(f.y4)), "undefined" !== f.x5 && (a.lineTo(Math.round(f.x5), Math.round(f.y5)), a.lineTo(Math.round(f.x6), Math.round(f.y6))), a.closePath(), a.fillStyle = c ? c : f.color, a.fill(), a.globalAplha = 1, a.restore())
        };
        q.prototype.renderFunnel = function(a) {
            function f() {
                for (var a = 0, b = [], c = 0; c < x.length; c++) {
                    if ("undefined" === typeof x[c].y) return -1;
                    x[c].y = "number" === typeof x[c].y ? x[c].y : 0;
                    a += Math.abs(x[c].y)
                }
                if (0 === a) return -1;
                for (c =
                         b[0] = 0; c < x.length; c++) b.push(Math.abs(x[c].y) * O / a);
                return b
            }

            function b() {
                var a = X,
                    b = V,
                    c = K,
                    d = Y,
                    e, f;
                e = Q;
                f = $ - N;
                headArea = (f - e) * (b - a + (d - c)) / 2;
                headArea = Math.abs(headArea);
                c = Y - K;
                e = f - e;
                f = c * (f - $);
                f = Math.abs(f);
                f = headArea + f;
                for (var d = [], g = 0, h = 0; h < x.length; h++) {
                    if ("undefined" === typeof x[h].y) return -1;
                    x[h].y = "number" === typeof x[h].y ? x[h].y : 0;
                    g += Math.abs(x[h].y)
                }
                if (0 === g) return -1;
                for (var k = d[0] = 0, l = 0, n, b = b - a, t = !1, h = 0; h < x.length; h++) a = Math.abs(x[h].y) * f / g, t ? k = 0 == Number(c.toFixed(3)) ? 0 : a / c : (sqrt = fa * fa * b * b - 4 * Math.abs(fa) *
                    a, 0 > sqrt ? (n = c, k = (b + n) * (e - l) / 2, a -= k, k = e - l, l += e - l, k += 0 == n ? 0 : a / n, l += a / n, t = !0) : (k = (Math.abs(fa) * b - Math.sqrt(sqrt)) / 2, n = b - 2 * k / Math.abs(fa), l += k, l > e && (l -= k, n = c, k = (b + n) * (e - l) / 2, a -= k, k = e - l, l += e - l, k += a / n, l += a / n, t = !0), b = n)), d.push(k);
                return d
            }

            function c() {
                if (u && x) {
                    for (var a, b, c, e, f, g, h, k, l, n, t, p, r, m, w = [], q = [], A = {
                        percent: null,
                        total: null
                    }, B = null, z = 0; z < x.length; z++) m = M[z], m = "undefined" !== typeof m.x5 ? (m.y2 + m.y4) / 2 : (m.y2 + m.y3) / 2, m = d(m).x2 + 1, w[z] = P - m - U;
                    m = 0.5 * U;
                    for (var z = 0, za = x.length - 1; z < x.length || 0 <= za; z++, za--) {
                        b =
                            u.reversed ? x[za] : x[z];
                        a = b.color ? b.color : u.reversed ? u._colorSet[(x.length - 1 - z) % u._colorSet.length] : u._colorSet[z % u._colorSet.length];
                        c = b.indexLabelPlacement || u.indexLabelPlacement || "outside";
                        e = b.indexLabelBackgroundColor || u.indexLabelBackgroundColor || (v ? "transparent" : null);
                        f = b.indexLabelFontColor || u.indexLabelFontColor || "#979797";
                        g = y(b.indexLabelFontSize) ? u.indexLabelFontSize : b.indexLabelFontSize;
                        h = b.indexLabelFontStyle || u.indexLabelFontStyle || "normal";
                        k = b.indexLabelFontFamily || u.indexLabelFontFamily ||
                            "arial";
                        l = b.indexLabelFontWeight || u.indexLabelFontWeight || "normal";
                        a = b.indexLabelLineColor || u.options.indexLabelLineColor || a;
                        n = "number" === typeof b.indexLabelLineThickness ? b.indexLabelLineThickness : "number" === typeof u.indexLabelLineThickness ? u.indexLabelLineThickness : 2;
                        t = b.indexLabelLineDashType || u.indexLabelLineDashType || "solid";
                        p = "undefined" !== typeof b.indexLabelWrap ? b.indexLabelWrap : "undefined" !== typeof u.indexLabelWrap ? u.indexLabelWrap : !0;
                        r = u.dataPointIds[z];
                        s._eventManager.objectMap[r] = {
                            id: r,
                            objectType: "dataPoint",
                            dataPointIndex: z,
                            dataSeriesIndex: 0,
                            funnelSection: M[u.reversed ? x.length - 1 - z : z]
                        };
                        "inside" === u.indexLabelPlacement && (w[z] = z !== ga ? u.reversed ? M[z].x2 - M[z].x1 : M[z].x3 - M[z].x4 : M[z].x3 - M[z].x6, 20 > w[z] && (w[z] = z !== ga ? u.reversed ? M[z].x3 - M[z].x4 : M[z].x2 - M[z].x1 : M[z].x2 - M[z].x1, w[z] /= 2));
                        r = b.indexLabelMaxWidth ? b.indexLabelMaxWidth : u.options.indexLabelMaxWidth ? u.indexLabelMaxWidth : w[z];
                        if (r > w[z] || 0 > r) r = w[z];
                        q[z] = "inside" === u.indexLabelPlacement ? M[z].height : !1;
                        A = s.getPercentAndTotal(u, b);
                        if (u.indexLabelFormatter || b.indexLabelFormatter) B = {
                            chart: s.options,
                            dataSeries: u,
                            dataPoint: b,
                            total: A.total,
                            percent: A.percent
                        };
                        b = b.indexLabelFormatter ? b.indexLabelFormatter(B) : b.indexLabel ? s.replaceKeywordsWithValue(b.indexLabel, b, u, z) : u.indexLabelFormatter ? u.indexLabelFormatter(B) : u.indexLabel ? s.replaceKeywordsWithValue(u.indexLabel, b, u, z) : b.label ? b.label : "";
                        0 >= n && (n = 0);
                        1E3 > r && 1E3 - r < m && (r += 1E3 - r);
                        R.roundRect || Ca(R);
                        c = new la(R, {
                            fontSize: g,
                            fontFamily: k,
                            fontColor: f,
                            fontStyle: h,
                            fontWeight: l,
                            horizontalAlign: c,
                            backgroundColor: e,
                            maxWidth: r,
                            maxHeight: !1 === q[z] ? p ? 4.28571429 * g : 1.5 * g : q[z],
                            text: b,
                            padding: ha
                        });
                        c.measureText();
                        F.push({
                            textBlock: c,
                            id: u.reversed ? za : z,
                            isDirty: !1,
                            lineColor: a,
                            lineThickness: n,
                            lineDashType: t,
                            height: c.height < c.maxHeight ? c.height : c.maxHeight,
                            width: c.width < c.maxWidth ? c.width : c.maxWidth
                        })
                    }
                }
            }

            function e() {
                var a, b, c, d, e, f = [];
                e = !1;
                c = 0;
                for (var g = P - V - U / 2, g = u.options.indexLabelMaxWidth ? u.indexLabelMaxWidth > g ? g : u.indexLabelMaxWidth : g, h = F.length - 1; 0 <= h; h--) {
                    dataPoint = x[F[h].id];
                    c = F[h];
                    d = c.textBlock;
                    b = (a = n(h) < M.length ? F[n(h)] : null) ? a.textBlock : null;
                    c = c.height;
                    a && d.y + c + ha > b.y && (e = !0);
                    c = dataPoint.indexLabelMaxWidth || g;
                    if (c > g || 0 > c) c = g;
                    f.push(c)
                }
                if (e)
                    for (h = F.length - 1; 0 <= h; h--) a = M[h], F[h].textBlock.maxWidth = f[f.length - (h + 1)], F[h].textBlock.measureText(), F[h].textBlock.x = P - g, c = F[h].textBlock.height < F[h].textBlock.maxHeight ? F[h].textBlock.height : F[h].textBlock.maxHeight, e = F[h].textBlock.width < F[h].textBlock.maxWidth ? F[h].textBlock.width : F[h].textBlock.maxWidth, F[h].height = c, F[h].width = e, c = "undefined" !==
                    typeof a.x5 ? (a.y2 + a.y4) / 2 : (a.y2 + a.y3) / 2, F[h].textBlock.y = c - F[h].height / 2, u.reversed ? (F[h].textBlock.y + F[h].height > T + C && (F[h].textBlock.y = T + C - F[h].height), F[h].textBlock.y < ta - C && (F[h].textBlock.y = ta - C)) : (F[h].textBlock.y < T - C && (F[h].textBlock.y = T - C), F[h].textBlock.y + F[h].height > ta + C && (F[h].textBlock.y = ta + C - F[h].height))
            }

            function g() {
                var a, b, c, e;
                if ("inside" !== u.indexLabelPlacement)
                    for (var f = 0; f < M.length; f++) 0 == F[f].textBlock.text.length ? F[f].isDirty = !0 : (a = M[f], c = "undefined" !== typeof a.x5 ? (a.y2 + a.y4) /
                        2 : (a.y2 + a.y3) / 2, b = u.reversed ? "undefined" !== typeof a.x5 ? c > aa ? d(c).x2 + 1 : (a.x2 + a.x3) / 2 + 1 : (a.x2 + a.x3) / 2 + 1 : "undefined" !== typeof a.x5 ? c < aa ? d(c).x2 + 1 : (a.x4 + a.x3) / 2 + 1 : (a.x2 + a.x3) / 2 + 1, F[f].textBlock.x = b + U, F[f].textBlock.y = c - F[f].height / 2, u.reversed ? (F[f].textBlock.y + F[f].height > T + C && (F[f].textBlock.y = T + C - F[f].height), F[f].textBlock.y < ta - C && (F[f].textBlock.y = ta - C)) : (F[f].textBlock.y < T - C && (F[f].textBlock.y = T - C), F[f].textBlock.y + F[f].height > ta + C && (F[f].textBlock.y = ta + C - F[f].height)));
                else
                    for (f = 0; f < M.length; f++) 0 ==
                    F[f].textBlock.text.length ? F[f].isDirty = !0 : (a = M[f], b = a.height, c = F[f].height, e = F[f].width, b >= c ? (b = f != ga ? (a.x4 + a.x3) / 2 - e / 2 : (a.x5 + a.x4) / 2 - e / 2, c = f != ga ? (a.y1 + a.y3) / 2 - c / 2 : (a.y1 + a.y4) / 2 - c / 2, F[f].textBlock.x = b, F[f].textBlock.y = c) : F[f].isDirty = !0)
            }

            function h() {
                function a(b, c) {
                    var d;
                    if (0 > b || b >= F.length) return 0;
                    var e, f = F[b].textBlock;
                    if (0 > c) {
                        c *= -1;
                        e = p(b);
                        d = l(e, b);
                        if (d >= c) return f.y -= c, c;
                        if (0 == b) return 0 < d && (f.y -= d), d;
                        d += a(e, -(c - d));
                        0 < d && (f.y -= d);
                        return d
                    }
                    e = n(b);
                    d = l(b, e);
                    if (d >= c) return f.y += c, c;
                    if (b == M.length -
                        1) return 0 < d && (f.y += d), d;
                    d += a(e, c - d);
                    0 < d && (f.y += d);
                    return d
                }

                function b() {
                    var a, d, e, f, g = 0,
                        h;
                    f = ($ - Q + 2 * C) / t;
                    h = t;
                    for (var k, l = 1; l < h; l++) {
                        e = l * f;
                        for (var r = F.length - 1; 0 <= r; r--) !F[r].isDirty && (F[r].textBlock.y < e && F[r].textBlock.y + F[r].height > e) && (k = n(r), !(k >= F.length - 1) && F[r].textBlock.y + F[r].height + ha > F[k].textBlock.y && (F[r].textBlock.y = F[r].textBlock.y + F[r].height - e > e - F[r].textBlock.y ? e + 1 : e - F[r].height - 1))
                    }
                    for (k = M.length - 1; 0 < k; k--)
                        if (!F[k].isDirty) {
                            e = p(k);
                            if (0 > e && (e = 0, F[e].isDirty)) break;
                            if (F[k].textBlock.y <
                                F[e].textBlock.y + F[e].height) {
                                d = d || k;
                                f = k;
                                for (h = 0; F[f].textBlock.y < F[e].textBlock.y + F[e].height + ha;) {
                                    a = a || F[f].textBlock.y + F[f].height;
                                    h += F[f].height;
                                    h += ha;
                                    f = e;
                                    if (0 >= f) {
                                        f = 0;
                                        h += F[f].height;
                                        break
                                    }
                                    e = p(f);
                                    if (0 > e) {
                                        f = 0;
                                        h += F[f].height;
                                        break
                                    }
                                }
                                if (f != k) {
                                    g = F[f].textBlock.y;
                                    a -= g;
                                    a = h - a;
                                    g = c(a, d, f);
                                    break
                                }
                            }
                        }
                    return g
                }

                function c(a, b, d) {
                    var e = [],
                        f = 0,
                        g = 0;
                    for (a = Math.abs(a); d <= b; d++) e.push(M[d]);
                    e.sort(function(a, b) {
                        return a.height - b.height
                    });
                    for (d = 0; d < e.length; d++)
                        if (b = e[d], f < a) g++, f += F[b.id].height + ha, F[b.id].textBlock.text =
                            "", F[b.id].indexLabelText = "", F[b.id].isDirty = !0, F[b.id].textBlock.measureText();
                        else break;
                    return g
                }
                for (var d, e, f, g, h, k, t = 1, r = 0; r < 2 * t; r++) {
                    for (var m = F.length - 1; 0 <= m && !(previousTextBlock = (previousLabel = 0 <= p(m) ? F[p(m)] : null) ? previousLabel.textBlock : null, f = F[m], g = f.textBlock, k = (h = n(m) < M.length ? F[n(m)] : null) ? h.textBlock : null, d = +f.height.toFixed(6), e = +g.y.toFixed(6), !f.isDirty && (h && e + d + ha > +k.y.toFixed(6)) && (d = g.y + d + ha - k.y, e = a(m, -d), e < d && (0 < e && (d -= e), e = a(n(m), d), e != d))); m--);
                    b()
                }
            }

            function l(a, b) {
                return (b <
                M.length ? F[b].textBlock.y : u.reversed ? T + C : ta + C) - (0 > a ? u.reversed ? ta - C : T - C : F[a].textBlock.y + F[a].height + ha)
            }

            function t(a, b, c) {
                var d, e, f, h = [],
                    l = C,
                    n = []; - 1 !== b && (0 <= ma.indexOf(b) ? (e = ma.indexOf(b), ma.splice(e, 1)) : (ma.push(b), ma = ma.sort(function(a, b) {
                    return a - b
                })));
                if (0 === ma.length) h = ka;
                else {
                    e = C * (1 != ma.length || 0 != ma[0] && ma[0] != M.length - 1 ? 2 : 1) / k();
                    for (var t = 0; t < M.length; t++) {
                        if (1 == ma.length && 0 == ma[0]) {
                            if (0 === t) {
                                h.push(ka[t]);
                                d = l;
                                continue
                            }
                        } else 0 === t && (d = -1 * l);
                        h.push(ka[t] + d);
                        if (0 <= ma.indexOf(t) || t < M.length &&
                            0 <= ma.indexOf(t + 1)) d += e
                    }
                }
                f = function() {
                    for (var a = [], b = 0; b < M.length; b++) a.push(h[b] - M[b].y1);
                    return a
                }();
                var p = {
                    startTime: (new Date).getTime(),
                    duration: c || 500,
                    easingFunction: function(a, b, c, d) {
                        return H.easing.easeOutQuart(a, b, c, d)
                    },
                    changeSection: function(a) {
                        for (var b, c, d = 0; d < M.length; d++) b = f[d], c = M[d], newY = b * a, "undefined" === typeof n[d] && (n[d] = 0), 0 > n && (n *= -1), c.y1 += newY - n[d], c.y2 += newY - n[d], c.y3 += newY - n[d], c.y4 += newY - n[d], c.y5 && (c.y5 += newY - n[d], c.y6 += newY - n[d]), n[d] = newY
                    }
                };
                a._animator.animate(0, c, function(c) {
                    var d =
                        a.plotArea.ctx || a.ctx;
                    ja = !0;
                    d.clearRect(z.x1, z.y1, z.x2 - z.x1, z.y2 - z.y1);
                    d.fillStyle = a.backgroundColor;
                    d.fillRect(z.x1, z.y1, z.width, z.height);
                    p.changeSection(c, b);
                    var e = {};
                    e.dataSeries = u;
                    e.dataPoint = u.reversed ? u.dataPoints[x.length - 1 - b] : u.dataPoints[b];
                    e.index = u.reversed ? x.length - 1 - b : b;
                    a.toolTip.highlightObjects([e]);
                    for (e = 0; e < M.length; e++) sa(d, M[e], u.fillOpacity);
                    q(d);
                    J && ("inside" !== u.indexLabelPlacement ? r(d) : g(), m(d));
                    1 <= c && (ja = !1)
                }, null, H.easing.easeOutQuart)
            }

            function k() {
                for (var a = 0, b = 0; b < M.length -
                1; b++)(0 <= ma.indexOf(b) || 0 <= ma.indexOf(b + 1)) && a++;
                return a
            }

            function r(a) {
                for (var b, c, e, f, g = 0; g < M.length; g++) f = 1 === F[g].lineThickness % 2 ? 0.5 : 0, c = ((M[g].y2 + M[g].y4) / 2 << 0) + f, b = d(c).x2 - 1, e = F[g].textBlock.x, f = (F[g].textBlock.y + F[g].height / 2 << 0) + f, F[g].isDirty || 0 == F[g].lineThickness || (a.strokeStyle = F[g].lineColor, a.lineWidth = F[g].lineThickness, a.setLineDash && a.setLineDash(G(F[g].lineDashType, F[g].lineThickness)), a.beginPath(), a.moveTo(b, c), a.lineTo(e, f), a.stroke())
            }

            function p(a) {
                for (a -= 1; - 1 <= a && -1 != a && F[a].isDirty; a--);
                return a
            }

            function n(a) {
                for (a += 1; a <= M.length && a != M.length && F[a].isDirty; a++);
                return a
            }

            function d(a) {
                for (var b, c = 0; c < x.length; c++)
                    if (M[c].y1 < a && M[c].y4 > a) {
                        b = M[c];
                        break
                    }
                return b ? (a = b.y6 ? a > b.y6 ? b.x3 + (b.x4 - b.x3) / (b.y4 - b.y3) * (a - b.y3) : b.x2 + (b.x3 - b.x2) / (b.y3 - b.y2) * (a - b.y2) : b.x2 + (b.x3 - b.x2) / (b.y3 - b.y2) * (a - b.y2), {
                    x1: a,
                    x2: a
                }) : -1
            }

            function m(a) {
                for (var b = 0; b < M.length; b++) F[b].isDirty || (a && (F[b].textBlock.ctx = a), F[b].textBlock.render(!0))
            }

            function q(a) {
                s.plotArea.layoutManager.reset();
                a.roundRect || Ca(a);
                s.title &&
                (s.title.dockInsidePlotArea || "center" === s.title.horizontalAlign && "center" === s.title.verticalAlign) && (s.title.ctx = a, s.title.render());
                if (s.subtitles)
                    for (var b = 0; b < s.subtitles.length; b++) {
                        var c = s.subtitles[b];
                        if (c.dockInsidePlotArea || "center" === c.horizontalAlign && "center" === c.verticalAlign) s.subtitles.ctx = a, c.render()
                    }
                s.legend && (s.legend.dockInsidePlotArea || "center" === s.legend.horizontalAlign && "center" === s.legend.verticalAlign) && (s.legend.ctx = a, s.legend.render());
                Z.fNg && Z.fNg(s)
            }
            var s = this;
            if (!(0 >=
                    a.dataSeriesIndexes.length)) {
                for (var u = this.data[a.dataSeriesIndexes[0]], x = u.dataPoints, z = this.plotArea, C = 0.025 * z.width, B = 0.01 * z.width, A = 0, O = z.height - 2 * C, L = Math.min(z.width - 2 * B, 2.8 * z.height), J = !1, I = 0; I < x.length; I++)
                    if (!J && ("undefined" !== typeof x[I].indexLabel && null !== x[I].indexLabel && 0 < x[I].indexLabel.toString().length) && (J = !0), !J && ("undefined" !== typeof x[I].label && null !== x[I].label && 0 < x[I].label.toString().length) && (J = !0), !J && "function" === typeof u.indexLabelFormatter || "function" === typeof x[I].indexLabelFormatter) J = !0;
                J = J || "undefined" !== typeof u.indexLabel && null !== u.indexLabel && 0 < u.indexLabel.toString().length;
                "inside" !== u.indexLabelPlacement && J || (B = (z.width - 0.75 * L) / 2);
                var I = z.x1 + B,
                    P = z.x2 - B,
                    Q = z.y1 + C,
                    $ = z.y2 - C,
                    R = a.targetCanvasCtx || this.plotArea.ctx || this.ctx;
                if (0 != u.length && (u.dataPoints && u.visible) && 0 !== x.length) {
                    var N, E;
                    a = 75 * L / 100;
                    var U = 30 * (P - a) / 100;
                    "funnel" === u.type ? (N = y(u.options.neckHeight) ? 0.35 * O : u.neckHeight, E = y(u.options.neckWidth) ? 0.25 * a : u.neckWidth, "string" === typeof N && N.match(/%$/) ? (N = parseInt(N), N =
                        N * O / 100) : N = parseInt(N), "string" === typeof E && E.match(/%$/) ? (E = parseInt(E), E = E * a / 100) : E = parseInt(E), N > O ? N = O : 0 >= N && (N = 0), E > a ? E = a - 0.5 : 0 >= E && (E = 0)) : "pyramid" === u.type && (E = N = 0, u.reversed = u.reversed ? !1 : !0);
                    var B = I + a / 2,
                        X = I,
                        V = I + a,
                        T = u.reversed ? $ : Q,
                        K = B - E / 2,
                        Y = B + E / 2,
                        aa = u.reversed ? Q + N : $ - N,
                        ta = u.reversed ? Q : $;
                    a = [];
                    var B = [],
                        M = [],
                        L = [],
                        W = Q,
                        ga, fa = (aa - T) / (K - X),
                        ia = -fa,
                        I = "area" === (u.valueRepresents ? u.valueRepresents : "height") ? b() : f();
                    if (-1 !== I) {
                        if (u.reversed)
                            for (L.push(W), E = I.length - 1; 0 < E; E--) W += I[E], L.push(W);
                        else
                            for (E =
                                     0; E < I.length; E++) W += I[E], L.push(W);
                        if (u.reversed)
                            for (E = 0; E < I.length; E++) L[E] < aa ? (a.push(K), B.push(Y), ga = E) : (a.push((L[E] - T + fa * X) / fa), B.push((L[E] - T + ia * V) / ia));
                        else
                            for (E = 0; E < I.length; E++) L[E] < aa ? (a.push((L[E] - T + fa * X) / fa), B.push((L[E] - T + ia * V) / ia), ga = E) : (a.push(K), B.push(Y));
                        for (E = 0; E < I.length - 1; E++) W = u.reversed ? x[x.length - 1 - E].color ? x[x.length - 1 - E].color : u._colorSet[(x.length - 1 - E) % u._colorSet.length] : x[E].color ? x[E].color : u._colorSet[E % u._colorSet.length], E === ga ? M.push({
                            x1: a[E],
                            y1: L[E],
                            x2: B[E],
                            y2: L[E],
                            x3: Y,
                            y3: aa,
                            x4: B[E + 1],
                            y4: L[E + 1],
                            x5: a[E + 1],
                            y5: L[E + 1],
                            x6: K,
                            y6: aa,
                            id: E,
                            height: L[E + 1] - L[E],
                            color: W
                        }) : M.push({
                            x1: a[E],
                            y1: L[E],
                            x2: B[E],
                            y2: L[E],
                            x3: B[E + 1],
                            y3: L[E + 1],
                            x4: a[E + 1],
                            y4: L[E + 1],
                            id: E,
                            height: L[E + 1] - L[E],
                            color: W
                        });
                        var ha = 2,
                            F = [],
                            ja = !1,
                            ma = [],
                            ka = [],
                            I = !1;
                        a = a = 0;
                        Da(ma);
                        for (E = 0; E < x.length; E++) x[E].exploded && (I = !0, u.reversed ? ma.push(x.length - 1 - E) : ma.push(E));
                        R.clearRect(z.x1, z.y1, z.width, z.height);
                        R.fillStyle = s.backgroundColor;
                        R.fillRect(z.x1, z.y1, z.width, z.height);
                        if (J && u.visible && (c(), g(), e(), "inside" !== u.indexLabelPlacement)) {
                            h();
                            for (E = 0; E < x.length; E++) F[E].isDirty || (a = F[E].textBlock.x + F[E].width, a = (P - a) / 2, 0 == E && (A = a), A > a && (A = a));
                            for (E = 0; E < M.length; E++) M[E].x1 += A, M[E].x2 += A, M[E].x3 += A, M[E].x4 += A, M[E].x5 && (M[E].x5 += A, M[E].x6 += A), F[E].textBlock.x += A
                        }
                        for (E = 0; E < M.length; E++) A = M[E], sa(R, A, u.fillOpacity), ka.push(A.y1);
                        q(R);
                        J && u.visible && ("inside" === u.indexLabelPlacement || s.animationEnabled || r(R), s.animationEnabled || m());
                        if (!J)
                            for (E = 0; E < x.length; E++) A = u.dataPointIds[E], a = {
                                id: A,
                                objectType: "dataPoint",
                                dataPointIndex: E,
                                dataSeriesIndex: 0,
                                funnelSection: M[u.reversed ? x.length - 1 - E : E]
                            }, s._eventManager.objectMap[A] = a;
                        !s.animationEnabled && I ? t(s, -1, 0) : s.animationEnabled && !s.animatedRender && t(s, -1, 0);
                        this.funnelPyramidClickHandler = function(a) {
                            var b = -1;
                            if (!ja && !s.isAnimating && (y(a.dataSeries.explodeOnClick) || a.dataSeries.explodeOnClick) && (b = u.reversed ? x.length - 1 - a.dataPointIndex : a.dataPointIndex, 0 <= b)) {
                                a = b;
                                if ("funnel" === u.type || "pyramid" === u.type) u.reversed ? x[x.length - 1 - a].exploded = x[x.length - 1 - a].exploded ? !1 : !0 : x[a].exploded = x[a].exploded ?
                                    !1 : !0;
                                t(s, b, 500)
                            }
                        };
                        return {
                            source: R,
                            dest: this.plotArea.ctx,
                            animationCallback: function(a, b) {
                                H.fadeInAnimation(a, b);
                                1 <= a && (t(s, -1, 500), q(s.plotArea.ctx || s.ctx))
                            },
                            easingFunction: H.easing.easeInQuad,
                            animationBase: 0
                        }
                    }
                }
            }
        };
        q.prototype.animationRequestId = null;
        q.prototype.requestAnimFrame = function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
                window.setTimeout(a, 1E3 / 60)
            }
        }();
        q.prototype.cancelRequestAnimFrame = window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
        q.prototype.set = function(a, f, b) {
            b = "undefined" === typeof b ? !0 : b;
            "options" === a ? (this.options = f, b && this.render()) : q.base.set.call(this, a, f, b)
        };
        q.prototype.exportChart = function(a) {
            a = "undefined" === typeof a ? {} : a;
            var f = a.format ? a.format : "png",
                b = a.fileName ? a.fileName : this.exportFileName;
            if (a.toDataURL) return this.canvas.toDataURL("image/" + f);
            s(this.canvas, f, b)
        };
        q.prototype.print = function() {
            var a = this.exportChart({
                    toDataURL: !0
                }),
                f = document.createElement("iframe");
            f.setAttribute("class", "canvasjs-chart-print-frame");
            f.setAttribute("style", "position:absolute; width:100%; border: 0px; margin: 0px 0px 0px 0px; padding 0px 0px 0px 0px;");
            f.style.height = this.height + "px";
            this._canvasJSContainer.appendChild(f);
            var b = this,
                c = f.contentWindow || f.contentDocument.document || f.contentDocument;
            c.document.open();
            c.document.write('<!DOCTYPE HTML>\n<html><body style="margin: 0px 0px 0px 0px; padding: 0px 0px 0px 0px;"><img src="' + a + '"/><body/></html>');
            c.document.close();
            setTimeout(function() {
                c.focus();
                c.print();
                setTimeout(function() {
                    b._canvasJSContainer.removeChild(f)
                }, 1E3)
            }, 500)
        };
        q.prototype.getPercentAndTotal = function(a, f) {
            var b = null,
                c = null,
                e = null;
            if (0 <= a.type.indexOf("stacked")) c = 0, b = f.x.getTime ? f.x.getTime() : f.x, b in a.plotUnit.yTotals && (c = a.plotUnit.yTotals[b], e = isNaN(f.y) ? 0 : 100 * (f.y / c));
            else if ("pie" ===
                a.type || "doughnut" === a.type || "funnel" === a.type || "pyramid" === a.type) {
                for (i = c = 0; i < a.dataPoints.length; i++) isNaN(a.dataPoints[i].y) || (c += a.dataPoints[i].y);
                e = isNaN(f.y) ? 0 : 100 * (f.y / c)
            }
            return {
                percent: e,
                total: c
            }
        };
        q.prototype.replaceKeywordsWithValue = function(a, f, b, c, e) {
            var g = this;
            e = "undefined" === typeof e ? 0 : e;
            if ((0 <= b.type.indexOf("stacked") || "pie" === b.type || "doughnut" === b.type || "funnel" === b.type || "pyramid" === b.type) && (0 <= a.indexOf("#percent") || 0 <= a.indexOf("#total"))) {
                var h = "#percent",
                    l = "#total",
                    t = this.getPercentAndTotal(b,
                        f),
                    l = isNaN(t.total) ? l : t.total,
                    h = isNaN(t.percent) ? h : t.percent;
                do {
                    t = "";
                    if (b.percentFormatString) t = b.percentFormatString;
                    else {
                        var t = "#,##0.",
                            k = Math.max(Math.ceil(Math.log(1 / Math.abs(h)) / Math.LN10), 2);
                        if (isNaN(k) || !isFinite(k)) k = 2;
                        for (var r = 0; r < k; r++) t += "#";
                        b.percentFormatString = t
                    }
                    a = a.replace("#percent", W(h, t, g._cultureInfo));
                    a = a.replace("#total", W(l, b.yValueFormatString ? b.yValueFormatString : "#,##0.########", g._cultureInfo))
                } while (0 <= a.indexOf("#percent") || 0 <= a.indexOf("#total"))
            }
            return a.replace(/\{.*?\}|"[^"]*"|'[^']*'/g,
                function(a) {
                    if ('"' === a[0] && '"' === a[a.length - 1] || "'" === a[0] && "'" === a[a.length - 1]) return a.slice(1, a.length - 1);
                    a = Ga(a.slice(1, a.length - 1));
                    a = a.replace("#index", e);
                    var h = null;
                    try {
                        var d = a.match(/(.*?)\s*\[\s*(.*?)\s*\]/);
                        d && 0 < d.length && (h = Ga(d[2]), a = Ga(d[1]))
                    } catch (k) {}
                    d = null;
                    if ("color" === a) return "waterfall" === b.type ? f.color ? f.color : -1 < f.y ? b.risingColor : b.fallingColor : "error" === b.type ? b.color ? b.color : b._colorSet[h % b._colorSet.length] : f.color ? f.color : b.color ? b.color : b._colorSet[c % b._colorSet.length];
                    if (f.hasOwnProperty(a)) d =
                        f;
                    else if (b.hasOwnProperty(a)) d = b;
                    else return "";
                    d = d[a];
                    null !== h && (d = d[h]);
                    if ("x" === a)
                        if ("dateTime" === b.axisX.valueType || "dateTime" === b.xValueType || f.x && f.x.getTime) {
                            if (g.plotInfo.plotTypes[0].plotUnits[0].axisX && !g.plotInfo.plotTypes[0].plotUnits[0].axisX.logarithmic) return Ba(d, f.xValueFormatString ? f.xValueFormatString : b.xValueFormatString ? b.xValueFormatString : b.xValueFormatString = g.axisX && g.axisX.autoValueFormatString ? g.axisX.autoValueFormatString : "DD MMM YY", g._cultureInfo)
                        } else return W(d, f.xValueFormatString ?
                            f.xValueFormatString : b.xValueFormatString ? b.xValueFormatString : b.xValueFormatString = "#,##0.########", g._cultureInfo);
                    else return "y" === a ? W(d, f.yValueFormatString ? f.yValueFormatString : b.yValueFormatString ? b.yValueFormatString : b.yValueFormatString = "#,##0.########", g._cultureInfo) : "z" === a ? W(d, f.zValueFormatString ? f.zValueFormatString : b.zValueFormatString ? b.zValueFormatString : b.zValueFormatString = "#,##0.########", g._cultureInfo) : d
                })
        };
        pa(T, X);
        T.prototype.render = function() {
            var a = this.dockInsidePlotArea ?
                this.chart.plotArea : this.chart,
                f = a.layoutManager.getFreeSpace(),
                b = null,
                c = 0,
                e = 0,
                g = 0,
                h = 0,
                l = this.markerMargin = this.chart.options.legend && !y(this.chart.options.legend.markerMargin) ? this.chart.options.legend.markerMargin : 0.3 * this.fontSize;
            this.height = 0;
            var t = [],
                k = [];
            "top" === this.verticalAlign || "bottom" === this.verticalAlign ? (this.orientation = "horizontal", b = this.verticalAlign, g = this.maxWidth = null !== this.maxWidth ? this.maxWidth : f.width, h = this.maxHeight = null !== this.maxHeight ? this.maxHeight : 0.5 * f.height) : "center" ===
                this.verticalAlign && (this.orientation = "vertical", b = this.horizontalAlign, g = this.maxWidth = null !== this.maxWidth ? this.maxWidth : 0.5 * f.width, h = this.maxHeight = null !== this.maxHeight ? this.maxHeight : f.height);
            for (var r = [], p = 0; p < this.dataSeries.length; p++) {
                var n = this.dataSeries[p];
                if (n.dataPoints && n.dataPoints.length)
                    if ("pie" !== n.type && "doughnut" !== n.type && "funnel" !== n.type && "pyramid" !== n.type) {
                        var d = n.legendMarkerType = n.legendMarkerType ? n.legendMarkerType : "line" !== n.type && "stepLine" !== n.type && "spline" !== n.type &&
                            "scatter" !== n.type && "bubble" !== n.type || !n.markerType ? "error" === n.type && n._linkedSeries ? n._linkedSeries.legendMarkerType ? n._linkedSeries.legendMarkerType : Q.getDefaultLegendMarker(n._linkedSeries.type) : Q.getDefaultLegendMarker(n.type) : n.markerType,
                            m = n.legendText ? n.legendText : this.itemTextFormatter ? this.itemTextFormatter({
                                chart: this.chart,
                                legend: this.options,
                                dataSeries: n,
                                dataPoint: null
                            }) : n.name,
                            q = n.legendMarkerColor = n.legendMarkerColor ? n.legendMarkerColor : n.markerColor ? n.markerColor : "error" === n.type ?
                                y(n.whiskerColor) ? n._colorSet[0] : n.whiskerColor : n._colorSet[0],
                            s = n.markerSize || "line" !== n.type && "stepLine" !== n.type && "spline" !== n.type ? 0.75 * this.lineHeight : 0,
                            u = n.legendMarkerBorderColor ? n.legendMarkerBorderColor : n.markerBorderColor,
                            v = n.legendMarkerBorderThickness ? n.legendMarkerBorderThickness : n.markerBorderThickness ? Math.max(1, Math.round(0.2 * s)) : 0;
                        "error" === n.type && r.push(q);
                        m = this.chart.replaceKeywordsWithValue(m, n.dataPoints[0], n, p);
                        d = {
                            markerType: d,
                            markerColor: q,
                            text: m,
                            textBlock: null,
                            chartType: n.type,
                            markerSize: s,
                            lineColor: n._colorSet[0],
                            dataSeriesIndex: n.index,
                            dataPointIndex: null,
                            markerBorderColor: u,
                            markerBorderThickness: v
                        };
                        t.push(d)
                    } else
                        for (var x = 0; x < n.dataPoints.length; x++) {
                            var z = n.dataPoints[x],
                                d = z.legendMarkerType ? z.legendMarkerType : n.legendMarkerType ? n.legendMarkerType : Q.getDefaultLegendMarker(n.type),
                                m = z.legendText ? z.legendText : n.legendText ? n.legendText : this.itemTextFormatter ? this.itemTextFormatter({
                                    chart: this.chart,
                                    legend: this.options,
                                    dataSeries: n,
                                    dataPoint: z
                                }) : z.name ? z.name : "DataPoint: " +
                                    (x + 1),
                                q = z.legendMarkerColor ? z.legendMarkerColor : n.legendMarkerColor ? n.legendMarkerColor : z.color ? z.color : n.color ? n.color : n._colorSet[x % n._colorSet.length],
                                s = 0.75 * this.lineHeight,
                                u = z.legendMarkerBorderColor ? z.legendMarkerBorderColor : n.legendMarkerBorderColor ? n.legendMarkerBorderColor : z.markerBorderColor ? z.markerBorderColor : n.markerBorderColor,
                                v = z.legendMarkerBorderThickness ? z.legendMarkerBorderThickness : n.legendMarkerBorderThickness ? n.legendMarkerBorderThickness : z.markerBorderThickness || n.markerBorderThickness ?
                                    Math.max(1, Math.round(0.2 * s)) : 0,
                                m = this.chart.replaceKeywordsWithValue(m, z, n, x),
                                d = {
                                    markerType: d,
                                    markerColor: q,
                                    text: m,
                                    textBlock: null,
                                    chartType: n.type,
                                    markerSize: s,
                                    dataSeriesIndex: p,
                                    dataPointIndex: x,
                                    markerBorderColor: u,
                                    markerBorderThickness: v
                                };
                            (z.showInLegend || n.showInLegend && !1 !== z.showInLegend) && t.push(d)
                        }
            }!0 === this.reversed && t.reverse();
            if (0 < t.length) {
                n = null;
                m = x = z = v = 0;
                z = null !== this.itemWidth ? null !== this.itemMaxWidth ? Math.min(this.itemWidth, this.itemMaxWidth, g) : this.itemMaxWidth = Math.min(this.itemWidth,
                    g) : null !== this.itemMaxWidth ? Math.min(this.itemMaxWidth, g) : this.itemMaxWidth = g;
                s = 0 === s ? 0.75 * this.lineHeight : s;
                z -= s + l;
                for (p = 0; p < t.length; p++) {
                    d = t[p];
                    q = z;
                    if ("line" === d.chartType || "spline" === d.chartType || "stepLine" === d.chartType) q -= 2 * 0.1 * this.lineHeight;
                    if (!(0 >= h || "undefined" === typeof h || 0 >= q || "undefined" === typeof q)) {
                        if ("horizontal" === this.orientation) {
                            d.textBlock = new la(this.ctx, {
                                x: 0,
                                y: 0,
                                maxWidth: q,
                                maxHeight: this.itemWrap ? h : this.lineHeight,
                                angle: 0,
                                text: d.text,
                                horizontalAlign: "left",
                                fontSize: this.fontSize,
                                fontFamily: this.fontFamily,
                                fontWeight: this.fontWeight,
                                fontColor: this.fontColor,
                                fontStyle: this.fontStyle,
                                textBaseline: "middle"
                            });
                            d.textBlock.measureText();
                            null !== this.itemWidth && (d.textBlock.width = this.itemWidth - (s + l + ("line" === d.chartType || "spline" === d.chartType || "stepLine" === d.chartType ? 2 * 0.1 * this.lineHeight : 0)));
                            if (!n || n.width + Math.round(d.textBlock.width + s + l + (0 === n.width ? 0 : this.horizontalSpacing) + ("line" === d.chartType || "spline" === d.chartType || "stepLine" === d.chartType ? 2 * 0.1 * this.lineHeight : 0)) > g) n = {
                                items: [],
                                width: 0
                            }, k.push(n), this.height += x, x = 0;
                            x = Math.max(x, d.textBlock.height)
                        } else d.textBlock = new la(this.ctx, {
                            x: 0,
                            y: 0,
                            maxWidth: z,
                            maxHeight: !0 === this.itemWrap ? h : 1.5 * this.fontSize,
                            angle: 0,
                            text: d.text,
                            horizontalAlign: "left",
                            fontSize: this.fontSize,
                            fontFamily: this.fontFamily,
                            fontWeight: this.fontWeight,
                            fontColor: this.fontColor,
                            fontStyle: this.fontStyle,
                            textBaseline: "middle"
                        }), d.textBlock.measureText(), null !== this.itemWidth && (d.textBlock.width = this.itemWidth - (s + l + ("line" === d.chartType || "spline" === d.chartType ||
                        "stepLine" === d.chartType ? 2 * 0.1 * this.lineHeight : 0))), this.height < h - this.lineHeight ? (n = {
                            items: [],
                            width: 0
                        }, k.push(n)) : (n = k[v], v = (v + 1) % k.length), this.height += d.textBlock.height;
                        d.textBlock.x = n.width;
                        d.textBlock.y = 0;
                        n.width += Math.round(d.textBlock.width + s + l + (0 === n.width ? 0 : this.horizontalSpacing) + ("line" === d.chartType || "spline" === d.chartType || "stepLine" === d.chartType ? 2 * 0.1 * this.lineHeight : 0));
                        n.items.push(d);
                        this.width = Math.max(n.width, this.width);
                        m = d.textBlock.width + (s + l + ("line" === d.chartType || "spline" ===
                        d.chartType || "stepLine" === d.chartType ? 2 * 0.1 * this.lineHeight : 0))
                    }
                }
                this.itemWidth = m;
                this.height = !1 === this.itemWrap ? k.length * this.lineHeight : this.height + x;
                this.height = Math.min(h, this.height);
                this.width = Math.min(g, this.width)
            }
            "top" === this.verticalAlign ? (e = "left" === this.horizontalAlign ? f.x1 : "right" === this.horizontalAlign ? f.x2 - this.width : f.x1 + f.width / 2 - this.width / 2, c = f.y1) : "center" === this.verticalAlign ? (e = "left" === this.horizontalAlign ? f.x1 : "right" === this.horizontalAlign ? f.x2 - this.width : f.x1 + f.width / 2 - this.width /
                2, c = f.y1 + f.height / 2 - this.height / 2) : "bottom" === this.verticalAlign && (e = "left" === this.horizontalAlign ? f.x1 : "right" === this.horizontalAlign ? f.x2 - this.width : f.x1 + f.width / 2 - this.width / 2, c = f.y2 - this.height);
            this.items = t;
            for (p = 0; p < this.items.length; p++) d = t[p], d.id = ++this.chart._eventManager.lastObjectId, this.chart._eventManager.objectMap[d.id] = {
                id: d.id,
                objectType: "legendItem",
                legendItemIndex: p,
                dataSeriesIndex: d.dataSeriesIndex,
                dataPointIndex: d.dataPointIndex
            };
            (0 < this.borderThickness && this.borderColor || this.backgroundColor) &&
            this.ctx.roundRect(e, c, this.width, this.height, this.cornerRadius, this.borderThickness, this.backgroundColor, this.borderColor);
            for (p = f = 0; p < k.length; p++) {
                n = k[p];
                for (z = x = 0; z < n.items.length; z++) {
                    d = n.items[z];
                    q = d.textBlock.x + e + (0 === z ? 0.2 * s : this.horizontalSpacing);
                    u = c + f;
                    m = q;
                    this.chart.data[d.dataSeriesIndex].visible || (this.ctx.globalAlpha = 0.5);
                    this.ctx.save();
                    this.ctx.beginPath();
                    this.ctx.rect(e, c, g, Math.max(h - h % this.lineHeight, 0));
                    this.ctx.clip();
                    if ("line" === d.chartType || "stepLine" === d.chartType || "spline" ===
                        d.chartType) this.ctx.strokeStyle = d.lineColor, this.ctx.lineWidth = Math.ceil(this.lineHeight / 8), this.ctx.beginPath(), this.ctx.moveTo(q - 0.1 * this.lineHeight, u + this.lineHeight / 2), this.ctx.lineTo(q + 0.85 * this.lineHeight, u + this.lineHeight / 2), this.ctx.stroke(), m -= 0.1 * this.lineHeight;
                    if ("error" === d.chartType) {
                        this.ctx.strokeStyle = r[0];
                        v = s / 8;
                        this.ctx.lineWidth = v;
                        this.ctx.beginPath();
                        var v = q - 0.08 * this.lineHeight + 0.1 * this.lineHeight,
                            B = u + 0.15 * this.lineHeight,
                            A = 0.7 * this.lineHeight,
                            C = A + 0.02 * this.lineHeight;
                        this.ctx.moveTo(v,
                            B);
                        this.ctx.lineTo(v + A, B);
                        this.ctx.stroke();
                        this.ctx.beginPath();
                        this.ctx.moveTo(v + A / 2, B);
                        this.ctx.lineTo(v + A / 2, B + C);
                        this.ctx.stroke();
                        this.ctx.beginPath();
                        this.ctx.moveTo(v, B + C);
                        this.ctx.lineTo(v + A, B + C);
                        this.ctx.stroke();
                        r.shift()
                    }
                    ja.drawMarker(q + s / 2, u + this.lineHeight / 2, this.ctx, d.markerType, "error" === d.chartType || "line" === d.chartType || "spline" === d.chartType ? d.markerSize / 2 : d.markerSize, d.markerColor, d.markerBorderColor, d.markerBorderThickness);
                    d.textBlock.x = q + l + s;
                    if ("line" === d.chartType || "stepLine" ===
                        d.chartType || "spline" === d.chartType) d.textBlock.x += 0.1 * this.lineHeight;
                    d.textBlock.y = Math.round(u + this.lineHeight / 2);
                    d.textBlock.render(!0);
                    this.ctx.restore();
                    x = 0 < z ? Math.max(x, d.textBlock.height) : d.textBlock.height;
                    this.chart.data[d.dataSeriesIndex].visible || (this.ctx.globalAlpha = 1);
                    v = R(d.id);
                    this.ghostCtx.fillStyle = v;
                    this.ghostCtx.beginPath();
                    this.ghostCtx.fillRect(m, d.textBlock.y - this.lineHeight / 2, d.textBlock.x + d.textBlock.width - m, d.textBlock.height);
                    d.x1 = this.chart._eventManager.objectMap[d.id].x1 =
                        m;
                    d.y1 = this.chart._eventManager.objectMap[d.id].y1 = d.textBlock.y - this.lineHeight / 2;
                    d.x2 = this.chart._eventManager.objectMap[d.id].x2 = d.textBlock.x + d.textBlock.width;
                    d.y2 = this.chart._eventManager.objectMap[d.id].y2 = d.textBlock.y + d.textBlock.height - this.lineHeight / 2
                }
                f += x
            }
            0 < t.length && a.layoutManager.registerSpace(b, {
                width: this.width + 2 + 2,
                height: this.height + 5 + 5
            });
            this.bounds = {
                x1: e,
                y1: c,
                x2: e + this.width,
                y2: c + this.height
            }
        };
        pa(Q, X);
        Q.prototype.getDefaultAxisPlacement = function() {
            var a = this.type;
            if ("column" ===
                a || "line" === a || "stepLine" === a || "spline" === a || "area" === a || "stepArea" === a || "splineArea" === a || "stackedColumn" === a || "stackedLine" === a || "bubble" === a || "scatter" === a || "stackedArea" === a || "stackedColumn100" === a || "stackedLine100" === a || "stackedArea100" === a || "candlestick" === a || "ohlc" === a || "rangeColumn" === a || "rangeArea" === a || "rangeSplineArea" === a || "boxAndWhisker" === a || "waterfall" === a) return "normal";
            if ("bar" === a || "stackedBar" === a || "stackedBar100" === a || "rangeBar" === a) return "xySwapped";
            if ("pie" === a || "doughnut" ===
                a || "funnel" === a || "pyramid" === a) return "none";
            "error" !== a && window.console.log("Unknown Chart Type: " + a);
            return null
        };
        Q.getDefaultLegendMarker = function(a) {
            if ("column" === a || "stackedColumn" === a || "stackedLine" === a || "bar" === a || "stackedBar" === a || "stackedBar100" === a || "bubble" === a || "scatter" === a || "stackedColumn100" === a || "stackedLine100" === a || "stepArea" === a || "candlestick" === a || "ohlc" === a || "rangeColumn" === a || "rangeBar" === a || "rangeArea" === a || "rangeSplineArea" === a || "boxAndWhisker" === a || "waterfall" === a) return "square";
            if ("line" === a || "stepLine" === a || "spline" === a || "pie" === a || "doughnut" === a) return "circle";
            if ("area" === a || "splineArea" === a || "stackedArea" === a || "stackedArea100" === a || "funnel" === a || "pyramid" === a) return "triangle";
            if ("error" === a) return "none";
            window.console.log("Unknown Chart Type: " + a);
            return null
        };
        Q.prototype.getDataPointAtX = function(a, f) {
            if (!this.dataPoints || 0 === this.dataPoints.length) return null;
            var b = {
                    dataPoint: null,
                    distance: Infinity,
                    index: NaN
                },
                c = null,
                e = 0,
                g = 0,
                h = 1,
                l = Infinity,
                t = 0,
                k = 0,
                r = 0;
            "none" !== this.chart.plotInfo.axisPlacement &&
            (this.axisX.logarithmic ? (r = Math.log(this.dataPoints[this.dataPoints.length - 1].x / this.dataPoints[0].x), r = 1 < r ? Math.min(Math.max((this.dataPoints.length - 1) / r * Math.log(a / this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0) : (r = this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x, r = 0 < r ? Math.min(Math.max((this.dataPoints.length - 1) / r * (a - this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0));
            for (;;) {
                g = 0 < h ? r + e : r - e;
                if (0 <= g && g < this.dataPoints.length) {
                    var c = this.dataPoints[g],
                        p = this.axisX.logarithmic ?
                            c.x > a ? c.x / a : a / c.x : Math.abs(c.x - a);
                    p < b.distance && (b.dataPoint = c, b.distance = p, b.index = g);
                    c = p;
                    c <= l ? l = c : 0 < h ? t++ : k++;
                    if (1E3 < t && 1E3 < k) break
                } else if (0 > r - e && r + e >= this.dataPoints.length) break; - 1 === h ? (e++, h = 1) : h = -1
            }
            return f || b.dataPoint.x !== a ? f && null !== b.dataPoint ? b : null : b
        };
        Q.prototype.getDataPointAtXY = function(a, f, b) {
            if (!this.dataPoints || 0 === this.dataPoints.length || a < this.chart.plotArea.x1 || a > this.chart.plotArea.x2 || f < this.chart.plotArea.y1 || f > this.chart.plotArea.y2) return null;
            b = b || !1;
            var c = [],
                e = 0,
                g = 0,
                h =
                    1,
                l = !1,
                t = Infinity,
                k = 0,
                r = 0,
                p = 0;
            if ("none" !== this.chart.plotInfo.axisPlacement)
                if (p = (this.chart.axisX[0] ? this.chart.axisX[0] : this.chart.axisX2[0]).getXValueAt({
                        x: a,
                        y: f
                    }), this.axisX.logarithmic) var n = Math.log(this.dataPoints[this.dataPoints.length - 1].x / this.dataPoints[0].x),
                    p = 1 < n ? Math.min(Math.max((this.dataPoints.length - 1) / n * Math.log(p / this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0;
                else n = this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x, p = 0 < n ? Math.min(Math.max((this.dataPoints.length -
                    1) / n * (p - this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0;
            for (;;) {
                g = 0 < h ? p + e : p - e;
                if (0 <= g && g < this.dataPoints.length) {
                    var n = this.chart._eventManager.objectMap[this.dataPointIds[g]],
                        d = this.dataPoints[g],
                        m = null;
                    if (n) {
                        switch (this.type) {
                            case "column":
                            case "stackedColumn":
                            case "stackedColumn100":
                            case "bar":
                            case "stackedBar":
                            case "stackedBar100":
                            case "rangeColumn":
                            case "rangeBar":
                            case "waterfall":
                            case "error":
                                a >= n.x1 && (a <= n.x2 && f >= n.y1 && f <= n.y2) && (c.push({
                                    dataPoint: d,
                                    dataPointIndex: g,
                                    dataSeries: this,
                                    distance: Math.min(Math.abs(n.x1 -
                                        a), Math.abs(n.x2 - a), Math.abs(n.y1 - f), Math.abs(n.y2 - f))
                                }), l = !0);
                                break;
                            case "line":
                            case "stepLine":
                            case "spline":
                            case "area":
                            case "stepArea":
                            case "stackedArea":
                            case "stackedArea100":
                            case "splineArea":
                            case "scatter":
                                var q = na("markerSize", d, this) || 4,
                                    s = b ? 20 : q,
                                    m = Math.sqrt(Math.pow(n.x1 - a, 2) + Math.pow(n.y1 - f, 2));
                                m <= s && c.push({
                                    dataPoint: d,
                                    dataPointIndex: g,
                                    dataSeries: this,
                                    distance: m
                                });
                                n = Math.abs(n.x1 - a);
                                n <= t ? t = n : 0 < h ? k++ : r++;
                                m <= q / 2 && (l = !0);
                                break;
                            case "rangeArea":
                            case "rangeSplineArea":
                                q = na("markerSize", d, this) ||
                                    4;
                                s = b ? 20 : q;
                                m = Math.min(Math.sqrt(Math.pow(n.x1 - a, 2) + Math.pow(n.y1 - f, 2)), Math.sqrt(Math.pow(n.x1 - a, 2) + Math.pow(n.y2 - f, 2)));
                                m <= s && c.push({
                                    dataPoint: d,
                                    dataPointIndex: g,
                                    dataSeries: this,
                                    distance: m
                                });
                                n = Math.abs(n.x1 - a);
                                n <= t ? t = n : 0 < h ? k++ : r++;
                                m <= q / 2 && (l = !0);
                                break;
                            case "bubble":
                                q = n.size;
                                m = Math.sqrt(Math.pow(n.x1 - a, 2) + Math.pow(n.y1 - f, 2));
                                m <= q / 2 && (c.push({
                                    dataPoint: d,
                                    dataPointIndex: g,
                                    dataSeries: this,
                                    distance: m
                                }), l = !0);
                                break;
                            case "pie":
                            case "doughnut":
                                q = n.center;
                                s = "doughnut" === this.type ? n.percentInnerRadius * n.radius :
                                    0;
                                m = Math.sqrt(Math.pow(q.x - a, 2) + Math.pow(q.y - f, 2));
                                m < n.radius && m > s && (m = Math.atan2(f - q.y, a - q.x), 0 > m && (m += 2 * Math.PI), m = Number(((180 * (m / Math.PI) % 360 + 360) % 360).toFixed(12)), q = Number(((180 * (n.startAngle / Math.PI) % 360 + 360) % 360).toFixed(12)), s = Number(((180 * (n.endAngle / Math.PI) % 360 + 360) % 360).toFixed(12)), 0 === s && 1 < n.endAngle && (s = 360), q >= s && 0 !== d.y && (s += 360, m < q && (m += 360)), m > q && m < s && (c.push({
                                    dataPoint: d,
                                    dataPointIndex: g,
                                    dataSeries: this,
                                    distance: 0
                                }), l = !0));
                                break;
                            case "funnel":
                            case "pyramid":
                                m = n.funnelSection;
                                f > m.y1 && f < m.y4 && (m.y6 ? f > m.y6 ? (g = m.x6 + (m.x5 - m.x6) / (m.y5 - m.y6) * (f - m.y6), m = m.x3 + (m.x4 - m.x3) / (m.y4 - m.y3) * (f - m.y3)) : (g = m.x1 + (m.x6 - m.x1) / (m.y6 - m.y1) * (f - m.y1), m = m.x2 + (m.x3 - m.x2) / (m.y3 - m.y2) * (f - m.y2)) : (g = m.x1 + (m.x4 - m.x1) / (m.y4 - m.y1) * (f - m.y1), m = m.x2 + (m.x3 - m.x2) / (m.y3 - m.y2) * (f - m.y2)), a > g && a < m && (c.push({
                                    dataPoint: d,
                                    dataPointIndex: n.dataPointIndex,
                                    dataSeries: this,
                                    distance: 0
                                }), l = !0));
                                break;
                            case "boxAndWhisker":
                                if (a >= n.x1 - n.borderThickness / 2 && a <= n.x2 + n.borderThickness / 2 && f >= n.y4 - n.borderThickness / 2 && f <= n.y1 + n.borderThickness /
                                    2 || Math.abs(n.x2 - a + n.x1 - a) < n.borderThickness && f >= n.y1 && f <= n.y4) c.push({
                                    dataPoint: d,
                                    dataPointIndex: g,
                                    dataSeries: this,
                                    distance: Math.min(Math.abs(n.x1 - a), Math.abs(n.x2 - a), Math.abs(n.y2 - f), Math.abs(n.y3 - f))
                                }), l = !0;
                                break;
                            case "candlestick":
                                if (a >= n.x1 - n.borderThickness / 2 && a <= n.x2 + n.borderThickness / 2 && f >= n.y2 - n.borderThickness / 2 && f <= n.y3 + n.borderThickness / 2 || Math.abs(n.x2 - a + n.x1 - a) < n.borderThickness && f >= n.y1 && f <= n.y4) c.push({
                                    dataPoint: d,
                                    dataPointIndex: g,
                                    dataSeries: this,
                                    distance: Math.min(Math.abs(n.x1 - a),
                                        Math.abs(n.x2 - a), Math.abs(n.y2 - f), Math.abs(n.y3 - f))
                                }), l = !0;
                                break;
                            case "ohlc":
                                if (Math.abs(n.x2 - a + n.x1 - a) < n.borderThickness && f >= n.y2 && f <= n.y3 || a >= n.x1 && a <= (n.x2 + n.x1) / 2 && f >= n.y1 - n.borderThickness / 2 && f <= n.y1 + n.borderThickness / 2 || a >= (n.x1 + n.x2) / 2 && a <= n.x2 && f >= n.y4 - n.borderThickness / 2 && f <= n.y4 + n.borderThickness / 2) c.push({
                                    dataPoint: d,
                                    dataPointIndex: g,
                                    dataSeries: this,
                                    distance: Math.min(Math.abs(n.x1 - a), Math.abs(n.x2 - a), Math.abs(n.y2 - f), Math.abs(n.y3 - f))
                                }), l = !0
                        }
                        if (l || 1E3 < k && 1E3 < r) break
                    }
                } else if (0 > p - e && p + e >=
                    this.dataPoints.length) break; - 1 === h ? (e++, h = 1) : h = -1
            }
            a = null;
            for (f = 0; f < c.length; f++) a ? c[f].distance <= a.distance && (a = c[f]) : a = c[f];
            return a
        };
        Q.prototype.getMarkerProperties = function(a, f, b, c) {
            var e = this.dataPoints;
            return {
                x: f,
                y: b,
                ctx: c,
                type: e[a].markerType ? e[a].markerType : this.markerType,
                size: e[a].markerSize ? e[a].markerSize : this.markerSize,
                color: e[a].markerColor ? e[a].markerColor : this.markerColor ? this.markerColor : e[a].color ? e[a].color : this.color ? this.color : this._colorSet[a % this._colorSet.length],
                borderColor: e[a].markerBorderColor ?
                    e[a].markerBorderColor : this.markerBorderColor ? this.markerBorderColor : null,
                borderThickness: e[a].markerBorderThickness ? e[a].markerBorderThickness : this.markerBorderThickness ? this.markerBorderThickness : null
            }
        };
        pa(C, X);
        C.prototype.createExtraLabelsForLog = function(a) {
            a = (a || 0) + 1;
            if (!(5 < a)) {
                var f = this.logLabelValues[0] || this.intervalStartPosition;
                if (Math.log(this.range) / Math.log(f / this.viewportMinimum) < this.noTicks - 1) {
                    for (var b = C.getNiceNumber((f - this.viewportMinimum) / Math.min(Math.max(2, this.noTicks - this.logLabelValues.length),
                        3), !0), c = Math.ceil(this.viewportMinimum / b) * b; c < f; c += b) c < this.viewportMinimum || this.logLabelValues.push(c);
                    this.logLabelValues.sort(Pa);
                    this.createExtraLabelsForLog(a)
                }
            }
        };
        C.prototype.createLabels = function() {
            var a, f, b = 0,
                c = 0,
                e, g = 0,
                h = 0,
                c = 0,
                c = this.interval,
                l = 0,
                t, k = 0.6 * this.chart.height,
                m;
            a = !1;
            var p = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [],
                n = p.length ? y(this.scaleBreaks.firstBreakIndex) ? 0 : this.scaleBreaks.firstBreakIndex : 0;
            if ("axisX" !== this.type || "dateTime" !== this.valueType || this.logarithmic) {
                e =
                    this.viewportMaximum;
                if (this.labels) {
                    a = Math.ceil(c);
                    for (var c = Math.ceil(this.intervalStartPosition), d = !1, b = c; b < this.viewportMaximum; b += a)
                        if (this.labels[b]) d = !0;
                        else {
                            d = !1;
                            break
                        }
                    d && (this.interval = a, this.intervalStartPosition = c)
                }
                if (this.logarithmic && !this.equidistantInterval)
                    for (this.logLabelValues || (this.logLabelValues = [], this.createExtraLabelsForLog()), c = 0, d = n; c < this.logLabelValues.length; c++)
                        if (b = this.logLabelValues[c], b < this.viewportMinimum) c++;
                        else {
                            for (; d < p.length && b > p[d].endValue; d++);
                            a = d < p.length &&
                                b >= p[d].startValue && b <= p[d].endValue;
                            m = b;
                            a || (a = this.labelFormatter ? this.labelFormatter({
                                chart: this.chart,
                                axis: this.options,
                                value: m,
                                label: this.labels[m] ? this.labels[m] : null
                            }) : "axisX" === this.type && this.labels[m] ? this.labels[m] : W(m, this.valueFormatString, this.chart._cultureInfo), a = new la(this.ctx, {
                                x: 0,
                                y: 0,
                                maxWidth: g,
                                maxHeight: h,
                                angle: this.labelAngle,
                                text: this.prefix + a + this.suffix,
                                backgroundColor: this.labelBackgroundColor,
                                borderColor: this.labelBorderColor,
                                borderThickness: this.labelBorderThickness,
                                cornerRadius: this.labelCornerRadius,
                                horizontalAlign: "left",
                                fontSize: this.labelFontSize,
                                fontFamily: this.labelFontFamily,
                                fontWeight: this.labelFontWeight,
                                fontColor: this.labelFontColor,
                                fontStyle: this.labelFontStyle,
                                textBaseline: "middle",
                                borderThickness: 0
                            }), this._labels.push({
                                position: m,
                                textBlock: a,
                                effectiveHeight: null
                            }))
                        }
                d = n;
                for (b = this.intervalStartPosition; b <= e; b = parseFloat((this.logarithmic && this.equidistantInterval ? b * Math.pow(this.logarithmBase, this.interval) : b + this.interval).toFixed(12))) {
                    for (; d < p.length && b > p[d].endValue; d++);
                    a = d < p.length &&
                        b >= p[d].startValue && b <= p[d].endValue;
                    m = b;
                    a || (a = this.labelFormatter ? this.labelFormatter({
                        chart: this.chart,
                        axis: this.options,
                        value: m,
                        label: this.labels[m] ? this.labels[m] : null
                    }) : "axisX" === this.type && this.labels[m] ? this.labels[m] : W(m, this.valueFormatString, this.chart._cultureInfo), a = new la(this.ctx, {
                        x: 0,
                        y: 0,
                        maxWidth: g,
                        maxHeight: h,
                        angle: this.labelAngle,
                        text: this.prefix + a + this.suffix,
                        horizontalAlign: "left",
                        backgroundColor: this.labelBackgroundColor,
                        borderColor: this.labelBorderColor,
                        borderThickness: this.labelBorderThickness,
                        cornerRadius: this.labelCornerRadius,
                        fontSize: this.labelFontSize,
                        fontFamily: this.labelFontFamily,
                        fontWeight: this.labelFontWeight,
                        fontColor: this.labelFontColor,
                        fontStyle: this.labelFontStyle,
                        textBaseline: "middle"
                    }), this._labels.push({
                        position: m,
                        textBlock: a,
                        effectiveHeight: null
                    }))
                }
            } else
                for (this.intervalStartPosition = this.getLabelStartPoint(new Date(this.viewportMinimum), this.intervalType, this.interval), e = Ta(new Date(this.viewportMaximum), this.interval, this.intervalType), d = n, b = this.intervalStartPosition; b <
                e; Ta(b, c, this.intervalType)) {
                    for (a = b.getTime(); d < p.length && a > p[d].endValue; d++);
                    m = a;
                    a = d < p.length && a >= p[d].startValue && a <= p[d].endValue;
                    a || (a = this.labelFormatter ? this.labelFormatter({
                        chart: this.chart,
                        axis: this.options,
                        value: new Date(m),
                        label: this.labels[m] ? this.labels[m] : null
                    }) : "axisX" === this.type && this.labels[m] ? this.labels[m] : Ba(m, this.valueFormatString, this.chart._cultureInfo), a = new la(this.ctx, {
                        x: 0,
                        y: 0,
                        maxWidth: g,
                        backgroundColor: this.labelBackgroundColor,
                        borderColor: this.labelBorderColor,
                        borderThickness: this.labelBorderThickness,
                        cornerRadius: this.labelCornerRadius,
                        maxHeight: h,
                        angle: this.labelAngle,
                        text: this.prefix + a + this.suffix,
                        horizontalAlign: "left",
                        fontSize: this.labelFontSize,
                        fontFamily: this.labelFontFamily,
                        fontWeight: this.labelFontWeight,
                        fontColor: this.labelFontColor,
                        fontStyle: this.labelFontStyle,
                        textBaseline: "middle"
                    }), this._labels.push({
                        position: m,
                        textBlock: a,
                        effectiveHeight: null,
                        breaksLabelType: void 0
                    }))
                }
            if ("bottom" === this._position || "top" === this._position) l = this.logarithmic && !this.equidistantInterval && 2 <= this._labels.length ?
                this.lineCoordinates.width * Math.log(Math.min(this._labels[this._labels.length - 1].position / this._labels[this._labels.length - 2].position, this._labels[1].position / this._labels[0].position)) / Math.log(this.range) : this.lineCoordinates.width / (this.logarithmic && this.equidistantInterval ? Math.log(this.range) / Math.log(this.logarithmBase) : Math.abs(this.range)) * U[this.intervalType + "Duration"] * this.interval, g = "undefined" === typeof this.options.labelMaxWidth ? 0.5 * this.chart.width >> 0 : this.options.labelMaxWidth, this.chart.panEnabled ||
            (h = "undefined" === typeof this.options.labelWrap || this.labelWrap ? 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize);
            else if ("left" === this._position || "right" === this._position) l = this.logarithmic && !this.equidistantInterval && 2 <= this._labels.length ? this.lineCoordinates.height * Math.log(Math.min(this._labels[this._labels.length - 1].position / this._labels[this._labels.length - 2].position, this._labels[1].position / this._labels[0].position)) / Math.log(this.range) : this.lineCoordinates.height / (this.logarithmic && this.equidistantInterval ?
                Math.log(this.range) / Math.log(this.logarithmBase) : Math.abs(this.range)) * U[this.intervalType + "Duration"] * this.interval, this.chart.panEnabled || (g = "undefined" === typeof this.options.labelMaxWidth ? 0.3 * this.chart.width >> 0 : this.options.labelMaxWidth), h = "undefined" === typeof this.options.labelWrap || this.labelWrap ? 0.3 * this.chart.height >> 0 : 1.5 * this.labelFontSize;
            for (c = 0; c < this._labels.length; c++) {
                a = this._labels[c].textBlock;
                a.maxWidth = g;
                a.maxHeight = h;
                var q = a.measureText();
                t = q.height
            }
            e = [];
            n = p = 0;
            if (this.labelAutoFit ||
                this.options.labelAutoFit)
                if (y(this.labelAngle) || (this.labelAngle = (this.labelAngle % 360 + 360) % 360, 90 < this.labelAngle && 270 > this.labelAngle ? this.labelAngle -= 180 : 270 <= this.labelAngle && 360 >= this.labelAngle && (this.labelAngle -= 360)), "bottom" === this._position || "top" === this._position)
                    if (g = 0.9 * l >> 0, n = 0, !this.chart.panEnabled && 1 <= this._labels.length) {
                        this.sessionVariables.labelFontSize = this.labelFontSize;
                        this.sessionVariables.labelMaxWidth = g;
                        this.sessionVariables.labelMaxHeight = h;
                        this.sessionVariables.labelAngle =
                            this.labelAngle;
                        this.sessionVariables.labelWrap = this.labelWrap;
                        for (b = 0; b < this._labels.length; b++)
                            if (!this._labels[b].breaksLabelType) {
                                a = this._labels[b].textBlock;
                                for (var s, d = a.text.split(" "), c = 0; c < d.length; c++) m = d[c], this.ctx.font = a.fontStyle + " " + a.fontWeight + " " + a.fontSize + "px " + a.fontFamily, m = this.ctx.measureText(m), m.width > n && (s = b, n = m.width)
                            }
                        b = 0;
                        for (b = this.intervalStartPosition < this.viewportMinimum ? 1 : 0; b < this._labels.length; b++)
                            if (!this._labels[b].breaksLabelType) {
                                a = this._labels[b].textBlock;
                                q = a.measureText();
                                for (d = b + 1; d < this._labels.length; d++)
                                    if (!this._labels[d].breaksLabelType) {
                                        f = this._labels[d].textBlock;
                                        f = f.measureText();
                                        break
                                    }
                                e.push(a.height);
                                this.sessionVariables.labelMaxHeight = Math.max.apply(Math, e);
                                Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                                Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
                                c = g * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (h - a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                                if (y(this.options.labelAngle) && isNaN(this.options.labelAngle) && 0 !== this.options.labelAngle)
                                    if (this.sessionVariables.labelMaxHeight =
                                            0 === this.labelAngle ? h : Math.min((c - g * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), c), m = (k - (t + a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(-25))) / Math.sin(Math.PI / 180 * Math.abs(-25)), !y(this.options.labelWrap)) this.labelWrap ? y(this.options.labelMaxWidth) ? (this.sessionVariables.labelMaxWidth = Math.min(Math.max(g, n), m), this.sessionVariables.labelWrap = this.labelWrap, q.width + f.width >> 0 > 2 * g && (this.sessionVariables.labelAngle = -25)) : (this.sessionVariables.labelWrap =
                                        this.labelWrap, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelAngle = this.sessionVariables.labelMaxWidth > g ? -25 : this.sessionVariables.labelAngle) : y(this.options.labelMaxWidth) ? (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxHeight = h, this.sessionVariables.labelMaxWidth = g, q.width + f.width >> 0 > 2 * g && (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = m)) : (this.sessionVariables.labelAngle = this.sessionVariables.labelMaxWidth >
                                    g ? -25 : this.sessionVariables.labelAngle, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelMaxHeight = h, this.sessionVariables.labelWrap = this.labelWrap);
                                    else {
                                        if (y(this.options.labelWrap))
                                            if (!y(this.options.labelMaxWidth)) this.options.labelMaxWidth < g ? (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelMaxHeight = c) : (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelMaxHeight =
                                                h);
                                            else if (!y(f))
                                                if (c = q.width + f.width >> 0, d = this.labelFontSize, n < g) c - 2 * g > p && (p = c - 2 * g, c >= 2 * g && c < 2.2 * g ? (this.sessionVariables.labelMaxWidth = g, y(this.options.labelFontSize) && 12 < d && (d = Math.floor(12 / 13 * d), a.measureText()), this.sessionVariables.labelFontSize = y(this.options.labelFontSize) ? d : this.options.labelFontSize, this.sessionVariables.labelAngle = this.labelAngle) : c >= 2.2 * g && c < 2.8 * g ? (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = m, this.sessionVariables.labelFontSize = d) : c >= 2.8 *
                                                g && c < 3.2 * g ? (this.sessionVariables.labelMaxWidth = Math.max(g, n), this.sessionVariables.labelWrap = !0, y(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = y(this.options.labelFontSize) ? d : this.options.labelFontSize, this.sessionVariables.labelAngle = this.labelAngle) : c >= 3.2 * g && c < 3.6 * g ? (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelWrap = !0, this.sessionVariables.labelMaxWidth = m, this.sessionVariables.labelFontSize =
                                                    this.labelFontSize) : c > 3.6 * g && c < 5 * g ? (y(this.options.labelFontSize) && 12 < d && (d = Math.floor(12 / 13 * d), a.measureText()), this.sessionVariables.labelFontSize = y(this.options.labelFontSize) ? d : this.options.labelFontSize, this.sessionVariables.labelWrap = !0, this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = m) : c > 5 * g && (this.sessionVariables.labelWrap = !0, this.sessionVariables.labelMaxWidth = g, this.sessionVariables.labelFontSize = d, this.sessionVariables.labelMaxHeight = h, this.sessionVariables.labelAngle =
                                                    this.labelAngle));
                                                else if (s === b && (0 === s && n + this._labels[s + 1].textBlock.measureText().width - 2 * g > p || s === this._labels.length - 1 && n + this._labels[s - 1].textBlock.measureText().width - 2 * g > p || 0 < s && s < this._labels.length - 1 && n + this._labels[s + 1].textBlock.measureText().width - 2 * g > p && n + this._labels[s - 1].textBlock.measureText().width - 2 * g > p)) p = 0 === s ? n + this._labels[s + 1].textBlock.measureText().width - 2 * g : n + this._labels[s - 1].textBlock.measureText().width - 2 * g, this.sessionVariables.labelFontSize = y(this.options.labelFontSize) ?
                                                    d : this.options.labelFontSize, this.sessionVariables.labelWrap = !0, this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = m;
                                                else if (0 === p)
                                                    for (this.sessionVariables.labelFontSize = y(this.options.labelFontSize) ? d : this.options.labelFontSize, this.sessionVariables.labelWrap = !0, c = 0; c < this._labels.length; c++) a = this._labels[c].textBlock, a.maxWidth = this.sessionVariables.labelMaxWidth = Math.min(Math.max(g, n), m), q = a.measureText(), c < this._labels.length - 1 && (d = c + 1, f = this._labels[d].textBlock, f.maxWidth =
                                                        this.sessionVariables.labelMaxWidth = Math.min(Math.max(g, n), m), f = f.measureText(), q.width + f.width >> 0 > 2 * g && (this.sessionVariables.labelAngle = -25))
                                    } else(this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? h : Math.min((c - g * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), c), m = 0 != this.labelAngle ? (k - (t + a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) :
                                    g, this.sessionVariables.labelMaxHeight = h = this.labelWrap ? (k - m * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) : 1.5 * this.labelFontSize, y(this.options.labelWrap)) ? y(this.options.labelWrap) && (this.labelWrap && !y(this.options.labelMaxWidth) ? (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : m, this.sessionVariables.labelMaxHeight = h) : (this.sessionVariables.labelAngle = this.labelAngle,
                                    this.sessionVariables.labelMaxWidth = m, this.sessionVariables.labelMaxHeight = c < 0.9 * l ? 0.9 * l : c, this.sessionVariables.labelWrap = this.labelWrap)) : (this.options.labelWrap ? (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : m) : (y(this.options.labelMaxWidth), this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : m, this.sessionVariables.labelWrap = this.labelWrap), this.sessionVariables.labelMaxHeight =
                                    h)
                            }
                        for (c = 0; c < this._labels.length; c++) a = this._labels[c].textBlock, a.maxWidth = this.labelMaxWidth = this.sessionVariables.labelMaxWidth, a.fontSize = this.sessionVariables.labelFontSize, a.angle = this.labelAngle = this.sessionVariables.labelAngle, a.wrap = this.labelWrap = this.sessionVariables.labelWrap, a.maxHeight = this.sessionVariables.labelMaxHeight, a.measureText()
                    } else
                        for (b = 0; b < this._labels.length; b++) a = this._labels[b].textBlock, a.maxWidth = this.labelMaxWidth = y(this.options.labelMaxWidth) ? this.sessionVariables.labelMaxWidth :
                            this.options.labelMaxWidth, a.fontSize = this.labelFontSize = y(this.options.labelFontSize) ? this.sessionVariables.labelFontSize : this.options.labelFontSize, a.angle = this.labelAngle = y(this.options.labelAngle) ? this.sessionVariables.labelAngle : this.labelAngle, a.wrap = this.labelWrap = y(this.options.labelWrap) ? this.sessionVariables.labelWrap : this.options.labelWrap, a.maxHeight = this.sessionVariables.labelMaxHeight, a.measureText();
                else if ("left" === this._position || "right" === this._position)
                    if (g = y(this.options.labelMaxWidth) ?
                            0.3 * this.chart.width >> 0 : this.options.labelMaxWidth, h = "undefined" === typeof this.options.labelWrap || this.labelWrap ? 0.3 * this.chart.height >> 0 : 1.5 * this.labelFontSize, !this.chart.panEnabled && 1 <= this._labels.length) {
                        this.sessionVariables.labelFontSize = this.labelFontSize;
                        this.sessionVariables.labelMaxWidth = g;
                        this.sessionVariables.labelMaxHeight = h;
                        this.sessionVariables.labelAngle = y(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle;
                        this.sessionVariables.labelWrap = this.labelWrap;
                        for (b = 0; b <
                        this._labels.length; b++)
                            if (!this._labels[b].breaksLabelType) {
                                a = this._labels[b].textBlock;
                                q = a.measureText();
                                for (d = b + 1; d < this._labels.length; d++)
                                    if (!this._labels[d].breaksLabelType) {
                                        f = this._labels[d].textBlock;
                                        f = f.measureText();
                                        break
                                    }
                                e.push(a.height);
                                this.sessionVariables.labelMaxHeight = Math.max.apply(Math, e);
                                c = g * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (h - a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                                Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                                Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
                                y(this.options.labelAngle) && isNaN(this.options.labelAngle) && 0 !== this.options.labelAngle ? y(this.options.labelWrap) ? y(this.options.labelWrap) && (y(this.options.labelMaxWidth) ? y(f) || (l = q.height + f.height >> 0, l - 2 * h > n && (n = l - 2 * h, l >= 2 * h && l < 2.4 * h ? (y(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelMaxHeight = h, this.sessionVariables.labelFontSize = y(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize) :
                                    l >= 2.4 * h && l < 2.8 * h ? (this.sessionVariables.labelMaxHeight = c, this.sessionVariables.labelFontSize = this.labelFontSize, this.sessionVariables.labelWrap = !0) : l >= 2.8 * h && l < 3.2 * h ? (this.sessionVariables.labelMaxHeight = h, this.sessionVariables.labelWrap = !0, y(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = y(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize, this.sessionVariables.labelAngle =
                                        y(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle) : l >= 3.2 * h && l < 3.6 * h ? (this.sessionVariables.labelMaxHeight = c, this.sessionVariables.labelWrap = !0, this.sessionVariables.labelFontSize = this.labelFontSize) : l > 3.6 * h && l < 10 * h ? (y(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = y(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize, this.sessionVariables.labelMaxWidth =
                                        g, this.sessionVariables.labelMaxHeight = h, this.sessionVariables.labelAngle = y(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle) : l > 10 * h && l < 50 * h && (y(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = y(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize, this.sessionVariables.labelMaxHeight = h, this.sessionVariables.labelMaxWidth = g, this.sessionVariables.labelAngle =
                                        y(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle))) : (this.sessionVariables.labelMaxHeight = h, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth)) : (this.sessionVariables.labelMaxWidth = this.labelWrap ? this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth : this.labelMaxWidth ? this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth : g, this.sessionVariables.labelMaxHeight =
                                    h) : (this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelMaxWidth = 0 === this.labelAngle ? g : Math.min((c - h * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), h), y(this.options.labelWrap)) ? y(this.options.labelWrap) && (this.labelWrap && !y(this.options.labelMaxWidth) ? (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth > this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth, this.sessionVariables.labelWrap =
                                    this.labelWrap, this.sessionVariables.labelMaxHeight = c) : (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : g, this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? h : c, y(this.options.labelMaxWidth) && (this.sessionVariables.labelAngle = this.labelAngle))) : this.options.labelWrap ? (this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? h : c, this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = g) : (this.sessionVariables.labelMaxHeight =
                                    h, y(this.options.labelMaxWidth), this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth, this.sessionVariables.labelWrap = this.labelWrap)
                            }
                        for (c = 0; c < this._labels.length; c++) a = this._labels[c].textBlock, a.maxWidth = this.labelMaxWidth = this.sessionVariables.labelMaxWidth, a.fontSize = this.labelFontSize = this.sessionVariables.labelFontSize, a.angle = this.labelAngle = this.sessionVariables.labelAngle, a.wrap = this.labelWrap = this.sessionVariables.labelWrap,
                            a.maxHeight = this.sessionVariables.labelMaxHeight, a.measureText()
                    } else
                        for (b = 0; b < this._labels.length; b++) a = this._labels[b].textBlock, a.maxWidth = this.labelMaxWidth = y(this.options.labelMaxWidth) ? this.sessionVariables.labelMaxWidth : this.options.labelMaxWidth, a.fontSize = this.labelFontSize = y(this.options.labelFontSize) ? this.sessionVariables.labelFontSize : this.options.labelFontSize, a.angle = this.labelAngle = y(this.options.labelAngle) ? this.sessionVariables.labelAngle : this.labelAngle, a.wrap = this.labelWrap = y(this.options.labelWrap) ?
                            this.sessionVariables.labelWrap : this.options.labelWrap, a.maxHeight = this.sessionVariables.labelMaxHeight, a.measureText();
            for (b = 0; b < this.stripLines.length; b++) {
                var g = this.stripLines[b],
                    x;
                if ("outside" === g.labelPlacement) {
                    h = this.sessionVariables.labelMaxWidth;
                    if ("bottom" === this._position || "top" === this._position) x = y(g.options.labelWrap) ? this.sessionVariables.labelMaxHeight : g.labelWrap ? 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize;
                    if ("left" === this._position || "right" === this._position) x = y(g.options.labelWrap) ?
                        this.sessionVariables.labelMaxHeight : g.labelWrap ? 0.8 * this.chart.width >> 0 : 1.5 * this.labelFontSize;
                    y(g.labelBackgroundColor) && (g.labelBackgroundColor = "#EEEEEE")
                } else h = "bottom" === this._position || "top" === this._position ? 0.9 * this.chart.width >> 0 : 0.9 * this.chart.height >> 0, x = y(g.options.labelWrap) || g.labelWrap ? "bottom" === this._position || "top" === this._position ? 0.8 * this.chart.width >> 0 : 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize, y(g.labelBackgroundColor) && (y(g.startValue) && 0 !== g.startValue ? g.labelBackgroundColor =
                    v ? "transparent" : null : g.labelBackgroundColor = "#EEEEEE");
                a = new la(this.ctx, {
                    x: 0,
                    y: 0,
                    backgroundColor: g.labelBackgroundColor,
                    borderColor: g.labelBorderColor,
                    borderThickness: g.labelBorderThickness,
                    cornerRadius: g.labelCornerRadius,
                    maxWidth: g.options.labelMaxWidth ? g.options.labelMaxWidth : h,
                    maxHeight: x,
                    angle: this.labelAngle,
                    text: g.labelFormatter ? g.labelFormatter({
                        chart: this.chart,
                        axis: this,
                        stripLine: g
                    }) : g.label,
                    horizontalAlign: "left",
                    fontSize: "outside" === g.labelPlacement ? g.options.labelFontSize ? g.labelFontSize :
                        this.labelFontSize : g.labelFontSize,
                    fontFamily: "outside" === g.labelPlacement ? g.options.labelFontFamily ? g.labelFontFamily : this.labelFontFamily : g.labelFontFamily,
                    fontWeight: "outside" === g.labelPlacement ? g.options.labelFontWeight ? g.labelFontWeight : this.labelFontWeight : g.labelFontWeight,
                    fontColor: g.labelFontColor || g.color,
                    fontStyle: "outside" === g.labelPlacement ? g.options.labelFontStyle ? g.labelFontStyle : this.fontWeight : g.labelFontStyle,
                    textBaseline: "middle"
                });
                this._stripLineLabels.push({
                    position: g.value,
                    textBlock: a,
                    effectiveHeight: null,
                    stripLine: g
                })
            }
        };
        C.prototype.createLabelsAndCalculateWidth = function() {
            var a = 0,
                f = 0;
            this._labels = [];
            this._stripLineLabels = [];
            if ("left" === this._position || "right" === this._position) {
                this.createLabels();
                for (f = 0; f < this._labels.length; f++) {
                    var b = this._labels[f].textBlock,
                        c = b.measureText(),
                        e = 0,
                        e = 0 === this.labelAngle ? c.width : c.width * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) + (c.height - b.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
                    a < e && (a = e);
                    this._labels[f].effectiveWidth =
                        e
                }
                for (f = 0; f < this._stripLineLabels.length; f++) "outside" === this._stripLineLabels[f].stripLine.labelPlacement && (this._stripLineLabels[f].stripLine.value > this.viewportMinimum && this._stripLineLabels[f].stripLine.value < this.viewportMaximum) && (b = this._stripLineLabels[f].textBlock, c = b.measureText(), e = 0 === this.labelAngle ? c.width : c.width * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) + (c.height - b.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), a < e && (a = e), this._stripLineLabels[f].effectiveWidth =
                    e)
            }
            f = this.title ? this._titleTextBlock.measureText().height + 2 : 0;
            return b = "inside" === this.labelPlacement ? b = f + 5 : f + a + this.tickLength + 5
        };
        C.prototype.createLabelsAndCalculateHeight = function() {
            var a = 0;
            this._labels = [];
            this._stripLineLabels = [];
            var f, b = 0;
            this.createLabels();
            if ("bottom" === this._position || "top" === this._position) {
                for (b = 0; b < this._labels.length; b++) {
                    f = this._labels[b].textBlock;
                    var c = f.measureText(),
                        e = 0,
                        e = 0 === this.labelAngle ? c.height : c.width * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (c.height -
                            f.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                    a < e && (a = e);
                    this._labels[b].effectiveHeight = e
                }
                for (b = 0; b < this._stripLineLabels.length; b++) "outside" === this._stripLineLabels[b].stripLine.labelPlacement && (f = this._stripLineLabels[b].textBlock, c = f.measureText(), e = 0 === this.labelAngle ? c.height : c.width * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (c.height - f.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), a < e && (a = e), this._stripLineLabels[b].effectiveHeight = e)
            }
            f = this.title ? this._titleTextBlock.measureText().height +
                2 : 0;
            return b = "inside" === this.labelPlacement ? b = f + 5 : f + a + this.tickLength + 5
        };
        C.setLayoutAndRender = function(a, f, b, c, e, g) {
            var h, l, t, k, m = a[0] ? a[0].chart : f[0].chart,
                p = m.ctx,
                n = m._axes;
            if (a && 0 < a.length)
                for (var d = 0; d < a.length; d++) a[d] && a[d].calculateAxisParameters();
            if (f && 0 < f.length)
                for (d = 0; d < f.length; d++) f[d].calculateAxisParameters();
            if (b && 0 < b.length)
                for (d = 0; d < b.length; d++) b[d].calculateAxisParameters();
            if (c && 0 < c.length)
                for (d = 0; d < c.length; d++) c[d].calculateAxisParameters();
            for (d = 0; d < n.length; d++)
                if (n[d] &&
                    n[d].scaleBreaks && n[d].scaleBreaks._appliedBreaks.length)
                    for (var q = n[d].scaleBreaks._appliedBreaks, s = 0; s < q.length && !(q[s].startValue > n[d].viewportMaximum); s++) q[s].endValue < n[d].viewportMinimum || (y(n[d].scaleBreaks.firstBreakIndex) && (n[d].scaleBreaks.firstBreakIndex = s), q[s].startValue >= n[d].viewPortMinimum && (n[d].scaleBreaks.lastBreakIndex = s));
            for (var x = s = 0, u = 0, z = 0, C = 0, G = 0, B = 0, A, H, L = l = 0, J, I, N, q = J = I = N = !1, d = 0; d < n.length; d++) n[d] && n[d].title && (n[d]._titleTextBlock = new la(n[d].ctx, {
                text: n[d].title,
                horizontalAlign: "center",
                fontSize: n[d].titleFontSize,
                fontFamily: n[d].titleFontFamily,
                fontWeight: n[d].titleFontWeight,
                fontColor: n[d].titleFontColor,
                fontStyle: n[d].titleFontStyle,
                borderColor: n[d].titleBorderColor,
                borderThickness: n[d].titleBorderThickness,
                backgroundColor: n[d].titleBackgroundColor,
                cornerRadius: n[d].titleCornerRadius,
                textBaseline: "top"
            }));
            for (d = 0; d < n.length; d++)
                if (n[d].title) switch (n[d]._position) {
                    case "left":
                        n[d]._titleTextBlock.maxWidth = n[d].titleMaxWidth || g.height;
                        n[d]._titleTextBlock.maxHeight = n[d].titleWrap ?
                            0.8 * g.width : 1.5 * n[d].titleFontSize;
                        n[d]._titleTextBlock.angle = -90;
                        break;
                    case "right":
                        n[d]._titleTextBlock.maxWidth = n[d].titleMaxWidth || g.height;
                        n[d]._titleTextBlock.maxHeight = n[d].titleWrap ? 0.8 * g.width : 1.5 * n[d].titleFontSize;
                        n[d]._titleTextBlock.angle = 90;
                        break;
                    default:
                        n[d]._titleTextBlock.maxWidth = n[d].titleMaxWidth || g.width, n[d]._titleTextBlock.maxHeight = n[d].titleWrap ? 0.8 * g.height : 1.5 * n[d].titleFontSize, n[d]._titleTextBlock.angle = 0
                }
            if ("normal" === e) {
                for (var z = [], C = [], G = [], B = [], O = [], P = [], R = [], Q = []; 4 >
                s;) {
                    var E = 0,
                        T = 0,
                        U = 0,
                        X = 0,
                        V = e = 0,
                        K = 0,
                        Z = 0,
                        Y = 0,
                        W = 0,
                        M = 0,
                        aa = 0;
                    if (b && 0 < b.length)
                        for (G = [], d = M = 0; d < b.length; d++) G.push(Math.ceil(b[d] ? b[d].createLabelsAndCalculateWidth() : 0)), M += G[d], K += b[d] ? b[d].margin : 0;
                    else G.push(Math.ceil(b[0] ? b[0].createLabelsAndCalculateWidth() : 0));
                    R.push(G);
                    if (c && 0 < c.length)
                        for (B = [], d = aa = 0; d < c.length; d++) B.push(Math.ceil(c[d] ? c[d].createLabelsAndCalculateWidth() : 0)), aa += B[d], Z += c[d] ? c[d].margin : 0;
                    else B.push(Math.ceil(c[0] ? c[0].createLabelsAndCalculateWidth() : 0));
                    Q.push(B);
                    h = Math.round(g.x1 +
                        M + K);
                    t = Math.round(g.x2 - aa - Z > m.width - 10 ? m.width - 10 : g.x2 - aa - Z);
                    if (a && 0 < a.length)
                        for (z = [], d = Y = 0; d < a.length; d++) a[d] && (a[d].lineCoordinates = {}), a[d].lineCoordinates.width = Math.abs(t - h), a[d].title && (a[d]._titleTextBlock.maxWidth = 0 < a[d].titleMaxWidth && a[d].titleMaxWidth < a[d].lineCoordinates.width ? a[d].titleMaxWidth : a[d].lineCoordinates.width), z.push(Math.ceil(a[d] ? a[d].createLabelsAndCalculateHeight() : 0)), Y += z[d], e += a[d] ? a[d].margin : 0;
                    else z.push(Math.ceil(a[0] ? a[0].createLabelsAndCalculateHeight() : 0));
                    O.push(z);
                    if (f && 0 < f.length)
                        for (C = [], d = W = 0; d < f.length; d++) f[d] && (f[d].lineCoordinates = {}), f[d].lineCoordinates.width = Math.abs(t - h), f[d].title && (f[d]._titleTextBlock.maxWidth = 0 < f[d].titleMaxWidth && f[d].titleMaxWidth < f[d].lineCoordinates.width ? f[d].titleMaxWidth : f[d].lineCoordinates.width), C.push(Math.ceil(f[d] ? f[d].createLabelsAndCalculateHeight() : 0)), W += C[d], V += f[d] ? f[d].margin : 0;
                    else C.push(Math.ceil(f[0] ? f[0].createLabelsAndCalculateHeight() : 0));
                    P.push(C);
                    if (a && 0 < a.length)
                        for (d = 0; d < a.length; d++) a[d] &&
                        (a[d].lineCoordinates.x1 = h, t = Math.round(g.x2 - aa - Z > m.width - 10 ? m.width - 10 : g.x2 - aa - Z), a[d]._labels && 1 < a[d]._labels.length && (l = k = 0, k = a[d]._labels[1], l = "dateTime" === a[d].valueType ? a[d]._labels[a[d]._labels.length - 2] : a[d]._labels[a[d]._labels.length - 1], x = k.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(k.textBlock.angle)) + (k.textBlock.height - l.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(k.textBlock.angle)), u = l.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(l.textBlock.angle)) + (l.textBlock.height -
                            l.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(l.textBlock.angle))), a[d] && (a[d].labelAutoFit && !y(A) && !y(H)) && (l = 0, 0 < a[d].labelAngle ? H + u > t && (l += 0 < a[d].labelAngle ? H + u - t - aa : 0) : 0 > a[d].labelAngle ? A - x < h && A - x < a[d].viewportMinimum && (L = h - (K + a[d].tickLength + G + A - x + a[d].labelFontSize / 2)) : 0 === a[d].labelAngle && (H + u > t && (l = H + u / 2 - t - aa), A - x < h && A - x < a[d].viewportMinimum && (L = h - K - a[d].tickLength - G - A + x / 2)), a[d].viewportMaximum === a[d].maximum && a[d].viewportMinimum === a[d].minimum && 0 < a[d].labelAngle && 0 < l ? t -= l : a[d].viewportMaximum ===
                        a[d].maximum && a[d].viewportMinimum === a[d].minimum && 0 > a[d].labelAngle && 0 < L ? h += L : a[d].viewportMaximum === a[d].maximum && a[d].viewportMinimum === a[d].minimum && 0 === a[d].labelAngle && (0 < L && (h += L), 0 < l && (t -= l))), m.panEnabled ? Y = m.sessionVariables.axisX.height : m.sessionVariables.axisX.height = Y, l = Math.round(g.y2 - Y - e + E), k = Math.round(g.y2), a[d].lineCoordinates.x2 = t, a[d].lineCoordinates.width = t - h, a[d].lineCoordinates.y1 = l, a[d].lineCoordinates.y2 = l, a[d].bounds = {
                            x1: h,
                            y1: l,
                            x2: t,
                            y2: k - (Y + e - z[d] - E),
                            width: t - h,
                            height: k - l
                        }),
                            E += z[d] + a[d].margin;
                    if (f && 0 < f.length)
                        for (d = 0; d < f.length; d++) f[d].lineCoordinates.x1 = Math.round(g.x1 + M + K), f[d].lineCoordinates.x2 = Math.round(g.x2 - aa - Z > m.width - 10 ? m.width - 10 : g.x2 - aa - Z), f[d].lineCoordinates.width = Math.abs(t - h), f[d]._labels && 1 < f[d]._labels.length && (k = f[d]._labels[1], l = "dateTime" === f[d].valueType ? f[d]._labels[f[d]._labels.length - 2] : f[d]._labels[f[d]._labels.length - 1], x = k.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(k.textBlock.angle)) + (k.textBlock.height - l.textBlock.fontSize / 2) * Math.sin(Math.PI /
                            180 * Math.abs(k.textBlock.angle)), u = l.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(l.textBlock.angle)) + (l.textBlock.height - l.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(l.textBlock.angle))), m.panEnabled ? W = m.sessionVariables.axisX2.height : m.sessionVariables.axisX2.height = W, l = Math.round(g.y1), k = Math.round(g.y2 + f[d].margin), f[d].lineCoordinates.y1 = l + W + V - T, f[d].lineCoordinates.y2 = l, f[d].bounds = {
                            x1: h,
                            y1: l + (W + V - C[d] - T),
                            x2: t,
                            y2: k,
                            width: t - h,
                            height: k - l
                        }, T += C[d] + f[d].margin;
                    if (b && 0 < b.length)
                        for (d = 0; d <
                        b.length; d++) K = 10, b[d] && (h = Math.round(a[0] ? a[0].lineCoordinates.x1 : f[0].lineCoordinates.x1), K = b[d]._labels && 0 < b[d]._labels.length ? b[d]._labels[b[d]._labels.length - 1].textBlock.height / 2 : 10, l = Math.round(g.y1 + W + V < Math.max(K, 10) ? Math.max(K, 10) : g.y1 + W + V), t = Math.round(a[0] ? a[0].lineCoordinates.x1 : f[0].lineCoordinates.x1), K = 0 < a.length ? 0 : b[d]._labels && 0 < b[d]._labels.length ? b[d]._labels[0].textBlock.height / 2 : 10, k = Math.round(g.y2 - Y - e - K), b[d].lineCoordinates = {
                            x1: t - U,
                            y1: l,
                            x2: t - U,
                            y2: k,
                            height: Math.abs(k - l)
                        }, b[d].bounds = {
                            x1: h - (G[d] + U),
                            y1: l,
                            x2: t,
                            y2: k,
                            width: t - h,
                            height: k - l
                        }, b[d].title && (b[d]._titleTextBlock.maxWidth = 0 < b[d].titleMaxWidth && b[d].titleMaxWidth < b[d].lineCoordinates.height ? b[d].titleMaxWidth : b[d].lineCoordinates.height), U += G[d] + b[d].margin);
                    if (c && 0 < c.length)
                        for (d = 0; d < c.length; d++) c[d] && (h = Math.round(a[0] ? a[0].lineCoordinates.x2 : f[0].lineCoordinates.x2), t = Math.round(h), K = c[d]._labels && 0 < c[d]._labels.length ? c[d]._labels[c[d]._labels.length - 1].textBlock.height / 2 : 0, l = Math.round(g.y1 + W + V < Math.max(K, 10) ? Math.max(K,
                            10) : g.y1 + W + V), K = 0 < a.length ? 0 : c[d]._labels && 0 < c[d]._labels.length ? c[d]._labels[0].textBlock.height / 2 : 0, k = Math.round(g.y2 - (Y + e + K)), c[d].lineCoordinates = {
                            x1: h + X,
                            y1: l,
                            x2: h + X,
                            y2: k,
                            height: Math.abs(k - l)
                        }, c[d].bounds = {
                            x1: h,
                            y1: l,
                            x2: t + (B[d] + X),
                            y2: k,
                            width: t - h,
                            height: k - l
                        }, c[d].title && (c[d]._titleTextBlock.maxWidth = 0 < c[d].titleMaxWidth && c[d].titleMaxWidth < c[d].lineCoordinates.height ? c[d].titleMaxWidth : c[d].lineCoordinates.height), X += B[d] + c[d].margin);
                    if (a && 0 < a.length)
                        for (d = 0; d < a.length; d++) a[d] && (a[d].calculateValueToPixelConversionParameters(),
                            a[d].calculateBreaksSizeInValues(), a[d]._labels && 1 < a[d]._labels.length && (A = (a[d].logarithmic ? Math.log(a[d]._labels[1].position / a[d].viewportMinimum) / a[d].conversionParameters.lnLogarithmBase : a[d]._labels[1].position - a[d].viewportMinimum) * Math.abs(a[d].conversionParameters.pixelPerUnit) + a[d].lineCoordinates.x1, h = a[d]._labels[a[d]._labels.length - ("dateTime" === a[d].valueType ? 2 : 1)].position, h = a[d].getApparentDifference(a[d].viewportMinimum, h), H = a[d].logarithmic ? (1 < h ? Math.log(h) / a[d].conversionParameters.lnLogarithmBase *
                            Math.abs(a[d].conversionParameters.pixelPerUnit) : 0) + a[d].lineCoordinates.x1 : (0 < h ? h * Math.abs(a[d].conversionParameters.pixelPerUnit) : 0) + a[d].lineCoordinates.x1));
                    if (f && 0 < f.length)
                        for (d = 0; d < f.length; d++) f[d].calculateValueToPixelConversionParameters(), f[d].calculateBreaksSizeInValues(), f[d]._labels && 1 < f[d]._labels.length && (A = (f[d].logarithmic ? Math.log(f[d]._labels[1].position / f[d].viewportMinimum) / f[d].conversionParameters.lnLogarithmBase : f[d]._labels[1].position - f[d].viewportMinimum) * Math.abs(f[d].conversionParameters.pixelPerUnit) +
                            f[d].lineCoordinates.x1, h = f[d]._labels[f[d]._labels.length - ("dateTime" === f[d].valueType ? 2 : 1)].position, h = f[d].getApparentDifference(f[d].viewportMinimum, h), H = f[d].logarithmic ? (1 < h ? Math.log(h) / f[d].conversionParameters.lnLogarithmBase * Math.abs(f[d].conversionParameters.pixelPerUnit) : 0) + f[d].lineCoordinates.x1 : (0 < h ? h * Math.abs(f[d].conversionParameters.pixelPerUnit) : 0) + f[d].lineCoordinates.x1);
                    for (d = 0; d < n.length; d++) "axisY" === n[d].type && (n[d].calculateValueToPixelConversionParameters(), n[d].calculateBreaksSizeInValues());
                    if (0 < s) {
                        if (a && 0 < a.length)
                            for (d = 0; d < a.length; d++) q = O[s - 1][d] === O[s][d] ? !0 : !1;
                        else q = !0;
                        if (f && 0 < f.length)
                            for (d = 0; d < f.length; d++) J = P[s - 1][d] === P[s][d] ? !0 : !1;
                        else J = !0;
                        if (b && 0 < b.length)
                            for (d = 0; d < b.length; d++) I = R[s - 1][d] === R[s][d] ? !0 : !1;
                        else I = !0;
                        if (c && 0 < c.length)
                            for (d = 0; d < c.length; d++) N = Q[s - 1][d] === Q[s][d] ? !0 : !1;
                        else N = !0
                    }
                    if (q && J && I && N) break;
                    s++
                }
                p.save();
                p.beginPath();
                a[0] && p.rect(5, a[0].bounds.y1, a[0].chart.width - 10, a[0].bounds.height);
                f[0] && p.rect(5, f[f.length - 1].bounds.y1, f[0].chart.width - 10, f[0].bounds.height);
                p.clip();
                if (a && 0 < a.length)
                    for (d = 0; d < a.length; d++) a[d].calculateStripLinesThicknessInValues(), a[d].calculateBreaksInPixels(), a[d].renderLabelsTicksAndTitle();
                if (f && 0 < f.length)
                    for (d = 0; d < f.length; d++) f[d].calculateStripLinesThicknessInValues(), f[d].calculateBreaksInPixels(), f[d].renderLabelsTicksAndTitle();
                p.restore();
                if (b && 0 < b.length)
                    for (d = 0; d < b.length; d++) b[d].calculateStripLinesThicknessInValues(), b[d].calculateBreaksInPixels(), b[d].renderLabelsTicksAndTitle();
                if (c && 0 < c.length)
                    for (d = 0; d < c.length; d++) c[d].calculateStripLinesThicknessInValues(),
                        c[d].calculateBreaksInPixels(), c[d].renderLabelsTicksAndTitle()
            } else {
                A = [];
                L = [];
                x = [];
                H = [];
                u = [];
                O = [];
                P = [];
                for (R = []; 4 > s;) {
                    W = Y = M = X = Z = K = V = e = U = Q = T = E = 0;
                    if (a && 0 < a.length)
                        for (x = [], d = Y = 0; d < a.length; d++) x.push(Math.ceil(a[d] ? a[d].createLabelsAndCalculateWidth() : 0)), Y += x[d], e += a[d] ? a[d].margin : 0;
                    else x.push(Math.ceil(a[0] ? a[0].createLabelsAndCalculateWidth() : 0));
                    P.push(x);
                    if (f && 0 < f.length)
                        for (H = [], d = W = 0; d < f.length; d++) H.push(Math.ceil(f[d] ? f[d].createLabelsAndCalculateWidth() : 0)), W += H[d], V += f[d] ? f[d].margin :
                            0;
                    else H.push(Math.ceil(f[0] ? f[0].createLabelsAndCalculateWidth() : 0));
                    R.push(H);
                    if (b && 0 < b.length)
                        for (d = 0; d < b.length; d++) b[d].lineCoordinates = {}, h = Math.round(g.x1 + Y + e), t = Math.round(g.x2 - W - V > m.width - 10 ? m.width - 10 : g.x2 - W - V), b[d].labelAutoFit && !y(z) && (0 < !a.length && (h = 0 > b[d].labelAngle ? Math.max(h, z) : 0 === b[d].labelAngle ? Math.max(h, z / 2) : h), 0 < !f.length && (t = 0 < b[d].labelAngle ? t - C / 2 : 0 === b[d].labelAngle ? t - C / 2 : t)), b[d].lineCoordinates.x1 = h, b[d].lineCoordinates.x2 = t, b[d].lineCoordinates.width = Math.abs(t - h), b[d].title &&
                        (b[d]._titleTextBlock.maxWidth = 0 < b[d].titleMaxWidth && b[d].titleMaxWidth < b[d].lineCoordinates.width ? b[d].titleMaxWidth : b[d].lineCoordinates.width);
                    if (c && 0 < c.length)
                        for (d = 0; d < c.length; d++) c[d].lineCoordinates = {}, h = Math.round(g.x1 + Y + e), t = Math.round(g.x2 - W - V > c[d].chart.width - 10 ? c[d].chart.width - 10 : g.x2 - W - V), c[d] && c[d].labelAutoFit && !y(G) && (0 < !a.length && (h = 0 < c[d].labelAngle ? Math.max(h, G) : 0 === c[d].labelAngle ? Math.max(h, G / 2) : h), 0 < !f.length && (t -= B / 2)), c[d].lineCoordinates.x1 = h, c[d].lineCoordinates.x2 = t, c[d].lineCoordinates.width =
                            Math.abs(t - h), c[d].title && (c[d]._titleTextBlock.maxWidth = 0 < c[d].titleMaxWidth && c[d].titleMaxWidth < c[d].lineCoordinates.width ? c[d].titleMaxWidth : c[d].lineCoordinates.width);
                    if (b && 0 < b.length)
                        for (A = [], d = X = 0; d < b.length; d++) A.push(Math.ceil(b[d] ? b[d].createLabelsAndCalculateHeight() : 0)), X += A[d] + b[d].margin, K += b[d].margin;
                    else A.push(Math.ceil(b[0] ? b[0].createLabelsAndCalculateHeight() : 0));
                    u.push(A);
                    if (c && 0 < c.length)
                        for (L = [], d = M = 0; d < c.length; d++) L.push(Math.ceil(c[d] ? c[d].createLabelsAndCalculateHeight() :
                            0)), M += L[d], Z += c[d].margin;
                    else L.push(Math.ceil(c[0] ? c[0].createLabelsAndCalculateHeight() : 0));
                    O.push(L);
                    if (b && 0 < b.length)
                        for (d = 0; d < b.length; d++) 0 < b[d]._labels.length && (k = b[d]._labels[0], l = b[d]._labels[b[d]._labels.length - 1], z = k.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(k.textBlock.angle)) + (k.textBlock.height - l.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(k.textBlock.angle)), C = l.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(l.textBlock.angle)) + (l.textBlock.height - l.textBlock.fontSize /
                            2) * Math.sin(Math.PI / 180 * Math.abs(l.textBlock.angle)));
                    if (c && 0 < c.length)
                        for (d = 0; d < c.length; d++) c[d] && 0 < c[d]._labels.length && (k = c[d]._labels[0], l = c[d]._labels[c[d]._labels.length - 1], G = k.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(k.textBlock.angle)) + (k.textBlock.height - l.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(k.textBlock.angle)), B = l.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(l.textBlock.angle)) + (l.textBlock.height - l.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(l.textBlock.angle)));
                    if (m.panEnabled)
                        for (d = 0; d < b.length; d++) A[d] = m.sessionVariables.axisY.height;
                    else
                        for (d = 0; d < b.length; d++) m.sessionVariables.axisY.height = A[d];
                    if (b && 0 < b.length)
                        for (d = b.length - 1; 0 <= d; d--) l = Math.round(g.y2), k = Math.round(g.y2 > b[d].chart.height - 10 ? b[d].chart.height - 10 : g.y2), b[d].lineCoordinates.y1 = l - (A[d] + b[d].margin + E), b[d].lineCoordinates.y2 = l - (A[d] + b[d].margin + E), b[d].bounds = {
                            x1: h,
                            y1: l - (A[d] + E + b[d].margin),
                            x2: t,
                            y2: k - (E + b[d].margin),
                            width: t - h,
                            height: A[d]
                        }, b[d].title && (b[d]._titleTextBlock.maxWidth = 0 <
                        b[d].titleMaxWidth && b[d].titleMaxWidth < b[d].lineCoordinates.width ? b[d].titleMaxWidth : b[d].lineCoordinates.width), E += A[d] + b[d].margin;
                    if (c && 0 < c.length)
                        for (d = c.length - 1; 0 <= d; d--) c[d] && (l = Math.round(g.y1), k = Math.round(g.y1 + (L[d] + c[d].margin + T)), c[d].lineCoordinates.y1 = k, c[d].lineCoordinates.y2 = k, c[d].bounds = {
                            x1: h,
                            y1: l + (c[d].margin + T),
                            x2: t,
                            y2: k,
                            width: t - h,
                            height: M
                        }, c[d].title && (c[d]._titleTextBlock.maxWidth = 0 < c[d].titleMaxWidth && c[d].titleMaxWidth < c[d].lineCoordinates.width ? c[d].titleMaxWidth : c[d].lineCoordinates.width),
                            T += L[d] + c[d].margin);
                    if (a && 0 < a.length)
                        for (d = 0; d < a.length; d++) {
                            K = a[d]._labels && 0 < a[d]._labels.length ? a[d]._labels[0].textBlock.fontSize / 2 : 0;
                            h = Math.round(g.x1 + e);
                            l = c && 0 < c.length ? Math.round(c[0] ? c[0].lineCoordinates.y2 : g.y1 < Math.max(K, 10) ? Math.max(K, 10) : g.y1) : g.y1 < Math.max(K, 10) ? Math.max(K, 10) : g.y1;
                            t = Math.round(g.x1 + Y + e);
                            k = b && 0 < b.length ? Math.round(b[0] ? b[0].lineCoordinates.y1 : g.y2 - X > m.height - Math.max(K, 10) ? m.height - Math.max(K, 10) : g.y2 - X) : g.y2 > m.height - Math.max(K, 10) ? m.height - Math.max(K, 10) : g.y2;
                            if (b &&
                                0 < b.length)
                                for (K = 0; K < b.length; K++) b[K] && b[K].labelAutoFit && (t = 0 > b[K].labelAngle ? Math.max(t, z) : 0 === b[K].labelAngle ? Math.max(t, z / 2) : t, h = 0 > b[K].labelAngle || 0 === b[K].labelAngle ? t - Y : h);
                            if (c && 0 < c.length)
                                for (K = 0; K < c.length; K++) c[K] && c[K].labelAutoFit && (t = c[K].lineCoordinates.x1, h = t - Y);
                            a[d].lineCoordinates = {
                                x1: t - Q,
                                y1: l,
                                x2: t - Q,
                                y2: k,
                                height: Math.abs(k - l)
                            };
                            a[d].bounds = {
                                x1: t - (x[d] + Q),
                                y1: l,
                                x2: t,
                                y2: k,
                                width: t - h,
                                height: k - l
                            };
                            a[d].title && (a[d]._titleTextBlock.maxWidth = 0 < a[d].titleMaxWidth && a[d].titleMaxWidth < a[d].lineCoordinates.height ?
                                a[d].titleMaxWidth : a[d].lineCoordinates.height);
                            a[d].calculateValueToPixelConversionParameters();
                            a[d].calculateBreaksSizeInValues();
                            Q += x[d] + a[d].margin
                        }
                    if (f && 0 < f.length)
                        for (d = 0; d < f.length; d++) {
                            K = f[d]._labels && 0 < f[d]._labels.length ? f[d]._labels[0].textBlock.fontSize / 2 : 0;
                            h = Math.round(g.x1 - e);
                            l = c && 0 < c.length ? Math.round(c[0] ? c[0].lineCoordinates.y2 : g.y1 < Math.max(K, 10) ? Math.max(K, 10) : g.y1) : g.y1 < Math.max(K, 10) ? Math.max(K, 10) : g.y1;
                            t = Math.round(g.x2 - W - V);
                            k = b && 0 < b.length ? Math.round(b[0] ? b[0].lineCoordinates.y1 :
                                g.y2 - X > m.height - Math.max(K, 10) ? m.height - Math.max(K, 10) : g.y2 - X) : g.y2 > m.height - Math.max(K, 10) ? m.height - Math.max(K, 10) : g.y2;
                            if (b && 0 < b.length)
                                for (K = 0; K < b.length; K++) b[K] && b[K].labelAutoFit && (t = 0 > b[K].labelAngle ? Math.max(t, z) : 0 === b[K].labelAngle ? Math.max(t, z / 2) : t, h = 0 > b[K].labelAngle || 0 === b[K].labelAngle ? t - W : h);
                            if (c && 0 < c.length)
                                for (K = 0; K < c.length; K++) c[K] && c[K].labelAutoFit && (t = c[K].lineCoordinates.x2, h = t - W);
                            f[d].lineCoordinates = {
                                x1: t + U,
                                y1: l,
                                x2: t + U,
                                y2: k,
                                height: Math.abs(k - l)
                            };
                            f[d].bounds = {
                                x1: h,
                                y1: l,
                                x2: t +
                                H[d] + U,
                                y2: k,
                                width: t - h,
                                height: k - l
                            };
                            f[d].title && (f[d]._titleTextBlock.maxWidth = 0 < f[d].titleMaxWidth && f[d].titleMaxWidth < f[d].lineCoordinates.height ? f[d].titleMaxWidth : f[d].lineCoordinates.height);
                            f[d].calculateValueToPixelConversionParameters();
                            f[d].calculateBreaksSizeInValues();
                            U += H[d] + f[d].margin
                        }
                    for (d = 0; d < n.length; d++) "axisY" === n[d].type && (n[d].calculateValueToPixelConversionParameters(), n[d].calculateBreaksSizeInValues());
                    if (0 < s) {
                        if (a && 0 < a.length)
                            for (d = 0; d < a.length; d++) q = P[s - 1][d] === P[s][d] ? !0 :
                                !1;
                        else q = !0;
                        if (f && 0 < f.length)
                            for (d = 0; d < f.length; d++) J = R[s - 1][d] === R[s][d] ? !0 : !1;
                        else J = !0;
                        if (b && 0 < b.length)
                            for (d = 0; d < b.length; d++) I = u[s - 1][d] === u[s][d] ? !0 : !1;
                        else I = !0;
                        if (c && 0 < c.length)
                            for (d = 0; d < c.length; d++) N = O[s - 1][d] === O[s][d] ? !0 : !1;
                        else N = !0
                    }
                    if (q && J && I && N) break;
                    s++
                }
                if (b && 0 < b.length)
                    for (d = 0; d < b.length; d++) b[d].calculateStripLinesThicknessInValues(), b[d].calculateBreaksInPixels(), b[d].renderLabelsTicksAndTitle();
                if (c && 0 < c.length)
                    for (d = 0; d < c.length; d++) c[d].calculateStripLinesThicknessInValues(),
                        c[d].calculateBreaksInPixels(), c[d].renderLabelsTicksAndTitle();
                if (a && 0 < a.length)
                    for (d = 0; d < a.length; d++) a[d].calculateStripLinesThicknessInValues(), a[d].calculateBreaksInPixels(), a[d].renderLabelsTicksAndTitle();
                if (f && 0 < f.length)
                    for (d = 0; d < f.length; d++) f[d].calculateStripLinesThicknessInValues(), f[d].calculateBreaksInPixels(), f[d].renderLabelsTicksAndTitle()
            }
            m.preparePlotArea();
            g = m.plotArea;
            p.save();
            p.beginPath();
            p.rect(g.x1, g.y1, Math.abs(g.x2 - g.x1), Math.abs(g.y2 - g.y1));
            p.clip();
            if (a && 0 < a.length)
                for (d =
                         0; d < n.length; d++) n[d].renderStripLinesOfThicknessType("value");
            if (f && 0 < f.length)
                for (d = 0; d < f.length; d++) f[d].renderStripLinesOfThicknessType("value");
            if (b && 0 < b.length)
                for (d = 0; d < b.length; d++) b[d].renderStripLinesOfThicknessType("value");
            if (c && 0 < c.length)
                for (d = 0; d < c.length; d++) c[d].renderStripLinesOfThicknessType("value");
            if (a && 0 < a.length)
                for (d = 0; d < a.length; d++) a[d].renderInterlacedColors();
            if (f && 0 < f.length)
                for (d = 0; d < f.length; d++) f[d].renderInterlacedColors();
            if (b && 0 < b.length)
                for (d = 0; d < b.length; d++) b[d].renderInterlacedColors();
            if (c && 0 < c.length)
                for (d = 0; d < c.length; d++) c[d].renderInterlacedColors();
            p.restore();
            if (a && 0 < a.length)
                for (d = 0; d < a.length; d++) a[d].renderGrid(), v && (a[d].createMask(), a[d].renderBreaksBackground());
            if (f && 0 < f.length)
                for (d = 0; d < f.length; d++) f[d].renderGrid(), v && (f[d].createMask(), f[d].renderBreaksBackground());
            if (b && 0 < b.length)
                for (d = 0; d < b.length; d++) b[d].renderGrid(), v && (b[d].createMask(), b[d].renderBreaksBackground());
            if (c && 0 < c.length)
                for (d = 0; d < c.length; d++) c[d].renderGrid(), v && (c[d].createMask(), c[d].renderBreaksBackground());
            if (a && 0 < a.length)
                for (d = 0; d < a.length; d++) a[d].renderAxisLine();
            if (f && 0 < f.length)
                for (d = 0; d < f.length; d++) f[d].renderAxisLine();
            if (b && 0 < b.length)
                for (d = 0; d < b.length; d++) b[d].renderAxisLine();
            if (c && 0 < c.length)
                for (d = 0; d < c.length; d++) c[d].renderAxisLine();
            if (a && 0 < a.length)
                for (d = 0; d < a.length; d++) a[d].renderStripLinesOfThicknessType("pixel");
            if (f && 0 < f.length)
                for (d = 0; d < f.length; d++) f[d].renderStripLinesOfThicknessType("pixel");
            if (b && 0 < b.length)
                for (d = 0; d < b.length; d++) b[d].renderStripLinesOfThicknessType("pixel");
            if (c && 0 < c.length)
                for (d = 0; d < c.length; d++) c[d].renderStripLinesOfThicknessType("pixel")
        };
        C.prototype.calculateStripLinesThicknessInValues = function() {
            for (var a = 0; a < this.stripLines.length; a++)
                if (null !== this.stripLines[a].startValue && null !== this.stripLines[a].endValue) {
                    var f = Math.min(this.stripLines[a].startValue, this.stripLines[a].endValue),
                        b = Math.max(this.stripLines[a].startValue, this.stripLines[a].endValue),
                        f = this.getApparentDifference(f, b);
                    this.stripLines[a].value = this.logarithmic ? this.stripLines[a].value *
                        Math.sqrt(Math.log(this.stripLines[a].endValue / this.stripLines[a].startValue) / Math.log(f)) : this.stripLines[a].value + (Math.abs(this.stripLines[a].endValue - this.stripLines[a].startValue) - f) / 2;
                    this.stripLines[a].thickness = f;
                    this.stripLines[a]._thicknessType = "value"
                }
        };
        C.prototype.calculateBreaksSizeInValues = function() {
            for (var a = "left" === this._position || "right" === this._position ? this.lineCoordinates.height || this.chart.height : this.lineCoordinates.width || this.chart.width, f = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [], b = this.conversionParameters.pixelPerUnit || a / (this.logarithmic ? this.conversionParameters.maximum / this.conversionParameters.minimum : this.conversionParameters.maximum - this.conversionParameters.minimum), c = this.scaleBreaks && !y(this.scaleBreaks.options.spacing), e, g = 0; g < f.length; g++) e = c || !y(f[g].options.spacing), f[g].spacing = O(f[g].spacing, a, 8, e ? 0.1 * a : 8, e ? 0 : 3) << 0, f[g].size = 0 > f[g].spacing ? 0 : Math.abs(f[g].spacing / b), this.logarithmic && (f[g].size = Math.pow(this.logarithmBase, f[g].size))
        };
        C.prototype.calculateBreaksInPixels =
            function() {
                if (!(this.scaleBreaks && 0 >= this.scaleBreaks._appliedBreaks.length)) {
                    var a = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
                    a.length && (this.scaleBreaks.firstBreakIndex = this.scaleBreaks.lastBreakIndex = null);
                    for (var f = 0; f < a.length && !(a[f].startValue > this.conversionParameters.maximum); f++) a[f].endValue < this.conversionParameters.minimum || (y(this.scaleBreaks.firstBreakIndex) && (this.scaleBreaks.firstBreakIndex = f), a[f].startValue >= this.conversionParameters.minimum && (a[f].startPixel = this.convertValueToPixel(a[f].startValue),
                        this.scaleBreaks.lastBreakIndex = f), a[f].endValue <= this.conversionParameters.maximum && (a[f].endPixel = this.convertValueToPixel(a[f].endValue)))
                }
            };
        C.prototype.renderLabelsTicksAndTitle = function() {
            var a = this,
                f = !1,
                b = 0,
                c = 0,
                e = 1,
                g = 0;
            0 !== this.labelAngle && 360 !== this.labelAngle && (e = 1.2);
            if ("undefined" === typeof this.options.interval) {
                if ("bottom" === this._position || "top" === this._position)
                    if (this.logarithmic && !this.equidistantInterval && this.labelAutoFit) {
                        for (var b = [], e = 0 !== this.labelAngle && 360 !== this.labelAngle ?
                            1 : 1.2, h, l = this.viewportMaximum, m = this.lineCoordinates.width / Math.log(this.range), k = this._labels.length - 1; 0 <= k; k--) {
                            p = this._labels[k];
                            if (p.position < this.viewportMinimum) break;
                            p.position > this.viewportMaximum || !(k === this._labels.length - 1 || h < Math.log(l / p.position) * m / e) || (b.push(p), l = p.position, h = p.textBlock.width * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + p.textBlock.height * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)))
                        }
                        this._labels = b
                    } else {
                        for (k = 0; k < this._labels.length; k++) p = this._labels[k], p.position <
                        this.viewportMinimum || (h = p.textBlock.width * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + p.textBlock.height * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)), b += h);
                        b > this.lineCoordinates.width * e && this.labelAutoFit && (f = !0)
                    }
                if ("left" === this._position || "right" === this._position)
                    if (this.logarithmic && !this.equidistantInterval && this.labelAutoFit) {
                        for (var b = [], r, l = this.viewportMaximum, m = this.lineCoordinates.height / Math.log(this.range), k = this._labels.length - 1; 0 <= k; k--) {
                            p = this._labels[k];
                            if (p.position < this.viewportMinimum) break;
                            p.position > this.viewportMaximum || !(k === this._labels.length - 1 || r < Math.log(l / p.position) * m) || (b.push(p), l = p.position, r = p.textBlock.height * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + p.textBlock.width * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)))
                        }
                        this._labels = b
                    } else {
                        for (k = 0; k < this._labels.length; k++) p = this._labels[k], p.position < this.viewportMinimum || (r = p.textBlock.height * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + p.textBlock.width * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)), c += r);
                        c > this.lineCoordinates.height *
                        e && this.labelAutoFit && (f = !0)
                    }
            }
            this.logarithmic && (!this.equidistantInterval && this.labelAutoFit) && this._labels.sort(function(a, b) {
                return a.position - b.position
            });
            var k = 0,
                p, n;
            if ("bottom" === this._position) {
                for (k = 0; k < this._labels.length; k++) p = this._labels[k], p.position < this.viewportMinimum || (p.position > this.viewportMaximum || f && 0 !== g++ % 2 && this.labelAutoFit) || (n = this.getPixelCoordinatesOnAxis(p.position), this.tickThickness && "inside" != this.labelPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle =
                    this.tickColor, c = 1 === this.ctx.lineWidth % 2 ? (n.x << 0) + 0.5 : n.x << 0, this.ctx.beginPath(), this.ctx.moveTo(c, n.y << 0), this.ctx.lineTo(c, n.y + this.tickLength << 0), this.ctx.stroke()), 0 === p.textBlock.angle ? (n.x -= p.textBlock.width / 2, n.y = "inside" === this.labelPlacement ? n.y - (this.tickLength + p.textBlock.fontSize / 2) : n.y + this.tickLength + p.textBlock.fontSize / 2) : (n.x = "inside" === this.labelPlacement ? 0 > this.labelAngle ? n.x : n.x - p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : n.x - (0 > this.labelAngle ? p.textBlock.width *
                    Math.cos(Math.PI / 180 * this.labelAngle) : 0), n.y = "inside" === this.labelPlacement ? 0 > this.labelAngle ? n.y - this.tickLength - 5 : n.y - this.tickLength - Math.abs(p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) + 5) : n.y + this.tickLength + Math.abs(0 > this.labelAngle ? p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) - 5 : 5)), p.textBlock.x = n.x, p.textBlock.y = n.y);
                "inside" === this.labelPlacement && this.chart.addEventListener("dataAnimationIterationEnd", function() {
                    for (k = 0; k < a._labels.length; k++)
                        if (p = a._labels[k], !(p.position <
                                a.viewportMinimum || p.position > a.viewportMaximum || f && 0 !== g++ % 2 && a.labelAutoFit) && (n = a.getPixelCoordinatesOnAxis(p.position), a.tickThickness)) {
                            a.ctx.lineWidth = a.tickThickness;
                            a.ctx.strokeStyle = a.tickColor;
                            var b = 1 === a.ctx.lineWidth % 2 ? (n.x << 0) + 0.5 : n.x << 0;
                            a.ctx.save();
                            a.ctx.beginPath();
                            a.ctx.moveTo(b, n.y << 0);
                            a.ctx.lineTo(b, n.y - a.tickLength << 0);
                            a.ctx.stroke();
                            a.ctx.restore()
                        }
                }, this);
                this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width /
                    2 - this._titleTextBlock.width / 2, this._titleTextBlock.y = this.bounds.y2 - this._titleTextBlock.height - 3, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(!0))
            } else if ("top" === this._position) {
                for (k = 0; k < this._labels.length; k++) p = this._labels[k], p.position < this.viewportMinimum || (p.position > this.viewportMaximum || f && 0 !== g++ % 2 && this.labelAutoFit) || (n = this.getPixelCoordinatesOnAxis(p.position), this.tickThickness && "inside" != this.labelPlacement && (this.ctx.lineWidth = this.tickThickness,
                    this.ctx.strokeStyle = this.tickColor, c = 1 === this.ctx.lineWidth % 2 ? (n.x << 0) + 0.5 : n.x << 0, this.ctx.beginPath(), this.ctx.moveTo(c, n.y << 0), this.ctx.lineTo(c, n.y - this.tickLength << 0), this.ctx.stroke()), 0 === p.textBlock.angle ? (n.x -= p.textBlock.width / 2, n.y = "inside" === this.labelPlacement ? n.y + this.labelFontSize / 2 + this.tickLength + 5 : n.y - (this.tickLength + p.textBlock.height - p.textBlock.fontSize / 2)) : (n.x = "inside" === this.labelPlacement ? 0 < this.labelAngle ? n.x : n.x - p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : n.x +
                    (p.textBlock.height - this.tickLength - this.labelFontSize) * Math.sin(Math.PI / 180 * this.labelAngle) - (0 < this.labelAngle ? p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0), n.y = "inside" === this.labelPlacement ? 0 < this.labelAngle ? n.y + this.tickLength + 5 : n.y - p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) + this.tickLength + 5 : n.y - (this.tickLength + ((p.textBlock.height - p.textBlock.fontSize / 2) * Math.cos(Math.PI / 180 * this.labelAngle) + (0 < this.labelAngle ? p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) :
                    0)))), p.textBlock.x = n.x, p.textBlock.y = n.y);
                "inside" === this.labelPlacement && this.chart.addEventListener("dataAnimationIterationEnd", function() {
                    for (k = 0; k < a._labels.length; k++)
                        if (p = a._labels[k], !(p.position < a.viewportMinimum || p.position > a.viewportMaximum || f && 0 !== g++ % 2 && a.labelAutoFit) && (n = a.getPixelCoordinatesOnAxis(p.position), a.tickThickness)) {
                            a.ctx.lineWidth = a.tickThickness;
                            a.ctx.strokeStyle = a.tickColor;
                            var b = 1 === this.ctx.lineWidth % 2 ? (n.x << 0) + 0.5 : n.x << 0;
                            a.ctx.save();
                            a.ctx.beginPath();
                            a.ctx.moveTo(b,
                                n.y << 0);
                            a.ctx.lineTo(b, n.y + a.tickLength << 0);
                            a.ctx.stroke();
                            a.ctx.restore()
                        }
                }, this);
                this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2, this._titleTextBlock.y = this.bounds.y1 + 1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(!0))
            } else if ("left" === this._position) {
                for (k = 0; k < this._labels.length; k++) p = this._labels[k], p.position < this.viewportMinimum || (p.position > this.viewportMaximum ||
                    f && 0 !== g++ % 2 && this.labelAutoFit) || (n = this.getPixelCoordinatesOnAxis(p.position), this.tickThickness && "inside" != this.labelPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, c = 1 === this.ctx.lineWidth % 2 ? (n.y << 0) + 0.5 : n.y << 0, this.ctx.beginPath(), this.ctx.moveTo(n.x << 0, c), this.ctx.lineTo(n.x - this.tickLength << 0, c), this.ctx.stroke()), 0 === this.labelAngle ? (p.textBlock.y = n.y, p.textBlock.x = "inside" === this.labelPlacement ? n.x + this.tickLength + 5 : n.x - p.textBlock.width * Math.cos(Math.PI /
                    180 * this.labelAngle) - this.tickLength - 5) : (p.textBlock.y = "inside" === this.labelPlacement ? n.y : n.y - p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle), p.textBlock.x = "inside" === this.labelPlacement ? n.x + this.tickLength + 5 : 0 < this.labelAngle ? n.x - p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - this.tickLength - 5 : n.x - p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + (p.textBlock.height - p.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) - this.tickLength));
                "inside" === this.labelPlacement &&
                this.chart.addEventListener("dataAnimationIterationEnd", function() {
                        for (k = 0; k < a._labels.length; k++)
                            if (p = a._labels[k], !(p.position < a.viewportMinimum || p.position > a.viewportMaximum || f && 0 !== g++ % 2 && a.labelAutoFit) && (n = a.getPixelCoordinatesOnAxis(p.position), a.tickThickness)) {
                                a.ctx.lineWidth = a.tickThickness;
                                a.ctx.strokeStyle = a.tickColor;
                                var b = 1 === a.ctx.lineWidth % 2 ? (n.y << 0) + 0.5 : n.y << 0;
                                a.ctx.save();
                                a.ctx.beginPath();
                                a.ctx.moveTo(n.x << 0, b);
                                a.ctx.lineTo(n.x + a.tickLength << 0, b);
                                a.ctx.stroke();
                                a.ctx.restore()
                            }
                    },
                    this);
                this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.bounds.x1 + 1, this._titleTextBlock.y = this.lineCoordinates.height / 2 + this._titleTextBlock.width / 2 + this.lineCoordinates.y1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(!0))
            } else if ("right" === this._position) {
                for (k = 0; k < this._labels.length; k++) p = this._labels[k], p.position < this.viewportMinimum || (p.position > this.viewportMaximum || f && 0 !== g++ % 2 && this.labelAutoFit) || (n = this.getPixelCoordinatesOnAxis(p.position),
                this.tickThickness && "inside" != this.labelPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, c = 1 === this.ctx.lineWidth % 2 ? (n.y << 0) + 0.5 : n.y << 0, this.ctx.beginPath(), this.ctx.moveTo(n.x << 0, c), this.ctx.lineTo(n.x + this.tickLength << 0, c), this.ctx.stroke()), 0 === this.labelAngle ? (p.textBlock.y = n.y, p.textBlock.x = "inside" === this.labelPlacement ? n.x - p.textBlock.width - this.tickLength - 5 : n.x + this.tickLength + 5) : (p.textBlock.y = "inside" === this.labelPlacement ? n.y - p.textBlock.width * Math.sin(Math.PI /
                    180 * this.labelAngle) : 0 > this.labelAngle ? n.y : n.y - (p.textBlock.height - p.textBlock.fontSize / 2 - 5) * Math.cos(Math.PI / 180 * this.labelAngle), p.textBlock.x = "inside" === this.labelPlacement ? n.x - p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - this.tickLength - 5 : 0 < this.labelAngle ? n.x + (p.textBlock.height - p.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) + this.tickLength : n.x + this.tickLength + 5));
                "inside" === this.labelPlacement && this.chart.addEventListener("dataAnimationIterationEnd", function() {
                    for (k =
                             0; k < a._labels.length; k++)
                        if (p = a._labels[k], !(p.position < a.viewportMinimum || p.position > a.viewportMaximum || f && 0 !== g++ % 2 && a.labelAutoFit) && (n = a.getPixelCoordinatesOnAxis(p.position), a.tickThickness)) {
                            a.ctx.lineWidth = a.tickThickness;
                            a.ctx.strokeStyle = a.tickColor;
                            var b = 1 === a.ctx.lineWidth % 2 ? (n.y << 0) + 0.5 : n.y << 0;
                            a.ctx.save();
                            a.ctx.beginPath();
                            a.ctx.moveTo(n.x << 0, b);
                            a.ctx.lineTo(n.x - a.tickLength << 0, b);
                            a.ctx.stroke();
                            a.ctx.restore()
                        }
                }, this);
                this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x =
                    this.bounds.x2 - 1, this._titleTextBlock.y = this.lineCoordinates.height / 2 - this._titleTextBlock.width / 2 + this.lineCoordinates.y1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(!0))
            }
            g = 0;
            if ("inside" === this.labelPlacement) this.chart.addEventListener("dataAnimationIterationEnd", function() {
                for (k = 0; k < a._labels.length; k++) p = a._labels[k], p.position < a.viewportMinimum || (p.position > a.viewportMaximum || f && 0 !== g++ % 2 && a.labelAutoFit && p.skipFlag) || (a.ctx.save(), a.ctx.beginPath(), p.textBlock.render(!0),
                    a.ctx.restore())
            }, p.textBlock);
            else
                for (k = 0; k < this._labels.length; k++) p = this._labels[k], p.position < this.viewportMinimum || (p.position > this.viewportMaximum || f && 0 !== g++ % 2 && this.labelAutoFit && p.skipFlag) || p.textBlock.render(!0)
        };
        C.prototype.renderInterlacedColors = function() {
            var a = this.chart.plotArea.ctx,
                f, b, c = this.chart.plotArea,
                e = 0;
            f = !0;
            if (("bottom" === this._position || "top" === this._position) && this.interlacedColor)
                for (a.fillStyle = this.interlacedColor, e = 0; e < this._labels.length; e++) f ? (f = this.getPixelCoordinatesOnAxis(this._labels[e].position),
                    b = e + 1 > this._labels.length - 1 ? this.getPixelCoordinatesOnAxis(this.viewportMaximum) : this.getPixelCoordinatesOnAxis(this._labels[e + 1].position), a.fillRect(Math.min(b.x, f.x), c.y1, Math.abs(b.x - f.x), Math.abs(c.y1 - c.y2)), f = !1) : f = !0;
            else if (("left" === this._position || "right" === this._position) && this.interlacedColor)
                for (a.fillStyle = this.interlacedColor, e = 0; e < this._labels.length; e++) f ? (b = this.getPixelCoordinatesOnAxis(this._labels[e].position), f = e + 1 > this._labels.length - 1 ? this.getPixelCoordinatesOnAxis(this.viewportMaximum) :
                    this.getPixelCoordinatesOnAxis(this._labels[e + 1].position), a.fillRect(c.x1, Math.min(b.y, f.y), Math.abs(c.x1 - c.x2), Math.abs(f.y - b.y)), f = !1) : f = !0;
            a.beginPath()
        };
        C.prototype.renderStripLinesOfThicknessType = function(a) {
            if (this.stripLines && 0 < this.stripLines.length && a) {
                for (var f = this, b, c = 0, e = 0, g = !1, h = !1, l = [], m = [], h = !1, c = 0; c < this.stripLines.length; c++) {
                    var k = this.stripLines[c];
                    k._thicknessType === a && ("pixel" === a && (k.value < this.viewportMinimum || k.value > this.viewportMaximum || y(k.value) || isNaN(this.range)) ||
                        l.push(k))
                }
                for (c = 0; c < this._stripLineLabels.length; c++)
                    if (k = this.stripLines[c], b = this._stripLineLabels[c], !(b.position < this.viewportMinimum || b.position > this.viewportMaximum || isNaN(this.range))) {
                        a = this.getPixelCoordinatesOnAxis(b.position);
                        if ("outside" === b.stripLine.labelPlacement)
                            if (k && (this.ctx.strokeStyle = k.color, "pixel" === k._thicknessType && (this.ctx.lineWidth = k.thickness)), "bottom" === this._position) {
                                var r = 1 === this.ctx.lineWidth % 2 ? (a.x << 0) + 0.5 : a.x << 0;
                                this.ctx.beginPath();
                                this.ctx.moveTo(r, a.y << 0);
                                this.ctx.lineTo(r, a.y + this.tickLength << 0);
                                this.ctx.stroke();
                                0 === this.labelAngle ? (a.x -= b.textBlock.width / 2, a.y += this.tickLength + b.textBlock.fontSize / 2) : (a.x -= 0 > this.labelAngle ? b.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0, a.y += this.tickLength + Math.abs(0 > this.labelAngle ? b.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) - 5 : 5))
                            } else "top" === this._position ? (r = 1 === this.ctx.lineWidth % 2 ? (a.x << 0) + 0.5 : a.x << 0, this.ctx.beginPath(), this.ctx.moveTo(r, a.y << 0), this.ctx.lineTo(r, a.y - this.tickLength <<
                                0), this.ctx.stroke(), 0 === this.labelAngle ? (a.x -= b.textBlock.width / 2, a.y -= this.tickLength + b.textBlock.height) : (a.x += (b.textBlock.height - this.tickLength - this.labelFontSize / 2) * Math.sin(Math.PI / 180 * this.labelAngle) - (0 < this.labelAngle ? b.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0), a.y -= this.tickLength + (b.textBlock.height * Math.cos(Math.PI / 180 * this.labelAngle) + (0 < this.labelAngle ? b.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : 0)))) : "left" === this._position ? (r = 1 === this.ctx.lineWidth % 2 ? (a.y <<
                                0) + 0.5 : a.y << 0, this.ctx.beginPath(), this.ctx.moveTo(a.x << 0, r), this.ctx.lineTo(a.x - this.tickLength << 0, r), this.ctx.stroke(), 0 === this.labelAngle ? a.x = a.x - b.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - this.tickLength - 5 : (a.y -= b.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle), a.x = 0 < this.labelAngle ? a.x - b.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - this.tickLength - 5 : a.x - b.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + (b.textBlock.height - b.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI /
                                180 * this.labelAngle) - this.tickLength)) : "right" === this._position && (r = 1 === this.ctx.lineWidth % 2 ? (a.y << 0) + 0.5 : a.y << 0, this.ctx.beginPath(), this.ctx.moveTo(a.x << 0, r), this.ctx.lineTo(a.x + this.tickLength << 0, r), this.ctx.stroke(), 0 === this.labelAngle ? a.x = a.x + this.tickLength + 5 : (a.y = 0 > this.labelAngle ? a.y : a.y - (b.textBlock.height - b.textBlock.fontSize / 2 - 5) * Math.cos(Math.PI / 180 * this.labelAngle), a.x = 0 < this.labelAngle ? a.x + (b.textBlock.height - b.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) + this.tickLength :
                                a.x + this.tickLength + 5));
                        else b.textBlock.angle = -90, "bottom" === this._position ? (b.textBlock.maxWidth = this.options.stripLines[c].labelMaxWidth ? this.options.stripLines[c].labelMaxWidth : this.chart.plotArea.height - 3, b.textBlock.measureText(), a.x - b.textBlock.height > this.chart.plotArea.x1 ? y(k.startValue) ? a.x -= b.textBlock.height - b.textBlock.fontSize / 2 : a.x -= b.textBlock.height / 2 - b.textBlock.fontSize / 2 + 3 : (b.textBlock.angle = 90, y(k.startValue) ? a.x += b.textBlock.height - b.textBlock.fontSize / 2 : a.x += b.textBlock.height /
                            2 - b.textBlock.fontSize / 2 + 3), a.y = -90 === b.textBlock.angle ? "near" === b.stripLine.labelAlign ? this.chart.plotArea.y2 - 3 : "center" === b.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 + b.textBlock.width) / 2 : this.chart.plotArea.y1 + b.textBlock.width + 3 : "near" === b.stripLine.labelAlign ? this.chart.plotArea.y2 - b.textBlock.width - 3 : "center" === b.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 - b.textBlock.width) / 2 : this.chart.plotArea.y1 + 3) : "top" === this._position ? (b.textBlock.maxWidth =
                            this.options.stripLines[c].labelMaxWidth ? this.options.stripLines[c].labelMaxWidth : this.chart.plotArea.height - 3, b.textBlock.measureText(), a.x - b.textBlock.height > this.chart.plotArea.x1 ? y(k.startValue) ? a.x -= b.textBlock.height - b.textBlock.fontSize / 2 : a.x -= b.textBlock.height / 2 - b.textBlock.fontSize / 2 + 3 : (b.textBlock.angle = 90, y(k.startValue) ? a.x += b.textBlock.height - b.textBlock.fontSize / 2 : a.x += b.textBlock.height / 2 - b.textBlock.fontSize / 2 + 3), a.y = -90 === b.textBlock.angle ? "near" === b.stripLine.labelAlign ? this.chart.plotArea.y1 +
                            b.textBlock.width + 3 : "center" === b.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 + b.textBlock.width) / 2 : this.chart.plotArea.y2 - 3 : "near" === b.stripLine.labelAlign ? this.chart.plotArea.y1 + 3 : "center" === b.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 - b.textBlock.width) / 2 : this.chart.plotArea.y2 - b.textBlock.width - 3) : "left" === this._position ? (b.textBlock.maxWidth = this.options.stripLines[c].labelMaxWidth ? this.options.stripLines[c].labelMaxWidth : this.chart.plotArea.width -
                            3, b.textBlock.angle = 0, b.textBlock.measureText(), a.y - b.textBlock.height > this.chart.plotArea.y1 ? y(k.startValue) ? a.y -= b.textBlock.height - b.textBlock.fontSize / 2 : a.y -= b.textBlock.height / 2 - b.textBlock.fontSize + 3 : a.y - b.textBlock.height < this.chart.plotArea.y2 ? a.y += b.textBlock.fontSize / 2 + 3 : y(k.startValue) ? a.y -= b.textBlock.height - b.textBlock.fontSize / 2 : a.y -= b.textBlock.height / 2 - b.textBlock.fontSize + 3, a.x = "near" === b.stripLine.labelAlign ? this.chart.plotArea.x1 + 3 : "center" === b.stripLine.labelAlign ? (this.chart.plotArea.x2 +
                            this.chart.plotArea.x1) / 2 - b.textBlock.width / 2 : this.chart.plotArea.x2 - b.textBlock.width - 3) : "right" === this._position && (b.textBlock.maxWidth = this.options.stripLines[c].labelMaxWidth ? this.options.stripLines[c].labelMaxWidth : this.chart.plotArea.width - 3, b.textBlock.angle = 0, b.textBlock.measureText(), a.y - +b.textBlock.height > this.chart.plotArea.y1 ? y(k.startValue) ? a.y -= b.textBlock.height - b.textBlock.fontSize / 2 : a.y -= b.textBlock.height / 2 - b.textBlock.fontSize / 2 - 3 : a.y - b.textBlock.height < this.chart.plotArea.y2 ?
                            a.y += b.textBlock.fontSize / 2 + 3 : y(k.startValue) ? a.y -= b.textBlock.height - b.textBlock.fontSize / 2 : a.y -= b.textBlock.height / 2 - b.textBlock.fontSize / 2 + 3, a.x = "near" === b.stripLine.labelAlign ? this.chart.plotArea.x2 - b.textBlock.width - 3 : "center" === b.stripLine.labelAlign ? (this.chart.plotArea.x2 + this.chart.plotArea.x1) / 2 - b.textBlock.width / 2 : this.chart.plotArea.x1 + 3);
                        b.textBlock.x = a.x;
                        b.textBlock.y = a.y;
                        m.push(b)
                    }
                if (!h) {
                    h = !1;
                    this.ctx.save();
                    this.ctx.beginPath();
                    this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1,
                        this.chart.plotArea.width, this.chart.plotArea.height);
                    this.ctx.clip();
                    for (c = 0; c < l.length; c++) k = l[c], k.showOnTop ? g || (g = !0, this.chart.addEventListener("dataAnimationIterationEnd", function() {
                        this.ctx.save();
                        this.ctx.beginPath();
                        this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
                        this.ctx.clip();
                        for (e = 0; e < l.length; e++) k = l[e], k.showOnTop && k.render();
                        this.ctx.restore()
                    }, k)) : k.render();
                    for (c = 0; c < m.length; c++) b = m[c], b.stripLine.showOnTop ? h || (h = !0, this.chart.addEventListener("dataAnimationIterationEnd", function() {
                        for (e = 0; e < m.length; e++) b = m[e], "inside" === b.stripLine.labelPlacement && b.stripLine.showOnTop && (f.ctx.save(), f.ctx.beginPath(), f.ctx.rect(f.chart.plotArea.x1, f.chart.plotArea.y1, f.chart.plotArea.width, f.chart.plotArea.height), f.ctx.clip(), b.textBlock.render(!0), f.ctx.restore())
                    }, b.textBlock)) : "inside" === b.stripLine.labelPlacement && b.textBlock.render(!0);
                    this.ctx.restore();
                    h = !0
                }
                if (h)
                    for (h = !1, c = 0; c < m.length; c++) b = m[c], b.stripLine.showOnTop ?
                        h || (h = !0, this.chart.addEventListener("dataAnimationIterationEnd", function() {
                            for (e = 0; e < m.length; e++) b = m[e], "outside" === b.stripLine.labelPlacement && b.stripLine.showOnTop && b.textBlock.render(!0)
                        }, b.textBlock)) : "outside" === b.stripLine.labelPlacement && b.textBlock.render(!0)
            }
        };
        C.prototype.renderBreaksBackground = function() {
            this.chart._breaksCanvas && (this.scaleBreaks && 0 < this.scaleBreaks._appliedBreaks.length && this.maskCanvas) && (this.chart._breaksCanvasCtx.save(), this.chart._breaksCanvasCtx.beginPath(), this.chart._breaksCanvasCtx.rect(this.chart.plotArea.x1,
                this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height), this.chart._breaksCanvasCtx.clip(), this.chart._breaksCanvasCtx.drawImage(this.maskCanvas, 0, 0, this.chart.width, this.chart.height), this.chart._breaksCanvasCtx.restore())
        };
        C.prototype.createMask = function() {
            if (this.scaleBreaks && 0 < this.scaleBreaks._appliedBreaks.length) {
                var a = this.scaleBreaks._appliedBreaks;
                v ? (this.maskCanvas = ua(this.chart.width, this.chart.height), this.maskCtx = this.maskCanvas.getContext("2d")) : (this.maskCanvas =
                    this.chart.plotArea.canvas, this.maskCtx = this.chart.plotArea.ctx);
                this.maskCtx.save();
                this.maskCtx.beginPath();
                this.maskCtx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
                this.maskCtx.clip();
                for (var f = 0; f < a.length; f++) a[f].endValue < this.viewportMinimum || (a[f].startValue > this.viewportMaximum || isNaN(this.range)) || a[f].render(this.maskCtx);
                this.maskCtx.restore()
            }
        };
        C.prototype.renderCrosshair = function(a, f) {
            this.crosshair.render(a, f)
        };
        C.prototype.renderGrid =
            function() {
                if (this.gridThickness && 0 < this.gridThickness) {
                    var a = this.chart.ctx;
                    a.save();
                    var f, b = this.chart.plotArea;
                    a.lineWidth = this.gridThickness;
                    a.strokeStyle = this.gridColor;
                    a.setLineDash && a.setLineDash(G(this.gridDashType, this.gridThickness));
                    if ("bottom" === this._position || "top" === this._position)
                        for (c = 0; c < this._labels.length; c++) this._labels[c].position < this.viewportMinimum || (this._labels[c].position > this.viewportMaximum || this._labels[c].breaksLabelType) || (a.beginPath(), f = this.getPixelCoordinatesOnAxis(this._labels[c].position),
                            f = 1 === a.lineWidth % 2 ? (f.x << 0) + 0.5 : f.x << 0, a.moveTo(f, b.y1 << 0), a.lineTo(f, b.y2 << 0), a.stroke());
                    else if ("left" === this._position || "right" === this._position)
                        for (var c = 0; c < this._labels.length; c++) this._labels[c].position < this.viewportMinimum || (this._labels[c].position > this.viewportMaximum || this._labels[c].breaksLabelType) || (a.beginPath(), f = this.getPixelCoordinatesOnAxis(this._labels[c].position), f = 1 === a.lineWidth % 2 ? (f.y << 0) + 0.5 : f.y << 0, a.moveTo(b.x1 << 0, f), a.lineTo(b.x2 << 0, f), a.stroke());
                    a.restore()
                }
            };
        C.prototype.renderAxisLine =
            function() {
                var a = this.chart.ctx,
                    f = v ? this.chart._preRenderCtx : a,
                    b = Math.ceil(this.tickThickness / (this.reversed ? -2 : 2)),
                    c = Math.ceil(this.tickThickness / (this.reversed ? 2 : -2)),
                    e, g;
                f.save();
                if ("bottom" === this._position || "top" === this._position) {
                    if (this.lineThickness) {
                        this.reversed ? (e = this.lineCoordinates.x2, g = this.lineCoordinates.x1) : (e = this.lineCoordinates.x1, g = this.lineCoordinates.x2);
                        f.lineWidth = this.lineThickness;
                        f.strokeStyle = this.lineColor ? this.lineColor : "black";
                        f.setLineDash && f.setLineDash(G(this.lineDashType,
                            this.lineThickness));
                        var h = 1 === this.lineThickness % 2 ? (this.lineCoordinates.y1 << 0) + 0.5 : this.lineCoordinates.y1 << 0;
                        f.beginPath();
                        if (this.scaleBreaks && !y(this.scaleBreaks.firstBreakIndex))
                            if (y(this.scaleBreaks.lastBreakIndex)) e = this.scaleBreaks._appliedBreaks[this.scaleBreaks.firstBreakIndex].endPixel + c;
                            else
                                for (var l = this.scaleBreaks.firstBreakIndex; l <= this.scaleBreaks.lastBreakIndex; l++) f.moveTo(e, h), f.lineTo(this.scaleBreaks._appliedBreaks[l].startPixel + b, h), e = this.scaleBreaks._appliedBreaks[l].endPixel +
                                    c;
                        e && (f.moveTo(e, h), f.lineTo(g, h));
                        f.stroke()
                    }
                } else if (("left" === this._position || "right" === this._position) && this.lineThickness) {
                    this.reversed ? (e = this.lineCoordinates.y1, g = this.lineCoordinates.y2) : (e = this.lineCoordinates.y2, g = this.lineCoordinates.y1);
                    f.lineWidth = this.lineThickness;
                    f.strokeStyle = this.lineColor;
                    f.setLineDash && f.setLineDash(G(this.lineDashType, this.lineThickness));
                    h = 1 === this.lineThickness % 2 ? (this.lineCoordinates.x1 << 0) + 0.5 : this.lineCoordinates.x1 << 0;
                    f.beginPath();
                    if (this.scaleBreaks &&
                        !y(this.scaleBreaks.firstBreakIndex))
                        if (y(this.scaleBreaks.lastBreakIndex)) e = this.scaleBreaks._appliedBreaks[this.scaleBreaks.firstBreakIndex].endPixel + b;
                        else
                            for (l = this.scaleBreaks.firstBreakIndex; l <= this.scaleBreaks.lastBreakIndex; l++) f.moveTo(h, e), f.lineTo(h, this.scaleBreaks._appliedBreaks[l].startPixel + c), e = this.scaleBreaks._appliedBreaks[l].endPixel + b;
                    e && (f.moveTo(h, e), f.lineTo(h, g));
                    f.stroke()
                }
                v && (a.drawImage(this.chart._preRenderCanvas, 0, 0, this.chart.width, this.chart.height), this.chart._breaksCanvasCtx &&
                this.chart._breaksCanvasCtx.drawImage(this.chart._preRenderCanvas, 0, 0, this.chart.width, this.chart.height), f.clearRect(0, 0, this.chart.width, this.chart.height));
                f.restore()
            };
        C.prototype.getPixelCoordinatesOnAxis = function(a) {
            var f = {};
            if ("bottom" === this._position || "top" === this._position) f.x = this.convertValueToPixel(a), f.y = this.lineCoordinates.y1;
            if ("left" === this._position || "right" === this._position) f.y = this.convertValueToPixel(a), f.x = this.lineCoordinates.x2;
            return f
        };
        C.prototype.convertPixelToValue = function(a) {
            if ("undefined" ===
                typeof a) return null;
            var f = 0,
                b = 0,
                c, f = !0,
                e = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [],
                b = "number" === typeof a ? a : "left" === this._position || "right" === this._position ? a.y : a.x;
            if (this.logarithmic) {
                a = c = Math.pow(this.logarithmBase, (b - this.conversionParameters.reference) / this.conversionParameters.pixelPerUnit);
                if (b <= this.conversionParameters.reference === ("left" === this._position || "right" === this._position) !== this.reversed)
                    for (b = 0; b < e.length; b++) {
                        if (!(e[b].endValue < this.conversionParameters.minimum))
                            if (f)
                                if (e[b].startValue <
                                    this.conversionParameters.minimum) {
                                    if (1 < e[b].size && this.conversionParameters.minimum * Math.pow(e[b].endValue / e[b].startValue, Math.log(c) / Math.log(e[b].size)) < e[b].endValue) {
                                        a = Math.pow(e[b].endValue / e[b].startValue, Math.log(c) / Math.log(e[b].size));
                                        break
                                    } else a *= e[b].endValue / this.conversionParameters.minimum / Math.pow(e[b].size, Math.log(e[b].endValue / this.conversionParameters.minimum) / Math.log(e[b].endValue / e[b].startValue)), c /= Math.pow(e[b].size, Math.log(e[b].endValue / this.conversionParameters.minimum) /
                                        Math.log(e[b].endValue / e[b].startValue));
                                    f = !1
                                } else if (c > e[b].startValue / this.conversionParameters.minimum) {
                                    c /= e[b].startValue / this.conversionParameters.minimum;
                                    if (c < e[b].size) {
                                        a *= Math.pow(e[b].endValue / e[b].startValue, 1 === e[b].size ? 1 : Math.log(c) / Math.log(e[b].size)) / c;
                                        break
                                    } else a *= e[b].endValue / e[b].startValue / e[b].size;
                                    c /= e[b].size;
                                    f = !1
                                } else break;
                            else if (c > e[b].startValue / e[b - 1].endValue) {
                                c /= e[b].startValue / e[b - 1].endValue;
                                if (c < e[b].size) {
                                    a *= Math.pow(e[b].endValue / e[b].startValue, 1 === e[b].size ?
                                        1 : Math.log(c) / Math.log(e[b].size)) / c;
                                    break
                                } else a *= e[b].endValue / e[b].startValue / e[b].size;
                                c /= e[b].size
                            } else break
                    } else
                    for (b = e.length - 1; 0 <= b; b--)
                        if (!(e[b].startValue > this.conversionParameters.minimum))
                            if (f)
                                if (e[b].endValue > this.conversionParameters.minimum) {
                                    if (1 < e[b].size && this.conversionParameters.minimum * Math.pow(e[b].endValue / e[b].startValue, Math.log(c) / Math.log(e[b].size)) > e[b].startValue) {
                                        a = Math.pow(e[b].endValue / e[b].startValue, Math.log(c) / Math.log(e[b].size));
                                        break
                                    } else a *= e[b].startValue /
                                        this.conversionParameters.minimum * Math.pow(e[b].size, Math.log(e[b].startValue / this.conversionParameters.minimum) / Math.log(e[b].endValue / e[b].startValue)) * c, c *= Math.pow(e[b].size, Math.log(this.conversionParameters.minimum / e[b].startValue) / Math.log(e[b].endValue / e[b].startValue));
                                    f = !1
                                } else if (c < e[b].endValue / this.conversionParameters.minimum) {
                                    c /= e[b].endValue / this.conversionParameters.minimum;
                                    if (c > 1 / e[b].size) {
                                        a *= Math.pow(e[b].endValue / e[b].startValue, 1 >= e[b].size ? 1 : Math.log(c) / Math.log(e[b].size)) *
                                            c;
                                        break
                                    } else a /= e[b].endValue / e[b].startValue / e[b].size;
                                    c *= e[b].size;
                                    f = !1
                                } else break;
                            else if (c < e[b].endValue / e[b + 1].startValue) {
                                c /= e[b].endValue / e[b + 1].startValue;
                                if (c > 1 / e[b].size) {
                                    a *= Math.pow(e[b].endValue / e[b].startValue, 1 >= e[b].size ? 1 : Math.log(c) / Math.log(e[b].size)) * c;
                                    break
                                } else a /= e[b].endValue / e[b].startValue / e[b].size;
                                c *= e[b].size
                            } else break;
                f = a * this.viewportMinimum
            } else {
                a = c = (b - this.conversionParameters.reference) / this.conversionParameters.pixelPerUnit;
                if (b <= this.conversionParameters.reference ===
                    ("left" === this._position || "right" === this._position) !== this.reversed)
                    for (b = 0; b < e.length; b++) {
                        if (!(e[b].endValue < this.conversionParameters.minimum))
                            if (f)
                                if (e[b].startValue < this.conversionParameters.minimum) {
                                    if (e[b].size && this.conversionParameters.minimum + c * (e[b].endValue - e[b].startValue) / e[b].size < e[b].endValue) {
                                        a = 0 >= e[b].size ? 0 : c * (e[b].endValue - e[b].startValue) / e[b].size;
                                        break
                                    } else a += e[b].endValue - this.conversionParameters.minimum - e[b].size * (e[b].endValue - this.conversionParameters.minimum) / (e[b].endValue -
                                        e[b].startValue), c -= e[b].size * (e[b].endValue - this.conversionParameters.minimum) / (e[b].endValue - e[b].startValue);
                                    f = !1
                                } else if (c > e[b].startValue - this.conversionParameters.minimum) {
                                    c -= e[b].startValue - this.conversionParameters.minimum;
                                    if (c < e[b].size) {
                                        a += (e[b].endValue - e[b].startValue) * (0 === e[b].size ? 1 : c / e[b].size) - c;
                                        break
                                    } else a += e[b].endValue - e[b].startValue - e[b].size;
                                    c -= e[b].size;
                                    f = !1
                                } else break;
                            else if (c > e[b].startValue - e[b - 1].endValue) {
                                c -= e[b].startValue - e[b - 1].endValue;
                                if (c < e[b].size) {
                                    a += (e[b].endValue -
                                        e[b].startValue) * (0 === e[b].size ? 1 : c / e[b].size) - c;
                                    break
                                } else a += e[b].endValue - e[b].startValue - e[b].size;
                                c -= e[b].size
                            } else break
                    } else
                    for (b = e.length - 1; 0 <= b; b--)
                        if (!(e[b].startValue > this.conversionParameters.minimum))
                            if (f)
                                if (e[b].endValue > this.conversionParameters.minimum)
                                    if (e[b].size && this.conversionParameters.minimum + c * (e[b].endValue - e[b].startValue) / e[b].size > e[b].startValue) {
                                        a = 0 >= e[b].size ? 0 : c * (e[b].endValue - e[b].startValue) / e[b].size;
                                        break
                                    } else a += e[b].startValue - this.conversionParameters.minimum +
                                        e[b].size * (this.conversionParameters.minimum - e[b].startValue) / (e[b].endValue - e[b].startValue), c += e[b].size * (this.conversionParameters.minimum - e[b].startValue) / (e[b].endValue - e[b].startValue), f = !1;
                                else if (c < e[b].endValue - this.conversionParameters.minimum) {
                                    c -= e[b].endValue - this.conversionParameters.minimum;
                                    if (c > -1 * e[b].size) {
                                        a += (e[b].endValue - e[b].startValue) * (0 === e[b].size ? 1 : c / e[b].size) + c;
                                        break
                                    } else a -= e[b].endValue - e[b].startValue - e[b].size;
                                    c += e[b].size;
                                    f = !1
                                } else break;
                            else if (c < e[b].endValue - e[b +
                                1].startValue) {
                                c -= e[b].endValue - e[b + 1].startValue;
                                if (c > -1 * e[b].size) {
                                    a += (e[b].endValue - e[b].startValue) * (0 === e[b].size ? 1 : c / e[b].size) + c;
                                    break
                                } else a -= e[b].endValue - e[b].startValue - e[b].size;
                                c += e[b].size
                            } else break;
                f = this.conversionParameters.minimum + a
            }
            return f
        };
        C.prototype.convertValueToPixel = function(a) {
            a = this.getApparentDifference(this.conversionParameters.minimum, a, a);
            return this.logarithmic ? this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * Math.log(a / this.conversionParameters.minimum) /
                this.conversionParameters.lnLogarithmBase + 0.5 << 0 : this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * (a - this.conversionParameters.minimum) + 0.5 << 0
        };
        C.prototype.getApparentDifference = function(a, f, b, c) {
            var e = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
            if (this.logarithmic) {
                b = y(b) ? f / a : b;
                for (var g = 0; g < e.length && !(f < e[g].startValue); g++) a > e[g].endValue || (a <= e[g].startValue && f >= e[g].endValue ? b = b / e[g].endValue * e[g].startValue * e[g].size : a >= e[g].startValue && f >= e[g].endValue ? b =
                    b / e[g].endValue * a * Math.pow(e[g].size, Math.log(e[g].endValue / a) / Math.log(e[g].endValue / e[g].startValue)) : a <= e[g].startValue && f <= e[g].endValue ? b = b / f * e[g].startValue * Math.pow(e[g].size, Math.log(f / e[g].startValue) / Math.log(e[g].endValue / e[g].startValue)) : !c && (a > e[g].startValue && f < e[g].endValue) && (b = a * Math.pow(e[g].size, Math.log(f / a) / Math.log(e[g].endValue / e[g].startValue))))
            } else
                for (b = y(b) ? Math.abs(f - a) : b, g = 0; g < e.length && !(f < e[g].startValue); g++) a > e[g].endValue || (a <= e[g].startValue && f >= e[g].endValue ?
                    b = b - e[g].endValue + e[g].startValue + e[g].size : a > e[g].startValue && f >= e[g].endValue ? b = b - e[g].endValue + a + e[g].size * (e[g].endValue - a) / (e[g].endValue - e[g].startValue) : a <= e[g].startValue && f < e[g].endValue ? b = b - f + e[g].startValue + e[g].size * (f - e[g].startValue) / (e[g].endValue - e[g].startValue) : !c && (a > e[g].startValue && f < e[g].endValue) && (b = a + e[g].size * (f - a) / (e[g].endValue - e[g].startValue)));
            return b
        };
        C.prototype.setViewPortRange = function(a, f) {
            this.sessionVariables.newViewportMinimum = this.viewportMinimum = Math.min(a,
                f);
            this.sessionVariables.newViewportMaximum = this.viewportMaximum = Math.max(a, f)
        };
        C.prototype.getXValueAt = function(a) {
            if (!a) return null;
            var f = null;
            "left" === this._position ? f = this.convertPixelToValue(a.y) : "bottom" === this._position && (f = this.convertPixelToValue(a.x));
            return f
        };
        C.prototype.calculateValueToPixelConversionParameters = function(a) {
            a = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
            var f = {
                    pixelPerUnit: null,
                    minimum: null,
                    reference: null
                },
                b = this.lineCoordinates.width,
                c = this.lineCoordinates.height,
                b = "bottom" === this._position || "top" === this._position ? b : c,
                c = Math.abs(this.range);
            if (this.logarithmic)
                for (var e = 0; e < a.length && !(this.viewportMaximum < a[e].startValue); e++) this.viewportMinimum > a[e].endValue || (this.viewportMinimum >= a[e].startValue && this.viewportMaximum <= a[e].endValue ? b = 0 : this.viewportMinimum <= a[e].startValue && this.viewportMaximum >= a[e].endValue ? (c = c / a[e].endValue * a[e].startValue, b = 0 < a[e].spacing.toString().indexOf("%") ? b * (1 - parseFloat(a[e].spacing) / 100) : b - Math.min(a[e].spacing, 0.1 * b)) :
                    this.viewportMinimum > a[e].startValue && this.viewportMaximum >= a[e].endValue ? (c = c / a[e].endValue * this.viewportMinimum, b = 0 < a[e].spacing.toString().indexOf("%") ? b * (1 - parseFloat(a[e].spacing) / 100 * Math.log(a[e].endValue / this.viewportMinimum) / Math.log(a[e].endValue / a[e].startValue)) : b - Math.min(a[e].spacing, 0.1 * b) * Math.log(a[e].endValue / this.viewportMinimum) / Math.log(a[e].endValue / a[e].startValue)) : this.viewportMinimum <= a[e].startValue && this.viewportMaximum < a[e].endValue && (c = c / this.viewportMaximum * a[e].startValue,
                        b = 0 < a[e].spacing.toString().indexOf("%") ? b * (1 - parseFloat(a[e].spacing) / 100 * Math.log(this.viewportMaximum / a[e].startValue) / Math.log(a[e].endValue / a[e].startValue)) : b - Math.min(a[e].spacing, 0.1 * b) * Math.log(this.viewportMaximum / a[e].startValue) / Math.log(a[e].endValue / a[e].startValue)));
            else
                for (e = 0; e < a.length && !(this.viewportMaximum < a[e].startValue); e++) this.viewportMinimum > a[e].endValue || (this.viewportMinimum >= a[e].startValue && this.viewportMaximum <= a[e].endValue ? b = 0 : this.viewportMinimum <= a[e].startValue &&
                this.viewportMaximum >= a[e].endValue ? (c = c - a[e].endValue + a[e].startValue, b = 0 < a[e].spacing.toString().indexOf("%") ? b * (1 - parseFloat(a[e].spacing) / 100) : b - Math.min(a[e].spacing, 0.1 * b)) : this.viewportMinimum > a[e].startValue && this.viewportMaximum >= a[e].endValue ? (c = c - a[e].endValue + this.viewportMinimum, b = 0 < a[e].spacing.toString().indexOf("%") ? b * (1 - parseFloat(a[e].spacing) / 100 * (a[e].endValue - this.viewportMinimum) / (a[e].endValue - a[e].startValue)) : b - Math.min(a[e].spacing, 0.1 * b) * (a[e].endValue - this.viewportMinimum) /
                    (a[e].endValue - a[e].startValue)) : this.viewportMinimum <= a[e].startValue && this.viewportMaximum < a[e].endValue && (c = c - this.viewportMaximum + a[e].startValue, b = 0 < a[e].spacing.toString().indexOf("%") ? b * (1 - parseFloat(a[e].spacing) / 100 * (this.viewportMaximum - a[e].startValue) / (a[e].endValue - a[e].startValue)) : b - Math.min(a[e].spacing, 0.1 * b) * (this.viewportMaximum - a[e].startValue) / (a[e].endValue - a[e].startValue)));
            f.minimum = this.viewportMinimum;
            f.maximum = this.viewportMaximum;
            f.range = c;
            if ("bottom" === this._position ||
                "top" === this._position) this.logarithmic ? (f.lnLogarithmBase = Math.log(this.logarithmBase), f.pixelPerUnit = (this.reversed ? -1 : 1) * b * f.lnLogarithmBase / Math.log(Math.abs(c))) : f.pixelPerUnit = (this.reversed ? -1 : 1) * b / Math.abs(c), f.reference = this.reversed ? this.lineCoordinates.x2 : this.lineCoordinates.x1;
            if ("left" === this._position || "right" === this._position) this.logarithmic ? (f.lnLogarithmBase = Math.log(this.logarithmBase), f.pixelPerUnit = (this.reversed ? 1 : -1) * b * f.lnLogarithmBase / Math.log(Math.abs(c))) : f.pixelPerUnit =
                (this.reversed ? 1 : -1) * b / Math.abs(c), f.reference = this.reversed ? this.lineCoordinates.y1 : this.lineCoordinates.y2;
            this.conversionParameters = f
        };
        C.prototype.calculateAxisParameters = function() {
            if (this.logarithmic) this.calculateLogarithmicAxisParameters();
            else {
                var a = this.chart.layoutManager.getFreeSpace(),
                    f = !1,
                    b = !1;
                "bottom" === this._position || "top" === this._position ? (this.maxWidth = a.width, this.maxHeight = a.height) : (this.maxWidth = a.height, this.maxHeight = a.width);
                var a = "axisX" === this.type ? "xySwapped" === this.chart.plotInfo.axisPlacement ?
                    62 : 70 : "xySwapped" === this.chart.plotInfo.axisPlacement ? 50 : 40,
                    c = 4;
                "axisX" === this.type && (c = 600 > this.maxWidth ? 8 : 6);
                var a = Math.max(c, Math.floor(this.maxWidth / a)),
                    e, g, h, c = 0;
                !y(this.options.viewportMinimum) && (!y(this.options.viewportMaximum) && this.options.viewportMinimum >= this.options.viewportMaximum) && (this.viewportMinimum = this.viewportMaximum = null);
                if (y(this.options.viewportMinimum) && !y(this.sessionVariables.newViewportMinimum) && !isNaN(this.sessionVariables.newViewportMinimum)) this.viewportMinimum = this.sessionVariables.newViewportMinimum;
                else if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = this.minimum;
                if (y(this.options.viewportMaximum) && !y(this.sessionVariables.newViewportMaximum) && !isNaN(this.sessionVariables.newViewportMaximum)) this.viewportMaximum = this.sessionVariables.newViewportMaximum;
                else if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = this.maximum;
                if (this.scaleBreaks)
                    for (c = 0; c < this.scaleBreaks._appliedBreaks.length; c++)
                        if ((!y(this.sessionVariables.newViewportMinimum) &&
                                this.sessionVariables.newViewportMinimum >= this.scaleBreaks._appliedBreaks[c].startValue || !y(this.options.minimum) && this.options.minimum >= this.scaleBreaks._appliedBreaks[c].startValue || !y(this.options.viewportMinimum) && this.viewportMinimum >= this.scaleBreaks._appliedBreaks[c].startValue) && (!y(this.sessionVariables.newViewportMaximum) && this.sessionVariables.newViewportMaximum <= this.scaleBreaks._appliedBreaks[c].endValue || !y(this.options.maximum) && this.options.maximum <= this.scaleBreaks._appliedBreaks[c].endValue ||
                                !y(this.options.viewportMaximum) && this.viewportMaximum <= this.scaleBreaks._appliedBreaks[c].endValue)) {
                            this.scaleBreaks._appliedBreaks.splice(c, 1);
                            break
                        }
                if ("axisX" === this.type) {
                    if (this.dataSeries && 0 < this.dataSeries.length)
                        for (e = 0; e < this.dataSeries.length; e++) "dateTime" === this.dataSeries[e].xValueType && (b = !0);
                    e = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin;
                    g = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax;
                    0 === g - e && (c = "undefined" === typeof this.options.interval ?
                        0.4 : this.options.interval, g += c, e -= c);
                    Infinity !== this.dataInfo.minDiff ? h = this.dataInfo.minDiff : 1 < g - e ? h = 0.5 * Math.abs(g - e) : (h = 1, b && (f = !0))
                } else "axisY" === this.type && (e = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, g = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, isFinite(e) || isFinite(g) ? isFinite(e) ? isFinite(g) || (g = e) : e = g : (g = "undefined" === typeof this.options.interval ? -Infinity : this.options.interval, e = "undefined" !== typeof this.options.interval || isFinite(this.dataInfo.minDiff) ?
                    0 : Infinity), 0 === e && 0 === g ? (g += 9, e = 0) : 0 === g - e ? (c = Math.min(Math.abs(0.01 * Math.abs(g)), 5), g += c, e -= c) : e > g ? (c = Math.min(0.01 * Math.abs(this.getApparentDifference(g, e, null, !0)), 5), 0 <= g ? e = g - c : g = isFinite(e) ? e + c : 0) : (c = Math.min(0.01 * Math.abs(this.getApparentDifference(e, g, null, !0)), 0.05), 0 !== g && (g += c), 0 !== e && (e -= c)), h = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < g - e ? 0.5 * Math.abs(g - e) : 1, this.includeZero && (null === this.viewportMinimum || isNaN(this.viewportMinimum)) && 0 < e && (e = 0), this.includeZero && (null ===
                    this.viewportMaximum || isNaN(this.viewportMaximum)) && 0 > g && (g = 0));
                c = this.getApparentDifference(isNaN(this.viewportMinimum) || null === this.viewportMinimum ? e : this.viewportMinimum, isNaN(this.viewportMaximum) || null === this.viewportMaximum ? g : this.viewportMaximum, null, !0);
                if ("axisX" === this.type && b) {
                    this.intervalType || (c / 1 <= a ? (this.interval = 1, this.intervalType = "millisecond") : c / 2 <= a ? (this.interval = 2, this.intervalType = "millisecond") : c / 5 <= a ? (this.interval = 5, this.intervalType = "millisecond") : c / 10 <= a ? (this.interval =
                        10, this.intervalType = "millisecond") : c / 20 <= a ? (this.interval = 20, this.intervalType = "millisecond") : c / 50 <= a ? (this.interval = 50, this.intervalType = "millisecond") : c / 100 <= a ? (this.interval = 100, this.intervalType = "millisecond") : c / 200 <= a ? (this.interval = 200, this.intervalType = "millisecond") : c / 250 <= a ? (this.interval = 250, this.intervalType = "millisecond") : c / 300 <= a ? (this.interval = 300, this.intervalType = "millisecond") : c / 400 <= a ? (this.interval = 400, this.intervalType = "millisecond") : c / 500 <= a ? (this.interval = 500, this.intervalType =
                        "millisecond") : c / (1 * U.secondDuration) <= a ? (this.interval = 1, this.intervalType = "second") : c / (2 * U.secondDuration) <= a ? (this.interval = 2, this.intervalType = "second") : c / (5 * U.secondDuration) <= a ? (this.interval = 5, this.intervalType = "second") : c / (10 * U.secondDuration) <= a ? (this.interval = 10, this.intervalType = "second") : c / (15 * U.secondDuration) <= a ? (this.interval = 15, this.intervalType = "second") : c / (20 * U.secondDuration) <= a ? (this.interval = 20, this.intervalType = "second") : c / (30 * U.secondDuration) <= a ? (this.interval = 30, this.intervalType =
                        "second") : c / (1 * U.minuteDuration) <= a ? (this.interval = 1, this.intervalType = "minute") : c / (2 * U.minuteDuration) <= a ? (this.interval = 2, this.intervalType = "minute") : c / (5 * U.minuteDuration) <= a ? (this.interval = 5, this.intervalType = "minute") : c / (10 * U.minuteDuration) <= a ? (this.interval = 10, this.intervalType = "minute") : c / (15 * U.minuteDuration) <= a ? (this.interval = 15, this.intervalType = "minute") : c / (20 * U.minuteDuration) <= a ? (this.interval = 20, this.intervalType = "minute") : c / (30 * U.minuteDuration) <= a ? (this.interval = 30, this.intervalType =
                        "minute") : c / (1 * U.hourDuration) <= a ? (this.interval = 1, this.intervalType = "hour") : c / (2 * U.hourDuration) <= a ? (this.interval = 2, this.intervalType = "hour") : c / (3 * U.hourDuration) <= a ? (this.interval = 3, this.intervalType = "hour") : c / (6 * U.hourDuration) <= a ? (this.interval = 6, this.intervalType = "hour") : c / (1 * U.dayDuration) <= a ? (this.interval = 1, this.intervalType = "day") : c / (2 * U.dayDuration) <= a ? (this.interval = 2, this.intervalType = "day") : c / (4 * U.dayDuration) <= a ? (this.interval = 4, this.intervalType = "day") : c / (1 * U.weekDuration) <= a ? (this.interval =
                        1, this.intervalType = "week") : c / (2 * U.weekDuration) <= a ? (this.interval = 2, this.intervalType = "week") : c / (3 * U.weekDuration) <= a ? (this.interval = 3, this.intervalType = "week") : c / (1 * U.monthDuration) <= a ? (this.interval = 1, this.intervalType = "month") : c / (2 * U.monthDuration) <= a ? (this.interval = 2, this.intervalType = "month") : c / (3 * U.monthDuration) <= a ? (this.interval = 3, this.intervalType = "month") : c / (6 * U.monthDuration) <= a ? (this.interval = 6, this.intervalType = "month") : (this.interval = c / (1 * U.yearDuration) <= a ? 1 : c / (2 * U.yearDuration) <=
                    a ? 2 : c / (4 * U.yearDuration) <= a ? 4 : Math.floor(C.getNiceNumber(c / (a - 1), !0) / U.yearDuration), this.intervalType = "year"));
                    if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = e - h / 2;
                    if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = g + h / 2;
                    f ? this.autoValueFormatString = "MMM DD YYYY HH:mm" : "year" === this.intervalType ? this.autoValueFormatString = "YYYY" : "month" === this.intervalType ? this.autoValueFormatString = "MMM YYYY" : "week" === this.intervalType ? this.autoValueFormatString =
                        "MMM DD YYYY" : "day" === this.intervalType ? this.autoValueFormatString = "MMM DD YYYY" : "hour" === this.intervalType ? this.autoValueFormatString = "hh:mm TT" : "minute" === this.intervalType ? this.autoValueFormatString = "hh:mm TT" : "second" === this.intervalType ? this.autoValueFormatString = "hh:mm:ss TT" : "millisecond" === this.intervalType && (this.autoValueFormatString = "fff'ms'");
                    this.valueFormatString || (this.valueFormatString = this.autoValueFormatString)
                } else {
                    this.intervalType = "number";
                    c = C.getNiceNumber(c, !1);
                    this.interval =
                        this.options && 0 < this.options.interval ? this.options.interval : C.getNiceNumber(c / (a - 1), !0);
                    if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = "axisX" === this.type ? e - h / 2 : Math.floor(e / this.interval) * this.interval;
                    if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = "axisX" === this.type ? g + h / 2 : Math.ceil(g / this.interval) * this.interval;
                    0 === this.viewportMaximum && 0 === this.viewportMinimum && (0 === this.options.viewportMinimum ? this.viewportMaximum += 10 : 0 === this.options.viewportMaximum &&
                        (this.viewportMinimum -= 10), this.options && "undefined" === typeof this.options.interval && (this.interval = C.getNiceNumber((this.viewportMaximum - this.viewportMinimum) / (a - 1), !0)))
                }
                if (null === this.minimum || null === this.maximum)
                    if ("axisX" === this.type ? (e = null !== this.minimum ? this.minimum : this.dataInfo.min, g = null !== this.maximum ? this.maximum : this.dataInfo.max, 0 === g - e && (c = "undefined" === typeof this.options.interval ? 0.4 : this.options.interval, g += c, e -= c), h = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < g - e ?
                            0.5 * Math.abs(g - e) : 1) : "axisY" === this.type && (e = null !== this.minimum ? this.minimum : this.dataInfo.min, g = null !== this.maximum ? this.maximum : this.dataInfo.max, isFinite(e) || isFinite(g) ? 0 === e && 0 === g ? (g += 9, e = 0) : 0 === g - e ? (c = Math.min(Math.abs(0.01 * Math.abs(g)), 5), g += c, e -= c) : e > g ? (c = Math.min(0.01 * Math.abs(this.getApparentDifference(g, e, null, !0)), 5), 0 <= g ? e = g - c : g = isFinite(e) ? e + c : 0) : (c = Math.min(0.01 * Math.abs(this.getApparentDifference(e, g, null, !0)), 0.05), 0 !== g && (g += c), 0 !== e && (e -= c)) : (g = "undefined" === typeof this.options.interval ?
                            -Infinity : this.options.interval, e = "undefined" !== typeof this.options.interval || isFinite(this.dataInfo.minDiff) ? 0 : Infinity), h = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < g - e ? 0.5 * Math.abs(g - e) : 1, this.includeZero && (null === this.minimum || isNaN(this.minimum)) && 0 < e && (e = 0), this.includeZero && (null === this.maximum || isNaN(this.maximum)) && 0 > g && (g = 0)), Math.abs(this.getApparentDifference(e, g, null, !0)), "axisX" === this.type && b) {
                        this.valueType = "dateTime";
                        if (null === this.minimum || isNaN(this.minimum)) this.minimum =
                            e - h / 2;
                        if (null === this.maximum || isNaN(this.maximum)) this.maximum = g + h / 2
                    } else this.intervalType = this.valueType = "number", null === this.minimum && (this.minimum = "axisX" === this.type ? e - h / 2 : Math.floor(e / this.interval) * this.interval, this.minimum = Math.min(this.minimum, null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? Infinity : this.sessionVariables.viewportMinimum)), null === this.maximum && (this.maximum = "axisX" === this.type ? g + h / 2 : Math.ceil(g / this.interval) * this.interval, this.maximum =
                        Math.max(this.maximum, null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? -Infinity : this.sessionVariables.viewportMaximum)), 0 === this.maximum && 0 === this.minimum && (0 === this.options.minimum ? this.maximum += 10 : 0 === this.options.maximum && (this.minimum -= 10));
                y(this.sessionVariables.newViewportMinimum) && (this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum));
                y(this.sessionVariables.newViewportMaximum) && (this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum));
                this.range = this.viewportMaximum - this.viewportMinimum;
                this.intervalStartPosition = "axisX" === this.type && b ? this.getLabelStartPoint(new Date(this.viewportMinimum), this.intervalType, this.interval) : Math.floor((this.viewportMinimum + 0.2 * this.interval) / this.interval) * this.interval;
                this.valueFormatString || (this.valueFormatString = C.generateValueFormatString(this.range, 2))
            }
        };
        C.prototype.calculateLogarithmicAxisParameters = function() {
            var a = this.chart.layoutManager.getFreeSpace(),
                f = Math.log(this.logarithmBase),
                b;
            "bottom" === this._position || "top" === this._position ? (this.maxWidth = a.width, this.maxHeight = a.height) : (this.maxWidth = a.height, this.maxHeight = a.width);
            var a = "axisX" === this.type ? 500 > this.maxWidth ? 7 : Math.max(7, Math.floor(this.maxWidth / 100)) : Math.max(Math.floor(this.maxWidth / 50), 3),
                c, e, g, h;
            h = 1;
            if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = this.minimum;
            if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = this.maximum;
            if (this.scaleBreaks)
                for (h =
                         0; h < this.scaleBreaks._appliedBreaks.length; h++)
                    if ((!y(this.sessionVariables.newViewportMinimum) && this.sessionVariables.newViewportMinimum >= this.scaleBreaks._appliedBreaks[h].startValue || !y(this.options.minimum) && this.options.minimum >= this.scaleBreaks._appliedBreaks[h].startValue || !y(this.options.viewportMinimum) && this.viewportMinimum >= this.scaleBreaks._appliedBreaks[h].startValue) && (!y(this.sessionVariables.newViewportMaximum) && this.sessionVariables.newViewportMaximum <= this.scaleBreaks._appliedBreaks[h].endValue ||
                            !y(this.options.maximum) && this.options.maximum <= this.scaleBreaks._appliedBreaks[h].endValue || !y(this.options.viewportMaximum) && this.viewportMaximum <= this.scaleBreaks._appliedBreaks[h].endValue)) {
                        this.scaleBreaks._appliedBreaks.splice(h, 1);
                        break
                    }
            "axisX" === this.type ? (c = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, e = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, 1 === e / c && (h = Math.pow(this.logarithmBase, "undefined" === typeof this.options.interval ?
                0.4 : this.options.interval), e *= h, c /= h), g = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : e / c > this.logarithmBase ? e / c * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase) : "axisY" === this.type && (c = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, e = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, 0 >= c && !isFinite(e) ? (e = "undefined" === typeof this.options.interval ? 0 : this.options.interval, c = 1) : 0 >= c ? c = e : isFinite(e) || (e = c), 1 === c && 1 === e ? (e *= this.logarithmBase -
                1 / this.logarithmBase, c = 1) : 1 === e / c ? (h = Math.min(e * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 5)), e *= h, c /= h) : c > e ? (h = Math.min(c / e * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 5)), 1 <= e ? c = e / h : e = c * h) : (h = Math.min(e / c * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 0.04)), 1 !== e && (e *= h), 1 !== c && (c /= h)), g = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : e / c > this.logarithmBase ? e / c * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase, this.includeZero && (null ===
                this.viewportMinimum || isNaN(this.viewportMinimum)) && 1 < c && (c = 1), this.includeZero && (null === this.viewportMaximum || isNaN(this.viewportMaximum)) && 1 > e && (e = 1));
            h = (isNaN(this.viewportMaximum) || null === this.viewportMaximum ? e : this.viewportMaximum) / (isNaN(this.viewportMinimum) || null === this.viewportMinimum ? c : this.viewportMinimum);
            linearRange = (isNaN(this.viewportMaximum) || null === this.viewportMaximum ? e : this.viewportMaximum) - (isNaN(this.viewportMinimum) || null === this.viewportMinimum ? c : this.viewportMinimum);
            this.intervalType =
                "number";
            h = Math.pow(this.logarithmBase, C.getNiceNumber(Math.abs(Math.log(h) / f), !1));
            this.options && 0 < this.options.interval ? this.interval = this.options.interval : (this.interval = C.getNiceExponent(Math.log(h) / f / (a - 1), !0), b = C.getNiceNumber(linearRange / (a - 1), !0));
            if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = "axisX" === this.type ? c / Math.sqrt(g) : Math.pow(this.logarithmBase, this.interval * Math.floor(Math.log(c) / f / this.interval));
            if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum =
                "axisX" === this.type ? e * Math.sqrt(g) : Math.pow(this.logarithmBase, this.interval * Math.ceil(Math.log(e) / f / this.interval));
            1 === this.viewportMaximum && 1 === this.viewportMinimum && (1 === this.options.viewportMinimum ? this.viewportMaximum *= this.logarithmBase - 1 / this.logarithmBase : 1 === this.options.viewportMaximum && (this.viewportMinimum /= this.logarithmBase - 1 / this.logarithmBase), this.options && "undefined" === typeof this.options.interval && (this.interval = C.getNiceExponent(Math.ceil(Math.log(h) / f) / (a - 1)), b = C.getNiceNumber((this.viewportMaximum -
                this.viewportMinimum) / (a - 1), !0)));
            if (null === this.minimum || null === this.maximum) "axisX" === this.type ? (c = null !== this.minimum ? this.minimum : this.dataInfo.min, e = null !== this.maximum ? this.maximum : this.dataInfo.max, 1 === e / c && (h = Math.pow(this.logarithmBase, "undefined" === typeof this.options.interval ? 0.4 : this.options.interval), e *= h, c /= h), g = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : e / c > this.logarithmBase ? e / c * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase) : "axisY" === this.type && (c = null !== this.minimum ?
                this.minimum : this.dataInfo.min, e = null !== this.maximum ? this.maximum : this.dataInfo.max, isFinite(c) || isFinite(e) ? 1 === c && 1 === e ? (e *= this.logarithmBase, c /= this.logarithmBase) : 1 === e / c ? (h = Math.pow(this.logarithmBase, this.interval), e *= h, c /= h) : c > e ? (h = Math.min(0.01 * (c / e), 5), 1 <= e ? c = e / h : e = c * h) : (h = Math.min(e / c * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 0.04)), 1 !== e && (e *= h), 1 !== c && (c /= h)) : (e = "undefined" === typeof this.options.interval ? 0 : this.options.interval, c = 1), g = Infinity !== this.dataInfo.minDiff ?
                this.dataInfo.minDiff : e / c > this.logarithmBase ? e / c * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase, this.includeZero && (null === this.minimum || isNaN(this.minimum)) && 1 < c && (c = 1), this.includeZero && (null === this.maximum || isNaN(this.maximum)) && 1 > e && (e = 1)), this.intervalType = "number", null === this.minimum && (this.minimum = "axisX" === this.type ? c / Math.sqrt(g) : Math.pow(this.logarithmBase, this.interval * Math.floor(Math.log(c) / f / this.interval)), this.minimum = Math.min(this.minimum, null === this.sessionVariables.viewportMinimum ||
            isNaN(this.sessionVariables.viewportMinimum) ? "undefined" === typeof this.sessionVariables.newViewportMinimum ? Infinity : this.sessionVariables.newViewportMinimum : this.sessionVariables.viewportMinimum)), null === this.maximum && (this.maximum = "axisX" === this.type ? e * Math.sqrt(g) : Math.pow(this.logarithmBase, this.interval * Math.ceil(Math.log(e) / f / this.interval)), this.maximum = Math.max(this.maximum, null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? "undefined" === typeof this.sessionVariables.newViewportMaximum ?
                0 : this.sessionVariables.newViewportMaximum : this.sessionVariables.viewportMaximum)), 1 === this.maximum && 1 === this.minimum && (1 === this.options.minimum ? this.maximum *= this.logarithmBase - 1 / this.logarithmBase : 1 === this.options.maximum && (this.minimum /= this.logarithmBase - 1 / this.logarithmBase));
            this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum);
            this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum);
            this.viewportMinimum > this.viewportMaximum && (!this.options.viewportMinimum && !this.options.minimum ||
            this.options.viewportMaximum || this.options.maximum ? this.options.viewportMinimum || this.options.minimum || !this.options.viewportMaximum && !this.options.maximum || (this.viewportMinimum = this.minimum = (this.options.viewportMaximum || this.options.maximum) / Math.pow(this.logarithmBase, 2 * Math.ceil(this.interval))) : this.viewportMaximum = this.maximum = this.options.viewportMinimum || this.options.minimum);
            c = Math.pow(this.logarithmBase, Math.floor(Math.log(this.viewportMinimum) / (f * this.interval) + 0.2) * this.interval);
            this.range =
                this.viewportMaximum / this.viewportMinimum;
            this.noTicks = a;
            if (!this.options.interval && this.range < Math.pow(this.logarithmBase, 8 > this.viewportMaximum || 3 > a ? 2 : 3)) {
                for (f = Math.floor(this.viewportMinimum / b + 0.5) * b; f < this.viewportMinimum;) f += b;
                this.equidistantInterval = !1;
                this.intervalStartPosition = f;
                this.interval = b
            } else this.options.interval || (b = Math.ceil(this.interval), this.range > this.interval && (this.interval = b, c = Math.pow(this.logarithmBase, Math.floor(Math.log(this.viewportMinimum) / (f * this.interval) + 0.2) * this.interval))),
                this.equidistantInterval = !0, this.intervalStartPosition = c;
            if (!this.valueFormatString && (this.valueFormatString = "#,##0.##", 1 > this.viewportMinimum)) {
                f = Math.floor(Math.abs(Math.log(this.viewportMinimum) / Math.LN10)) + 2;
                if (isNaN(f) || !isFinite(f)) f = 2;
                if (2 < f)
                    for (h = 0; h < f - 2; h++) this.valueFormatString += "#"
            }
        };
        C.generateValueFormatString = function(a, f) {
            var b = "#,##0.",
                c = f;
            1 > a && (c += Math.floor(Math.abs(Math.log(a) / Math.LN10)), isNaN(c) || !isFinite(c)) && (c = f);
            for (var e = 0; e < c; e++) b += "#";
            return b
        };
        C.getNiceExponent = function(a,
                                     f) {
            var b = Math.floor(Math.log(a) / Math.LN10),
                c = a / Math.pow(10, b),
                c = 0 > b ? 1 >= c ? 1 : 5 >= c ? 5 : 10 : Math.max(Math.floor(c), 1);
            return Number((c * Math.pow(10, b)).toFixed(20))
        };
        C.getNiceNumber = function(a, f) {
            var b = Math.floor(Math.log(a) / Math.LN10),
                c = a / Math.pow(10, b);
            return Number(((f ? 1.5 > c ? 1 : 3 > c ? 2 : 7 > c ? 5 : 10 : 1 >= c ? 1 : 2 >= c ? 2 : 5 >= c ? 5 : 10) * Math.pow(10, b)).toFixed(20))
        };
        C.prototype.getLabelStartPoint = function() {
            var a = U[this.intervalType + "Duration"] * this.interval,
                a = new Date(Math.floor(this.viewportMinimum / a) * a);
            if ("millisecond" !==
                this.intervalType)
                if ("second" === this.intervalType) 0 < a.getMilliseconds() && (a.setSeconds(a.getSeconds() + 1), a.setMilliseconds(0));
                else if ("minute" === this.intervalType) {
                    if (0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setMinutes(a.getMinutes() + 1), a.setSeconds(0), a.setMilliseconds(0)
                } else if ("hour" === this.intervalType) {
                    if (0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setHours(a.getHours() + 1), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)
                } else if ("day" === this.intervalType) {
                    if (0 < a.getHours() ||
                        0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setDate(a.getDate() + 1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)
                } else if ("week" === this.intervalType) {
                    if (0 < a.getDay() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setDate(a.getDate() + (7 - a.getDay())), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)
                } else if ("month" === this.intervalType) {
                    if (1 < a.getDate() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setMonth(a.getMonth() +
                        1), a.setDate(1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)
                } else "year" === this.intervalType && (0 < a.getMonth() || 1 < a.getDate() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) && (a.setFullYear(a.getFullYear() + 1), a.setMonth(0), a.setDate(1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0));
            return a
        };
        pa(P, X);
        pa(aa, X);
        aa.prototype.createUserOptions = function(a) {
            if ("undefined" !== typeof a || this.options._isPlaceholder) {
                var f = 0;
                this.parent.options._isPlaceholder &&
                this.parent.createUserOptions();
                this.options._isPlaceholder || (Da(this.parent[this.optionsName]), f = this.parent.options[this.optionsName].indexOf(this.options));
                this.options = "undefined" === typeof a ? {} : a;
                this.parent.options[this.optionsName][f] = this.options
            }
        };
        aa.prototype.render = function(a) {
            if (0 !== this.spacing || 0 !== this.options.lineThickness && ("undefined" !== typeof this.options.lineThickness || 0 !== this.parent.lineThickness)) {
                var f = this.ctx,
                    b = this.ctx.globalAlpha;
                this.ctx = a || this.ctx;
                this.ctx.save();
                this.ctx.beginPath();
                this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
                this.ctx.clip();
                var c = this.scaleBreaks.parent.getPixelCoordinatesOnAxis(this.startValue),
                    e = this.scaleBreaks.parent.getPixelCoordinatesOnAxis(this.endValue);
                this.ctx.strokeStyle = this.lineColor;
                this.ctx.fillStyle = this.color;
                this.ctx.beginPath();
                this.ctx.globalAlpha = 1;
                R(this.id);
                var g, h, l, m, k, r;
                a = Math.max(this.spacing, 3);
                var p = Math.max(0, this.lineThickness);
                this.ctx.lineWidth = p;
                this.ctx.setLineDash &&
                this.ctx.setLineDash(G(this.lineDashType, p));
                if ("bottom" === this.scaleBreaks.parent._position || "top" === this.scaleBreaks.parent._position)
                    if (c = 1 === p % 2 ? (c.x << 0) + 0.5 : c.x << 0, h = 1 === p % 2 ? (e.x << 0) + 0.5 : e.x << 0, "top" === this.scaleBreaks.parent._position ? (e = this.chart.plotArea.y1, l = this.chart.plotArea.y2 + p / 2 + 0.5 << 0) : (e = this.chart.plotArea.y2, l = this.chart.plotArea.y1 - p / 2 + 0.5 << 0, a *= -1), this.bounds = {
                            x1: c - p / 2,
                            y1: e,
                            x2: h + p / 2,
                            y2: l
                        }, this.ctx.moveTo(c, e), "straight" === this.type || "top" === this.scaleBreaks.parent._position &&
                        0 >= a || "bottom" === this.scaleBreaks.parent._position && 0 <= a) this.ctx.lineTo(c, l), this.ctx.lineTo(h, l), this.ctx.lineTo(h, e);
                    else if ("wavy" === this.type) {
                        m = c;
                        k = e;
                        g = 0.5;
                        r = (l - k) / a / 3;
                        for (var n = 0; n < r; n++) this.ctx.bezierCurveTo(m + g * a, k + a, m + g * a, k + 2 * a, m, k + 3 * a), k += 3 * a, g *= -1;
                        this.ctx.bezierCurveTo(m + g * a, k + a, m + g * a, k + 2 * a, m, k + 3 * a);
                        m = h;
                        g *= -1;
                        this.ctx.lineTo(m, k);
                        for (n = 0; n < r; n++) this.ctx.bezierCurveTo(m + g * a, k - a, m + g * a, k - 2 * a, m, k - 3 * a), k -= 3 * a, g *= -1
                    } else {
                        if ("zigzag" === this.type) {
                            g = -1;
                            k = e + a;
                            m = c + a;
                            r = (l - k) / a / 2;
                            for (n = 0; n < r; n++) this.ctx.lineTo(m,
                                k), m += 2 * g * a, k += 2 * a, g *= -1;
                            this.ctx.lineTo(m, k);
                            m += h - c;
                            for (n = 0; n < r + 1; n++) this.ctx.lineTo(m, k), m += 2 * g * a, k -= 2 * a, g *= -1;
                            this.ctx.lineTo(m + g * a, k + a)
                        }
                    } else if ("left" === this.scaleBreaks.parent._position || "right" === this.scaleBreaks.parent._position)
                    if (e = 1 === p % 2 ? (e.y << 0) + 0.5 : e.y << 0, l = 1 === p % 2 ? (c.y << 0) + 0.5 : c.y << 0, "left" === this.scaleBreaks.parent._position ? (c = this.chart.plotArea.x1, h = this.chart.plotArea.x2 + p / 2 + 0.5 << 0) : (c = this.chart.plotArea.x2, h = this.chart.plotArea.x1 - p / 2 + 0.5 << 0, a *= -1), this.bounds = {
                            x1: c,
                            y1: e - p /
                            2,
                            x2: h,
                            y2: l + p / 2
                        }, this.ctx.moveTo(c, e), "straight" === this.type || "left" === this.scaleBreaks.parent._position && 0 >= a || "right" === this.scaleBreaks.parent._position && 0 <= a) this.ctx.lineTo(h, e), this.ctx.lineTo(h, l), this.ctx.lineTo(c, l);
                    else if ("wavy" === this.type) {
                        m = c;
                        k = e;
                        g = 0.5;
                        r = (h - m) / a / 3;
                        for (n = 0; n < r; n++) this.ctx.bezierCurveTo(m + a, k + g * a, m + 2 * a, k + g * a, m + 3 * a, k), m += 3 * a, g *= -1;
                        this.ctx.bezierCurveTo(m + a, k + g * a, m + 2 * a, k + g * a, m + 3 * a, k);
                        k = l;
                        g *= -1;
                        this.ctx.lineTo(m, k);
                        for (n = 0; n < r; n++) this.ctx.bezierCurveTo(m - a, k + g * a, m - 2 * a,
                            k + g * a, m - 3 * a, k), m -= 3 * a, g *= -1
                    } else if ("zigzag" === this.type) {
                        g = 1;
                        k = e - a;
                        m = c + a;
                        r = (h - m) / a / 2;
                        for (n = 0; n < r; n++) this.ctx.lineTo(m, k), k += 2 * g * a, m += 2 * a, g *= -1;
                        this.ctx.lineTo(m, k);
                        k += l - e;
                        for (n = 0; n < r + 1; n++) this.ctx.lineTo(m, k), k += 2 * g * a, m -= 2 * a, g *= -1;
                        this.ctx.lineTo(m + a, k + g * a)
                    }
                0 < p && this.ctx.stroke();
                this.ctx.closePath();
                this.ctx.globalAlpha = this.fillOpacity;
                this.ctx.globalCompositeOperation = "destination-over";
                this.ctx.fill();
                this.ctx.restore();
                this.ctx.globalAlpha = b;
                this.ctx = f
            }
        };
        pa(ga, X);
        ga.prototype.createUserOptions =
            function(a) {
                if ("undefined" !== typeof a || this.options._isPlaceholder) {
                    var f = 0;
                    this.parent.options._isPlaceholder && this.parent.createUserOptions();
                    this.options._isPlaceholder || (Da(this.parent.stripLines), f = this.parent.options.stripLines.indexOf(this.options));
                    this.options = "undefined" === typeof a ? {} : a;
                    this.parent.options.stripLines[f] = this.options
                }
            };
        ga.prototype.render = function() {
            this.ctx.save();
            var a = this.parent.getPixelCoordinatesOnAxis(this.value),
                f = Math.abs("pixel" === this._thicknessType ? this.thickness :
                    this.parent.conversionParameters.pixelPerUnit * this.thickness);
            if (0 < f) {
                var b = null === this.opacity ? 1 : this.opacity;
                this.ctx.strokeStyle = this.color;
                this.ctx.beginPath();
                var c = this.ctx.globalAlpha;
                this.ctx.globalAlpha = b;
                R(this.id);
                var e, g, h, l;
                this.ctx.lineWidth = f;
                this.ctx.setLineDash && this.ctx.setLineDash(G(this.lineDashType, f));
                if ("bottom" === this.parent._position || "top" === this.parent._position) e = g = 1 === this.ctx.lineWidth % 2 ? (a.x << 0) + 0.5 : a.x << 0, h = this.chart.plotArea.y1, l = this.chart.plotArea.y2, this.bounds = {
                    x1: e - f / 2,
                    y1: h,
                    x2: g + f / 2,
                    y2: l
                };
                else if ("left" === this.parent._position || "right" === this.parent._position) h = l = 1 === this.ctx.lineWidth % 2 ? (a.y << 0) + 0.5 : a.y << 0, e = this.chart.plotArea.x1, g = this.chart.plotArea.x2, this.bounds = {
                    x1: e,
                    y1: h - f / 2,
                    x2: g,
                    y2: l + f / 2
                };
                this.ctx.moveTo(e, h);
                this.ctx.lineTo(g, l);
                this.ctx.stroke();
                this.ctx.globalAlpha = c
            }
            this.ctx.restore()
        };
        pa(ia, X);
        ia.prototype.render = function(a, f) {
            var b, c, e, g, h = null,
                l = h = null,
                m = "";
            if (!this.valueFormatString)
                if ("dateTime" === this.parent.valueType) this.valueFormatString =
                    this.parent.valueFormatString;
                else {
                    var k = 0,
                        k = "xySwapped" === this.chart.plotInfo.axisPlacement ? 50 < this.parent.range ? 0 : 500 < this.chart.width && 25 > this.parent.range ? 2 : Math.floor(Math.abs(Math.log(this.parent.range) / Math.LN10)) + (5 > this.parent.range ? 2 : 10 > this.parent.range ? 1 : 0) : 50 < this.parent.range ? 0 : Math.floor(Math.abs(Math.log(this.parent.range) / Math.LN10)) + (5 > this.parent.range ? 2 : 10 > this.parent.range ? 1 : 0);
                    this.valueFormatString = C.generateValueFormatString(this.parent.range, k)
                }
            var l = null === this.opacity ? 1 :
                this.opacity,
                k = Math.abs("pixel" === this._thicknessType ? this.thickness : this.parent.conversionParameters.pixelPerUnit * this.thickness),
                r = this.chart.overlaidCanvasCtx,
                p = r.globalAlpha;
            r.globalAlpha = l;
            r.beginPath();
            r.strokeStyle = this.color;
            r.lineWidth = k;
            r.save();
            this.labelFontSize = y(this.options.labelFontSize) ? this.parent.labelFontSize : this.labelFontSize;
            if ("left" === this.parent._position || "right" === this.parent._position) this.labelMaxWidth = y(this.options.labelMaxWidth) ? this.parent.bounds.x2 - this.parent.bounds.x1 :
                this.labelMaxWidth, this.labelMaxHeight = y(this.options.labelWrap) || this.labelWrap ? 3 * this.chart.height : 2 * this.labelFontSize;
            else if ("top" === this.parent._position || "bottom" === this.parent._position) this.labelMaxWidth = y(this.options.labelMaxWidth) ? 3 * this.chart.width : this.labelMaxWidth, this.labelMaxHeight = y(this.options.labelWrap) || this.labelWrap ? this.parent.bounds.height : 2 * this.labelFontSize;
            0 < k && r.setLineDash && r.setLineDash(G(this.lineDashType, k));
            l = new la(r, {
                x: 0,
                y: 0,
                padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 4
                },
                backgroundColor: this.labelBackgroundColor,
                borderColor: this.labelBorderColor,
                borderThickness: this.labelBorderThickness,
                cornerRadius: this.labelCornerRadius,
                maxWidth: this.labelMaxWidth,
                maxHeight: this.labelMaxHeight,
                angle: this.labelAngle,
                text: m,
                horizontalAlign: "left",
                fontSize: this.labelFontSize,
                fontFamily: this.labelFontFamily,
                fontWeight: this.labelFontWeight,
                fontColor: this.labelFontColor,
                fontStyle: this.labelFontStyle,
                textBaseline: "middle"
            });
            if (this.snapToDataPoint) {
                var n = 0,
                    h = [];
                if ("xySwapped" === this.chart.plotInfo.axisPlacement) {
                    var d =
                        null;
                    if ("bottom" === this.parent._position || "top" === this.parent._position) n = this.parent.dataSeries[0].axisX.convertPixelToValue({
                        y: f
                    });
                    else if ("left" === this.parent._position || "right" === this.parent._position) n = this.parent.convertPixelToValue({
                        y: f
                    });
                    for (var q = 0; q < this.parent.dataSeries.length; q++)(d = this.parent.dataSeries[q].getDataPointAtX(n, !0)) && 0 <= d.index && (d.dataSeries = this.parent.dataSeries[q], null !== d.dataPoint.y && h.push(d));
                    d = null;
                    if (0 === h.length) return;
                    h.sort(function(a, b) {
                        return a.distance -
                            b.distance
                    });
                    d = Math.abs(a - this.parent.convertValueToPixel(h[0].dataPoint.y));
                    q = 0;
                    if ("rangeBar" === h[0].dataSeries.type || "error" === h[0].dataSeries.type)
                        for (var d = Math.abs(a - this.parent.convertValueToPixel(h[q].dataPoint.y[0])), s = 0, n = 0; n < h.length; n++)
                            if (h[n].dataPoint.y && h[n].dataPoint.y.length)
                                for (m = 0; m < h[n].dataPoint.y.length; m++) s = Math.abs(a - this.parent.convertValueToPixel(h[n].dataPoint.y[m])), s < d && (d = s, q = n);
                            else s = Math.abs(a - this.parent.convertValueToPixel(h[n].dataPoint.y)), s < d && (d = s, q = n);
                    else if ("stackedBar" ===
                        h[0].dataSeries.type)
                        for (var d = Math.abs(a - this.parent.convertValueToPixel(h[0].dataPoint.y)), v = s = 0, n = q = 0; n < h.length; n++)
                            if (h[n].dataPoint.y && h[n].dataPoint.y.length)
                                for (m = 0; m < h[n].dataPoint.y.length; m++) s = Math.abs(a - this.parent.convertValueToPixel(h[n].dataPoint.y[m])), s < d && (d = s, q = n);
                            else v += h[n].dataPoint.y, s = Math.abs(a - this.parent.convertValueToPixel(v)), s < d && (d = s, q = n);
                    else if ("stackedBar100" === h[0].dataSeries.type)
                        for (var d = Math.abs(a - this.parent.convertValueToPixel(h[0].dataPoint.y)), u = v = s = 0,
                                 n = 0; n < h.length; n++)
                            if (h[n].dataPoint.y && h[n].dataPoint.y.length)
                                for (m = 0; m < h[n].dataPoint.y.length; m++) s = Math.abs(a - this.parent.convertValueToPixel(h[n].dataPoint.y[m])), s < d && (d = s, q = n);
                            else v += h[n].dataPoint.y, u = h[n].dataPoint.x.getTime ? h[n].dataPoint.x.getTime() : h[n].dataPoint.x, u = 100 * (v / h[n].dataSeries.plotUnit.dataPointYSums[u]), s = Math.abs(a - this.parent.convertValueToPixel(u)), s < d && (d = s, q = n);
                    else
                        for (d = Math.abs(a - this.parent.convertValueToPixel(h[0].dataPoint.y)), n = q = s = 0; n < h.length; n++)
                            if (h[n].dataPoint.y &&
                                h[n].dataPoint.y.length)
                                for (m = 0; m < h[n].dataPoint.y.length; m++) s = Math.abs(a - this.parent.convertValueToPixel(h[n].dataPoint.y[m])), s < d && (d = s, q = n);
                            else s = Math.abs(a - this.parent.convertValueToPixel(h[n].dataPoint.y)), s < d && (d = s, q = n);
                    m = h[q];
                    if ("bottom" === this.parent._position || "top" === this.parent._position) {
                        b = 0;
                        if ("rangeBar" === this.parent.dataSeries[q].type || "error" === this.parent.dataSeries[q].type) {
                            d = Math.abs(a - this.parent.convertValueToPixel(m.dataPoint.y[0]));
                            for (n = s = 0; n < m.dataPoint.y.length; n++) s = Math.abs(a -
                                this.parent.convertValueToPixel(m.dataPoint.y[n])), s < d && (d = s, b = n);
                            h = 1 === r.lineWidth % 2 ? (this.parent.convertValueToPixel(m.dataPoint.y[b]) << 0) + 0.5 : this.parent.convertValueToPixel(m.dataPoint.y[b]) << 0;
                            l.text = this.labelFormatter ? this.labelFormatter({
                                chart: this.chart,
                                axis: this.parent.options,
                                crosshair: this.options,
                                value: m.dataPoint.y[b]
                            }) : y(this.options.label) ? W(m.dataPoint.y[b], this.valueFormatString, this.chart._cultureInfo) : this.label
                        } else if ("stackedBar" === this.parent.dataSeries[q].type) {
                            d = Math.abs(a -
                                this.parent.convertValueToPixel(h[0].dataPoint.y));
                            v = s = 0;
                            for (n = q; 0 <= n; n--) v += h[n].dataPoint.y, s = Math.abs(a - this.parent.convertValueToPixel(v)), s < d && (d = s, b = n);
                            h = 1 === r.lineWidth % 2 ? (this.parent.convertValueToPixel(v) << 0) + 0.5 : this.parent.convertValueToPixel(v) << 0;
                            l.text = this.labelFormatter ? this.labelFormatter({
                                chart: this.chart,
                                axis: this.parent.options,
                                crosshair: this.options,
                                value: m.dataPoint.y
                            }) : y(this.options.label) ? W(m.dataPoint.y, this.valueFormatString, this.chart._cultureInfo) : this.label
                        } else if ("stackedBar100" ===
                            this.parent.dataSeries[q].type) {
                            d = Math.abs(a - this.parent.convertValueToPixel(h[0].dataPoint.y));
                            u = v = s = 0;
                            for (n = q; 0 <= n; n--) v += h[n].dataPoint.y, u = h[n].dataPoint.x.getTime ? h[n].dataPoint.x.getTime() : h[n].dataPoint.x, u = 100 * (v / h[n].dataSeries.plotUnit.dataPointYSums[u]), s = Math.abs(a - this.parent.convertValueToPixel(u)), s < d && (d = s, b = n);
                            h = 1 === r.lineWidth % 2 ? (this.parent.convertValueToPixel(u) << 0) + 0.5 : this.parent.convertValueToPixel(u) << 0;
                            l.text = this.labelFormatter ? this.labelFormatter({
                                chart: this.chart,
                                axis: this.parent.options,
                                crosshair: this.options,
                                value: u
                            }) : y(this.options.label) ? W(u, this.valueFormatString, this.chart._cultureInfo) : this.label
                        } else h = 1 === r.lineWidth % 2 ? (this.parent.convertValueToPixel(m.dataPoint.y) << 0) + 0.5 : this.parent.convertValueToPixel(m.dataPoint.y) << 0, l.text = this.labelFormatter ? this.labelFormatter({
                            chart: this.chart,
                            axis: this.parent.options,
                            crosshair: this.options,
                            value: m.dataPoint.y
                        }) : y(this.options.label) ? W(m.dataPoint.y, this.valueFormatString, this.chart._cultureInfo) : this.label;
                        b = c = h;
                        e = this.chart.plotArea.y1;
                        g = this.chart.plotArea.y2;
                        this.bounds = {
                            x1: b - k / 2,
                            y1: e,
                            x2: c + k / 2,
                            y2: g
                        };
                        l.x = b - l.measureText().width / 2;
                        l.x + l.width > this.chart.bounds.x2 ? l.x = this.chart.bounds.x2 - l.width : l.x < this.chart.bounds.x1 && (l.x = this.chart.bounds.x1);
                        l.y = this.parent.lineCoordinates.y2 + l.fontSize / 2 + 2
                    } else if ("left" === this.parent._position || "right" === this.parent._position) {
                        e = g = h = 1 === r.lineWidth % 2 ? (this.parent.convertValueToPixel(m.dataPoint.x) << 0) + 0.5 : this.parent.convertValueToPixel(m.dataPoint.x) << 0;
                        b = this.chart.plotArea.x1;
                        c = this.chart.plotArea.x2;
                        this.bounds = {
                            x1: b,
                            y1: e - k / 2,
                            x2: c,
                            y2: g + k / 2
                        };
                        u = !1;
                        if (this.parent.labels)
                            for (h = Math.ceil(this.parent.interval), n = 0; n < this.parent.viewportMaximum; n += h)
                                if (this.parent.labels[n]) u = !0;
                                else {
                                    u = !1;
                                    break
                                }
                        if (u) {
                            if ("axisX" === this.parent.type)
                                for (n = this.parent.convertPixelToValue({
                                    y: f
                                }), d = null, q = 0; q < this.parent.dataSeries.length; q++)(d = this.parent.dataSeries[q].getDataPointAtX(n, !0)) && 0 <= d.index && (l.text = this.labelFormatter ? this.labelFormatter({
                                        chart: this.chart,
                                        axis: this.parent.options,
                                        crosshair: this.options,
                                        value: m.dataPoint.x
                                    }) :
                                    y(this.options.label) ? d.dataPoint.label : this.label)
                        } else "dateTime" === this.parent.valueType ? l.text = this.labelFormatter ? this.labelFormatter({
                            chart: this.chart,
                            axis: this.parent.options,
                            crosshair: this.options,
                            value: m.dataPoint.x
                        }) : y(this.options.label) ? Ba(m.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label : "number" === this.parent.valueType && (l.text = this.labelFormatter ? this.labelFormatter({
                            chart: this.chart,
                            axis: this.parent.options,
                            crosshair: this.options,
                            value: m.dataPoint.x
                        }) : y(this.options.label) ?
                            W(m.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label);
                        l.y = g + l.fontSize / 2 - l.measureText().height / 2 + 2;
                        l.y - l.fontSize / 2 < this.chart.bounds.y1 ? l.y = this.chart.bounds.y1 + l.fontSize / 2 + 2 : l.y + l.measureText().height - l.fontSize / 2 > this.chart.bounds.y2 && (l.y = this.chart.bounds.y2 - l.measureText().height + l.fontSize / 2);
                        "left" === this.parent._position ? l.x = this.parent.lineCoordinates.x2 - l.measureText().width : "right" === this.parent._position && (l.x = this.parent.lineCoordinates.x2)
                    }
                } else if ("bottom" ===
                    this.parent._position || "top" === this.parent._position) {
                    n = this.parent.convertPixelToValue({
                        x: a
                    });
                    for (q = 0; q < this.parent.dataSeries.length; q++)(d = this.parent.dataSeries[q].getDataPointAtX(n, !0)) && 0 <= d.index && (d.dataSeries = this.parent.dataSeries[q], null !== d.dataPoint.y && h.push(d));
                    if (0 === h.length) return;
                    h.sort(function(a, b) {
                        return a.distance - b.distance
                    });
                    m = h[0];
                    b = c = h = 1 === r.lineWidth % 2 ? (this.parent.convertValueToPixel(m.dataPoint.x) << 0) + 0.5 : this.parent.convertValueToPixel(m.dataPoint.x) << 0;
                    e = this.chart.plotArea.y1;
                    g = this.chart.plotArea.y2;
                    this.bounds = {
                        x1: b - k / 2,
                        y1: e,
                        x2: c + k / 2,
                        y2: g
                    };
                    u = !1;
                    if (this.parent.labels)
                        for (h = Math.ceil(this.parent.interval), n = 0; n < this.parent.viewportMaximum; n += h)
                            if (this.parent.labels[n]) u = !0;
                            else {
                                u = !1;
                                break
                            }
                    if (u) {
                        if ("axisX" === this.parent.type)
                            for (n = this.parent.convertPixelToValue({
                                x: a
                            }), d = null, q = 0; q < this.parent.dataSeries.length; q++)(d = this.parent.dataSeries[q].getDataPointAtX(n, !0)) && 0 <= d.index && (l.text = this.labelFormatter ? this.labelFormatter({
                                chart: this.chart,
                                axis: this.parent.options,
                                crosshair: this.options,
                                value: m.dataPoint.x
                            }) : y(this.options.label) ? d.dataPoint.label : this.label)
                    } else "dateTime" === this.parent.valueType ? l.text = this.labelFormatter ? this.labelFormatter({
                        chart: this.chart,
                        axis: this.parent.options,
                        crosshair: this.options,
                        value: m.dataPoint.x
                    }) : y(this.options.label) ? Ba(m.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label : "number" === this.parent.valueType && (l.text = this.labelFormatter ? this.labelFormatter({
                        chart: this.chart,
                        axis: this.parent.options,
                        crosshair: this.options,
                        value: m.dataPoint.x
                    }) : y(this.options.label) ? W(m.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label);
                    l.x = b - l.measureText().width / 2;
                    l.x + l.width > this.chart.bounds.x2 && (l.x = this.chart.bounds.x2 - l.width);
                    l.x < this.chart.bounds.x1 && (l.x = this.chart.bounds.x1);
                    "bottom" === this.parent._position ? l.y = this.parent.lineCoordinates.y2 + l.fontSize / 2 + 2 : "top" === this.parent._position && (l.y = this.parent.lineCoordinates.y1 - l.height + l.fontSize / 2 + 2)
                } else if ("left" === this.parent._position || "right" === this.parent._position) {
                    !y(this.parent.dataSeries) &&
                    0 < this.parent.dataSeries.length && (n = this.parent.dataSeries[0].axisX.convertPixelToValue({
                        x: a
                    }));
                    for (q = 0; q < this.parent.dataSeries.length; q++)(d = this.parent.dataSeries[q].getDataPointAtX(n, !0)) && 0 <= d.index && (d.dataSeries = this.parent.dataSeries[q], null !== d.dataPoint.y && h.push(d));
                    if (0 === h.length) return;
                    h.sort(function(a, b) {
                        return a.distance - b.distance
                    });
                    q = 0;
                    if ("rangeColumn" === h[0].dataSeries.type || "rangeArea" === h[0].dataSeries.type || "error" === h[0].dataSeries.type || "rangeSplineArea" === h[0].dataSeries.type ||
                        "candlestick" === h[0].dataSeries.type || "ohlc" === h[0].dataSeries.type || "boxAndWhisker" === h[0].dataSeries.type)
                        for (d = Math.abs(f - this.parent.convertValueToPixel(h[0].dataPoint.y[0])), n = s = 0; n < h.length; n++)
                            if (h[n].dataPoint.y && h[n].dataPoint.y.length)
                                for (m = 0; m < h[n].dataPoint.y.length; m++) s = Math.abs(f - this.parent.convertValueToPixel(h[n].dataPoint.y[m])), s < d && (d = s, q = n);
                            else s = Math.abs(f - this.parent.convertValueToPixel(h[n].dataPoint.y)), s < d && (d = s, q = n);
                    else if ("stackedColumn" === h[0].dataSeries.type || "stackedArea" ===
                        h[0].dataSeries.type)
                        for (d = Math.abs(f - this.parent.convertValueToPixel(h[0].dataPoint.y)), n = v = s = 0; n < h.length; n++)
                            if (h[n].dataPoint.y && h[n].dataPoint.y.length)
                                for (m = 0; m < h[n].dataPoint.y.length; m++) s = Math.abs(f - this.parent.convertValueToPixel(h[n].dataPoint.y[m])), s < d && (d = s, q = n);
                            else v += h[n].dataPoint.y, s = Math.abs(f - this.parent.convertValueToPixel(v)), s < d && (d = s, q = n);
                    else if ("stackedColumn100" === h[0].dataSeries.type || "stackedArea100" === h[0].dataSeries.type)
                        for (d = Math.abs(f - this.parent.convertValueToPixel(h[0].dataPoint.y)),
                                 n = u = v = s = 0; n < h.length; n++)
                            if (h[n].dataPoint.y && h[n].dataPoint.y.length)
                                for (m = 0; m < h[n].dataPoint.y.length; m++) s = Math.abs(f - this.parent.convertValueToPixel(h[n].dataPoint.y[m])), s < d && (d = s, q = n);
                            else v += h[n].dataPoint.y, u = h[n].dataPoint.x.getTime ? h[n].dataPoint.x.getTime() : h[n].dataPoint.x, u = 100 * (v / h[n].dataSeries.plotUnit.dataPointYSums[u]), s = Math.abs(f - this.parent.convertValueToPixel(u)), s < d && (d = s, q = n);
                    else
                        for (d = Math.abs(f - this.parent.convertValueToPixel(h[0].dataPoint.y)), n = s = 0; n < h.length; n++)
                            if (h[n].dataPoint.y &&
                                h[n].dataPoint.y.length)
                                for (m = 0; m < h[n].dataPoint.y.length; m++) s = Math.abs(f - this.parent.convertValueToPixel(h[n].dataPoint.y[m])), s < d && (d = s, q = n);
                            else s = Math.abs(f - this.parent.convertValueToPixel(h[n].dataPoint.y)), s < d && (d = s, q = n);
                    m = h[q];
                    b = 0;
                    if ("rangeColumn" === this.parent.dataSeries[q].type || "rangeArea" === this.parent.dataSeries[q].type || "error" === this.parent.dataSeries[q].type || "rangeSplineArea" === this.parent.dataSeries[q].type || "candlestick" === this.parent.dataSeries[q].type || "ohlc" === this.parent.dataSeries[q].type ||
                        "boxAndWhisker" === this.parent.dataSeries[q].type) {
                        d = Math.abs(f - this.parent.convertValueToPixel(m.dataPoint.y[0]));
                        for (n = s = 0; n < m.dataPoint.y.length; n++) s = Math.abs(f - this.parent.convertValueToPixel(m.dataPoint.y[n])), s < d && (d = s, b = n);
                        h = 1 === r.lineWidth % 2 ? (this.parent.convertValueToPixel(m.dataPoint.y[b]) << 0) + 0.5 : this.parent.convertValueToPixel(m.dataPoint.y[b]) << 0;
                        l.text = this.labelFormatter ? this.labelFormatter({
                            chart: this.chart,
                            axis: this.parent.options,
                            crosshair: this.options,
                            value: m.dataPoint.y[b]
                        }) : y(this.options.label) ?
                            W(m.dataPoint.y[b], this.valueFormatString, this.chart._cultureInfo) : this.label
                    } else if ("stackedColumn" === this.parent.dataSeries[q].type || "stackedArea" === this.parent.dataSeries[q].type) {
                        d = Math.abs(f - this.parent.convertValueToPixel(h[0].dataPoint.y));
                        v = s = 0;
                        for (n = q; 0 <= n; n--) v += h[n].dataPoint.y, s = Math.abs(f - this.parent.convertValueToPixel(v)), s < d && (d = s, b = n);
                        h = 1 === r.lineWidth % 2 ? (this.parent.convertValueToPixel(v) << 0) + 0.5 : this.parent.convertValueToPixel(v) << 0;
                        l.text = this.labelFormatter ? this.labelFormatter({
                            chart: this.chart,
                            axis: this.parent.options,
                            crosshair: this.options,
                            value: m.dataPoint.y
                        }) : y(this.options.label) ? W(m.dataPoint.y, this.valueFormatString, this.chart._cultureInfo) : this.label
                    } else if ("stackedColumn100" === this.parent.dataSeries[q].type || "stackedArea100" === this.parent.dataSeries[q].type) {
                        d = Math.abs(f - this.parent.convertValueToPixel(h[0].dataPoint.y));
                        v = s = 0;
                        for (n = q; 0 <= n; n--) v += h[n].dataPoint.y, u = h[n].dataPoint.x.getTime ? h[n].dataPoint.x.getTime() : h[n].dataPoint.x, u = 100 * (v / h[n].dataSeries.plotUnit.dataPointYSums[u]),
                            s = Math.abs(f - this.parent.convertValueToPixel(u)), s < d && (d = s, b = n);
                        h = 1 === r.lineWidth % 2 ? (this.parent.convertValueToPixel(u) << 0) + 0.5 : this.parent.convertValueToPixel(u) << 0;
                        l.text = this.labelFormatter ? this.labelFormatter({
                            chart: this.chart,
                            axis: this.parent.options,
                            crosshair: this.options,
                            value: u
                        }) : y(this.options.label) ? W(u, this.valueFormatString, this.chart._cultureInfo) : this.label
                    } else "waterfall" === this.parent.dataSeries[q].type ? (h = 1 === r.lineWidth % 2 ? (this.parent.convertValueToPixel(m.dataSeries.dataPointEOs[m.index].cumulativeSum) <<
                        0) + 0.5 : this.parent.convertValueToPixel(m.dataSeries.dataPointEOs[m.index].cumulativeSum) << 0, l.text = this.labelFormatter ? this.labelFormatter({
                        chart: this.chart,
                        axis: this.parent.options,
                        crosshair: this.options,
                        value: m.dataSeries.dataPointEOs[m.index].cumulativeSum
                    }) : y(this.options.label) ? W(m.dataSeries.dataPointEOs[m.index].cumulativeSum, this.valueFormatString, this.chart._cultureInfo) : this.label) : (h = 1 === r.lineWidth % 2 ? (this.parent.convertValueToPixel(m.dataPoint.y) << 0) + 0.5 : this.parent.convertValueToPixel(m.dataPoint.y) <<
                        0, l.text = this.labelFormatter ? this.labelFormatter({
                        chart: this.chart,
                        axis: this.parent.options,
                        crosshair: this.options,
                        value: m.dataPoint.y
                    }) : y(this.options.label) ? W(m.dataPoint.y, this.valueFormatString, this.chart._cultureInfo) : this.label);
                    e = g = h;
                    b = this.chart.plotArea.x1;
                    c = this.chart.plotArea.x2;
                    this.bounds = {
                        x1: b,
                        y1: e - k / 2,
                        x2: c,
                        y2: g + k / 2
                    };
                    l.y = g + l.fontSize / 2 - l.measureText().height / 2 + 2;
                    l.y - l.fontSize / 2 < this.chart.bounds.y1 ? l.y = this.chart.bounds.y1 + l.fontSize / 2 + 2 : l.y + l.measureText().height - l.fontSize / 2 > this.chart.bounds.y2 &&
                        (l.y = this.chart.bounds.y2 - l.measureText().height + l.fontSize / 2);
                    "left" === this.parent._position ? l.x = this.parent.lineCoordinates.x2 - l.measureText().width : "right" === this.parent._position && (l.x = this.parent.lineCoordinates.x2)
                }
                h = null;
                ("bottom" === this.parent._position || "top" === this.parent._position) && (b >= this.parent.convertValueToPixel(this.parent.viewportMinimum) && c <= this.parent.convertValueToPixel(this.parent.viewportMaximum)) && (0 < k && (r.moveTo(b, e), r.lineTo(c, g), r.stroke()), r.restore(), !y(l.text) && ("number" ===
                    typeof l.text.valueOf() || 0 < l.text.length) && l.render(!0));
                ("left" === this.parent._position || "right" === this.parent._position) && (g >= this.parent.convertValueToPixel(this.parent.viewportMaximum) && e <= this.parent.convertValueToPixel(this.parent.viewportMinimum)) && (0 < k && (r.moveTo(b, e), r.lineTo(c, g), r.stroke()), r.restore(), !y(l.text) && ("number" === typeof l.text.valueOf() || 0 < l.text.length) && l.render(!0))
            } else {
                if ("bottom" === this.parent._position || "top" === this.parent._position) b = c = h = 1 === r.lineWidth % 2 ? (a << 0) + 0.5 :
                    a << 0, e = this.chart.plotArea.y1, g = this.chart.plotArea.y2, this.bounds = {
                    x1: b - k / 2,
                    y1: e,
                    x2: c + k / 2,
                    y2: g
                };
                else if ("left" === this.parent._position || "right" === this.parent._position) e = g = h = 1 === r.lineWidth % 2 ? (f << 0) + 0.5 : f << 0, b = this.chart.plotArea.x1, c = this.chart.plotArea.x2, this.bounds = {
                    x1: b,
                    y1: e - k / 2,
                    x2: c,
                    y2: g + k / 2
                };
                if ("xySwapped" === this.chart.plotInfo.axisPlacement)
                    if ("left" === this.parent._position || "right" === this.parent._position) {
                        u = !1;
                        if (this.parent.labels)
                            for (h = Math.ceil(this.parent.interval), n = 0; n < this.parent.viewportMaximum; n +=
                                h)
                                if (this.parent.labels[n]) u = !0;
                                else {
                                    u = !1;
                                    break
                                }
                        if (u) {
                            if ("axisX" === this.parent.type)
                                for (n = this.parent.convertPixelToValue({
                                    y: f
                                }), d = null, q = 0; q < this.parent.dataSeries.length; q++)(d = this.parent.dataSeries[q].getDataPointAtX(n, !0)) && 0 <= d.index && (l.text = this.labelFormatter ? this.labelFormatter({
                                    chart: this.chart,
                                    axis: this.parent.options,
                                    crosshair: this.options,
                                    value: this.parent.convertPixelToValue(a)
                                }) : y(this.options.label) ? d.dataPoint.label : this.label)
                        } else "dateTime" === this.parent.valueType ? l.text = this.labelFormatter ?
                            this.labelFormatter({
                                chart: this.chart,
                                axis: this.parent.options,
                                crosshair: this.options,
                                value: this.parent.convertPixelToValue(f)
                            }) : y(this.options.label) ? Ba(this.parent.convertPixelToValue(f), this.valueFormatString, this.chart._cultureInfo) : this.label : "number" === this.parent.valueType && (l.text = this.labelFormatter ? this.labelFormatter({
                            chart: this.chart,
                            axis: this.parent.options,
                            crosshair: this.options,
                            value: this.parent.convertPixelToValue(f)
                        }) : y(this.options.label) ? W(this.parent.convertPixelToValue(f), this.valueFormatString,
                            this.chart._cultureInfo) : this.label);
                        l.y = f + l.fontSize / 2 - l.measureText().height / 2 + 2;
                        l.y - l.fontSize / 2 < this.chart.bounds.y1 ? l.y = this.chart.bounds.y1 + l.fontSize / 2 + 2 : l.y + l.measureText().height - l.fontSize / 2 > this.chart.bounds.y2 && (l.y = this.chart.bounds.y2 - l.measureText().height + l.fontSize / 2);
                        "left" === this.parent._position ? l.x = this.parent.lineCoordinates.x1 - l.measureText().width : "right" === this.parent._position && (l.x = this.parent.lineCoordinates.x2)
                    } else {
                        if ("bottom" === this.parent._position || "top" === this.parent._position) l.text =
                            this.labelFormatter ? this.labelFormatter({
                                chart: this.chart,
                                axis: this.parent.options,
                                crosshair: this.options,
                                value: this.parent.convertPixelToValue(a)
                            }) : y(this.options.label) ? W(this.parent.convertPixelToValue(a), this.valueFormatString, this.chart._cultureInfo) : this.label, l.x = b - l.measureText().width / 2, l.x + l.width > this.chart.bounds.x2 && (l.x = this.chart.bounds.x2 - l.width), l.x < this.chart.bounds.x1 && (l.x = this.chart.bounds.x1), "bottom" === this.parent._position && (l.y = this.parent.lineCoordinates.y2 + l.fontSize / 2 +
                            2), "top" === this.parent._position && (l.y = this.parent.lineCoordinates.y1 - l.height + l.fontSize / 2 + 2)
                    } else if ("bottom" === this.parent._position || "top" === this.parent._position) {
                    u = !1;
                    m = "";
                    if (this.parent.labels)
                        for (h = Math.ceil(this.parent.interval), n = 0; n < this.parent.viewportMaximum; n += h)
                            if (this.parent.labels[n]) u = !0;
                            else {
                                u = !1;
                                break
                            }
                    if (u) {
                        if ("axisX" === this.parent.type)
                            for (n = this.parent.convertPixelToValue({
                                x: a
                            }), d = null, q = 0; q < this.parent.dataSeries.length; q++)(d = this.parent.dataSeries[q].getDataPointAtX(n, !0)) &&
                            0 <= d.index && (l.text = this.labelFormatter ? this.labelFormatter({
                                chart: this.chart,
                                axis: this.parent.options,
                                crosshair: this.options,
                                value: this.parent.convertPixelToValue(a)
                            }) : y(this.options.label) ? d.dataPoint.label : this.label)
                    } else "dateTime" === this.parent.valueType ? l.text = this.labelFormatter ? this.labelFormatter({
                        chart: this.chart,
                        axis: this.parent.options,
                        crosshair: this.options,
                        value: this.parent.convertPixelToValue(a)
                    }) : y(this.options.label) ? Ba(this.parent.convertPixelToValue(a), this.valueFormatString, this.chart._cultureInfo) :
                        this.label : "number" === this.parent.valueType && (l.text = this.labelFormatter ? this.labelFormatter({
                        chart: this.chart,
                        axis: this.parent.options,
                        crosshair: this.options,
                        value: 0 < this.parent.dataSeries.length ? this.parent.convertPixelToValue(a) : ""
                    }) : y(this.options.label) ? W(this.parent.convertPixelToValue(a), this.valueFormatString, this.chart._cultureInfo) : this.label);
                    l.x = b - l.measureText().width / 2;
                    l.x + l.width > this.chart.bounds.x2 && (l.x = this.chart.bounds.x2 - l.width);
                    l.x < this.chart.bounds.x1 && (l.x = this.chart.bounds.x1);
                    "bottom" === this.parent._position ? l.y = this.parent.lineCoordinates.y2 + l.fontSize / 2 + 2 : "top" === this.parent._position && (l.y = this.parent.lineCoordinates.y1 - l.height + l.fontSize / 2 + 2)
                } else if ("left" === this.parent._position || "right" === this.parent._position) l.text = this.labelFormatter ? this.labelFormatter({
                    chart: this.chart,
                    axis: this.parent.options,
                    crosshair: this.options,
                    value: this.parent.convertPixelToValue(f)
                }) : y(this.options.label) ? W(this.parent.convertPixelToValue(f), this.valueFormatString, this.chart._cultureInfo) :
                    this.label, l.y = f + l.fontSize / 2 - l.measureText().height / 2 + 2, l.y - l.fontSize / 2 < this.chart.bounds.y1 ? l.y = this.chart.bounds.y1 + l.fontSize / 2 + 2 : l.y + l.measureText().height - l.fontSize / 2 > this.chart.bounds.y2 && (l.y = this.chart.bounds.y2 - l.measureText().height + l.fontSize / 2), "left" === this.parent._position ? l.x = this.parent.lineCoordinates.x2 - l.measureText().width : "right" === this.parent._position && (l.x = this.parent.lineCoordinates.x2);
                0 < k && (r.moveTo(b, e), r.lineTo(c, g), r.stroke());
                r.restore();
                !y(l.text) && ("number" === typeof l.text.valueOf() ||
                    0 < l.text.length) && l.render(!0)
            }
            r.globalAlpha = p
        };
        pa(Y, X);
        Y.prototype._initialize = function() {
            if (this.enabled) {
                this.container = document.createElement("div");
                this.container.setAttribute("class", "canvasjs-chart-tooltip");
                this.container.style.position = "absolute";
                this.container.style.height = "auto";
                this.container.style.boxShadow = "1px 1px 2px 2px rgba(0,0,0,0.1)";
                this.container.style.zIndex = "1000";
                this.container.style.pointerEvents = "none";
                this.container.style.display = "none";
                var a;
                a = '<div style=" width: auto;height: auto;min-width: 50px;';
                a += "line-height: auto;";
                a += "margin: 0px 0px 0px 0px;";
                a += "padding: 5px;";
                a += "font-family: Calibri, Arial, Georgia, serif;";
                a += "font-weight: normal;";
                a += "font-style: " + (v ? "italic;" : "normal;");
                a += "font-size: 14px;";
                a += "color: #000000;";
                a += "text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);";
                a += "text-align: left;";
                a += "border: 2px solid gray;";
                a += v ? "background: rgba(255,255,255,.9);" : "background: rgb(255,255,255);";
                a += "text-indent: 0px;";
                a += "white-space: nowrap;";
                a += "border-radius: 5px;";
                a += "-moz-user-select:none;";
                a += "-khtml-user-select: none;";
                a += "-webkit-user-select: none;";
                a += "-ms-user-select: none;";
                a += "user-select: none;";
                v || (a += "filter: alpha(opacity = 90);", a += "filter: progid:DXImageTransform.Microsoft.Shadow(Strength=3, Direction=135, Color='#666666');");
                a += '} "> Sample Tooltip</div>';
                this.container.innerHTML = a;
                this.contentDiv = this.container.firstChild;
                this.container.style.borderRadius = this.contentDiv.style.borderRadius;
                this.chart._canvasJSContainer.appendChild(this.container)
            }
        };
        Y.prototype.mouseMoveHandler =
            function(a, f) {
                this._lastUpdated && 4 > (new Date).getTime() - this._lastUpdated || (this._lastUpdated = (new Date).getTime(), this.chart.resetOverlayedCanvas(), this._updateToolTip(a, f))
            };
        Y.prototype._updateToolTip = function(a, f, b) {
            b = "undefined" === typeof b ? !0 : b;
            this.container || this._initialize();
            this.enabled || this.hide();
            if (!this.chart.disableToolTip) {
                if ("undefined" === typeof a || "undefined" === typeof f) {
                    if (isNaN(this._prevX) || isNaN(this._prevY)) return;
                    a = this._prevX;
                    f = this._prevY
                } else this._prevX = a, this._prevY = f;
                var c = null,
                    e = null,
                    g = [],
                    h = 0;
                if (this.shared && this.enabled && "none" !== this.chart.plotInfo.axisPlacement) {
                    if ("xySwapped" === this.chart.plotInfo.axisPlacement) {
                        var l = [];
                        if (this.chart.axisX)
                            for (var m = 0; m < this.chart.axisX.length; m++) {
                                for (var h = this.chart.axisX[m].convertPixelToValue({
                                    y: f
                                }), k = null, c = 0; c < this.chart.axisX[m].dataSeries.length; c++)(k = this.chart.axisX[m].dataSeries[c].getDataPointAtX(h, b)) && 0 <= k.index && (k.dataSeries = this.chart.axisX[m].dataSeries[c], null !== k.dataPoint.y && l.push(k));
                                k = null
                            }
                        if (this.chart.axisX2)
                            for (m =
                                     0; m < this.chart.axisX2.length; m++) {
                                h = this.chart.axisX2[m].convertPixelToValue({
                                    y: f
                                });
                                k = null;
                                for (c = 0; c < this.chart.axisX2[m].dataSeries.length; c++)(k = this.chart.axisX2[m].dataSeries[c].getDataPointAtX(h, b)) && 0 <= k.index && (k.dataSeries = this.chart.axisX2[m].dataSeries[c], null !== k.dataPoint.y && l.push(k));
                                k = null
                            }
                    } else {
                        l = [];
                        if (this.chart.axisX)
                            for (m = 0; m < this.chart.axisX.length; m++)
                                for (h = this.chart.axisX[m].convertPixelToValue({
                                    x: a
                                }), k = null, c = 0; c < this.chart.axisX[m].dataSeries.length; c++)(k = this.chart.axisX[m].dataSeries[c].getDataPointAtX(h,
                                    b)) && 0 <= k.index && (k.dataSeries = this.chart.axisX[m].dataSeries[c], null !== k.dataPoint.y && l.push(k));
                        if (this.chart.axisX2)
                            for (m = 0; m < this.chart.axisX2.length; m++)
                                for (h = this.chart.axisX2[m].convertPixelToValue({
                                    x: a
                                }), k = null, c = 0; c < this.chart.axisX2[m].dataSeries.length; c++)(k = this.chart.axisX2[m].dataSeries[c].getDataPointAtX(h, b)) && 0 <= k.index && (k.dataSeries = this.chart.axisX2[m].dataSeries[c], null !== k.dataPoint.y && l.push(k))
                    }
                    if (0 === l.length) return;
                    l.sort(function(a, b) {
                        return a.distance - b.distance
                    });
                    b = l[0];
                    for (c = 0; c < l.length; c++) l[c].dataPoint.x.valueOf() === b.dataPoint.x.valueOf() && g.push(l[c]);
                    l = null
                } else {
                    if (k = this.chart.getDataPointAtXY(a, f, b)) this.currentDataPointIndex = k.dataPointIndex, this.currentSeriesIndex = k.dataSeries.index;
                    else if (v)
                        if (k = Wa(a, f, this.chart._eventManager.ghostCtx), 0 < k && "undefined" !== typeof this.chart._eventManager.objectMap[k]) {
                            k = this.chart._eventManager.objectMap[k];
                            if ("legendItem" === k.objectType) return;
                            this.currentSeriesIndex = k.dataSeriesIndex;
                            this.currentDataPointIndex = 0 <=
                            k.dataPointIndex ? k.dataPointIndex : -1
                        } else this.currentDataPointIndex = -1;
                    else this.currentDataPointIndex = -1;
                    if (0 <= this.currentSeriesIndex) {
                        e = this.chart.data[this.currentSeriesIndex];
                        k = {};
                        if (0 <= this.currentDataPointIndex) c = e.dataPoints[this.currentDataPointIndex], k.dataSeries = e, k.dataPoint = c, k.index = this.currentDataPointIndex, k.distance = Math.abs(c.x - h), "waterfall" === e.type && (k.cumulativeSumYStartValue = e.dataPointEOs[this.currentDataPointIndex].cumulativeSumYStartValue, k.cumulativeSum = e.dataPointEOs[this.currentDataPointIndex].cumulativeSum);
                        else {
                            if (!this.enabled || "line" !== e.type && "stepLine" !== e.type && "spline" !== e.type && "area" !== e.type && "stepArea" !== e.type && "splineArea" !== e.type && "stackedArea" !== e.type && "stackedArea100" !== e.type && "rangeArea" !== e.type && "rangeSplineArea" !== e.type && "candlestick" !== e.type && "ohlc" !== e.type && "boxAndWhisker" !== e.type) return;
                            h = e.axisX.convertPixelToValue({
                                x: a
                            });
                            k = e.getDataPointAtX(h, b);
                            k.dataSeries = e;
                            this.currentDataPointIndex = k.index;
                            c = k.dataPoint
                        }
                        if (!y(k.dataPoint.y))
                            if (k.dataSeries.axisY)
                                if (0 < k.dataPoint.y.length) {
                                    for (c =
                                             b = 0; c < k.dataPoint.y.length; c++) k.dataPoint.y[c] < k.dataSeries.axisY.viewportMinimum ? b-- : k.dataPoint.y[c] > k.dataSeries.axisY.viewportMaximum && b++;
                                    b < k.dataPoint.y.length && b > -k.dataPoint.y.length && g.push(k)
                                } else "column" === e.type || "bar" === e.type ? 0 > k.dataPoint.y ? 0 > k.dataSeries.axisY.viewportMinimum && k.dataSeries.axisY.viewportMaximum >= k.dataPoint.y && g.push(k) : k.dataSeries.axisY.viewportMinimum <= k.dataPoint.y && 0 <= k.dataSeries.axisY.viewportMaximum && g.push(k) : "bubble" === e.type ? (b = this.chart._eventManager.objectMap[e.dataPointIds[k.index]].size /
                                    2, k.dataPoint.y >= k.dataSeries.axisY.viewportMinimum - b && k.dataPoint.y <= k.dataSeries.axisY.viewportMaximum + b && g.push(k)) : "waterfall" === e.type ? (b = 0, k.cumulativeSumYStartValue < k.dataSeries.axisY.viewportMinimum ? b-- : k.cumulativeSumYStartValue > k.dataSeries.axisY.viewportMaximum && b++, k.cumulativeSum < k.dataSeries.axisY.viewportMinimum ? b-- : k.cumulativeSum > k.dataSeries.axisY.viewportMaximum && b++, 2 > b && -2 < b && g.push(k)) : (0 <= k.dataSeries.type.indexOf("100") || "stackedColumn" === e.type || "stackedBar" === e.type || k.dataPoint.y >=
                                    k.dataSeries.axisY.viewportMinimum && k.dataPoint.y <= k.dataSeries.axisY.viewportMaximum) && g.push(k);
                            else g.push(k)
                    }
                }
                if (0 < g.length && (this.highlightObjects(g), this.enabled))
                    if (b = "", b = this.getToolTipInnerHTML({
                            entries: g
                        }), null !== b) {
                        this.contentDiv.innerHTML = b;
                        b = !1;
                        "none" === this.container.style.display && (b = !0, this.container.style.display = "block");
                        try {
                            this.contentDiv.style.background = this.backgroundColor ? this.backgroundColor : v ? "rgba(255,255,255,.9)" : "rgb(255,255,255)", this.borderColor = "waterfall" === g[0].dataSeries.type ?
                                this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : g[0].dataPoint.color ? g[0].dataPoint.color : -1 < g[0].dataPoint.y ? g[0].dataSeries.risingColor : g[0].dataSeries.fallingColor : "error" === g[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : g[0].dataSeries.color ? g[0].dataSeries.color :
                                    g[0].dataSeries._colorSet[e.index % g[0].dataSeries._colorSet.length] : this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : g[0].dataPoint.color ? g[0].dataPoint.color : g[0].dataSeries.color ? g[0].dataSeries.color : g[0].dataSeries._colorSet[g[0].index % g[0].dataSeries._colorSet.length], this.contentDiv.style.borderWidth = this.borderThickness || 0 === this.borderThickness ? this.borderThickness + "px" : "2px", this.contentDiv.style.borderRadius =
                                this.cornerRadius || 0 === this.cornerRadius ? this.cornerRadius + "px" : "5px", this.container.style.borderRadius = this.contentDiv.style.borderRadius, this.contentDiv.style.fontSize = this.fontSize || 0 === this.fontSize ? this.fontSize + "px" : "14px", this.contentDiv.style.color = this.fontColor ? this.fontColor : "#000000", this.contentDiv.style.fontFamily = this.fontFamily ? this.fontFamily : "Calibri, Arial, Georgia, serif;", this.contentDiv.style.fontWeight = this.fontWeight ? this.fontWeight : "normal", this.contentDiv.style.fontStyle =
                                this.fontStyle ? this.fontStyle : v ? "italic" : "normal"
                        } catch (q) {}
                        "pie" === g[0].dataSeries.type || "doughnut" === g[0].dataSeries.type || "funnel" === g[0].dataSeries.type || "pyramid" === g[0].dataSeries.type || "bar" === g[0].dataSeries.type || "rangeBar" === g[0].dataSeries.type || "stackedBar" === g[0].dataSeries.type || "stackedBar100" === g[0].dataSeries.type ? a = a - 10 - this.container.clientWidth : (a = g[0].dataSeries.axisX.convertValueToPixel(g[0].dataPoint.x) - this.container.clientWidth << 0, a -= 10);
                        0 > a && (a += this.container.clientWidth +
                            20);
                        a + this.container.clientWidth > Math.max(this.chart.container.clientWidth, this.chart.width) && (a = Math.max(0, Math.max(this.chart.container.clientWidth, this.chart.width) - this.container.clientWidth));
                        f = 1 !== g.length || this.shared || "line" !== g[0].dataSeries.type && "stepLine" !== g[0].dataSeries.type && "spline" !== g[0].dataSeries.type && "area" !== g[0].dataSeries.type && "stepArea" !== g[0].dataSeries.type && "splineArea" !== g[0].dataSeries.type ? "bar" === g[0].dataSeries.type || "rangeBar" === g[0].dataSeries.type || "stackedBar" ===
                        g[0].dataSeries.type || "stackedBar100" === g[0].dataSeries.type ? g[0].dataSeries.axisX.convertValueToPixel(g[0].dataPoint.x) : f : g[0].dataSeries.axisY.convertValueToPixel(g[0].dataPoint.y);
                        f = -f + 10;
                        0 < f + this.container.clientHeight + 5 && (f -= f + this.container.clientHeight + 5 - 0);
                        this.fixMozTransitionDelay(a, f);
                        !this.animationEnabled || b ? this.disableAnimation() : (this.enableAnimation(), this.container.style.MozTransition = this.mozContainerTransition);
                        this.container.style.left = a + "px";
                        this.container.style.bottom = f + "px"
                    } else this.hide(!1)
            }
        };
        Y.prototype.highlightObjects = function(a) {
            var f = this.chart.overlaidCanvasCtx;
            this.chart.resetOverlayedCanvas();
            f.clearRect(0, 0, this.chart.width, this.chart.height);
            f.save();
            var b = this.chart.plotArea,
                c = 0;
            f.beginPath();
            f.rect(b.x1, b.y1, b.x2 - b.x1, b.y2 - b.y1);
            f.clip();
            for (b = 0; b < a.length; b++) {
                var e = a[b];
                if ((e = this.chart._eventManager.objectMap[e.dataSeries.dataPointIds[e.index]]) && e.objectType && "dataPoint" === e.objectType) {
                    var c = this.chart.data[e.dataSeriesIndex],
                        g = c.dataPoints[e.dataPointIndex],
                        h = e.dataPointIndex;
                    !1 === g.highlightEnabled || !0 !== c.highlightEnabled && !0 !== g.highlightEnabled || ("line" === c.type || "stepLine" === c.type || "spline" === c.type || "scatter" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" === c.type || "stackedArea" === c.type || "stackedArea100" === c.type || "rangeArea" === c.type || "rangeSplineArea" === c.type ? (g = c.getMarkerProperties(h, e.x1, e.y1, this.chart.overlaidCanvasCtx), g.size = Math.max(1.5 * g.size << 0, 10), g.borderColor = g.borderColor || "#FFFFFF", g.borderThickness = g.borderThickness || Math.ceil(0.1 *
                        g.size), ja.drawMarkers([g]), "undefined" !== typeof e.y2 && (g = c.getMarkerProperties(h, e.x1, e.y2, this.chart.overlaidCanvasCtx), g.size = Math.max(1.5 * g.size << 0, 10), g.borderColor = g.borderColor || "#FFFFFF", g.borderThickness = g.borderThickness || Math.ceil(0.1 * g.size), ja.drawMarkers([g]))) : "bubble" === c.type ? (g = c.getMarkerProperties(h, e.x1, e.y1, this.chart.overlaidCanvasCtx), g.size = e.size, g.color = "white", g.borderColor = "white", f.globalAlpha = 0.3, ja.drawMarkers([g]), f.globalAlpha = 1) : "column" === c.type || "stackedColumn" ===
                    c.type || "stackedColumn100" === c.type || "bar" === c.type || "rangeBar" === c.type || "stackedBar" === c.type || "stackedBar100" === c.type || "rangeColumn" === c.type || "waterfall" === c.type ? V(f, e.x1, e.y1, e.x2, e.y2, "white", 0, null, !1, !1, !1, !1, 0.3) : "pie" === c.type || "doughnut" === c.type ? ra(f, e.center, e.radius, "white", c.type, e.startAngle, e.endAngle, 0.3, e.percentInnerRadius) : "funnel" === c.type || "pyramid" === c.type ? sa(f, e.funnelSection, 0.3, "white") : "candlestick" === c.type ? (f.globalAlpha = 1, f.strokeStyle = e.color, f.lineWidth = 2 * e.borderThickness,
                        c = 0 === f.lineWidth % 2 ? 0 : 0.5, f.beginPath(), f.moveTo(e.x3 - c, Math.min(e.y2, e.y3)), f.lineTo(e.x3 - c, Math.min(e.y1, e.y4)), f.stroke(), f.beginPath(), f.moveTo(e.x3 - c, Math.max(e.y1, e.y4)), f.lineTo(e.x3 - c, Math.max(e.y2, e.y3)), f.stroke(), V(f, e.x1, Math.min(e.y1, e.y4), e.x2, Math.max(e.y1, e.y4), "transparent", 2 * e.borderThickness, e.color, !1, !1, !1, !1), f.globalAlpha = 1) : "ohlc" === c.type ? (f.globalAlpha = 1, f.strokeStyle = e.color, f.lineWidth = 2 * e.borderThickness, c = 0 === f.lineWidth % 2 ? 0 : 0.5, f.beginPath(), f.moveTo(e.x3 - c, e.y2), f.lineTo(e.x3 -
                        c, e.y3), f.stroke(), f.beginPath(), f.moveTo(e.x3, e.y1), f.lineTo(e.x1, e.y1), f.stroke(), f.beginPath(), f.moveTo(e.x3, e.y4), f.lineTo(e.x2, e.y4), f.stroke(), f.globalAlpha = 1) : "boxAndWhisker" === c.type ? (f.save(), f.globalAlpha = 1, f.strokeStyle = e.stemColor, f.lineWidth = 2 * e.stemThickness, 0 < e.stemThickness && (f.beginPath(), f.moveTo(e.x3, e.y2 + e.borderThickness / 2), f.lineTo(e.x3, e.y1 + e.whiskerThickness / 2), f.stroke(), f.beginPath(), f.moveTo(e.x3, e.y4 - e.whiskerThickness / 2), f.lineTo(e.x3, e.y3 - e.borderThickness / 2), f.stroke()),
                        f.beginPath(), V(f, e.x1 - e.borderThickness / 2, Math.max(e.y2 + e.borderThickness / 2, e.y3 + e.borderThickness / 2), e.x2 + e.borderThickness / 2, Math.min(e.y2 - e.borderThickness / 2, e.y3 - e.borderThickness / 2), "transparent", e.borderThickness, e.color, !1, !1, !1, !1), f.globalAlpha = 1, f.strokeStyle = e.whiskerColor, f.lineWidth = 2 * e.whiskerThickness, 0 < e.whiskerThickness && (f.beginPath(), f.moveTo(Math.floor(e.x3 - e.whiskerLength / 2), e.y4), f.lineTo(Math.ceil(e.x3 + e.whiskerLength / 2), e.y4), f.stroke(), f.beginPath(), f.moveTo(Math.floor(e.x3 -
                        e.whiskerLength / 2), e.y1), f.lineTo(Math.ceil(e.x3 + e.whiskerLength / 2), e.y1), f.stroke()), f.globalAlpha = 1, f.strokeStyle = e.lineColor, f.lineWidth = 2 * e.lineThickness, 0 < e.lineThickness && (f.beginPath(), f.moveTo(e.x1, e.y5), f.lineTo(e.x2, e.y5), f.stroke()), f.restore(), f.globalAlpha = 1) : "error" === c.type && z(f, e.x1, e.y1, e.x2, e.y2, "white", e.whiskerProperties, e.stemProperties, e.isXYSwapped, 0.3))
                }
            }
            f.restore();
            f.globalAlpha = 1;
            f.beginPath()
        };
        Y.prototype.getToolTipInnerHTML = function(a) {
            a = a.entries;
            for (var f = null, b = null,
                     c = null, e = 0, g = "", h = !0, l = 0; l < a.length; l++)
                if (a[l].dataSeries.toolTipContent || a[l].dataPoint.toolTipContent) {
                    h = !1;
                    break
                }
            if (h && (this.content && "function" === typeof this.content || this.contentFormatter)) a = {
                chart: this.chart,
                toolTip: this.options,
                entries: a
            }, f = this.contentFormatter ? this.contentFormatter(a) : this.content(a);
            else if (this.shared && "none" !== this.chart.plotInfo.axisPlacement) {
                for (var m = null, k = "", l = 0; l < a.length; l++) b = a[l].dataSeries, c = a[l].dataPoint, e = a[l].index, g = "", 0 === l && (h && !this.content) && (this.chart.axisX &&
                0 < this.chart.axisX.length ? k += "undefined" !== typeof this.chart.axisX[0].labels[c.x] ? this.chart.axisX[0].labels[c.x] : "{x}" : this.chart.axisX2 && 0 < this.chart.axisX2.length && (k += "undefined" !== typeof this.chart.axisX2[0].labels[c.x] ? this.chart.axisX2[0].labels[c.x] : "{x}"), k += "</br>", k = this.chart.replaceKeywordsWithValue(k, c, b, e)), null === c.toolTipContent || "undefined" === typeof c.toolTipContent && null === b.options.toolTipContent || ("line" === b.type || "stepLine" === b.type || "spline" === b.type || "area" === b.type || "stepArea" ===
                b.type || "splineArea" === b.type || "column" === b.type || "bar" === b.type || "scatter" === b.type || "stackedColumn" === b.type || "stackedColumn100" === b.type || "stackedBar" === b.type || "stackedBar100" === b.type || "stackedArea" === b.type || "stackedArea100" === b.type || "waterfall" === b.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (g += m != b.axisXIndex ? b.axisX.title ? b.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), g += c.toolTipContent ? c.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ?
                    this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>{name}:</span>&nbsp;&nbsp;{y}", m = b.axisXIndex) : "bubble" === b.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (g += m != b.axisXIndex ? b.axisX.title ? b.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), g += c.toolTipContent ? c.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>{name}:</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}") :
                    "rangeColumn" === b.type || "rangeBar" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type || "error" === b.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (g += m != b.axisXIndex ? b.axisX.title ? b.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), g += c.toolTipContent ? c.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>{name}:</span>&nbsp;&nbsp;{y[0]},&nbsp;{y[1]}") : "candlestick" ===
                    b.type || "ohlc" === b.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (g += m != b.axisXIndex ? b.axisX.title ? b.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), g += c.toolTipContent ? c.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>{name}:</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low:&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}") : "boxAndWhisker" ===
                        b.type && (this.chart.axisX && 1 < this.chart.axisX.length && (g += m != b.axisXIndex ? b.axisX.title ? b.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), g += c.toolTipContent ? c.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>{name}:</span><br/>Minimum: &nbsp;&nbsp;{y[0]}<br/>Q1: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[1]}<br/>Q2: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[4]}<br/>Q3: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Maximum: &nbsp;{y[3]}"),
                null === f && (f = ""), !0 === this.reversed ? (f = this.chart.replaceKeywordsWithValue(g, c, b, e) + f, l < a.length - 1 && (f = "</br>" + f)) : (f += this.chart.replaceKeywordsWithValue(g, c, b, e), l < a.length - 1 && (f += "</br>")));
                null !== f && (f = k + f)
            } else {
                b = a[0].dataSeries;
                c = a[0].dataPoint;
                e = a[0].index;
                if (null === c.toolTipContent || "undefined" === typeof c.toolTipContent && null === b.options.toolTipContent) return null;
                "line" === b.type || "stepLine" === b.type || "spline" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "column" ===
                b.type || "bar" === b.type || "scatter" === b.type || "stackedColumn" === b.type || "stackedColumn100" === b.type || "stackedBar" === b.type || "stackedBar100" === b.type || "stackedArea" === b.type || "stackedArea100" === b.type || "waterfall" === b.type ? g = c.toolTipContent ? c.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>" + (c.label ? "{label}" : "{x}") + ":</span>&nbsp;&nbsp;{y}" : "bubble" === b.type ? g = c.toolTipContent ?
                    c.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>" + (c.label ? "{label}" : "{x}") + ":</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}" : "pie" === b.type || "doughnut" === b.type || "funnel" === b.type || "pyramid" === b.type ? g = c.toolTipContent ? c.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" :
                    "'color:{color};'") + "\"'>" + (c.name ? "{name}:</span>&nbsp;&nbsp;" : c.label ? "{label}:</span>&nbsp;&nbsp;" : "</span>") + "{y}" : "rangeColumn" === b.type || "rangeBar" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type || "error" === b.type ? g = c.toolTipContent ? c.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>" + (c.label ? "{label}" : "{x}") + " :</span>&nbsp;&nbsp;{y[0]}, &nbsp;{y[1]}" :
                    "candlestick" === b.type || "ohlc" === b.type ? g = c.toolTipContent ? c.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>" + (c.label ? "{label}" : "{x}") + "</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low: &nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}" : "boxAndWhisker" === b.type && (g = c.toolTipContent ? c.toolTipContent : b.toolTipContent ? b.toolTipContent :
                        this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>" + (c.label ? "{label}" : "{x}") + "</span><br/>Minimum: &nbsp;&nbsp;{y[0]}<br/>Q1: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[1]}<br/>Q2: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[4]}<br/>Q3: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Maximum: &nbsp;{y[3]}");
                null === f && (f = "");
                f += this.chart.replaceKeywordsWithValue(g, c, b, e)
            }
            return f
        };
        Y.prototype.enableAnimation = function() {
            if (!this.container.style.WebkitTransition) {
                var a = this.getContainerTransition(this.containerTransitionDuration);
                this.container.style.WebkitTransition = a;
                this.container.style.MsTransition = a;
                this.container.style.transition = a;
                this.container.style.MozTransition = this.mozContainerTransition
            }
        };
        Y.prototype.disableAnimation = function() {
            this.container.style.WebkitTransition && (this.container.style.WebkitTransition =
                "", this.container.style.MozTransition = "", this.container.style.MsTransition = "", this.container.style.transition = "")
        };
        Y.prototype.hide = function(a) {
            this.container && (this.container.style.display = "none", this.currentSeriesIndex = -1, this._prevY = this._prevX = NaN, ("undefined" === typeof a || a) && this.chart.resetOverlayedCanvas())
        };
        Y.prototype.show = function(a, f, b) {
            this._updateToolTip(a, f, "undefined" === typeof b ? !1 : b)
        };
        Y.prototype.fixMozTransitionDelay = function(a, f) {
            if (20 < this.chart._eventManager.lastObjectId) this.mozContainerTransition =
                this.getContainerTransition(0);
            else {
                var b = parseFloat(this.container.style.left),
                    b = isNaN(b) ? 0 : b,
                    c = parseFloat(this.container.style.bottom),
                    c = isNaN(c) ? 0 : c;
                10 < Math.sqrt(Math.pow(b - a, 2) + Math.pow(c - f, 2)) ? this.mozContainerTransition = this.getContainerTransition(0.1) : this.mozContainerTransition = this.getContainerTransition(0)
            }
        };
        Y.prototype.getContainerTransition = function(a) {
            return "left " + a + "s ease-out 0s, bottom " + a + "s ease-out 0s"
        };
        fa.prototype.reset = function() {
            this.lastObjectId = 0;
            this.objectMap = [];
            this.rectangularRegionEventSubscriptions = [];
            this.previousDataPointEventObject = null;
            this.eventObjects = [];
            v && (this.ghostCtx.clearRect(0, 0, this.chart.width, this.chart.height), this.ghostCtx.beginPath())
        };
        fa.prototype.getNewObjectTrackingId = function() {
            return ++this.lastObjectId
        };
        fa.prototype.mouseEventHandler = function(a) {
            if ("mousemove" === a.type || "click" === a.type) {
                var f = [],
                    b = Oa(a),
                    c = null;
                if ((c = this.chart.getObjectAtXY(b.x, b.y, !1)) && "undefined" !== typeof this.objectMap[c])
                    if (c = this.objectMap[c], "dataPoint" === c.objectType) {
                        var e = this.chart.data[c.dataSeriesIndex],
                            g = e.dataPoints[c.dataPointIndex],
                            h = c.dataPointIndex;
                        c.eventParameter = {
                            x: b.x,
                            y: b.y,
                            dataPoint: g,
                            dataSeries: e.options,
                            dataPointIndex: h,
                            dataSeriesIndex: e.index,
                            chart: this.chart
                        };
                        c.eventContext = {
                            context: g,
                            userContext: g,
                            mouseover: "mouseover",
                            mousemove: "mousemove",
                            mouseout: "mouseout",
                            click: "click"
                        };
                        f.push(c);
                        c = this.objectMap[e.id];
                        c.eventParameter = {
                            x: b.x,
                            y: b.y,
                            dataPoint: g,
                            dataSeries: e.options,
                            dataPointIndex: h,
                            dataSeriesIndex: e.index,
                            chart: this.chart
                        };
                        c.eventContext = {
                            context: e,
                            userContext: e.options,
                            mouseover: "mouseover",
                            mousemove: "mousemove",
                            mouseout: "mouseout",
                            click: "click"
                        };
                        f.push(this.objectMap[e.id])
                    } else "legendItem" === c.objectType && (e = this.chart.data[c.dataSeriesIndex], g = null !== c.dataPointIndex ? e.dataPoints[c.dataPointIndex] : null, c.eventParameter = {
                        x: b.x,
                        y: b.y,
                        dataSeries: e.options,
                        dataPoint: g,
                        dataPointIndex: c.dataPointIndex,
                        dataSeriesIndex: c.dataSeriesIndex,
                        chart: this.chart
                    }, c.eventContext = {
                        context: this.chart.legend,
                        userContext: this.chart.legend.options,
                        mouseover: "itemmouseover",
                        mousemove: "itemmousemove",
                        mouseout: "itemmouseout",
                        click: "itemclick"
                    }, f.push(c));
                e = [];
                for (b = 0; b < this.mouseoveredObjectMaps.length; b++) {
                    g = !0;
                    for (c = 0; c < f.length; c++)
                        if (f[c].id === this.mouseoveredObjectMaps[b].id) {
                            g = !1;
                            break
                        }
                    g ? this.fireEvent(this.mouseoveredObjectMaps[b], "mouseout", a) : e.push(this.mouseoveredObjectMaps[b])
                }
                this.mouseoveredObjectMaps = e;
                for (b = 0; b < f.length; b++) {
                    e = !1;
                    for (c = 0; c < this.mouseoveredObjectMaps.length; c++)
                        if (f[b].id === this.mouseoveredObjectMaps[c].id) {
                            e = !0;
                            break
                        }
                    e || (this.fireEvent(f[b], "mouseover", a), this.mouseoveredObjectMaps.push(f[b]));
                    "click" === a.type ? this.fireEvent(f[b], "click", a) : "mousemove" === a.type && this.fireEvent(f[b], "mousemove", a)
                }
            }
        };
        fa.prototype.fireEvent = function(a, f, b) {
            if (a && f) {
                var c = a.eventParameter,
                    e = a.eventContext,
                    g = a.eventContext.userContext;
                g && (e && g[e[f]]) && g[e[f]].call(g, c);
                "mouseout" !== f ? g.cursor && g.cursor !== b.target.style.cursor && (b.target.style.cursor = g.cursor) : (b.target.style.cursor = this.chart._defaultCursor, delete a.eventParameter, delete a.eventContext);
                "click" === f && ("dataPoint" === a.objectType && this.chart.pieDoughnutClickHandler) &&
                this.chart.pieDoughnutClickHandler.call(this.chart.data[a.dataSeriesIndex], c);
                "click" === f && ("dataPoint" === a.objectType && this.chart.funnelPyramidClickHandler) && this.chart.funnelPyramidClickHandler.call(this.chart.data[a.dataSeriesIndex], c)
            }
        };
        ka.prototype.animate = function(a, f, b, c, e) {
            var g = this;
            this.chart.isAnimating = !0;
            e = e || H.easing.linear;
            b && this.animations.push({
                startTime: (new Date).getTime() + (a ? a : 0),
                duration: f,
                animationCallback: b,
                onComplete: c
            });
            for (a = []; 0 < this.animations.length;)
                if (f = this.animations.shift(),
                        b = (new Date).getTime(), c = 0, f.startTime <= b && (c = e(Math.min(b - f.startTime, f.duration), 0, 1, f.duration), c = Math.min(c, 1), isNaN(c) || !isFinite(c)) && (c = 1), 1 > c && a.push(f), f.animationCallback(c), 1 <= c && f.onComplete) f.onComplete();
            this.animations = a;
            0 < this.animations.length ? this.animationRequestId = this.chart.requestAnimFrame.call(window, function() {
                g.animate.call(g)
            }) : this.chart.isAnimating = !1
        };
        ka.prototype.cancelAllAnimations = function() {
            this.animations = [];
            this.animationRequestId && this.chart.cancelRequestAnimFrame.call(window,
                this.animationRequestId);
            this.animationRequestId = null;
            this.chart.isAnimating = !1
        };
        var H = {
                yScaleAnimation: function(a, f) {
                    if (0 !== a) {
                        var b = f.dest,
                            c = f.source.canvas,
                            e = f.animationBase;
                        b.drawImage(c, 0, 0, c.width, c.height, 0, e - e * a, b.canvas.width / ha, a * b.canvas.height / ha)
                    }
                },
                xScaleAnimation: function(a, f) {
                    if (0 !== a) {
                        var b = f.dest,
                            c = f.source.canvas,
                            e = f.animationBase;
                        b.drawImage(c, 0, 0, c.width, c.height, e - e * a, 0, a * b.canvas.width / ha, b.canvas.height / ha)
                    }
                },
                xClipAnimation: function(a, f) {
                    if (0 !== a) {
                        var b = f.dest,
                            c = f.source.canvas;
                        b.save();
                        0 < a && b.drawImage(c, 0, 0, c.width * a, c.height, 0, 0, c.width * a / ha, c.height / ha);
                        b.restore()
                    }
                },
                fadeInAnimation: function(a, f) {
                    if (0 !== a) {
                        var b = f.dest,
                            c = f.source.canvas;
                        b.save();
                        b.globalAlpha = a;
                        b.drawImage(c, 0, 0, c.width, c.height, 0, 0, b.canvas.width / ha, b.canvas.height / ha);
                        b.restore()
                    }
                },
                easing: {
                    linear: function(a, f, b, c) {
                        return b * a / c + f
                    },
                    easeOutQuad: function(a, f, b, c) {
                        return -b * (a /= c) * (a - 2) + f
                    },
                    easeOutQuart: function(a, f, b, c) {
                        return -b * ((a = a / c - 1) * a * a * a - 1) + f
                    },
                    easeInQuad: function(a, f, b, c) {
                        return b * (a /= c) * a + f
                    },
                    easeInQuart: function(a,
                                          f, b, c) {
                        return b * (a /= c) * a * a * a + f
                    }
                }
            },
            ja = {
                drawMarker: function(a, f, b, c, e, g, h, l) {
                    if (b) {
                        var m = 1;
                        b.fillStyle = g ? g : "#000000";
                        b.strokeStyle = h ? h : "#000000";
                        b.lineWidth = l ? l : 0;
                        "circle" === c ? (b.moveTo(a, f), b.beginPath(), b.arc(a, f, e / 2, 0, 2 * Math.PI, !1), g && b.fill(), l && (h ? b.stroke() : (m = b.globalAlpha, b.globalAlpha = 0.15, b.strokeStyle = "black", b.stroke(), b.globalAlpha = m))) : "square" === c ? (b.beginPath(), b.rect(a - e / 2, f - e / 2, e, e), g && b.fill(), l && (h ? b.stroke() : (m = b.globalAlpha, b.globalAlpha = 0.15, b.strokeStyle = "black", b.stroke(), b.globalAlpha =
                            m))) : "triangle" === c ? (b.beginPath(), b.moveTo(a - e / 2, f + e / 2), b.lineTo(a + e / 2, f + e / 2), b.lineTo(a, f - e / 2), b.closePath(), g && b.fill(), l && (h ? b.stroke() : (m = b.globalAlpha, b.globalAlpha = 0.15, b.strokeStyle = "black", b.stroke(), b.globalAlpha = m)), b.beginPath()) : "cross" === c && (b.strokeStyle = g, b.lineWidth = e / 4, b.beginPath(), b.moveTo(a - e / 2, f - e / 2), b.lineTo(a + e / 2, f + e / 2), b.stroke(), b.moveTo(a + e / 2, f - e / 2), b.lineTo(a - e / 2, f + e / 2), b.stroke())
                    }
                },
                drawMarkers: function(a) {
                    for (var f = 0; f < a.length; f++) {
                        var b = a[f];
                        ja.drawMarker(b.x, b.y, b.ctx,
                            b.type, b.size, b.color, b.borderColor, b.borderThickness)
                    }
                }
            };
        return q
    }();
    x.Chart.version = "v2.0.1 GA"
})();

/*
  excanvas is used to support IE678 which do not implement HTML5 Canvas Element. You can safely remove the following excanvas code if you don't need to support older browsers.

  Copyright 2006 Google Inc. https://code.google.com/p/explorercanvas/
  Licensed under the Apache License, Version 2.0
*/
document.createElement("canvas").getContext || function() {
    function V() {
        return this.context_ || (this.context_ = new C(this))
    }

    function W(a, b, c) {
        var g = M.call(arguments, 2);
        return function() {
            return a.apply(b, g.concat(M.call(arguments)))
        }
    }

    function N(a) {
        return String(a).replace(/&/g, "&amp;").replace(/"/g, "&quot;")
    }

    function O(a) {
        a.namespaces.g_vml_ || a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML");
        a.namespaces.g_o_ || a.namespaces.add("g_o_", "urn:schemas-microsoft-com:office:office", "#default#VML");
        a.styleSheets.ex_canvas_ || (a = a.createStyleSheet(), a.owningElement.id = "ex_canvas_", a.cssText = "canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}")
    }

    function X(a) {
        var b = a.srcElement;
        switch (a.propertyName) {
            case "width":
                b.getContext().clearRect();
                b.style.width = b.attributes.width.nodeValue + "px";
                b.firstChild.style.width = b.clientWidth + "px";
                break;
            case "height":
                b.getContext().clearRect(), b.style.height = b.attributes.height.nodeValue + "px", b.firstChild.style.height = b.clientHeight +
                    "px"
        }
    }

    function Y(a) {
        a = a.srcElement;
        a.firstChild && (a.firstChild.style.width = a.clientWidth + "px", a.firstChild.style.height = a.clientHeight + "px")
    }

    function D() {
        return [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1]
        ]
    }

    function t(a, b) {
        for (var c = D(), g = 0; 3 > g; g++)
            for (var e = 0; 3 > e; e++) {
                for (var f = 0, d = 0; 3 > d; d++) f += a[g][d] * b[d][e];
                c[g][e] = f
            }
        return c
    }

    function P(a, b) {
        b.fillStyle = a.fillStyle;
        b.lineCap = a.lineCap;
        b.lineJoin = a.lineJoin;
        b.lineWidth = a.lineWidth;
        b.miterLimit = a.miterLimit;
        b.shadowBlur = a.shadowBlur;
        b.shadowColor = a.shadowColor;
        b.shadowOffsetX =
            a.shadowOffsetX;
        b.shadowOffsetY = a.shadowOffsetY;
        b.strokeStyle = a.strokeStyle;
        b.globalAlpha = a.globalAlpha;
        b.font = a.font;
        b.textAlign = a.textAlign;
        b.textBaseline = a.textBaseline;
        b.arcScaleX_ = a.arcScaleX_;
        b.arcScaleY_ = a.arcScaleY_;
        b.lineScale_ = a.lineScale_
    }

    function Q(a) {
        var b = a.indexOf("(", 3),
            c = a.indexOf(")", b + 1),
            b = a.substring(b + 1, c).split(",");
        if (4 != b.length || "a" != a.charAt(3)) b[3] = 1;
        return b
    }

    function E(a, b, c) {
        return Math.min(c, Math.max(b, a))
    }

    function F(a, b, c) {
        0 > c && c++;
        1 < c && c--;
        return 1 > 6 * c ? a + 6 * (b - a) * c :
            1 > 2 * c ? b : 2 > 3 * c ? a + 6 * (b - a) * (2 / 3 - c) : a
    }

    function G(a) {
        if (a in H) return H[a];
        var b, c = 1;
        a = String(a);
        if ("#" == a.charAt(0)) b = a;
        else if (/^rgb/.test(a)) {
            c = Q(a);
            b = "#";
            for (var g, e = 0; 3 > e; e++) g = -1 != c[e].indexOf("%") ? Math.floor(255 * (parseFloat(c[e]) / 100)) : +c[e], b += v[E(g, 0, 255)];
            c = +c[3]
        } else if (/^hsl/.test(a)) {
            e = c = Q(a);
            b = parseFloat(e[0]) / 360 % 360;
            0 > b && b++;
            g = E(parseFloat(e[1]) / 100, 0, 1);
            e = E(parseFloat(e[2]) / 100, 0, 1);
            if (0 == g) g = e = b = e;
            else {
                var f = 0.5 > e ? e * (1 + g) : e + g - e * g,
                    d = 2 * e - f;
                g = F(d, f, b + 1 / 3);
                e = F(d, f, b);
                b = F(d, f, b - 1 / 3)
            }
            b = "#" +
                v[Math.floor(255 * g)] + v[Math.floor(255 * e)] + v[Math.floor(255 * b)];
            c = c[3]
        } else b = Z[a] || a;
        return H[a] = {
            color: b,
            alpha: c
        }
    }

    function C(a) {
        this.m_ = D();
        this.mStack_ = [];
        this.aStack_ = [];
        this.currentPath_ = [];
        this.fillStyle = this.strokeStyle = "#000";
        this.lineWidth = 1;
        this.lineJoin = "miter";
        this.lineCap = "butt";
        this.miterLimit = 1 * q;
        this.globalAlpha = 1;
        this.font = "10px sans-serif";
        this.textAlign = "left";
        this.textBaseline = "alphabetic";
        this.canvas = a;
        var b = "width:" + a.clientWidth + "px;height:" + a.clientHeight + "px;overflow:hidden;position:absolute",
            c = a.ownerDocument.createElement("div");
        c.style.cssText = b;
        a.appendChild(c);
        b = c.cloneNode(!1);
        b.style.backgroundColor = "red";
        b.style.filter = "alpha(opacity=0)";
        a.appendChild(b);
        this.element_ = c;
        this.lineScale_ = this.arcScaleY_ = this.arcScaleX_ = 1
    }

    function R(a, b, c, g) {
        a.currentPath_.push({
            type: "bezierCurveTo",
            cp1x: b.x,
            cp1y: b.y,
            cp2x: c.x,
            cp2y: c.y,
            x: g.x,
            y: g.y
        });
        a.currentX_ = g.x;
        a.currentY_ = g.y
    }

    function S(a, b) {
        var c = G(a.strokeStyle),
            g = c.color,
            c = c.alpha * a.globalAlpha,
            e = a.lineScale_ * a.lineWidth;
        1 > e && (c *= e);
        b.push("<g_vml_:stroke",
            ' opacity="', c, '"', ' joinstyle="', a.lineJoin, '"', ' miterlimit="', a.miterLimit, '"', ' endcap="', $[a.lineCap] || "square", '"', ' weight="', e, 'px"', ' color="', g, '" />')
    }

    function T(a, b, c, g) {
        var e = a.fillStyle,
            f = a.arcScaleX_,
            d = a.arcScaleY_,
            k = g.x - c.x,
            n = g.y - c.y;
        if (e instanceof w) {
            var h = 0,
                l = g = 0,
                u = 0,
                m = 1;
            if ("gradient" == e.type_) {
                h = e.x1_ / f;
                c = e.y1_ / d;
                var p = s(a, e.x0_ / f, e.y0_ / d),
                    h = s(a, h, c),
                    h = 180 * Math.atan2(h.x - p.x, h.y - p.y) / Math.PI;
                0 > h && (h += 360);
                1E-6 > h && (h = 0)
            } else p = s(a, e.x0_, e.y0_), g = (p.x - c.x) / k, l = (p.y - c.y) / n, k /= f * q,
                n /= d * q, m = x.max(k, n), u = 2 * e.r0_ / m, m = 2 * e.r1_ / m - u;
            f = e.colors_;
            f.sort(function(a, b) {
                return a.offset - b.offset
            });
            d = f.length;
            p = f[0].color;
            c = f[d - 1].color;
            k = f[0].alpha * a.globalAlpha;
            a = f[d - 1].alpha * a.globalAlpha;
            for (var n = [], r = 0; r < d; r++) {
                var t = f[r];
                n.push(t.offset * m + u + " " + t.color)
            }
            b.push('<g_vml_:fill type="', e.type_, '"', ' method="none" focus="100%"', ' color="', p, '"', ' color2="', c, '"', ' colors="', n.join(","), '"', ' opacity="', a, '"', ' g_o_:opacity2="', k, '"', ' angle="', h, '"', ' focusposition="', g, ",", l, '" />')
        } else e instanceof
        I ? k && n && b.push("<g_vml_:fill", ' position="', -c.x / k * f * f, ",", -c.y / n * d * d, '"', ' type="tile"', ' src="', e.src_, '" />') : (e = G(a.fillStyle), b.push('<g_vml_:fill color="', e.color, '" opacity="', e.alpha * a.globalAlpha, '" />'))
    }

    function s(a, b, c) {
        a = a.m_;
        return {
            x: q * (b * a[0][0] + c * a[1][0] + a[2][0]) - r,
            y: q * (b * a[0][1] + c * a[1][1] + a[2][1]) - r
        }
    }

    function z(a, b, c) {
        isFinite(b[0][0]) && (isFinite(b[0][1]) && isFinite(b[1][0]) && isFinite(b[1][1]) && isFinite(b[2][0]) && isFinite(b[2][1])) && (a.m_ = b, c && (a.lineScale_ = aa(ba(b[0][0] * b[1][1] - b[0][1] *
            b[1][0]))))
    }

    function w(a) {
        this.type_ = a;
        this.r1_ = this.y1_ = this.x1_ = this.r0_ = this.y0_ = this.x0_ = 0;
        this.colors_ = []
    }

    function I(a, b) {
        if (!a || 1 != a.nodeType || "IMG" != a.tagName) throw new A("TYPE_MISMATCH_ERR");
        if ("complete" != a.readyState) throw new A("INVALID_STATE_ERR");
        switch (b) {
            case "repeat":
            case null:
            case "":
                this.repetition_ = "repeat";
                break;
            case "repeat-x":
            case "repeat-y":
            case "no-repeat":
                this.repetition_ = b;
                break;
            default:
                throw new A("SYNTAX_ERR");
        }
        this.src_ = a.src;
        this.width_ = a.width;
        this.height_ = a.height
    }

    function A(a) {
        this.code = this[a];
        this.message = a + ": DOM Exception " + this.code
    }
    var x = Math,
        k = x.round,
        J = x.sin,
        K = x.cos,
        ba = x.abs,
        aa = x.sqrt,
        q = 10,
        r = q / 2;
    navigator.userAgent.match(/MSIE ([\d.]+)?/);
    var M = Array.prototype.slice;
    O(document);
    var U = {
        init: function(a) {
            a = a || document;
            a.createElement("canvas");
            a.attachEvent("onreadystatechange", W(this.init_, this, a))
        },
        init_: function(a) {
            a = a.getElementsByTagName("canvas");
            for (var b = 0; b < a.length; b++) this.initElement(a[b])
        },
        initElement: function(a) {
            if (!a.getContext) {
                a.getContext =
                    V;
                O(a.ownerDocument);
                a.innerHTML = "";
                a.attachEvent("onpropertychange", X);
                a.attachEvent("onresize", Y);
                var b = a.attributes;
                b.width && b.width.specified ? a.style.width = b.width.nodeValue + "px" : a.width = a.clientWidth;
                b.height && b.height.specified ? a.style.height = b.height.nodeValue + "px" : a.height = a.clientHeight
            }
            return a
        }
    };
    U.init();
    for (var v = [], d = 0; 16 > d; d++)
        for (var B = 0; 16 > B; B++) v[16 * d + B] = d.toString(16) + B.toString(16);
    var Z = {
            aliceblue: "#F0F8FF",
            antiquewhite: "#FAEBD7",
            aquamarine: "#7FFFD4",
            azure: "#F0FFFF",
            beige: "#F5F5DC",
            bisque: "#FFE4C4",
            black: "#000000",
            blanchedalmond: "#FFEBCD",
            blueviolet: "#8A2BE2",
            brown: "#A52A2A",
            burlywood: "#DEB887",
            cadetblue: "#5F9EA0",
            chartreuse: "#7FFF00",
            chocolate: "#D2691E",
            coral: "#FF7F50",
            cornflowerblue: "#6495ED",
            cornsilk: "#FFF8DC",
            crimson: "#DC143C",
            cyan: "#00FFFF",
            darkblue: "#00008B",
            darkcyan: "#008B8B",
            darkgoldenrod: "#B8860B",
            darkgray: "#A9A9A9",
            darkgreen: "#006400",
            darkgrey: "#A9A9A9",
            darkkhaki: "#BDB76B",
            darkmagenta: "#8B008B",
            darkolivegreen: "#556B2F",
            darkorange: "#FF8C00",
            darkorchid: "#9932CC",
            darkred: "#8B0000",
            darksalmon: "#E9967A",
            darkseagreen: "#8FBC8F",
            darkslateblue: "#483D8B",
            darkslategray: "#2F4F4F",
            darkslategrey: "#2F4F4F",
            darkturquoise: "#00CED1",
            darkviolet: "#9400D3",
            deeppink: "#FF1493",
            deepskyblue: "#00BFFF",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1E90FF",
            firebrick: "#B22222",
            floralwhite: "#FFFAF0",
            forestgreen: "#228B22",
            gainsboro: "#DCDCDC",
            ghostwhite: "#F8F8FF",
            gold: "#FFD700",
            goldenrod: "#DAA520",
            grey: "#808080",
            greenyellow: "#ADFF2F",
            honeydew: "#F0FFF0",
            hotpink: "#FF69B4",
            indianred: "#CD5C5C",
            indigo: "#4B0082",
            ivory: "#FFFFF0",
            khaki: "#F0E68C",
            lavender: "#E6E6FA",
            lavenderblush: "#FFF0F5",
            lawngreen: "#7CFC00",
            lemonchiffon: "#FFFACD",
            lightblue: "#ADD8E6",
            lightcoral: "#F08080",
            lightcyan: "#E0FFFF",
            lightgoldenrodyellow: "#FAFAD2",
            lightgreen: "#90EE90",
            lightgrey: "#D3D3D3",
            lightpink: "#FFB6C1",
            lightsalmon: "#FFA07A",
            lightseagreen: "#20B2AA",
            lightskyblue: "#87CEFA",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#B0C4DE",
            lightyellow: "#FFFFE0",
            limegreen: "#32CD32",
            linen: "#FAF0E6",
            magenta: "#FF00FF",
            mediumaquamarine: "#66CDAA",
            mediumblue: "#0000CD",
            mediumorchid: "#BA55D3",
            mediumpurple: "#9370DB",
            mediumseagreen: "#3CB371",
            mediumslateblue: "#7B68EE",
            mediumspringgreen: "#00FA9A",
            mediumturquoise: "#48D1CC",
            mediumvioletred: "#C71585",
            midnightblue: "#191970",
            mintcream: "#F5FFFA",
            mistyrose: "#FFE4E1",
            moccasin: "#FFE4B5",
            navajowhite: "#FFDEAD",
            oldlace: "#FDF5E6",
            olivedrab: "#6B8E23",
            orange: "#FFA500",
            orangered: "#FF4500",
            orchid: "#DA70D6",
            palegoldenrod: "#EEE8AA",
            palegreen: "#98FB98",
            paleturquoise: "#AFEEEE",
            palevioletred: "#DB7093",
            papayawhip: "#FFEFD5",
            peachpuff: "#FFDAB9",
            peru: "#CD853F",
            pink: "#FFC0CB",
            plum: "#DDA0DD",
            powderblue: "#B0E0E6",
            rosybrown: "#BC8F8F",
            royalblue: "#4169E1",
            saddlebrown: "#8B4513",
            salmon: "#FA8072",
            sandybrown: "#F4A460",
            seagreen: "#2E8B57",
            seashell: "#FFF5EE",
            sienna: "#A0522D",
            skyblue: "#87CEEB",
            slateblue: "#6A5ACD",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#FFFAFA",
            springgreen: "#00FF7F",
            steelblue: "#4682B4",
            tan: "#D2B48C",
            thistle: "#D8BFD8",
            tomato: "#FF6347",
            turquoise: "#40E0D0",
            violet: "#EE82EE",
            wheat: "#F5DEB3",
            whitesmoke: "#F5F5F5",
            yellowgreen: "#9ACD32"
        },
        H = {},
        L = {},
        $ = {
            butt: "flat",
            round: "round"
        },
        d = C.prototype;
    d.clearRect = function() {
        this.textMeasureEl_ && (this.textMeasureEl_.removeNode(!0), this.textMeasureEl_ = null);
        this.element_.innerHTML = ""
    };
    d.beginPath = function() {
        this.currentPath_ = []
    };
    d.moveTo = function(a, b) {
        var c = s(this, a, b);
        this.currentPath_.push({
            type: "moveTo",
            x: c.x,
            y: c.y
        });
        this.currentX_ = c.x;
        this.currentY_ = c.y
    };
    d.lineTo = function(a, b) {
        var c = s(this, a, b);
        this.currentPath_.push({
            type: "lineTo",
            x: c.x,
            y: c.y
        });
        this.currentX_ = c.x;
        this.currentY_ = c.y
    };
    d.bezierCurveTo =
        function(a, b, c, g, e, f) {
            e = s(this, e, f);
            a = s(this, a, b);
            c = s(this, c, g);
            R(this, a, c, e)
        };
    d.quadraticCurveTo = function(a, b, c, g) {
        a = s(this, a, b);
        c = s(this, c, g);
        g = {
            x: this.currentX_ + 2 / 3 * (a.x - this.currentX_),
            y: this.currentY_ + 2 / 3 * (a.y - this.currentY_)
        };
        R(this, g, {
            x: g.x + (c.x - this.currentX_) / 3,
            y: g.y + (c.y - this.currentY_) / 3
        }, c)
    };
    d.arc = function(a, b, c, g, e, f) {
        c *= q;
        var d = f ? "at" : "wa",
            k = a + K(g) * c - r,
            n = b + J(g) * c - r;
        g = a + K(e) * c - r;
        e = b + J(e) * c - r;
        k != g || f || (k += 0.125);
        a = s(this, a, b);
        k = s(this, k, n);
        g = s(this, g, e);
        this.currentPath_.push({
            type: d,
            x: a.x,
            y: a.y,
            radius: c,
            xStart: k.x,
            yStart: k.y,
            xEnd: g.x,
            yEnd: g.y
        })
    };
    d.rect = function(a, b, c, g) {
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a + c, b + g);
        this.lineTo(a, b + g);
        this.closePath()
    };
    d.strokeRect = function(a, b, c, g) {
        var e = this.currentPath_;
        this.beginPath();
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a + c, b + g);
        this.lineTo(a, b + g);
        this.closePath();
        this.stroke();
        this.currentPath_ = e
    };
    d.fillRect = function(a, b, c, g) {
        var e = this.currentPath_;
        this.beginPath();
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a +
            c, b + g);
        this.lineTo(a, b + g);
        this.closePath();
        this.fill();
        this.currentPath_ = e
    };
    d.createLinearGradient = function(a, b, c, g) {
        var e = new w("gradient");
        e.x0_ = a;
        e.y0_ = b;
        e.x1_ = c;
        e.y1_ = g;
        return e
    };
    d.createRadialGradient = function(a, b, c, g, e, f) {
        var d = new w("gradientradial");
        d.x0_ = a;
        d.y0_ = b;
        d.r0_ = c;
        d.x1_ = g;
        d.y1_ = e;
        d.r1_ = f;
        return d
    };
    d.drawImage = function(a, b) {
        var c, g, e, d, r, y, n, h;
        e = a.runtimeStyle.width;
        d = a.runtimeStyle.height;
        a.runtimeStyle.width = "auto";
        a.runtimeStyle.height = "auto";
        var l = a.width,
            u = a.height;
        a.runtimeStyle.width =
            e;
        a.runtimeStyle.height = d;
        if (3 == arguments.length) c = arguments[1], g = arguments[2], r = y = 0, n = e = l, h = d = u;
        else if (5 == arguments.length) c = arguments[1], g = arguments[2], e = arguments[3], d = arguments[4], r = y = 0, n = l, h = u;
        else if (9 == arguments.length) r = arguments[1], y = arguments[2], n = arguments[3], h = arguments[4], c = arguments[5], g = arguments[6], e = arguments[7], d = arguments[8];
        else throw Error("Invalid number of arguments");
        var m = s(this, c, g),
            p = [];
        p.push(" <g_vml_:group", ' coordsize="', 10 * q, ",", 10 * q, '"', ' coordorigin="0,0"', ' style="width:',
            10, "px;height:", 10, "px;position:absolute;");
        if (1 != this.m_[0][0] || this.m_[0][1] || 1 != this.m_[1][1] || this.m_[1][0]) {
            var t = [];
            t.push("M11=", this.m_[0][0], ",", "M12=", this.m_[1][0], ",", "M21=", this.m_[0][1], ",", "M22=", this.m_[1][1], ",", "Dx=", k(m.x / q), ",", "Dy=", k(m.y / q), "");
            var v = s(this, c + e, g),
                w = s(this, c, g + d);
            c = s(this, c + e, g + d);
            m.x = x.max(m.x, v.x, w.x, c.x);
            m.y = x.max(m.y, v.y, w.y, c.y);
            p.push("padding:0 ", k(m.x / q), "px ", k(m.y / q), "px 0;filter:progid:DXImageTransform.Microsoft.Matrix(", t.join(""), ", sizingmethod='clip');")
        } else p.push("top:",
            k(m.y / q), "px;left:", k(m.x / q), "px;");
        p.push(' ">', '<g_vml_:image src="', a.src, '"', ' style="width:', q * e, "px;", " height:", q * d, 'px"', ' cropleft="', r / l, '"', ' croptop="', y / u, '"', ' cropright="', (l - r - n) / l, '"', ' cropbottom="', (u - y - h) / u, '"', " />", "</g_vml_:group>");
        this.element_.insertAdjacentHTML("BeforeEnd", p.join(""))
    };
    d.stroke = function(a) {
        var b = [];
        b.push("<g_vml_:shape", ' filled="', !!a, '"', ' style="position:absolute;width:', 10, "px;height:", 10, 'px;"', ' coordorigin="0,0"', ' coordsize="', 10 * q, ",", 10 * q, '"',
            ' stroked="', !a, '"', ' path="');
        for (var c = {
            x: null,
            y: null
        }, d = {
            x: null,
            y: null
        }, e = 0; e < this.currentPath_.length; e++) {
            var f = this.currentPath_[e];
            switch (f.type) {
                case "moveTo":
                    b.push(" m ", k(f.x), ",", k(f.y));
                    break;
                case "lineTo":
                    b.push(" l ", k(f.x), ",", k(f.y));
                    break;
                case "close":
                    b.push(" x ");
                    f = null;
                    break;
                case "bezierCurveTo":
                    b.push(" c ", k(f.cp1x), ",", k(f.cp1y), ",", k(f.cp2x), ",", k(f.cp2y), ",", k(f.x), ",", k(f.y));
                    break;
                case "at":
                case "wa":
                    b.push(" ", f.type, " ", k(f.x - this.arcScaleX_ * f.radius), ",", k(f.y - this.arcScaleY_ *
                        f.radius), " ", k(f.x + this.arcScaleX_ * f.radius), ",", k(f.y + this.arcScaleY_ * f.radius), " ", k(f.xStart), ",", k(f.yStart), " ", k(f.xEnd), ",", k(f.yEnd))
            }
            if (f) {
                if (null == c.x || f.x < c.x) c.x = f.x;
                if (null == d.x || f.x > d.x) d.x = f.x;
                if (null == c.y || f.y < c.y) c.y = f.y;
                if (null == d.y || f.y > d.y) d.y = f.y
            }
        }
        b.push(' ">');
        a ? T(this, b, c, d) : S(this, b);
        b.push("</g_vml_:shape>");
        this.element_.insertAdjacentHTML("beforeEnd", b.join(""))
    };
    d.fill = function() {
        this.stroke(!0)
    };
    d.closePath = function() {
        this.currentPath_.push({
            type: "close"
        })
    };
    d.save = function() {
        var a = {};
        P(this, a);
        this.aStack_.push(a);
        this.mStack_.push(this.m_);
        this.m_ = t(D(), this.m_)
    };
    d.restore = function() {
        this.aStack_.length && (P(this.aStack_.pop(), this), this.m_ = this.mStack_.pop())
    };
    d.translate = function(a, b) {
        z(this, t([
            [1, 0, 0],
            [0, 1, 0],
            [a, b, 1]
        ], this.m_), !1)
    };
    d.rotate = function(a) {
        var b = K(a);
        a = J(a);
        z(this, t([
            [b, a, 0],
            [-a, b, 0],
            [0, 0, 1]
        ], this.m_), !1)
    };
    d.scale = function(a, b) {
        this.arcScaleX_ *= a;
        this.arcScaleY_ *= b;
        z(this, t([
            [a, 0, 0],
            [0, b, 0],
            [0, 0, 1]
        ], this.m_), !0)
    };
    d.transform = function(a, b, c, d, e, f) {
        z(this, t([
            [a,
                b, 0
            ],
            [c, d, 0],
            [e, f, 1]
        ], this.m_), !0)
    };
    d.setTransform = function(a, b, c, d, e, f) {
        z(this, [
            [a, b, 0],
            [c, d, 0],
            [e, f, 1]
        ], !0)
    };
    d.drawText_ = function(a, b, c, d, e) {
        var f = this.m_;
        d = 0;
        var r = 1E3,
            t = 0,
            n = [],
            h;
        h = this.font;
        if (L[h]) h = L[h];
        else {
            var l = document.createElement("div").style;
            try {
                l.font = h
            } catch (u) {}
            h = L[h] = {
                style: l.fontStyle || "normal",
                variant: l.fontVariant || "normal",
                weight: l.fontWeight || "normal",
                size: l.fontSize || 10,
                family: l.fontFamily || "sans-serif"
            }
        }
        var l = h,
            m = this.element_;
        h = {};
        for (var p in l) h[p] = l[p];
        p = parseFloat(m.currentStyle.fontSize);
        m = parseFloat(l.size);
        "number" == typeof l.size ? h.size = l.size : -1 != l.size.indexOf("px") ? h.size = m : -1 != l.size.indexOf("em") ? h.size = p * m : -1 != l.size.indexOf("%") ? h.size = p / 100 * m : -1 != l.size.indexOf("pt") ? h.size = m / 0.75 : h.size = p;
        h.size *= 0.981;
        p = h.style + " " + h.variant + " " + h.weight + " " + h.size + "px " + h.family;
        m = this.element_.currentStyle;
        l = this.textAlign.toLowerCase();
        switch (l) {
            case "left":
            case "center":
            case "right":
                break;
            case "end":
                l = "ltr" == m.direction ? "right" : "left";
                break;
            case "start":
                l = "rtl" == m.direction ? "right" :
                    "left";
                break;
            default:
                l = "left"
        }
        switch (this.textBaseline) {
            case "hanging":
            case "top":
                t = h.size / 1.75;
                break;
            case "middle":
                break;
            default:
            case null:
            case "alphabetic":
            case "ideographic":
            case "bottom":
                t = -h.size / 2.25
        }
        switch (l) {
            case "right":
                d = 1E3;
                r = 0.05;
                break;
            case "center":
                d = r = 500
        }
        b = s(this, b + 0, c + t);
        n.push('<g_vml_:line from="', -d, ' 0" to="', r, ' 0.05" ', ' coordsize="100 100" coordorigin="0 0"', ' filled="', !e, '" stroked="', !!e, '" style="position:absolute;width:1px;height:1px;">');
        e ? S(this, n) : T(this, n, {
            x: -d,
            y: 0
        }, {
            x: r,
            y: h.size
        });
        e = f[0][0].toFixed(3) + "," + f[1][0].toFixed(3) + "," + f[0][1].toFixed(3) + "," + f[1][1].toFixed(3) + ",0,0";
        b = k(b.x / q) + "," + k(b.y / q);
        n.push('<g_vml_:skew on="t" matrix="', e, '" ', ' offset="', b, '" origin="', d, ' 0" />', '<g_vml_:path textpathok="true" />', '<g_vml_:textpath on="true" string="', N(a), '" style="v-text-align:', l, ";font:", N(p), '" /></g_vml_:line>');
        this.element_.insertAdjacentHTML("beforeEnd", n.join(""))
    };
    d.fillText = function(a, b, c, d) {
        this.drawText_(a, b, c, d, !1)
    };
    d.strokeText = function(a,
                            b, c, d) {
        this.drawText_(a, b, c, d, !0)
    };
    d.measureText = function(a) {
        this.textMeasureEl_ || (this.element_.insertAdjacentHTML("beforeEnd", '<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>'), this.textMeasureEl_ = this.element_.lastChild);
        var b = this.element_.ownerDocument;
        this.textMeasureEl_.innerHTML = "";
        this.textMeasureEl_.style.font = this.font;
        this.textMeasureEl_.appendChild(b.createTextNode(a));
        return {
            width: this.textMeasureEl_.offsetWidth
        }
    };
    d.clip = function() {};
    d.arcTo = function() {};
    d.createPattern = function(a, b) {
        return new I(a, b)
    };
    w.prototype.addColorStop = function(a, b) {
        b = G(b);
        this.colors_.push({
            offset: a,
            color: b.color,
            alpha: b.alpha
        })
    };
    d = A.prototype = Error();
    d.INDEX_SIZE_ERR = 1;
    d.DOMSTRING_SIZE_ERR = 2;
    d.HIERARCHY_REQUEST_ERR = 3;
    d.WRONG_DOCUMENT_ERR = 4;
    d.INVALID_CHARACTER_ERR = 5;
    d.NO_DATA_ALLOWED_ERR = 6;
    d.NO_MODIFICATION_ALLOWED_ERR = 7;
    d.NOT_FOUND_ERR = 8;
    d.NOT_SUPPORTED_ERR = 9;
    d.INUSE_ATTRIBUTE_ERR = 10;
    d.INVALID_STATE_ERR = 11;
    d.SYNTAX_ERR = 12;
    d.INVALID_MODIFICATION_ERR =
        13;
    d.NAMESPACE_ERR = 14;
    d.INVALID_ACCESS_ERR = 15;
    d.VALIDATION_ERR = 16;
    d.TYPE_MISMATCH_ERR = 17;
    G_vmlCanvasManager = U;
    CanvasRenderingContext2D = C;
    CanvasGradient = w;
    CanvasPattern = I;
    DOMException = A
}();
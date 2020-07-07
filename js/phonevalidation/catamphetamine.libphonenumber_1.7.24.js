!function (d, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("libphonenumber", [], t) : "object" == typeof exports ? exports.libphonenumber = t() : d.libphonenumber = t()
}(window, function () {
    return function (d) {
        var t = {};

        function e(r) {
            if (t[r]) return t[r].exports;
            var n = t[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return d[r].call(n.exports, n, n.exports, e), n.l = !0, n.exports
        }

        return e.m = d, e.c = t, e.d = function (d, t, r) {
            e.o(d, t) || Object.defineProperty(d, t, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        }, e.r = function (d) {
            Object.defineProperty(d, "__esModule", {value: !0})
        }, e.n = function (d) {
            var t = d && d.__esModule ? function () {
                return d.default
            } : function () {
                return d
            };
            return e.d(t, "a", t), t
        }, e.o = function (d, t) {
            return Object.prototype.hasOwnProperty.call(d, t)
        }, e.p = "", e(e.s = 40)
    }([function (d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (d) {
            return typeof d
        } : function (d) {
            return d && "function" == typeof Symbol && d.constructor === Symbol && d !== Symbol.prototype ? "symbol" : typeof d
        };
        t.validateMetadata = m, t.getExtPrefix = function (d, t) {
            if ((t = new f(t)).hasCountry(d)) return t.country(d).ext();
            return l
        }, t.getCountryCallingCode = function (d, t) {
            if ((t = new f(t)).hasCountry(d)) return t.country(d).countryCallingCode();
            throw new Error("Unknown country: " + d)
        }, t.isSupportedCountry = function (d, t) {
            return void 0 !== t.countries[d]
        };
        var n,
            $ = e(38),
            i = (n = $) && n.__esModule ? n : {default: n};
        var a = "function" == typeof Symbol && "symbol" === r(Symbol.iterator) ? function (d) {
                return void 0 === d ? "undefined" : r(d)
            } : function (d) {
                return d && "function" == typeof Symbol && d.constructor === Symbol && d !== Symbol.prototype ? "symbol" : void 0 === d ? "undefined" : r(d)
            },
            o = function () {
                function d(d, t) {
                    for (var e = 0; e < t.length; e++) {
                        var r = t[e];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(d, r.key, r)
                    }
                }

                return function (t, e, r) {
                    return e && d(t.prototype, e), r && d(t, r), t
                }
            }();

        function u(d, t) {
            if (!(d instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        var s = "1.2.0",
            l = " ext. ",
            f = function () {
                function d(t) {
                    u(this, d), m(t), this.metadata = t, this.v1 = !t.version, this.v2 = void 0 !== t.version && -1 === (0, i.default)(t.version, s), this.v3 = void 0 !== t.version
                }

                return o(d, [{
                    key: "hasCountry",
                    value: function (d) {
                        return void 0 !== this.metadata.countries[d]
                    }
                }, {
                    key: "country",
                    value: function (d) {
                        if (!d) return this._country = void 0, this.country_metadata = void 0, this;
                        if (!this.hasCountry(d)) throw new Error("Unknown country: " + d);
                        return this._country = d, this.country_metadata = this.metadata.countries[d], this
                    }
                }, {
                    key: "getDefaultCountryMetadataForRegion",
                    value: function () {
                        return this.metadata.countries[this.countryCallingCodes()[this.countryCallingCode()][0]]
                    }
                }, {
                    key: "countryCallingCode",
                    value: function () {
                        return this.country_metadata[0]
                    }
                }, {
                    key: "IDDPrefix",
                    value: function () {
                        if (!this.v1 && !this.v2) return this.country_metadata[1]
                    }
                }, {
                    key: "defaultIDDPrefix",
                    value: function () {
                        if (!this.v1 && !this.v2) return this.country_metadata[12]
                    }
                }, {
                    key: "nationalNumberPattern",
                    value: function () {
                        return this.v1 || this.v2 ? this.country_metadata[1] : this.country_metadata[2]
                    }
                }, {
                    key: "possibleLengths",
                    value: function () {
                        if (!this.v1) return this.country_metadata[this.v2 ? 2 : 3]
                    }
                }, {
                    key: "_getFormats",
                    value: function (d) {
                        return d[this.v1 ? 2 : this.v2 ? 3 : 4]
                    }
                }, {
                    key: "formats",
                    value: function () {
                        var d = this,
                            t = this._getFormats(this.country_metadata) || this._getFormats(this.getDefaultCountryMetadataForRegion()) || [];
                        return t.map(function (t) {
                            return new c(t, d)
                        })
                    }
                }, {
                    key: "nationalPrefix",
                    value: function () {
                        return this.country_metadata[this.v1 ? 3 : this.v2 ? 4 : 5]
                    }
                }, {
                    key: "_getNationalPrefixFormattingRule",
                    value: function (d) {
                        return d[this.v1 ? 4 : this.v2 ? 5 : 6]
                    }
                }, {
                    key: "nationalPrefixFormattingRule",
                    value: function () {
                        return this._getNationalPrefixFormattingRule(this.country_metadata) || this._getNationalPrefixFormattingRule(this.getDefaultCountryMetadataForRegion())
                    }
                }, {
                    key: "nationalPrefixForParsing",
                    value: function () {
                        return this.country_metadata[this.v1 ? 5 : this.v2 ? 6 : 7] || this.nationalPrefix()
                    }
                }, {
                    key: "nationalPrefixTransformRule",
                    value: function () {
                        return this.country_metadata[this.v1 ? 6 : this.v2 ? 7 : 8]
                    }
                }, {
                    key: "_getNationalPrefixIsOptionalWhenFormatting",
                    value: function () {
                        return !!this.country_metadata[this.v1 ? 7 : this.v2 ? 8 : 9]
                    }
                }, {
                    key: "nationalPrefixIsOptionalWhenFormatting",
                    value: function () {
                        return this._getNationalPrefixIsOptionalWhenFormatting(this.country_metadata) || this._getNationalPrefixIsOptionalWhenFormatting(this.getDefaultCountryMetadataForRegion())
                    }
                }, {
                    key: "leadingDigits",
                    value: function () {
                        return this.country_metadata[this.v1 ? 8 : this.v2 ? 9 : 10]
                    }
                }, {
                    key: "types",
                    value: function () {
                        return this.country_metadata[this.v1 ? 9 : this.v2 ? 10 : 11]
                    }
                }, {
                    key: "hasTypes",
                    value: function () {
                        return (!this.types() || 0 !== this.types().length) && !!this.types()
                    }
                }, {
                    key: "type",
                    value: function (d) {
                        if (this.hasTypes() && y(this.types(), d)) return new h(y(this.types(), d), this)
                    }
                }, {
                    key: "ext",
                    value: function () {
                        return this.v1 || this.v2 ? l : this.country_metadata[13] || l
                    }
                }, {
                    key: "countryCallingCodes",
                    value: function () {
                        return this.v1 ? this.metadata.country_phone_code_to_countries : this.metadata.country_calling_codes
                    }
                }, {
                    key: "chooseCountryByCountryCallingCode",
                    value: function (d) {
                        var t = this.countryCallingCodes()[d][0];
                        this.hasCountry(t) && this.country(t)
                    }
                }, {
                    key: "selectedCountry",
                    value: function () {
                        return this._country
                    }
                }]), d
            }();
        t.default = f;
        var c = function () {
                function d(t, e) {
                    u(this, d), this._format = t, this.metadata = e
                }

                return o(d, [{
                    key: "pattern",
                    value: function () {
                        return this._format[0]
                    }
                }, {
                    key: "format",
                    value: function () {
                        return this._format[1]
                    }
                }, {
                    key: "leadingDigitsPatterns",
                    value: function () {
                        return this._format[2] || []
                    }
                }, {
                    key: "nationalPrefixFormattingRule",
                    value: function () {
                        return this._format[3] || this.metadata.nationalPrefixFormattingRule()
                    }
                }, {
                    key: "nationalPrefixIsOptionalWhenFormatting",
                    value: function () {
                        return !!this._format[4] || this.metadata.nationalPrefixIsOptionalWhenFormatting()
                    }
                }, {
                    key: "nationalPrefixIsMandatoryWhenFormatting",
                    value: function () {
                        return this.usesNationalPrefix() && !this.nationalPrefixIsOptionalWhenFormatting()
                    }
                }, {
                    key: "usesNationalPrefix",
                    value: function () {
                        return this.nationalPrefixFormattingRule() && "$1" !== this.nationalPrefixFormattingRule() && /\d/.test(this.nationalPrefixFormattingRule().replace("$1", ""))
                    }
                }, {
                    key: "internationalFormat",
                    value: function () {
                        return this._format[5] || this.format()
                    }
                }]), d
            }(),
            h = function () {
                function d(t, e) {
                    u(this, d), this.type = t, this.metadata = e
                }

                return o(d, [{
                    key: "pattern",
                    value: function () {
                        return this.metadata.v1 ? this.type : this.type[0]
                    }
                }, {
                    key: "possibleLengths",
                    value: function () {
                        if (!this.metadata.v1) return this.type[1] || this.metadata.possibleLengths()
                    }
                }]), d
            }();

        function y(d, t) {
            switch (t) {
                case"FIXED_LINE":
                    return d[0];
                case"MOBILE":
                    return d[1];
                case"TOLL_FREE":
                    return d[2];
                case"PREMIUM_RATE":
                    return d[3];
                case"PERSONAL_NUMBER":
                    return d[4];
                case"VOICEMAIL":
                    return d[5];
                case"UAN":
                    return d[6];
                case"PAGER":
                    return d[7];
                case"VOIP":
                    return d[8];
                case"SHARED_COST":
                    return d[9]
            }
        }

        function m(d) {
            if (!d) throw new Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");
            if (!v(d) || !v(d.countries) || !v(d.country_calling_codes) && !v(d.country_phone_code_to_countries)) throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` and `.country_calling_codes` child object properties. Got " + (v(d) ? "an object of shape: { " + Object.keys(d).join(", ") + " }" : "a " + p(d) + ": " + d) + ".")
        }

        var v = function (d) {
                return "object" === (void 0 === d ? "undefined" : a(d))
            },
            p = function (d) {
                return void 0 === d ? "undefined" : a(d)
            }
    }, function (d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        t.MIN_LENGTH_FOR_NSN = 2, t.MAX_LENGTH_FOR_NSN = 17, t.MAX_LENGTH_COUNTRY_CODE = 3, t.VALID_DIGITS = "0-9０-９٠-٩۰-۹";
        var r = t.WHITESPACE = "  ­​⁠　";
        t.VALID_PUNCTUATION = "-‐-―−ー－／/．." + r + "()（）［］\\[\\]~⁓∼～", t.PLUS_CHARS = "+＋"
    }, function (d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (d) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                e = arguments[2];
            if (!d.country) return;
            if (!(e = new $.default(e)).hasCountry(d.country)) throw new Error("Unknown country: " + d.country);
            var r = t.v2 ? d.nationalNumber : d.phone;
            if (e.country(d.country), !(0, i.matchesEntirely)(r, e.nationalNumberPattern())) return;
            if (o(r, "FIXED_LINE", e)) return e.type("MOBILE") && "" === e.type("MOBILE").pattern() ? "FIXED_LINE_OR_MOBILE" : e.type("MOBILE") ? o(r, "MOBILE", e) ? "FIXED_LINE_OR_MOBILE" : "FIXED_LINE" : "FIXED_LINE_OR_MOBILE";
            for (var n = a, u = Array.isArray(n), s = 0, n = u ? n : n[Symbol.iterator](); ;) {
                var l;
                if (u) {
                    if (s >= n.length) break;
                    l = n[s++]
                } else {
                    if ((s = n.next()).done) break;
                    l = s.value
                }
                var f = l;
                if (o(r, f, e)) return f
            }
        }, t.is_of_type = o, t.checkNumberLengthForType = function d(t, e, r) {
            var n = r.type(e);
            var $ = n && n.possibleLengths() || r.possibleLengths();
            if ("FIXED_LINE_OR_MOBILE" === e) {
                if (!r.type("FIXED_LINE")) return d(t, "MOBILE", r);
                var a = r.type("MOBILE");
                a && ($ = (0, i.mergeArrays)($, a.possibleLengths()))
            } else if (e && !n) return "INVALID_LENGTH";
            var o = t.length;
            var u = $[0];
            if (u === o) return "IS_POSSIBLE";
            if (u > o) return "TOO_SHORT";
            if ($[$.length - 1] < o) return "TOO_LONG";
            return $.indexOf(o, 1) >= 0 ? "IS_POSSIBLE" : "INVALID_LENGTH"
        };
        var r,
            n = e(0),
            $ = (r = n) && r.__esModule ? r : {default: r},
            i = e(3);
        var a = ["MOBILE", "PREMIUM_RATE", "TOLL_FREE", "SHARED_COST", "VOIP", "PERSONAL_NUMBER", "PAGER", "UAN", "VOICEMAIL"];

        function o(d, t, e) {
            return !(!(t = e.type(t)) || !t.pattern()) && (!(t.possibleLengths() && t.possibleLengths().indexOf(d.length) < 0) && (0, i.matchesEntirely)(d, t.pattern()))
        }
    }, function (d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.matchesEntirely = function () {
            var d = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = arguments[1];
            return new RegExp("^(?:" + t + ")$").test(d)
        }, t.mergeArrays = function (d, t) {
            for (var e = d.slice(), r = t, n = Array.isArray(r), $ = 0, r = n ? r : r[Symbol.iterator](); ;) {
                var i;
                if (n) {
                    if ($ >= r.length) break;
                    i = r[$++]
                } else {
                    if (($ = r.next()).done) break;
                    i = $.value
                }
                var a = i;
                d.indexOf(a) < 0 && e.push(a)
            }
            return e.sort(function (d, t) {
                return d - t
            })
        }
    }, function (d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.limit = function (d, t) {
            if (d < 0 || t <= 0 || t < d) throw new TypeError;
            return "{" + d + "," + t + "}"
        }, t.trimAfterFirstMatch = function (d, t) {
            var e = t.search(d);
            if (e >= 0) return t.slice(0, e);
            return t
        }, t.startsWith = function (d, t) {
            return 0 === d.indexOf(t)
        }, t.endsWith = function (d, t) {
            return d.indexOf(t, d.length - t.length) === d.length - t.length
        }
    }, function (d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = o(e(0)),
            n = o(e(19)),
            $ = o(e(8)),
            i = (o(e(36)), o(e(2))),
            a = o(e(17));

        function o(d) {
            return d && d.__esModule ? d : {default: d}
        }

        var u = Object.assign || function (d) {
                for (var t = 1; t < arguments.length; t++) {
                    var e = arguments[t];
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (d[r] = e[r])
                }
                return d
            },
            s = function () {
                function d(d, t) {
                    for (var e = 0; e < t.length; e++) {
                        var r = t[e];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(d, r.key, r)
                    }
                }

                return function (t, e, r) {
                    return e && d(t.prototype, e), r && d(t, r), t
                }
            }();
        var l = function () {
            function d(t, e, n) {
                if (function (d, t) {
                    if (!(d instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, d), !t) throw new TypeError("`countryCallingCode` not passed");
                if (!e) throw new TypeError("`nationalNumber` not passed");
                if (f(t)) {
                    this.country = t;
                    var $ = new r.default(n);
                    $.country(t), t = $.countryCallingCode()
                }
                this.countryCallingCode = t, this.nationalNumber = e, this.number = "+" + this.countryCallingCode + this.nationalNumber, this.metadata = n
            }

            return s(d, [{
                key: "isPossible",
                value: function () {
                    return (0, n.default)(this, {v2: !0}, this.metadata)
                }
            }, {
                key: "isValid",
                value: function () {
                    return (0, $.default)(this, {v2: !0}, this.metadata)
                }
            }, {
                key: "getType",
                value: function () {
                    return (0, i.default)(this, {v2: !0}, this.metadata)
                }
            }, {
                key: "format",
                value: function (d, t) {
                    return (0, a.default)(this, d, t ? u({}, t, {v2: !0}) : {v2: !0}, this.metadata)
                }
            }, {
                key: "formatNational",
                value: function (d) {
                    return this.format("NATIONAL", d)
                }
            }, {
                key: "formatInternational",
                value: function (d) {
                    return this.format("INTERNATIONAL", d)
                }
            }, {
                key: "getURI",
                value: function (d) {
                    return this.format("RFC3966", d)
                }
            }]), d
        }();
        t.default = l;
        var f = function (d) {
            return /^[A-Z]{2}$/.test(d)
        }
    }, function (d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (d) {
            return typeof d
        } : function (d) {
            return d && "function" == typeof Symbol && d.constructor === Symbol && d !== Symbol.prototype ? "symbol" : typeof d
        };
        t.default = function () {
            var d = s(arguments),
                t = d.text,
                e = d.options,
                r = d.metadata;
            return (0, i.default)(t, e, r)
        }, t.normalizeArguments = s;
        var n,
            $ = e(21),
            i = (n = $) && n.__esModule ? n : {default: n};
        var a = "function" == typeof Symbol && "symbol" === r(Symbol.iterator) ? function (d) {
                return void 0 === d ? "undefined" : r(d)
            } : function (d) {
                return d && "function" == typeof Symbol && d.constructor === Symbol && d !== Symbol.prototype ? "symbol" : void 0 === d ? "undefined" : r(d)
            },
            o = Object.assign || function (d) {
                for (var t = 1; t < arguments.length; t++) {
                    var e = arguments[t];
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (d[r] = e[r])
                }
                return d
            },
            u = function () {
                return function (d, t) {
                    if (Array.isArray(d)) return d;
                    if (Symbol.iterator in Object(d)) return function (d, t) {
                        var e = [],
                            r = !0,
                            n = !1,
                            $ = void 0;
                        try {
                            for (var i, a = d[Symbol.iterator](); !(r = (i = a.next()).done) && (e.push(i.value), !t || e.length !== t); r = !0) ;
                        } catch (d) {
                            n = !0, $ = d
                        } finally {
                            try {
                                !r && a.return && a.return()
                            } finally {
                                if (n) throw $
                            }
                        }
                        return e
                    }(d, t);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }();

        function s(d) {
            var t = Array.prototype.slice.call(d),
                e = u(t, 4),
                r = e[0],
                n = e[1],
                $ = e[2],
                i = e[3],
                a = void 0,
                s = void 0,
                f = void 0;
            if ("string" != typeof r) throw new TypeError("A text for parsing must be a string.");
            if (a = r, n && "string" != typeof n) {
                if (!l(n)) throw new Error("Invalid second argument: " + n);
                $ ? (s = n, f = $) : f = n
            } else i ? (s = $, f = i) : (s = void 0, f = $), n && (s = o({defaultCountry: n}, s));
            return {
                text: a,
                options: s,
                metadata: f
            }
        }

        var l = function (d) {
            return "object" === (void 0 === d ? "undefined" : a(d))
        }
    }, function (d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = m(e(5)),
            n = e(1),
            $ = e(12),
            i = m(e(31)),
            a = e(4),
            o = e(16),
            u = m(e(29)),
            s = m(e(28)),
            l = m(e(27)),
            f = e(26),
            c = m(f),
            h = e(0),
            y = m(e(13));

        function m(d) {
            return d && d.__esModule ? d : {default: d}
        }

        var v = Object.assign || function (d) {
                for (var t = 1; t < arguments.length; t++) {
                    var e = arguments[t];
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (d[r] = e[r])
                }
                return d
            },
            p = function () {
                function d(d, t) {
                    for (var e = 0; e < t.length; e++) {
                        var r = t[e];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(d, r.key, r)
                    }
                }

                return function (t, e, r) {
                    return e && d(t.prototype, e), r && d(t, r), t
                }
            }();
        var _ = ["\\/+(.*)/", "(\\([^(]*)", "(?:" + o.pZ + "-|-" + o.pZ + ")" + o.pZ + "*(.+)", "[‒-―－]" + o.pZ + "*(.+)", "\\.+" + o.pZ + "*([^.]+)", o.pZ + "+(" + o.PZ + "+)"],
            g = (0, a.limit)(0, 2),
            b = (0, a.limit)(0, 4),
            C = n.MAX_LENGTH_FOR_NSN + n.MAX_LENGTH_COUNTRY_CODE,
            N = (0, a.limit)(0, C),
            P = "[" + n.VALID_PUNCTUATION + "]" + b,
            O = o.pNd + (0, a.limit)(1, C),
            x = "(?:" + f.LEAD_CLASS + P + ")" + g + O + "(?:" + P + O + ")" + N + "(?:" + $.EXTN_PATTERNS_FOR_MATCHING + ")?",
            I = new RegExp("[^" + o._pN + o._pL + "#]+$"),
            E = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1,
            A = function () {
                function d() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = arguments[2];
                    if (function (d, t) {
                        if (!(d instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, d), this.state = "NOT_READY", this.searchIndex = 0, this.regExpCache = new i.default(32), !(e = v({}, e, {
                        defaultCountry: e.defaultCountry && (0, h.isSupportedCountry)(e.defaultCountry, r) ? e.defaultCountry : void 0,
                        leniency: e.leniency || e.extended ? "POSSIBLE" : "VALID",
                        maxTries: e.maxTries || E
                    })).leniency) throw new TypeError("`Leniency` not supplied");
                    if (e.maxTries < 0) throw new TypeError("`maxTries` not supplied");
                    if (this.text = t, this.options = e, this.metadata = r, this.leniency = u.default[e.leniency], !this.leniency) throw new TypeError("Unknown leniency: " + e.leniency + ".");
                    this.maxTries = e.maxTries, this.PATTERN = new RegExp(x, "ig")
                }

                return p(d, [{
                    key: "find",
                    value: function () {
                        for (var d = void 0; this.maxTries > 0 && null !== (d = this.PATTERN.exec(this.text));) {
                            var t = d[0],
                                e = d.index;
                            if (t = (0, s.default)(t), (0, l.default)(t, e, this.text)) {
                                var n = this.parseAndVerify(t, e, this.text) || this.extractInnerMatch(t, e, this.text);
                                if (n) {
                                    if (this.options.v2) {
                                        var $ = new r.default(n.country, n.phone, this.metadata);
                                        return n.ext && ($.ext = n.ext), {
                                            startsAt: n.startsAt,
                                            endsAt: n.endsAt,
                                            number: $
                                        }
                                    }
                                    return n
                                }
                            }
                            this.maxTries--
                        }
                    }
                }, {
                    key: "extractInnerMatch",
                    value: function (d, t, e) {
                        var r = _,
                            n = Array.isArray(r),
                            $ = 0;
                        for (r = n ? r : r[Symbol.iterator](); ;) {
                            var i;
                            if (n) {
                                if ($ >= r.length) break;
                                i = r[$++]
                            } else {
                                if (($ = r.next()).done) break;
                                i = $.value
                            }
                            for (var o = !0, u = void 0, s = new RegExp(i, "g"); null !== (u = s.exec(d)) && this.maxTries > 0;) {
                                if (o) {
                                    var l = (0, a.trimAfterFirstMatch)(I, d.slice(0, u.index)),
                                        f = this.parseAndVerify(l, t, e);
                                    if (f) return f;
                                    this.maxTries--, o = !1
                                }
                                var c = (0, a.trimAfterFirstMatch)(I, u[1]),
                                    h = this.parseAndVerify(c, t + u.index, e);
                                if (h) return h;
                                this.maxTries--
                            }
                        }
                    }
                }, {
                    key: "parseAndVerify",
                    value: function (d, t, e) {
                        if ((0, c.default)(d, t, e, this.options.leniency)) {
                            var r = (0, y.default)(d, {
                                extended: !0,
                                defaultCountry: this.options.defaultCountry
                            }, this.metadata);
                            if (r.possible && this.leniency(r, d, this.metadata, this.regExpCache)) {
                                var n = {
                                    startsAt: t,
                                    endsAt: t + d.length,
                                    country: r.country,
                                    phone: r.phone
                                };
                                return r.ext && (n.ext = r.ext), n
                            }
                        }
                    }
                }, {
                    key: "hasNext",
                    value: function () {
                        return "NOT_READY" === this.state && (this.lastMatch = this.find(), this.lastMatch ? this.state = "READY" : this.state = "DONE"), "READY" === this.state
                    }
                }, {
                    key: "next",
                    value: function () {
                        if (!this.hasNext()) throw new Error("No next element");
                        var d = this.lastMatch;
                        return this.lastMatch = null, this.state = "NOT_READY", d
                    }
                }]), d
            }();
        t.default = A
    }, function (d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (d) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                e = arguments[2];
            if (e = new r.default(e), !d.country) return !1;
            if (!e.hasCountry(d.country)) throw new Error("Unknown country: " + d.country);
            if (e.country(d.country), e.hasTypes()) return void 0 !== (0, $.default)(d, t, e.metadata);
            var i = t.v2 ? d.nationalNumber : d.phone;
            return (0, n.matchesEntirely)(i, e.nationalNumberPattern())
        };
        var r = i(e(0)),
            n = e(3),
            $ = i(e(2));

        function i(d) {
            return d && d.__esModule ? d : {default: d}
        }
    }, function (d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.parseRFC3966 = function (d) {
            for (var t = void 0, e = void 0, r = (d = d.replace(/^tel:/, "tel=")).split(";"), n = Array.isArray(r), a = 0, r = n ? r : r[Symbol.iterator](); ;) {
                var o;
                if (n) {
                    if (a >= r.length) break;
                    o = r[a++]
                } else {
                    if ((a = r.next()).done) break;
                    o = a.value
                }
                var u = o,
                    s = u.split("="),
                    l = i(s, 2),
                    f = l[0],
                    c = l[1];
                switch (f) {
                    case"tel":
                        t = c;
                        break;
                    case"ext":
                        e = c;
                        break;
                    case"phone-context":
                        "+" === c[0] && (t = c + t)
                }
            }
            if (!(0, $.default)(t)) return {};
            var h = {number: t};
            e && (h.ext = e);
            return h
        }, t.formatRFC3966 = function (d) {
            var t = d.number,
                e = d.ext;
            if (!t) return "";
            if ("+" !== t[0]) throw new Error('"formatRFC3966()" expects "number" to be in E.164 format.');
            return "tel:" + t + (e ? ";ext=" + e : "")
        };
        var r,
            n = e(20),
            $ = (r = n) && r.__esModule ? r : {default: r};
        var i = function () {
            return function (d, t) {
                if (Array.isArray(d)) return d;
                if (Symbol.iterator in Object(d)) return function (d, t) {
                    var e = [],
                        r = !0,
                        n = !1,
                        $ = void 0;
                    try {
                        for (var i, a = d[Symbol.iterator](); !(r = (i = a.next()).done) && (e.push(i.value), !t || e.length !== t); r = !0) ;
                    } catch (d) {
                        n = !0, $ = d
                    } finally {
                        try {
                            !r && a.return && a.return()
                        } finally {
                            if (n) throw $
                        }
                    }
                    return e
                }(d, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }()
    }, function (d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.parseDigit = n, t.default = function (d) {
            for (var t = "", e = d.split(""), r = Array.isArray(e), $ = 0, e = r ? e : e[Symbol.iterator](); ;) {
                var i;
                if (r) {
                    if ($ >= e.length) break;
                    i = e[$++]
                } else {
                    if (($ = e.next()).done) break;
                    i = $.value
                }
                var a = i,
                    o = n(a);
                o && (t += o)
            }
            return t
        };
        var r = t.DIGITS = {
            0: "0",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            "０": "0",
            "１": "1",
            "２": "2",
            "３": "3",
            "４": "4",
            "５": "5",
            "６": "6",
            "７": "7",
            "８": "8",
            "９": "9",
            "٠": "0",
            "١": "1",
            "٢": "2",
            "٣": "3",
            "٤": "4",
            "٥": "5",
            "٦": "6",
            "٧": "7",
            "٨": "8",
            "٩": "9",
            "۰": "0",
            "۱": "1",
            "۲": "2",
            "۳": "3",
            "۴": "4",
            "۵": "5",
            "۶": "6",
            "۷": "7",
            "۸": "8",
            "۹": "9"
        };

        function n(d) {
            return r[d]
        }
    }, function (d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (d) {
            for (var t = "", e = d.split(""), r = Array.isArray(e), $ = 0, e = r ? e : e[Symbol.iterator](); ;) {
                var i;
                if (r) {
                    if ($ >= e.length) break;
                    i = e[$++]
                } else {
                    if (($ = e.next()).done) break;
                    i = $.value
                }
                var a = i;
                t += n(a, t) || ""
            }
            return t
        }, t.parsePhoneNumberCharacter = n;
        var r = e(10);

        function n(d, t) {
            if ("+" === d) {
                if (t) return;
                return "+"
            }
            return (0, r.parseDigit)(d)
        }
    }, function (d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.EXTN_PATTERNS_FOR_MATCHING = t.EXTN_PATTERNS_FOR_PARSING = void 0, t.extractExtension = function (d) {
            var t = d.search(o);
            if (t < 0) return {};
            var e = d.slice(0, t),
                r = d.match(o),
                n = 1;
            for (; n < r.length;) {
                if (null != r[n] && r[n].length > 0) return {
                    number: e,
                    ext: r[n]
                };
                n++
            }
        };
        var r = e(1),
            n = ";ext=",
            $ = "([" + r.VALID_DIGITS + "]{1,7})";

        function i(d) {
            var t = "xｘ#＃~～";
            switch (d) {
                case"parsing":
                    t = ",;" + t
            }
            return n + $ + "|[  \\t,]*(?:e?xt(?:ensi(?:ó?|ó))?n?|ｅ?ｘｔｎ?|доб|[" + t + "]|int|anexo|ｉｎｔ)[:\\.．]?[  \\t,-]*" + $ + "#?|[- ]+([" + r.VALID_DIGITS + "]{1,5})#"
        }

        var a = t.EXTN_PATTERNS_FOR_PARSING = i("parsing"),
            o = (t.EXTN_PATTERNS_FOR_MATCHING = i("matching"), new RegExp("(?:" + a + ")$", "i"))
    }, function (d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (d) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                e = arguments[2];
            if (e = new i.default(e), t.defaultCountry && !e.hasCountry(t.defaultCountry)) {
                if (t.v2) throw new $.default("INVALID_COUNTRY");
                throw new Error("Unknown country: " + t.defaultCountry)
            }
            var f = function (d, t) {
                    if (d && 0 === d.indexOf("tel:")) return (0, y.parseRFC3966)(d);
                    var e = b(d, t);
                    if (!e || !(0, a.default)(e)) return {};
                    var r = (0, o.extractExtension)(e);
                    if (r.ext) return r;
                    return {number: e}
                }(d, t.v2),
                h = f.number,
                v = f.ext;
            if (!h) {
                if (t.v2) throw new $.default("NOT_A_NUMBER");
                return {}
            }
            var p = function (d, t, e) {
                    var r = P(d, t, e.metadata),
                        $ = r.countryCallingCode,
                        i = r.number;
                    if (!i) return {countryCallingCode: $};
                    var a = void 0;
                    if ($) e.chooseCountryByCountryCallingCode($); else {
                        if (!t) return {};
                        e.country(t), a = t, $ = (0, s.default)(t, e.metadata)
                    }
                    var o = function (d, t) {
                            var e = (0, u.default)(d),
                                r = void 0,
                                $ = C(e, t),
                                i = $.number,
                                a = $.carrierCode;
                            if (t.possibleLengths()) switch ((0, l.checkNumberLengthForType)(i, void 0, t)) {
                                case"TOO_SHORT":
                                case"INVALID_LENGTH":
                                    break;
                                default:
                                    e = i, r = a
                            } else (0, n.matchesEntirely)(e, t.nationalNumberPattern()) && !(0, n.matchesEntirely)(i, t.nationalNumberPattern()) || (e = i, r = a);
                            return {
                                national_number: e,
                                carrier_code: r
                            }
                        }(i, e),
                        f = o.national_number,
                        c = o.carrier_code,
                        h = N($, f, e);
                    h && (a = h, e.country(a));
                    return {
                        country: a,
                        countryCallingCode: $,
                        national_number: f,
                        carrierCode: c
                    }
                }(h, t.defaultCountry, e),
                _ = p.country,
                g = p.national_number,
                O = p.countryCallingCode,
                x = p.carrierCode;
            if (!e.selectedCountry()) {
                if (t.v2) throw new $.default("INVALID_COUNTRY");
                return {}
            }
            if (g.length < r.MIN_LENGTH_FOR_NSN) {
                if (t.v2) throw new $.default("TOO_SHORT");
                return {}
            }
            if (g.length > r.MAX_LENGTH_FOR_NSN) {
                if (t.v2) throw new $.default("TOO_LONG");
                return {}
            }
            if (t.v2) {
                var I = new m.default(O, g, e.metadata);
                return _ && (I.country = _), x && (I.carrierCode = x), v && (I.ext = v), I
            }
            var E = !(!_ || !(0, n.matchesEntirely)(g, e.nationalNumberPattern()));
            if (!t.extended) return E ? function (d, t, e) {
                var r = {
                    country: d,
                    phone: t
                };
                e && (r.ext = e);
                return r
            }(_, g, v) : {};
            return {
                country: _,
                countryCallingCode: O,
                carrierCode: x,
                valid: E,
                possible: !!E || !0 === t.extended && e.possibleLengths() && (0, c.is_possible_number)(g, void 0 !== O, e),
                phone: g,
                ext: v
            }
        }, t.extract_formatted_phone_number = b, t.strip_national_prefix_and_carrier_code = C, t.find_country_code = N, t.extractCountryCallingCode = P;
        var r = e(1),
            n = e(3),
            $ = v(e(14)),
            i = v(e(0)),
            a = v(e(20)),
            o = e(12),
            u = v(e(11)),
            s = v(e(37)),
            l = e(2),
            f = v(l),
            c = e(19),
            h = e(18),
            y = e(9),
            m = v(e(5));

        function v(d) {
            return d && d.__esModule ? d : {default: d}
        }

        var p = 250,
            _ = new RegExp("[" + r.PLUS_CHARS + r.VALID_DIGITS + "]"),
            g = new RegExp("[^" + r.VALID_DIGITS + "]+$");

        function b(d, t) {
            if (d) if (d.length > p) {
                if (t) throw new $.default("TOO_LONG")
            } else {
                var e = d.search(_);
                if (!(e < 0)) return d.slice(e).replace(g, "")
            }
        }

        function C(d, t) {
            if (!d || !t.nationalPrefixForParsing()) return {number: d};
            var e = new RegExp("^(?:" + t.nationalPrefixForParsing() + ")"),
                r = e.exec(d);
            if (!r) return {number: d};
            var n = void 0,
                $ = r.length - 1;
            if (t.nationalPrefixTransformRule() && r[$]) n = d.replace(e, t.nationalPrefixTransformRule()); else {
                var i = r[0];
                n = d.slice(i.length)
            }
            var a = void 0;
            return $ > 0 && (a = r[1]), {
                number: n,
                carrierCode: a
            }
        }

        function N(d, t, e) {
            var r = e.countryCallingCodes()[d];
            return 1 === r.length ? r[0] : function (d, t, e) {
                e = new i.default(e);
                for (var r = d, n = Array.isArray(r), $ = 0, r = n ? r : r[Symbol.iterator](); ;) {
                    var a;
                    if (n) {
                        if ($ >= r.length) break;
                        a = r[$++]
                    } else {
                        if (($ = r.next()).done) break;
                        a = $.value
                    }
                    var o = a;
                    if (e.country(o), e.leadingDigits()) {
                        if (t && 0 === t.search(e.leadingDigits())) return o
                    } else if ((0, f.default)({
                        phone: t,
                        country: o
                    }, void 0, e.metadata)) return o
                }
            }(r, t, e.metadata)
        }

        function P(d, t, e) {
            if (!(d = (0, u.default)(d))) return {};
            if ("+" !== d[0]) {
                var n = (0, h.stripIDDPrefix)(d, t, e);
                if (!n || n === d) return {number: d};
                d = "+" + n
            }
            if ("0" === d[1]) return {};
            e = new i.default(e);
            for (var $ = 2; $ - 1 <= r.MAX_LENGTH_COUNTRY_CODE && $ <= d.length;) {
                var a = d.slice(1, $);
                if (e.countryCallingCodes()[a]) return {
                    countryCallingCode: a,
                    number: d.slice($)
                };
                $++
            }
            return {}
        }
    }, function (d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = function d(t) {
            !function (d, t) {
                if (!(d instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, d), this.name = this.constructor.name, this.message = t, this.stack = new Error(t).stack
        };
        t.default = r, (r.prototype = Object.create(Error.prototype)).constructor = r
    }, function (d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.DIGIT_PLACEHOLDER = void 0, t.strip_dangling_braces = C, t.cut_stripping_dangling_braces = N, t.close_dangling_braces = function (d, t) {
            var e = d.slice(0, t),
                r = P("(", e),
                n = P(")", e),
                $ = r - n;
            for (; $ > 0 && t < d.length;) ")" === d[t] && $--, t++;
            return d.slice(0, t)
        }, t.count_occurences = P, t.repeat = O;
        var r = l(e(0)),
            n = l(e(5)),
            $ = e(1),
            i = e(3),
            a = e(13),
            o = e(17),
            u = e(2),
            s = l(e(11));

        function l(d) {
            return d && d.__esModule ? d : {default: d}
        }

        var f = function () {
            function d(d, t) {
                for (var e = 0; e < t.length; e++) {
                    var r = t[e];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(d, r.key, r)
                }
            }

            return function (t, e, r) {
                return e && d(t.prototype, e), r && d(t, r), t
            }
        }();
        var c = O("9", 15),
            h = t.DIGIT_PLACEHOLDER = "x",
            y = new RegExp(h),
            m = function () {
                return /\[([^\[\]])*\]/g
            },
            v = function () {
                return /\d(?=[^,}][^,}])/g
            },
            p = new RegExp("^[" + $.VALID_PUNCTUATION + "]*(\\$\\d[" + $.VALID_PUNCTUATION + "]*)+$"),
            _ = "[" + $.PLUS_CHARS + "]{0,1}[" + $.VALID_PUNCTUATION + $.VALID_DIGITS + "]*",
            g = new RegExp("^" + _ + "$", "i"),
            b = function () {
                function d(t, e) {
                    !function (d, t) {
                        if (!(d instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, d), this.options = {}, this.metadata = new r.default(e), t && this.metadata.hasCountry(t) && (this.defaultCountry = t), this.reset()
                }

                return f(d, [{
                    key: "input",
                    value: function (d) {
                        var t = (0, a.extract_formatted_phone_number)(d) || "";
                        return t || d && d.indexOf("+") >= 0 && (t = "+"), g.test(t) ? this.processInput((0, s.default)(t)) : this.currentOutput
                    }
                }, {
                    key: "processInput",
                    value: function (d) {
                        if ("+" === d[0] && (this.parsedInput || (this.parsedInput += "+", this.resetCountriness()), d = d.slice(1)), this.parsedInput += d, this.nationalNumber += d, this.isInternational()) if (this.countryCallingCode) this.country || this.determineTheCountry(); else {
                            if (!this.nationalNumber) return this.parsedInput;
                            if (!this.extractCountryCallingCode()) return this.parsedInput;
                            this.initialize_phone_number_formats_for_this_country_calling_code(), this.resetFormat(), this.determineTheCountry()
                        } else {
                            var t = this.nationalPrefix;
                            this.nationalNumber = this.nationalPrefix + this.nationalNumber, this.extractNationalPrefix(), this.nationalPrefix !== t && (this.matching_formats = void 0, this.resetFormat())
                        }
                        if (!this.nationalNumber) return this.format_as_non_formatted_number();
                        this.match_formats_by_leading_digits();
                        var e = this.formatNationalNumber(d);
                        return e ? this.formatFullNumber(e) : this.format_as_non_formatted_number()
                    }
                }, {
                    key: "format_as_non_formatted_number",
                    value: function () {
                        return this.isInternational() && this.countryCallingCode ? "+" + this.countryCallingCode + this.nationalNumber : this.parsedInput
                    }
                }, {
                    key: "formatNationalNumber",
                    value: function (d) {
                        var t = void 0;
                        this.chosenFormat && (t = this.formatNextNationalNumberDigits(d));
                        var e = this.attempt_to_format_complete_phone_number();
                        return e || (this.chooseAnotherFormat() ? this.reformatNationalNumber() : t)
                    }
                }, {
                    key: "reset",
                    value: function () {
                        return this.parsedInput = "", this.currentOutput = "", this.nationalPrefix = "", this.nationalNumber = "", this.carrierCode = "", this.resetCountriness(), this.resetFormat(), this
                    }
                }, {
                    key: "resetCountry",
                    value: function () {
                        this.isInternational() ? this.country = void 0 : this.country = this.defaultCountry
                    }
                }, {
                    key: "resetCountriness",
                    value: function () {
                        this.resetCountry(), this.defaultCountry && !this.isInternational() ? (this.metadata.country(this.defaultCountry), this.countryCallingCode = this.metadata.countryCallingCode(), this.initialize_phone_number_formats_for_this_country_calling_code()) : (this.metadata.country(void 0), this.countryCallingCode = void 0, this.available_formats = [], this.matching_formats = void 0)
                    }
                }, {
                    key: "resetFormat",
                    value: function () {
                        this.chosenFormat = void 0, this.template = void 0, this.partially_populated_template = void 0, this.last_match_position = -1
                    }
                }, {
                    key: "reformatNationalNumber",
                    value: function () {
                        return this.formatNextNationalNumberDigits(this.nationalNumber)
                    }
                }, {
                    key: "initialize_phone_number_formats_for_this_country_calling_code",
                    value: function () {
                        this.available_formats = this.metadata.formats().filter(function (d) {
                            return p.test(d.internationalFormat())
                        }), this.matching_formats = void 0
                    }
                }, {
                    key: "match_formats_by_leading_digits",
                    value: function () {
                        var d = this.nationalNumber,
                            t = d.length - 3;
                        t < 0 && (t = 0);
                        var e = this.had_enough_leading_digits && this.matching_formats || this.available_formats;
                        this.had_enough_leading_digits = this.shouldFormat(), this.matching_formats = e.filter(function (e) {
                            var r = e.leadingDigitsPatterns().length;
                            if (0 === r) return !0;
                            var n = Math.min(t, r - 1),
                                $ = e.leadingDigitsPatterns()[n];
                            return new RegExp("^(" + $ + ")").test(d)
                        }), this.chosenFormat && -1 === this.matching_formats.indexOf(this.chosenFormat) && this.resetFormat()
                    }
                }, {
                    key: "shouldFormat",
                    value: function () {
                        return this.nationalNumber.length >= 3
                    }
                }, {
                    key: "attempt_to_format_complete_phone_number",
                    value: function () {
                        var d = this.matching_formats,
                            t = Array.isArray(d),
                            e = 0;
                        for (d = t ? d : d[Symbol.iterator](); ;) {
                            var r;
                            if (t) {
                                if (e >= d.length) break;
                                r = d[e++]
                            } else {
                                if ((e = d.next()).done) break;
                                r = e.value
                            }
                            var n = r;
                            if (new RegExp("^(?:" + n.pattern() + ")$").test(this.nationalNumber) && this.isFormatApplicable(n)) {
                                this.resetFormat(), this.chosenFormat = n;
                                var $ = (0, o.format_national_number_using_format)(this.nationalNumber, n, this.isInternational(), "" !== this.nationalPrefix, this.metadata);
                                if (this.nationalPrefix && "1" === this.countryCallingCode && ($ = "1 " + $), this.createFormattingTemplate(n)) this.reformatNationalNumber(); else {
                                    var i = this.formatFullNumber($);
                                    this.template = i.replace(/[\d\+]/g, h), this.partially_populated_template = i
                                }
                                return $
                            }
                        }
                    }
                }, {
                    key: "formatFullNumber",
                    value: function (d) {
                        return this.isInternational() ? "+" + this.countryCallingCode + " " + d : d
                    }
                }, {
                    key: "extractCountryCallingCode",
                    value: function () {
                        var d = (0, a.extractCountryCallingCode)(this.parsedInput, this.defaultCountry, this.metadata.metadata),
                            t = d.countryCallingCode,
                            e = d.number;
                        if (t) return this.countryCallingCode = t, this.nationalNumber = e, this.metadata.chooseCountryByCountryCallingCode(t), void 0 !== this.metadata.selectedCountry()
                    }
                }, {
                    key: "extractNationalPrefix",
                    value: function () {
                        if (this.nationalPrefix = "", this.metadata.selectedCountry()) {
                            var d = (0, a.strip_national_prefix_and_carrier_code)(this.nationalNumber, this.metadata),
                                t = d.number,
                                e = d.carrierCode;
                            if (e && (this.carrierCode = e), this.metadata.possibleLengths() && (!this.isPossibleNumber(this.nationalNumber) || this.isPossibleNumber(t)) || !(0, i.matchesEntirely)(this.nationalNumber, this.metadata.nationalNumberPattern()) || (0, i.matchesEntirely)(t, this.metadata.nationalNumberPattern())) return this.nationalPrefix = this.nationalNumber.slice(0, this.nationalNumber.length - t.length), this.nationalNumber = t, this.nationalPrefix
                        }
                    }
                }, {
                    key: "isPossibleNumber",
                    value: function (d) {
                        switch ((0, u.checkNumberLengthForType)(d, void 0, this.metadata)) {
                            case"IS_POSSIBLE":
                                return !0;
                            default:
                                return !1
                        }
                    }
                }, {
                    key: "chooseAnotherFormat",
                    value: function () {
                        var d = this.matching_formats,
                            t = Array.isArray(d),
                            e = 0;
                        for (d = t ? d : d[Symbol.iterator](); ;) {
                            var r;
                            if (t) {
                                if (e >= d.length) break;
                                r = d[e++]
                            } else {
                                if ((e = d.next()).done) break;
                                r = e.value
                            }
                            var n = r;
                            if (this.chosenFormat === n) return;
                            if (this.isFormatApplicable(n) && this.createFormattingTemplate(n)) return this.chosenFormat = n, this.last_match_position = -1, !0
                        }
                        this.resetCountry(), this.resetFormat()
                    }
                }, {
                    key: "isFormatApplicable",
                    value: function (d) {
                        return !(!this.isInternational() && !this.nationalPrefix && d.nationalPrefixIsMandatoryWhenFormatting()) && !(this.nationalPrefix && !d.usesNationalPrefix() && !d.nationalPrefixIsOptionalWhenFormatting())
                    }
                }, {
                    key: "createFormattingTemplate",
                    value: function (d) {
                        if (!(d.pattern().indexOf("|") >= 0)) {
                            var t = this.getTemplateForNumberFormatPattern(d);
                            if (t) return this.partially_populated_template = t, this.isInternational() ? this.template = h + O(h, this.countryCallingCode.length) + " " + t : this.template = t.replace(/\d/g, h), this.template
                        }
                    }
                }, {
                    key: "getTemplateForNumberFormatPattern",
                    value: function (d) {
                        var t = d.pattern();
                        t = t.replace(m(), "\\d").replace(v(), "\\d");
                        var e = c.match(t)[0];
                        if (!(this.nationalNumber.length > e.length)) {
                            var r = this.getFormatFormat(d),
                                n = new RegExp("^" + t + "$"),
                                $ = this.nationalNumber.replace(/\d/g, "9");
                            return n.test($) && (e = $), e.replace(new RegExp(t), r).replace(new RegExp("9", "g"), h)
                        }
                    }
                }, {
                    key: "formatNextNationalNumberDigits",
                    value: function (d) {
                        var t = d.split(""),
                            e = Array.isArray(t),
                            r = 0;
                        for (t = e ? t : t[Symbol.iterator](); ;) {
                            var n;
                            if (e) {
                                if (r >= t.length) break;
                                n = t[r++]
                            } else {
                                if ((r = t.next()).done) break;
                                n = r.value
                            }
                            var $ = n;
                            if (-1 === this.partially_populated_template.slice(this.last_match_position + 1).search(y)) return this.chosenFormat = void 0, this.template = void 0, void (this.partially_populated_template = void 0);
                            this.last_match_position = this.partially_populated_template.search(y), this.partially_populated_template = this.partially_populated_template.replace(y, $)
                        }
                        return N(this.partially_populated_template, this.last_match_position + 1)
                    }
                }, {
                    key: "isInternational",
                    value: function () {
                        return this.parsedInput && "+" === this.parsedInput[0]
                    }
                }, {
                    key: "getFormatFormat",
                    value: function (d) {
                        if (this.isInternational()) return (0, o.changeInternationalFormatStyle)(d.internationalFormat());
                        if (d.nationalPrefixFormattingRule()) {
                            if (this.nationalPrefix || !d.usesNationalPrefix()) return d.format().replace(o.FIRST_GROUP_PATTERN, d.nationalPrefixFormattingRule())
                        } else if ("1" === this.countryCallingCode && "1" === this.nationalPrefix) return "1 " + d.format();
                        return d.format()
                    }
                }, {
                    key: "determineTheCountry",
                    value: function () {
                        this.country = (0, a.find_country_code)(this.countryCallingCode, this.nationalNumber, this.metadata)
                    }
                }, {
                    key: "getNumber",
                    value: function () {
                        if (this.countryCallingCode && this.nationalNumber) {
                            var d = new n.default(this.country || this.countryCallingCode, this.nationalNumber, this.metadata.metadata);
                            return this.carrierCode && (d.carrierCode = this.carrierCode), d
                        }
                    }
                }, {
                    key: "getNationalNumber",
                    value: function () {
                        return this.nationalNumber
                    }
                }, {
                    key: "getTemplate",
                    value: function () {
                        if (this.template) {
                            for (var d = -1, t = 0; t < this.parsedInput.length;) d = this.template.indexOf(h, d + 1), t++;
                            return N(this.template, d + 1)
                        }
                    }
                }]), d
            }();

        function C(d) {
            for (var t = [], e = 0; e < d.length;) "(" === d[e] ? t.push(e) : ")" === d[e] && t.pop(), e++;
            var r = 0,
                n = "";
            t.push(d.length);
            var $ = t,
                i = Array.isArray($),
                a = 0;
            for ($ = i ? $ : $[Symbol.iterator](); ;) {
                var o;
                if (i) {
                    if (a >= $.length) break;
                    o = $[a++]
                } else {
                    if ((a = $.next()).done) break;
                    o = a.value
                }
                var u = o;
                n += d.slice(r, u), r = u + 1
            }
            return n
        }

        function N(d, t) {
            return ")" === d[t] && t++, C(d.slice(0, t))
        }

        function P(d, t) {
            var e = 0,
                r = t.split(""),
                n = Array.isArray(r),
                $ = 0;
            for (r = n ? r : r[Symbol.iterator](); ;) {
                var i;
                if (n) {
                    if ($ >= r.length) break;
                    i = r[$++]
                } else {
                    if (($ = r.next()).done) break;
                    i = $.value
                }
                i === d && e++
            }
            return e
        }

        function O(d, t) {
            if (t < 1) return "";
            for (var e = ""; t > 1;) 1 & t && (e += d), t >>= 1, d += d;
            return e + d
        }

        t.default = b
    }, function (d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.isLatinLetter = function (d) {
            if (!$.test(d) && !a.test(d)) return !1;
            return o.test(d)
        }, t.isInvalidPunctuationSymbol = function (d) {
            return "%" === d || i.test(d)
        };
        var r = "   ᠎ - \u2028\u2029  　",
            n = (t.pZ = "[" + r + "]", t.PZ = "[^" + r + "]", t._pN = "0-9²³¹¼-¾٠-٩۰-۹߀-߉०-९০-৯৴-৹੦-੯૦-૯୦-୯୲-୷௦-௲౦-౯౸-౾೦-೯൦-൵๐-๙໐-໙༠-༳၀-၉႐-႙፩-፼ᛮ-ᛰ០-៩៰-៹᠐-᠙᥆-᥏᧐-᧚᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙⁰⁴-⁹₀-₉⅐-ↂↅ-↉①-⒛⓪-⓿❶-➓⳽〇〡-〩〸-〺㆒-㆕㈠-㈩㉈-㉏㉑-㉟㊀-㊉㊱-㊿꘠-꘩ꛦ-ꛯ꠰-꠵꣐-꣙꤀-꤉꧐-꧙꩐-꩙꯰-꯹０-９", t.pNd = "[0-9٠-٩۰-۹߀-߉०-९০-৯੦-੯૦-૯୦-୯௦-௯౦-౯೦-೯൦-൯๐-๙໐-໙༠-༩၀-၉႐-႙០-៩᠐-᠙᥆-᥏᧐-᧙᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙꘠-꘩꣐-꣙꤀-꤉꧐-꧙꩐-꩙꯰-꯹０-９]", t._pL = "A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ"),
            $ = new RegExp("[" + n + "]"),
            i = new RegExp("[$¢-¥֏؋৲৳৻૱௹฿៛₠-₹꠸﷼﹩＄￠￡￥￦]"),
            a = new RegExp("[̀-ͯ҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-ٰٟۖ-ۜ۟-۪ۤۧۨ-ܑۭܰ-݊ަ-ް߫-߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࣤ-ࣾऀ-ंऺ़ु-ै्॑-ॗॢॣঁ়ু-ৄ্ৢৣਁਂ਼ੁੂੇੈੋ-੍ੑੰੱੵઁં઼ુ-ૅેૈ્ૢૣଁ଼ିୁ-ୄ୍ୖୢୣஂீ்ా-ీె-ైొ-్ౕౖౢౣ಼ಿೆೌ್ೢೣു-ൄ്ൢൣ්ි-ුූัิ-ฺ็-๎ັິ-ູົຼ່-ໍཱ༹༘༙༵༷-ཾྀ-྄྆྇ྍ-ྗྙ-ྼ࿆ိ-ူဲ-့္်ွှၘၙၞ-ၠၱ-ၴႂႅႆႍႝ፝-፟ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴឵ិ-ួំ៉-៓៝᠋-᠍ᢩᤠ-ᤢᤧᤨᤲ᤹-᤻ᨘᨗᩖᩘ-ᩞ᩠ᩢᩥ-ᩬᩳ-᩿᩼ᬀ-ᬃ᬴ᬶ-ᬺᬼᭂ᭫-᭳ᮀᮁᮢ-ᮥᮨᮩ᯦᮫ᯨᯩᯭᯯ-ᯱᰬ-ᰳᰶ᰷᳐-᳔᳒-᳢᳠-᳨᳭᳴᷀-ᷦ᷼-᷿⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〭꙯ꙴ-꙽ꚟ꛰꛱ꠂ꠆ꠋꠥꠦ꣄꣠-꣱ꤦ-꤭ꥇ-ꥑꦀ-ꦂ꦳ꦶ-ꦹꦼꨩ-ꨮꨱꨲꨵꨶꩃꩌꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫬꫭ꫶ꯥꯨ꯭ﬞ︀-️︠-︦]"),
            o = new RegExp("[\0--ÿĀ-ſḀ-ỿƀ-ɏ̀-ͯ]")
    }, function (d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.FIRST_GROUP_PATTERN = void 0, t.default = function (d, t, e, r) {
            e = e ? s({}, l, e) : l;
            if (r = new a.default(r), d.country) {
                if (!r.hasCountry(d.country)) throw new Error("Unknown country: " + d.country);
                r.country(d.country)
            } else {
                if (!d.countryCallingCode) return d.phone || "";
                r.chooseCountryByCountryCallingCode(d.countryCallingCode)
            }
            var n = r.countryCallingCode(),
                $ = e.v2 ? d.nationalNumber : d.phone,
                i = void 0;
            switch (t) {
                case"NATIONAL":
                    return $ ? v(i = h($, "NATIONAL", r), d.ext, r, e.formatExtension) : "";
                case"INTERNATIONAL":
                    return $ ? (i = h($, "INTERNATIONAL", r), v(i = "+" + n + " " + i, d.ext, r, e.formatExtension)) : "+" + n;
                case"E.164":
                    return "+" + n + $;
                case"RFC3966":
                    return (0, u.formatRFC3966)({
                        number: "+" + n + $,
                        ext: d.ext
                    });
                case"IDD":
                    if (!e.fromCountry) return;
                    var f = (0, o.getIDDPrefix)(e.fromCountry, r.metadata);
                    if (!f) return;
                    if (e.humanReadable) {
                        var c = n && p($, r.countryCallingCode(), e.fromCountry, r);
                        return v(i = c || f + " " + n + " " + h($, "INTERNATIONAL", r), d.ext, r, e.formatExtension)
                    }
                    return "" + f + n + $;
                default:
                    throw new Error('Unknown "format" argument passed to "formatNumber()": "' + t + '"')
            }
        }, t.format_national_number_using_format = c, t.choose_format_for_number = y, t.changeInternationalFormatStyle = m, t.formatIDDSameCountryCallingCodeNumber = p;
        var r,
            n = e(1),
            $ = e(3),
            i = e(0),
            a = (r = i) && r.__esModule ? r : {default: r},
            o = e(18),
            u = e(9);
        var s = Object.assign || function (d) {
                for (var t = 1; t < arguments.length; t++) {
                    var e = arguments[t];
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (d[r] = e[r])
                }
                return d
            },
            l = {
                formatExtension: function (d, t, e) {
                    return "" + d + e.ext() + t
                }
            };
        var f = t.FIRST_GROUP_PATTERN = /(\$\d)/;

        function c(d, t, e, r, n) {
            var $ = d.replace(new RegExp(t.pattern()), e ? t.internationalFormat() : !t.nationalPrefixFormattingRule() || t.nationalPrefixIsOptionalWhenFormatting() && !r ? t.format() : t.format().replace(f, t.nationalPrefixFormattingRule()));
            return e ? m($) : $
        }

        function h(d, t, e) {
            var r = y(e.formats(), d);
            return r ? c(d, r, "INTERNATIONAL" === t, !0) : d
        }

        function y(d, t) {
            var e = d,
                r = Array.isArray(e),
                n = 0;
            for (e = r ? e : e[Symbol.iterator](); ;) {
                var i;
                if (r) {
                    if (n >= e.length) break;
                    i = e[n++]
                } else {
                    if ((n = e.next()).done) break;
                    i = n.value
                }
                var a = i;
                if (a.leadingDigitsPatterns().length > 0) {
                    var o = a.leadingDigitsPatterns()[a.leadingDigitsPatterns().length - 1];
                    if (0 !== t.search(o)) continue
                }
                if ((0, $.matchesEntirely)(t, a.pattern())) return a
            }
        }

        function m(d) {
            return d.replace(new RegExp("[" + n.VALID_PUNCTUATION + "]+", "g"), " ").trim()
        }

        function v(d, t, e, r) {
            return t ? r(d, t, e) : d
        }

        function p(d, t, e, r) {
            var n = new a.default(r.metadata);
            if (n.country(e), t === n.countryCallingCode()) return "1" === t ? t + " " + h(d, "NATIONAL", r) : h(d, "NATIONAL", r)
        }
    }, function (d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.getIDDPrefix = function (d, t) {
            var e = new $.default(t);
            if (e.country(d), o.test(e.IDDPrefix())) return e.IDDPrefix();
            return e.defaultIDDPrefix()
        }, t.stripIDDPrefix = function (d, t, e) {
            if (!t) return;
            var r = new $.default(e);
            r.country(t);
            var n = new RegExp(r.IDDPrefix());
            if (0 !== d.search(n)) return;
            var i = (d = d.slice(d.match(n)[0].length)).match(a);
            if (i && null != i[1] && i[1].length > 0 && "0" === i[1]) return;
            return d
        };
        var r,
            n = e(0),
            $ = (r = n) && r.__esModule ? r : {default: r},
            i = e(1);
        var a = new RegExp("([" + i.VALID_DIGITS + "])"),
            o = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/
    }, function (d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (d, t, e) {
            void 0 === t && (t = {});
            if (e = new $.default(e), t.v2) {
                if (!d.countryCallingCode) throw new Error("Invalid phone number object passed");
                e.chooseCountryByCountryCallingCode(d.countryCallingCode)
            } else {
                if (!d.phone) return !1;
                if (d.country) {
                    if (!e.hasCountry(d.country)) throw new Error("Unknown country: " + d.country);
                    e.country(d.country)
                } else {
                    if (!d.countryCallingCode) throw new Error("Invalid phone number object passed");
                    e.chooseCountryByCountryCallingCode(d.countryCallingCode)
                }
            }
            if (!e.possibleLengths()) throw new Error("Metadata too old");
            return a(d.phone || d.nationalNumber, void 0, e)
        }, t.is_possible_number = a;
        var r,
            n = e(0),
            $ = (r = n) && r.__esModule ? r : {default: r},
            i = e(2);

        function a(d, t, e) {
            switch ((0, i.checkNumberLengthForType)(d, void 0, e)) {
                case"IS_POSSIBLE":
                    return !0;
                default:
                    return !1
            }
        }
    }, function (d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (d) {
            return d.length >= r.MIN_LENGTH_FOR_NSN && a.test(d)
        };
        var r = e(1),
            n = e(12),
            $ = "[" + r.VALID_DIGITS + "]{" + r.MIN_LENGTH_FOR_NSN + "}",
            i = "[" + r.PLUS_CHARS + "]{0,1}(?:[" + r.VALID_PUNCTUATION + "]*[" + r.VALID_DIGITS + "]){3,}[" + r.VALID_PUNCTUATION + r.VALID_DIGITS + "]*",
            a = new RegExp("^" + $ + "$|^" + i + "(?:" + n.EXTN_PATTERNS_FOR_PARSING + ")?$", "i")
    }, function (d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (d, t, e) {
            return (0, $.default)(d, i({}, t, {v2: !0}), e)
        };
        var r,
            n = e(13),
            $ = (r = n) && r.__esModule ? r : {default: r};
        var i = Object.assign || function (d) {
            for (var t = 1; t < arguments.length; t++) {
                var e = arguments[t];
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (d[r] = e[r])
            }
            return d
        }
    }, function (d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = {
            version: "1.7.24",
            country_calling_codes: {
                1: ["US", "AG", "AI", "AS", "BB", "BM", "BS", "CA", "DM", "DO", "GD", "GU", "JM", "KN", "KY", "LC", "MP", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI"],
                7: ["RU", "KZ"],
                20: ["EG"],
                27: ["ZA"],
                30: ["GR"],
                31: ["NL"],
                32: ["BE"],
                33: ["FR"],
                34: ["ES"],
                36: ["HU"],
                39: ["IT", "VA"],
                40: ["RO"],
                41: ["CH"],
                43: ["AT"],
                44: ["GB", "GG", "IM", "JE"],
                45: ["DK"],
                46: ["SE"],
                47: ["NO", "SJ"],
                48: ["PL"],
                49: ["DE"],
                51: ["PE"],
                52: ["MX"],
                53: ["CU"],
                54: ["AR"],
                55: ["BR"],
                56: ["CL"],
                57: ["CO"],
                58: ["VE"],
                60: ["MY"],
                61: ["AU", "CC", "CX"],
                62: ["ID"],
                63: ["PH"],
                64: ["NZ"],
                65: ["SG"],
                66: ["TH"],
                81: ["JP"],
                82: ["KR"],
                84: ["VN"],
                86: ["CN"],
                90: ["TR"],
                91: ["IN"],
                92: ["PK"],
                93: ["AF"],
                94: ["LK"],
                95: ["MM"],
                98: ["IR"],
                211: ["SS"],
                212: ["MA", "EH"],
                213: ["DZ"],
                216: ["TN"],
                218: ["LY"],
                220: ["GM"],
                221: ["SN"],
                222: ["MR"],
                223: ["ML"],
                224: ["GN"],
                225: ["CI"],
                226: ["BF"],
                227: ["NE"],
                228: ["TG"],
                229: ["BJ"],
                230: ["MU"],
                231: ["LR"],
                232: ["SL"],
                233: ["GH"],
                234: ["NG"],
                235: ["TD"],
                236: ["CF"],
                237: ["CM"],
                238: ["CV"],
                239: ["ST"],
                240: ["GQ"],
                241: ["GA"],
                242: ["CG"],
                243: ["CD"],
                244: ["AO"],
                245: ["GW"],
                246: ["IO"],
                247: ["AC"],
                248: ["SC"],
                249: ["SD"],
                250: ["RW"],
                251: ["ET"],
                252: ["SO"],
                253: ["DJ"],
                254: ["KE"],
                255: ["TZ"],
                256: ["UG"],
                257: ["BI"],
                258: ["MZ"],
                260: ["ZM"],
                261: ["MG"],
                262: ["RE", "YT"],
                263: ["ZW"],
                264: ["NA"],
                265: ["MW"],
                266: ["LS"],
                267: ["BW"],
                268: ["SZ"],
                269: ["KM"],
                290: ["SH", "TA"],
                291: ["ER"],
                297: ["AW"],
                298: ["FO"],
                299: ["GL"],
                350: ["GI"],
                351: ["PT"],
                352: ["LU"],
                353: ["IE"],
                354: ["IS"],
                355: ["AL"],
                356: ["MT"],
                357: ["CY"],
                358: ["FI", "AX"],
                359: ["BG"],
                370: ["LT"],
                371: ["LV"],
                372: ["EE"],
                373: ["MD"],
                374: ["AM"],
                375: ["BY"],
                376: ["AD"],
                377: ["MC"],
                378: ["SM"],
                380: ["UA"],
                381: ["RS"],
                382: ["ME"],
                383: ["XK"],
                385: ["HR"],
                386: ["SI"],
                387: ["BA"],
                389: ["MK"],
                420: ["CZ"],
                421: ["SK"],
                423: ["LI"],
                500: ["FK"],
                501: ["BZ"],
                502: ["GT"],
                503: ["SV"],
                504: ["HN"],
                505: ["NI"],
                506: ["CR"],
                507: ["PA"],
                508: ["PM"],
                509: ["HT"],
                590: ["GP", "BL", "MF"],
                591: ["BO"],
                592: ["GY"],
                593: ["EC"],
                594: ["GF"],
                595: ["PY"],
                596: ["MQ"],
                597: ["SR"],
                598: ["UY"],
                599: ["CW", "BQ"],
                670: ["TL"],
                672: ["NF"],
                673: ["BN"],
                674: ["NR"],
                675: ["PG"],
                676: ["TO"],
                677: ["SB"],
                678: ["VU"],
                679: ["FJ"],
                680: ["PW"],
                681: ["WF"],
                682: ["CK"],
                683: ["NU"],
                685: ["WS"],
                686: ["KI"],
                687: ["NC"],
                688: ["TV"],
                689: ["PF"],
                690: ["TK"],
                691: ["FM"],
                692: ["MH"],
                800: ["001"],
                808: ["001"],
                850: ["KP"],
                852: ["HK"],
                853: ["MO"],
                855: ["KH"],
                856: ["LA"],
                870: ["001"],
                878: ["001"],
                880: ["BD"],
                881: ["001"],
                882: ["001"],
                883: ["001"],
                886: ["TW"],
                888: ["001"],
                960: ["MV"],
                961: ["LB"],
                962: ["JO"],
                963: ["SY"],
                964: ["IQ"],
                965: ["KW"],
                966: ["SA"],
                967: ["YE"],
                968: ["OM"],
                970: ["PS"],
                971: ["AE"],
                972: ["IL"],
                973: ["BH"],
                974: ["QA"],
                975: ["BT"],
                976: ["MN"],
                977: ["NP"],
                979: ["001"],
                992: ["TJ"],
                993: ["TM"],
                994: ["AZ"],
                995: ["GE"],
                996: ["KG"],
                998: ["UZ"]
            },
            countries: {
                AC: ["247", "00", "(?:[01589]\\d|[46])\\d{4}", [5, 6], 0, 0, 0, 0, 0, 0, 0, [["6[2-467]\\d{3}", [5]], ["4\\d{4}", [5]], 0, 0, 0, 0, ["(?:0[1-9]|[1589]\\d)\\d{4}", [6]]]],
                AD: ["376", "00", "(?:1|6\\d)\\d{7}|[136-9]\\d{5}", [6, 8, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["[136-9]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["1"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]], 0, 0, 0, 0, 0, 0, [["[78]\\d{5}", [6]], ["690\\d{6}|[36]\\d{5}", [6, 9]], ["180[02]\\d{4}", [8]], ["[19]\\d{5}", [6]]]],
                AE: ["971", "00", "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[236]|[479][2-8]"], "0$1"], ["(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"]], "0", 0, 0, 0, 0, 0, [["[2-4679][2-8]\\d{6}", [8]], ["5[024-68]\\d{7}", [9]], ["400\\d{6}|800\\d{2,9}"], ["900[02]\\d{5}", [9]], 0, 0, ["600[25]\\d{5}", [9]], 0, 0, ["700[05]\\d{5}", [9]]]],
                AF: ["93", "00", "[2-7]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:[25][0-8]|[34][0-4]|6[0-5])[2-9]\\d{6}"], ["7(?:[014-9]\\d|2[89]|3[01])\\d{6}"]]],
                AG: ["1", "011", "(?:268|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([457]\\d{6})$", "268$1", 0, "268", [["268(?:4(?:6[0-38]|84)|56[0-2])\\d{4}"], ["268(?:464|7(?:1[3-9]|2\\d|3[246]|64|[78][0-689]))\\d{4}"], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"], 0, 0, ["26840[69]\\d{4}"], ["26848[01]\\d{4}"]]],
                AI: ["1", "011", "(?:264|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2457]\\d{6})$", "264$1", 0, "264", [["2644(?:6[12]|9[78])\\d{4}"], ["264(?:235|476|5(?:3[6-9]|8[1-4])|7(?:29|72))\\d{4}"], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"]]],
                AL: ["355", "00", "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}", [6, 7, 8, 9], [["(\\d{3})(\\d{3,4})", "$1 $2", ["80|9"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["[23578]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:[2358](?:[16-9]\\d[2-9]|[2-5][2-9]\\d)|4(?:[2-57-9][2-9]|6\\d)\\d)\\d{4}", [8]], ["6(?:[689][2-9]|7[2-6])\\d{6}", [9]], ["800\\d{4}", [7]], ["900[1-9]\\d\\d", [6]], ["700[2-9]\\d{4}", [8]], 0, 0, 0, 0, ["808[1-9]\\d\\d", [6]]]],
                AM: ["374", "00", "(?:[1-489]\\d|55|60|77)\\d{6}", [8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0 $1"], ["(\\d{3})(\\d{5})", "$1 $2", ["2|3[12]"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[3-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:(?:1[0-25]|47)\\d|2(?:2[2-46]|3[1-8]|4[2-69]|5[2-7]|6[1-9]|8[1-7])|3[12]2)\\d{5}"], ["(?:33|4[1349]|55|77|88|9[13-9])\\d{6}"], ["800\\d{5}"], ["90[016]\\d{5}"], 0, 0, 0, 0, ["60(?:2[78]|3[5-9]|4[02-9]|5[0-46-9]|[6-8]\\d|90)\\d{4}"], ["80[1-4]\\d{5}"]]],
                AO: ["244", "00", "[29]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[29]"]]], 0, 0, 0, 0, 0, 0, [["2\\d(?:[0134][25-9]|[25-9]\\d)\\d{5}"], ["9[1-49]\\d{7}"]]],
                AR: ["54", "00", "11\\d{8}|(?:[2368]|9\\d)\\d{9}", [10, 11], [["(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])", "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5(?:[24-6]|3[2-5]))|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"], ["(\\d)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9(?:2[2-469]|3[3-578])", "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))", "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5(?:[24-6]|3[2-5]))|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 15-$3-$4", ["91"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9"], "0$1", 0, "$1 $2 $3-$4"]], "0", 0, "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?", "9$1", 0, 0, [["(?:2(?:646[0-46-9]|9(?:45[02-69]|54[2-8]))|3(?:4(?:3(?:5[0-7]|6[1-69])|5(?:4[0-4679]|[56][024-6]))|585[013-7]|7(?:(?:1[15]|81)[46]|77[2-8])|8(?:(?:21|4[16]|9[12])[46]|35[124-6]|5(?:5[0-46-9]|6[0-246-9])|6(?:5[2-8]|9[46])|86[0-68])))\\d{5}|(?:2(?:284|657|9(?:20|66))|3(?:4(?:8[27]|92)|755|878))[2-7]\\d{5}|(?:2(?:2(?:2[59]|44|52)|3(?:26|4[24])|473|9(?:[07]2|2[26]|34|46))|3327)[45]\\d{5}|(?:2(?:(?:26|62)2|3(?:02|2[03])|477|9(?:42|83))|3(?:4(?:[47]6|62|89)|5(?:41|64)|873))[2-6]\\d{5}|(?:(?:11[2-7]|670)\\d|2(?:2(?:0[45]|1[2-6]|3[3-6])|3(?:[06]4|7[45])|494|6(?:04|1[2-7]|[346][45])|80[45]|9(?:[17][4-6]|44|8[45]|9[3-6]))|3(?:364|4(?:1[2-7]|2[4-6]|[38]4)|5(?:1[2-8]|3[4-6]|8[46])|6(?:2[45]|44)|7[069][45]|8(?:0[45]|1[2-6]|34|5[34]|7[24-6]|8[3-5])))\\d{6}|2(?:2(?:21|4[23]|6[145]|7[1-4]|8[356]|9[267])|3(?:16|3[13-8]|43|5[346-8]|9[3-5])|475|6(?:2[46]|4[78]|5[1568])|9(?:03|2[1457-9]|3[1356]|4[08]|[56][23]|82))4\\d{5}|(?:2(?:2(?:57|81)|3(?:24|46|92)|9(?:01|23|64))|3(?:329|4(?:42|71)|5(?:25|37|4[347]|71)|7(?:18|5[17])|888))[3-6]\\d{5}|(?:2(?:2(?:02|2[3467]|4[156]|5[45]|6[6-8]|91)|3(?:1[47]|[24]5|5[25]|96)|47[48]|625|932)|3(?:38[2578]|4(?:0[0-24-9]|3[78]|4[457]|58|6[03-9]|72|83|9[136-8])|5(?:2[124]|[368][23]|4[2689]|7[2-6])|7(?:16|2[15]|3[145]|4[13]|5[468]|7[2-5]|8[26])|8(?:2[5-7]|3[278]|4[3-5]|5[78]|6[1-378]|[78]7|94)))[4-6]\\d{5}", [10]], ["9(?:2(?:646[0-46-9]|9(?:45[02-69]|54[2-8]))|3(?:4(?:3(?:5[0-7]|6[1-69])|5(?:4[0-4679]|[56][024-6]))|585[013-7]|7(?:(?:1[15]|81)[46]|77[2-8])|8(?:(?:21|4[16]|9[12])[46]|35[124-6]|5(?:5[0-46-9]|6[0-246-9])|6(?:5[2-8]|9[46])|86[0-68])))\\d{5}|9(?:2(?:284|657|9(?:20|66))|3(?:4(?:8[27]|92)|755|878))[2-7]\\d{5}|9(?:2(?:2(?:2[59]|44|52)|3(?:26|4[24])|473|9(?:[07]2|2[26]|34|46))|3327)[45]\\d{5}|9(?:2(?:(?:26|62)2|3(?:02|2[03])|477|9(?:42|83))|3(?:4(?:[47]6|62|89)|5(?:41|64)|873))[2-6]\\d{5}|(?:675\\d|9(?:11[2-7]\\d|2(?:2(?:0[45]|1[2-6]|3[3-6])|3(?:[06]4|7[45])|494|6(?:04|1[2-7]|[346][45])|80[45]|9(?:[17][4-6]|44|8[45]|9[3-6]))|3(?:364|4(?:1[2-7]|2[4-6]|[38]4)|5(?:1[2-8]|3[4-6]|8[46])|6(?:2[45]|44)|7[069][45]|8(?:0[45]|1[2-6]|34|5[34]|7[24-6]|8[3-5]))))\\d{6}|92(?:2(?:21|4[23]|6[145]|7[1-4]|8[356]|9[267])|3(?:16|3[13-8]|43|5[346-8]|9[3-5])|475|6(?:2[46]|4[78]|5[1568])|9(?:03|2[1457-9]|3[1356]|4[08]|[56][23]|82))4\\d{5}|9(?:2(?:2(?:57|81)|3(?:24|46|92)|9(?:01|23|64))|3(?:329|4(?:42|71)|5(?:25|37|4[347]|71)|7(?:18|5[17])|888))[3-6]\\d{5}|9(?:2(?:2(?:02|2[3467]|4[156]|5[45]|6[6-8]|91)|3(?:1[47]|[24]5|5[25]|96)|47[48]|625|932)|3(?:38[2578]|4(?:0[0-24-9]|3[78]|4[457]|58|6[03-9]|72|83|9[136-8])|5(?:2[124]|[368][23]|4[2689]|7[2-6])|7(?:16|2[15]|3[145]|4[13]|5[468]|7[2-5]|8[26])|8(?:2[5-7]|3[278]|4[3-5]|5[78]|6[1-378]|[78]7|94)))[4-6]\\d{5}"], ["800\\d{7}", [10]], ["60[04579]\\d{7}", [10]], 0, 0, ["810\\d{7}", [10]]]],
                AS: ["1", "011", "(?:[58]\\d\\d|684|900)\\d{7}", [10], 0, "1", 0, "1|([267]\\d{6})$", "684$1", 0, "684", [["6846(?:22|33|44|55|77|88|9[19])\\d{4}"], ["684(?:2(?:5[2468]|72)|7(?:3[13]|70))\\d{4}"], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"]]],
                AT: ["43", "00", "1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"], ["(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"], ["(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"], ["(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]], "0", 0, 0, 0, 0, 0, [["1(?:11\\d|[2-9]\\d{3,11})|(?:316|463|(?:51|66|73)2)\\d{3,10}|(?:2(?:1[467]|2[13-8]|5[2357]|6[1-46-8]|7[1-8]|8[124-7]|9[1458])|3(?:1[1-578]|3[23568]|4[5-7]|5[1378]|6[1-38]|8[3-68])|4(?:2[1-8]|35|7[1368]|8[2457])|5(?:2[1-8]|3[357]|4[147]|5[12578]|6[37])|6(?:13|2[1-47]|4[135-8]|5[468])|7(?:2[1-8]|35|4[13478]|5[68]|6[16-8]|7[1-6]|9[45]))\\d{4,10}"], ["6(?:5[0-3579]|6[013-9]|[7-9]\\d)\\d{4,10}", [7, 8, 9, 10, 11, 12, 13]], ["800\\d{6,10}", [9, 10, 11, 12, 13]], ["9(?:0[01]|3[019])\\d{6,10}", [9, 10, 11, 12, 13]], 0, 0, 0, 0, ["5(?:0[1-9]|17|[79]\\d)\\d{2,10}|7[28]0\\d{6,10}", [5, 6, 7, 8, 9, 10, 11, 12, 13]], ["8(?:10|2[018])\\d{6,10}|828\\d{5}", [8, 9, 10, 11, 12, 13]]]],
                AU: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{7,8}|8[0-24-9]\\d{7})|(?:[2-478]\\d\\d|550)\\d{6}|1\\d{4,7}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|[45]"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]], "0", 0, "0|(183[12])", 0, 0, 0, [["(?:[237]\\d{5}|8(?:51(?:0(?:0[03-9]|[1247]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-6])|1(?:1[69]|[23]\\d|4[0-4]))|(?:[6-8]\\d{3}|9(?:[02-9]\\d\\d|1(?:[0-57-9]\\d|6[0135-9])))\\d))\\d{3}", [9]], ["483[0-3]\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-2457-9]|9[017-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, ["16\\d{3,7}", [5, 6, 7, 8, 9]], ["(?:14(?:5(?:1[0458]|[23][458])|71\\d)|550\\d\\d)\\d{4}", [9]], ["13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}", [6, 8, 10]]], "0011"],
                AW: ["297", "00", "(?:[25-79]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]], 0, 0, 0, 0, 0, 0, [["5(?:2\\d|8[1-9])\\d{4}"], ["(?:290|5[69]\\d|6(?:[03]0|22|4[0-2]|[69]\\d)|7(?:[34]\\d|7[07])|9(?:6[45]|9[4-8]))\\d{4}"], ["800\\d{4}"], ["900\\d{4}"], 0, 0, 0, 0, ["(?:28\\d|501)\\d{4}"]]],
                AX: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|(?:[147]\\d|3[0-46-9]|50)\\d{4,8}", [5, 6, 7, 8, 9, 10], 0, "0", 0, 0, 0, 0, "18", [["18[1-8]\\d{3,6}", [6, 7, 8, 9]], ["(?:4[0-8]|50)\\d{4,8}", [6, 7, 8, 9, 10]], ["800\\d{4,6}", [7, 8, 9]], ["[67]00\\d{5,6}", [8, 9]], 0, 0, ["(?:10|[23][09])\\d{4,8}|60(?:[12]\\d{5,6}|6\\d{7})|7(?:(?:1|3\\d)\\d{7}|5[03-9]\\d{3,7})|20[2-59]\\d\\d"]], "00"],
                AZ: ["994", "00", "(?:365\\d{3}|900200)\\d{3}|(?:[12457]\\d|60|88)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[12]|365", "[12]|365", "[12]|365(?:[0-46-9]|5[0-35-9])"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[3-8]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["365(?:[0-46-9]\\d|5[0-35-9])\\d{4}|(?:1[28]\\d|2(?:[045]2|1[24]|2[2-4]|33|6[23]))\\d{6}"], ["36554\\d{4}|(?:4[04]|5[015]|60|7[07])\\d{7}"], ["88\\d{7}"], ["900200\\d{3}"]]],
                BA: ["387", "00", "6\\d{8}|(?:[35689]\\d|49|70)\\d{6}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-356]|[7-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:3(?:[05-79][2-9]|1[4579]|[23][24-9]|4[2-4689]|8[2457-9])|49[2-579]|5(?:0[2-49]|[13][2-9]|[268][2-4679]|4[4689]|5[2-79]|7[2-69]|9[2-4689]))\\d{5}", [8]], ["6(?:0(?:3\\d|40)|[1-356]\\d|44[0-6]|71[137])\\d{5}"], ["8[08]\\d{6}", [8]], ["9[0246]\\d{6}", [8]], 0, 0, ["70(?:3[0146]|[56]0)\\d{4}", [8]], 0, 0, ["8[12]\\d{6}", [8]]]],
                BB: ["1", "011", "(?:246|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-9]\\d{6})$", "246$1", 0, "246", [["246(?:2(?:2[78]|7[0-4])|4(?:1[024-6]|2\\d|3[2-9])|5(?:20|[34]\\d|54|7[1-3])|6(?:2\\d|38)|7[35]7|9(?:1[89]|63))\\d{4}"], ["246(?:2(?:[356]\\d|4[0-57-9]|8[0-79])|45\\d|69[5-7]|8(?:[2-5]\\d|83))\\d{4}"], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["(?:246976|900[2-9]\\d\\d)\\d{4}"], ["5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"], 0, ["246(?:292|367|4(?:1[7-9]|3[01]|44|67)|7(?:36|53))\\d{4}"], 0, ["24631\\d{5}"]]],
                BD: ["880", "00", "[13469]\\d{9}|8[0-79]\\d{7,8}|[2-7]\\d{8}|[2-9]\\d{7}|[3-689]\\d{6}|[57-9]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{2})(\\d{4,6})", "$1-$2", ["31[5-7]|[459]1"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1-$2", ["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:28|4[14]|5)|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"], "0$1"], ["(\\d{4})(\\d{3,6})", "$1-$2", ["[13-9]"], "0$1"], ["(\\d)(\\d{7,8})", "$1-$2", ["2"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:3(?:03[56]|224)|4(?:22[25]|653))\\d{3,4}|(?:4(?:31\\d\\d|[46]23)|5(?:222|32[37]))\\d{3}(?:\\d{2})?|(?:3(?:42[47]|529|823)|4(?:027|525|658)|(?:56|73)2|6257|9[35]1)\\d{3}|(?:3(?:02[348]|22[35]|324|422)|4(?:22[67]|32[236-9]|6(?:2[46]|5[57])|953)|5526|6(?:024|6655)|81)\\d{4,5}|(?:2(?:7(?:1[0-267]|2[0-289]|3[0-29]|4[01]|5[1-3]|6[013]|7[0178]|91)|8(?:0[125]|1[1-6]|2[0157-9]|3[1-69]|41|6[1-35]|7[1-5]|8[1-8]|9[0-6])|9(?:0[0-2]|1[0-4]|2[568]|3[3-6]|5[5-7]|6[01367]|7[15]|8[014-9]))|3(?:0(?:2[025-79]|3[2-4])|22[12]|32[2356]|824)|4(?:02[09]|22[348]|32[045]|523|6(?:27|54))|666(?:22|53)|8(?:4[12]|[5-7]2)|9(?:[024]2|81))\\d{4}|(?:2[45]\\d\\d|3(?:1(?:2[5-7]|[5-7])|425|822)|4(?:033|1\\d|[257]1|332|4(?:2[246]|5[25])|6(?:25|56|62)|8(?:23|54)|92[2-5])|5(?:02[03489]|22[457]|32[569]|42[46]|6(?:[18]|53)|724|826)|6(?:023|2(?:2[2-5]|5[3-5]|8)|32[3478]|42[34]|52[47]|6(?:[18]|6(?:2[34]|5[24]))|[78]2[2-5]|92[2-6])|7(?:02|21\\d|[3-589]1|6[12]|72[24])|8(?:0|217|3[12]|[5-7]1)|9[24]1)\\d{5}|(?:(?:3[2-8]|5[2-57-9]|6[03-589])1|4[4689][18])\\d{5}|[59]1\\d{5}"], ["(?:1[13-9]\\d|644)\\d{7}|(?:3[78]|44|66)[02-9]\\d{7}", [10]], ["80[03]\\d{7}", [10]], 0, 0, 0, 0, 0, ["96(?:0[469]|1[0-47]|3[389]|6[69]|7[78])\\d{6}", [10]]]],
                BE: ["32", "00", "4\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[239]|4[23]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[15-8]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4"], "0$1"]], "0", 0, 0, 0, 0, 0, [["80[2-8]\\d{5}|(?:1[0-69]|[23][2-8]|4[23]|5\\d|6[013-57-9]|71|8[1-79]|9[2-4])\\d{6}", [8]], ["4(?:5[56]|6[0135-8]|[79]\\d|8[3-9])\\d{6}", [9]], ["800[1-9]\\d{4}", [8]], ["(?:70(?:2[0-57]|3[0457]|44|69|7[0579])|90(?:0[0-35-8]|1[36]|2[0-3568]|3[0135689]|4[2-68]|5[1-68]|6[0-378]|7[23568]|9[34679]))\\d{4}", [8]], 0, 0, ["78(?:0[57]|1[0458]|2[25]|3[5-8]|48|[56]0|7[078])\\d{4}", [8]], 0, 0, ["7879\\d{4}", [8]]]],
                BF: ["226", "00", "[025-7]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[025-7]"]]], 0, 0, 0, 0, 0, 0, [["2(?:0(?:49|5[23]|6[56]|9[016-9])|4(?:4[569]|5[4-6]|6[56]|7[0179])|5(?:[34]\\d|50|6[5-7]))\\d{4}"], ["(?:0[17]|5[124-8]|[67]\\d)\\d{6}"]]],
                BG: ["359", "00", "[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}", [6, 7, 8, 9], [["(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"], ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]], "0", 0, 0, 0, 0, 0, [["2\\d{5,7}|(?:43[1-6]|70[1-9])\\d{4,5}|(?:[36]\\d|4[124-7]|[57][1-9]|8[1-6]|9[1-7])\\d{5,6}", [6, 7, 8]], ["43[07-9]\\d{5}|(?:48|8[7-9]\\d|9(?:8\\d|9[69]))\\d{6}", [8, 9]], ["800\\d{5}", [8]], ["90\\d{6}", [8]], 0, 0, 0, 0, 0, ["700\\d{5}", [8]]]],
                BH: ["973", "00", "[136-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[13679]|8[047]"]]], 0, 0, 0, 0, 0, 0, [["(?:1(?:3[1356]|6[0156]|7\\d)\\d|6(?:1[16]\\d|500|6(?:0\\d|3[12]|44|7[7-9]|88)|9[69][69])|7(?:1(?:11|78)|7\\d\\d))\\d{4}"], ["(?:3(?:[1-4679]\\d|5[013-69]|8[0-47-9])\\d|6(?:3(?:00|33|6[16])|6(?:3[03-9]|[69]\\d|7[0-6])))\\d{4}"], ["80\\d{6}"], ["(?:87|9[014578])\\d{6}"], 0, 0, 0, 0, 0, ["84\\d{6}"]]],
                BI: ["257", "00", "(?:[267]\\d|31)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2367]"]]], 0, 0, 0, 0, 0, 0, [["22\\d{6}"], ["(?:29|31|6[189]|7[125-9])\\d{6}"]]],
                BJ: ["229", "00", "[2689]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2689]"]]], 0, 0, 0, 0, 0, 0, [["2(?:02|1[037]|2[45]|3[68])\\d{5}"], ["(?:6\\d|9[013-9])\\d{6}"], 0, 0, 0, 0, ["81\\d{6}"], 0, ["857[58]\\d{4}"]]],
                BL: ["590", "00", "(?:590|69\\d)\\d{6}", [9], 0, "0", 0, 0, 0, 0, 0, [["590(?:2[7-9]|5[12]|87)\\d{4}"], ["69(?:0\\d\\d|1(?:2[29]|3[0-5]))\\d{4}"]]],
                BM: ["1", "011", "(?:441|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-8]\\d{6})$", "441$1", 0, "441", [["441(?:2(?:02|23|[3479]\\d|61)|[46]\\d\\d|5(?:4\\d|60|89)|824)\\d{4}"], ["441(?:[37]\\d|5[0-39])\\d{5}"], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"]]],
                BN: ["673", "00", "[2-578]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]], 0, 0, 0, 0, 0, 0, [["22[0-7]\\d{4}|(?:2[013-9]|[3-5]\\d)\\d{5}"], ["(?:22[89]|[78]\\d\\d)\\d{4}"]]],
                BO: ["591", "00(?:1\\d)?", "(?:[2-467]\\d{3}|80017)\\d{4}", [8, 9], [["(\\d)(\\d{7})", "$1 $2", ["[23]|4[46]"]], ["(\\d{8})", "$1", ["[67]"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["8"]]], "0", 0, "0(1\\d)?", 0, 0, 0, [["(?:2(?:2\\d\\d|5(?:11|[258]\\d|9[67])|6(?:12|2\\d|9[34])|8(?:2[34]|39|62))|3(?:3\\d\\d|4(?:6\\d|8[24])|8(?:25|42|5[257]|86|9[25])|9(?:[27]\\d|3[2-4]|4[248]|5[24]|6[2-6]))|4(?:4\\d\\d|6(?:11|[24689]\\d|72)))\\d{4}", [8]], ["[67]\\d{7}", [8]], ["80017\\d{4}", [9]]]],
                BQ: ["599", "00", "(?:[34]1|7\\d)\\d{5}", [7], 0, 0, 0, 0, 0, 0, "[347]", [["(?:318[023]|41(?:6[023]|70)|7(?:1[578]|50)\\d)\\d{3}"], ["(?:31(?:8[14-8]|9[14578])|416[14-9]|7(?:0[01]|7[07]|8\\d|9[056])\\d)\\d{3}"]]],
                BR: ["55", "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-24679]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}", [8, 9, 10, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37)", "4(?:02|37)0|[34]00"]], ["(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["(?:[358]|90)0"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"], "($1)"], ["(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[16][1-9]|[2-57-9]"], "($1)"]], "0", 0, "0(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2", 0, 0, [["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-5]\\d{7}", [10]], ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])(?:7|9\\d)\\d{7}", [10, 11]], ["800\\d{6,7}", [9, 10]], ["300\\d{6}|[59]00\\d{6,7}", [9, 10]], 0, 0, 0, 0, 0, ["300\\d{7}|[34]00\\d{5}|4(?:02|37)0\\d{4}", [8, 10]]]],
                BS: ["1", "011", "(?:242|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([3-8]\\d{6})$", "242$1", 0, "242", [["242(?:3(?:02|[236][1-9]|4[0-24-9]|5[0-68]|7[347]|8[0-4]|9[2-467])|461|502|6(?:0[1-4]|12|2[013]|[45]0|7[67]|8[78]|9[89])|7(?:02|88))\\d{4}"], ["242(?:3(?:5[79]|7[56]|95)|4(?:[23][1-9]|4[1-35-9]|5[1-8]|6[2-8]|7\\d|81)|5(?:2[45]|3[35]|44|5[1-46-9]|65|77)|6[34]6|7(?:27|38)|8(?:0[1-9]|1[02-9]|2\\d|[89]9))\\d{4}"], ["242300\\d{4}|8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"], 0, ["242225[0-46-9]\\d{3}"]]],
                BT: ["975", "00", "[17]\\d{7}|[2-8]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-68]|7[246]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|7"]]], 0, 0, 0, 0, 0, 0, [["(?:2[3-6]|[34][5-7]|5[236]|6[2-46]|7[246]|8[2-4])\\d{5}", [7]], ["(?:1[67]|77)\\d{6}", [8]]]],
                BW: ["267", "00", "90\\d{5}|(?:[2-6]|7\\d)\\d{6}", [7, 8], [["(\\d{2})(\\d{5})", "$1 $2", ["90"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[2-6]"]], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"]]], 0, 0, 0, 0, 0, 0, [["(?:2(?:4[0-48]|6[0-24]|9[0578])|3(?:1[0-35-9]|55|[69]\\d|7[013])|4(?:6[03]|7[1267]|9[0-5])|5(?:3[0389]|4[0489]|7[1-47]|88|9[0-49])|6(?:2[1-35]|5[149]|8[067]))\\d{4}", [7]], ["77200\\d{3}|7(?:[1-6]\\d|7[014-8])\\d{5}", [8]], 0, ["90\\d{5}", [7]], 0, 0, 0, 0, ["79(?:1(?:[01]\\d|20)|2[0-2]\\d)\\d{3}", [8]]]],
                BY: ["375", "810", "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3})", "$1 $2", ["800"], "8 $1"], ["(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"], ["(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:[56]|7[467])|2[1-3]"], "8 0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-4]"], "8 0$1"], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[89]"], "8 $1"]], "8", 0, "0|80?", 0, 0, 0, [["(?:1(?:5(?:1[1-5]|[24]\\d|6[2-4]|9[1-7])|6(?:[235]\\d|4[1-7])|7\\d\\d)|2(?:1(?:[246]\\d|3[0-35-9]|5[1-9])|2(?:[235]\\d|4[0-8])|3(?:[26]\\d|3[02-79]|4[024-7]|5[03-7])))\\d{5}", [9]], ["(?:2(?:5[5-79]|9[1-9])|(?:33|44)\\d)\\d{6}", [9]], ["800\\d{3,7}|8(?:0[13]|20\\d)\\d{7}"], ["(?:810|902)\\d{7}", [10]], 0, 0, 0, 0, ["249\\d{6}", [9]]], "8~10"],
                BZ: ["501", "00", "(?:0800\\d|[2-8])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]], ["(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]]], 0, 0, 0, 0, 0, 0, [["(?:236|732)\\d{4}|[2-578][02]\\d{5}", [7]], ["6[0-35-7]\\d{5}", [7]], ["0800\\d{7}", [11]]]],
                CA: ["1", "011", "(?:[2-8]\\d|90)\\d{8}", [10], 0, "1", 0, 0, 0, 0, 0, [["(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|65)|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:04|13|39|47)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}"], [""], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["(?:5(?:00|2[12]|33|44|66|77|88)|622)[2-9]\\d{6}"], 0, 0, 0, ["600[2-9]\\d{6}"]]],
                CC: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d|8[0-24-9])\\d{7}|(?:[148]\\d\\d|550)\\d{6}|1\\d{5,7}", [6, 7, 8, 9, 10], 0, "0", 0, "0|([59]\\d{7})$", "8$1", 0, 0, [["8(?:51(?:0(?:02|31|60)|118)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}", [9]], ["483[0-3]\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-2457-9]|9[017-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["(?:14(?:5(?:1[0458]|[23][458])|71\\d)|550\\d\\d)\\d{4}", [9]], ["13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}", [6, 8, 10]]], "0011"],
                CD: ["243", "00", "[189]\\d{8}|[1-68]\\d{6}", [7, 9], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["12\\d{7}|[1-6]\\d{6}"], ["88\\d{5}|(?:8[0-2459]|9[017-9])\\d{7}"]]],
                CF: ["236", "00", "(?:[27]\\d{3}|8776)\\d{4}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[278]"]]], 0, 0, 0, 0, 0, 0, [["2[12]\\d{6}"], ["7[0257]\\d{6}"], 0, ["8776\\d{4}"]]],
                CG: ["242", "00", "222\\d{6}|(?:0\\d|80)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["801"]], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]]], 0, 0, 0, 0, 0, 0, [["222[1-589]\\d{5}"], ["0[14-6]\\d{7}"], 0, ["80(?:0\\d\\d|11[0-4])\\d{4}"]]],
                CH: ["41", "00", "8\\d{11}|[2-9]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]|81"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["8"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:2[12467]|3[1-4]|4[134]|5[256]|6[12]|[7-9]1)\\d{7}"], ["7[35-9]\\d{7}"], ["800\\d{6}"], ["90[016]\\d{6}"], ["878\\d{6}"], 0, ["5[18]\\d{7}"], ["74[0248]\\d{6}"], 0, ["84[0248]\\d{6}"]]],
                CI: ["225", "00", "[02-8]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[02-8]"]]], 0, 0, 0, 0, 0, 0, [["(?:2(?:0[023]|1[02357]|[23][045]|4[03-5])|3(?:0[06]|1[069]|[2-4][07]|5[09]|6[08]))\\d{5}"], ["(?:0[1-9]|[457]\\d|6[014-9]|8[4-9])\\d{6}"]]],
                CK: ["682", "00", "[2-8]\\d{4}", [5], [["(\\d{2})(\\d{3})", "$1 $2", ["[2-8]"]]], 0, 0, 0, 0, 0, 0, [["(?:2\\d|3[13-7]|4[1-5])\\d{3}"], ["[5-8]\\d{4}"]]],
                CL: ["56", "(?:0|1(?:1[0-69]|2[0-57]|5[13-58]|69|7[0167]|8[018]))0", "12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}", [9, 10, 11], [["(\\d{5})(\\d{4})", "$1 $2", ["21"], "($1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[23]"], "($1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9[2-9]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"], "($1)"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]]], 0, 0, 0, 0, 0, 0, [["(?:2(?:1962|3(?:2\\d\\d|300))|80[1-9]\\d\\d)\\d{4}|(?:22|3[2-5]|[47][1-35]|5[1-3578]|6[13-57]|8[1-9]|9[2-9])\\d{7}", [9]], ["", [9]], ["(?:123|8)00\\d{6}", [9, 11]], 0, 0, 0, 0, 0, ["44\\d{7}", [9]], ["600\\d{7,8}", [10, 11]]]],
                CM: ["237", "00", "(?:[26]\\d\\d|88)\\d{6}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["88"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]"]]], 0, 0, 0, 0, 0, 0, [["2(?:22|33|4[23])\\d{6}", [9]], ["6[5-9]\\d{7}", [9]], ["88\\d{6}", [8]]]],
                CN: ["86", "00|1(?:[12]\\d|79|9[0235-7])\\d\\d00", "1[1279]\\d{8,9}|2\\d{9}(?:\\d{2})?|[12]\\d{6,7}|86\\d{6}|(?:1[03-68]\\d|6)\\d{7,9}|(?:[3-579]\\d|8[0-57-9])\\d{6,9}", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2[0-57-9])[19]", "(?:10|2[0-57-9])(?:10|9[56])", "(?:10|2[0-57-9])(?:100|9[56])"], "0$1"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]", "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]", "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])", "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|2(?:[02-57-9]|1[1-9])", "10|2(?:[02-57-9]|1[1-9])", "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"], "0$1", 1], ["(\\d{3})(\\d{7,8})", "$1 $2", ["9"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["[12]"], "0$1", 1]], "0", 0, "0|(1(?:[12]\\d|79|9[0235-7])\\d\\d)", 0, 0, 0, [["(?:10(?:[02-79]\\d\\d|[18](?:0[1-9]|[1-9]\\d))|21(?:[18](?:0[1-9]|[1-9]\\d)|[2-79]\\d\\d))\\d{5}|(?:43[35]|754)\\d{7,8}|8(?:078\\d{7}|51\\d{7,8})|(?:10|(?:2|85)1|43[35]|754)(?:100\\d\\d|95\\d{3,4})|(?:2[02-57-9]|3(?:11|7[179])|4(?:[15]1|3[12])|5(?:1\\d|2[37]|3[12]|51|7[13-79]|9[15])|7(?:[39]1|5[57]|6[09])|8(?:71|98))(?:[02-8]\\d{7}|1(?:0(?:0\\d\\d(?:\\d{3})?|[1-9]\\d{5})|[1-9]\\d{6})|9(?:[0-46-9]\\d{6}|5\\d{3}(?:\\d(?:\\d{2})?)?))|(?:3(?:1[02-9]|35|49|5\\d|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|3[46-9]|5[2-9]|6[47-9]|7\\d|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[17]\\d|2[248]|3[04-9]|4[3-6]|5[0-3689]|6[2368]|9[02-9])|8(?:1[236-8]|2[5-7]|3\\d|5[2-9]|7[02-9]|8[36-8]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:[02-8]\\d{6}|1(?:0(?:0\\d\\d(?:\\d{2})?|[1-9]\\d{4})|[1-9]\\d{5})|9(?:[0-46-9]\\d{5}|5\\d{3,5}))", [7, 8, 9, 10, 11]], ["1740[0-5]\\d{6}|1(?:[38]\\d|4[57]|5[0-35-9]|6[25-7]|7[0-35-8]|9[189])\\d{8}", [11]], ["(?:(?:10|21)8|8)00\\d{7}", [10, 12]], ["16[08]\\d{5}", [8]], 0, 0, 0, 0, 0, ["400\\d{7}|950\\d{7,8}|(?:10|2[0-57-9]|3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))96\\d{3,4}", [7, 8, 9, 10, 11]]], "00"],
                CO: ["57", "00(?:4(?:[14]4|56)|[579])", "(?:1\\d|3)\\d{9}|[124-8]\\d{7}", [8, 10, 11], [["(\\d)(\\d{7})", "$1 $2", ["1[2-79]|[25-8]|(?:18|4)[2-9]"], "($1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3"]], ["(\\d)(\\d{3})(\\d{7})", "$1-$2-$3", ["1(?:80|9)", "1(?:800|9)"], "0$1", 0, "$1 $2 $3"]], "0", 0, "0([3579]|4(?:[14]4|56))?", 0, 0, 0, [["[124-8][2-9]\\d{6}", [8]], ["3(?:0[0-5]|1\\d|2[0-3]|5[01])\\d{7}", [10]], ["1800\\d{7}", [11]], ["19(?:0[01]|4[78])\\d{7}", [11]]]],
                CR: ["506", "00", "(?:8\\d|90)\\d{8}|[24-8]\\d{7}", [8, 10], [["(\\d{4})(\\d{4})", "$1 $2", ["[24-7]|8[3-9]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]"]]], 0, 0, "(19(?:0[0-2468]|1[09]|20|66|77|99))", 0, 0, 0, [["210[7-9]\\d{4}|2(?:[024-7]\\d|1[1-9])\\d{5}", [8]], ["6500[01]\\d{3}|5(?:0[01]|7[0-3])\\d{5}|(?:6[0-4]|7[0-3]|8[3-9])\\d{6}", [8]], ["800\\d{7}", [10]], ["90[059]\\d{7}", [10]], 0, 0, 0, 0, ["(?:210[0-6]|4\\d{3}|5100)\\d{4}", [8]]]],
                CU: ["53", "119", "[27]\\d{6,7}|[34]\\d{5,7}|5\\d{7}", [6, 7, 8], [["(\\d{2})(\\d{4,6})", "$1 $2", ["2[1-4]|[34]"], "(0$1)"], ["(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["5"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:3[23]|48)\\d{4,6}|(?:31|4[36])\\d{6}|(?:2[1-4]|4[1257]|7\\d)\\d{5,6}"], ["5\\d{7}", [8]]]],
                CV: ["238", "0", "[2-59]\\d{6}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-59]"]]], 0, 0, 0, 0, 0, 0, [["2(?:2[1-7]|3[0-8]|4[12]|5[1256]|6\\d|7[1-3]|8[1-5])\\d{4}"], ["(?:[34][36]|5[1-389]|9\\d)\\d{5}"]]],
                CW: ["599", "00", "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]]], 0, 0, 0, 0, 0, "[69]", [["9(?:4(?:3[0-5]|4[14]|6\\d)|50\\d|7(?:2[014]|3[02-9]|4[4-9]|6[357]|77|8[7-9])|8(?:3[39]|[46]\\d|7[01]|8[57-9]))\\d{4}"], ["953[01]\\d{4}|9(?:5[12467]|6[5-9])\\d{5}"], 0, 0, 0, 0, 0, ["955\\d{5}", [8]], 0, ["60[0-2]\\d{4}", [7]]]],
                CX: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d|8[0-24-9])\\d{7}|(?:[148]\\d\\d|550)\\d{6}|1\\d{5,7}", [6, 7, 8, 9, 10], 0, "0", 0, "0|([59]\\d{7})$", "8$1", 0, 0, [["8(?:51(?:0(?:01|30|59)|117)|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}", [9]], ["483[0-3]\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-2457-9]|9[017-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["(?:14(?:5(?:1[0458]|[23][458])|71\\d)|550\\d\\d)\\d{4}", [9]], ["13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}", [6, 8, 10]]], "0011"],
                CY: ["357", "00", "(?:[279]\\d|[58]0)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]], 0, 0, 0, 0, 0, 0, [["2[2-6]\\d{6}"], ["9[4-79]\\d{6}"], ["800\\d{5}"], ["90[09]\\d{5}"], ["700\\d{5}"], 0, ["(?:50|77)\\d{6}"], 0, 0, ["80[1-9]\\d{5}"]]],
                CZ: ["420", "00", "(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]], 0, 0, 0, 0, 0, 0, [["(?:2\\d|3[1257-9]|4[16-9]|5[13-9])\\d{7}"], ["(?:60[1-8]|7(?:0[2-5]|[2379]\\d))\\d{6}"], ["800\\d{6}"], ["9(?:0[05689]|76)\\d{6}"], ["70[01]\\d{6}"], 0, ["9(?:5\\d|7[2-4])\\d{6}"], 0, ["9[17]0\\d{6}"], ["8[134]\\d{7}"]]],
                DE: ["49", "00", "[2579]\\d{5,14}|49(?:[05]\\d{10}|[46][1-8]\\d{4,9})|49(?:[0-25]\\d|3[1-689]|7[1-7])\\d{4,8}|49(?:[0-2579]\\d|[34][1-9]|6[0-8])\\d{3}|49\\d{3,4}|(?:1|[368]\\d|4[0-8])\\d{3,13}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [["(\\d{2})(\\d{3,13})", "$1 $2", ["3[02]|40|[68]9"], "0$1"], ["(\\d{3})(\\d{3,12})", "$1 $2", ["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1", "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"], "0$1"], ["(\\d{4})(\\d{2,11})", "$1 $2", ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["138"], "0$1"], ["(\\d{5})(\\d{2,10})", "$1 $2", ["3"], "0$1"], ["(\\d{3})(\\d{5,11})", "$1 $2", ["181"], "0$1"], ["(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:3|80)|9"], "0$1"], ["(\\d{3})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"], ["(\\d{3})(\\d{7,12})", "$1 $2", ["8"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["18[68]"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["15[0568]"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["15[1279]"], "0$1"], ["(\\d{3})(\\d{8})", "$1 $2", ["18"], "0$1"], ["(\\d{3})(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"], "0$1"], ["(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", ["15"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:32|49[4-6]\\d)\\d{9}|49[0-7]\\d{3,9}|(?:[34]0|[68]9)\\d{3,13}|(?:2(?:0[1-689]|[1-3569]\\d|4[0-8]|7[1-7]|8[0-7])|3(?:[3569]\\d|4[0-79]|7[1-7]|8[1-8])|4(?:1[02-9]|[2-48]\\d|5[0-6]|6[0-8]|7[0-79])|5(?:0[2-8]|[124-6]\\d|[38][0-8]|[79][0-7])|6(?:0[02-9]|[1-358]\\d|[47][0-8]|6[1-9])|7(?:0[2-8]|1[1-9]|[27][0-7]|3\\d|[4-6][0-8]|8[0-5]|9[013-7])|8(?:0[2-9]|1[0-79]|2\\d|3[0-46-9]|4[0-6]|5[013-9]|6[1-8]|7[0-8]|8[0-24-6])|9(?:0[6-9]|[1-4]\\d|[589][0-7]|6[0-8]|7[0-467]))\\d{3,12}", [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]], ["15[0-25-9]\\d{8}|1(?:6[023]|7\\d)\\d{7,8}", [10, 11]], ["800\\d{7,12}", [10, 11, 12, 13, 14, 15]], ["(?:137[7-9]|900(?:[135]|9\\d))\\d{6}", [10, 11]], ["700\\d{8}", [11]], 0, ["18(?:1\\d{5,11}|[2-9]\\d{8})", [8, 9, 10, 11, 12, 13, 14]], ["16(?:4\\d{1,10}|[89]\\d{1,11})", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]], 0, ["180\\d{5,11}|13(?:7[1-6]\\d\\d|8)\\d{4}", [7, 8, 9, 10, 11, 12, 13, 14]]]],
                DJ: ["253", "00", "(?:2\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]], 0, 0, 0, 0, 0, 0, [["2(?:1[2-5]|7[45])\\d{5}"], ["77\\d{6}"]]],
                DK: ["45", "00", "[2-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-9]"]]], 0, 0, 0, 0, 0, 0, [["(?:[2-7]\\d|8[126-9]|9[1-36-9])\\d{6}"], [""], ["80\\d{6}"], ["90\\d{6}"]]],
                DM: ["1", "011", "(?:[58]\\d\\d|767|900)\\d{7}", [10], 0, "1", 0, "1|([2-7]\\d{6})$", "767$1", 0, "767", [["767(?:2(?:55|66)|4(?:2[01]|4[0-25-9])|50[0-4]|70[1-3])\\d{4}"], ["767(?:2(?:[2-4689]5|7[5-7])|31[5-7]|61[1-7])\\d{4}"], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"]]],
                DO: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "8[024]9", [["8(?:[04]9[2-9]\\d\\d|29(?:2(?:[0-59]\\d|6[04-9]|7[0-27]|8[0237-9])|3(?:[0-35-9]\\d|4[7-9])|[45]\\d\\d|6(?:[0-27-9]\\d|[3-5][1-9]|6[0135-8])|7(?:0[013-9]|[1-37]\\d|4[1-35689]|5[1-4689]|6[1-57-9]|8[1-79]|9[1-8])|8(?:0[146-9]|1[0-48]|[248]\\d|3[1-79]|5[01589]|6[013-68]|7[124-8]|9[0-8])|9(?:[0-24]\\d|3[02-46-9]|5[0-79]|60|7[0169]|8[57-9]|9[02-9])))\\d{4}"], ["8[024]9[2-9]\\d{6}"], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"]]],
                DZ: ["213", "00", "(?:[1-4]|[5-79]\\d|80)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["9619\\d{5}|(?:1\\d|2[013-79]|3[0-8]|4[0135689])\\d{6}"], ["67[0-6]\\d{6}|(?:5[4-6]|6[569]|7[7-9])\\d{7}", [9]], ["800\\d{6}", [9]], ["80[3-689]1\\d{5}", [9]], 0, 0, 0, 0, ["98[23]\\d{6}", [9]], ["80[12]1\\d{5}", [9]]]],
                EC: ["593", "00", "1800\\d{6,7}|(?:[2-7]|9\\d)\\d{7}", [8, 9, 10, 11], [["(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[2-7]"], "(0$1)", 0, "$1-$2-$3"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]], "0", 0, 0, 0, 0, 0, [["[2-7][2-7]\\d{6}", [8]], ["964[0-2]\\d{5}|9(?:39|[57][89]|6[0-37-9]|[89]\\d)\\d{6}", [9]], ["1800\\d{6,7}", [10, 11]], 0, 0, 0, 0, 0, ["[2-7]890\\d{4}", [8]]]],
                EE: ["372", "00", "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d\\d|900)\\d{4}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]"]], ["(\\d{4})(\\d{3,4})", "$1 $2", ["[45]|8(?:00|[1-4])", "[45]|8(?:00[1-9]|[1-4])"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["80"]]], 0, 0, 0, 0, 0, 0, [["(?:3[23589]|4[3-8]|6\\d|7[1-9]|88)\\d{5}", [7]], ["(?:5\\d|8[1-4])\\d{6}|5(?:(?:[02]\\d|5[0-478])\\d|1(?:[0-8]\\d|95)|6(?:4[0-4]|5[1-589]))\\d{3}", [7, 8]], ["800(?:(?:0\\d\\d|1)\\d|[2-9])\\d{3}"], ["(?:40\\d\\d|900)\\d{4}", [7, 8]], ["70[0-2]\\d{5}", [8]]]],
                EG: ["20", "00", "[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}", [8, 9, 10], [["(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"], ["(\\d{2})(\\d{6,7})", "$1 $2", ["1[35]|[4-6]|8[2468]|9[235-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[189]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:15\\d|57[23])\\d{5,6}|(?:13[23]|(?:2[2-4]|3)\\d|4(?:0[2-5]|[578][23]|64)|5(?:0[2-7]|5\\d)|6[24-689]3|8(?:2[2-57]|4[26]|6[237]|8[2-4])|9(?:2[27]|3[24]|52|6[2356]|7[2-4]))\\d{6}", [8, 9]], ["1[0-25]\\d{8}", [10]], ["800\\d{7}", [10]], ["900\\d{7}", [10]]]],
                EH: ["212", "00", "[5-8]\\d{8}", [9], 0, "0", 0, 0, 0, 0, "528[89]", [["528[89]\\d{5}"], ["692[12]\\d{5}|(?:6(?:[0-7]\\d|8[0-247-9]|9[013-9])|7(?:0[06-8]|6[1267]|7[0-27]))\\d{6}"], ["80\\d{7}"], ["89\\d{7}"], 0, 0, 0, 0, ["5924[01]\\d{4}"]]],
                ER: ["291", "00", "[178]\\d{6}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[178]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:1(?:1[12568]|[24]0|55|6[146])|8\\d\\d)\\d{4}"], ["(?:17[1-3]|7\\d\\d)\\d{4}"]]],
                ES: ["34", "00", "(?:51|[6-9]\\d)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"]]], 0, 0, 0, 0, 0, 0, [["96906(?:0[0-8]|1[1-9]|[2-9]\\d)\\d\\d|9(?:69(?:0[0-57-9]|[1-9]\\d)|73(?:[0-8]\\d|9[1-9]))\\d{4}|(?:8(?:[1356]\\d|[28][0-8]|[47][1-9])|9(?:[135]\\d|[268][0-8]|4[1-9]|7[124-9]))\\d{6}"], ["9(?:6906(?:09|10)|7390\\d\\d)\\d\\d|(?:6\\d|7[1-48])\\d{7}"], ["[89]00\\d{6}"], ["80[367]\\d{6}"], ["70\\d{7}"], 0, ["51\\d{7}"], 0, 0, ["90[12]\\d{6}"]]],
                ET: ["251", "00", "(?:11|[2-59]\\d)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-59]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:11(?:1(?:1[124]|2[2-57]|3[1-5]|5[5-8]|8[6-8])|2(?:13|3[6-8]|5[89]|7[05-9]|8[2-6])|3(?:2[01]|3[0-289]|4[1289]|7[1-4]|87)|4(?:1[69]|3[2-49]|4[0-3]|6[5-8])|5(?:1[578]|44|5[0-4])|6(?:1[78]|2[69]|39|4[5-7]|5[1-5]|6[0-59]|8[015-8]))|2(?:2(?:11[1-9]|22[0-7]|33\\d|44[1467]|66[1-68])|5(?:11[124-6]|33[2-8]|44[1467]|55[14]|66[1-3679]|77[124-79]|880))|3(?:3(?:11[0-46-8]|(?:22|55)[0-6]|33[0134689]|44[04]|66[01467])|4(?:44[0-8]|55[0-69]|66[0-3]|77[1-5]))|4(?:6(?:22[0-24-7]|33[1-5]|44[13-69]|55[14-689]|660|88[1-4])|7(?:(?:11|22)[1-9]|33[13-7]|44[13-6]|55[1-689]))|5(?:7(?:227|55[05]|(?:66|77)[14-8])|8(?:11[149]|22[013-79]|33[0-68]|44[013-8]|550|66[1-5]|77\\d)))\\d{4}"], ["9\\d{8}"]]],
                FI: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}|[1-35689]\\d{4}", [5, 6, 7, 8, 9, 10], [["(\\d)(\\d{4,9})", "$1 $2", ["[2568][1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1 $2", ["(?:[12]0|7)0|[368]"], "0$1"], ["(\\d{2})(\\d{4,8})", "$1 $2", ["[12457]"], "0$1"]], "0", 0, 0, 0, 0, "1[03-79]|[2-9]", [["(?:1[3-79][1-8]|[235689][1-8]\\d)\\d{2,6}", [5, 6, 7, 8, 9]], ["(?:4[0-8]|50)\\d{4,8}", [6, 7, 8, 9, 10]], ["800\\d{4,6}", [7, 8, 9]], ["[67]00\\d{5,6}", [8, 9]], 0, 0, ["(?:10|[23][09])\\d{4,8}|60(?:[12]\\d{5,6}|6\\d{7})|7(?:(?:1|3\\d)\\d{7}|5[03-9]\\d{3,7})|20[2-59]\\d\\d"]], "00"],
                FJ: ["679", "0(?:0|52)", "45\\d{5}|(?:0800\\d|[235-9])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]], 0, 0, 0, 0, 0, 0, [["603\\d{4}|(?:3[0-5]|6[25-7]|8[58])\\d{5}", [7]], ["(?:[279]\\d|45|5[01568]|8[034679])\\d{5}", [7]], ["0800\\d{7}", [11]]], "00"],
                FK: ["500", "00", "[2-7]\\d{4}", [5], 0, 0, 0, 0, 0, 0, 0, [["[2-47]\\d{4}"], ["[56]\\d{4}"]]],
                FM: ["691", "00", "[39]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[39]"]]], 0, 0, 0, 0, 0, 0, [["(?:3[2357]0[1-9]|9[2-6]\\d\\d)\\d{3}"], ["(?:3[2357]0[1-9]|9[2-7]\\d\\d)\\d{3}"]]],
                FO: ["298", "00", "(?:[2-8]\\d|90)\\d{4}", [6], [["(\\d{6})", "$1", ["[2-9]"]]], 0, 0, "(10(?:01|[12]0|88))", 0, 0, 0, [["(?:20|[34]\\d|8[19])\\d{4}"], ["(?:[27][1-9]|5\\d)\\d{4}"], ["80[257-9]\\d{3}"], ["90(?:[13-5][15-7]|2[125-7]|99)\\d\\d"], 0, 0, 0, 0, ["(?:6[0-36]|88)\\d{4}"]]],
                FR: ["33", "00", "[1-9]\\d{8}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["[1-5]\\d{8}"], ["700\\d{6}|(?:6\\d|7[3-9])\\d{7}"], ["80[0-5]\\d{6}"], ["8[129]\\d{7}"], 0, 0, ["80[6-9]\\d{6}"], 0, ["9\\d{8}"], ["884\\d{6}"]]],
                GA: ["241", "00", "(?:0\\d|[2-7])\\d{6}", [7, 8], [["(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]]], 0, 0, 0, 0, 0, 0, [["01\\d{6}", [8]], ["(?:0[2-7]|[2-7])\\d{6}"]]],
                GB: ["44", "00", "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}", [7, 9, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["845", "8454", "84546", "845464"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["800"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["1(?:[2-69][02-9]|[78])"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[25]|7(?:0|6[024-9])", "[25]|7(?:0|6(?:[04-9]|2[356]))"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1389]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:1(?:(?:1(?:3[0-58]|4[0-5]|5[0-26-9]|6[0-4]|[78][0-49])|3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d\\d|2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d\\d|1(?:[0-7]\\d\\d|80[04589])))|2(?:0[01378]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d|7(?:(?:26(?:6[13-9]|7[0-7])|442\\d|50(?:2[0-3]|[3-68]2|76))\\d|6888[2-46-8]))\\d\\d", [9, 10]], ["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:0[0-2]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}", [10]], ["56\\d{8}", [10]]], 0, " x"],
                GD: ["1", "011", "(?:473|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-9]\\d{6})$", "473$1", 0, "473", [["473(?:2(?:3[0-2]|69)|3(?:2[89]|86)|4(?:[06]8|3[5-9]|4[0-49]|5[5-79]|73|90)|63[68]|7(?:58|84)|800|938)\\d{4}"], ["473(?:4(?:0[2-79]|1[04-9]|2[0-5]|58)|5(?:2[01]|3[3-8])|901)\\d{4}"], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"]]],
                GE: ["995", "00", "(?:[3-57]\\d\\d|800)\\d{6}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["32"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[57]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:3(?:[256]\\d|4[124-9]|7[0-4])|4(?:1\\d|2[2-7]|3[1-79]|4[2-8]|7[239]|9[1-7]))\\d{6}"], ["(?:5(?:[14]4|5[0157-9]|68|7[0147-9]|9[1-35-9])|790)\\d{6}"], ["800\\d{6}"], 0, 0, 0, 0, 0, ["706\\d{6}"]]],
                GF: ["594", "00", "[56]94\\d{6}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[56]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["594(?:[023]\\d|1[01]|4[03-9]|5[6-9]|6[0-3]|80|9[014])\\d{4}"], ["694(?:[0-249]\\d|3[0-48])\\d{4}"]]],
                GG: ["44", "00", "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?", [7, 9, 10], 0, "0", 0, "0|([25-9]\\d{5})$", "1481$1", 0, 0, [["1481[25-9]\\d{5}", [10]], ["7(?:(?:781|839)\\d|911[17])\\d{5}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:0[0-2]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}", [10]], ["56\\d{8}", [10]]]],
                GH: ["233", "00", "(?:[235]\\d{3}|800)\\d{5}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["3(?:[167]2[0-6]|22[0-5]|32[0-3]|4(?:2[013-9]|3[01])|52[0-7]|82[0-2])\\d{5}|3(?:[0-8]8|9[28])0\\d{5}|3(?:0[237]|[1-9]7)\\d{6}", [9]], ["56[01]\\d{6}|(?:2[0346-8]|5[0457])\\d{7}", [9]], ["800\\d{5}", [8]]]],
                GI: ["350", "00", "(?:[25]\\d\\d|629)\\d{5}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["2"]]], 0, 0, 0, 0, 0, 0, [["2190[0-2]\\d{3}|2(?:00\\d|16[24-7]|2(?:2[2457]|50))\\d{4}"], ["(?:5[46-8]\\d|629)\\d{5}"]]],
                GL: ["299", "00", "(?:19|[2-689]\\d)\\d{4}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-689]"]]], 0, 0, 0, 0, 0, 0, [["(?:19|3[1-7]|6[14689]|8[14-79]|9\\d)\\d{4}"], ["(?:[25][1-9]|4[2-9])\\d{4}"], ["80\\d{4}"], 0, 0, 0, 0, 0, ["3[89]\\d{4}"]]],
                GM: ["220", "00", "[2-9]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]], 0, 0, 0, 0, 0, 0, [["(?:4(?:[23]\\d\\d|4(?:1[024679]|[6-9]\\d))|5(?:54[0-7]|6[67]\\d|7(?:1[04]|2[035]|3[58]|48))|8\\d{3})\\d{3}"], ["(?:[23679]\\d|5[01])\\d{5}"]]],
                GN: ["224", "00", "(?:30|6\\d\\d|722)\\d{6}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]], 0, 0, 0, 0, 0, 0, [["30(?:24|3[12]|4[1-35-7]|5[13]|6[189]|[78]1|9[1478])\\d{4}", [8]], ["6[02356]\\d{7}", [9]], 0, 0, 0, 0, 0, 0, ["722\\d{6}", [9]]]],
                GP: ["590", "00", "(?:590|69\\d)\\d{6}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[56]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["590(?:0[1-68]|1[0-2]|2[0-68]|3[1289]|4[0-24-9]|5[3-579]|6[0189]|7[08]|8[0-689]|9\\d)\\d{4}"], ["69(?:0\\d\\d|1(?:2[29]|3[0-5]))\\d{4}"]]],
                GQ: ["240", "00", "222\\d{6}|(?:3\\d|55|[89]0)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]], ["(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]], 0, 0, 0, 0, 0, 0, [["33[0-24-9]\\d[46]\\d{4}|3(?:33|5\\d)\\d[7-9]\\d{4}"], ["(?:222|55[015])\\d{6}"], ["80\\d[1-9]\\d{5}"], ["90\\d[1-9]\\d{5}"]]],
                GR: ["30", "00", "(?:[268]\\d|[79]0)\\d{8}", [10], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]], ["(\\d{4})(\\d{6})", "$1 $2", ["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2689]"]]], 0, 0, 0, 0, 0, 0, [["2(?:1\\d\\d|2(?:2[1-46-9]|[36][1-8]|4[1-7]|5[1-4]|7[1-5]|[89][1-9])|3(?:1\\d|2[1-57]|[35][1-3]|4[13]|7[1-7]|8[124-6]|9[1-79])|4(?:1\\d|2[1-8]|3[1-4]|4[13-5]|6[1-578]|9[1-5])|5(?:1\\d|[29][1-4]|3[1-5]|4[124]|5[1-6])|6(?:1\\d|[269][1-6]|3[1245]|4[1-7]|5[13-9]|7[14]|8[1-5])|7(?:1\\d|2[1-5]|3[1-6]|4[1-7]|5[1-57]|6[135]|9[125-7])|8(?:1\\d|2[1-5]|[34][1-4]|9[1-57]))\\d{6}"], ["6(?:8[57-9]|9\\d)\\d{7}"], ["800\\d{7}"], ["90[19]\\d{7}"], ["70\\d{8}"], 0, 0, 0, 0, ["8(?:0[16]|12|25)\\d{7}"]]],
                GT: ["502", "00", "(?:1\\d{3}|[2-7])\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]], 0, 0, 0, 0, 0, 0, [["[267][2-9]\\d{6}", [8]], ["[3-5]\\d{7}", [8]], ["18[01]\\d{8}", [11]], ["19\\d{9}", [11]]]],
                GU: ["1", "011", "(?:[58]\\d\\d|671|900)\\d{7}", [10], 0, "1", 0, "1|([3-9]\\d{6})$", "671$1", 0, "671", [["671(?:3(?:00|3[39]|4[349]|55|6[26])|4(?:00|56|7[1-9]|8[0236-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[235-9])|7(?:[0479]7|2[0167]|3[45]|8[7-9])|8(?:[2-57-9]8|6[48])|9(?:2[29]|6[79]|7[1279]|8[7-9]|9[78]))\\d{4}"], [""], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"]]],
                GW: ["245", "00", "[49]\\d{8}|4\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["40"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]]], 0, 0, 0, 0, 0, 0, [["443\\d{6}", [9]], ["9(?:5\\d|6[569]|77)\\d{6}", [9]], 0, 0, 0, 0, 0, 0, ["40\\d{5}", [7]]]],
                GY: ["592", "001", "(?:862\\d|9008)\\d{3}|(?:[2-46]\\d|77)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-46-9]"]]], 0, 0, 0, 0, 0, 0, [["(?:2(?:1[6-9]|2[0-35-9]|3[1-4]|5[3-9]|6\\d|7[0-24-79])|3(?:2[25-9]|3\\d)|4(?:4[0-24]|5[56])|77[1-57])\\d{4}"], ["6\\d{6}"], ["(?:289|862)\\d{4}"], ["9008\\d{3}"]]],
                HK: ["852", "00(?:30|5[09]|[126-9]?)", "8[0-46-9]\\d{6,7}|9\\d{4}(?:\\d(?:\\d(?:\\d{4})?)?)?|(?:[235-79]\\d|46)\\d{6}", [5, 6, 7, 8, 9, 11], [["(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]], 0, 0, 0, 0, 0, 0, [["(?:384[0-24]|58(?:0[1-8]|1[2-9]))\\d{4}|(?:2(?:[13-8]\\d|2[013-9]|9[0-24-9])|3(?:[1569][0-24-9]|4[0-246-9]|7[0-24-69]|89))\\d{5}", [8]], ["(?:46(?:0[0-6]|1[0-2]|4[0-57-9])|5730|(?:626|848)[01]|707[1-5]|929[03-9])\\d{4}|(?:5(?:[1-59][0-46-9]|6[0-4689]|7[0-2469])|6(?:0[1-9]|[13-59]\\d|[268][0-57-9]|7[0-79])|9(?:0[1-9]|1[02-9]|[2358][0-8]|[467]\\d))\\d{5}", [8]], ["800\\d{6}", [9]], ["900(?:[0-24-9]\\d{7}|3\\d{1,4})", [5, 6, 7, 8, 11]], ["8(?:1[0-4679]\\d|2(?:[0-36]\\d|7[0-4])|3(?:[034]\\d|2[09]|70))\\d{4}", [8]], 0, ["30(?:0[1-9]|[15-7]\\d|2[047]|89)\\d{4}", [8]], ["7(?:1(?:0[0-38]|1[0-3679]|3[013]|69|9[136])|2(?:[02389]\\d|1[18]|7[27-9])|3(?:[0-38]\\d|7[0-369]|9[2357-9])|47\\d|5(?:[178]\\d|5[0-5])|6(?:0[0-7]|2[236-9]|[35]\\d)|7(?:[27]\\d|8[7-9])|8(?:[23689]\\d|7[1-9])|9(?:[025]\\d|6[0-246-8]|7[0-36-9]|8[238]))\\d{4}", [8]]], "00"],
                HN: ["504", "00", "[237-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]], 0, 0, 0, 0, 0, 0, [["2(?:2(?:0[019]|1[1-36]|[23]\\d|4[04-6]|5[57]|6[24]|7[0135689]|8[01346-9]|9[0-2])|4(?:07|2[3-59]|3[13-689]|4[0-68]|5[1-35])|5(?:08|16|4[03-5]|5\\d|6[4-6]|74|80)|6(?:[056]\\d|17|20|3[04]|4[0-378]|[78][0-8]|9[01])|7(?:6[46-9]|7[02-9]|8[034])|8(?:79|8[0-357-9]|9[1-57-9]))\\d{4}"], ["[37-9]\\d{7}"]]],
                HR: ["385", "00", "(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}", [6, 7, 8, 9], [["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["6[01]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[67]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-5]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]], "0", 0, 0, 0, 0, 0, [["1\\d{7}|(?:2[0-3]|3[1-5]|4[02-47-9]|5[1-3])\\d{6,7}", [8, 9]], ["9(?:751\\d{5}|8\\d{6,7})|9(?:01|[1259]\\d|7[0679])\\d{6}", [8, 9]], ["80[01]\\d{4,6}", [7, 8, 9]], ["6[01459]\\d{6}|6[01]\\d{4,5}", [6, 7, 8]], ["7[45]\\d{6}", [8]], 0, ["62\\d{6,7}|72\\d{6}", [8, 9]]]],
                HT: ["509", "00", "[2-489]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-489]"]]], 0, 0, 0, 0, 0, 0, [["2(?:2\\d|5[1-5]|81|9[149])\\d{5}"], ["[34]\\d{7}"], ["8\\d{7}"], 0, 0, 0, 0, 0, ["9(?:[67][0-4]|8[0-3589]|9\\d)\\d{5}"]]],
                HU: ["36", "00", "[2357]\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "06 $1"]], "06", 0, 0, 0, 0, 0, [["(?:1\\d|[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6[23689]|8[2-57-9]|9[2-69])\\d{6}", [8]], ["(?:[257]0|3[01])\\d{7}", [9]], ["[48]0\\d{6}", [8]], ["9[01]\\d{6}", [8]], 0, 0, ["38\\d{7}", [9]], 0, ["21\\d{7}", [9]]]],
                ID: ["62", "00[189]", "(?:(?:007803|8\\d{4})\\d|[1-36])\\d{6}|[1-9]\\d{8,10}|[2-9]\\d{7}", [7, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]], ["(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"], ["(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"], ["(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"], ["(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"], ["(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"], ["(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"]], "0", 0, 0, 0, 0, 0, [["2[124]\\d{7,8}|619\\d{8}|2(?:1(?:14|500)|2\\d{3})\\d{3}|61\\d{5,8}|(?:2(?:[35][1-4]|6[0-8]|7[1-6]|8\\d|9[1-8])|3(?:1|[25][1-8]|3[1-68]|4[1-3]|6[1-3568]|7[0-469]|8\\d)|4(?:0[1-589]|1[01347-9]|2[0-36-8]|3[0-24-68]|43|5[1-378]|6[1-5]|7[134]|8[1245])|5(?:1[1-35-9]|2[25-8]|3[124-9]|4[1-3589]|5[1-46]|6[1-8])|6(?:[25]\\d|3[1-69]|4[1-6])|7(?:02|[125][1-9]|[36]\\d|4[1-8]|7[0-36-9])|9(?:0[12]|1[013-8]|2[0-479]|5[125-8]|6[23679]|7[159]|8[01346]))\\d{5,8}", [7, 8, 9, 10, 11]], ["8[1-35-9]\\d{7,10}", [9, 10, 11, 12]], ["007803\\d{7}|(?:177\\d|800)\\d{5,7}", [8, 9, 10, 11, 13]], ["809\\d{7}", [10]], 0, 0, ["(?:1500|8071\\d{3})\\d{3}", [7, 10]], 0, 0, ["804\\d{7}", [10]]]],
                IE: ["353", "00", "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"], "(0$1)"], ["(\\d{3})(\\d{5})", "$1 $2", ["[45]0"], "(0$1)"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2569]|4[1-69]|7[14]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]], ["(\\d{2})(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["4"], "(0$1)"]], "0", 0, 0, 0, 0, 0, [["(?:1\\d|21)\\d{6,7}|(?:2[24-9]|4(?:0[24]|5\\d|7)|5(?:0[45]|1\\d|8)|6(?:1\\d|[237-9])|9(?:1\\d|[35-9]))\\d{5}|(?:23|4(?:[1-469]|8[0-46-9])|5[23679]|6[4-6]|7[14]|9[04])\\d{7}"], ["8(?:22|[35-9]\\d)\\d{6}", [9]], ["1800\\d{6}", [10]], ["15(?:1[2-8]|[2-8]0|9[089])\\d{6}", [10]], ["700\\d{6}", [9]], 0, ["818\\d{6}", [9]], 0, ["76\\d{7}", [9]], ["18[59]0\\d{6}", [10]]]],
                IL: ["972", "0(?:0|1[2-9])", "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}", [7, 8, 9, 10, 11, 12], [["(\\d{4})(\\d{3})", "$1-$2", ["125"]], ["(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]], ["(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", ["12"]], ["(\\d{4})(\\d{6})", "$1-$2", ["159"]], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]], ["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["15"]]], "0", 0, 0, 0, 0, 0, [["153\\d{8,9}|[2-489]\\d{7}", [8, 11, 12]], ["5(?:(?:[0-489][2-9]|6\\d)\\d|5(?:01|2[2-6]|3[23]|4[45]|5[05689]|6[6-8]|7[0-267]|8[7-9]|9[1-9]))\\d{5}", [9]], ["1(?:255|80[019]\\d{3})\\d{3}", [7, 10]], ["1212\\d{4}|1(?:200|9(?:0[01]|19))\\d{6}", [8, 10]], 0, 0, ["1599\\d{6}", [10]], 0, ["78(?:33|55|77|81)\\d{5}|7(?:18|2[23]|3[237]|47|6[58]|7\\d|82|9[235-9])\\d{6}", [9]], ["1700\\d{6}", [10]]]],
                IM: ["44", "00", "1624\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "0|([5-8]\\d{5})$", "1624$1", 0, "74576|(?:16|7[56])24", [["1624[5-8]\\d{5}"], ["76245[06]\\d{4}|7(?:4576|[59]24\\d|624[0-4689])\\d{5}"], ["808162\\d{4}"], ["8(?:440[49]06|72299\\d)\\d{3}|(?:8(?:45|70)|90[0167])624\\d{4}"], ["70\\d{8}"], 0, ["3440[49]06\\d{3}|(?:3(?:08162|3\\d{4}|45624|7(?:0624|2299))|55\\d{4})\\d{4}"], 0, ["56\\d{8}"]]],
                IN: ["91", "00", "(?:00800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}", [8, 9, 10, 11, 12, 13], [["(\\d{8})", "$1", ["5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"], 0, 1], ["(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], 0, 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|(?:55|61)2|7(?:31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:1(?:29|60|8[06])|261|552|788[01])[2-7]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])"], "0$1", 1], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|[4-8])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807", "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|[4-8])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]", "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|[4-8])|7(?:1(?:[013-8]|9[6-9])|3179)|807(?:1|9[1-3])|(?:1552|7(?:28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"], "0$1", 1], ["(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1", 1], ["(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["1(?:6|8[06])", "1(?:6|8[06]0)"], 0, 1], ["(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"], 0, 1]], "0", 0, 0, 0, 0, 0, [["782[0-6][2-7]\\d{5}|(?:170[24]|2(?:80[13468]|90\\d)|380\\d|4(?:20[24]|72[2-8])|552[1-7])\\d{6}|(?:342|674|788)(?:[0189][2-7]|[2-7]\\d)\\d{5}|(?:11|2[02]|33|4[04]|79|80)[2-7]\\d{7}|(?:1(?:2[0-249]|3[0-25]|4[145]|[59][14]|6[014]|7[1257]|8[01346])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[13]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[014-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|2[14]|3[134]|4[47]|5[15]|[67]1)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91))[2-7]\\d{6}|(?:1(?:2[35-8]|3[346-9]|4[236-9]|[59][0235-9]|6[235-9]|7[34689]|8[257-9])|2(?:1[134689]|3[24-8]|4[2-8]|5[25689]|6[2-4679]|7[13-79]|8[2-479]|9[235-9])|3(?:01|1[79]|2[1-5]|4[5-8]|5[125689]|6[235-7]|7[157-9]|8[2-46-8])|4(?:1[14578]|2[5689]|3[2-467]|5[4-7]|6[35]|73|8[2689]|9[2389])|5(?:[16][146-9]|2[14-8]|3[1346]|4[14-69]|5[46]|7[2-4]|8[2-8]|9[246])|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|2[0235-9]|3[2679]|4[1-35689]|5[2-46-9]|[67][02-9]|8[013-7]|9[0189])|8(?:1[1357-9]|2[235-8]|3[03-57-9]|4[0-24-9]|5\\d|6[2457-9]|7[1-6]|8[1256]|9[2-4]))\\d[2-7]\\d{5}", [10]], ["(?:6(?:1279|350[0-6])|7(?:3(?:1(?:11|7[02-8])|411)|4[47](?:11|7[02-8])|5111|700[02-9]|88(?:11|7[02-9])|9(?:313|79[07-9]))|8(?:079[04-9]|(?:16|2[014]|3[126]|6[136]|7[78]|8[34]|91)7[02-8]))\\d{5}|7(?:28[6-8]|3(?:2[0-49]|9[2-5])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7])[089]\\d{5}|(?:6(?:0(?:0[0-3569]|26|33)|2(?:[06]\\d|3[02589]|8[0-479]|9[0-79])|3(?:0[0-79]|5[1-9]|6[0-4679]|7[0-24-9]|[89]\\d)|9(?:0[019]|13))|7(?:0\\d\\d|19[0-5]|2(?:[0235-79]\\d|[14][017-9]|8[0-59])|3(?:[05-8]\\d|1[089]|2[5-8]|3[017-9]|4[07-9]|9[016-9])|4(?:0\\d|1[015-9]|[29][89]|39|[47][089]|8[389])|5(?:[0346-8]\\d|1[07-9]|2[04-9]|5[017-9]|9[7-9])|6(?:0[0-47]|1[0-257-9]|2[0-4]|3[19]|5[4589]|[6-9]\\d)|7(?:0[289]|[1-9]\\d)|8(?:[0-79]\\d|8[089])|9(?:[089]\\d|7[02-8]))|8(?:0(?:[01589]\\d|6[67]|7[02-8])|1(?:[0-57-9]\\d|6[089])|2(?:[014][089]|[235-9]\\d)|3(?:[03-57-9]\\d|[126][089])|[45]\\d\\d|6(?:[02457-9]\\d|[136][089])|7(?:0[07-9]|[1-69]\\d|[78][089])|8(?:[0-25-9]\\d|3[089]|4[0489])|9(?:[02-9]\\d|1[0289]))|9\\d{3})\\d{6}", [10]], ["00800\\d{7}|1(?:600\\d{6}|80(?:0\\d{4,9}|3\\d{9}))"], ["186[12]\\d{9}", [13]], 0, 0, ["140\\d{7}", [10]], 0, 0, ["1860\\d{7}", [11]]]],
                IO: ["246", "00", "3\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["3"]]], 0, 0, 0, 0, 0, 0, [["37\\d{5}"], ["38\\d{5}"]]],
                IQ: ["964", "00", "(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0", 0, 0, 0, 0, 0, [["1\\d{7}|(?:2[13-5]|3[02367]|4[023]|5[03]|6[026])\\d{6,7}", [8, 9]], ["7[3-9]\\d{8}", [10]]]],
                IR: ["98", "00", "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}", [4, 5, 6, 7, 10], [["(\\d{4,5})", "$1", ["96"], "0$1"], ["(\\d{2})(\\d{4,5})", "$1 $2", ["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])(?:[03-57]\\d{7}|[16]\\d{3}(?:\\d{4})?|[289]\\d{3}(?:\\d(?:\\d{3})?)?)|94(?:000[09]|2(?:121|[2689]0\\d)|30[0-2]\\d|4(?:111|40\\d))\\d{4}", [6, 7, 10]], ["9(?:(?:0(?:[1-35]\\d|44)|(?:[13]\\d|2[0-2])\\d)\\d|9(?:(?:[0-2]\\d|44)\\d|5[15]0|8(?:1[0-2]|88)|9(?:0[013]|1[0134]|21|77|9[6-9])))\\d{5}", [10]], 0, 0, 0, 0, ["96(?:0[12]|2[16-8]|3(?:08|[14]5|[23]|66)|4(?:0|80)|5[01]|6[89]|86|9[19])", [4, 5]], 0, ["993\\d{7}", [10]]]],
                IS: ["354", "00|1(?:0(?:01|[12]0)|100)", "(?:38\\d|[4-9])\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]], 0, 0, 0, 0, 0, 0, [["(?:4(?:1[0-24-69]|2[0-7]|[37][0-8]|4[0-245]|5[0-68]|6\\d|8[0-36-8])|5(?:05|[156]\\d|2[02578]|3[0-579]|4[03-7]|7[0-2578]|8[0-35-9]|9[013-689])|87[23])\\d{4}", [7]], ["(?:38[589]\\d\\d|6(?:1[1-8]|2[0-6]|3[027-9]|4[014679]|5[0159]|6[0-69]|70|8[06-8]|9\\d)|7(?:5[057]|[6-8]\\d|9[0-3])|8(?:2[0-59]|[3469]\\d|5[1-9]|8[28]))\\d{4}"], ["800\\d{4}", [7]], ["90\\d{5}", [7]], 0, 0, ["809\\d{4}", [7]], 0, ["49\\d{5}", [7]]], "00"],
                IT: ["39", "00", "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}", [6, 7, 8, 9, 10, 11], [["(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]], ["(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[245])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))"]], ["(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]], ["(\\d{4})(\\d{4})", "$1 $2", ["894"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1[4679]|[38]"]], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]"]], ["(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["3"]]], 0, 0, 0, 0, 0, 0, [["0669[0-79]\\d{1,6}|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}"], ["3[1-9]\\d{8}|3[2-9]\\d{7}", [9, 10]], ["80(?:0\\d{3}|3)\\d{3}", [6, 9]], ["(?:0878\\d\\d|89(?:2|4[5-9]\\d))\\d{3}|89[45][0-4]\\d\\d|(?:1(?:44|6[346])|89(?:5[5-9]|9))\\d{6}", [6, 8, 9, 10]], ["1(?:78\\d|99)\\d{6}", [9, 10]], 0, 0, 0, ["55\\d{8}", [10]], ["84(?:[08]\\d{3}|[17])\\d{3}", [6, 9]]]],
                JE: ["44", "00", "1534\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "0|([0-24-8]\\d{5})$", "1534$1", 0, 0, [["1534[0-24-8]\\d{5}"], ["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97[7-9]))\\d{5}"], ["80(?:07(?:35|81)|8901)\\d{4}"], ["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"], ["701511\\d{4}"], 0, ["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"], ["76(?:0[0-2]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}"], ["56\\d{8}"]]],
                JM: ["1", "011", "(?:[58]\\d\\d|658|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "658|876", [["(?:658(?:2(?:[0-8]\\d|9[0-46-9])|[3-9]\\d\\d)|876(?:5(?:02|1[0-468]|2[35]|63)|6(?:0[1-3579]|1[0237-9]|[23]\\d|40|5[06]|6[2-589]|7[05]|8[04]|9[4-9])|7(?:0[2-689]|[1-6]\\d|8[056]|9[45])|9(?:0[1-8]|1[02378]|[2-8]\\d|9[2-468])))\\d{4}"], ["(?:658295|876(?:(?:2[14-9]|[348]\\d)\\d|5(?:0[13-9]|17|[2-57-9]\\d|6[0-24-9])|7(?:0[07]|7\\d|8[1-47-9]|9[0-36-9])|9(?:[01]9|9[0579])))\\d{4}"], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"]]],
                JO: ["962", "00", "900\\d{5}|(?:(?:[268]|7\\d)\\d|32|53)\\d{6}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["70"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:2(?:6(?:2[0-35-9]|3[0-578]|4[24-7]|5[0-24-8]|[6-8][023]|9[0-3])|7(?:0[1-79]|10|2[014-7]|3[0-689]|4[019]|5[0-3578]))|32(?:0[1-69]|1[1-35-7]|2[024-7]|3\\d|4[0-3]|[57][023]|6[03])|53(?:0[0-3]|[13][023]|2[0-59]|49|5[0-35-9]|6[15]|7[45]|8[1-6]|9[0-36-9])|6(?:2(?:[05]0|22)|3(?:00|33)|4(?:0[0-25]|1[2-7]|2[0569]|[38][07-9]|4[025689]|6[0-589]|7\\d|9[0-2])|5(?:[01][056]|2[034]|3[0-57-9]|4[178]|5[0-69]|6[0-35-9]|7[1-379]|8[0-68]|9[0239]))|87(?:[029]0|7[08]))\\d{4}", [8]], ["7(?:55[0-49]|(?:7[025-9]|[89][0-25-9])\\d)\\d{5}", [9]], ["80\\d{6}", [8]], ["900\\d{5}", [8]], ["70\\d{7}", [9]], 0, ["8(?:10|8\\d)\\d{5}", [8]], ["74(?:66|77)\\d{5}", [9]], 0, ["85\\d{6}", [8]]]],
                JP: ["81", "010", "00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}", [8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [["(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"], ["(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:49|80|9[16])", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[78]|96)|477|51[24]|636)|9(?:496|802|9(?:1[23]|69))|1(?:45|58)[67]", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[78]|96[2457-9])|477|51[24]|636[2-57-9])|9(?:496|802|9(?:1[23]|69))|1(?:45|58)[67]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["[36]|4(?:2[09]|7[01])", "[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[279]|49|6[0-24-689]|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[0468][01]|[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|2[01]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9])|5(?:2|3[045]|4[0-369]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|49|6(?:[0-24]|5[0-3589]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:49|55|83)[29]|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:47[59]|59[89]|8(?:6[68]|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[0468][01]|[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|2[01]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|7(?:[017-9]|6[6-8]))|49|6(?:[0-24]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[0468][01]|[1-3]|5[0-69]|7[015-9]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17|3[015-9]))|4(?:2(?:[13-79]|2[01]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9(?:[019]|4[1-3]|6(?:[0-47-9]|5[01346-9])))|3(?:[29]|7(?:[017-9]|6[6-8]))|49|6(?:[0-24]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:223|8699)[014-9]|(?:48|829(?:2|66)|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["[14]|[29][2-9]|5[3-9]|7[2-4679]|8(?:[246-9]|3[3-8]|5[2-9])", "[14]|[29][2-9]|5[3-9]|7[2-4679]|8(?:[246-9]|3(?:[3-6][2-9]|7|8[2-5])|5[2-9])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[2579]|80"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:1(?:1[235-8]|2[3-6]|3[3-9]|4[2-6]|[58][2-8]|6[2-7]|7[2-9]|9[1-9])|(?:2[2-9]|[36][1-9])\\d|4(?:[2-578]\\d|6[02-8]|9[2-59])|5(?:[2-589]\\d|6[1-9]|7[2-8])|7(?:[25-9]\\d|3[4-9]|4[02-9])|8(?:[2679]\\d|3[2-9]|4[5-9]|5[1-9]|8[03-9])|9(?:[2-58]\\d|[679][1-9]))\\d{6}", [9]], ["[7-9]0[1-9]\\d{7}", [10]], ["00(?:(?:37|66)\\d{6,13}|(?:777(?:[01]|(?:5|8\\d)\\d)|882[1245]\\d\\d)\\d\\d)|(?:120|800\\d)\\d{6}"], ["990\\d{6}", [9]], ["60\\d{7}", [9]], 0, ["570\\d{6}", [9]], ["20\\d{8}", [10]], ["50[1-9]\\d{7}", [10]]]],
                KE: ["254", "000", "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}", [7, 8, 9, 10], [["(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[17]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:4[245]|5[2-79]|6[01457-9])\\d{5,7}|(?:4[136]|5[08]|62)\\d{7}|(?:[24]0|51|66)\\d{6,7}", [7, 8, 9]], ["(?:1(?:0[0-2]|1[01])|7\\d\\d)\\d{6}", [9]], ["800[24-8]\\d{5,6}", [9, 10]], ["900[02-9]\\d{5}", [9]]]],
                KG: ["996", "00", "8\\d{9}|(?:[235-8]\\d|99)\\d{7}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[346]|[24-79])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-79]|88"], "0$1"], ["(\\d{3})(\\d{3})(\\d)(\\d{2,3})", "$1 $2 $3 $4", ["8"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:3(?:1(?:[256]\\d|3[1-9]|47)|2(?:22|3[0-479]|6[0-7])|4(?:22|5[6-9]|6\\d)|5(?:22|3[4-7]|59|6\\d)|6(?:22|5[35-7]|6\\d)|7(?:22|3[468]|4[1-9]|59|[67]\\d)|9(?:22|4[1-8]|6\\d))|6(?:09|12|2[2-4])\\d)\\d{5}", [9]], ["8801\\d{5}|(?:2(?:0[0-35]|2\\d)|5(?:0[0-57-9]|[124-7]\\d)|7(?:[07]\\d|55)|99[05-9])\\d{6}", [9]], ["800\\d{6,7}"]]],
                KH: ["855", "00[14-9]", "1\\d{9}|[1-9]\\d{7,8}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0", 0, 0, 0, 0, 0, [["23(?:4(?:[2-4]|[56]\\d)|[568]\\d\\d)\\d{4}|23[236-9]\\d{5}|(?:2[4-6]|3[2-6]|4[2-4]|[5-7][2-5])(?:(?:[237-9]|4[56]|5\\d)\\d{5}|6\\d{5,6})", [8, 9]], ["(?:(?:1[28]|3[18]|9[67])\\d|6[016-9]|7(?:[07-9]|[16]\\d)|8(?:[013-79]|8\\d))\\d{6}|(?:1\\d|9[0-57-9])\\d{6}|(?:2[3-6]|3[2-6]|4[2-4]|[5-7][2-5])48\\d{5}", [8, 9]], ["1800(?:1\\d|2[019])\\d{4}", [10]], ["1900(?:1\\d|2[09])\\d{4}", [10]]]],
                KI: ["686", "00", "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}", [5, 8], 0, "0", 0, 0, 0, 0, 0, [["(?:[24]\\d|3[1-9]|50|65(?:02[12]|12[56]|22[89]|[3-5]00)|7(?:27\\d\\d|3100|5(?:02[12]|12[56]|22[89]|[34](?:00|81)|500))|8[0-5])\\d{3}"], ["73140\\d{3}|(?:630[01]|730[0-5])\\d{4}|[67]200[01]\\d{3}", [8]], 0, 0, 0, 0, 0, 0, ["30(?:0[01]\\d\\d|12(?:11|20))\\d\\d", [8]]]],
                KM: ["269", "00", "[3478]\\d{6}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[3478]"]]], 0, 0, 0, 0, 0, 0, [["7[4-7]\\d{5}"], ["[34]\\d{6}"], 0, ["8\\d{6}"]]],
                KN: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-7]\\d{6})$", "869$1", 0, "869", [["869(?:2(?:29|36)|302|4(?:6[015-9]|70))\\d{4}"], ["869(?:5(?:5[6-8]|6[5-7])|66\\d|76[02-7])\\d{4}"], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"]]],
                KP: ["850", "00|99", "85\\d{6}|(?:19\\d|2)\\d{7}", [8, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:2\\d|85)\\d{6}", [8]], ["19[1-3]\\d{7}", [10]]]],
                KR: ["82", "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))", "00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}", [5, 6, 8, 9, 10, 11, 12, 13, 14], [["(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1"], ["(\\d{4})(\\d{4})", "$1-$2", ["1"]], ["(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60|8"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1"]], "0", 0, "0(8(?:[1-46-8]|5\\d\\d))?", 0, 0, 0, [["(?:2|3[1-3]|[46][1-4]|5[1-5])[1-9]\\d{6,7}|(?:3[1-3]|[46][1-4]|5[1-5])1\\d{2,3}", [5, 6, 8, 9, 10]], ["10[01]\\d{6}|1(?:0[2-9]|[126-9]\\d)\\d{6,7}", [9, 10]], ["00(?:308\\d{6,7}|798\\d{7,9})|(?:00368|80)\\d{7}", [9, 11, 12, 13, 14]], ["60[2-9]\\d{6}", [9]], ["50\\d{8,9}", [10, 11]], 0, ["1(?:5(?:22|44|66|77|88|99)|6(?:[07]0|44|6[16]|88)|8(?:00|33|55|77|99))\\d{4}", [8]], ["15\\d{7,8}", [9, 10]], ["70\\d{8}", [10]]]],
                KW: ["965", "00", "(?:18|[2569]\\d\\d)\\d{5}", [7, 8], [["(\\d{4})(\\d{3,4})", "$1 $2", ["[169]|2(?:[235]|4[1-35-9])|52"]], ["(\\d{3})(\\d{5})", "$1 $2", ["[25]"]]], 0, 0, 0, 0, 0, 0, [["2(?:[23]\\d\\d|4(?:[1-35-9]\\d|44)|5(?:0[034]|[2-46]\\d|5[1-3]|7[1-7]))\\d{4}", [8]], ["(?:52(?:22|5[25])|6(?:222|70[013-9]|93[039])|9(?:11[01]|333|702))\\d{4}|(?:5(?:[05]\\d|1[0-7]|6[56])|6(?:0[034679]|5[015-9]|6\\d|7[67]|9[069])|9(?:0[09]|22|4[01479]|55|6[0679]|7[1-9]|8[057-9]|9\\d))\\d{5}", [8]], ["18\\d{5}", [7]]]],
                KY: ["1", "011", "(?:345|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-9]\\d{6})$", "345$1", 0, "345", [["345(?:2(?:22|44)|444|6(?:23|38|40)|7(?:4[35-79]|6[6-9]|77)|8(?:00|1[45]|25|[48]8)|9(?:14|4[035-9]))\\d{4}"], ["345(?:32[1-9]|5(?:1[67]|2[5-79]|4[6-9]|50|76)|649|9(?:1[67]|2[2-9]|3[689]))\\d{4}"], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["(?:345976|900[2-9]\\d\\d)\\d{4}"], ["5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"], 0, 0, ["345849\\d{4}"]]],
                KZ: ["7", "810", "33622\\d{5}|(?:7\\d|80)\\d{8}", [10], 0, "8", 0, 0, 0, 0, "33|7", [["(?:33622|7(?:1(?:0(?:[23]\\d|4[0-3]|59|63)|1(?:[23]\\d|4[0-79]|59)|2(?:[23]\\d|59)|3(?:2\\d|3[0-79]|4[0-35-9]|59)|4(?:[24]\\d|3[013-9]|5[1-9])|5(?:2\\d|3[1-9]|4[0-7]|59)|6(?:[2-4]\\d|5[19]|61)|72\\d|8(?:[27]\\d|3[1-46-9]|4[0-5]))|2(?:1(?:[23]\\d|4[46-9]|5[3469])|2(?:2\\d|3[0679]|46|5[12679])|3(?:[2-4]\\d|5[139])|4(?:2\\d|3[1-35-9]|59)|5(?:[23]\\d|4[0-246-8]|59|61)|6(?:2\\d|3[1-9]|4[0-4]|59)|7(?:[2379]\\d|40|5[279])|8(?:[23]\\d|4[0-3]|59)|9(?:2\\d|3[124578]|59))))\\d{5}"], ["7(?:0[0-25-8]|47|6[02-4]|7[15-8]|85)\\d{7}"], ["800\\d{7}"], ["809\\d{7}"], ["808\\d{7}"], 0, 0, 0, ["751\\d{7}"]], "8~10"],
                LA: ["856", "00", "(?:2\\d|3)\\d{8}|(?:[235-8]\\d|41)\\d{6}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["3"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:2[13]|[35-7][14]|41|8[1468])\\d{6}", [8]], ["20(?:[29]\\d|5[24-689]|7[6-8])\\d{6}", [10]], 0, 0, 0, 0, ["30\\d{7}", [9]]]],
                LB: ["961", "00", "[7-9]\\d{7}|[13-9]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"]]], "0", 0, 0, 0, 0, 0, [["(?:(?:[14-69]\\d|8[02-9])\\d|7(?:[2-57]\\d|62|8[0-7]|9[04-9]))\\d{4}", [7]], ["(?:(?:3|81)\\d|7(?:[01]\\d|6[013-9]|8[89]|9[1-3]))\\d{5}"], 0, ["9[01]\\d{6}", [8]], 0, 0, 0, 0, 0, ["80\\d{6}", [8]]]],
                LC: ["1", "011", "(?:[58]\\d\\d|758|900)\\d{7}", [10], 0, "1", 0, "1|([2-7]\\d{6})$", "758$1", 0, "758", [["758(?:4(?:30|5\\d|6[2-9]|8[0-2])|57[0-2]|638)\\d{4}"], ["758(?:28[4-7]|384|4(?:6[01]|8[4-9])|5(?:1[89]|20|84)|7(?:1[2-9]|2\\d|3[01]))\\d{4}"], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"]]],
                LI: ["423", "00", "90\\d{5}|(?:[2378]|6\\d\\d)\\d{6}", [7, 9], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[237-9]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["69"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]], "0", 0, "0|(10(?:01|20|66))", 0, 0, 0, [["(?:2(?:01|1[27]|22|3\\d|6[02-578]|96)|3(?:33|40|7[0135-7]|8[048]|9[0269]))\\d{4}", [7]], ["756\\d{4}|(?:6(?:499|5[0-3]\\d|6(?:0[0-7]|10|2[06-9]|39))|7[37-9])\\d{5}"], ["80(?:02[28]|9\\d\\d)\\d\\d", [7]], ["90(?:02[258]|1(?:23|3[14])|66[136])\\d\\d", [7]], 0, 0, ["870(?:28|87)\\d\\d", [7]]]],
                LK: ["94", "00", "(?:[1-7]\\d|[89]1)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:[189]1|2[13-7]|3[1-8]|4[157]|5[12457]|6[35-7])[2-57]\\d{6}"], ["7[0-25-8]\\d{7}"], 0, 0, 0, 0, ["1973\\d{5}"]]],
                LR: ["231", "00", "(?:2|33|5\\d|77|88)\\d{7}|[45]\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[45]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3578]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:2\\d{3}|33333)\\d{4}", [8, 9]], ["(?:(?:330|555|(?:77|88)\\d)\\d|4[67])\\d{5}|5\\d{6}", [7, 9]], 0, ["332(?:02|[34]\\d)\\d{4}", [9]]]],
                LS: ["266", "00", "(?:[256]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]], 0, 0, 0, 0, 0, 0, [["2\\d{7}"], ["[56]\\d{7}"], ["800[256]\\d{4}"]]],
                LT: ["370", "00", "(?:[3469]\\d|52|[78]0)\\d{6}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["52[0-79]"], "(8-$1)", 1], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "8 $1", 1], ["(\\d{2})(\\d{6})", "$1 $2", ["37|4(?:[15]|6[1-8])"], "(8-$1)", 1], ["(\\d{3})(\\d{5})", "$1 $2", ["[3-6]"], "(8-$1)", 1]], "8", 0, "[08]", 0, 0, 0, [["(?:3[1478]|4[124-6]|52)\\d{6}"], ["6\\d{7}"], ["800\\d{5}"], ["9(?:0[0239]|10)\\d{5}"], ["700\\d{5}"], 0, ["70[67]\\d{5}"], 0, 0, ["808\\d{5}"]]],
                LU: ["352", "00", "35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}", [4, 5, 6, 7, 8, 9, 10, 11], [["(\\d{2})(\\d{3})", "$1 $2", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20[2-689]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["2(?:[0367]|4[3-8])"]], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["80[01]|90[015]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["2(?:[0367]|4[3-8])"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})", "$1 $2 $3 $4", ["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]]], 0, 0, "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)", 0, 0, 0, [["(?:35[013-9]|80[2-9]|90[89])\\d{1,8}|(?:2[2-9]|3[0-46-9]|[457]\\d|8[13-9]|9[2-579])\\d{2,9}"], ["6(?:[269][18]|5[158]|7[189]|81)\\d{6}", [9]], ["800\\d{5}", [8]], ["90[015]\\d{5}", [8]], 0, 0, 0, 0, ["20(?:1\\d{5}|[2-689]\\d{1,7})", [4, 5, 6, 7, 8, 9, 10]], ["801\\d{5}", [8]]]],
                LV: ["371", "00", "(?:[268]\\d|90)\\d{6}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[269]|8[01]"]]], 0, 0, 0, 0, 0, 0, [["6\\d{7}"], ["2\\d{7}"], ["80\\d{6}"], ["90\\d{6}"], 0, 0, 0, 0, 0, ["81\\d{6}"]]],
                LY: ["218", "00", "(?:[2569]\\d|71)\\d{7}", [9], [["(\\d{2})(\\d{7})", "$1-$2", ["[25-79]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:2[13-5]|5[1347]|6[1-479]|71)\\d{7}"], ["9[1-6]\\d{7}"]]],
                MA: ["212", "00", "[5-8]\\d{8}", [9], [["(\\d{5})(\\d{4})", "$1-$2", ["5(?:29|38)", "5(?:29|38)[89]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5[45]"], "0$1"], ["(\\d{4})(\\d{5})", "$1-$2", ["5(?:2[2-489]|3[5-9]|9)|892"], "0$1"], ["(\\d{2})(\\d{7})", "$1-$2", ["8"], "0$1"], ["(\\d{3})(\\d{6})", "$1-$2", ["[5-7]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["5(?:29|38)[89]0\\d{4}|5(?:2(?:[015-7]\\d|2[2-9]|3[2-57]|4[2-46-8]|8[235-7]|90)|3(?:[0-4]\\d|[57][2-9]|6[2-8]|80|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}"], ["692[12]\\d{5}|(?:6(?:[0-7]\\d|8[0-247-9]|9[013-9])|7(?:0[06-8]|6[1267]|7[0-27]))\\d{6}"], ["80\\d{7}"], ["89\\d{7}"], 0, 0, 0, 0, ["5924[01]\\d{4}"]]],
                MC: ["377", "00", "870\\d{5}|(?:[349]|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[39]"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:870|9[2-47-9]\\d)\\d{5}", [8]], ["4(?:4\\d|5[1-9])\\d{5}|(?:3|6\\d)\\d{7}"], ["90\\d{6}", [8]]]],
                MD: ["373", "00", "(?:[235-7]\\d|[89]0)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:(?:2[1-9]|3[1-79])\\d|5(?:33|5[257]))\\d{5}"], ["(?:562|6\\d\\d|7(?:[189]\\d|6[07]|7[457-9]))\\d{5}"], ["800\\d{5}"], ["90[056]\\d{5}"], 0, 0, ["803\\d{5}"], 0, ["3[08]\\d{6}"], ["808\\d{5}"]]],
                ME: ["382", "00", "(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:20[2-8]|3(?:[0-2][2-7]|3[24-7])|4(?:0[2-467]|1[2467])|5(?:[01][2467]|2[2-467]))\\d{5}", [8]], ["6(?:00|3[024]|6[0-25]|[7-9]\\d)\\d{5}", [8]], ["80(?:[0-2578]|9\\d)\\d{5}"], ["9(?:4[1568]|5[178])\\d{5}", [8]], 0, 0, ["77[1-9]\\d{5}", [8]], 0, ["78[1-49]\\d{5}", [8]]]],
                MF: ["590", "00", "(?:590|69\\d)\\d{6}", [9], 0, "0", 0, 0, 0, 0, 0, [["590(?:0[079]|[14]3|[27][79]|30|5[0-268]|87)\\d{4}"], ["69(?:0\\d\\d|1(?:2[29]|3[0-5]))\\d{4}"]]],
                MG: ["261", "00", "[23]\\d{8}", [9], [["(\\d{2})(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0", 0, "0|([24-9]\\d{6})$", "20$1", 0, 0, [["2072[29]\\d{4}|20(?:2\\d|4[47]|5[3467]|6[279]|7[35]|8[268]|9[245])\\d{5}"], ["3[2-49]\\d{7}"], 0, 0, 0, 0, 0, 0, ["22\\d{7}"]]],
                MH: ["692", "011", "329\\d{4}|(?:[256]\\d|45)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-6]"]]], "1", 0, 0, 0, 0, 0, [["(?:247|528|625)\\d{4}"], ["(?:(?:23|54)5|329|45[56])\\d{4}"], 0, 0, 0, 0, 0, 0, ["635\\d{4}"]]],
                MK: ["389", "00", "[2-578]\\d{7}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:2(?:[23]\\d|5[0-24578]|6[01]|82)|3(?:1[3-68]|[23][2-68]|4[23568])|4(?:[23][2-68]|4[3-68]|5[2568]|6[25-8]|7[24-68]|8[4-68]))\\d{5}"], ["7(?:(?:[0-25-8]\\d|3[2-4]|9[23])\\d|4(?:21|60))\\d{4}"], ["800\\d{5}"], ["5[02-9]\\d{6}"], 0, 0, 0, 0, 0, ["8(?:0[1-9]|[1-9]\\d)\\d{5}"]]],
                ML: ["223", "00", "(?:[246-9]\\d|50)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]], 0, 0, 0, 0, 0, 0, [["2(?:07[0-8]|12[67])\\d{4}|(?:2(?:02|1[4-689])|4(?:0[0-4]|4[1-39]))\\d{5}"], ["2(?:079|17\\d)\\d{4}|(?:50|[679]\\d|8[239])\\d{6}"], ["80\\d{6}"]]],
                MM: ["95", "00", "1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}", [6, 7, 8, 9, 10], [["(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[45]|6(?:0[23]|[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-6]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[4-7]|8[1-35]"], "0$1"], ["(\\d)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92"], "0$1"], ["(\\d)(\\d{5})(\\d{4})", "$1 $2 $3", ["9"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:1(?:(?:2\\d|3[56]|[89][0-6])\\d|4(?:2[2-469]|39|46|6[25]|7[0-2])|6)|2(?:2(?:00|8[34])|4(?:0\\d|2[246]|39|46|62|7[0-2])|51\\d\\d)|4(?:2(?:2\\d\\d|48[0-2])|[34]20\\d)|6(?:0(?:[23]|88\\d)|(?:124|320|[56]2\\d)\\d|247[23]|4(?:2[04]\\d|47[23])|7(?:(?:3\\d|8[01459])\\d|4(?:39|60|7[01])))|8(?:[1-3]2\\d|5(?:2\\d|4[1-9]|51))\\d)\\d{4}|5(?:2(?:2\\d{5,6}|47[023]\\d{4})|(?:347[23]|42(?:1|86)|(?:522|[68]20)\\d|7(?:20\\d|48[0-2])|9(?:20\\d|47[01]))\\d{4})|7(?:120\\d{4,5}|(?:425\\d|5(?:202|96\\d))\\d{4})|(?:(?:1[2-6]\\d|4(?:2[24-8]|356|[46][2-6]|5[35])|5(?:[27][2-8]|3[2-68]|4[25-8]|5[23]|6[2-4]|8[25-7]|9[2-7])|6(?:[19]20|42[03-6]|(?:52|7[45])\\d)|7(?:[04][25-8]|[15][235-7]|22|3[2-4]))\\d|8(?:[135]2\\d\\d|2(?:2\\d\\d|320)))\\d{3}|25\\d{5,6}|(?:2[2-9]|43[235-7]|6(?:1[2356]|[24][2-6]|3[256]|5[2-4]|6[2-8]|7[235-7]|8[245]|9[24])|8(?:1[235689]|2[2-8]|32|4[24-7]|5[245]|6[23]))\\d{4}|(?:4[35]|5[48]|63|7[0145]|8[13])470\\d{4}|(?:4[35]|5[48]|63|7[0145]|8[13])4\\d{4}", [6, 7, 8, 9]], ["(?:17[01]|9(?:2(?:[0-4]|[56]\\d\\d)|(?:3(?:[0-36]|4\\d)|6[7-9]\\d|7(?:3|5[0-2]|[6-9]\\d)|8(?:8[7-9]|9\\d))\\d|4(?:(?:[0245]\\d|[1379])\\d|88)|5[0-6]|9(?:[089]|[5-7]\\d\\d))\\d)\\d{4}|9[69]1\\d{6}|9[68]\\d{6}", [7, 8, 9, 10]], ["80080(?:[01][1-9]|2\\d)\\d{3}", [10]], 0, 0, 0, 0, 0, ["1333\\d{4}|[12]468\\d{4}", [8]]]],
                MN: ["976", "001", "[12]\\d{7,9}|[57-9]\\d{7}", [8, 9, 10], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[57-9]"]], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["[12](?:27|3[2-8]|4[2-68]|5[1-4689])", "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["[12]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["[12](?:3[2-8]|4[2-68]|5[1-4689])\\d{6,7}|(?:11(?:3\\d|4[568])|(?:(?:21|5[0568])\\d|70[0-5])\\d)\\d{4}|[12]2(?:[1-3]\\d{5,6}|7\\d{6})"], ["(?:8(?:[05689]\\d|3[01])|9(?:[014-9]\\d|20|3[0-4]))\\d{5}", [8]], 0, 0, 0, 0, 0, 0, ["7(?:100|5(?:0[0579]|1[015]|[389]5|[57][57])|(?:6[0167]|7\\d|8[01])\\d)\\d{4}", [8]]]],
                MO: ["853", "00", "(?:28|[68]\\d)\\d{6}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[268]"]]], 0, 0, 0, 0, 0, 0, [["(?:28[2-57-9]|8(?:11|[2-57-9]\\d))\\d{5}"], ["6(?:[2356]\\d\\d|8(?:[02][5-9]|[1478]\\d|[356][0-4]))\\d{4}"]]],
                MP: ["1", "011", "[58]\\d{9}|(?:67|90)0\\d{7}", [10], 0, "1", 0, "1|([2-9]\\d{6})$", "670$1", 0, "670", [["670(?:2(?:3[3-7]|56|8[5-8])|32[1-38]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[3589]|8[3-9]8|989)\\d{4}"], [""], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"]]],
                MQ: ["596", "00", "(?:596|69\\d)\\d{6}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[56]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["596(?:0[0-7]|10|2[7-9]|3[05-9]|4[0-46-8]|[5-7]\\d|8[09]|9[4-8])\\d{4}"], ["69(?:6(?:[0-47-9]\\d|5[0-6]|6[0-4])|727)\\d{4}"]]],
                MR: ["222", "00", "(?:[2-4]\\d\\d|800)\\d{5}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]], 0, 0, 0, 0, 0, 0, [["(?:25[08]|35\\d|45[1-7])\\d{5}"], ["[2-4][0-46-9]\\d{6}"], ["800\\d{5}"]]],
                MS: ["1", "011", "66449\\d{5}|(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|(4\\d{6})$", "664$1", 0, "664", [["664491\\d{4}"], ["66449[2-6]\\d{4}"], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"]]],
                MT: ["356", "00", "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]], 0, 0, 0, 0, 0, 0, [["2(?:0(?:[19]\\d|3[1-4]|6[059])|[1-357]\\d\\d)\\d{4}"], ["(?:7(?:210|[79]\\d\\d)|9(?:2(?:1[01]|31)|69[67]|8(?:1[1-3]|89|97)|9\\d\\d))\\d{4}"], ["800[3467]\\d{4}"], ["5(?:0(?:0(?:37|43)|(?:6\\d|70|9[0168])\\d)|[12]\\d0[1-5])\\d{3}"], 0, 0, ["501\\d{5}"], ["7117\\d{4}"], ["3550\\d{4}"]]],
                MU: ["230", "0(?:0|[24-7]0|3[03])", "(?:[2-468]|5\\d)\\d{6}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-46]|8[013]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["5"]]], 0, 0, 0, 0, 0, 0, [["(?:2(?:[03478]\\d|1[0-7]|6[0-79])|4(?:[013568]\\d|2[4-7])|54(?:[34]\\d|71)|6\\d\\d|8(?:14|3[129]))\\d{4}"], ["5(?:4(?:2[1-389]|7[1-9])|87[15-8])\\d{4}|5(?:2[589]|4[3489]|7\\d|8[0-689]|9[0-8])\\d{5}", [8]], ["80[0-2]\\d{4}", [7]], ["30\\d{5}", [7]], 0, 0, 0, 0, ["3(?:20|9\\d)\\d{4}", [7]]], "020"],
                MV: ["960", "0(?:0|19)", "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}", [7, 10], [["(\\d{3})(\\d{4})", "$1-$2", ["[3467]|9[13-9]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]]], 0, 0, 0, 0, 0, 0, [["(?:3(?:0[0-3]|3[0-59])|6(?:[57][02468]|6[024-68]|8[024689]))\\d{4}", [7]], ["46[46]\\d{4}|(?:7[2-9]|9[13-9])\\d{5}", [7]], ["800\\d{7}", [10]], ["900\\d{7}", [10]], 0, 0, ["4[05]0\\d{4}", [7]]], "00"],
                MW: ["265", "00", "1\\d{6}(?:\\d{2})?|(?:[23]1|77|88|99)\\d{7}", [7, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[17-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:1[2-9]|21\\d\\d)\\d{5}"], ["111\\d{6}|(?:77|88|99)\\d{7}", [9]], 0, 0, 0, 0, 0, 0, ["31\\d{7}", [9]]]],
                MX: ["52", "0[09]", "(?:1(?:[01467]\\d|[2359][1-9]|8[1-79])|[2-9]\\d)\\d{8}", [10, 11], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"], 0, 1], ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 $3 $4", ["1(?:33|5[56]|81)"], 0, 1], ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 $3 $4", ["1"], 0, 1]], "01", 0, "0(?:[12]|4[45])|1", 0, 0, 0, [["(?:2(?:0[01]|2[1-9]|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|3\\d|7[1-8]|9[1-5])|4(?:1[1-57-9]|[24-7][1-9]|3[1-8]|8[1-35-9]|9[2-689])|5(?:[56]\\d|88|9[1-79])|6(?:1[2-68]|[2-4][1-9]|5[1-3689]|6[1-57-9]|7[1-7]|8[67]|9[4-8])|7(?:[1-467][1-9]|5[13-9]|8[1-69]|9[17])|8(?:1\\d|2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[1-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69][1-9]|7[12]|8[1-8]))\\d{7}", [10]], ["(?:1(?:2(?:2[1-9]|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|3\\d|7[1-8]|9[1-5])|4(?:1[1-57-9]|[24-7][1-9]|3[1-8]|8[1-35-9]|9[2-689])|5(?:[56]\\d|88|9[1-79])|6(?:1[2-68]|[2-4][1-9]|5[1-3689]|6[1-57-9]|7[1-7]|8[67]|9[4-8])|7(?:[1-467][1-9]|5[13-9]|8[1-69]|9[17])|8(?:1\\d|2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[1-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69][1-9]|7[12]|8[1-8]))|2(?:2[1-9]|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|3\\d|7[1-8]|9[1-5])|4(?:1[1-57-9]|[24-7][1-9]|3[1-8]|8[1-35-9]|9[2-689])|5(?:[56]\\d|88|9[1-79])|6(?:1[2-68]|[2-4][1-9]|5[1-3689]|6[1-57-9]|7[1-7]|8[67]|9[4-8])|7(?:[1-467][1-9]|5[13-9]|8[1-69]|9[17])|8(?:1\\d|2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[1-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69][1-9]|7[12]|8[1-8]))\\d{7}"], ["8(?:00|88)\\d{7}", [10]], ["900\\d{7}", [10]], ["500\\d{7}", [10]], 0, 0, 0, 0, ["300\\d{7}", [10]]], "00"],
                MY: ["60", "00", "1\\d{8,9}|(?:3\\d|[4-9])\\d{7}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1(?:[0249]|[367][2-9]|8[1-9])|8"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1[36-8]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", ["1"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:3(?:2[0-36-9]|3[0-368]|4[0-278]|5[0-24-8]|6[0-467]|7[1246-9]|8\\d|9[0-57])\\d|4(?:2[0-689]|[3-79]\\d|8[1-35689])|5(?:2[0-589]|[3468]\\d|5[0-489]|7[1-9]|9[23])|6(?:2[2-9]|3[1357-9]|[46]\\d|5[0-6]|7[0-35-9]|85|9[015-8])|7(?:[2579]\\d|3[03-68]|4[0-8]|6[5-9]|8[0-35-9])|8(?:[24][2-8]|3[2-5]|5[2-7]|6[2-589]|7[2-578]|[89][2-9])|9(?:0[57]|13|[25-7]\\d|[3489][0-8]))\\d{5}", [8, 9]], ["1(?:4400|8(?:47|8[27])[0-4])\\d{4}|1(?:0(?:[23568]\\d|4[0-6]|7[016-9]|9[0-8])|1(?:[1-5]\\d\\d|6(?:0[5-9]|[1-9]\\d))|(?:[23679][2-9]|4[235-9]|59\\d)\\d|8(?:1[23]|[236]\\d|4[06]|5[7-9]|7[016-9]|8[01]|9[0-8]))\\d{5}", [9, 10]], ["1[378]00\\d{6}", [10]], ["1600\\d{6}", [10]], 0, 0, 0, 0, ["154(?:6(?:0\\d|1[0-3])|8(?:[25]1|4[0189]|7[0-4679]))\\d{4}", [10]]]],
                MZ: ["258", "00", "(?:2|8\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-7]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]], 0, 0, 0, 0, 0, 0, [["2(?:[1346]\\d|5[0-2]|[78][12]|93)\\d{5}", [8]], ["8[2-7]\\d{7}", [9]], ["800\\d{6}", [9]]]],
                NA: ["264", "00", "[68]\\d{7,8}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["87"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0", 0, 0, 0, 0, 0, [["6(?:1(?:[02-4]\\d\\d|17)|2(?:17|54\\d|69|70)|3(?:17|2[0237]\\d|34|6[289]|7[01]|81)|4(?:17|(?:27|41|5[25])\\d|69|7[01])|5(?:17|2[236-8]\\d|69|7[01])|6(?:17|26\\d|38|42|69|7[01])|7(?:17|(?:2[2-4]|30)\\d|6[89]|7[01]))\\d{4}|6(?:1(?:2[2-7]|3[01378]|4[0-4]|69|7[014])|25[0-46-8]|32\\d|4(?:2[0-27]|4[016]|5[0-357])|52[02-9]|62[56]|7(?:2[2-69]|3[013]))\\d{4}"], ["(?:60|8[1245])\\d{7}", [9]], ["80\\d{7}", [9]], ["8701\\d{5}", [9]], 0, 0, 0, 0, ["8(?:3\\d\\d|86)\\d{5}"]]],
                NC: ["687", "00", "[2-57-9]\\d{5}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[2-57-9]"]]], 0, 0, 0, 0, 0, 0, [["(?:2[03-9]|3[0-5]|4[1-7]|88)\\d{4}"], ["(?:5[0-4]|[79]\\d|8[0-79])\\d{4}"], 0, ["36\\d{4}"]]],
                NE: ["227", "00", "[0289]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[089]|2[01]"]]], 0, 0, 0, 0, 0, 0, [["2(?:0(?:20|3[1-8]|4[13-5]|5[14]|6[14578]|7[1-578])|1(?:4[145]|5[14]|6[14-68]|7[169]|88))\\d{4}"], ["(?:8[014589]|9\\d)\\d{6}"], ["08\\d{6}"], ["09\\d{6}"]]],
                NF: ["672", "00", "[13]\\d{5}", [6], [["(\\d{2})(\\d{4})", "$1 $2", ["1"]], ["(\\d)(\\d{5})", "$1 $2", ["3"]]], 0, 0, "([0-258]\\d{4})$", "3$1", 0, 0, [["(?:1(?:06|17|28|39)|3[0-2]\\d)\\d{3}"], ["3[58]\\d{4}"]]],
                NG: ["234", "009", "(?:[124-7]|9\\d{3})\\d{6}|[1-9]\\d{7}|[78]\\d{9,13}", [7, 8, 10, 11, 12, 13, 14], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["78"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|9(?:0[3-9]|[1-9])"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[3-7]|8[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[7-9]"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:(?:[1-356]\\d|4[02-8]|7[0-79]|8[2-9])\\d|9(?:0[3-9]|[1-9]\\d))\\d{5}|(?:[12]\\d|4[147]|5[14579]|6[1578]|7[0-3578])\\d{5}", [7, 8]], ["(?:707[0-3]|8(?:01|19)[01])\\d{6}|(?:70[1-689]|8(?:0[2-9]|1[0-8])|90[1-35-9])\\d{7}", [10]], ["800\\d{7,11}", [10, 11, 12, 13, 14]], 0, 0, 0, ["700\\d{7,11}", [10, 11, 12, 13, 14]]]],
                NI: ["505", "00", "(?:1800|[25-8]\\d{3})\\d{4}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]], 0, 0, 0, 0, 0, 0, [["2\\d{7}"], ["(?:5(?:5[0-7]|[78]\\d)|6(?:20|3[035]|4[045]|5[05]|77|8[1-9]|9[059])|(?:7[5-8]|8\\d)\\d)\\d{5}"], ["1800\\d{4}"]]],
                NL: ["31", "00", "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|[89]\\d{6,9}|1\\d{4,5}", [5, 6, 7, 8, 9, 10], [["(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"], ["(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-57-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:1(?:[035]\\d|1[13-578]|6[124-8]|7[24]|8[0-467])|2(?:[0346]\\d|2[2-46-9]|5[125]|9[479])|3(?:[03568]\\d|1[3-8]|2[01]|4[1-8])|4(?:[0356]\\d|1[1-368]|7[58]|8[15-8]|9[23579])|5(?:[0358]\\d|[19][1-9]|2[1-57-9]|4[13-8]|6[126]|7[0-3578])|7\\d\\d)\\d{6}", [9]], ["6[1-58]\\d{7}", [9]], ["800\\d{4,7}", [7, 8, 9, 10]], ["90[069]\\d{4,7}", [7, 8, 9, 10]], 0, 0, ["140(?:1[035]|2[0346]|3[03568]|4[0356]|5[0358]|8[458])|(?:140(?:1[16-8]|2[259]|3[124]|4[17-9]|5[124679]|7)|8[478]\\d{6})\\d", [5, 6, 9]], ["66\\d{7}", [9]], ["(?:85|91)\\d{7}", [9]]]],
                NO: ["47", "00", "(?:0|[2-9]\\d{3})\\d{4}", [5, 8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[489]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-7]"]]], 0, 0, 0, 0, 0, "[02-689]|7[0-8]", [["(?:2[1-4]|3[1-3578]|5[1-35-7]|6[1-4679]|7[0-8])\\d{6}", [8]], ["(?:4[015-8]|5[89]|9\\d)\\d{6}", [8]], ["80[01]\\d{5}", [8]], ["82[09]\\d{5}", [8]], ["880\\d{5}", [8]], 0, ["(?:0[2-9]|81(?:0(?:0[7-9]|1\\d)|5\\d\\d))\\d{3}"], 0, ["85[0-5]\\d{5}", [8]], ["810(?:0[0-6]|[2-8]\\d)\\d{3}", [8]]]],
                NP: ["977", "00", "9\\d{9}|[1-9]\\d{7}", [8, 10], [["(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"], ["(\\d{2})(\\d{6})", "$1-$2", ["[1-8]|9(?:[1-579]|6[2-6])"], "0$1"], ["(\\d{3})(\\d{7})", "$1-$2", ["9"]]], "0", 0, 0, 0, 0, 0, [["1[0-6]\\d{6}|(?:2[13-79]|3[135-8]|4[146-9]|5[135-7]|6[13-9]|7[15-9]|8[1-46-9]|9[1-79])[2-6]\\d{5}", [8]], ["9(?:6[0-3]|7[245]|8[0-24-68])\\d{7}", [10]]]],
                NR: ["674", "00", "(?:444|55\\d|888)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[458]"]]], 0, 0, 0, 0, 0, 0, [["(?:444|888)\\d{4}"], ["55[4-9]\\d{4}"]]],
                NU: ["683", "00", "(?:[47]|888\\d)\\d{3}", [4, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["8"]]], 0, 0, 0, 0, 0, 0, [["[47]\\d{3}", [4]], ["888[4-9]\\d{3}", [7]]]],
                NZ: ["64", "0(?:0|161)", "[28]\\d{7,9}|[346]\\d{7}|(?:508|[79]\\d)\\d{6,7}", [8, 9, 10], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["24|[346]|7[2-57-9]|9[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|[59]|80"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["2[028]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:[169]|7[0-35-9])|7|86"], "0$1"]], "0", 0, 0, 0, 0, 0, [["24099\\d{3}|(?:3[2-79]|[49][2-9]|6[235-9]|7[2-57-9])\\d{6}", [8]], ["2[0-28]\\d{8}|2[0-27-9]\\d{7}|21\\d{6}"], ["508\\d{6,7}|80\\d{6,8}"], ["90\\d{6,7}", [8, 9]], ["70\\d{7}", [9]], 0, 0, ["[28]6\\d{6,7}", [8, 9]]], "00"],
                OM: ["968", "00", "(?:[279]\\d{3}|500)\\d{4}|8007\\d{4,5}", [7, 8, 9], [["(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]], ["(\\d{2})(\\d{6})", "$1 $2", ["2"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[79]"]]], 0, 0, 0, 0, 0, 0, [["2[2-6]\\d{6}", [8]], ["90[1-9]\\d{5}|(?:7[129]|9[1-9])\\d{6}", [8]], ["500\\d{4}|8007\\d{4,5}"], ["900\\d{5}", [8]]]],
                PA: ["507", "00", "(?:[1-57-9]|6\\d)\\d{6}", [7, 8], [["(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]], ["(\\d{4})(\\d{4})", "$1-$2", ["6"]]], 0, 0, 0, 0, 0, 0, [["(?:1(?:0\\d|1[479]|2[37]|3[0137]|4[17]|5[05]|[68][58]|7[0167]|9[39])|2(?:[0235-79]\\d|1[0-7]|4[013-9]|8[026-9])|3(?:[089]\\d|1[014-7]|2[0-35]|33|4[0-579]|55|6[068]|7[06-8])|4(?:00|3[0-579]|4\\d|7[0-57-9])|5(?:[01]\\d|2[0-7]|[56]0|79)|7(?:0[09]|2[0-26-8]|3[03]|4[04]|5[05-9]|6[05]|7[0-24-9]|8[7-9]|90)|8(?:09|2[89]|3\\d|4[0-24-689]|5[014]|8[02])|9(?:0[5-9]|1[0135-8]|2[036-9]|3[35-79]|40|5[0457-9]|6[05-9]|7[04-9]|8[35-8]|9\\d))\\d{4}", [7]], ["(?:1[16]1|21[89]|6(?:[02-9]\\d|1[0-6])\\d|8(?:1[01]|7[23]))\\d{4}"], ["800\\d{4}", [7]], ["(?:8(?:22|55|60|7[78]|86)|9(?:00|81))\\d{4}", [7]]]],
                PE: ["51", "19(?:1[124]|77|90)00", "(?:[14-8]|9\\d)\\d{7}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["1"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[4-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]]], "0", 0, 0, 0, 0, 0, [["19(?:[02-68]\\d|1[035-9]|7[0-689]|9[1-9])\\d{4}|(?:1[0-8]|4[1-4]|5[1-46]|6[1-7]|7[2-46]|8[2-4])\\d{6}", [8]], ["9\\d{8}", [9]], ["800\\d{5}", [8]], ["805\\d{5}", [8]], ["80[24]\\d{5}", [8]], 0, 0, 0, 0, ["801\\d{5}", [8]]], 0, " Anexo "],
                PF: ["689", "00", "[48]\\d{7}|4\\d{5}", [6, 8], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[48]"]]], 0, 0, 0, 0, 0, 0, [["4(?:[09][4-689]\\d|4)\\d{4}"], ["8[7-9]\\d{6}", [8]]]],
                PG: ["675", "00|140[1-3]", "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["18|[2-69]|85"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[78]"]]], 0, 0, 0, 0, 0, 0, [["(?:64[1-9]|7730|85[02-46-9])\\d{4}|(?:3[0-2]|4[257]|5[34]|77[0-24]|9[78])\\d{5}"], ["775\\d{5}|(?:7[0-689]|81)\\d{6}", [8]], ["180\\d{4}", [7]], 0, 0, 0, 0, 0, ["2(?:0[0-47]|7[568])\\d{4}", [7]]], "00"],
                PH: ["63", "00", "(?:1800|8)\\d{7,9}|2\\d{5}(?:\\d{2})?|(?:[3-7]|9\\d)\\d{8}", [6, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{5})", "$1 $2", ["2"], "(0$1)"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"], ["(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"], ["(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|8[2-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]]], "0", 0, 0, 0, 0, 0, [["2\\d{5}(?:\\d{2})?|88(?:22\\d\\d|42)\\d{4}|88\\d{7}|(?:3[2-68]|4[2-9]|5[2-6]|6[2-58]|7[24578]|8[2-7])\\d{7}", [6, 8, 9, 10]], ["(?:81[37]|9(?:0[5-9]|1[0-24-9]|2[0-35-9]|[35]\\d|4[235-9]|6[0-25-8]|7[1-9]|8[19]|9[4-9]))\\d{7}", [10]], ["1800\\d{7,9}", [11, 12, 13]]]],
                PK: ["92", "00", "122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[025-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["[89]0"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["1"]], ["(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"], "(0$1)"], ["(\\d{3})(\\d{6,7})", "$1 $2", ["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])", "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"], "(0$1)"], ["(\\d{5})(\\d{5})", "$1 $2", ["58"], "(0$1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[24-9]"], "(0$1)"]], "0", 0, 0, 0, 0, 0, [["(?:(?:21|42)[2-9]|58[126])\\d{7}|(?:2[25]|4[0146-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]\\d{6}|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8]))[2-9]\\d{5,6}", [9, 10]], ["3(?:[014]\\d|2[0-5]|3[0-7]|55|64)\\d{7}", [10]], ["800\\d{5}", [8]], ["900\\d{5}", [8]], ["122\\d{6}", [9]], 0, ["(?:2(?:[125]|3[2358]|4[2-4]|9[2-8])|4(?:[0-246-9]|5[3479])|5(?:[1-35-7]|4[2-467])|6(?:0[468]|[1-8])|7(?:[14]|2[236])|8(?:[16]|2[2-689]|3[23578]|4[3478]|5[2356])|9(?:1|22|3[27-9]|4[2-6]|6[3569]|9[2-7]))111\\d{6}", [11, 12]]]],
                PL: ["48", "00", "[1-57-9]\\d{6}(?:\\d{2})?|6\\d{5,8}", [6, 7, 8, 9], [["(\\d{5})", "$1", ["19"]], ["(\\d{3})(\\d{3})", "$1 $2", ["11|64"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1", "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["39|45|5[0137]|6[0469]|7[02389]|8[08]"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[2-8]|[2-8]|9[145]"]]], 0, 0, 0, 0, 0, 0, [["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])(?:[02-9]\\d{6}|1(?:[0-8]\\d{5}|9\\d{3}(?:\\d{2})?))", [7, 9]], ["(?:45|5[0137]|6[069]|7[2389]|88)\\d{7}", [9]], ["800\\d{6}", [9]], ["70[01346-8]\\d{6}", [9]], 0, 0, ["804\\d{6}", [9]], ["64\\d{4,7}"], ["39\\d{7}", [9]], ["801\\d{6}", [9]]]],
                PM: ["508", "00", "[45]\\d{5}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[45]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:4[1-3]|50)\\d{4}"], ["(?:4[02-4]|5[05])\\d{4}"]]],
                PR: ["1", "011", "(?:[589]\\d\\d|787)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "787|939", [["(?:787|939)[2-9]\\d{6}"], [""], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"]]],
                PS: ["970", "00", "[2489]2\\d{6}|(?:1\\d|5)\\d{8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0", 0, 0, 0, 0, 0, [["(?:22[2-47-9]|42[45]|82[01458]|92[369])\\d{5}", [8]], ["5[69]\\d{7}", [9]], ["1800\\d{6}", [10]], 0, 0, 0, 0, 0, 0, ["1700\\d{6}", [10]]]],
                PT: ["351", "00", "(?:[26-9]\\d|30)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[236-9]"]]], 0, 0, 0, 0, 0, 0, [["2(?:[12]\\d|[35][1-689]|4[1-59]|6[1-35689]|7[1-9]|8[1-69]|9[1256])\\d{6}"], ["9(?:[1-36]\\d\\d|480)\\d{5}"], ["80[02]\\d{6}"], ["(?:6(?:0[178]|4[68])\\d|76(?:0[1-57]|1[2-47]|2[237]))\\d{5}"], ["884[0-4689]\\d{5}"], 0, ["70(?:7\\d|8[17])\\d{5}"], 0, ["30\\d{7}"], ["80(?:8\\d|9[1579])\\d{5}"]]],
                PW: ["680", "01[12]", "(?:[25-8]\\d\\d|345|488|900)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]], 0, 0, 0, 0, 0, 0, [["(?:2(?:55|77)|345|488|5(?:35|44|87)|6(?:22|54|79)|7(?:33|47)|8(?:24|55|76)|900)\\d{4}"], ["(?:6[2-4689]0|77\\d|88[0-4])\\d{4}"]]],
                PY: ["595", "00", "59\\d{4,6}|(?:[2-46-9]\\d|5[0-8])\\d{4,7}", [6, 7, 8, 9], [["(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"], ["(\\d{3})(\\d{4,5})", "$1 $2", ["2[279]|3[13-5]|4[359]|5|6[347]|7[46-8]|85"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["87"]], ["(\\d{3})(\\d{6})", "$1 $2", ["9"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36])\\d{5,7}|(?:2(?:2[4-68]|7[15]|9[1-5])|3(?:18|3[167]|4[2357]|51)|4(?:3[12]|5[13]|9[1-47])|5(?:[1-4]\\d|5[02-4])|6(?:3[1-3]|44|7[1-46-8])|7(?:4[0-4]|6[1-578]|75|8[0-8])|858)\\d{5,6}", [7, 8, 9]], ["9(?:51|6[129]|[78][1-6]|9[1-5])\\d{6}", [9]], 0, 0, 0, 0, ["[2-9]0\\d{4,7}"], 0, ["8700[0-4]\\d{4}", [9]]]],
                QA: ["974", "00", "800\\d{4}|(?:2|[3-7]\\d)\\d{6}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["2[126]|8"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[3-7]"]]], 0, 0, 0, 0, 0, 0, [["4[04]\\d{6}", [8]], ["[35-7]\\d{7}", [8]], ["800\\d{4}", [7]], 0, 0, 0, 0, ["2(?:[12]\\d|61)\\d{4}", [7]]]],
                RE: ["262", "00", "(?:26|[68]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[268]"], "0$1"]], "0", 0, 0, 0, 0, "262|69|8", [["262\\d{6}"], ["69(?:2\\d\\d|3(?:0[0-46]|1[013]|2[0-2]|3[0-39]|4\\d|5[05]|6[0-26]|7[0-27]|8[0-8]|9[0-479]))\\d{4}"], ["80\\d{7}"], ["89[1-37-9]\\d{6}"], 0, 0, 0, 0, 0, ["8(?:1[019]|2[0156]|84|90)\\d{6}"]]],
                RO: ["40", "00", "(?:[237]\\d|[89]0)\\d{7}|[23]\\d{5}", [6, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["2[3-6]", "2[3-6]\\d9"], "0$1"], ["(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[237-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["[23][13-6]\\d{7}|(?:2(?:19\\d|[3-6]\\d9)|31\\d\\d)\\d\\d"], ["7120\\d{5}|7(?:[02-7]\\d|1[01]|8[03-8]|99)\\d{6}", [9]], ["800\\d{6}", [9]], ["90[036]\\d{6}", [9]], 0, 0, ["37\\d{7}", [9]], 0, 0, ["801\\d{6}", [9]]], 0, " int "],
                RS: ["381", "00", "38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}", [6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{3,9})", "$1 $2", ["(?:2[389]|39)0|[7-9]"], "0$1"], ["(\\d{2})(\\d{5,10})", "$1 $2", ["[1-36]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:11[1-9]\\d|(?:2[389]|39)(?:0[2-9]|[2-9]\\d))\\d{3,8}|(?:1[02-9]|2[0-24-7]|3[0-8])[2-9]\\d{4,9}", [7, 8, 9, 10, 11, 12]], ["6(?:[0-689]|7\\d)\\d{6,7}", [8, 9, 10]], ["800\\d{3,9}"], ["(?:78\\d|90[0169])\\d{3,7}", [6, 7, 8, 9, 10]], 0, 0, ["7[06]\\d{4,10}"]]],
                RU: ["7", "810", "[347-9]\\d{9}", [10], [["(\\d{4})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-8]|2[1-9])", "7(?:1(?:[0-6]2|7|8[27])|2(?:1[23]|[2-9]2))", "7(?:1(?:[0-6]2|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"], "8 ($1)", 1], ["(\\d{5})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-68]|2[1-9])", "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))", "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[3489]"], "8 ($1)", 1]], "8", 0, 0, 0, 0, "3[04-689]|[489]", [["(?:3(?:0[12]|4[1-35-79]|5[1-3]|65|8[1-58]|9[0145])|4(?:01|1[1356]|2[13467]|7[1-5]|8[1-7]|9[1-689])|8(?:1[1-8]|2[01]|3[13-6]|4[0-8]|5[15]|6[1-35-79]|7[1-37-9]))\\d{7}"], ["9\\d{9}"], ["80[04]\\d{7}"], ["80[39]\\d{7}"], ["808\\d{7}"]], "8~10"],
                RW: ["250", "00", "(?:06|[27]\\d\\d|[89]00)\\d{6}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:06|2[258]\\d)\\d{6}"], ["7[238]\\d{7}", [9]], ["800\\d{6}", [9]], ["900\\d{6}", [9]]]],
                SA: ["966", "00", "92\\d{7}|(?:[15]|8\\d)\\d{8}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["9"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["81"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]], "0", 0, 0, 0, 0, 0, [["1(?:1\\d|2[24-8]|3[35-8]|4[3-68]|6[2-5]|7[235-7])\\d{6}", [9]], ["5(?:[013-689]\\d|7[0-36-8])\\d{6}", [9]], ["800\\d{7}", [10]], ["925\\d{6}", [9]], 0, 0, ["811\\d{7}", [10]], 0, 0, ["920\\d{6}", [9]]]],
                SB: ["677", "0[01]", "(?:[1-6]|[7-9]\\d\\d)\\d{4}", [5, 7], [["(\\d{2})(\\d{5})", "$1 $2", ["7|8[4-9]|9(?:[1-8]|9[0-8])"]]], 0, 0, 0, 0, 0, 0, [["(?:1[4-79]|[23]\\d|4[0-2]|5[03]|6[0-37])\\d{3}", [5]], ["48\\d{3}|(?:(?:7[1-9]|8[4-9])\\d|9(?:1[2-9]|2[013-9]|3[0-2]|[46]\\d|5[0-46-9]|7[0-689]|8[0-79]|9[0-8]))\\d{4}"], ["1[38]\\d{3}", [5]], 0, 0, 0, 0, 0, ["5[12]\\d{3}", [5]]]],
                SC: ["248", "010|0[0-2]", "8000\\d{3}|(?:[249]\\d|64)\\d{5}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]"]]], 0, 0, 0, 0, 0, 0, [["4[2-46]\\d{5}"], ["2[5-8]\\d{5}"], ["8000\\d{3}"], 0, 0, 0, 0, 0, ["971\\d{4}|(?:64|95)\\d{5}"]], "00"],
                SD: ["249", "00", "[19]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[19]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["1(?:5[3-7]|8[35-7])\\d{6}"], ["(?:1[0-2]|9[0-3569])\\d{7}"]]],
                SE: ["46", "00", "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}", [6, 7, 8, 9, 10], [["(\\d{2})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{4})", "$1-$2", ["9(?:00|39|44)"], "0$1", 0, "$1 $2"], ["(\\d{2})(\\d{3})(\\d{2})", "$1-$2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3"], ["(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{2,3})(\\d{3})", "$1-$2 $3", ["9(?:00|39|44)"], "0$1", 0, "$1 $2 $3"], ["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[013689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["7"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["[26]"], "0$1", 0, "$1 $2 $3 $4 $5"]], "0", 0, 0, 0, 0, 0, [["10[1-8]\\d{6}|90[1-9]\\d{4,6}|(?:[12][136]|3[356]|4[0246]|6[03]|8\\d)\\d{5,7}|(?:1(?:2[0-35]|4[0-4]|5[0-25-9]|7[13-6]|[89]\\d)|2(?:2[0-7]|4[0136-8]|5[0138]|7[018]|8[01]|9[0-57])|3(?:0[0-4]|1\\d|2[0-25]|4[056]|7[0-2]|8[0-3]|9[023])|4(?:1[013-8]|3[0135]|5[14-79]|7[0-246-9]|8[0156]|9[0-689])|5(?:0[0-6]|[15][0-5]|2[0-68]|3[0-4]|4\\d|6[03-5]|7[013]|8[0-79]|9[01])|6(?:1[1-3]|2[0-4]|4[02-57]|5[0-37]|6[0-3]|7[0-2]|8[0247]|9[0-356])|9(?:1[0-68]|2\\d|3[02-5]|4[0-3]|5[0-4]|[68][01]|7[0135-8]))\\d{5,6}", [7, 8, 9]], ["7[02369]\\d{7}", [9]], ["20\\d{4,7}", [6, 7, 8, 9]], ["649\\d{6}|9(?:00|39|44)[1-8]\\d{3,6}", [7, 8, 9, 10]], ["75[1-8]\\d{6}", [9]], 0, 0, ["74[02-9]\\d{6}", [9]], 0, ["77[0-7]\\d{6}", [9]]]],
                SG: ["65", "0[0-3]\\d", "(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}", [8, 10, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[369]|8[1-9]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]], 0, 0, 0, 0, 0, 0, [["6[1-9]\\d{6}", [8]], ["89[01]\\d{5}|(?:8[1-8]|9[0-8])\\d{6}", [8]], ["(?:18|8)00\\d{7}", [10, 11]], ["1900\\d{7}", [11]], 0, 0, ["7000\\d{7}", [11]], 0, ["3[12]\\d{6}", [8]]]],
                SH: ["290", "00", "(?:[256]\\d|8)\\d{3}", [4, 5], 0, 0, 0, 0, 0, 0, "[256]", [["2(?:[0-57-9]\\d|6[4-9])\\d\\d"], ["[56]\\d{4}", [5]], 0, 0, 0, 0, 0, 0, ["262\\d\\d", [5]]]],
                SI: ["386", "00|10(?:22|66|88|99)", "[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}", [5, 6, 7, 8], [["(\\d{2})(\\d{3,6})", "$1 $2", ["8[09]|9"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["59|8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[0139]|51|6"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-57]"], "(0$1)"]], "0", 0, 0, 0, 0, 0, [["(?:[1-357][2-8]|4[24-8])\\d{6}", [8]], ["6(?:5(?:1\\d|55|[67]0)|9(?:10|[69]\\d))\\d{4}|(?:[37][01]|4[0139]|51|6[48])\\d{6}", [8]], ["80\\d{4,6}", [6, 7, 8]], ["89[1-3]\\d{2,5}|90\\d{4,6}"], 0, 0, 0, 0, ["(?:59\\d\\d|8(?:1(?:[67]\\d|8[01389])|2(?:0\\d|2[0378]|8[0-2489])|3[389]\\d))\\d{4}", [8]]], "00"],
                SJ: ["47", "00", "0\\d{4}|(?:[4589]\\d|79)\\d{6}", [5, 8], 0, 0, 0, 0, 0, 0, "79", [["79\\d{6}", [8]], ["(?:4[015-8]|5[89]|9\\d)\\d{6}", [8]], ["80[01]\\d{5}", [8]], ["82[09]\\d{5}", [8]], ["880\\d{5}", [8]], 0, ["(?:0[2-9]|81(?:0(?:0[7-9]|1\\d)|5\\d\\d))\\d{3}"], 0, ["85[0-5]\\d{5}", [8]], ["810(?:0[0-6]|[2-8]\\d)\\d{3}", [8]]]],
                SK: ["421", "00", "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}", [6, 7, 9], [["(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:2(?:16|[2-9]\\d{3})|[3-5][1-8]\\d{3})\\d{4}|(?:2|[3-5][1-8])1[67]\\d{3}|[3-5][1-8]16\\d\\d"], ["909[1-9]\\d{5}|9(?:0[1-8]|1[0-24-9]|[45]\\d)\\d{6}", [9]], ["800\\d{6}", [9]], ["9(?:00|[78]\\d)\\d{6}", [9]], 0, 0, ["96\\d{7}", [9]], ["9090\\d{3}", [7]], ["6(?:02|5[0-4]|9[0-6])\\d{6}", [9]], ["8[5-9]\\d{7}", [9]]]],
                SL: ["232", "00", "(?:[2378]\\d|99)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[237-9]"], "(0$1)"]], "0", 0, 0, 0, 0, 0, [["22\\d{6}"], ["(?:25|3[0134]|7[5-9]|8[08]|99)\\d{6}"]]],
                SM: ["378", "00", "(?:0549|[5-7]\\d)\\d{6}", [8, 10], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]], ["(\\d{4})(\\d{6})", "$1 $2", ["0"]]], 0, 0, "([89]\\d{5})$", "0549$1", 0, 0, [["0549(?:8[0157-9]|9\\d)\\d{4}", [10]], ["6[16]\\d{6}", [8]], 0, ["7[178]\\d{6}", [8]], 0, 0, 0, 0, ["5[158]\\d{6}", [8]]]],
                SN: ["221", "00", "(?:[378]\\d{4}|93330)\\d{4}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]]], 0, 0, 0, 0, 0, 0, [["3(?:0(?:1[0-2]|80)|282|3(?:8[1-9]|9[3-9])|611)\\d{5}"], ["7(?:[06-8]\\d|21|90)\\d{6}"], ["800\\d{6}"], ["88[4689]\\d{6}"], 0, 0, 0, 0, ["93330\\d{4}|3(?:392|9[01]\\d)\\d{5}"], ["81[02468]\\d{6}"]]],
                SO: ["252", "00", "[346-9]\\d{8}|[12679]\\d{7}|(?:[1-4]\\d|59)\\d{5}|[1348]\\d{5}", [6, 7, 8, 9], [["(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]], ["(\\d{6})", "$1", ["[134]"]], ["(\\d)(\\d{6})", "$1 $2", ["1|2[0-79]|3[0-46-8]|4[0-7]|59"]], ["(\\d)(\\d{7})", "$1 $2", ["24|[67]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[348]|64|79[0-8]|90"]], ["(\\d{2})(\\d{5,7})", "$1 $2", ["1|28|6[1-35-9]|799|9[2-9]"]]], "0", 0, 0, 0, 0, 0, [["(?:1\\d|2[0-79]|3[0-46-8]|4[0-7]|59)\\d{5}|(?:[134]\\d|8[125])\\d{4}", [6, 7]], ["28\\d{5}|(?:6[1-9]|79)\\d{6,7}|(?:15|24|(?:3[59]|4[89]|8[08])\\d|60|7[1-8]|9(?:0[67]|[2-9]))\\d{6}", [7, 8, 9]]]],
                SR: ["597", "00", "(?:[2-5]|68|[78]\\d)\\d{5}", [6, 7], [["(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]], ["(\\d{3})(\\d{3})", "$1-$2", ["[2-5]"]], ["(\\d{3})(\\d{4})", "$1-$2", ["[6-8]"]]], 0, 0, 0, 0, 0, 0, [["(?:2[1-3]|3[0-7]|(?:4|68)\\d|5[2-58])\\d{4}"], ["(?:7[124-7]|8[125-9])\\d{5}", [7]], 0, 0, 0, 0, 0, 0, ["56\\d{4}", [6]]]],
                SS: ["211", "00", "[19]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["18\\d{7}"], ["(?:12|9[1257])\\d{7}"]]],
                ST: ["239", "00", "(?:22|9\\d)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]], 0, 0, 0, 0, 0, 0, [["22\\d{5}"], ["900[5-9]\\d{3}|9(?:0[1-9]|[89]\\d)\\d{4}"]]],
                SV: ["503", "00", "[267]\\d{7}|[89]00\\d{4}(?:\\d{4})?", [7, 8, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[89]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[267]"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]], 0, 0, 0, 0, 0, 0, [["2[1-6]\\d{6}", [8]], ["[67]\\d{7}", [8]], ["800\\d{4}(?:\\d{4})?", [7, 11]], ["900\\d{4}(?:\\d{4})?", [7, 11]]]],
                SX: ["1", "011", "7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|(5\\d{6})$", "721$1", 0, "721", [["7215(?:4[2-8]|8[239]|9[056])\\d{4}"], ["7215(?:1[02]|2\\d|5[034679]|8[014-8])\\d{4}"], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"]]],
                SY: ["963", "00", "[1-39]\\d{8}|[1-5]\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-5]"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1", 1]], "0", 0, 0, 0, 0, 0, [["[12]1\\d{6,7}|(?:1(?:[2356]|4\\d)|2[235]|3(?:[13]\\d|4)|4[13]|5[1-3])\\d{6}"], ["9(?:22|[3-589]\\d|6[024-9])\\d{6}", [9]]]],
                SZ: ["268", "00", "0800\\d{4}|(?:[237]\\d|900)\\d{6}", [8, 9], [["(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]], ["(\\d{5})(\\d{4})", "$1 $2", ["9"]]], 0, 0, 0, 0, 0, 0, [["[23][2-5]\\d{6}", [8]], ["7[6-9]\\d{6}", [8]], ["0800\\d{4}", [8]], ["900\\d{6}", [9]], 0, 0, 0, 0, ["70\\d{6}", [8]]]],
                TA: ["290", "00", "8\\d{3}", [4], 0, 0, 0, 0, 0, 0, "8", [["8\\d{3}"]]],
                TC: ["1", "011", "(?:[58]\\d\\d|649|900)\\d{7}", [10], 0, "1", 0, "1|([2-479]\\d{6})$", "649$1", 0, "649", [["649(?:712|9(?:4\\d|50))\\d{4}"], ["649(?:2(?:3[129]|4[1-7])|3(?:3[1-389]|4[1-8])|4[34][1-3])\\d{4}"], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"], 0, 0, 0, ["64971[01]\\d{4}"]]],
                TD: ["235", "00|16", "(?:22|[69]\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2679]"]]], 0, 0, 0, 0, 0, 0, [["22(?:[37-9]0|5[0-5]|6[89])\\d{4}"], ["(?:6[023568]|77|9\\d)\\d{6}"]], "00"],
                TG: ["228", "00", "[279]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]], 0, 0, 0, 0, 0, 0, [["2(?:2[2-7]|3[23]|4[45]|55|6[67]|77)\\d{5}"], ["(?:7[09]|9[0-36-9])\\d{6}"]]],
                TH: ["66", "00[1-9]", "1\\d{8,9}|(?:[2-57]|[689]\\d)\\d{7}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["14|[3-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0", 0, 0, 0, 0, 0, [["(?:2\\d|3[2-9]|4[2-5]|5[2-6]|7[3-7])\\d{6}", [8]], ["(?:14|6[1-6]|[89]\\d)\\d{7}", [9]], ["1800\\d{6}", [10]], ["1900\\d{6}", [10]], 0, 0, 0, 0, ["6[08]\\d{7}", [9]]]],
                TJ: ["992", "810", "(?:[3-59]\\d|77|88)\\d{7}", [9], [["(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317"], 0, 1], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[34]7|91[78]"], 0, 1], ["(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3"], 0, 1], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[457-9]"], 0, 1]], "8", 0, 0, 0, 0, 0, [["(?:3(?:1[3-5]|2[245]|3[12]|4[24-7]|5[25]|72)|4(?:46|74|87))\\d{6}"], ["41[18]\\d{6}|(?:5[05]|77|88|9\\d)\\d{7}"]], "8~10"],
                TK: ["690", "00", "[2-47]\\d{3,6}", [4, 5, 6, 7], 0, 0, 0, 0, 0, 0, 0, [["(?:2[2-4]|[34]\\d)\\d{2,5}"], ["7[2-4]\\d{2,5}"]]],
                TL: ["670", "00", "7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]], ["(\\d{4})(\\d{4})", "$1 $2", ["7"]]], 0, 0, 0, 0, 0, 0, [["(?:2[1-5]|3[1-9]|4[1-4])\\d{5}", [7]], ["7[3-8]\\d{6}", [8]], ["80\\d{5}", [7]], ["90\\d{5}", [7]], ["70\\d{5}", [7]]]],
                TM: ["993", "810", "[1-6]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-5]"], "(8 $1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["6"], "8 $1"]], "8", 0, 0, 0, 0, 0, [["(?:1(?:2\\d|3[1-9])|2(?:22|4[0-35-8])|3(?:22|4[03-9])|4(?:22|3[128]|4\\d|6[15])|5(?:22|5[7-9]|6[014-689]))\\d{5}"], ["6[1-9]\\d{6}"]], "8~10"],
                TN: ["216", "00", "[2-57-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]], 0, 0, 0, 0, 0, 0, [["81200\\d{3}|(?:3[0-2]|7\\d)\\d{6}"], ["3(?:001|[12]40)\\d{4}|(?:(?:[259]\\d|4[0-6])\\d|3(?:1[1-35]|6[0-4]|91))\\d{5}"], ["8010\\d{4}"], ["88\\d{6}"], 0, 0, 0, 0, 0, ["8[12]10\\d{4}"]]],
                TO: ["676", "00", "(?:0800|[5-8]\\d{3})\\d{3}|[2-8]\\d{4}", [5, 7], [["(\\d{2})(\\d{3})", "$1-$2", ["[2-4]|50|6[09]|7[0-24-69]|8[05]"]], ["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[5-8]"]]], 0, 0, 0, 0, 0, 0, [["(?:2\\d|3[0-8]|4[0-4]|50|6[09]|7[0-24-69]|8[05])\\d{3}", [5]], ["(?:6(?:3[02]|85|90)|7(?:[2-46]0|[578]\\d)|8[46-9]\\d)\\d{4}", [7]], ["0800\\d{3}", [7]], ["55[04]\\d{4}", [7]]]],
                TR: ["90", "00", "(?:[2-58]\\d\\d|900)\\d{7}|4\\d{6}", [7, 10], [["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[0589]|90"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:[0-59]|61)", "5(?:[0-59]|616)", "5(?:[0-59]|6161)"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24][1-8]|3[1-9]"], "(0$1)", 1]], "0", 0, 0, 0, 0, 0, [["(?:2(?:[13][26]|[28][2468]|[45][268]|[67][246])|3(?:[13][28]|[24-6][2468]|[78][02468]|92)|4(?:[16][246]|[23578][2468]|4[26]))\\d{7}", [10]], ["56161\\d{5}|5(?:0[15-7]|1[06]|24|[34]\\d|5[1-59]|9[46])\\d{7}", [10]], ["800\\d{7}", [10]], ["(?:8[89]8|900)\\d{7}", [10]], ["592(?:21[12]|461)\\d{4}", [10]], 0, ["(?:444|850\\d{3})\\d{4}"], ["512\\d{7}", [10]]]],
                TT: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-46-8]\\d{6})$", "868$1", 0, "868", [["868(?:2(?:01|1[89]|[23]\\d|4[0-2])|6(?:0[7-9]|1[02-8]|2[1-9]|[3-69]\\d|7[0-79])|82[124])\\d{4}"], ["868(?:2(?:6[6-9]|[7-9]\\d)|[37](?:0[1-9]|1[02-9]|[2-9]\\d)|4[6-9]\\d|6(?:20|78|8\\d))\\d{4}"], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"]]],
                TV: ["688", "00", "(?:2|7\\d\\d|90)\\d{4}", [5, 6, 7], 0, 0, 0, 0, 0, 0, 0, [["2[02-9]\\d{3}", [5]], ["(?:7[01]\\d|90)\\d{4}", [6, 7]]]],
                TW: ["886", "0(?:0[25-79]|19)", "(?:[24589]|7\\d)\\d{8}|[2-8]\\d{7}|2\\d{6}", [7, 8, 9, 10], [["(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[25][2-8]|[346]|7[1-9]|8[237-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[258]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0", 0, 0, 0, 0, 0, [["24\\d{6,7}|(?:6412|8(?:2(?:3\\d|66)|36[24-9]))\\d{4}|(?:2[235-8]\\d|3[2-9]|4(?:[239]\\d|[78])|5[2-8]|6[235-79]|7[1-9]|8[7-9])\\d{6}", [8, 9]], ["9[0-8]\\d{7}", [9]], ["80[0-79]\\d{6}", [9]], ["20(?:[013-9]\\d\\d|2)\\d{4}", [7, 9]], ["99\\d{7}", [9]], 0, ["50[0-46-9]\\d{6}", [9]], 0, ["70\\d{8}", [10]]], 0, "#"],
                TZ: ["255", "00[056]", "(?:[26-8]\\d|41|90)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["2[2-8]\\d{7}"], ["(?:6[2-9]|7[13-9])\\d{7}"], ["80[08]\\d{6}"], ["90\\d{7}"], 0, 0, 0, 0, ["41\\d{7}"], ["8(?:40|6[01])\\d{6}"]]],
                UA: ["380", "00", "[89]\\d{9}|[3-9]\\d{8}", [9, 10], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]", "6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["4[45][0-5]|5(?:0|6[37])|6(?:[12][018]|[36-8])|7|89|9[1-9]|(?:48|57)[0137-9]", "4[45][0-5]|5(?:0|6(?:3[14-7]|7))|6(?:[12][018]|[36-8])|7|89|9[1-9]|(?:48|57)[0137-9]"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["[3-6]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:3[1-8]|4[13-8]|5[1-7]|6[12459])\\d{7}", [9]], ["(?:50|6[36-8]|7[1-3]|9[1-9])\\d{7}", [9]], ["800[1-8]\\d{5,6}"], ["900[239]\\d{5,6}"], 0, 0, 0, 0, ["89[1-579]\\d{6}", [9]]], "0~0"],
                UG: ["256", "00[057]", "800\\d{6}|(?:[29]0|[347]\\d)\\d{7}", [9], [["(\\d{4})(\\d{5})", "$1 $2", ["202", "2024"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[27-9]|4(?:6[45]|[7-9])"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[34]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:20(?:(?:(?:[0147]\\d|5[0-4])\\d|2(?:40|[5-9]\\d)|3(?:0[67]|2[0-4])|810)\\d|6(?:00[0-2]|[15-9]\\d\\d|30[0-4]))|[34]\\d{5})\\d{3}"], ["7260\\d{5}|7(?:[0157-9]\\d|20|4[0-4])\\d{6}"], ["800[1-3]\\d{5}"], ["90[1-3]\\d{6}"]]],
                US: ["1", "011", "[2-9]\\d{9}", [10], [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", ["[2-9]"], 0, 1, "$1-$2-$3"]], "1", 0, 0, 0, 0, 0, [["(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[0-24679]|4[67]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|6[39]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[017]|6[0-279]|78|8[0-2])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|2[08]|3[0-28]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[0179]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}"], [""], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"], 0, ["710[2-9]\\d{6}"]]],
                UY: ["598", "0(?:0|1[3-9]\\d)", "(?:[249]\\d\\d|80)\\d{5}|9\\d{6}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["8|90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[24]"]]], "0", 0, 0, 0, 0, 0, [["(?:2\\d|4[2-7])\\d{6}", [8]], ["9[1-9]\\d{6}", [8]], ["80[05]\\d{4}", [7]], ["90[0-8]\\d{4}", [7]]], "00", " int. "],
                UZ: ["998", "810", "[679]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[679]"], "8 $1"]], "8", 0, 0, 0, 0, 0, [["78(?:1(?:13|2[02]|50)|2(?:10|2[139]|98)|77[01])\\d{4}|(?:6(?:1(?:22|3[124]|4[1-4]|5[1-3578]|64)|2(?:22|3[0-57-9]|41)|5(?:22|3[3-7]|5[024-8])|6\\d\\d|7(?:[23]\\d|7[69])|9(?:22|4[1-8]|6[135]))|7(?:0(?:5[4-9]|6[0146]|7[124-6]|9[135-8])|1[12]\\d|2(?:22|3[13-57-9]|4[1-3579]|5[14])|3(?:2\\d|3[1578]|4[1-35-7]|5[1-57]|61)|4(?:2\\d|3[1-579]|7[1-79])|5(?:22|5[1-9]|6[1457])|6(?:22|3[12457]|4[13-8])|9(?:22|5[1-9])))\\d{5}"], ["(?:6(?:1(?:2(?:2[01]|98)|35[0-4]|50\\d|61[23]|7(?:[01][017]|4\\d|55|9[5-9]))|2(?:(?:11|7\\d)\\d|2(?:[12]1|9[01379])|5(?:[126]\\d|3[0-4]))|5(?:19[01]|2(?:27|9[26])|(?:30|59|7\\d)\\d)|6(?:2(?:1[5-9]|2[0367]|38|41|52|60)|(?:3[79]|9[0-3])\\d|4(?:56|83)|7(?:[07]\\d|1[017]|3[07]|4[047]|5[057]|67|8[0178]|9[79]))|7(?:2(?:24|3[237]|4[5-9]|7[15-8])|5(?:7[12]|8[0589])|7(?:0\\d|[39][07])|9(?:0\\d|7[079]))|9(?:2(?:1[1267]|3[01]|5\\d|7[0-4])|(?:5[67]|7\\d)\\d|6(?:2[0-26]|8\\d)))|7(?:0\\d{3}|1(?:13[01]|6(?:0[47]|1[67]|66)|71[3-69]|98\\d)|2(?:2(?:2[79]|95)|3(?:2[5-9]|6[0-6])|57\\d|7(?:0\\d|1[17]|2[27]|3[37]|44|5[057]|66|88))|3(?:2(?:1[0-6]|21|3[469]|7[159])|(?:33|9[4-6])\\d|5(?:0[0-4]|5[579]|9\\d)|7(?:[0-3579]\\d|4[0467]|6[67]|8[078]))|4(?:2(?:29|5[0257]|6[0-7]|7[1-57])|5(?:1[0-4]|8\\d|9[5-9])|7(?:0\\d|1[024589]|2[0-27]|3[0137]|[46][07]|5[01]|7[5-9]|9[079])|9(?:7[015-9]|[89]\\d))|5(?:112|2(?:0\\d|2[29]|[49]4)|3[1568]\\d|52[6-9]|7(?:0[01578]|1[017]|[23]7|4[047]|[5-7]\\d|8[78]|9[079]))|6(?:2(?:2[1245]|4[2-4])|39\\d|41[179]|5(?:[349]\\d|5[0-2])|7(?:0[017]|[13]\\d|22|44|55|67|88))|9(?:22[128]|3(?:2[0-4]|7\\d)|57[02569]|7(?:2[05-9]|3[37]|4\\d|60|7[2579]|87|9[07])))|9[0-57-9]\\d{3})\\d{4}"]], "8~10"],
                VA: ["39", "00", "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}", [6, 7, 8, 9, 10, 11], 0, 0, 0, 0, 0, 0, "06698", [["06698\\d{1,6}"], ["3[1-9]\\d{8}|3[2-9]\\d{7}", [9, 10]], ["80(?:0\\d{3}|3)\\d{3}", [6, 9]], ["(?:0878\\d\\d|89(?:2|4[5-9]\\d))\\d{3}|89[45][0-4]\\d\\d|(?:1(?:44|6[346])|89(?:5[5-9]|9))\\d{6}", [6, 8, 9, 10]], ["1(?:78\\d|99)\\d{6}", [9, 10]], 0, 0, 0, ["55\\d{8}", [10]], ["84(?:[08]\\d{3}|[17])\\d{3}", [6, 9]]]],
                VC: ["1", "011", "(?:[58]\\d\\d|784|900)\\d{7}", [10], 0, "1", 0, "1|([2-7]\\d{6})$", "784$1", 0, "784", [["784(?:266|3(?:6[6-9]|7\\d|8[0-24-6])|4(?:38|5[0-36-8]|8[0-8])|5(?:55|7[0-2]|93)|638|784)\\d{4}"], ["784(?:4(?:3[0-5]|5[45]|89|9[0-8])|5(?:2[6-9]|3[0-4]))\\d{4}"], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"]]],
                VE: ["58", "00", "[89]00\\d{7}|(?:[24]\\d|50)\\d{8}", [10], [["(\\d{3})(\\d{7})", "$1-$2", ["[24589]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:2(?:12|3[457-9]|[467]\\d|[58][1-9]|9[1-6])|50[01])\\d{7}"], ["4(?:1[24-8]|2[46])\\d{7}"], ["800\\d{7}"], ["900\\d{7}"]]],
                VG: ["1", "011", "(?:284|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-578]\\d{6})$", "284$1", 0, "284", [["284496[0-5]\\d{3}|284(?:229|4(?:22|9[45])|774|8(?:52|6[459]))\\d{4}"], ["284496[6-9]\\d{3}|284(?:3(?:0[0-3]|4[0-7]|68|9[34])|4(?:4[0-6]|68|99)|54[0-57])\\d{4}"], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"]]],
                VI: ["1", "011", "[58]\\d{9}|(?:34|90)0\\d{7}", [10], 0, "1", 0, "1|([2-9]\\d{6})$", "340$1", 0, "340", [["340(?:2(?:0[12]|2[06-8]|4[49]|77)|3(?:32|44)|4(?:22|7[34]|89)|5(?:1[34]|55)|6(?:2[56]|4[23]|77|9[023])|7(?:1[2-57-9]|27|7\\d)|884|998)\\d{4}"], [""], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"]]],
                VN: ["84", "00", "[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", 1], ["(\\d{4})(\\d{4,6})", "$1 $2", ["1"], 0, 1], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[69]"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[3578]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", 1]], "0", 0, 0, 0, 0, 0, [["2(?:0[3-9]|1[0-689]|2[0-25-9]|3[2-9]|4[2-8]|5[124-9]|6[0-39]|7[0-7]|8[2-79]|9[0-4679])\\d{7}", [10]], ["(?:52[238]|8(?:79|9[689])|99[013-9])\\d{6}|(?:3\\d|5[689]|7[06-9]|8[1-68]|9[0-8])\\d{7}", [9]], ["1(?:228\\d{4}|800\\d{4,6})", [8, 9, 10]], ["1900\\d{4,6}", [8, 9, 10]], 0, 0, ["(?:[17]99|80\\d)\\d{4}|69\\d{5,6}", [7, 8]], 0, ["672\\d{6}", [9]]]],
                VU: ["678", "00", "(?:[23]\\d|[48]8)\\d{3}|(?:[57]\\d|90)\\d{5}", [5, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["[579]"]]], 0, 0, 0, 0, 0, 0, [["(?:38[0-8]|48[4-9])\\d\\d|(?:2[02-9]|3[4-7]|88)\\d{3}", [5]], ["57[2-5]\\d{4}|(?:5[0-689]|7[013-7])\\d{5}", [7]], 0, 0, 0, 0, ["(?:3[03]|900\\d)\\d{3}"], 0, ["90[1-9]\\d{4}", [7]]]],
                WF: ["681", "00", "(?:[45]0|68|72|8\\d)\\d{4}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[4-8]"]]], 0, 0, 0, 0, 0, 0, [["(?:50|68|72)\\d{4}"], ["(?:50|68|72|8[23])\\d{4}"]]],
                WS: ["685", "0", "[2-6]\\d{4}|8\\d{5}(?:\\d{4})?|[78]\\d{6}", [5, 6, 7, 10], [["(\\d{5})", "$1", ["[2-6]"]], ["(\\d{3})(\\d{3,7})", "$1 $2", ["8"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]], 0, 0, 0, 0, 0, 0, [["(?:[2-5]\\d|6[1-9])\\d{3}", [5]], ["(?:7[25-7]|8(?:[3-7]|9\\d{3}))\\d{5}", [7, 10]], ["800\\d{3}", [6]]]],
                XK: ["383", "00", "[23]\\d{7,8}|(?:4\\d\\d|[89]00)\\d{5}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[23]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:2[89]|39)0\\d{6}|[23][89]\\d{6}"], ["4[3-79]\\d{6}", [8]], ["800\\d{5}", [8]], ["900\\d{5}", [8]]]],
                YE: ["967", "00", "(?:1|7\\d)\\d{7}|[1-7]\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7[24-68]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"]], "0", 0, 0, 0, 0, 0, [["17\\d{6}|(?:[12][2-68]|3[2358]|4[2-58]|5[2-6]|6[3-58]|7[24-68])\\d{5}", [7, 8]], ["7[0137]\\d{7}", [9]]]],
                YT: ["262", "00", "80\\d{7}|(?:26|63)9\\d{6}", [9], 0, "0", 0, 0, 0, 0, "269|63", [["269(?:0[67]|5[01]|6\\d|[78]0)\\d{4}"], ["639(?:0[0-79]|1[019]|[267]\\d|3[09]|[45]0|9[04-79])\\d{4}"], ["80\\d{7}"]]],
                ZA: ["27", "00", "[1-9]\\d{8}|8\\d{4,7}", [5, 6, 7, 8, 9], [["(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:1[0-8]|2[1-378]|3[1-69]|4\\d|5[1346-8])\\d{7}", [9]], ["8[1-4]\\d{3,7}|(?:6\\d|7[0-46-9]|85)\\d{7}"], ["80\\d{7}", [9]], ["(?:86[2-9]|9[0-2]\\d)\\d{6}", [9]], 0, 0, ["861\\d{6}", [9]], 0, ["87\\d{7}", [9]], ["860\\d{6}", [9]]]],
                ZM: ["260", "00", "800\\d{6}|(?:21|76|9\\d)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[79]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["21[1-8]\\d{6}"], ["(?:76|9[5-8])\\d{7}"], ["800\\d{6}"]]],
                ZW: ["263", "00", "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}", [5, 6, 7, 8, 9, 10], [["(\\d{3})(\\d{3,5})", "$1 $2", ["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"], "0$1"], ["(\\d)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["80"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2", "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)", "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["29[013-9]|39|54"], "0$1"], ["(\\d{4})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258|5483"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:1(?:(?:3\\d|9)\\d|[4-8])|2(?:(?:(?:0(?:2[014]|5)|(?:2[0157]|31|84|9)\\d\\d|[56](?:[14]\\d\\d|20)|7(?:[089]|2[03]|[35]\\d\\d))\\d|4(?:2\\d\\d|8))\\d|1(?:2|[39]\\d{4}))|3(?:(?:123|(?:29\\d|92)\\d)\\d\\d|7(?:[19]|[56]\\d))|5(?:0|1[2-478]|26|[37]2|4(?:2\\d{3}|83)|5(?:25\\d\\d|[78])|[689]\\d)|6(?:(?:[16-8]21|28|52[013])\\d\\d|[39])|8(?:[1349]28|523)\\d\\d)\\d{3}|(?:4\\d\\d|9[2-9])\\d{4,5}|(?:(?:2(?:(?:(?:0|8[146])\\d|7[1-7])\\d|2(?:[278]\\d|92)|58(?:2\\d|3))|3(?:[26]|9\\d{3})|5(?:4\\d|5)\\d\\d)\\d|6(?:(?:(?:[0-246]|[78]\\d)\\d|37)\\d|5[2-8]))\\d\\d|(?:2(?:[569]\\d|8[2-57-9])|3(?:[013-59]\\d|8[37])|6[89]8)\\d{3}"], ["7(?:1[2-9]|[37][1-9]|8[2-7])\\d{6}", [9]], ["80(?:[01]\\d|20|8[0-8])\\d{3}", [7]], 0, 0, 0, 0, 0, ["86(?:1[12]|22|30|44|55|77|8[368])\\d{6}", [10]]]],
                "001": ["979", 0, "\\d{9}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3"]], 0, 0, 0, 0, 0, 0, [0, 0, 0, ["\\d{9}"]]]
            }
        }
    }, function (d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (d, t, e) {
            e || (e = t, t = void 0);
            return new $.default(t, e).input(d)
        };
        var r,
            n = e(15),
            $ = (r = n) && r.__esModule ? r : {default: r}
    }, function (d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (d, t, e) {
            if (t[d]) return new $.default(d, t[d], e)
        };
        var r,
            n = e(5),
            $ = (r = n) && r.__esModule ? r : {default: r}
    }, function (d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function () {
            var d = (0, n.normalizeArguments)(arguments),
                t = d.text,
                e = d.options,
                r = d.metadata,
                $ = new i.default(t, e, r);
            return function (d, t, e) {
                t in d ? Object.defineProperty(d, t, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : d[t] = e;
                return d
            }({}, Symbol.iterator, function () {
                return {
                    next: function () {
                        return $.hasNext() ? {
                            done: !1,
                            value: $.next()
                        } : {done: !0}
                    }
                }
            })
        };
        var r,
            n = e(6),
            $ = e(7),
            i = (r = $) && r.__esModule ? r : {default: r}
    }, function (d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.LEAD_CLASS = void 0, t.default = function (d, t, e, r) {
            if (!u.test(d) || s.test(d)) return;
            if ("POSSIBLE" !== r) {
                if (t > 0 && !a.test(d)) {
                    var n = e[t - 1];
                    if ((0, $.isInvalidPunctuationSymbol)(n) || (0, $.isLatinLetter)(n)) return !1
                }
                var i = t + d.length;
                if (i < e.length) {
                    var o = e[i];
                    if ((0, $.isInvalidPunctuationSymbol)(o) || (0, $.isLatinLetter)(o)) return !1
                }
            }
            return !0
        };
        var r = e(1),
            n = e(4),
            $ = e(16),
            i = t.LEAD_CLASS = "[(\\[（［" + r.PLUS_CHARS + "]",
            a = new RegExp("^" + i),
            o = (0, n.limit)(0, 3),
            u = new RegExp("^(?:[(\\[（［])?(?:[^(\\[（［)\\]）］]+[)\\]）］])?[^(\\[（［)\\]）］]+(?:[(\\[（［][^(\\[（［)\\]）］]+[)\\]）］])" + o + "[^(\\[（［)\\]）］]*$"),
            s = /\d{1,5}-+\d{1,5}\s{0,4}\(\d{1,4}/
    }, function (d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (d, t, e) {
            if (r.test(d)) return !1;
            if (n.test(d)) {
                var i = e.slice(t + d.length);
                if ($.test(i)) return !1
            }
            return !0
        };
        var r = /(?:(?:[0-3]?\d\/[01]?\d)|(?:[01]?\d\/[0-3]?\d))\/(?:[12]\d)?\d{2}/,
            n = /[12]\d{3}[-/]?[01]\d[-/]?[0-3]\d +[0-2]\d$/,
            $ = /^:[0-5]\d/
    }, function (d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (d) {
            return (0, r.trimAfterFirstMatch)(n, d)
        };
        var r = e(4),
            n = /[\\/] *x/
    }, function (d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.containsMoreThanOneSlashInNationalNumber = u;
        var r = i(e(8)),
            n = i(e(10)),
            $ = e(4);

        function i(d) {
            return d && d.__esModule ? d : {default: d}
        }

        function a(d, t, e) {
            for (var r = 0; r < t.length - 1; r++) {
                var $ = t.charAt(r);
                if ("x" === $ || "X" === $) {
                    var i = t.charAt(r + 1);
                    if ("x" === i || "X" === i) {
                        if (r++, util.isNumberMatch(d, t.substring(r)) != MatchType.NSN_MATCH) return !1
                    } else if ((0, n.default)(t.substring(r)) !== d.ext) return !1
                }
            }
            return !0
        }

        function o(d, t) {
            if ("FROM_DEFAULT_COUNTRY" != d.getCountryCodeSource()) return !0;
            var e = util.getRegionCodeForCountryCode(d.getCountryCode()),
                r = util.getMetadataForRegion(e);
            if (null == r) return !0;
            var n = util.getNationalSignificantNumber(d),
                $ = util.chooseFormattingPatternForNumber(r.numberFormats(), n);
            if ($ && $.getNationalPrefixFormattingRule().length > 0) {
                if ($.getNationalPrefixOptionalWhenFormatting()) return !0;
                if (PhoneNumberUtil.formattingRuleHasFirstGroupOnly($.getNationalPrefixFormattingRule())) return !0;
                var i = PhoneNumberUtil.normalizeDigitsOnly(d.getRawInput());
                return util.maybeStripNationalPrefixAndCarrierCode(i, r, null)
            }
            return !0
        }

        function u(d, t) {
            var e = t.indexOf("/");
            if (e < 0) return !1;
            var r = t.indexOf("/", e + 1);
            return !(r < 0) && (!(d.getCountryCodeSource() === CountryCodeSource.FROM_NUMBER_WITH_PLUS_SIGN || d.getCountryCodeSource() === CountryCodeSource.FROM_NUMBER_WITHOUT_PLUS_SIGN) || PhoneNumberUtil.normalizeDigitsOnly(t.substring(0, e)) !== String(d.getCountryCode()) || t.slice(r + 1).indexOf("/") >= 0)
        }

        function s(d, t, e, r, n) {
            var $ = normalizeDigits(t, !0),
                i = l(e, d, null);
            if (r(e, d, $, i)) return !0;
            var a = MetadataManager.getAlternateFormatsForCountry(d.getCountryCode()),
                o = util.getNationalSignificantNumber(d);
            if (a) {
                var u = a.numberFormats(),
                    s = Array.isArray(u),
                    f = 0;
                for (u = s ? u : u[Symbol.iterator](); ;) {
                    var c;
                    if (s) {
                        if (f >= u.length) break;
                        c = u[f++]
                    } else {
                        if ((f = u.next()).done) break;
                        c = f.value
                    }
                    var h = c;
                    if (h.leadingDigitsPatterns().length > 0) if (!n.getPatternForRegExp("^" + h.leadingDigitsPatterns()[0]).test(o)) continue;
                    if (r(e, d, $, i = l(e, d, h))) return !0
                }
            }
            return !1
        }

        function l(d, t, e) {
            if (e) {
                var r = util.getNationalSignificantNumber(t);
                return util.formatNsnUsingPattern(r, e, "RFC3966", d).split("-")
            }
            var n = formatNumber(t, "RFC3966", d),
                $ = n.indexOf(";");
            $ < 0 && ($ = n.length);
            var i = n.indexOf("-") + 1;
            return n.slice(i, $).split("-")
        }

        function f(d, t, e, r) {
            var n = e.split(NON_DIGITS_PATTERN),
                i = t.hasExtension() ? n.length - 2 : n.length - 1;
            if (1 == n.length || n[i].contains(util.getNationalSignificantNumber(t))) return !0;
            for (var a = r.length - 1; a > 0 && i >= 0;) {
                if (n[i] !== r[a]) return !1;
                a--, i--
            }
            return i >= 0 && (0, $.endsWith)(n[i], r[0])
        }

        function c(d, t, e, r) {
            var n = 0;
            if (t.getCountryCodeSource() !== CountryCodeSource.FROM_DEFAULT_COUNTRY) {
                var i = String(t.getCountryCode());
                n = e.indexOf(i) + i.length()
            }
            for (var a = 0; a < r.length; a++) {
                if ((n = e.indexOf(r[a], n)) < 0) return !1;
                if (n += r[a].length(), 0 == a && n < e.length()) {
                    var o = util.getRegionCodeForCountryCode(t.getCountryCode());
                    if (null != util.getNddPrefixForRegion(o, !0) && Character.isDigit(e.charAt(n))) {
                        var u = util.getNationalSignificantNumber(t);
                        return (0, $.startsWith)(e.slice(n - r[a].length), u)
                    }
                }
            }
            return e.slice(n).contains(t.getExtension())
        }

        t.default = {
            POSSIBLE: function (d, t, e) {
                return !0
            },
            VALID: function (d, t, e) {
                return !(!(0, r.default)(d, void 0, e) || !a(d, t.toString(), e))
            },
            STRICT_GROUPING: function (d, t, e, n) {
                var $ = t.toString();
                return !(!(0, r.default)(d, void 0, e) || !a(d, $, e) || u(d, $) || !o(d, e)) && s(d, t, e, c, n)
            },
            EXACT_GROUPING: function (d, t, e, n) {
                var $ = t.toString();
                return !(!(0, r.default)(d, void 0, e) || !a(d, $, e) || u(d, $) || !o(d, e)) && s(d, t, e, f, n)
            }
        }
    }, function (d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = function () {
            function d(d, t) {
                for (var e = 0; e < t.length; e++) {
                    var r = t[e];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(d, r.key, r)
                }
            }

            return function (t, e, r) {
                return e && d(t.prototype, e), r && d(t, r), t
            }
        }();

        function n(d, t) {
            if (!(d instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        var $ = function d(t, e) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    $ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                n(this, d), this.key = t, this.value = e, this.next = r, this.prev = $
            },
            i = function () {
                function d() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
                    n(this, d), this.size = 0, this.limit = t, this.head = null, this.tail = null, this.cache = {}
                }

                return r(d, [{
                    key: "put",
                    value: function (d, t) {
                        if (this.ensureLimit(), this.head) {
                            var e = new $(d, t, this.head);
                            this.head.prev = e, this.head = e
                        } else this.head = this.tail = new $(d, t);
                        this.cache[d] = this.head, this.size++
                    }
                }, {
                    key: "get",
                    value: function (d) {
                        if (this.cache[d]) {
                            var t = this.cache[d].value;
                            return this.remove(d), this.put(d, t), t
                        }
                        console.log("Item not available in cache for key " + d)
                    }
                }, {
                    key: "ensureLimit",
                    value: function () {
                        this.size === this.limit && this.remove(this.tail.key)
                    }
                }, {
                    key: "remove",
                    value: function (d) {
                        var t = this.cache[d];
                        null !== t.prev ? t.prev.next = t.next : this.head = t.next, null !== t.next ? t.next.prev = t.prev : this.tail = t.prev, delete this.cache[d], this.size--
                    }
                }, {
                    key: "clear",
                    value: function () {
                        this.head = null, this.tail = null, this.size = 0, this.cache = {}
                    }
                }]), d
            }();
        t.default = i
    }, function (d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r,
            n = e(30),
            $ = (r = n) && r.__esModule ? r : {default: r};
        var i = function () {
            function d(d, t) {
                for (var e = 0; e < t.length; e++) {
                    var r = t[e];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(d, r.key, r)
                }
            }

            return function (t, e, r) {
                return e && d(t.prototype, e), r && d(t, r), t
            }
        }();
        var a = function () {
            function d(t) {
                !function (d, t) {
                    if (!(d instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, d), this.cache = new $.default(t)
            }

            return i(d, [{
                key: "getPatternForRegExp",
                value: function (d) {
                    var t = this.cache.get(d);
                    return t || (t = new RegExp("^" + d), this.cache.put(d, t)), t
                }
            }]), d
        }();
        t.default = a
    }, function (d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (d, t, e) {
            var r = new $.default(d, t, e),
                n = [];
            for (; r.hasNext();) n.push(r.next());
            return n
        };
        var r,
            n = e(7),
            $ = (r = n) && r.__esModule ? r : {default: r}
    }, function (d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function () {
            var d = (0, i.normalizeArguments)(arguments),
                t = d.text,
                e = d.options,
                r = d.metadata;
            return (0, $.default)(t, e, r)
        };
        var r,
            n = e(32),
            $ = (r = n) && r.__esModule ? r : {default: r},
            i = e(6)
    }, function (d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (d, t, e) {
            t && t.defaultCountry && !(0, $.isSupportedCountry)(t.defaultCountry, e) && (t = a({}, t, {defaultCountry: void 0}));
            try {
                return (0, r.default)(d, t, e)
            } catch (d) {
                if (!(d instanceof n.default)) throw d
            }
        };
        var r = i(e(21)),
            n = i(e(14)),
            $ = e(0);

        function i(d) {
            return d && d.__esModule ? d : {default: d}
        }

        var a = Object.assign || function (d) {
            for (var t = 1; t < arguments.length; t++) {
                var e = arguments[t];
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (d[r] = e[r])
            }
            return d
        }
    }, function (d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function () {
            var d = (0, n.normalizeArguments)(arguments),
                t = d.text,
                e = d.options,
                r = d.metadata;
            return (0, i.default)(t, e, r)
        };
        var r,
            n = e(6),
            $ = e(34),
            i = (r = $) && r.__esModule ? r : {default: r}
    }, function (d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (d, t) {
            var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                r = arguments[3];
            return d.country === t && (0, $.default)(d, e, r)
        };
        var r,
            n = e(8),
            $ = (r = n) && r.__esModule ? r : {default: r}
    }, function (d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = e(0);
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function () {
                return r.getCountryCallingCode
            }
        })
    }, function (d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (d, t) {
            for (var e = d.split("."), r = t.split("."), n = 0; n < 3; n++) {
                var $ = Number(e[n]),
                    i = Number(r[n]);
                if ($ > i) return 1;
                if (i > $) return -1;
                if (!isNaN($) && isNaN(i)) return 1;
                if (isNaN($) && !isNaN(i)) return -1
            }
            return 0
        }
    }, function (d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = e(14);
        Object.defineProperty(t, "ParseError", {
            enumerable: !0,
            get: function () {
                return m(r).default
            }
        });
        var n = e(6);
        Object.defineProperty(t, "parsePhoneNumber", {
            enumerable: !0,
            get: function () {
                return m(n).default
            }
        });
        var $ = e(35);
        Object.defineProperty(t, "parsePhoneNumberFromString", {
            enumerable: !0,
            get: function () {
                return m($).default
            }
        });
        var i = e(33);
        Object.defineProperty(t, "findNumbers", {
            enumerable: !0,
            get: function () {
                return m(i).default
            }
        });
        var a = e(25);
        Object.defineProperty(t, "searchNumbers", {
            enumerable: !0,
            get: function () {
                return m(a).default
            }
        });
        var o = e(7);
        Object.defineProperty(t, "PhoneNumberMatcher", {
            enumerable: !0,
            get: function () {
                return m(o).default
            }
        });
        var u = e(15);
        Object.defineProperty(t, "AsYouType", {
            enumerable: !0,
            get: function () {
                return m(u).default
            }
        });
        var s = e(0);
        Object.defineProperty(t, "Metadata", {
            enumerable: !0,
            get: function () {
                return m(s).default
            }
        }), Object.defineProperty(t, "isSupportedCountry", {
            enumerable: !0,
            get: function () {
                return s.isSupportedCountry
            }
        }), Object.defineProperty(t, "getCountryCallingCode", {
            enumerable: !0,
            get: function () {
                return s.getCountryCallingCode
            }
        }), Object.defineProperty(t, "getExtPrefix", {
            enumerable: !0,
            get: function () {
                return s.getExtPrefix
            }
        });
        var l = e(24);
        Object.defineProperty(t, "getExampleNumber", {
            enumerable: !0,
            get: function () {
                return m(l).default
            }
        });
        var f = e(23);
        Object.defineProperty(t, "formatIncompletePhoneNumber", {
            enumerable: !0,
            get: function () {
                return m(f).default
            }
        });
        var c = e(11);
        Object.defineProperty(t, "parseIncompletePhoneNumber", {
            enumerable: !0,
            get: function () {
                return m(c).default
            }
        }), Object.defineProperty(t, "parsePhoneNumberCharacter", {
            enumerable: !0,
            get: function () {
                return c.parsePhoneNumberCharacter
            }
        });
        var h = e(10);
        Object.defineProperty(t, "parseDigits", {
            enumerable: !0,
            get: function () {
                return m(h).default
            }
        });
        var y = e(9);

        function m(d) {
            return d && d.__esModule ? d : {default: d}
        }

        Object.defineProperty(t, "parseRFC3966", {
            enumerable: !0,
            get: function () {
                return y.parseRFC3966
            }
        }), Object.defineProperty(t, "formatRFC3966", {
            enumerable: !0,
            get: function () {
                return y.formatRFC3966
            }
        })
    }, function (d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.formatRFC3966 = t.parseRFC3966 = t.parseDigits = t.parsePhoneNumberCharacter = t.parseIncompletePhoneNumber = t.ParseError = void 0;
        var r = e(39);
        Object.defineProperty(t, "ParseError", {
            enumerable: !0,
            get: function () {
                return r.ParseError
            }
        }), Object.defineProperty(t, "parseIncompletePhoneNumber", {
            enumerable: !0,
            get: function () {
                return r.parseIncompletePhoneNumber
            }
        }), Object.defineProperty(t, "parsePhoneNumberCharacter", {
            enumerable: !0,
            get: function () {
                return r.parsePhoneNumberCharacter
            }
        }), Object.defineProperty(t, "parseDigits", {
            enumerable: !0,
            get: function () {
                return r.parseDigits
            }
        }), Object.defineProperty(t, "parseRFC3966", {
            enumerable: !0,
            get: function () {
                return r.parseRFC3966
            }
        }), Object.defineProperty(t, "formatRFC3966", {
            enumerable: !0,
            get: function () {
                return r.formatRFC3966
            }
        }), t.parsePhoneNumber = function () {
            return a(r.parsePhoneNumber, arguments)
        }, t.parsePhoneNumberFromString = function () {
            return a(r.parsePhoneNumberFromString, arguments)
        }, t.findNumbers = function () {
            return a(r.findNumbers, arguments)
        }, t.searchNumbers = function () {
            return a(r.searchNumbers, arguments)
        }, t.PhoneNumberMatcher = o, t.AsYouType = u, t.isSupportedCountry = function () {
            return a(r.isSupportedCountry, arguments)
        }, t.getCountryCallingCode = function () {
            return a(r.getCountryCallingCode, arguments)
        }, t.getExtPrefix = function (d) {
            return a(r.getExtPrefix, arguments)
        }, t.getExampleNumber = function () {
            return a(r.getExampleNumber, arguments)
        }, t.formatIncompletePhoneNumber = function () {
            return a(r.formatIncompletePhoneNumber, arguments)
        };
        var n,
            $ = e(22),
            i = (n = $) && n.__esModule ? n : {default: n};

        function a(d, t) {
            var e = Array.prototype.slice.call(t);
            return e.push(i.default), d.apply(this, e)
        }

        function o(d, t) {
            return r.PhoneNumberMatcher.call(this, d, t, i.default)
        }

        function u(d) {
            return r.AsYouType.call(this, d, i.default)
        }

        o.prototype = Object.create(r.PhoneNumberMatcher.prototype, {}), o.prototype.constructor = o, u.prototype = Object.create(r.AsYouType.prototype, {}), u.prototype.constructor = u
    }])
});
//# sourceMappingURL=libphonenumber-max.js.map
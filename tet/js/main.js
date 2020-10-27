document.addEventListener('DOMContentLoaded', function() {
  let targetDate = new Date(
    "'02/12/2021 00:00:00 GMT+0700 (SE Asia Standard Time)"
  );
  let onStart = () => {
    document
      .querySelectorAll('.countdown-item')
      .forEach((item) => item.classList.add('show'));
  };
  let onTick = ({ days, hours, minutes, seconds }) => {
    document.querySelector('.countdown-item.days').innerHTML = days;
    document.querySelector('.countdown-item.hours').innerHTML = hours;
    document.querySelector('.countdown-item.minutes').innerHTML = minutes;
    document.querySelector('.countdown-item.seconds').innerHTML = seconds;
  };
  let options = new LsCountdownOptions({ targetDate, onStart, onTick });
  let countdown = new LsCountdown(options);

  countdown.start();
  window.mycountdown = countdown;
});
!(function(t) {
  var e = {};
  function s(n) {
    if (e[n]) return e[n].exports;
    var o = (e[n] = { i: n, l: !1, exports: {} });
    return t[n].call(o.exports, o, o.exports, s), (o.l = !0), o.exports;
  }
  (s.m = t),
    (s.c = e),
    (s.d = function(t, e, n) {
      s.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (s.r = function(t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (s.t = function(t, e) {
      if ((1 & e && (t = s(t)), 8 & e)) return t;
      if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (s.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var o in t)
          s.d(
            n,
            o,
            function(e) {
              return t[e];
            }.bind(null, o)
          );
      return n;
    }),
    (s.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return s.d(e, 'a', e), e;
    }),
    (s.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (s.p = ''),
    s((s.s = 2));
})([
  function(t, e, s) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    e.default = class {
      constructor({
        days: t = '0',
        hours: e = '0',
        minutes: s = '0',
        seconds: n = '0'
      }) {
        (this.days = t),
          (this.hours = e),
          (this.minutes = s),
          (this.seconds = n);
      }
    };
  },
  function(t, e, s) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    e.default = class {
      constructor({
        days: t = 'd',
        hours: e = 'h',
        minutes: s = 'm',
        seconds: n = 's'
      }) {
        (this.days = t),
          (this.hours = e),
          (this.minutes = s),
          (this.seconds = n);
      }
    };
  },
  function(t, e, s) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    const n = s(3);
    e.LsCountdown = n.default;
    const o = s(4);
    e.LsCountdownOptions = o.default;
    const i = s(1);
    e.LsCountdownSufixes = i.default;
    const r = s(0);
    (e.LsCountdownTick = r.default),
      ((t) => {
        (t.LsCountdown = n.default),
          (t.LsCountdownOptions = o.default),
          (t.LsCountdownSufixes = i.default),
          (t.LsCountdownTick = r.default);
      })('undefined' != typeof window ? window : {});
  },
  function(t, e, s) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    const n = s(0);
    e.default = class {
      constructor(t) {
        this.validateTargetDate(t.targetDate),
          (this.targetDate = t.targetDate),
          (this.onStart = t.onStart),
          (this.onStop = t.onStop),
          (this.onTick = t.onTick),
          (this.sufixes = t.sufixes),
          (this.CURRENT_TIME = new n.default({}));
      }
      validateTargetDate(t) {
        if (t <= new Date())
          throw new Error('The target date must be a foward date');
      }
      doTick(t) {
        let e,
          s,
          o,
          i,
          r = new Date().getTime(),
          u = (this.targetDate.getTime() - r) / 1e3;
        (e = u / 86400),
          (s = (u %= 86400) / 3600),
          (o = (u %= 3600) / 60),
          (i = u % 60),
          (e =
            parseInt(e > 0 ? (e > 9 ? e : `0${e}`) : '00').toString() +
            this.sufixes.days),
          (s =
            parseInt(s > 0 ? (s > 9 ? s : `0${s}`) : '00').toString() +
            this.sufixes.hours),
          (o =
            parseInt(o > 0 ? (o > 9 ? o : `0${o}`) : '00').toString() +
            this.sufixes.minutes),
          (i =
            parseInt(i > 0 ? (i > 9 ? i : `0${i}`) : '00').toString() +
            this.sufixes.seconds),
          (this.CURRENT_TIME = new n.default({
            days: e,
            hours: s,
            minutes: o,
            seconds: i
          })),
          'function' == typeof t && t(this.CURRENT_TIME);
      }
      stop() {
        this.COUNTDOWN_INTERVAL &&
          (clearInterval(this.COUNTDOWN_INTERVAL),
          'function' == typeof this.onStop &&
            this.onStop(Object.assign({}, this.CURRENT_TIME)));
      }
      start() {
        this.doTick(this.onStart),
          (this.COUNTDOWN_INTERVAL = setInterval(() => {
            this.doTick(this.onTick);
          }, 1e3));
      }
      changeTargetDate(t = new Date()) {
        this.validateTargetDate(t),
          this.stop.bind(this).call(),
          (this.targetDate = t),
          this.start.bind(this).call();
      }
    };
  },
  function(t, e, s) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    const n = s(1);
    e.default = class {
      constructor({
        targetDate: t = new Date(),
        onStart: e = () => {},
        onStop: s = () => {},
        onTick: o = () => {},
        sufixes: i = new n.default({})
      } = {}) {
        (this.targetDate = t),
          (this.onStart = e),
          (this.onStop = s),
          (this.onTick = o),
          (this.sufixes = i);
      }
    };
  }
]);

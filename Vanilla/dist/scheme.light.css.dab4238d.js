// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"MN3Z":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.style = void 0;

var _litElement = require("lit-element");

const style = (0, _litElement.css)`:root,.vvd-scheme-main,::part(vvd-scheme-main){--vvd-sizing-4px-scale-3xs: 8px;--vvd-sizing-4px-scale-2xs: 12px;--vvd-sizing-4px-scale-xs: 16px;--vvd-sizing-4px-scale-sm: 20px;--vvd-sizing-4px-scale-md: 24px;--vvd-sizing-4px-scale-lg: 28px;--vvd-sizing-4px-scale-xl: 32px;--vvd-sizing-4px-scale-2xl: 36px;--vvd-sizing-4px-scale-3xl: 40px;--vvd-sizing-8px-scale-3xs: 8px;--vvd-sizing-8px-scale-2xs: 16px;--vvd-sizing-8px-scale-xs: 24px;--vvd-sizing-8px-scale-sm: 32px;--vvd-sizing-8px-scale-md: 40px;--vvd-sizing-8px-scale-lg: 48px;--vvd-sizing-8px-scale-xl: 56px;--vvd-sizing-8px-scale-2xl: 64px;--vvd-sizing-8px-scale-3xl: 72px;--vvd-color-surface-0dp: rgba(255, 255, 255, 1);--vvd-color-surface-2dp: rgba(255, 255, 255, 1);--vvd-color-surface-4dp: rgba(255, 255, 255, 1);--vvd-color-surface-8dp: rgba(255, 255, 255, 1);--vvd-color-surface-12dp: rgba(255, 255, 255, 1);--vvd-color-surface-16dp: rgba(255, 255, 255, 1);--vvd-color-surface-24dp: rgba(255, 255, 255, 1);--vvd-color-canvas: rgb(255,255,255);--vvd-color-on-canvas: rgb(0,0,0);--vvd-color-primary: rgb(0,0,0);--vvd-color-on-primary: rgb(255,255,255);--vvd-color-neutral: rgb(117,117,117);--vvd-color-on-neutral: rgb(255,255,255);--vvd-color-neutral-10: rgb(242,242,242);--vvd-color-neutral-20: rgb(230,230,230);--vvd-color-neutral-30: rgb(204,204,204);--vvd-color-neutral-40: rgb(179,179,179);--vvd-color-neutral-50: rgb(146,146,146);--vvd-color-neutral-70: rgb(102,102,102);--vvd-color-neutral-80: rgb(77,77,77);--vvd-color-neutral-90: rgb(51,51,51);--vvd-color-cta: rgb(153,65,255);--vvd-color-on-cta: rgb(255,255,255);--vvd-color-cta-10: rgb(245,240,253);--vvd-color-cta-20: rgb(236,226,250);--vvd-color-cta-30: rgb(220,193,252);--vvd-color-cta-70: rgb(135,30,255);--vvd-color-cta-90: rgb(68,2,145);--vvd-color-success: rgb(28,135,49);--vvd-color-on-success: rgb(255,255,255);--vvd-color-success-10: rgb(225,248,229);--vvd-color-success-20: rgb(207,238,212);--vvd-color-success-30: rgb(134,224,144);--vvd-color-success-70: rgb(22,118,41);--vvd-color-success-90: rgb(24,58,30);--vvd-color-alert: rgb(230,29,29);--vvd-color-on-alert: rgb(255,255,255);--vvd-color-alert-10: rgb(255,238,242);--vvd-color-alert-20: rgb(254,223,223);--vvd-color-alert-30: rgb(255,187,187);--vvd-color-alert-70: rgb(205,13,13);--vvd-color-alert-90: rgb(110,0,0);--vvd-color-warning: rgb(250,159,0);--vvd-color-on-warning: rgb(0,0,0);--vvd-color-warning-10: rgb(252,245,167);--vvd-color-warning-20: rgb(253,231,109);--vvd-color-warning-30: rgb(255,195,33);--vvd-color-warning-70: rgb(166,76,3);--vvd-color-warning-90: rgb(82,40,1);--vvd-color-info: rgb(2,118,213);--vvd-color-on-info: rgb(255,255,255);--vvd-color-info-10: rgb(232,244,251);--vvd-color-info-20: rgb(211,233,252);--vvd-color-info-30: rgb(157,210,254);--vvd-color-info-70: rgb(14,101,194);--vvd-color-info-90: rgb(14,48,109);--vvd-color-announcement: rgb(214,33,156);--vvd-color-on-announcement: rgb(255,255,255);--vvd-color-announcement-10: rgb(255,237,251);--vvd-color-announcement-20: rgb(255,220,247);--vvd-color-announcement-30: rgb(248,185,231);--vvd-color-announcement-70: rgb(187,30,137);--vvd-color-announcement-90: rgb(98,2,86);--vvd-shadow-surface-0dp: drop-shadow(1px 0 0 rgba(204, 204, 204, 1)) drop-shadow(0 1px 0 rgba(204, 204, 204, 1)) drop-shadow(0 -1px 0 rgba(204, 204, 204, 1)) drop-shadow(-1px 0 0 rgba(204, 204, 204, 1));--vvd-shadow-surface-2dp: drop-shadow(0 1px 4px rgba(0, 0, 0, 0.1)) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.05)) drop-shadow(0 2px 1px rgba(0, 0, 0, 0.05));--vvd-shadow-surface-4dp: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1)) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.05)) drop-shadow(0 4px 2px rgba(0, 0, 0, 0.05));--vvd-shadow-surface-8dp: drop-shadow(0 2px 16px rgba(0, 0, 0, 0.1)) drop-shadow(0 8px 8px rgba(0, 0, 0, 0.05)) drop-shadow(0 4px 4px rgba(0, 0, 0, 0.05));--vvd-shadow-surface-12dp: drop-shadow(0 4px 24px rgba(0, 0, 0, 0.1)) drop-shadow(0 12px 16px rgba(0, 0, 0, 0.05)) drop-shadow(0 6px 8px rgba(0, 0, 0, 0.05));--vvd-shadow-surface-16dp: drop-shadow(0 6px 32px rgba(0, 0, 0, 0.1)) drop-shadow(0 16px 24px rgba(0, 0, 0, 0.05)) drop-shadow(0 8px 12px rgba(0, 0, 0, 0.05));--vvd-shadow-surface-24dp: drop-shadow(0 12px 48px rgba(0, 0, 0, 0.2)) drop-shadow(0 24px 32px rgba(0, 0, 0, 0.05)) drop-shadow(0 12px 16px rgba(0, 0, 0, 0.05))}@supports(color-scheme: light){:root,.vvd-scheme-main,::part(vvd-scheme-main){color-scheme:light}}.vvd-scheme-alternate,::part(vvd-scheme-alternate){--vvd-sizing-4px-scale-3xs: 8px;--vvd-sizing-4px-scale-2xs: 12px;--vvd-sizing-4px-scale-xs: 16px;--vvd-sizing-4px-scale-sm: 20px;--vvd-sizing-4px-scale-md: 24px;--vvd-sizing-4px-scale-lg: 28px;--vvd-sizing-4px-scale-xl: 32px;--vvd-sizing-4px-scale-2xl: 36px;--vvd-sizing-4px-scale-3xl: 40px;--vvd-sizing-8px-scale-3xs: 8px;--vvd-sizing-8px-scale-2xs: 16px;--vvd-sizing-8px-scale-xs: 24px;--vvd-sizing-8px-scale-sm: 32px;--vvd-sizing-8px-scale-md: 40px;--vvd-sizing-8px-scale-lg: 48px;--vvd-sizing-8px-scale-xl: 56px;--vvd-sizing-8px-scale-2xl: 64px;--vvd-sizing-8px-scale-3xl: 72px;--vvd-color-surface-0dp: rgba(13, 13, 13, 1);--vvd-color-surface-2dp: rgba(28, 28, 28, 1);--vvd-color-surface-4dp: rgba(32, 32, 32, 1);--vvd-color-surface-8dp: rgba(37, 37, 37, 1);--vvd-color-surface-12dp: rgba(42, 42, 42, 1);--vvd-color-surface-16dp: rgba(47, 47, 47, 1);--vvd-color-surface-24dp: rgba(52, 52, 52, 1);--vvd-color-canvas: rgb(13,13,13);--vvd-color-on-canvas: rgb(255,255,255);--vvd-color-primary: rgb(255,255,255);--vvd-color-on-primary: rgb(0,0,0);--vvd-color-neutral: rgb(146,146,146);--vvd-color-on-neutral: rgb(0,0,0);--vvd-color-neutral-10: rgb(26,26,26);--vvd-color-neutral-20: rgb(51,51,51);--vvd-color-neutral-30: rgb(77,77,77);--vvd-color-neutral-40: rgb(102,102,102);--vvd-color-neutral-50: rgb(117,117,117);--vvd-color-neutral-70: rgb(179,179,179);--vvd-color-neutral-80: rgb(204,204,204);--vvd-color-neutral-90: rgb(230,230,230);--vvd-color-cta: rgb(178,123,242);--vvd-color-on-cta: rgb(0,0,0);--vvd-color-cta-10: rgb(38,4,77);--vvd-color-cta-20: rgb(68,2,145);--vvd-color-cta-30: rgb(100,5,209);--vvd-color-cta-70: rgb(203,161,250);--vvd-color-cta-90: rgb(236,226,250);--vvd-color-success: rgb(48,168,73);--vvd-color-on-success: rgb(0,0,0);--vvd-color-success-10: rgb(10,30,17);--vvd-color-success-20: rgb(24,58,30);--vvd-color-success-30: rgb(21,89,35);--vvd-color-success-70: rgb(83,202,106);--vvd-color-success-90: rgb(207,238,212);--vvd-color-alert: rgb(247,89,89);--vvd-color-on-alert: rgb(0,0,0);--vvd-color-alert-10: rgb(62,0,4);--vvd-color-alert-20: rgb(110,0,0);--vvd-color-alert-30: rgb(159,2,2);--vvd-color-alert-70: rgb(254,150,150);--vvd-color-alert-90: rgb(254,223,223);--vvd-color-warning: rgb(224,121,2);--vvd-color-on-warning: rgb(0,0,0);--vvd-color-warning-10: rgb(42,21,2);--vvd-color-warning-20: rgb(82,40,1);--vvd-color-warning-30: rgb(128,56,7);--vvd-color-warning-70: rgb(250,159,0);--vvd-color-warning-90: rgb(253,231,109);--vvd-color-info: rgb(41,151,240);--vvd-color-on-info: rgb(0,0,0);--vvd-color-info-10: rgb(7,25,57);--vvd-color-info-20: rgb(14,48,109);--vvd-color-info-30: rgb(9,74,158);--vvd-color-info-70: rgb(101,186,255);--vvd-color-info-90: rgb(211,233,252);--vvd-color-announcement: rgb(229,96,187);--vvd-color-on-announcement: rgb(0,0,0);--vvd-color-announcement-10: rgb(50,8,44);--vvd-color-announcement-20: rgb(98,2,86);--vvd-color-announcement-30: rgb(143,22,105);--vvd-color-announcement-70: rgb(251,143,216);--vvd-color-announcement-90: rgb(255,220,247);--vvd-shadow-surface-0dp: drop-shadow(1px 0 0 rgba(77, 77, 77, 1)) drop-shadow(0 1px 0 rgba(77, 77, 77, 1)) drop-shadow(0 -1px 0 rgba(77, 77, 77, 1)) drop-shadow(-1px 0 0 rgba(77, 77, 77, 1));--vvd-shadow-surface-2dp: drop-shadow(0 1px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.25)) drop-shadow(0 2px 1px rgba(0, 0, 0, 0.25));--vvd-shadow-surface-4dp: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.25)) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25));--vvd-shadow-surface-8dp: drop-shadow(0 2px 16px rgba(19, 20, 21, 0.25)) drop-shadow(0 8px 8px rgba(19, 20, 21, 0.25)) drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25));--vvd-shadow-surface-12dp: drop-shadow(0 4px 24px rgba(0, 0, 0, 0.25)) drop-shadow(0 12px 16px rgba(0, 0, 0, 0.25)) drop-shadow(0 6px 8px rgba(0, 0, 0, 0.25));--vvd-shadow-surface-16dp: drop-shadow(0 6px 32px rgba(0, 0, 0, 0.25)) drop-shadow(0 16px 24px rgba(0, 0, 0, 0.25)) drop-shadow(0 8px 12px rgba(0, 0, 0, 0.25));--vvd-shadow-surface-24dp: drop-shadow(0 12px 48px rgba(0, 0, 0, 0.25)) drop-shadow(0 24px 32px rgba(0, 0, 0, 0.25)) drop-shadow(0 12px 16px rgba(0, 0, 0, 0.25))}@supports(color-scheme: dark){.vvd-scheme-alternate,::part(vvd-scheme-alternate){color-scheme:dark}}`;
exports.style = style;
},{"lit-element":"vuXj"}]},{},[], null)
//# sourceMappingURL=/scheme.light.css.dab4238d.js.map
// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=stackoverflow.com
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    console.log('crawler-js-tools running.');
    window.clear_all_interval = function () {
        // Get a reference to the last interval + 1
        const interval_id = window.setInterval(function () { }, Number.MAX_SAFE_INTEGER);

        // Clear any timeout/interval up to that id
        for (let i = 1; i < interval_id; i++) {
            window.clearInterval(i);
        }
    };

    window.hook_cls_method = function (func, method_name, before=null, after=null) {

        // we iterate over all method names
        let cls = func.prototype
        cls['_' + method_name] = cls[method_name]
        cls[method_name] = function() {
            if(before != null) {
                before(...arguments)
            }

            const result = cls['_' + method_name](...arguments)

            if(after != null) {
                after(...arguments, result)
            }
        }

    }
})();
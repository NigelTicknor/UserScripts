// ==UserScript==
// @name         Reddit Redirect
// @namespace    https://www.ticknorn.com
// @version      0.1
// @description  Redirect reddit from www -> old
// @author       Nigel Ticknor
// @include      /^https?:\/\/www\.reddit\.com/.*$/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
     window.location = window.location.href.replace('www.','old.');
})();

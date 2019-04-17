// ==UserScript==
// @name         Amazon URL Cleaner
// @namespace    https://www.ticknorn.com
// @version      0.1
// @description  Clean Amazon Product URLs for easy sharing
// @author       You
// @match        https://www.amazon.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var urlstuff = window.location.href.split('/');
    var dpind = urlstuff.indexOf('dp');
    if(dpind>-1&&dpind<urlstuff.length-1){
        history.pushState({
            id: 'product'
        }, null, '/dp/'+urlstuff[dpind+1]);
    }

})();

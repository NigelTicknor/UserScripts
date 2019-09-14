// ==UserScript==
// @name         URL Cleaner
// @namespace    https://www.ticknorn.com
// @version      0.1
// @description  Clean URLs for easy sharing
// @author       You
// @match        https://www.amazon.com/*
// @match        https://www.ebay.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if(window.location.hostname=='www.amazon.com'){
        let urlstuff = window.location.href.split('/');
        let dpind = urlstuff.indexOf('dp');
        if(dpind>-1&&dpind<urlstuff.length-1){
            history.pushState({
                id: 'product'
            }, null, '/dp/'+urlstuff[dpind+1]);
        }
    }else if(window.location.hostname=='www.ebay.com'){
        console.log('test');
        let urlstuff = window.location.href.split('/');
        let itmind = urlstuff.indexOf('itm');
        if(itmind>-1&&itmind<urlstuff.length-1){
            history.pushState({
                id: 'product'
            }, null, '/itm/'+urlstuff[itmind+2].split('?')[0]);
        }
    }

})();
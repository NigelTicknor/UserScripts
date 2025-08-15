// ==UserScript==
// @name         URL Cleaner
// @namespace    https://www.ticknorn.com
// @version      0.5
// @description  Clean URLs for easy sharing
// @author       You
// @match        https://www.amazon.com/*
// @match        https://www.amazon.co.jp/*
// @match        https://www.ebay.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function cleanUrl() {
        const hostname = window.location.hostname;
        const href = window.location.href;

        if (hostname === 'www.amazon.com' || hostname === 'www.amazon.co.jp') {
            const urlParts = href.split('/');
            const dpIndex = urlParts.indexOf('dp');

            if (dpIndex > -1 && dpIndex < urlParts.length - 1) {
                const productId = urlParts[dpIndex + 1].split('?')[0]; // Remove query params too
                const newUrl = window.location.origin + '/dp/' + productId;

                if (window.location.href !== newUrl) {
                    try {
                        window.history.replaceState(null, null, newUrl);
                    } catch (e) {
                        console.log('Could not clean URL:', e);
                    }
                }
            }
        } else if (hostname === 'www.ebay.com') {
            const urlParts = href.split('/');
            const itmIndex = urlParts.indexOf('itm');

            if (itmIndex > -1 && itmIndex < urlParts.length - 1) {
                const itemId = urlParts[itmIndex + 1].split('?')[0];
                const newUrl = window.location.origin + '/itm/' + itemId;

                if (window.location.href !== newUrl) {
                    try {
                        window.history.replaceState(null, null, newUrl);
                    } catch (e) {
                        console.log('Could not clean URL:', e);
                    }
                }
            }
        }
    }

    // Try multiple approaches for different scenarios
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', cleanUrl);
    } else {
        cleanUrl();
    }

    // Also run after a short delay to catch dynamic loads
    setTimeout(cleanUrl, 1000);

})();

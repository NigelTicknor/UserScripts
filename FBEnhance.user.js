// ==UserScript==
// @name         FB Enhance
// @namespace    https://www.ticknorn.com
// @version      0.1
// @description  Disable the like button on Facebook
// @author       Nigel Ticknor
// @match        https://www.facebook.com/*
// @grant        none
// ==/UserScript==

const allowedPostCount = 10;

(function() {
    'use strict';
    disableLikes();
    window.addEventListener("scroll", function(e) {
        disableLikes();
        removePosts();
    });
})();

function disableLikes(){ //disable the 'like' button
    [].forEach.call(document.getElementsByClassName('UFILikeLink'), l => {
        l.style.display = 'none';
    });
}

function removePosts(){ //remove posts you've already seen to increase performance
    var ddd = document.getElementsByClassName('_4-u2 mbm _4mrt _5jmm _5pat _5v3q _4-u8');
    if(ddd.length>allowedPostCount)
        ddd[0].parentElement.removeChild(ddd[0]);
}

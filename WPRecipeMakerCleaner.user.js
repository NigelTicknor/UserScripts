// ==UserScript==
// @name         WP Recipe Maker Cleaner
// @namespace    https://www.ticknorn.com/
// @version      0.1
// @description  Clean up WP recipe sites
// @author       Nigel Ticknor
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let us_wp_recipes = document.getElementsByClassName('wprm-recipe-container');
    if(us_wp_recipes.length > 0){
        document.body.innerHTML = us_wp_recipes[0].outerHTML;
    }
})();
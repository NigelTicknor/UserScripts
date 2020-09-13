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
	let recipeClasses = [
		'wprm-recipe-container',
		'tasty-recipes'
	];
	recipeClasses.forEach((e)=>{
		let foundClasses = document.getElementsByClassName(e);
		if(foundClasses.length > 0) {
			document.body.innerHTML = foundClasses[0].outerHTML;
		}
	});
})();
// --------------------------------------------------
// Main js
// --------------------------------------------------


'use strict';

// Lib
// --------------------------
//= lib/_bootstrap.min.js
//= lib/_svg4everybody.min.js


// Plugins
// --------------------------
//= plugins/_prism.js
//= plugins/_slideout.min.js


// Polyfill
// --------------------------
//= polyfill/_object-fit.js

(function () {
    var blockTitle = document.querySelectorAll('.property-header-js');
    var dropDownFilter = Array.from(blockTitle);

    var handlerClickTitle = function handlerClick(e) {
        e.preventDefault();

        if (blockTitle) {
            e.currentTarget.closest('.property').classList.toggle('active');
        }
    };

    dropDownFilter.forEach(function (node) {
        node.addEventListener('click', handlerClickTitle);
    });
})();
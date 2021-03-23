// ==UserScript==
// @name Mangadex Search
// @namespace https://github.com/victoravtr/UserScript-scripts
// @match https://mangadex.org/search
// @grant none
// ==/UserScript==

const not_wanted_status = ["Dropped", "Plan To Read", "Completed"];
if (window.location.href.indexOf("mangadex.org/search") != -1) {
    var elements = document.getElementsByClassName('manga-entry');
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var current_status = element.getElementsByClassName('d-none')[0].innerHTML;
        if (not_wanted_status.includes(current_status)) {
            element.style.display = "none";
        }
    };
}
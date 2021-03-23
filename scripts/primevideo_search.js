// ==UserScript==
// @name Primevideo Search
// @namespace https://github.com/victoravtr/UserScript-scripts
// @match https://www.primevideo.com/search/*
// @grant none
// ==/UserScript==
const grid = document.getElementsByClassName("av-grid-wrapper")[0];

grid.addEventListener("DOMNodeInserted", deleteNodes);

function deleteNodes() {
    if (window.location.href.indexOf("primevideo.com/search") != -1){
        const cards = document.getElementsByClassName("av-hover-wrapper");
        for (var i = 0; i < cards.length; i++) {
            let card = cards[i];
            let notFree = card.getElementsByClassName("tst-ec-orange");
            if (notFree.length == 1) {
                card.style.display = 'none';
            }
        }
    }
}

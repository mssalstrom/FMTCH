import { keepMitch } from './content.js';
let cName = document.getElementById("enable");
let disableEx = document.getElementById("disable");

// window.addEventListener("load", setMitch());


cName.addEventListener("click", async() => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: setMitch,
        keepMitch,
    });
});

disableEx.addEventListener("click", async() => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: clearMitch,
    });
});



function setMitch() {

    document.body.innerHTML = document.body.innerHTML.replace(/Mitch McConnell/g, 'Mitch Shithead McRatfuck');
    document.body.innerHTML = document.body.innerHTML.replace(/Mitchell McConnell/g, 'Mitch Shithead McRatfuck');
    document.body.innerHTML = document.body.innerHTML.replace(/Mr. McConnell/g, 'Mitch Shithead McRatfuck');
    document.body.innerHTML = document.body.innerHTML.replace(/Senator McConnell/g, 'Senator Shithead McRatfuck');

}

function clearMitch() {
    location.reload();
}

// function onLoad() {
//     chrome.storage.sync.get("color", ({ color }) => {
//         document.body.innerHTML = document.body.innerHTML.replace(/Mitch McConnell/g, 'Mitch Shithead McRatfuck');
//         document.body.innerHTML = document.body.innerHTML.replace(/Mitchell McConnell/g, 'Mitch Shithead McRatfuck');
//         document.body.innerHTML = document.body.innerHTML.replace(/Mr. McConnell/g, 'Mitch Shithead McRatfuck');
//         document.body.innerHTML = document.body.innerHTML.replace(/Senator McConnell/g, 'Senator Shithead McRatfuck');
//     });
// }
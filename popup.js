let cName = document.getElementById("enable");

chrome.storage.sync.get("color", ({ color }) => {
    cName.style.backgroundColor = color;
});

cName.addEventListener("click", async() => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: setMitch,
    });
});

function setMitch() {
    chrome.storage.sync.get("color", ({ color }) => {
        document.body.innerHTML = document.body.innerHTML.replace(/McConnell/g, 'Shithead McRatfuck');
    });
}
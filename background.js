// background scripts for testing

let color = '/images/trash_128.png';

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });


});
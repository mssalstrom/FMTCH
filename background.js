// background scripts for testing

let cLog = "Test script";

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ cLog });
    console.log(cLog)
});
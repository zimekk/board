chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  console.log(`Change URL: ${tab.url}`);
});

console.log(["background service worker"]);

chrome.runtime.onMessage.addListener((message) => {
  console.log(["onMessage"], { message });
});

chrome.runtime.onMessageExternal.addListener((message, sender) => {
  console.log(["onMessageExternal"], { message, sender });
});

chrome.runtime.onInstalled.addListener((details) => {
  console.log(["onInstalled"], { details });
});

chrome.action.onClicked.addListener(() => {
  console.log(["onClicked"]);
});

export {};

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  console.log(`Change URL: ${tab.url}`);
});

// chrome.bookmarks.getRecent(10, (results) => {
// 	console.log(`bookmarks:`, results);
// });

console.log(["background service worker"]);

export {};

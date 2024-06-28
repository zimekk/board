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

// https://github.com/GanymedeNil/request-pipeline/blob/main/background.js
function onEvent(debuggeeId, message, params) {
  console.log({ debuggeeId, message, params });
}

function onAttach(tabId) {
  console.log(["onAttach"], { tabId });
  // first enable the Network
  chrome.debugger.sendCommand(
    {
      tabId,
    },
    "Network.enable",
  );
  chrome.debugger.onEvent.addListener(onEvent);
}

chrome.action.onClicked.addListener((tab) => {
  console.log(["onClicked"], { tab });
  // chrome.scripting.executeScript({
  //   target: { tabId: tab.id },
  //   func: function (type) {
  //     window.postMessage({ type });
  //   },
  //   args: [SKIP_ACTION]
  // });

  const version = "1.0";

  // debug at current tab
  chrome.debugger.attach(
    {
      tabId: tab.id,
    },
    version,
    onAttach.bind(null, tab.id),
  );

  // chrome.devtools.network.onRequestFinished.addListener(
  //   function(request) {
  //     console.log(['request'])
  //     if (request.response.bodySize > 40*1024) {
  //       chrome.devtools.inspectedWindow.eval(
  //           'console.log("Large image: " + unescape("' +
  //           escape(request.request.url) + '"))');
  //     }
  //   }
  // );
});

export {};

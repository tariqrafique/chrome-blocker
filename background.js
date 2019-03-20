console.log(">>> Hey");

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      return {cancel: true};
    },
    {urls: [ '*://*.twitter.com/*',
             '*://*.facebook.com/*',
             '*://*.theverge.com/*',
             '*://*.thestar.com/*',
             '*://*.theglobeandmail.com/*',
             '*://techcrunch.com/*',
             '*://*.cbc.ca/*',
             '*://cbcnews.ca/*',
             '*://*.dawn.com/*',
             '*://news.google.com/*',
             '*://*.cnn.com/*',
        ]},
    ["blocking"]);
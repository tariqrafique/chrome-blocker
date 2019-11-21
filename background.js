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
             '*://*.lifehacker.com/*',
             '*://*.engadget.com/*',
             '*://*.reddit.com/*',
             '*://*.gizmodo.com/*',
             '*://*.nytimes.com/*',
             '*://*.bing.com/news/*',
             '*://*.seattletimes.com/*',
             '*://aloha--c.documentforce.com/*',
             '*://*.bbc.com/*',
             '*://*.bbc.co.uk/*',
             '*://*.bbcnews.com/*'
        ]},
    ["blocking"]);
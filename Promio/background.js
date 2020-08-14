'use strict';

chrome.runtime.onInstalled.addListener(function() {

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
      	// I changed urlEquals to urlMatches so that you can use REGEX to add more sites.
        pageUrl: { urlMatches: '(etsy|ebay|westashleyiheartcbd)\.com', schemes: ['https'] },
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});
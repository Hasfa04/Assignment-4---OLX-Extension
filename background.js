chrome.browserAction.onClicked.addListener(function(activeTab){
  var newURL = "https://www.olx.co.ug/";
  chrome.tabs.create({ url: newURL });
});
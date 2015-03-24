
chrome.webRequest.onErrorOccurred.addListener(
  function(details) {
    if (details.type != "main_frame" || details.error == "net::ERR_ABORTED") //ignore
    { return; }

		chrome.tabs.update(details.tabId, {url:details.url});
  },

  {
    urls: [
           "http://www.immigration.govt.nz/*",
			"https://www.immigration.govt.nz/*",
			"http://formshelp.immigration.govt.nz/*",
			"https://webcomm.paymark.co.nz/*"
    ]
  }
  );
  
  var millisecondsPerDay = 1000 * 60 * 60 * 24;
  var oneDayAgo = (new Date()).getTime() - millisecondsPerDay;
  
if (!chrome.cookies) {
  chrome.cookies = chrome.experimental.cookies;
}


//var tid = setInterval(function clearCookies(){
//		chrome.cookies.getAll({domain: "www.immigration.govt.nz"}, function(cookies) {
//   		 for(var i=0; i<cookies.length;i++) {
//		        chrome.cookies.remove({url: "http://www.immigration.govt.nz" + cookies[i].path, name: cookies[i].name});
//		        console.log("clear cookies")
//		    }
//		});
//}, 300000);

  

chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
		
		if (message.greeting == "removeCookie"){
					chrome.cookies.getAll({domain: "www.immigration.govt.nz"}, function(cookies) {
			   		 for(var i=0; i<cookies.length;i++) {
					        chrome.cookies.remove({url: "http://www.immigration.govt.nz" + cookies[i].path, name: cookies[i].name});
					    }
					});
					
					chrome.browsingData.remove({
					  "since": oneDayAgo
						}, {
						  "cache": true,
						  "cookies": true
						}, console.log(message));
						
			  sendResponse({farewell:"cookie clean"});
			
		}

});



  
//chrome.browserAction.onClicked.addListener(function(tab) {
//		console.log("good");
//	  chrome.tabs.executeScript(null,
//			  {file: "auto-whv.tamper.js"});
//});

  
//chrome.webNavigation.onErrorOccurred.addListener(
//	function(details) {
//		console.log("Web navigation commited!");
//    if (details.frameId != 0) //ignore subframes. 0 is main frame
//    { return; }

//    chrome.tabs.update(details.tabId, {url:details.url});
//});

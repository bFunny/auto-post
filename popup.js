
function click(e) {
	if(e.target.id == "form"){
		chrome.tabs.create({url : "./appinfor.html"}, function(tab) { });
	} 
	
	if(e.target.id == "options"){
		chrome.tabs.create({url : "./options.html"}, function(tab) { });
	} 
	
	if(e.target.id == "about"){
		chrome.tabs.create({url : "./about.html"}, function(tab) { });
	}  
//  chrome.tabs.executeScript(null,
//      {code:"document.body.style.backgroundColor='" + e.target.id + "'"});
// window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('div');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }
});

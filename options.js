var applyretryseconds = document.getElementById("applyretryseconds");
var submitretryseconds = document.getElementById("submitretryseconds");
var payretryseconds = document.getElementById("payretryseconds");
var customerid = document.getElementById("customerid");

var validateButton = document.getElementById("ctl00_ContentPlaceHolder1_wizardPageFooter_wizardPageNavigator_validateButton");

validateButton.onclick=function(){
	console.log("Interval Saved");
	saveChanges(applyretryseconds);
	saveChanges(submitretryseconds);
	saveChanges(payretryseconds);
	setCustomerID(customerid.value);
	alert("Saved");
};



function saveChanges(elementname) {
	
	 var key = elementname.id;
	
    var items = {};
    items[key] = elementname.value;
    //chrome.storage.sync.clear
    chrome.storage.local.set(items, function () {
       // console.log('Saved', key, items);
    });
}

function getChange(elementname) {
	
	var key = elementname.id;
	
  chrome.storage.local.get(key, function(items) {
  	console.log("items length: " + items);
  	if (items[key]){
	    var savedState = items[key];
			elementname.value =  savedState;
			//	console.log('got', key, items);
		}
		
  });
}

function getCustomerID() {
	
	var key = "customerid";
	 chrome.storage.local.get(key, function(items) {
		 console.log("items length: " + items);
		  	if (items[key]){
			    var savedvalue = items[key];
			    	customerid.value =  savedvalue;
					//	console.log('got', key, items);
				}
	  });
	 
}

function setCustomerID(value) {
	
   var key = "customerid";
	
   var items = {};
   items[key] = Number(value);
   console.log("setCustomerID" + value);
   chrome.storage.local.set(items, function () {
   });
}

getChange(applyretryseconds);
getChange(submitretryseconds);
getChange(payretryseconds);
getCustomerID();
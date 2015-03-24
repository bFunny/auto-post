var username = document.getElementById("Footer_newFooter_loginControl_userNameTextBox");
var password = document.getElementById("Footer_newFooter_loginControl_passwordTextBox");
    
var familyName = document.getElementById("ctl00_ContentPlaceHolder1_personDetails_familyNameTextBox")
var givenName = document.getElementById("ctl00_ContentPlaceHolder1_personDetails_givenName1Textbox")
var gender = document.getElementById("ctl00_ContentPlaceHolder1_personDetails_genderDropDownList")
var dayofbith = document.getElementById("ctl00_ContentPlaceHolder1_personDetails_dateOfBithDatePicker_Day")
var monthofbith = document.getElementById("ctl00_ContentPlaceHolder1_personDetails_dateOfBithDatePicker_Month")
var yearofbith = document.getElementById("ctl00_ContentPlaceHolder1_personDetails_dateOfBithDatePicker_Year")
var countrybith = document.getElementById("ctl00_ContentPlaceHolder1_personDetails_CountryDropDownList")
var addresstext = document.getElementById("ctl00_ContentPlaceHolder1_addressContactDetails_address_address1TextBox")
var cityaddress = document.getElementById("ctl00_ContentPlaceHolder1_addressContactDetails_address_cityTextBox")
var countryaddress = document.getElementById("ctl00_ContentPlaceHolder1_addressContactDetails_address_countryDropDownList")
var emailaddress = document.getElementById("ctl00_ContentPlaceHolder1_addressContactDetails_contactDetails_emailAddressTextBox")
var reprenAgent = document.getElementById("ctl00_ContentPlaceHolder1_hasAgent_representedByAgentDropdownlist")
var communiMethod = document.getElementById("ctl00_ContentPlaceHolder1_communicationMethod_communicationMethodDropDownList")
var credicard = document.getElementById("ctl00_ContentPlaceHolder1_hasCreditCard_hasCreditCardDropDownlist")

var passportnum = document.getElementById("ctl00_ContentPlaceHolder1_identification_passportNumberTextBox")
var confirmpassportnum = document.getElementById("ctl00_ContentPlaceHolder1_identification_confirmPassportNumberTextBox")
var expiryday = document.getElementById("ctl00_ContentPlaceHolder1_identification_passportExpiryDateDatePicker_Day")
var expirymonth = document.getElementById("ctl00_ContentPlaceHolder1_identification_passportExpiryDateDatePicker_Month")
var expiryyear = document.getElementById("ctl00_ContentPlaceHolder1_identification_passportExpiryDateDatePicker_Year")
var otherid = document.getElementById("ctl00_ContentPlaceHolder1_identification_otherIdentificationDropdownlist")
var otherissuday = document.getElementById("ctl00_ContentPlaceHolder1_identification_otherIssueDateDatePicker_Day")
var otherissumonth = document.getElementById("ctl00_ContentPlaceHolder1_identification_otherIssueDateDatePicker_Month")
var otherissuyear = document.getElementById("ctl00_ContentPlaceHolder1_identification_otherIssueDateDatePicker_Year")

var previouswhv = document.getElementById("ctl00_ContentPlaceHolder1_offshoreDetails_commonWHSQuestions_previousWhsPermitVisaDropDownList")
var sufficientfunds = document.getElementById("ctl00_ContentPlaceHolder1_offshoreDetails_commonWHSQuestions_sufficientFundsHolidayDropDownList")
var travelday = document.getElementById("ctl00_ContentPlaceHolder1_offshoreDetails_intendedTravelDateDatePicker_Day")
var travelmonth = document.getElementById("ctl00_ContentPlaceHolder1_offshoreDetails_intendedTravelDateDatePicker_Month")
var travelyear = document.getElementById("ctl00_ContentPlaceHolder1_offshoreDetails_intendedTravelDateDatePicker_Year")
var beentonz = document.getElementById("ctl00_ContentPlaceHolder1_offshoreDetails_beenToNzDropDownList")
var ticket = document.getElementById("ctl00_ContentPlaceHolder1_offshoreDetails_requirementsQuestions_sufficientFundsOnwardTicketDropDownList")
var readrequirement = document.getElementById("ctl00_ContentPlaceHolder1_offshoreDetails_requirementsQuestions_readRequirementsDropDownList")

var payname = document.getElementById("ctl00_ContentPlaceHolder1_payorNameTextBox");
var paymethod = document.getElementById("card_type_id");

var cardnumber = document.getElementById("cardnumber");
var cardverificationcode = document.getElementById("cardverificationcode");
var cardexpirymonth = document.getElementById("cardexpirymonth");
var cardexpiryyear = document.getElementById("cardexpiryyear");

var validateButton = document.getElementById("ctl00_ContentPlaceHolder1_wizardPageFooter_wizardPageNavigator_validateButton")

validateButton.onclick=function(){
	saveChanges(username)
	saveChanges(password)
	
	saveChanges(familyName)
	saveChanges(givenName)
	saveChanges(gender)
	saveChanges(dayofbith)  
	saveChanges(monthofbith)  
	saveChanges(yearofbith)
	saveChanges(countrybith)
	saveChanges(addresstext)
	saveChanges(cityaddress)
	saveChanges(countryaddress)
	saveChanges(emailaddress)
	saveChanges(reprenAgent)
	saveChanges(communiMethod)
	saveChanges(credicard)
	
	saveChanges(passportnum)
	saveChanges(confirmpassportnum)
	saveChanges(expiryday)
	saveChanges(expirymonth)
	saveChanges(expiryyear)
	saveChanges(otherid)
	saveChanges(otherissuday)
	saveChanges(otherissumonth)
	saveChanges(otherissuyear)
	
	saveChanges(previouswhv)
	saveChanges(sufficientfunds)
	saveChanges(travelday)
	saveChanges(travelmonth)
	saveChanges(travelyear)
	saveChanges(beentonz)
	saveChanges(ticket)
	saveChanges(readrequirement)
	
	saveChanges(payname)
	saveChanges(paymethod)
	
	saveChanges(cardnumber)
	saveChanges(cardverificationcode)
	saveChanges(cardexpirymonth)
	saveChanges(cardexpiryyear)
	alert("Saved")
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
  	if (items[key]){
	    var savedState = items[key];
			elementname.value =  savedState;
			//	console.log('got', key, items);
		}
		
  });
}

getChange(username)
getChange(password)
	
getChange(familyName)
getChange(givenName)
getChange(gender)
getChange(dayofbith)  
getChange(monthofbith)  
getChange(yearofbith)
getChange(countrybith)
getChange(addresstext)
getChange(cityaddress)
getChange(countryaddress)
getChange(emailaddress)
getChange(reprenAgent)
getChange(communiMethod)
getChange(credicard)

getChange(passportnum)
getChange(confirmpassportnum)
getChange(expiryday)
getChange(expirymonth)
getChange(expiryyear)
getChange(otherid)
getChange(otherissuday)
getChange(otherissumonth)
getChange(otherissuyear)

getChange(previouswhv)
getChange(sufficientfunds)
getChange(travelday)
getChange(travelmonth)
getChange(travelyear)
getChange(beentonz)
getChange(ticket)
getChange(readrequirement)

getChange(payname)
getChange(paymethod)
	
getChange(cardnumber)
getChange(cardverificationcode)
getChange(cardexpirymonth)
getChange(cardexpiryyear)


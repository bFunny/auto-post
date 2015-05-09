// ==UserScript==
// @name       auto-submit
// @namespace  http://www.weibo.com/173363531
// @version    0.1
// @description  apply working holiday visa automatically
// @copyright  2013+, ZhangNan

var customers = [];

//旷野呼声
customers[1] = {
 "username": "xx",
 "password": "xx",
 "familyName": "QIN",
 "givenName": "PENG",
 "gender": "M",
 "dayofbith": 8,
 "monthofbith": 4,
 "yearofbith": 1986,
 "addresstext": "Wenhua Street, Dong'e",
 "cityaddress": "LIAO CHENG",
 "emailaddress": "qinpeng789@163.com",
 "passportnum": "E09533037",
 "expiryday": 20,
 "expirymonth": 4,
 "expiryyear": 2024,
 "otherissuday": 2,
 "otherissumonth": 4,
 "otherissuyear": 2013,
 "payname":"SUN DAO RANG",
 "card_type_id":"card_type_MASTERCARD",
 "cardnumber":"5324582013461093",
 "cardverificationcode":"494",
 "cardexpirymonth":"06",
 "cardexpiryyear":"2018"
 };


//--------------------------------------------------  
function getChange(elementname) {
	
	var key = elementname.id;
	
  chrome.storage.local.get(key, function(items) {
		elementname.value =  items[key];
  });
}

function getCustomerID(callback) {
	
	var key = "customerid";
	 chrome.storage.local.get(key, function(items) {
		 console.log("items length: " + items);
			    var savedvalue = items[key];
			    if(!savedvalue){
			    	savedvalue = 1;
			    }
				console.log(savedvalue);
				callback(savedvalue);
	  });
	 
}

function setCustomerID(value) {
	
   var key = "customerid";
	
   var items = {};
   items[key] = value;
   console.log("setCustomerID" + value);
   chrome.storage.local.set(items, function () {
   });
}

getCustomerID(main);

function main(customerid){
	
	var customerthis = customers[customerid];
	console.log(customerthis);
	
	var headContent = document.getElementsByTagName('head')[0].getElementsByTagName('title')[0].innerHTML;
	var username = document.getElementById("OnlineServicesLoginStealth_VisaLoginControl_userNameTextBox");
	var online = document.getElementById("OnlineServices_workingHolidayAnchor");
	var panelsWrapperInner = document.getElementById("panelsWrapperInner");
	var dropDownList = document.getElementById("ctl00_ContentPlaceHolder1_countryDropDownList");
	var statuslabel = document.getElementById("ctl00_ContentPlaceHolder1_statusLabel");
	var ApplyNow = document.getElementById("ctl00_ContentPlaceHolder1_applyNowButton");
	var pageheadersubmit = document.getElementById("ctl00_ContentPlaceHolder1_wizardPageHeader_nav_submitImageButton");
	var familyName = document.getElementById("ctl00_ContentPlaceHolder1_personDetails_familyNameTextBox");
	var passportnum = document.getElementById("ctl00_ContentPlaceHolder1_identification_passportNumberTextBox");
	var industry = document.getElementById("ctl00_ContentPlaceHolder1_generalPersonal_industryControl_optionListSearch_SearchStringTextBox");
	var renaldialysis = document.getElementById("ctl00_ContentPlaceHolder1_medicalConditions_renalDialysisDropDownList");
	var imprisonment = document.getElementById("ctl00_ContentPlaceHolder1_character_imprisonment5YearsDropDownList");
	var previouswhv = document.getElementById("ctl00_ContentPlaceHolder1_offshoreDetails_commonWHSQuestions_previousWhsPermitVisaDropDownList");
	var submitApp = document.getElementById("ctl00_ContentPlaceHolder1_applicationList_applicationsDataGrid_ctl02_submitHyperlink");
	var payApp = document.getElementById("ctl00_ContentPlaceHolder1_applicationList_applicationsDataGrid_ctl02_payHyperLink");
	var paynow = document.getElementById("ctl00_ContentPlaceHolder1_payNowImage");
	var checkbox1=document.getElementById("ctl00_ContentPlaceHolder1_falseStatementCheckBox");
	var errorMessageLabel = document.getElementById("ctl00_ContentPlaceHolder1_errorMessageLabel");
	var cancelImageButton = document.getElementById("ctl00_ContentPlaceHolder1_cancelImageButton");
	var payhref = document.getElementById("ctl00_ContentPlaceHolder1_onlinePaymentAnchor");
	var payname = document.getElementById("ctl00_ContentPlaceHolder1_payorNameTextBox");
	var cardnumber = document.getElementById("cardnumber");
	var pageContent = document.getElementById("pageContent");
	var homePageNotice = document.getElementById("homePageNotice");
	var noSchemesAvailable = document.getElementById("ctl00_ContentPlaceHolder1_noSchemesAvailablePanel");
	var elements = document.getElementsByClassName('msg');
	var centers = document.getElementsByTagName("center");
	var payMethod = document.getElementById(customerthis["card_type_id"]);
	var visaDropDown = document.getElementById("VisaDropDown");
	
	
	
	if (headContent != null && headContent.indexOf("denied") != -1) {
	  window.location.href = "https://www.immigration.govt.nz/secure/default.htm";
	}

	else if (payMethod != null){
		payMethod.click();
	}
	
	else if (visaDropDown != null && visaDropDown.value != "/secure/Login+Working+Holiday.htm"){
			window.location.href = "http://www.immigration.govt.nz/secure/Login+Working+Holiday.htm";
			//visaDropDown.value = "/secure/Login+Working+Holiday.htm";
	}
	
	else if (username != null) {
		//console.log(username.value);
		
	    var password = document.getElementById("OnlineServicesLoginStealth_VisaLoginControl_passwordTextBox");
	    var login = document.getElementById("OnlineServicesLoginStealth_VisaLoginControl_loginImageButton");   
                            
		username.value = customerthis["username"];
//		chrome.runtime.sendMessage({greeting: "audioPlay"}, function(response) {
//		  console.log(response.farewell);
//		});
				
		password.value = customerthis["password"];
		
		login.click();
//		login.onclick = function(){
//				chrome.runtime.sendMessage({greeting: "audioPause"}, function(response) {
//					console.log(response.farewell);
//				});
				
				
//		};
	}

	else if (online != null) {
	   window.location.href = "http://www.immigration.govt.nz/workingholiday/";
	}


	else if (panelsWrapperInner != null && panelsWrapperInner.innerHTML.indexOf("Apply online under the Skilled Migrant Category or one of our working holiday schemes") != -1) {
	   window.location.href = "http://www.immigration.govt.nz/workingholiday/";
	}


	else if (dropDownList != null) {
	    window.location.href = "https://www.immigration.govt.nz/WorkingHoliday/Application/Create.aspx?CountryId=46";
//		window.location.href = "https://www.immigration.govt.nz/WorkingHoliday/Application/Create.aspx?CountryId=170";
	}

	else if (statuslabel != null && statuslabel.innerHTML.indexOf("Unfortunately") != -1) {
		
			chrome.storage.local.get("applyretryseconds", function(items) {
				setTimeout(function refreshpage(){
					window.location.href = "https://www.immigration.govt.nz/WorkingHoliday/Application/Create.aspx?CountryId=46";
//					window.location.href = "https://www.immigration.govt.nz/WorkingHoliday/Application/Create.aspx?CountryId=170";
	    		},1000 * items["applyretryseconds"]);
			console.log(items["applyretryseconds"]);
			});
	}
	
	else if (statuslabel != null && statuslabel.innerHTML.indexOf("no scheme") != -1) {
		
		chrome.storage.local.get("applyretryseconds", function(items) {
			setTimeout(function refreshpage(){
				window.location.href = "https://www.immigration.govt.nz/WorkingHoliday/Application/Create.aspx?CountryId=46";
//				window.location.href = "https://www.immigration.govt.nz/WorkingHoliday/Application/Create.aspx?CountryId=170";
    		},1000 * items["applyretryseconds"]);
		console.log(items["applyretryseconds"]);
		});
	}

	else if (ApplyNow != null) {
	    ApplyNow.click();
	}

	else if (familyName != null && pageheadersubmit == null) {

	    var givenName = document.getElementById("ctl00_ContentPlaceHolder1_personDetails_givenName1Textbox");
	    var gender = document.getElementById("ctl00_ContentPlaceHolder1_personDetails_genderDropDownList");
	    var dayofbith = document.getElementById("ctl00_ContentPlaceHolder1_personDetails_dateOfBithDatePicker_Day");
	    var monthofbith = document.getElementById("ctl00_ContentPlaceHolder1_personDetails_dateOfBithDatePicker_Month");
	    var yearofbith = document.getElementById("ctl00_ContentPlaceHolder1_personDetails_dateOfBithDatePicker_Year");
	    var countrybith = document.getElementById("ctl00_ContentPlaceHolder1_personDetails_CountryDropDownList");
	    var addresstext = document.getElementById("ctl00_ContentPlaceHolder1_addressContactDetails_address_address1TextBox");
	    var cityaddress = document.getElementById("ctl00_ContentPlaceHolder1_addressContactDetails_address_cityTextBox");
	    var countryaddress = document.getElementById("ctl00_ContentPlaceHolder1_addressContactDetails_address_countryDropDownList");
	    var emailaddress = document.getElementById("ctl00_ContentPlaceHolder1_addressContactDetails_contactDetails_emailAddressTextBox");
	    var reprenAgent = document.getElementById("ctl00_ContentPlaceHolder1_hasAgent_representedByAgentDropdownlist");
	    var communiMethod = document.getElementById("ctl00_ContentPlaceHolder1_communicationMethod_communicationMethodDropDownList");
	    var credicard = document.getElementById("ctl00_ContentPlaceHolder1_hasCreditCard_hasCreditCardDropDownlist");
	    var next = document.getElementById("ctl00_ContentPlaceHolder1_wizardPageFooter_wizardPageNavigator_nextImageButton");
	    
	    familyName.value =  customerthis["familyName"];
			givenName.value = customerthis["givenName"];
			gender.value = customerthis["gender"];
			dayofbith.value = customerthis["dayofbith"];
			monthofbith.value = customerthis["monthofbith"];
			yearofbith.value = customerthis["yearofbith"];
		    countrybith.value=46;
		    addresstext.value = customerthis["addresstext"];
		    cityaddress.value = customerthis["cityaddress"];
			countryaddress.value=46;
			emailaddress.value = customerthis["emailaddress"];
			reprenAgent.value="No";
			communiMethod.value=1;
			credicard.value="Yes";
			
			next.click();
	}

	else if (pageheadersubmit != null){
	    pageheadersubmit.click();
	}

	else if (passportnum != null) {
		
		    var confirmpassportnum = document.getElementById("ctl00_ContentPlaceHolder1_identification_confirmPassportNumberTextBox");
		    var expiryday = document.getElementById("ctl00_ContentPlaceHolder1_identification_passportExpiryDateDatePicker_Day");
		    var expirymonth = document.getElementById("ctl00_ContentPlaceHolder1_identification_passportExpiryDateDatePicker_Month");
		    var expiryyear = document.getElementById("ctl00_ContentPlaceHolder1_identification_passportExpiryDateDatePicker_Year");
		    var otherid = document.getElementById("ctl00_ContentPlaceHolder1_identification_otherIdentificationDropdownlist");
		    var otherissuday = document.getElementById("ctl00_ContentPlaceHolder1_identification_otherIssueDateDatePicker_Day");
		    var otherissumonth = document.getElementById("ctl00_ContentPlaceHolder1_identification_otherIssueDateDatePicker_Month");
		    var otherissuyear = document.getElementById("ctl00_ContentPlaceHolder1_identification_otherIssueDateDatePicker_Year");
		
			var next = document.getElementById("ctl00_ContentPlaceHolder1_wizardPageFooter_wizardPageNavigator_nextImageButton");
				
				
				passportnum.value = customerthis["passportnum"];
		    	confirmpassportnum.value = customerthis["passportnum"];
		        expiryday.value = customerthis["expiryday"];
		    	expirymonth.value = customerthis["expirymonth"];
		    	expiryyear.value = customerthis["expiryyear"];
				otherid.value=3;
				otherissuday.value = customerthis["otherissuday"];
		    	otherissumonth.value = customerthis["otherissumonth"];
		    	otherissuyear.value = customerthis["otherissuyear"];
		    	
				next.click();
							
	}

	else if (industry != null) {
		var next = document.getElementById("ctl00_ContentPlaceHolder1_wizardPageFooter_wizardPageNavigator_nextImageButton");
	    next.click();
	}

	else if (renaldialysis != null) {
	    var tuberculosis = document.getElementById("ctl00_ContentPlaceHolder1_medicalConditions_tuberculosisDropDownList");
	    var cancer = document.getElementById("ctl00_ContentPlaceHolder1_medicalConditions_cancerDropDownList");
	    var heartdisease = document.getElementById("ctl00_ContentPlaceHolder1_medicalConditions_heartDiseaseDropDownList");
	    var disability = document.getElementById("ctl00_ContentPlaceHolder1_medicalConditions_disabilityDropDownList");
	    var hospitalisation = document.getElementById("ctl00_ContentPlaceHolder1_medicalConditions_hospitalisationDropDownList");
	    var residenttailcare = document.getElementById("ctl00_ContentPlaceHolder1_medicalConditions_residentailCareDropDownList");
	    var pregnancy = document.getElementById("ctl00_ContentPlaceHolder1_medicalConditions_pregnancy_pregnancyStatusDropDownList");
	    var tbrisk = document.getElementById("ctl00_ContentPlaceHolder1_medicalConditions_tbRiskDropDownList");
	    var next = document.getElementById("ctl00_ContentPlaceHolder1_wizardPageFooter_wizardPageNavigator_nextImageButton");
	    renaldialysis.value = "No";
	    tuberculosis.value = "No";
	    cancer.value = "No";
	    heartdisease.value = "No";
	    disability.value = "No";
	    hospitalisation.value = "No";
	    residenttailcare.value = "No";
	    if (pregnancy != null){
	       pregnancy.value = "No";
	    }
	    tbrisk.value = "No";
	    next.click();
	} 

	else if (imprisonment != null) {
	    var imprison12month = document.getElementById("ctl00_ContentPlaceHolder1_character_imprisonment12MonthsDropDownList");
	    var removal = document.getElementById("ctl00_ContentPlaceHolder1_character_removalOrderDropDownList");
	    var deported = document.getElementById("ctl00_ContentPlaceHolder1_character_deportedDropDownList");
	    var charge = document.getElementById("ctl00_ContentPlaceHolder1_character_chargedDropDownList");
	    var convicted = document.getElementById("ctl00_ContentPlaceHolder1_character_convictedDropDownList");
	    var underinvestigation = document.getElementById("ctl00_ContentPlaceHolder1_character_underInvestigationDropDownList");
	    var excluded = document.getElementById("ctl00_ContentPlaceHolder1_character_excludedDropDownList");
	    var removed = document.getElementById("ctl00_ContentPlaceHolder1_character_removedDropDownList");
	    var next = document.getElementById("ctl00_ContentPlaceHolder1_wizardPageFooter_wizardPageNavigator_nextImageButton");
	    imprisonment.value = "No";
	    imprison12month.value = "No";
	    removal.value = "No";
	    deported.value = "No";
	    charge.value = "No";
	    convicted.value = "No";
	    underinvestigation.value = "No";
	    excluded.value = "No";
	    removed.value = "No";
	    next.click();
	}

	else if (previouswhv != null) {
	    var sufficientfunds = document.getElementById("ctl00_ContentPlaceHolder1_offshoreDetails_commonWHSQuestions_sufficientFundsHolidayDropDownList");
	    var travelday = document.getElementById("ctl00_ContentPlaceHolder1_offshoreDetails_intendedTravelDateDatePicker_Day");
	    var travelmonth = document.getElementById("ctl00_ContentPlaceHolder1_offshoreDetails_intendedTravelDateDatePicker_Month");
	    var travelyear = document.getElementById("ctl00_ContentPlaceHolder1_offshoreDetails_intendedTravelDateDatePicker_Year");
	    var beentonz = document.getElementById("ctl00_ContentPlaceHolder1_offshoreDetails_beenToNzDropDownList");
	    var ticket = document.getElementById("ctl00_ContentPlaceHolder1_offshoreDetails_requirementsQuestions_sufficientFundsOnwardTicketDropDownList");
	    var readrequirement = document.getElementById("ctl00_ContentPlaceHolder1_offshoreDetails_requirementsQuestions_readRequirementsDropDownList");
	    var next = document.getElementById("ctl00_ContentPlaceHolder1_wizardPageFooter_wizardPageNavigator_nextImageButton");

	    previouswhv.value = "No";
	    sufficientfunds.value = "Yes";
	    travelday.value = 7;
	    travelmonth.value = 5;
	    travelyear.value = 2015;
	    beentonz.value = "No";
	    ticket.value = "Yes";
	    readrequirement.value = "Yes";
	    
		next.click();
				
	}

	else if (submitApp != null) {
	    submitApp.click();
	}

	else if (payApp != null) {
	    payApp.click();
	}

	else if (checkbox1 != null){
	    var checkbox2=document.getElementById("ctl00_ContentPlaceHolder1_notesCheckBox");
	    var checkbox3=document.getElementById("ctl00_ContentPlaceHolder1_circumstancesCheckBox");
	    var checkbox4=document.getElementById("ctl00_ContentPlaceHolder1_warrantsCheckBox");
	    var checkbox5=document.getElementById("ctl00_ContentPlaceHolder1_informationCheckBox");
	    var checkbox6=document.getElementById("ctl00_ContentPlaceHolder1_healthCheckBox");
	    var checkbox7=document.getElementById("ctl00_ContentPlaceHolder1_adviceCheckBox");
	    var checkbox8=document.getElementById("ctl00_ContentPlaceHolder1_registrationCheckBox");
	    var checkbox9=document.getElementById("ctl00_ContentPlaceHolder1_entitlementCheckbox");
	    var checkbox10=document.getElementById("ctl00_ContentPlaceHolder1_permitExpiryCheckBox");
	    var checkbox11=document.getElementById("ctl00_ContentPlaceHolder1_medicalInsuranceCheckBox");
	    var checkbox12=document.getElementById("ctl00_ContentPlaceHolder1_adviserCheckBox");	    
	    
	    chrome.storage.local.get("submitretryseconds", function(items) {
				setTimeout(function refreshpage(){
	    		checkbox1.checked=true;
	            checkbox2.checked=true;
	            checkbox3.checked=true;
	            checkbox4.checked=true;
	            checkbox5.checked=true;
	            checkbox6.checked=true;
	            checkbox7.checked=true;
	            checkbox8.checked=true;
	            checkbox9.checked=true;
	            checkbox10.checked=true;
	            checkbox11.checked=true;
	            if (checkbox12 != null){
	            		checkbox12.checked=true;
	            }
	            
	            document.getElementById("ctl00_ContentPlaceHolder1_submitImageButton").click();
	  	  },1000 * items["submitretryseconds"]);
			console.log(items["submitretryseconds"]);
			});

	}

	else if (paynow != null){
				paynow.click();
	}

	else if (cancelImageButton != null && errorMessageLabel != null && errorMessageLabel.innerHTML.indexOf("Unfortunately") != -1){
		//cancelImageButton.click()
			chrome.storage.local.get("payretryseconds", function(items) {
				setTimeout(function refreshpage(){
					
	    		    window.location.href = window.location.href;
	    		    
	  	  },1000 * items["payretryseconds"]);
			console.log(items["payretryseconds"]);
			});
			
		
	}

	else if (payhref != null){
			
			window.location.href = payhref;
	   
	}


	else if (payname != null){
	  	
				payname.value =  customerthis["payname"];
				document.getElementById("ctl00_ContentPlaceHolder1_okImageButton").click();
    
	}

	else if (cardnumber != null){
	    
	    	var cardverificationcode = document.getElementById("cardverificationcode");
			var cardexpirymonth = document.getElementById("expirymonth");
			var cardexpiryyear = document.getElementById("expiryyear");
			var cardholder = document.getElementById("cardholder");
			var pay_now_last = document.getElementById("pay_now");
			
			cardnumber.value =  customerthis["cardnumber"];
			cardverificationcode.value =  customerthis["cardverificationcode"];		
			cardexpirymonth.value =  customerthis["cardexpirymonth"];
			cardexpiryyear.value =  customerthis["cardexpiryyear"];	
			cardholder.value = customerthis["payname"];	
			
			if ( customerid < customers.length){
				setCustomerID(1+Number(customerid));
			}
			
			pay_now_last.click();	
			
	}


	else if (pageContent != null){
	    
	    if(pageContent.innerHTML.indexOf("not available") != -1){
	        window.location.href = "http://www.immigration.govt.nz/workingholiday/";
	    }
	    
	    if(pageContent.innerHTML.indexOf("/migrant/stream/work/workingholiday/") != -1){
	        window.location.href = "http://www.immigration.govt.nz/workingholiday/";
	    }   
	}


	else if (homePageNotice != null){
	    
	    if(homePageNotice.innerHTML.indexOf("unavailable") != -1){
	        window.location.href = "http://www.immigration.govt.nz/workingholiday/";
	    }

	}


	else if (noSchemesAvailable != null){
	    
	    if(noSchemesAvailable.innerHTML.indexOf("cannot apply") != -1){
	        window.location.href = "http://www.immigration.govt.nz/workingholiday/";
	    }

	}


	else if(elements!=null && elements[0]!=null && elements[0].innerHTML.indexOf("502 Bad Gateway") != -1){
		
				chrome.runtime.sendMessage({greeting: "removeCookie"}, function(response) {
				  console.log(response.farewell);
				});
			
					setTimeout(function refreshpage(){
					
	    		    window.location.href = "https://www.immigration.govt.nz/secure/default.htm";
	    		    
	  	  },60000);


	}


	else if(centers!=null && centers[0]!=null && centers[0].innerHTML.indexOf("Invalid Request") != -1){
		
				chrome.runtime.sendMessage({greeting: "removeCookie"}, function(response) {
				  console.log(response.farewell);
				});
			
					setTimeout(function refreshpage(){
					
	    		    window.location.href = "https://www.immigration.govt.nz/secure/default.htm";
	    		    
	  	  },20000);
	  	  
		
	}


	else if(document.body.innerHTML == "" || document.body.innerHTML == null){
		
				chrome.runtime.sendMessage({greeting: "removeCookie"}, function(response) {
				  console.log(response.farewell);
				});
			
					setTimeout(function refreshpage(){
					
	    		    window.location.href = "https://www.immigration.govt.nz/secure/default.htm";
	    		    
	  	  },5000);
	  	  
		
	}

	else if(window.location.href == "http://www.immigration.govt.nz/custom503.html"){
		
				chrome.runtime.sendMessage({greeting: "removeCookie"}, function(response) {
				  console.log(response.farewell);
				});
			
			setTimeout(function refreshpage(){
					
	    		    window.location.href = "http://www.immigration.govt.nz/workingholiday/";
	    		    
	  	  },5000);
	  	  
		
	}

	else {
		
				chrome.runtime.sendMessage({greeting: "removeCookie"}, function(response) {
				  console.log(response.farewell);
				});
			
					setTimeout(function refreshpage(){
					
	    		    window.location.href = "https://www.immigration.govt.nz/secure/default.htm";
	    		    
	  	  },5000);
	  	  
		
	}
	
}

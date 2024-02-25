/*
-> A "page loader" for Unblocked54 GitHub
-> You can customize the config below to your liking
-> Developed By MousyMichael
*/

var pLoaderConfig = {
  //Visual cusomization
  applicationName:/*The name of the applicaiton this file is loading that is.*/"Unblocked 54 Github",
  loadMessage: "Loading page...",
	
  //Functionality Configuraton
  defaultLocation: "",
  settingsKey: "",
  authElem: "",
  authAttribute: "",
  authKey: "",
  loadingStatusLocation: "",
  errorDisplayColor: "",
  errorMessge: "",
  loadingPageMessage: ""
};

window.onload = () => {
 loadManager()
 console.log(pLoaderConfig.loadMessage + 'Parent Application: ' + pLoaderConfig.applicationName);
}

function loadPage(type) {
console.log(ploaderConfig.loadingPageMessage)
var inject = document.getElementById(pLoaderConfig.elemToinject)
} 

function loadingError(message) {
var diplayMessage = document.getElementById(pLoaderConfig.loadingStatusLocation);
displayMessage.innerHTML = message;
displayMessage.style.color = pLoaderConfig.errorDisplayColor; 

console.log(pLoaderConfig.errorMessage + "Error was: " + message)
} 

function loadManager() {
   var framedStatus = checkTop();
   var simpleSearchStatus = startSimpleSearch();
   var settingsStatus = loadSettings();

//If window isn't hidden
   if(framedStatus == normal) {
  //Determine 1 of 2 factors for loading
   if(settingsStatus == loaded) {
	//Determine if it should be
      if(settings.hideWindowOnLoad == true) {
        hideWindow();
      } else {
	//Determine 2 of 2 factors for loading
      	if(simpleSearchStatus == loaded) {
          loadPage("default");
        } else {
          loadingError("An error occured when loading the Simple Search library. Please try again!")
         } 
      } 
    } else {
      if(settingsStatus == mal | settingsStatus == null | settingsStatus < 0) {
        loadingError("This page appears to be being loaded by an unauthorized source!")
      } else {
        loadingError("Unable to determine what went wrong. Most likley a return error! Try again later.")
       }
     }  
   } else {
  //If window is hidden
   if(framedStatus == hidden) {
     //Authorize it 
     var auth = document.getElementById(pLoaderConfig.authElem).getAttribute(pLoaderConfig.authAttribute);
     if(auth == pLoaderConfig.authKey) {
	//Ensure other 2 loading factors
       if(simpleSearchStatus == loaded) {
         if(settingsStatus == loaded) {
           loadPage("default")
         } else {
          loadingError("An error occured when loading user customizable settings, please try again.")
         }
       } else {
         loadingError("An error occured when loading the Simple Search library. Please try again!")
       } 
     	  } else { 
           if(auth == null | auth == < 0) {
             loadingError("The authorization key passed from the original window is null or less than value of 0! Please try again.")
          } else {
            loadingError("An error occured in regards to the authorization key passed from the original window! Please try again.")
          }
     	} 
   	  } else {
        if(framedStatus == mal | framedStatus == < 0 | framedStatus == null) {
          loadingError("The frame status is null or less than the value of 0. Please try again!")
      } else { 
        loadingError("An error occured in regards to the frame status of this page. Please try again later.")
      } 
   	}
  } 
}

function checkTop() {
if(window.self !== window.top) {
	return mal
	} else {
   	if(window.href !== pLoaderConfig.defaultLocation) {
    	if(window.hostname == "about:blank") {
        	return hidden
        	} else {
              return mal
           } 
    	} else {
          return normal
       }
    }
} 

function loadSettings() {
	if(checkTop() == hidden) {
    	var window.settings = window.settingsHandOff;
      	console.log("Settings have been loaded from the handoff varible")
      	return loaded
   } else {
   	if(checkTop() == normal) {
      if(localStorage.getItem(pLoaderConfig.settingsKey) == null) {
        window.settings = {};
        return loaded
      } else {
      var window.settings = JSON.parse(localStorage.getItem(pLoaderConfig.settingsKey))
        return loaded
      }
      return loaded
    } else {
      return mal 
     } 
   }
}

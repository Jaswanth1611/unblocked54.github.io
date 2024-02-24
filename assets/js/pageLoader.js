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
 };

window.onload = () => {
 loadManager()
 console.log(pLoaderConfig.loadMessage + 'Parent Application: ' + pLoaderConfig.applicationName);
}

function loadManager() {
   var framedStatus = checkTop();
   var simpleSearchStatus = startSimpleSearch();
   var settingsStatus = loadSettings();
  	
   if(framedStatus == normal) {
   	if(settingsStatus == loaded) {
      if(settings.hideWindowOnLoad == true) {
        hideWindow();
      } else {
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
   if(framedStatus == hidden) {
     var auth = document.getElementById(pLoaderConfig.authElem).getAttribute(pLoaderConfig.authAttribute);
     if(auth == pLoaderConfig.authKey) {
       loadPage("default")
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
      var window.settings = JSON.parse(localStorage.getItems(pLoaderConfig.settingsKey));
      return loaded
    } else {
      return mal 
     } 
   }
}

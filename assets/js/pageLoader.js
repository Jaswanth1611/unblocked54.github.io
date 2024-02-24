/*
-> A "page loader" for Unblocked54 GitHub
-> You can customize the config below to your liking
-> Developed By MousyMichael
*/

var pLoaderConfig = {
  defaultLocation: "",
  settingsKey: "",
};

window.onload = loadManager();

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
          
        } else {
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
   if(framedStatus == hidden) 
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
    	var settings = window.settingsHandOff;
      	console.log("Settings have been loaded from the handoff varible")
      	return loaded
   } else {
   	if(checkTop() == normal) {
      var settings = JSON.parse(localStorage.getItems(pLoaderConfig.settingsKey));
      return loaded
    } else {
      return mal 
     } 
   }
}

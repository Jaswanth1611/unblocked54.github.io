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
  loadingPageMessage: "",
  divisionToInject: ""
};

window.onload = () => {
 loadPage()
 console.log(pLoaderConfig.loadMessage + 'Parent Application: ' + pLoaderConfig.applicationName);
}

function loadPage() {
var loadStatus = loadManager(); 
	if(loadStatus == load | loadStatus == mal | loadStatus == hide) {
		if(loadStatus == hide) {
			hideWindow()
		} else {
			if(loadStatus == load) {
				var appmarkup = window.appMarkup;
				var application = document.getElementById(pLoaderConfig.divisionToInject);
				application.innerHTML = appmarkup;
			} else {
				if(loadStatus == mal) {
					loadingError("An Error has occured while attempting to load Unblocked Games 54! Please try again.")
				} else {
					loadingError("An Error has occured while attempting to load Unblocked Games 54! Please try again.")
				} 
			} 
		} 
	} else {
		loadingError("An Error has occured while attempting to load Unblocked Games 54! Please try again.")
	} 
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
        return hide
      } else {
	//Determine 2 of 2 factors for loading
      	if(simpleSearchStatus == loaded) {
          return load
        } else {
	  return mal
         } 
      } 
    } else {
      if(settingsStatus == mal | settingsStatus == null | settingsStatus < 0) {
	return mal
      } else {
	return mal
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
           return load
         } else {
	   return mal
         }
       } else {
	  return mal
       } 
     	  } else { 
           if(auth == null | auth == < 0) {
	    return mal
          } else {
	    return mal
          }
     	} 
   	  } else {
        if(framedStatus == mal | framedStatus == < 0 | framedStatus == null) {
	 return mal
      } else { 
	return mal
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

var window.appMarkup = '<div class="sideBarHolder"><div id="sideBar" class="sideBar home"><a onclick=""><span style="display:unset!important" class="material-symbols-outlined">apps</span><span>&nbsp;Home</span></a><a><span style="display:unset!important" class="material-symbols-outlined">search</span><span>&nbsp;Search</span></a><a><span style="display:unset!important" class="material-symbols-outlined">settings</span><span>&nbsp;Settings</span></a><a><span style="display:unset!important" class="material-symbols-outlined">close</span><span>&nbsp;Close Tab</span></a></div></div><div class="contentContainer"><div id="pageContent" class="content home"><div class="contentHolder"><div class="content-news"><div class="carousel"></div></div><div class="content-games"><div class="game-row"><div class="category-name">Popular Games</div><div class="game-tile-holder"><div class="game-tile"><div class="game-image"><img src="https://cdn.akamai.steamstatic.com/steam/apps/2305790/capsule_616x353.jpg?t=1694685389"><div class="game-name">1v1.LOL</div></div></div><div class="game-tile"><div class="game-image"><img src="https://th.bing.com/th/id/OIP.9uEq0e1ME5XyhKPi-yZK-gHaEK?rs=1&pid=ImgDetMain"><div class="game-name">Shell Shockers</div></div></div><div class="game-tile"><div class="game-image"><img src="https://wallpaperaccess.com/full/2184838.jpg"><div class="game-name">Roblox</div></div></div><div class="game-tile"><div class="game-image"><img src="https://th.bing.com/th/id/OIP.b78tTmd8mOKKVr1CuLs9QAHaEK?rs=1&pid=ImgDetMain"><div class="game-name">BitLife</div></div></div><div class="game-tile"><div class="game-image"><img src="https://th.bing.com/th/id/OIP.HGRRtFdLoE2taBuSSluS7AAAAA?rs=1&pid=ImgDetMain"><div class="game-name">Tunnel Rush</div></div></div><div class="game-tile"><div class="game-image"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1454400/header.jpg?t=1630523196"><div class="game-name">Cookie Clicker</div></div></div></div></div><div class="content-footer"></div></div></div></div></div>';

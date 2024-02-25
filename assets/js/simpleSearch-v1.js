/* 
-> Welcome to SimpleSearch a basic JS library for allowing users to search through HTML elements
-> Customize the configuration below to your liking!
-> Made for SuperGames | By Michael B
*/

var config = {

//Onload message configuration
applicationName/*The application this file is being used in that is*/: "Unblocked54 GitHub",
loadMessage: "Loaded SimpleSearch",
  
//Functionality Configuration
attributeToSearch: "name",
attributeModificiation: "hidden",
elementToFilter: ".tile",
queryElement: "searchBar"
  
};
  
  //Onload
  window.onload = () => { 
  	console.log(config.loadMessage + " | Parent Application: " + config.applicationName)
  	document.getElementById(config.queryElement).addEventListener("focus", searchStarter()) 
  }
  
  //Functionality
  function startSimpleSearch() { 
  var searchBar = document.getElementById(config.queryElement);
  searchBar.addEventListener("input", () => {
  	 search()
 	 });
  return loaded
  }
  
  function search() { 
  var query = document.getElementById(config.queryElement).value;
  var elements = document.querySelectorAll(config.elementToFilter);
  
  elements.forEach((elem) => {
	if(elem.getAttribute(config.attributeToSearch).includes(query) == true) {
  	if(elem.classList.contains(config.attributeModificiation) == true) { 
    	elem.classList.remove(config.attributeModificiation);
    } else {
    //No action to be taken, just a "placeholder"
    }
  } else { 
  	elem.classList.add(config.attributeModificiation);
  }
  	});
  }

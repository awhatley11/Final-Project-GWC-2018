
//This hides everything on the page by clicking the Carpentry button
function clickToGo(elementShow) {
    document.getElementById("wholepage").style.display = "none";
    document.getElementById("Woodskill").style.display = "none";
    document.getElementById(elementShow).style.display = "inline";

}

//This makes the info show once everything else disappears
function hideugly(elementHide) {
  var woods= document.getElementById(elementHide);
  woods.style.display= "none";
}

hideugly("Woodskill");
hideugly("Weldskill");
hideugly("Elecskill");
hideugly("Cosmoskill");
hideugly("Vocoskill");
hideugly("GEDskill");
hideugly("EJskill");
hideugly("B&Fskill");

function newTab() {
  for (var i = 0; i < document.getElementByTagName("A").length; i++) {
    alert(i)
    var link = document.getElementByTagName("A")[i]
    link.target = "_blank";
  }
}

newTab();

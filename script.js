menu.onclick = function menuClickHandler(){
  var topMenu = document.getElementById('headerTopNav');

  if (topMenu.className === "topNav") {
    topMenu.className += " responsive";
  } else {
    topMenu.className = "topNav";
  }
}
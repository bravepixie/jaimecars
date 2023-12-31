/* Display search textbox on click code generated by Replit AI    */
/* Text used: Write javascript code to display search textbox when search icon is clicked 
*/
const searchIcon = document.getElementById("search-icon");
const searchBox = document.querySelector(".search-box");
searchIcon.onclick = () => {
  searchBox.classList.toggle("active");
};

/* ToggleText code created by Replit AI   */
/* Text used : Write a html code to display more text/less text on a toggle button click */
function toggleText() {
  var text = document.getElementById("toggleText");
  document.getElementById("togglebtn");
  if (text.style.display === "none") {
    text.style.display = "block";
    document.getElementById("togglebtn").innerHTML = "Display Less...";
  } else {
    text.style.display = "none";
    document.getElementById("togglebtn").innerHTML = "Discover More ...";
  }
}

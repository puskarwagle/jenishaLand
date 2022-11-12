const landButton = document.getElementById("landButton");
const constructButton = document.getElementById("construcButton");
const land = document.getElementById("Land");
const construction = document.getElementById("Construction");

constructButton.addEventListener("click", Construct);
landButton.addEventListener("click", Land);

function Construct() {
	console.log(constructButton.innerHTML);
	construction.style.display = "block";
	land.style.display = "none";
}
function Land() {
	construction.style.display = "none";
	land.style.display = "block";
	console.log(landButton.innerHTML);
}





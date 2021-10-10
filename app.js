// Query Selectors
const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const dropColumn1 = document.getElementById("dropColumn1");
const dropColumn2 = document.getElementById("dropColumn2");
const dropColumn3 = document.getElementById("dropColumn3");

// Event Listeners
card1.addEventListener("dragstart", dragStart);
card2.addEventListener("dragstart", dragStart);
card3.addEventListener("dragstart", dragStart);

// Functions
function dragStart(elem){
    elem.dataTransfer.setData("text/plain", elem.target.id);
    elem.dataTransfer.dropEffect = "move";
}
function dragOver(elem){
    elem.preventDefault();
    elem.dataTransfer.dropEffect = "move";
}
function drop(elem){
    elem.preventDefault();
    elem.target.appendChild(document.getElementById(elem.dataTransfer.getData("text/plain")));
}
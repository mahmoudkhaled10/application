let myList = document.querySelectorAll(".navigtion li");
function activeLink() {
  myList.forEach((item) => item.classList.remove("hovered"));
  this.classList.add("hovered");
}
myList.forEach((item) => item.addEventListener("mouseover", activeLink));

//menu tobble
let toggle = document.getElementById("ttext");

toggle.addEventListener("click", function (el) {
  // el.preventDefault();
  let navigtion = document.getElementById("navigtion12");
  navigtion.classList.toggle("active");

  let main = document.getElementById("mymain");
  main.classList.toggle("mynada");
});

// // let result;
// // const list = document.querySelector("ul");
// // const li = document.querySelector("li");
// // // result = list.children[0].children[0].innerHTML;
// // // result = list.childElementCount;
// // // result = li.parentElement.parentElement.parentElement.parentElement;

// // console.log(result);

// const heading = document.createElement("h2");
// heading.className = "headingClass2-1 headingClass2-1";
// heading.id = "headingId2";
// heading.setAttribute("mahdi", "Moradi");
// // heading.innerHTML = `
// // <ul>
// //     <li>Mosavi</li>
// //     <li>Barabar</li>
// // </ul> <p>JS is very good</p>`;
// heading.appendChild(document.createTextNode("Hello world"));
// const ul = document.createElement("ul");
// const li1 = document.createElement("li");
// const li2 = document.createElement("li");
// li1.appendChild(document.createTextNode("Ben"));
// li2.appendChild(document.createTextNode("Khezli"));
// ul.appendChild(li1);
// ul.appendChild(li2);

// const newHeading = document.createElement("h1");
// newHeading.className = "title";
// newHeading.innerHTML = "لیست کتاب ها ";

// const oldHeading = document.querySelectorAll(".title")[1];
// const parentHeading = document.querySelector("#book-list");
// parentHeading.replaceChild(newHeading, oldHeading);

// const li = document.querySelectorAll("li")[2];
// const ul2 = document.querySelector("ul");
// ul2.children[2].remove();
// console.log(li);
// // li.remove();

// document.querySelector("button").addEventListener("click", function (event) {
//   console.log("hello world");
//   event.preventDefault();
//   let result;
//   result = event.target;
//   result = event.type;
//   console.log(result);
// });

// document.querySelector(".button").addEventListener("mousedown", function (e) {
//   console.log("mdouwn");
//   e.preventDefault();
// });
// document.querySelector(".button").addEventListener("mouseup", function (e) {
//   e.preventDefault();
//   console.log("mup");
// });

// document.querySelector(".button").addEventListener("mouseenter", function (e) {
//   e.preventDefault();
//   console.log("mouse in");
// });

// document.querySelector(".button").addEventListener("mouseout", function (e) {
//   e.preventDefault();
//   console.log("mouse out");
// });

// document.querySelector("body").addEventListener("mousemove", function (e) {
//   e.preventDefault();
//   console.log("mouse moving");
// });
// const heading = document.querySelectorAll(".title")[1];
// // console.log(heading);

// document.querySelector(".button").addEventListener("mousemove", function (e) {
//   e.preventDefault();
//   console.log(`mouseX: ${e.offsetX}, mouseY: ${e.offsetY}`);
//   heading.innerHTML = `mouseX: ${e.offsetX}, mouseY: ${e.offsetY}`;
// });

const inputText = document.querySelector("#add-book input");
inputText.value = "fd";
const link = document.querySelector(".button   ");
link.addEventListener("click", function () {
  console.log(inputText.value);
  inputText.value = "";
});
// inputText.addEventListener("focus", function (e) {
//   console.log("selected");
// });

// inputText.addEventListener("blur", function (e) {
//   console.log("unselected");
// });

const checkbox = document.querySelector("#hide input");
const heading = document.querySelectorAll(".title")[1];
const ul = document.querySelector("ul");
checkbox.addEventListener("click", function (e) {
  if (checkbox.checked) {
    heading.style.display = "none";
    ul.style.display = "none";
  } else {
    console.log("unchecked");
    heading.style.display = "block";
    ul.style.display = "block";
  }
});

localStorage.setItem("mahdi1", "kazemi1");

localStorage.setItem("mahdi2", "kazemi2");

localStorage.setItem("mahdi3", "kazemi3");
const name = localStorage.getItem("mahdi");
console.log(name);
localStorage.removeItem("mahdi1");
localStorage.clear();
const arr = ["ben1", "ben2"];
const obj = { name: "ben", age: 30 };
localStorage.setItem("array", arr);
localStorage.setItem("object", JSON.stringify(obj));
const myArray = localStorage.getItem("array").split(",");
// const myObject = localStorage.getItem("object");
const myObject = JSON.parse(localStorage.getItem("object"));
console.log(myArray);
console.log(myObject);

// console.log(checkbox);
// checkbox.checked = false;

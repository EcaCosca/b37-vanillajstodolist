import "./styles.css";

const form = document.getElementById("form");
const input = document.getElementById("input");
const add = document.getElementById("add");
const orderedList = document.getElementById("orderedList");

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;

let newTodo = "";

add.addEventListener("change", (e) => {
  newTodo = e.target.value;
});

const handleSubmit = (e) => {
  e.preventDefault();

  const listItem = document.createElement("li");
  listItem.innerText = newTodo;
  orderedList.appendChild(listItem);

  add.value = "";
};

form.addEventListener("submit", handleSubmit);

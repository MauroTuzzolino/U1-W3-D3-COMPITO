const form = document.querySelector("form");

form.onsubmit = function (e) {
  e.preventDefault();
  const messageInput = document.getElementById("mainInput");

  const inputData = {
    input: messageInput.value,
  };
  console.log("SUBMIT", inputData);

  const toDoArea = document.getElementById("toDoArea");
  const listPoints = document.createElement("li");
  listPoints.classList.add("listPoint");
  listPoints.innerHTML = `<p>${messageInput.value}</p>`;

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("deleteButton");
  deleteButton.innerText = "ELIMINA";

  listPoints.onclick = function (e) {
    e.currentTarget.style.textDecoration = "line-through";
  };

  deleteButton.onclick = function (e) {
    listPoints.remove();
    e.currentTarget.remove();
  };

  toDoArea.appendChild(listPoints);
  toDoArea.appendChild(deleteButton);
};

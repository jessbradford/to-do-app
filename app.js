function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();

    let title = newToDoText.value;

    let newLi = document.createElement('li');

    newLi.className = "li";

    // create a new input
    let checkbox = document.createElement('input');

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    //create a new button
    let deleteButton = document.createElement('button');

    deleteButton.innerText= "DELETE";

    deleteButton.className = "mdl-button mdl-js-button mdl-button--accent delete";

     newLi.textContent = title;

     // attach the checkbox to the li
     newLi.insertBefore(checkbox, newLi.childNodes[0]);

     //attach the button to the li
     newLi.appendChild(deleteButton);

     // attach the li to the ul
     toDoList.appendChild(newLi);

     deleteButton.addEventListener('click', () => {
       newLi.parentNode.removeChild(newLi);
     })

     //empty the input
     newToDoText.value = '';
  });
};

window.onload = function() {
   onReady();
 };

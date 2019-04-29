function onReady() {
  const getResults = localStorage.getItem('toDos');
  const parseResults = JSON.parse(getResults);
  let toDos = parseResults ? parseResults : [];
  const addToDoForm = document.getElementById('addToDoForm');
  let id = parseResults && parseResults.length ? parseResults[parseResults.length - 1].id : 0;
  renderTheUI();

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }
    if(newToDoText) { id++ }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id
    });
    newToDoText.value = '';

    renderTheUI();
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  function renderTheUI() {
    localStorage.setItem('toDos', JSON.stringify(toDos));
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      const deleteButton = document.createElement('button');
      checkbox.type = "checkbox";
      checkbox.checked = toDo.complete;

      deleteButton.innerText= "DELETE";

      deleteButton.className = "mdl-button mdl-js-button mdl-button--accent";

      newLi.className = "li";

      newLi.textContent = toDo.title;
      toDoList.appendChild(newLi);
      newLi.insertBefore(checkbox, newLi.childNodes[0]);
      newLi.appendChild(deleteButton);

      deleteButton.addEventListener('click', () => {
        let a = toDos.filter((t) => {
          return t.id !== toDo.id;
        });
        toDos = a;
        renderTheUI()
      })

      checkbox.addEventListener('click', () => {
        toDo.complete = !toDo.complete;
        renderTheUI();
      })

    });
  }
};

window.onload = function() {
   onReady();
 };

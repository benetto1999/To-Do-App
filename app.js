const btns = document.querySelectorAll('#todo-list .delete');
const list = document.querySelector('#todo-list ul');
const forms = document.forms;

const addForm = document.forms['add-todo'];

//add todo
addForm.addEventListener('submit', function(e){
  e.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;


  //create elemnts
  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const deleteBtn = document.createElement('span');

  //add textContent
  deleteBtn.textContent = 'delete';
  bookName.textContent = value;

  //add classes
  bookName.classList.add('todo');
  deleteBtn.classList.add('delete')

  //append to document
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);

})

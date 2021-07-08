let buttonEnter = document.getElementById('enter');
let userInput = document.getElementById('userInput');
let ul = document.querySelector('ul');

function inputLength() {
    return userInput.value.length > 0;
}

function createTodo() {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(userInput.value));
    ul.appendChild(li);
    userInput.value = '';

    let deleteButton = document.createElement('button');
    deleteButton.appendChild(document.createTextNode('x'));
    li.appendChild(deleteButton);
    deleteButton.addEventListener('click', deleteTodoItem);
    
    function deleteTodoItem() {
        li.classList.add('delete');
    }

    li.addEventListener('click',ChangeColorOfLi)

    function ChangeColorOfLi() {
        li.classList.toggle('done');    
    }  
}

function changeListAfterKeypress(event){
    if (inputLength() && event.which == 13) {
        createTodo();
    }
}

function changeListAfterButtonpress(event){
    if(inputLength()) {
        createTodo();   
    }
}


userInput.addEventListener('keypress', changeListAfterKeypress);
buttonEnter.addEventListener('click', changeListAfterButtonpress);
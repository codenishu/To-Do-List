let toDoList = [];
displayItems();


function addToDo(){
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    toDoList.push({item: todoItem,dueDate: todoDate});
    inputElement.value = '';
    dateElement.value= '';

    displayItems();
}

function displayItems() {
    let containerElement = document.querySelector('.todo-container');

    let newHTML = '';

    for(let i = 0; i<toDoList.length; i++){
        let {item, dueDate} = toDoList[i];
        newHTML += `
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class = 'btn-delete' onclick="toDoList.splice(${i}, 1); displayItems();">Delete</button>`
    };
    containerElement.innerHTML = newHTML;

     
}
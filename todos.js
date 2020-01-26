var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var todos = JSON.parse(localStorage.getItem('list_todos')) || ['Comer','Estudar Javascript','Lavar Banheiro'];

function renderTodos()
{
    listElement.innerHTML = '';
    for (todo of todos)
    {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);

        linkElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'removerTodo('+ pos +')');


        
        todoElement.appendChild(todoText);
        
        listElement.appendChild(todoElement);
        todoElement.appendChild(linkElement);
    }
}

renderTodos();

function adicionarTodo()
{
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveToStorage();
    
}

buttonElement.onclick = adicionarTodo;

function removerTodo(pos)
{
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage()
{
    localStorage.setItem('list_todos', JSON.stringify(todos));

}


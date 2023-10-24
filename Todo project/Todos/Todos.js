const users = JSON.parse(localStorage.getItem('users'))
const currentUser = localStorage.getItem('currentUser')

let todos = users.find(user => user.name === currentUser).todos

let edit = false

function updateSite() {
    $('.todos').html('')

    for (let todo of todos) {
        $('.todos').html($('.todos').html() + `<div class="todo">
    <div class="todo-content">
        <h2>${todo.title}</h2>
        <p>
           ${todo.text}
        </p>
    </div>
    <div class="options">
        <button id="${todo.id}D" class="delete btn btn-danger">Delete</button>
        <button id="${todo.id}E" data-bs-toggle="modal" data-bs-target="#exampleModal" class="edit btn btn-success">Edit</button>
    </div>
</div>`)
    }
};

updateSite()

$('#addTodo').click(function () {
    $('.modal').addClass('active')
})

$('#close').click(function () {
    $('.modal').removeClass('active')
})



$('#save-todo').click(function () {
   if(!edit){
    let addTodo = {
        id: Date.now(),
        title: $('input').val(),
        text: $('textarea').val()
    }

    $('input').val('')
    $('textarea').val('')

    todos.push(addTodo)

    users.find(user => user.name === currentUser).todos = todos

    localStorage.setItem('users', JSON.stringify(users))
    updateSite()
    $('.modal').removeClass('active')
} else {
    edit = false
const index = todos.findIndex(todo => todo.id + 'E' === id)
todos[index] = {
id: todos[index].id,
title: $('input').val(),
text: $('textarea').val()
}


users.find(user => user.name === currentUser).todos = todos

        localStorage.setItem('users', JSON.stringify(users))
        updateSite()
}
})


let id

$('.todos').click(function (e) {
    if (e.target.innerHTML === 'Delete') {
        id = e.target.id
        todos = todos.filter(todo => todo.id + 'D' !== id)

        console.log(todos)

        users.find(user => user.name === currentUser).todos = todos

        localStorage.setItem('users', JSON.stringify(users))
        updateSite()
    } else if(e.target.innerHTML  === 'Edit'){
        edit = true
        id = e.target.id
        const currentTodo = todos.find(todo => todo.id + 'E' === id)

        $('input').val(currentTodo.title)
    $('textarea').val(currentTodo.text)

    }
})







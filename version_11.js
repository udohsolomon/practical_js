//Practical JavaScript - Version 11 Destroy all for loops

// V11 Requirements:
/*
 * todoList.toggleAll should use forEach
 * view.displayTodos should use forEach
 */

var todoList = {
    todos: [],
    addTodos: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos() 
        //todoList.addTodos('This is a todo')
    },
    changeTodos: function(position, todoText) {
        this.todos[position].todoText = todoText
    },

    toggleCompleted: function(position) {
     var todo = this.todos[position]
     todo.completed = !todo.completed
     },
 
    toggleAll: function() {
        var totalTodos = this.todos.length
        var completedTodos = 0
        // get number of completed todos
        
        this.todos.forEach(function(todo) {
            if (todo.completed === true) {
                completedTodos++
            }
        })
        // // case 1: If everything is true, make everything false 
        // if (completedTodos === totalTodos) {
        //     this.todos.forEach(function(todo) {
        //         todo.completed = false
        //     })
        // }
        // // case 2: Otherwise make everything true
        // else {
        //     this.todos.forEach(function(todo) {
        //         todo.completed = true
        //     })
        // }
        this.todos.forEach(function(todo) {
            //case 1: If everything is true, make everything false
            if (completedTodos === totalTodos) {
                todo.completed = false
            }
            else {
                todo.completed = true
            }
        })
    }, 
    deleteTodos: function(position) {
        this.todos.splice(position, 1)
    }
} 

var handlers = {
    addTodos: function() {
        var addTodosTextInput = document.getElementById('addTodosTextInput')
        todoList.addTodos(addTodosTextInput.value)
        addTodosTextInput.value = ''
        view.displayTodos()
    },
    changeTodos: function() {
        var changeTodosTextInput = document.getElementById('changeTodosTextInput')
        var changeTodosPositionInput = document.getElementById('changeTodosPositionInput')
        todoList.changeTodos(changeTodosPositionInput.valueAsNumber, changeTodosTextInput.value)
        changeTodosTextInput.value = ''
        changeTodosPositionInput.value = ''
        view.displayTodos()
    },
    deleteTodos: function(position) {
        todoList.deleteTodos(position)
        view.displayTodos()
    },
    toggleCompleted: function() {
        var toggleCompletedPosition = document.getElementById('toggleCompletedPosition')
        todoList.toggleCompleted(toggleCompletedPosition)
        toggleCompletedPosition.value = ''
        view.displayTodos()
    },
    toggleAllTodosButton: function() {
        todoList.toggleAll()
        view.displayTodos()
    }
}

var view = {
    displayTodos: function() {
        var todosUl = document.querySelector('ul')
        todosUl.innerHTML = ''
        for (var i = 0; i < todoList.length; i++) {
            var todoLi = document.createElement('li')

            var todoTextWithCompletion = ''
            if (todo.completed === true) {
                todoTextWithCompletion = '[✔]' + todo.todoText
            }
            else {
                todoTextWithCompletion = '[ ]' + todo.todoText
            }

            todoLi.id = i
            todoLi.textContent = todoTextWithCompletion
            todoLi.appendChild(this.addTodos())
            todosUl.appendChild('todoLi')
        }
    },
    createDeleteButton: function() {
        var deleteButton = document.createElement('button')
        deleteButton.textContent = 'Delete'
        deleteButton.className = 'deleteButton'
        return deleteButton
    },
    setUpEventListeners: function() {
        var todosUl = document.querySelector('ul')
        todosUl.addEventListener('click', function(event) {
            console.log(event.target.parentNode.id)

            //get the element that was clicked on
            var elementClicked = event.target

            // check if element clicked is a delete button
            if (elementClicked.className === 'deleteButton') {
                // run handlers.deleteTodo(position)
                handlers.deleteTodos(parseInt(elementClicked.parentNode.id))
            }
        })
    }
}
view.setUpEventListeners()
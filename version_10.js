//Practical JavaScript - Version 10 

// V10 Requirements:
/*
 * There should be a way to create delete buttons
 * There should be a delete button for each todo
 * Each li element should have an id that has the todo position
 * Delete buttons should have access to the todo it
 * Clicking delete should update todoList.todos and the DOM
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
        for (var i = 0; i < this.todos.length; i++) {
            if (this.todos[i].completed === true) {
                completedTodos++
            }
        }
        // case 1: If everything is true, make everything false 
        if (completedTodos === totalTodos) {
            for (var i = 0; i < this.todos.length; i++) {
                this.todos[i].completed = false
            }
        }
        // case 2: Otherwise make everything true
        else {
            for (var i = 0; i < this.todos.length; i++) {
                this.todos[i].completed = true

            }
        }
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
    deleteTodos: function() {
        var deleteTodosPositionInput = document.getElementById('deleteTodosPositionInput')
        todoList.deleteTodos(deleteTodosPositionInput.value)
        deleteTodosPositionInput.value = ''
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

            todoLi.textContent = todoList.todos[i].todoText
            todosUl.appendChild('todoLi')
        }
    }
}
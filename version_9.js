//Practical JavaScript - Version 9 

// V8 Requirements:
/*
 * There should be an li element for every todo
 * Each li element should contain .todoText
 * Each li element should show .completed
 */

var todoList = {
    todos: [],
    displayTodos: function() {
        if (this.todos.length === 0) {
            console.log('Your todo list is empty!')
        }
        else {
            console.log('My Todos: ') //this.todos is not super useful, so we can do w/o it.
            for ( var i = 0; i < this.todos.length; i++) {
                if (this.todos[i].completed === true) {
                    console.log('[✔]', this.todos[i].todoText)
                }
                else {
                    console.log('[ ]', this.todos[i].todoText)
                }
            }
        }

    },
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
        this.displayTodos()
    },

    toggleCompleted: function(position) {
     var todo = this.todos[position]
     todo.completed = !todo.completed
     this.displayTodos()
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
        this.displayTodos()   
    }, 
    deleteTodos: function(position) {
        this.todos.splice(position, 1)
        this.displayTodos()
    }
} 

var handlers = {
    displayTodosButton: function() {
        todoList.displayTodos()
    },
    addTodos: function() {
        var addTodosTextInput = document.getElementById('addTodosTextInput')
        todoList.addTodos(addTodosTextInput.value)
        addTodosTextInput.value = ''
    },
    changeTodos: function() {
        var changeTodosTextInput = document.getElementById('changeTodosTextInput')
        var changeTodosPositionInput = document.getElementById('changeTodosPositionInput')
        todoList.changeTodos(changeTodosPositionInput.valueAsNumber, changeTodosTextInput.value)
        changeTodosTextInput.value = ''
        changeTodosPositionInput.value = ''
    },
    deleteTodos: function() {
        var deleteTodosPositionInput = document.getElementById('deleteTodosPositionInput')
        todoList.deleteTodos(deleteTodosPositionInput.value)
        deleteTodosPositionInput.value = ''
    },
    toggleCompleted: function() {
        var toggleCompletedPosition = document.getElementById('toggleCompletedPosition')
        todoList.toggleCompleted(toggleCompletedPosition)
        toggleCompletedPosition.value = ''
    },
    toggleAllTodosButton: function() {
        todoList.toggleAll()
    }
}

var view = {
    displayTodos: function() {
        for (var i = 0; i < todoList.length; i++) {
            var todosUl = document.querySelector('ul')
            var todoLi = document.createElement('li')
            todosUl.appendChild('todoLi')
        }
    }
}
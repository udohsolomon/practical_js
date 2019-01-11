//Practical JavaScript - Version 5

// V5 Requirements:
/*
 *.displayTodos should show .todoText
 *.displayTodos should tell you if .todos is empty
 *.displayTodos should show .completed
 */

var todoList = {
    todos: [],
    displayTodos: function() {
        console.log('My Todos: ') //this.todos not super useful, so we can do wo it.
        for ( var i = 0; i < this.todos.length; i++) {
            console.log(this.todos[i].todoText)
        }
    },
    addTodos: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        })
        this.displayTodos() 
        //todoList.addTodos('This is a todo')
    },
    changeTodos: function(position, todoText) {
        this.todos[position].todoText = todoText
        this.displayTodos()
    },
    toggleTodos: function(position) {
        var todo = this.todos[position]
        todo.completed = !todo.completed
        this.displayTodos()
    }
}
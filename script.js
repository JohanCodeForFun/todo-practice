// constructors/classes
function Todo(title, description, dueDate, priority) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.title = title
  this.description = description
  this.dueDate = dueDate
  this.priority = priority

  this.printTitle = function() {
    console.log(this.title + ":", this.description)
  };
}

const newTodo = new Todo('new todo', 'det här är en todo anteckning', '2025-07-30', 'genast')
console.log(newTodo.printTitle())

// optional: 
//  notes, 
//  checklist).
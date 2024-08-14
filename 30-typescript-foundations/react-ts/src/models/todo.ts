// Describe how a 'to-do' looks like by creating its type
class Todo {
  // Definition of types
  id: string;
  text: string;

  // Initialization and assignation in the constructor
  constructor(todoText: string) {
    this.text = todoText;
    this.id = new Date().toISOString();
  }
}

export default Todo;

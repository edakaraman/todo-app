import React,{ useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import { FcTodoList } from "react-icons/fc";
import { FormTodo } from "./components/FormTodo";
import { Todo } from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "This is a sample todo",
      isDone: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };
  const removeTodo = (index) => {
    const newTodos = [...todos];   
    //scrolls the bottom item according to the removed item.(1 of them)
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center mb-4">
          <FcTodoList /> TODO LIST <FcTodoList />
        </h1>
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <Todo
                  key={index}
                  index={index}
                  markTodo={markTodo}
                  removeTodo={removeTodo}
                  todo={todo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

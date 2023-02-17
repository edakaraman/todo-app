import React from "react";
import { Button } from "react-bootstrap";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";


export const Todo = ({ todo, index, markTodo, removeTodo }) => {
  return (
    <div className="todo">
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
        {todo.text}
      </span>
      <div>
        <Button variant="outline-success" onClick={() => markTodo(index)}>
          <TiTick size={25}/>
        </Button>
        <Button variant="outline-danger" onClick={() => removeTodo(index)}>
          <ImCross size={23}/>
        </Button>
      </div>
    </div>
  );
};

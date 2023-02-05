import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Form, FormLabel } from 'react-bootstrap';
import { useState } from 'react';
import {TiTick} from 'react-icons/ti';
import {ImCross} from 'react-icons/im';
import {FcTodoList} from 'react-icons/fc';


function Todo ({todo,index,markTodo,removeTodo}){
  return(
    <div className='todo'>
      <span style = {{textDecoration: todo.isDone ? 'line-through' :""}}> {todo.text} </span>
      <div>
        <Button variant='outline-success' onClick ={() => markTodo(index)} > <TiTick size={25}/> </Button>
        <Button variant='outline-danger' onClick ={() => removeTodo(index)} > <ImCross size={23}/> </Button>
      </div>
    </div>
  )
}

function FormTodo({addTodo}){
  const [value,setValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!value) return;
    else addTodo(value);
    setValue('');
  }

  return (
    <Form onSubmit={handleSubmit}> 
    <Form.Group>
      <FormLabel>  Add Todo  </FormLabel>
      <Form.Control type='text' className="input" value={value} onChange={(e) => setValue(e.target.value)} placeholder='Add New Todo' />     
    </Form.Group>
    <Button variant='primary mb-3 mt-3' size="lg" type='submit'> Add </Button>
    </Form>
  )
}

function App() {
   const[todos,setTodos] = useState([
    {
       text : "This is a sample todo",
       isDone : false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos,{text}];
    setTodos(newTodos);
  };

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };
  const removeTodo = index =>{
    const newTodos = [...todos];
    //kaldırılan öğeye göre alttaki öğeyi kaydırır.(1 tane)
    newTodos.splice(index,1);
    setTodos(newTodos);
  };
  
  return (
    <div className="App">
      <div className='container'> 
        <h1 className='text-center mb-4'> <FcTodoList/> TODO LIST  <FcTodoList/> </h1>
          <FormTodo addTodo={addTodo}/>
          <div>
            {
               todos.map((todo,index) =>(
                 <Card>
                  <Card.Body>
                    <Todo key={index} index={index} markTodo={markTodo} removeTodo={removeTodo} todo={todo}/>
                  </Card.Body>
                 </Card>
               ))
            }
          </div>
      </div>
    </div>
  );
}

export default App;

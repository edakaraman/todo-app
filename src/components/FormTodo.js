import React from "react";
import { Button, Form, FormLabel } from "react-bootstrap";
import { useState } from "react";

export const FormTodo = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    else addTodo(value);
    setValue("");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <FormLabel> Add Todo </FormLabel>
        <Form.Control
          type="text"
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add New Todo"
        />
      </Form.Group>
      <Button variant="primary mb-3 mt-3" size="lg" type="submit">
        Add
      </Button>
    </Form>
  );
};

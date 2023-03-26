import React, { MutableRefObject, useState, useRef } from 'react';
import { ListGroup } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

import { TodoType } from './components/TodoItem';
import TodoItem from './components/TodoItem';

// Layout
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function App() {

  const [fieldValue, setFieldValue] = useState("");
  const [todos, setTodos] = useState(new Array<TodoType>());

  function handleAddTodo() {
    try {
      if (fieldValue !== "") {
        let newUUID = uuidv4();
        let newTodo = { id: newUUID, name: fieldValue, remove: removeTodo };
        setTodos(prevState => [...prevState, newTodo]);
        setFieldValue("");
      }
    }
    catch ({ message }) {
      console.log(message)
    }
  }

  function removeTodo(id: string) {
    setTodos(prevState => prevState.filter(item => item.id !== id));
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFieldValue(e.target.value);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") handleAddTodo(); // Way more comfortable to add items with enter
  }

  return (
    <div className="App">
      <Container>

        <Row>
          <Col>
            <h1>Todo List</h1>
          </Col>
        </Row>

        <Row>
          <Col>
            <ListGroup>
              {todos.map(todo =>
                <TodoItem name={todo.name}
                  key={todo.id}
                  id={todo.id}
                  remove={removeTodo} />
              )}
            </ListGroup>
            <input type="text"
              value={fieldValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
            <Button
              onClick={handleAddTodo}
              className="AddTodoButton"
            >Add Todo</Button>
          </Col>
        </Row>

      </Container>
    </div>
  );
}



export default App;

import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

export type TodoType = {
    id: string,
    name: string,
    remove: (id: string) => void
}
export const TodoItem = (todo: TodoType) => {

    function handleRemove() {
        todo.remove(todo.id)
    }

    return <span>
        <ListGroup.Item>
            {todo.name}
            <Button
                variant="danger"
                size="sm"
                onClick={handleRemove}
                className="DeleteItemButton"
                >
                Delete
            </Button>
        </ListGroup.Item>
    </span>
}

export default TodoItem;
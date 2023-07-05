import AddToDo from "./AddToDo";
import { useState } from "react";
import ToDoList from "./ToDoList";

export default function ToDo(){
    const [todoItems, setTodoItems] = useState();


    return(
        <main>
            <h1>Checkov Todo List</h1>
            <AddToDo  setTodoItems={setTodoItems}  />
            <ToDoList todoItems={todoItems} setTodoItems={setTodoItems} />
        </main>
    )
}
import AddToDo from "./AddToDo";
import { useState } from "react";
import ToDoList from "./ToDoList";

export default function ToDo(){
    const [todoItems, setTodoItems] = useState();


    return(
        <main className="bg-violet-900 min-h-screen text-orange-50 px-4 py-8 text-center">
            <h1 className="text-3xl font-semibold mb-4">Checkov Todo List</h1>
            <AddToDo  setTodoItems={setTodoItems}  />
            <ToDoList todoItems={todoItems} setTodoItems={setTodoItems} />
        </main>
    )
}
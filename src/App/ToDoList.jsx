import { useEffect, useContext } from "react";
import { AuthContext } from "../App";
import ToDoListItem from "./ToDoListItem";

export default function ToDoList({todoItems, setTodoItems}){
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if(user){
        fetch(`https://checkov-api-sh.web.app/tasks/${user.uid}`)
        .then(res => res.json())
        .then(setTodoItems)
        .catch(alert)
        }
    },[user])

    function isDone(done, id){
        const markAsDone = {
            done: !done,
            id
        }
        console.log(markAsDone)
        fetch(`https://checkov-api-sh.web.app/tasks/${user.uid}`,{
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",      
            },
            body: JSON.stringify(markAsDone),
          })
        .then(res => res.json())
        .then(setTodoItems)
        .catch(alert)
        }

    function remove(id){
        const item = {
            id
        }
        
        fetch(`https://checkov-api-sh.web.app/tasks/${user.uid}`,{
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",      
            },
            body: JSON.stringify(item),
          })
        .then(res => res.json())
        .then(setTodoItems)
        .catch(alert)
        }
    

    if(!todoItems) return <h2>Loading...</h2>
    return(
        <section className="container flex flex-col items-center justify-center w-full mx-auto  bg-violet-950 rounded-lg shadow mt-4 ">
            <ul className="flex flex-col divide-y divide w-full">

            {todoItems.map(item => (
                <ToDoListItem key={item.id} remove={remove} isDone={isDone} item={item} />
                ))}
            
            </ul>
        </section>
    )
}
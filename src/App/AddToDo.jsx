import { useContext } from "react"
import { AuthContext } from "../App"

export default function AddToDo( {setTodoItems} ){

    const { user } = useContext(AuthContext);

    const addNewItem = (e) => {
        e.preventDefault();
        if(!e.target.todo.value) return;
        const newTodoItem = {
            uid: user.uid,
            title: e.target.todo.value,
        }
        fetch(`https://checkov-api-sh.web.app/tasks/${user.uid}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newTodoItem)
        })
        .then(res => res.json())
        .then((data) => {
            setTodoItems(data);
            e.target.todo.value = "";
        })
        .catch(alert)
        }
    

    return(
        <section>
            <form onSubmit={addNewItem}>
                <input type="text" name="todo" placeholder="Todo to be added" />
                <input type="submit" value="add" />
            </form>
        </section>
    )
}
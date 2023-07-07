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
        <section className="w-full container bg-violet-950 rounded-lg shadow p-4 mx-auto">
            <form onSubmit={addNewItem} className="flex">
                <input type="text" name="todo" placeholder="Todo to be added"  className="rounded-lg border border-zinc-300 w-full py-2 px-4 bg-zinc-50 text-zinc-700 placeholder:zinc-400 text-base flex-1"/>
                <input type="submit" value="add" className="flex-shrink-0 px-4 py-2 font-semibold text-zinc-50 bg-violet-600 ml-2 rounded-lg shadow hover:bg-violet-700 "/>
            </form>
        </section>
    )
}
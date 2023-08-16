export default function ToDoListItem({ item, isDone, remove }){

    return (
       <>
       
            {item.done == true
                ?  <li className="flex items-center p-4 cursor-pointer select-none opacity-40 hover:opacity-100 hover:bg-violet-600">

                <div className=" line-through flex-1 pl-1 mr-16 font-medium text-zinc-50 text-left">
                {item.title}
            </div>
            <div className="w-20 justify-between h-10 mr-4  flex flex-wrap flex-row">
              <p onClick={e => remove(item.id)} className=" p-2 opacity-80 hover:opacity-100 scale-150">❌</p>
              <p className=" text-3xl">|</p>
              <p onClick={e => isDone(item.done, item.id)} className=" p-2 opacity-80 hover:opacity-100 scale-150">✅</p>
            </div>
            </li>

            :<li className="flex items-center p-4 cursor-pointer select-none hover:bg-violet-600">
            <div className="flex-1 pl-1 mr-16 font-medium text-zinc-50 text-left">
                {item.title}
            </div>
            <div className="w-10 h-10 mr-4 ">
              <p onClick={e => isDone(item.done, item.id)} className=" p2 opacity-80 hover:opacity-100 scale-150">☑️</p>
            </div>
            </li>
        }
        </>
    )
}
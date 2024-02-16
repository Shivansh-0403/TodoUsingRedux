import { useDispatch } from "react-redux"
import { useState } from "react";
import { addTodo } from "../features/todo/todoSlice";

function TodoForm() {
    const dispatch = useDispatch()
    const [todo, setTodo] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        
        // Get the value of the input field
        // let text = todo
        
        // if (!text.trim()) return;  // Return if there is no text
        
        // Create an action with the entered text as payload
        dispatch(addTodo(todo))
        
        // // Clear the input field
        setTodo('')

        console.log(todo);
    }

    return (
        <form className="flex" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-5 outline-none duration-150 bg-white/20 py-3"
                value={todo}
                // onChange={handleChange}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button 
                type="submit" 
                className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
                // onClick={handleSubmit}
            >
                Add
            </button>
        </form>
        
    )
}

export default TodoForm
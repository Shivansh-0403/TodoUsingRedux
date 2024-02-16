import { useDispatch, useSelector } from "react-redux"
import { updateTodo, removeTodo } from "../features/todo/todoSlice"
import { useState } from "react"

function TodoItem({todo}) {
    // console.log(todo);
    // const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    const [todoText, setTodoText] = useState(todo.text)
    const [isTodoEditable, setIsTodoEditable] = useState(false)

    // const handleUpdate = (e) => {
    //     e.preventDefault()
    //     setIsTodoEditable((prev) => !prev)
    // }

    return (
        <div className={`flex border border-black/10 rounded-lg px-5 py-2 gap-x-3 shadow-sm shadow-white/50 duration-300         text-black ${ todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]" }`}>
            <input
                type="checkbox"
                className="cursor-pointer"
                // checked={todo.completed}
                // onChange={toggleCompleted}
                // onClick={() => updateStatus(todo.id)}
            />
            <input className={`border outline-none w-full bg-transparent rounded-lg ${
                            isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                        } ${todo.completed ? "line-through" : ""}`}
                value={todoText} onChange={(e) => setTodoText(e.target.value)} 
                readOnly={!isTodoEditable}
            />

            <button 
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    isTodoEditable ? 
                    dispatch(updateTodo({id: todo.id, text: todoText, completed: false})) : null

                    setIsTodoEditable(!isTodoEditable)
                }}
            >
                {isTodoEditable ? "📁" : "✏️"} 
            </button>

            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => dispatch(removeTodo(todo.id))}
            >
                ❌
            </button>
        </div>
        // <div className="w-full m-auto">
        //     {todos.map((todo) => (
        //         // <li key={todo.id}>{todo.text}</li>

        //         <div key={todo.id} className="flex justify-between">
        //             {/* <input type="checkbox" checked={todo.completed} onChange={() => dispatch(toggleTodo(todo.id))} /> */}
        //             {/* <input type="checkbox" data-id={todo.id} onChange={ */}

        //             <input type="checkbox" checked={todo.completed} onChange={() => console.log("completed")} />

        //             <input className="text-black"
        //                 type="text" name="text" value={todo.text} readOnly={!isTodoEditable} 
        //                 onChange={(e) => dispatch(updateTodo(todo.id, e.target.value))} 
        //             />

        //             <button 
        //                 onClick={() => setIsTodoEditable(prev => !prev)}
        //             >
        //                 { isTodoEditable ? "Done" : "Update" }
        //             </button>
        //         </div>
        //     ))}
        // </div>
    )
}

export default TodoItem

// // import { useEffect } from "react";
// import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux"
// import { removeTodo, updateTodo } from "../features/todo/todoSlice";

// function TodoItem() {
//     // useEffect(() => {
//     //     console.log(todos)
//     // }, [todos])
//     // console.log(todos)
    
//     const todos = useSelector((state) => state.todos)
//     const dispatch = useDispatch()
//     const [editableTodoId, setEditableTodoId] = useState(null); // Track which todo is being edited
//     const [editedTodoText, setEditedTodoText] = useState(""); // Track the edited text
//     const [isTodoEditable, setIsTodoEditable] = useState(false)

//     const deleteTodo = (id) => {
//         dispatch(removeTodo(id))
//         console.log("Deleted");
//     }

//     // const handleUpdateTodo = (id, text) => {
//     //     dispatch(updateTodo(id, text))
//     //     console.log("Updated");
//     //     // setTodoText('')
//     // }

//     const handleUpdateTodo = (id,  text) => {
//         dispatch(updateTodo(id, text));
//         setEditableTodoId(null); // Reset editableTodoId
//         console.log("Updated");
//     }
//     return (
//         <div className="w-[75%] m-auto">
//             {todos.map((todo) => (
//                 // <div key={todo.id}>{todo.text}</div>
//                 <div key={todo.id}
//                     className={`flex border border-black/10 rounded-lg px-5 py-2 gap-x-3 shadow-sm shadow-white/50 duration-300         text-black ${ todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]" }`}
//                 >
//                     <input
//                         type="checkbox"
//                         className="cursor-pointer"
//                         // checked={todo.completed}
//                         // onChange={toggleCompleted}
//                         // onClick={() => updateStatus(todo.id)}
//                     />
//                     <input
//                         type="text"
//                         className={`border outline-none w-full bg-transparent rounded-lg ${
//                             isTodoEditable ? "border-black/10 px-2" : "border-transparent"
//                         } ${todo.completed ? "line-through" : ""}`}
//                         // value={todoText}

//                         // // incorrect read only 
//                         // readOnly={!isTodoEditable}
//                         // onChange={(e) => handleUpdateTodo(todo.id, e.target.value)}

//                         value={editableTodoId === todo.id ? editedTodoText : todo.text} // Controlled value
//                         readOnly={editableTodoId !== todo.id}
//                         onChange={(e) => setEditedTodoText(e.target.value)} // Update editedTodoText state
//                     />

//                     {/* Edit, Save Button */}
//                     <button
//                         className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
//                         onClick={() => {
//                             if (todo.completed) window.alert("Completed!!");
//                             setIsTodoEditable(prev => !prev)
//                             setEditedTodoText(todo.text); // Reset editedTodoText
//                             setEditableTodoId(todo.id); // Set editableTodoId
//                         }}
//                     >
//                         {isTodoEditable ? "📁" : "✏️"}
//                     </button>

//                     {/* Save/Update Button */}
//                     {editableTodoId === todo.id && (
//                         <button
//                             className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
//                             onClick={() => handleUpdateTodo(todo.id, editedTodoText)}
//                         >
//                             ✔️
//                         </button>
//                     )}


//                     {/* Delete Todo Button */}
//                     <button
//                         className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
//                         onClick={() => deleteTodo(todo.id)}
//                     >
//                         ❌
//                     </button>
//                 </div>
//             ))}
//         </div>
//     )
// }

// // OS, Parallel, Security, Linguistics - Theory
// // Data, Python, Mobile Application - Practical

// export default TodoItem
import { createSlice, nanoid } from "@reduxjs/toolkit";
// nanoid -> generate unique id

// initialState -> starting mein store kaisa dikhega
const initialState = {
    todos: [
        {
            id: nanoid(),
            text: "Learn Redux",
            completed: false,
        }
    ]
}

// Reducer - Functionality
// Slice -> bigger version of reducer
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const task = {
                id: nanoid(),
                text: action.payload,
                completed: false
            }
            state.todos.push(task); // Add new item to array
        },
        removeTodo: (state, action) => {
            // console.log(action.payload.id)
            // Since only id is being passed as argument, payload.id will not work 
            state.todos = state.todos.filter((item) => item.id !== action.payload)
        },
        updateTodo: (state, action) => {
            console.log(action.payload.id + " " + action.payload.text)
            state.todos.map((item) => {
                // if (item.id === action.payload.id){
                item.id === action.payload.id ? 
                    item.text = action.payload.text : null
                // }
                // console.log(item.text);
            })
        },
        updateStatus: (state, action) => {
            state.todos.map((item) => {
                // if (item.id === action.payload.id){
                item.id === action.payload ? 
                    item.completed = !item.completed : null
                // }
                // console.log(item.text);
            })
        }
    }
})

export const {addTodo, removeTodo, updateTodo, updateStatus} = todoSlice.actions

// Selector -> How we get the data from our global state
// export const selectTodos = (state) => state.todo.todos;

export default todoSlice.reducer;
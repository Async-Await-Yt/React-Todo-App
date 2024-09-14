import { createSlice } from "@reduxjs/toolkit";

const app = createSlice({
    name: 'app',
    initialState: {
        todos: [
        // we have one static todo
            {id: Date.now(), checked: false, title: 'add your todos'}
        ]
    },
    reducers: {
        //add todo
        addTodos: (state, { payload }) => {
            state.todos.unshift({id: Date.now(), checked: false, title: payload})
        },
        //update todo
        updateTodos: (state, { payload }) => {
            //match element and toggle checkbox
            state.todos = state.todos.map(({ id, checked, ...rest }) =>
                id === payload
                    ? { id, checked: !checked, ...rest }
                    : {id, checked, ...rest}
                 )
        },
        // delete todo
        deleteTodos: (state, { payload }) => {
            // only filter selected one
            // payload === id
            state.todos = state.todos.filter(({id}) => id !== payload)
        }
    }
})

export const {addTodos, updateTodos, deleteTodos} = app.actions
export const todos = (state) => state.app.todos
export default app.reducer
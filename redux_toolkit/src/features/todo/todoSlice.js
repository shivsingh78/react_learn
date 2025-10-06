import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
     todos:[{id:1,text:"Hello world",completed:false,updateData:null}]
}

export const todoSlice = createSlice({
     name:'todo',
     initialState,
     reducers:{
          addTodo:(state,action)=>{
               const todo = {
                    id:nanoid(),
                    text:action.payload,
                    completed:false,
               }
               state.todos.push(todo)
          },
          removeTodo:(state,action)=>{
               state.todos=state.todos.filter((todo)=>todo.id !== action.payload)

          },
          updateTodo:(state,action)=>{
               const {id,updateData}=action.payload
               state.todos=state.todos.map((todo)=>todo.id == id ? {...todo,...text}:todo)
          },
          toggleTodo:(state,action)=>{
              const todo= state.todos=state.todos.find((todo)=>todo.id === action.payload)
              if(todo){
               todo.completed = !todo.completed
              }
          }

     }
})

export const {addTodo,updateTodo,removeTodo,toggleTodo}=todoSlice.actions

export default todoSlice.reducer
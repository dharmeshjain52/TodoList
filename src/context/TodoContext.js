import { createContext,useContext } from "react";

export const TodoContext=createContext({
        todo:[],
        addTodo:(todo)=>{},
        updatedTodo:(id,todo)=>{},
        deleteTodo:(id)=>{},
        completeToggle:(id)=>{}
    })

export const useTodo=()=>{

    return useContext(TodoContext)
}
export const TodoProvider=TodoContext.Provider
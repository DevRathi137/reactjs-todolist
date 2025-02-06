import { useState } from "react"


export default function TodoInput(props){

    const {handleAddTodods, todoValue, setTodoValue} = props

    // const [todoValue, setTodoValue] = useState('')

    return (
        <header>
            <input value={todoValue} onChange={(e)=>{
                setTodoValue(e.target.value)
            }} placeholder="Enter todo....." />
            <button onClick={()=>{
                handleAddTodods(todoValue)
            }}>Add</button>
        </header>
    )
}


//type rfc for boilerplate code of react
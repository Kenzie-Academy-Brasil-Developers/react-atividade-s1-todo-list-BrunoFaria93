import { useState } from "react"

const Form = ({addTodo}) => {
    const [userInput, setUserInput] = useState('')
    
    return(
        
        <div className='form'>
            <h1>To-do-list</h1>
             <input
                type='text'
                value={userInput}
                onChange={(event) => setUserInput(event.target.value)}   
            />
            <button className='button-1'onClick={() => addTodo(userInput)}>Add</button>
        </div>
)
}

export default Form
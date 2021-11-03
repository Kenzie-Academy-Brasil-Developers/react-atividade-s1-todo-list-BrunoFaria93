const TodoList = ({lista, handleTodo}) => {
    const cont = 0
    console.log(lista)
    return(
        <ul className='ul'>
            {lista.map((item) => {return <li key={cont+1}>{item} 
            
            <button className='button-2'onClick={() => handleTodo(item)}>x</button>
            </li>})}
            

        </ul>
        
    )
}

export default TodoList
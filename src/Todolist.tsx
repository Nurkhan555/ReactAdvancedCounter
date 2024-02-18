import { useState } from 'react'

type PropsType = {
    title: string
    tasks: { id: string, title: string, isDone: boolean }[]
    removeTask: (id: string) => void
    changeStatus: (status: string) => void
    onChecked: (value: boolean, id: string) => void
    createTask: (title: string) => void
}

export function Todolist(props: PropsType) {
    const [taskTitle, setTaskTitle] = useState('')

let count = 0
    return (
        <div style={ { margin: '20px' } }>
            <div>{count}</div>
            <button onClick={()=>{
                count--
                console.log(count)
            }}>-</button>
            <button onClick={()=>{
                count++
                console.log(count)
            }}>+</button>
            <button onClick={()=>{
                count=0
                console.log(count)
            }}>reset</button>
            <h3>{ props.title }</h3>
            <div>
                <input
                    type="text"
                    value={taskTitle}
                    onChange={(event) => {
                        setTaskTitle(event.target.value)
                    }}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                        props.createTask(taskTitle.trim())
                        setTaskTitle('')
                    }
                    }}
                />
                <button onClick={() => {
                    props.createTask(taskTitle.trim())
                    setTaskTitle('')
                }}>+</button>
            </div>
            <ul>
                {
                    props.tasks.map(function (task) {
                        return (
                            <li key={ task.id } className={task.isDone===true ?'task':''    }>
                                <input
                                    type="checkbox"
                                    onChange={ (event) => {
                                        props.onChecked(event.target.checked, task.id)
                                    } }
                                    checked={ task.isDone }
                                />
                                <span>{ task.title }</span>
                                <button onClick={ () => {
                                    props.removeTask(task.id)
                                } }>
                                    x
                                </button>
                            </li>
                        )
                    })
                }
            </ul>
            <div>
                <button onClick={ () => {
                    props.changeStatus('All')
                } }>All
                </button>
                <button onClick={ () => {
                    props.changeStatus('Active')
                } }>Active
                </button>
                <button onClick={ () => {
                    props.changeStatus('Completed')
                } }>Completed
                </button>
            </div>
        </div>
    )
}
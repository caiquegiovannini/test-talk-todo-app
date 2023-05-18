'use client'

import { useState } from 'react'
import { ToDoItem } from '../todo-item'
import styles from './styles.module.scss'

interface ToDoData {
    id: string,
    description: string
}

export function ToDoList() {
    const [todos, setTodos] = useState<ToDoData[]>([])
    const [todo, setTodo] = useState({id: '123', description: 'Comprar cafe', checked: false}) // mock

    function handleCheckToDo() {
        setTodo(current => ({
            ...current,
            checked: !current.checked,
        }))
    }

    return (
        <main>
            <ul>
                {/* {todos.length > 0 && (
                    todos.map(todo => (
                        <ToDoItem key={todo.id} todo={todo} />
                    ))
                )} */}
                <ToDoItem todo={todo} onCheckToDo={handleCheckToDo} />
            </ul>
        </main>
    )
};
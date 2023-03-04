import { useState } from "react"
import ToDo from "./todo";
import ToDoForm from "./todoform";

export default function App({ Component, pageProps }) {
    const [todos, setTodos] = useState([]);

    const addTask = (userInput) => {
        if (userInput) {
            const newItem = {
                id: Math.random().toString(36).substr(2, 9),
                task: userInput,
                complete: false
            }
            setTodos([...todos, newItem])
        }
    }

    const removeTask = (id) => {
        setTodos([...todos.filter((todo) => todo.id !== id)])
    }

    const handleToggle = (id) => {
        setTodos([
            ...todos.map((todo) =>
                todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo })
        ])
    }

    return (
        <div >

            <header>
                <h1>Мои задачи</h1>
            </header>

            <ToDoForm addTask={addTask} />
            <h3>Осталось выполнить: {todos.length}</h3>

            <div className="task">

                {todos.map((todo) => {
                    return (
                        <ToDo
                            todo={todo}
                            key={todo.id}
                            toggleTask={handleToggle}
                            removeTask={removeTask} />
                    )
                })
                }
            </div>

        </div>
    )
}
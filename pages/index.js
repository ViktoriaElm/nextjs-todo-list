import { useCallback, useState } from "react"
import ToDo from "../components/todo"
import ToDoForm from "../components/todoform"

export default function App() {
    console.count('App')
    const [todos, setTodos] = useState([]);

    const addTask = useCallback((userInput) => {
        if (userInput) {
            const newItem = {
                id: Date.now(),
                task: userInput,
                complete: false
            }
            setTodos([...todos, newItem])
        }
    });

    const removeTask = useCallback((id) => {
        setTodos([...todos.filter((todo) => todo.id !== id)])
    });

    const handleToggle = useCallback((id) => {
        setTodos([
            ...todos.map((todo) =>
                todo.id === id ? { ...todo, checked: !todo.checked } : { ...todo })
        ])
    });

    const clearAll = useCallback(() => {
        setTodos([]);
        todos.length = 0;
    })

    return (
        <div >

            <header>
                <h1>Мои задачи</h1>
            </header>

            <ToDoForm addTask={addTask} />
            <h3>Осталось выполнить: {todos.length}</h3>
            <button className="clearAll" onClick={clearAll}>Очистить все</button>

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
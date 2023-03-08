import { useCallback, useState } from "react"

export default function ToDoForm({ addTask }) {
    console.count('ToDoForm')
    const [userInput, setUserInput] = useState('')

    const handleSubmit = useCallback((e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput("")
    })

    const handleChange = useCallback((e) => {
        setUserInput(e.currentTarget.value)
    })

    const handleKeyPress = useCallback((e) => {
        if (e.key === "Enter") {
            handleSubmit(e)
        }
    })

    return (
        <form onSubmit={handleSubmit} >
            <input
                value={userInput}
                type="text"
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder='Введите задачу...'
            />
            <button>
                ⤷
            </button>  <br></br>
        </form>
    )
}
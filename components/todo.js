export default function ToDo({ todo, toggleTask, removeTask }) {
    return (
        <div key={todo.id} className="item-todo">

            <div className={todo.checked ? "item-text strike" : "item-text"}
                onClick={() => toggleTask(todo.id)}>
                <p>{todo.task}</p>
            </div>
            <div className="del">
                <span onClick={() => removeTask(todo.id)}>✘</span>

            </div>
        </div>
    )
}
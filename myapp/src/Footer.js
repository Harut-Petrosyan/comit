

function TodoFooter({todos,onClearCompleted}) {
  const CompletedSize = todos.filter((todo) =>todo.isCompleted).length
    return(
        <div>
            <span>{CompletedSize}/{todos.length} Completed</span>
            <button onClick={onClearCompleted}>Clear Completed</button>
        </div>
    )
}

export default TodoFooter
type TodoListProps = {
    data: any[];
}

export const TodoList = ({ data }: TodoListProps) => {
    return (
        <div>
            {data.map((todo) => (
                <div key={todo.id}>
                    {todo.value} = {todo.isCompleted ? "Completed" : "Not Completed"}
                </div>
            ))}
        </div>
    );
};

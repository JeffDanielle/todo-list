import Todo from "./Todo"
const TodoList = ({ todo, onComplete }) => {

    const todosList = todo.map((items) =>
        <Todo key={items.id} todoProps={items} onComplete={onComplete} />
    )
    return (
        <div className="flex flex-col justify-center items-center">
            <ul className="bg-[#ECEDF6] w-1/3 p-4 rounded-md mt-3">
                {todo.length === 0 ? <p className="text-center text-2xl italic">Kindly add task to display it here</p> : todosList}
            </ul >
        </div >
    );
}


export default TodoList;
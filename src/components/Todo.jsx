import trash from "../assets/trash.svg"
const Todo = ({ todoProps, isCompleted, onComplete, onDelete }) => {
    return (
        <li className="mb-4 bg-white rounded-md p-2 flex justify-start">
            <div className="flex items-center w-full justify-between">
                <div className="flex">
                    <input type="checkbox" onChange={() => onComplete(todoProps.id)} value={todoProps.isCompleted} className="w-4 h-4 self-center lg:mx-2 bg-[#3f6080]" />
                    <div className="text-nowrap mx-2">
                        <p className={todoProps.isCompleted ? "line-through" : ""}>{todoProps.task}</p>
                        <p className="text-gray-500">{todoProps.dateAdded}</p>
                    </div>
                </div>
                <div>
                    <button onClick={() => onDelete(todoProps.id)}><img src={trash} /></button>
                </div>
            </div>

        </li>
    );
}

export default Todo;
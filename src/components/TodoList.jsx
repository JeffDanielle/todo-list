import mockData from "../mockData/mockdata"
import Todo from "./Todo"
const TodoList = () => {
    const data = mockData
    const todosList = data.map((items) =>
        <Todo key={items.id} todoProps={items} />
    )
    return (
        <div className="flex justify-center">
            <ul className="bg-[#ECEDF6] w-1/3 p-4 rounded-md">
                {todosList}
            </ul >
        </div >
    );
}


export default TodoList;
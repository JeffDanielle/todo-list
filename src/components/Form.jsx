import { useState } from "react";

const FormAdd = ({ handleAdd }) => {
    const date = new Date()
    const today = date.toLocaleDateString();
    const [task, setTask] = useState('');
    console.log()
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!task) return

        const newTask = {
            id: crypto.randomUUID(),
            task,
            isCompleted: false,
            dateAdded: today,
        }
        console.log(newTask)
        handleAdd(newTask)
        setTask('')
    }
    return (
        <div className="relative lg:left-[40.5rem] top-15 px-4 py-2 rounded-md text-white">
            <form onSubmit={handleSubmit}>
                <button className="relative bg-[#606FF5] lg:right-[8.5rem] px-4 py-2 rounded-md text-white">Add Task</button>
                <input type="text" value={task} onChange={(e) => setTask(e.target.value)} className="bg-slate-200 rounded-md w-1/6 indent-2 p-2 text-black" placeholder="Enter a task" />
            </form>
        </div>
    );
}

export default FormAdd;
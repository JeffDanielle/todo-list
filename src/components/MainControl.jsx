import Header from './Header'
import TodoList from './TodoList'
import Form from './Form'
import data from "../mockData/mockdata"
import { useState } from 'react'


const MainController = () => {
    const [todoTask, setTodoTask] = useState([])
    // console.log(todo)
    const handleComplete = (id) => {
        // console.log(id)
        setTodoTask((items) => items.map((obj) => obj.id === id ? { ...obj, isCompleted: !obj.isCompleted } : obj))
    }

    const handleDeleteTask = (id) => {
        setTodoTask((items) => items.filter((item) => item.id !== id))
    }

    const handleAddTask = (item) => {
        setTodoTask((items) => [...items, item])
    }
    return (
        <div className='bg-[#F8F9FF]'>
            <Header />
            <div className='flex flex-col lg:mt-10 h-screen w-screen'>
                <Form handleAdd={handleAddTask} />
                <TodoList todo={todoTask} onComplete={handleComplete} handleDelete={handleDeleteTask} />
            </div>
        </div>
    );
}

export default MainController;
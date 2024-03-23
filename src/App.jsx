import Header from './components/Header'
import './index.css'
import TodoList from './components/TodoList'

function App() {

  return (
    <div className='bg-[#F8F9FF]'>
      <Header />
      <div className='flex flex-col lg:mt-10 h-screen w-screen'>
        <TodoList />
      </div>
    </div>

  )
}

export default App

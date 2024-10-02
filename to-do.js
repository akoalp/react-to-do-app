import { useState, useEffect } from 'react';


export default function ToDoList(){
    const storedTasks = JSON.parse(localStorage.getItem('tasks'))
    const [tasks,setTasks] = useState(storedTasks);
    const [name,setName] = useState("");
    const [id,setId] = useState(0);
   
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
     
    }, [tasks]);

    const handleClick = () =>{
        setTasks((prev) => [...prev, { id, name }])
        setId((prev) => prev + 1);
        setName("");
      
    }

    const deleteItem = (taskId) => {
        setTasks(tasks.filter( task => task.id !== taskId));
    }

    return (
        <div className="bg-lime-300 h-screen flex items-center justify-center flex-col border-solid ">
            <div className=''>
                <input  value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter a task" className='shadow-lg bg-fuchsia-200 placeholder:text-slate-400 border-2 border-current '/>
                <button onClick={handleClick} className="border-solid border-stone-950 border-2 bg-indigo-400 antialiased">Add</button>
            </div>
            <div className='space-x-4 flex flex-row divide-cyan-950 bg-orange-400 border-dotted '> 
                <ul className='divide-y divide-slate-950'>
                 {tasks.length >= 1 && tasks.map((task) => <li key={task.id} > <div className='flex justify-between items-center'>{task.name}
                 <div className='ml-4'><button onClick={() => {deleteItem(task.id)}} > Delete</button></div></div>
                 </li>)} 
                </ul>
                
               
            </div>   
        </div>
        
    );
}
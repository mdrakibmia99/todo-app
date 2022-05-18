import React from 'react';

const Todo = () => {
    const handleAddTask =(event)=>{
        event.preventDefault();
        const name=event.target.task_name.value;
        const task_desc=event.target.task_desc.value;
        console.log(name ,task_desc)


    }
    return (
        <div className='max-w-7xl mx-auto'>
            <form  onSubmit={handleAddTask} className="lg:w-1/2 w-full mx-auto grid grid-cols-1 gap-3  bg-base-300 lg:p-10 border-2 rounded-lg lg:mt-5">
            <input  name="task_name" type="text" placeholder="Task Name" className="input input-bordered w-full " />
            <textarea name='task_desc' className="textarea textarea-bordered w-full" placeholder="Description"></textarea>
            <input type="submit" value={"Add Task"} className="input input-bordered  border-0 text-white font-bold w-full bg-blue-500 hover:bg-blue-700" />
             
            </form>
        </div>
    );
};

export default Todo;
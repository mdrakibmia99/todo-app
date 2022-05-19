import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import ToRow from './ToRow';

const Todo = () => {
    const [tasks, setTasks] = useState([]);
    const [lineThrough, setLineThrough] = useState(false)
    useEffect(() => {
        const url = `https://damp-anchorage-23682.herokuapp.com/task`;
        const getLists = async () => {
            const request = await fetch(url);
            const response = await request.json();
            setTasks(response);

        };
        getLists();
    }, [tasks]);


    const handleAddTask = (event) => {
        event.preventDefault();
        const name = event.target.task_name.value;
        const task_desc = event.target.task_desc.value;
        const list = { name: name, desc: task_desc }
        axios.post('https://damp-anchorage-23682.herokuapp.com/task', list)
            .then(res => (res.data))


    }




    return (
        <div className='max-w-7xl mx-auto'>
            <form onSubmit={handleAddTask} className="lg:w-1/2 w-full mx-auto grid grid-cols-1 gap-3  bg-base-300 lg:p-10 border-2 rounded-lg lg:mt-5">
                <input name="task_name" type="text" placeholder="Task Name" className="input input-bordered w-full " />
                <textarea name='task_desc' className="textarea textarea-bordered w-full" placeholder="Description"></textarea>
                <input type="submit" value={"Add Task"} className="input input-bordered  border-0 text-white font-bold w-full bg-blue-500 hover:bg-blue-700" />

            </form>

            <div className='lg:w-1/2 w-full mx-auto'>
            <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tasks.map(task => <ToRow
                                    key={task._id}
                                    task={task}
                                />)
                            }
                        </tbody>
                    </table>

            </div>
        </div>
    );
};

export default Todo;
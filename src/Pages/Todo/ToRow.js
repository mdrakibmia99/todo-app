import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ToRow = (props) => {
    const { name, desc, _id } = props.task;
    const [lineThrough, setLineThrough] = useState(false);
    const handleDeleteList = (id) => {
        axios.delete(`https://damp-anchorage-23682.herokuapp.com/task/${id}`)
            .then(res => {
                console.log(res);
                toast('item deleted');
            })



    }

    return (
        <div >
            <tr className="hover w-full'">
                <td>
                    <label className={`${lineThrough && 'line-through'}`} ><b>{name}</b></label>
                </td>
                {
                    lineThrough &&
                    <>
                        <input type="checkbox" id="my-modal-4" class="modal-toggle" />
                        <label htmlFor="my-modal-4" class="modal cursor-pointer">
                            <label class="modal-box relative" htmlFor="">
                                <h3 class="text-lg font-bold">Congratulations you have done this task!</h3>
                                <p class="py-4">You're even better to good to go!</p>
                            </label>
                        </label>
                    </>
                }
                <td className={`${lineThrough && 'line-through'}`} title={`${desc}`}>{desc.slice(0, 110)}...</td>

                <td className='grid grid-cols-2 justify-end'>
                    <label htmlFor="my-modal-4" className={`cursor-pointer ${lineThrough && 'line-through'}`} onClick={() => setLineThrough(!lineThrough)}>
                        <i className="fa fa-check-square-o cursor-pointer bg-green-500 text-white p-2 rounded-full" aria-hidden="true" onClick={() => setLineThrough(!lineThrough)} title='complete list'></i>
                    </label>
                </td>

                <td><i className="fa fa-trash-o cursor-pointer bg-red-500 text-white p-2 rounded-full" aria-hidden="true" onClick={() => handleDeleteList(_id)} title='delete list'></i></td>
            </tr>
        </div>
    );
};

export default ToRow;
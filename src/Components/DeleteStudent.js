import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const DeleteStudent = ({deletingStudent, refetch}) => {
    // const {_id} = deletingStudent;
    // console.log(editingData)
    const handleDelete = (_id) => {

        const deleteUrl = `https://space-school-record.herokuapp.com/delete-student/${_id}`;
        // console.log(myItemDeleteUrl)
        fetch(deleteUrl, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Student Deleted');
                refetch();
            })

    }
    return (
        <div>
            <input type="checkbox" id="deleting-modal" className="modal-toggle" />
            <div className="modal modal-middle sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="deleting-modal" className="btn btn-sm btn-circle hover:bg-red-600 border-0 absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-accent text-lg">Delete Student </h3>
                    <div className="divider"></div>
                    <p className=" text-black font-semibold mb-4">Are you sure you want to remove the current student from the list?</p>
                    <form onClick={() => handleDelete(deletingStudent?._id)}>
                        <div className="form-control">
                            <span htmlFor="name" className=" text-sm text-gray-600">STUDENT NAME</span>
                            <p className='mb-3'>{deletingStudent?.name}</p>
                        </div>
                        <div className="form-control">
                            <span htmlFor="name" className="text-sm text-gray-600 ">CLASS</span>
                            <p>{deletingStudent?.class}</p>
                        </div>
                        <div className="divider"></div>
                        <div className="mt-6 text-end">
                            <label htmlFor="deleting-modal" className='btn border-primary text-primary mr-4 btn-sm'>CANCEL</label>
                            <input className='btn btn-warning text-base-100 btn-sm' type="submit" value='DELETE' />
                        </div>
                    </form>
                    <Toaster/>
                </div>
            </div>

        </div>
    );
};

export default DeleteStudent;
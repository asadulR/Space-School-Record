import React from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

const EditStudents = ({ editingData, refetch }) => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    // console.log(editingData)
    const handleUpdating = data => {
        if (data?.score <= 30) {
            data.result = "Failed";
            data.grade = "Poor";
        }
        else if (data?.score > 30 && data?.score <= 75) {
            data.result = "Passed";
            data.grade = "Average";
        }
        else if (data?.score > 75 && data?.score <= 100) {
            data.result = "Passed";
            data.grade = "Excellent";
        }
        else {

        }
        //    put api to update student records
        const url = `https://space-school-record.herokuapp.com/update-record/${editingData?._id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                toast.success('Student record updated!');
                refetch();
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }
    return (
        <div>
            <input type="checkbox" id="editing-modal" className="modal-toggle" />
            <div className="modal modal-middle sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="editing-modal" className="btn btn-sm btn-circle hover:bg-red-600 border-0 absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-accent text-lg text-center">Update Student Record: <span className='text-primary'>{editingData?.name}</span></h3>
                    <div className="divider"></div>
                    <form onSubmit={handleSubmit(handleUpdating)}>
                        <div className="form-control">
                            <span htmlFor="name" className="label-text mb-1">STUDENT NAME*</span>
                            <input type="text" className="input input-bordered input-sm" defaultValue={editingData?.name}
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name is Required"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-700">{errors.name.message}</span>}
                            </label>
                        </div>
                        <div className="form-control">
                            <span htmlFor="name" className="label-text mb-1">CLASS*</span>

                            <input type="number" className="input input-sm input-bordered"
                                {...register("class", {
                                    required: {
                                        value: true,
                                        message: "Class is Required"
                                    },
                                    min: {
                                        value: 1,
                                        message: `Please input values between 1 & 12`
                                    },
                                    max: {
                                        value: 12,
                                        message: "Please input values between 1 & 12"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.class?.type === 'required' && <span className="label-text-alt text-red-700">{errors.class.message}</span>}
                                {errors.class?.type === 'min' && <span className="label-text-alt text-red-700">{errors.class.message}</span>}
                                {errors.class?.type === 'max' && <span className="label-text-alt text-red-700">{errors.class.message}</span>}
                            </label>
                        </div>

                        <div className="form-control">
                            <span htmlFor="name" className="label-text mb-1">SCORE*</span>
                            <input type="number" className="input input-sm input-bordered"
                                {...register("score", {
                                    required: {
                                        value: true,
                                        message: "Score is Required"
                                    },
                                    min: {
                                        value: 0,
                                        message: `Please input values between 0 & 100`
                                    },
                                    max: {
                                        value: 100,
                                        message: "Please input values between 0 & 100"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.score?.type === 'required' && <span className="label-text-alt text-red-700">{errors.score.message}</span>}
                                {errors.score?.type === 'min' && <span className="label-text-alt text-red-700">{errors.score.message}</span>}
                                {errors.score?.type === 'max' && <span className="label-text-alt text-red-700">{errors.score.message}</span>}
                            </label>
                        </div>
                        <div className="form-control">
                            <span htmlFor="img" className="label-text mb-1">IMAGE URL*</span>
                            <input type="text" className="input input-bordered input-sm"
                                {...register("img", {
                                    required: {
                                        value: true,
                                        message: "Image URL is Required"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.img?.type === 'required' && <span className="label-text-alt text-red-700">{errors.img.message}</span>}
                            </label>
                        </div>
                        <div className="mt-6 text-end">
                            <label htmlFor="editing-modal" className='btn border-primary text-primary mr-4 btn-sm'>CANCEL</label>
                            <input className='btn btn-primary text-base-100 btn-sm' type="submit" value='CONFIRM' />
                        </div>
                    </form>
                    <Toaster />
                </div>
            </div>

        </div>
    );
};

export default EditStudents;
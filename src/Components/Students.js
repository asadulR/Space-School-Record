import React, { useState } from 'react';
import { FaAward, FaPlus, FaBuromobelexperte, FaBookOpen, FaUsers, FaPencilRuler, FaFileSignature, FaRegListAlt, FaBroadcastTower, FaRegBell, FaAlignRight, FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import avatar from '../assets/images/avatar.png';
import AddStudent from './AddStudent';
import EditStudents from './EditStudents';
import { useQuery } from 'react-query';
import Loading from './Loading/Loading';
import DeleteStudent from './DeleteStudent';
const Students = () => {
    const [editingData, setEditingData] = useState({});
    const [deletingStudent, setDeletingStudent] = useState({});
    const { isLoading, error, data, refetch } = useQuery('available', () =>
        fetch(`https://space-school-record.herokuapp.com/students`).then(res =>
            res.json()
        )
    )
    if (isLoading) return <Loading />
    return (
        <section>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content my-4 px-6">
                    {/* <!-- Page content here --> */}
                    <div className='flex justify-end'><label htmlFor="my-drawer-2" className=' drawer-button text-right text-primary lg:hidden text-xl cursor-pointer'><FaAlignRight /></label></div>
                    <div className='flex items-center justify-between mt-10 mb-6'>
                        <div>
                            <h2 className='text-accent' style={{ fontSize: "20px", fontWeight: "700" }}>Students</h2>
                        </div>
                        <div>
                            <label htmlFor="student-modal" className='btn bg-primary hover:bg-secondary font-semibold text-white' style={{ fontSize: "14px", padding: "8px 32px", lineHeight: "26px" }}><FaPlus className='mr-2' /> ADD</label>
                        </div>
                    </div>

                    {/* student Table */}
                    <div className=' border-stone-300 border rounded-lg'>
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Student Name</th>
                                    <th>Class</th>
                                    <th>Result</th>
                                    <th>Score</th>
                                    <th>Grade</th>
                                    <th></th>
                                </tr>
                            </thead>
                            {
                                data?.map((student, index) => <tbody key={student.key} index={student.index}>
                                    <tr className="hover">
                                        <th>{index + 1}</th>
                                        <td>{student.name}</td>
                                        <td>{student.class}</td>
                                        <td className=' text-base-100'><span className={(student.result === "Passed" ? 'bg-success px-2 rounded-3xl' : 'bg-warning px-2 rounded-3xl')}>{student.result}</span></td>
                                        <td>{student.score}/100</td>
                                        <td><span className={` ${student.grade === "Excellent" && "text-success"} ${student.grade === "Average" && "text-primary"} ${student.grade === "Poor" && "text-warning"}`}>{student.grade}</span></td>
                                        <td className='flex gap-3 p-5 text-primary'>
                                            <label onClick={() => setEditingData(student)}
                                                htmlFor="editing-modal"><FaPencilAlt className=' hover:text-success cursor-pointer' />
                                            </label>

                                            <label onClick={() => setDeletingStudent(student)}
                                                htmlFor="deleting-modal"><FaTrashAlt className='hover:text-warning cursor-pointer' />
                                            </label>
                                            {/* <FaTrashAlt className='hover:text-warning cursor-pointer' /> */}
                                        </td>
                                    </tr>
                                </tbody>)
                            }
                        </table>
                    </div>

                    <h4 className='mt-5 text-accent'>Showing {data ? data.length : '0'} of {data ? data.length : '0'} entries</h4>
                </div>
                <div className="drawer-side shadow-slate-800">
                    <label for="my-drawer-2" className="drawer-overlay"></label>
                    <div className="menu p-6 overflow-y-auto w-80 bg-base-100 text-base-content border-r border-slate-300 shad">
                        {/* <!-- Sidebar content here --> */}
                        <div className=' flex items-center gap-2' style={{ margin: "30px 0 30px 0" }}>
                            <span className='px-4 py-3  rounded-md inline-block bg-secondary'><FaAward className=' text-xl' /></span>
                            <span className='text-primary' style={{ fontSize: "30px", fontWeight: "800", lineHeight: "40px" }}>School Space</span>
                        </div>
                        <div className="divider"></div>

                        <div className='flex items-center p-2 rounded-md hover:bg-sky-100'>
                            <span className='mr-4 text-lg'><FaBuromobelexperte className=' text-gray-400' /></span>
                            <span style={{ fontSize: "14px" }}>Dashboard</span>
                        </div>
                        <div className='flex items-center rounded-md p-2 hover:bg-sky-100'>
                            <span className='mr-4 text-lg'><FaBookOpen className=' text-gray-400' /></span>
                            <span style={{ fontSize: "14px" }}>Courses</span>
                        </div>
                        <div className='flex items-center text-primary hover:bg-sky-100 p-2 rounded-md' style={{ background: "#EAF6FB" }}>
                            <span className='mr-4 text-lg'><FaUsers className=' text-primary' /></span>
                            <span style={{ fontSize: "14px" }}>Students</span>
                        </div>
                        <div className='flex items-center hover:bg-sky-100 rounded-md p-2'>
                            <span className='mr-4 text-lg'><FaPencilRuler className=' text-gray-400' /></span>
                            <span style={{ fontSize: "14px" }}>Exams</span>
                        </div>
                        <div className='flex items-center hover:bg-sky-100 rounded-md p-2'>
                            <span className='mr-4 text-lg'><FaFileSignature className=' text-gray-400' /></span>
                            <span style={{ fontSize: "14px" }}>Results</span>
                        </div>
                        <div className='flex items-center hover:bg-sky-100 rounded-md p-2'>
                            <span className='mr-4 text-lg'><FaRegListAlt className=' text-gray-400' /></span>
                            <span style={{ fontSize: "14px" }}>Notice Board</span>
                        </div>
                        <div className='flex items-center hover:bg-sky-100 rounded-md p-2'>
                            <span className='mr-4 text-lg'><FaBroadcastTower className=' text-gray-400' /></span>
                            <span style={{ fontSize: "14px" }}>Live Classes</span>
                        </div>
                        <div className='flex items-center hover:bg-sky-100 rounded-md p-2'>
                            <span className='mr-4 text-lg'><FaRegBell className=' text-gray-400' /></span>
                            <span style={{ fontSize: "14px" }}>Notifications</span>
                        </div>

                        <div className='bottom-0  mb-10 mt-20'>
                            <div className="avatar online">
                                <div className="rounded-full" style={{ width: "48px" }}>
                                    <img src={avatar} alt='' />
                                </div>
                            </div>
                            <h2 className='text-accent m-0'>Md. Asadul Rahman</h2>
                            <p className=' text-gray-500'>contact.asadx@gmail.com</p>
                            <button className='btn border-primary border-2 w-full btn-sm mt-4 text-primary hover:text-base-100 hover:bg-primary'>
                                VIEW PROFILE
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <AddStudent refetch={refetch} />
            <EditStudents editingData={editingData} refetch={refetch}/>
            <DeleteStudent refetch={refetch} deletingStudent={deletingStudent} />
        </section>
    );
};

export default Students;
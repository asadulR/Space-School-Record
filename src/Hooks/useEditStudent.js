import { useState } from 'react';

const useEditStudent = () => {
    const [editingStudentData, setEiditingStudentData] = useState({});

    return [editingStudentData, setEiditingStudentData]
};

export default useEditStudent;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
    const { id } = useParams();
    const [student, setStudent] = useState(null);

    useEffect(() => {
        const fetchStudentDetails = async () => {
            try {
                const response = await axios.get(`https://sanjana-student-data.s3.eu-north-1.amazonaws.com/students.json`);
                const studentData = response.data.students.find(s => s.id === parseInt(id));
                setStudent(studentData);
            } catch (error) {
                console.error("Error fetching student details", error);
            }
        };

        fetchStudentDetails();
    }, [id]);

    if (!student) return <div>Loading...</div>;

    return (
        <div className="bg-gray-100 h-screen w-screen flex justify-center pt-10">
            <div className="container mx-auto px-4 w-1/2 max-w-screen-lg">
                <div className="bg-white border border-gray-800 p-6">
                    <h2 className="text-xl font-bold mb-4">{student.name}</h2>
                    <p><strong>Active:</strong> {student.active ? 'Yes' : 'No'}</p>
                    <p><strong>Age:</strong> {student.yearsOld} years</p>
                    <p><strong>Class:</strong> {student.class}</p>
                    <p><strong>Gender:</strong> {student.gender}</p>
                </div>
            </div>
        </div>
    );
};

export default DetailPage;

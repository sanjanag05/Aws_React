import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({ students }) => {
    const [selected, setSelected] = useState(null);
    const navigate = useNavigate();

    const handleToggle = (id) => {
        setSelected(selected === id ? null : id);
    };

    const handleViewDetails = (id) => {
        navigate(`/${id}`);
    };

    return (
        <div className="bg-gray-100 flex justify-center pt-10">
            <div className="container mx-auto px-4">
                <div className="w-1/2 mb-4 max-w-screen-lg mx-auto px-4">
                    {students.map(student => (
                        <div key={student.id} className="bg-white max-w-full mx-auto border border-gray-800">
                            <ul className="shadow-box">
                                <li className="relative border-b border-gray-800">
                                    <button
                                        type="button"
                                        className="w-full px-6 py-6 text-left flex items-center"
                                        onClick={() => handleToggle(student.id)}
                                    >
                                        <img
                                            src={student.img}
                                            alt={student.name}
                                            className="w-12 h-12 rounded-full mr-4"
                                        />
                                        <div className="flex items-center justify-between w-full">
                                            <span>{student.name}</span>
                                            <svg
                                                className={`w-5 h-5 text-gray-500 transform transition-transform ${
                                                    selected === student.id ? 'rotate-180' : ''
                                                }`}
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path d="M19 9l-7 7-7-7"></path>
                                            </svg>
                                        </div>
                                    </button>
                                    <div
                                        className={`relative overflow-hidden transition-all duration-700 ${
                                            selected === student.id ? 'max-h-screen' : 'max-h-0'
                                        }`}
                                    >
                                        <div className="px-6 pb-6">
                                            <p><strong>Class:</strong> {student.class}</p>
                                            <button
                                                type="button"
                                                className="text-blue-500 underline"
                                                onClick={() => handleViewDetails(student.id)}
                                            >
                                                View Details
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;

import StudentDetails from "./Student Details";
import React from 'react';


function ListStudents ({ students }) {
    if (!Array.isArray(students) || students.length === 0) {
        return <div>No students available.</div>;
    }
    return (
        <div>

            {students.map(student => (
                <StudentDetails key={student.id} student={student} />
            ))}
        </div>
    )
}

export default ListStudents
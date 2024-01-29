import StudentDetails from "./Student Details";
import ListStudents from "./List Students";
import StudentDataBase from "./Student Database";
import { useState } from "react";
import AddStudentForm from "./Add Student Form";


function StudentManager () {
const [students, setStudents] = useState(StudentDataBase);
const handleAddStudents = newSudents => {
    setStudents([...students, { ...newSudents, id: String(students.length + 1) }]);
};

    return (

        <div>
<ListStudents students={students}></ListStudents>
<AddStudentForm onAddStudent={handleAddStudents}></AddStudentForm>
</div>

    )

}

export default StudentManager
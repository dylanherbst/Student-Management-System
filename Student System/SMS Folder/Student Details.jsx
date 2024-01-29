function StudentDetails (props) {

    const { student } = props;

    return (
        <ul key={student.id}>
            <h2>{student.name}</h2>
            <h6>Avatar: https://robohash.org/{student.name}</h6>
            <h4>Location: {student.location}</h4>
            <br></br>        
        </ul>

    )

}

export default StudentDetails
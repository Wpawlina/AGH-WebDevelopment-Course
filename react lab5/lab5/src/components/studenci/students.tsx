interface Student{
    firstName: string;
    lastName: string;
    age: number;
}


function Students(){
    const students: Student[] =[{ firstName: "Jan", lastName: "Kowalski", age: 2004 }, { firstName: "Anna", lastName: "Nowak", age: 2001 }, { firstName: "Piotr", lastName: "Kowalczyk", age: 2009 }];
    return (
        <div style={{display:"flex", justifyContent:"center", flexDirection:"column"}}>
            <h1>Studenci</h1>
            <table>
                <thead>
                    <tr>
                        <th>Imię</th>
                        <th>Nazwisko</th>
                        <th>Wiek</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={index}>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );


}

export default Students;
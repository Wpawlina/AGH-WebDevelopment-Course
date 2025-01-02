import { useState } from "react";
import Add from "./add";



interface Student{
    firstName: string;
    lastName: string;
    age: number;
}






function StudentsManager(){
    const [students,setStudents] = useState<Student[]>([{ firstName: "Jan", lastName: "Kowalski", age: 2004 }, { firstName: "Anna", lastName: "Nowak", age: 2001 }, { firstName: "Piotr", lastName: "Kowalczyk", age: 2009 }]);
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [age, setAge] = useState<number>(0);

    const addStudent = () => {
        if(firstName === "" || lastName === "" || age === 0 || isNaN(age)){
            return;
        }
        const newStudent: Student = {firstName: firstName.charAt(0).toUpperCase() + firstName.slice(1), lastName: lastName.charAt(0).toUpperCase() + lastName.slice(1), age: age};
        setStudents([...students, newStudent]);
    }

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
            <div>
                <div>
                <label>Imię:</label>
                <input type="text" onChange={(event)=>{setFirstName(event.target.value)}}></input>
                </div>
                <div>
                <label>Nazwisko:</label>
                <input type="text" onChange={(event)=>{setLastName(event.target.value)}}></input>
                </div>
                <div>
                <label>Rocznik:</label>
                <input type="number" onChange={(event)=>{setAge(parseInt(event.target.value))}}></input>
                </div>
                <Add addStudent={addStudent}/>
                
                

            </div>
        </div>
    );


}

export default StudentsManager;
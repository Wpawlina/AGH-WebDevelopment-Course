interface Student{
    firstName: string;
    lastName: string;
    age: number;
}

interface AddProps{
    addStudent: () => void;
}

function Add({addStudent}: AddProps) {
    return (
        <div>
        <button onClick={addStudent}>Dodaj</button>
        </div>
    )

}

export default Add;

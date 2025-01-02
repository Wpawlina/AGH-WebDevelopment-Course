interface AddButtonProps {
    addCounter: () => void;
}



function AddButton({addCounter} : AddButtonProps) {
  

  return (
    <button onClick={addCounter}>Dodaj</button>
  );
}

export default AddButton;
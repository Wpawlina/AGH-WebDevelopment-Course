import { useState } from "react";


function Update() {
    const [product , setProduct] = useState({name: "Pomidor", price:50});
    

    const changePrice = ()=>{
        setProduct((prev)=>({...prev, price: 100}));
    }

    return (
        <div>
            <div>Nazwa: {product.name}</div>
            <div>Cena: {product.price}</div>
            <button onClick={changePrice}>Zmień cenę</button>
            
            

        </div>
    )
}

export default Update;


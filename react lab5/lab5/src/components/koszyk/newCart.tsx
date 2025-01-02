import Product from  './product';

function NewCart(){

    const product=['apple','banana','orange','grape','watermelon'];

    return(
        <div>
            <h1>Nowy koszyk</h1>
                {product.map((item,index)=><Product name={item}  key={index}/>
                )}
        </div>
    )
}
export default NewCart;
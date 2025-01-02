type ProductProps = {
    name: string;
};

function Product({ name}: ProductProps) {
    return <h2>{name}</h2>;
}

export default Product;
import { useState } from "react";

function AddProduct({items}) {

    const products = [
        {id: '1', title: 'A Book', price: 59.99},
        {id: '2', title: 'A Carpet', price: 129.99},
        {id: '3', title: 'A guitar', price: 39.99},
    ]

    const [addProduct, setAddProduct] = useState();

    const item = <ul><li key={product.id}>{product.title}: {product.price}</li></ul>

    function handleSetAddProduct(event) {
        event.preventDefault();
        setAddProduct((curProducts) => [
            curProducts += item,
            ...curProducts,
        ]);
    }

    return (
        <>
            <button onClick={handleSetAddProduct}>Add Item</button>
            {item}
        </>
    )
}

export default AddProduct;
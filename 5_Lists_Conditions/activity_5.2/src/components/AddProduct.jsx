import { useState } from "react";

function AddProduct() {
    const [counter, setCounter] = useState(0);

    const [productList, setProductList] = useState([
        {id: '1', title: 'A Book', price: 59.99},
        {id: '2', title: 'A Carpet', price: 129.99},
        {id: '3', title: 'A guitar', price: 39.99},
    ])

    const [favList, setFavList] = useState([])

    function handleSetFavList(id) {
        const findItem = productList.find((item) => item.id === id);
        if (findItem) {
            const checkIfFav = favList.find((item) => item.id === id)
            if (!checkIfFav) {
                setFavList([...favList, findItem])
                setCounter(counter + 1);
            }
        }
    }

    return (
        <>
            <button 
                onClick={() => handleSetFavList(String(counter + 1))}
                disabled={counter >= productList.length}
            >
                Add Item
            </button>
            <ul>
                {favList.map(product => (
                    <li key={product.id}>
                        <h2>{product.title}</h2>
                        <p>${product.price}</p>
                    </li>
                )
                )}
            </ul>
        </>
    )
}

export default AddProduct;
const products = [
    {id: 'p1', title: 'A Book', price: 59.99},
    {id: 'p2', title: 'A Carpet', price: 129.99},
    {id: 'p3', title: 'A guitar', price: 39.99},
  ]

function ProductsList({products}) {
    const productElements = [];
    for (const product of products) {
        productElements.push((
            <li>
                <h2>{product.title}</h2>
                <p>${product.price}</p>
            </li>
        ));
    }
    return (
        <ul>
            {productElements}
        </ul>
    );
};

export default ProductsList;
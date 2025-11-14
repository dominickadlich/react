interface ItemType {
    name: string,
    isPacked: boolean
}

// function Item({ name, isPacked }: ItemType) {
//     return isPacked
//         ? <li className="item">{name} ✅</li>
//         : <li className="item">{name}</li>
// }

// DRY
// function Item({ name, isPacked }: ItemType) {
//     return <li className="item">
//      {isPacked ? <del> {name} ✅ </del> : name}
//     </li>
// }

// && Overload
function Item({ name, isPacked }: ItemType) {
    return <li className="item">
     {name} {isPacked && '✅'}
    </li>
}

export default function PackingList() {
    return (
        <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
            <Item 
                isPacked={true} 
                name="Space suit" 
            />
            <Item 
                isPacked={true} 
                name="Helmet with a golden leaf" 
            />
            <Item 
                isPacked={false} 
                name="Photo of Tam" 
            />
        </ul>
        </section>
    );
}
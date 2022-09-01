import Item from "./Item";

const ItemList = ({listitems}) => {
    console.log(listitems)
    return (
        <>
            {
                listitems.map((items) => {
                    return <Item key={items.id} items={items}/>
                })
            }
        </>
    )
}

export default ItemList;
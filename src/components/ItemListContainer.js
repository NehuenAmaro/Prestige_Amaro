import Product from "./items/Product";

const ItemListContainer = (props) => {

    return (
        <main className="vh-100 vw-75 m-auto mt-1">
            <h2 className="text-center font-w-400">{props.saludo}</h2>
            <Product/>
        </main>
    )
};

export default ItemListContainer;
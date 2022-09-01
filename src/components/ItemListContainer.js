import { useEffect, useState } from "react";
import {listProducts} from "../listProducts";
import ItemList from "./items/ItemList";

const ItemListContainer = (props) => {

    const [items,setItems] = useState([])

    useEffect(() => {
        const getProducts = new Promise((res, rej) => {
            setTimeout(() => {
                res(listProducts)
            }, 2000);
        });
    
        getProducts
        .then((data) => {
            setItems(data);
        })
        .catch((error) => {
            /* console.log('catch:', error); */
        })
        .finally(() => {
            /* console.log('Finally') */
        });

    }, []);
    
    return (
        <main className="vh-100 vw-75 m-auto mt-1">
            <h2 className="text-center font-w-400">{props.saludo}</h2>
            
            <div className="d-flex j-around mt-1">
                <ItemList listitems={items}/>
            </div>
        </main>
    )
};

export default ItemListContainer;
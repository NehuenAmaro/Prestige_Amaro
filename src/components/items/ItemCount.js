

const ItemCount = ({sumar, restar, onadd, initial}) => {
    
    return (
        <>
            <div className="d-flex a-center j-center border">
                <button className="size-1" onClick={sumar}>+</button>
                <p>{initial}</p>
                <button className="size-1" onClick={restar}>-</button>
                <button className=" w-100" onClick={onadd}>AGREGAR AL CARRITO</button>
            </div>
        </>
    )
}

export default ItemCount;
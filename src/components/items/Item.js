import ItemCount from "./ItemCount";
import React, {useState} from "react"


const Item = ({items}) => {

  const stock = items.stock
  const [initial,setInitial] = useState(1)

  const Sumar = () => {
      if (initial < stock) {
          setInitial(initial + 1);
      }
  }

  const Restar = () => {
      if (initial > 1) {
          setInitial(initial - 1);
      }
  }

  const onAdd = () => {
   alert('Agregaste ' + initial + ' Productos a tu carrito')
  }

  return (
    <div className="d-flex flex-d-column card shadow">
      <img className="img-card" src={items.img} alt={items.description} />
      <div className="info-card d-flex j-between px-10px">
        <h3 className="font-w-200 size-06 my-auto">
          {items.name}
        </h3>
        <h3 className="font-w-400 size-08">${items.price}</h3>
      </div>

      <ItemCount sumar={Sumar} restar={Restar} onadd={onAdd} initial={initial}/>

    </div>
  );
};

export default Item;

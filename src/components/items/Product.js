import ItemCount from "./ItemCount";
import React, {useState} from "react"


const Product = () => {

  const stock = 5
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
      <img className="img-card" src="./suite1.png" alt="Hombre con traje azul" />
      <div className="info-card d-flex j-between px-10px">
        <h3 className="font-w-200 size-06 my-auto">
          BLAZER TRAJE OJO DE PERDIZ
        </h3>
        <h3 className="font-w-400 size-08">18.900,00</h3>
      </div>

      <ItemCount sumar={Sumar} restar={Restar} onadd={onAdd} initial={initial}/>

    </div>
  );
};

export default Product;

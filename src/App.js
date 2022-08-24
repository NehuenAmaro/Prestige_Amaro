import Navbar from "./components/navbar";
import ItemListContainer from "./components/ItemListContainer";

import './styles.css'


const App = () => {
    return (
        <>
            <Navbar/>
            <ItemListContainer saludo="Bienvenido a Prestige"/>
        </>
    );
};

export default App;
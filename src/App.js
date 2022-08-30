import Navbar from "./components/navbar";
import Home from "./components/Home";
import ItemListContainer from "./components/ItemListContainer";

import './styles.css'


const App = () => {
    return (
        <>
            <Navbar/>
            <Home/>
            <ItemListContainer saludo="DESTACADOS"/>
        </>
    );
};

export default App;
import CartWidget from './CartWidget'

const Navbar = () => {
    return (
        
        <header className="bg-primary p-1 shadow">
            <nav className="d-flex j-between">
                <h1 className="font-primary size-2">Prestige</h1>
                <ul className="d-flex j-around a-center">
                    <li><a href="https://google.com" className="color-primary">Catalogo</a></li>
                    <li><a href="https://google.com" className="color-primary px-2">Descuentos</a></li>
                    <li><a href="https://google.com" className="color-primary">Ingresos</a></li>
                    <CartWidget className='size-2 ml-2' id='iconshop'/>
                </ul>
            </nav>
        </header>
    );
};



export default Navbar; 
  
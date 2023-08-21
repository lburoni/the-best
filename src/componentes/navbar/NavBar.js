import CartWidget from "../cartwidget/cartwidget"

const NavBar = () =>{
    return (
        <nav>
            <h3>Eccommerce</h3>
            <div id = "navbar">
                <button>Consolas</button>
                <button>Juegos ps4</button>
                <button>Juegos ps5</button>
                <button>Juegos xBox</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import Item from "../Item/Item";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  return (
    <article className="CardItem">
      <header className="Header">
        <h2 className="ItemHeader">{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className="ItemImg" />
      </picture>
      <section>
        <p className="Info">categoria: {category}</p>
        <p className="Info">descripcion: {description}</p>
        <p className="Info">Precio: ${price}</p>
      </section>
      <footer className="ItemFooter">
        <ItemCount
          initial={1}
          stock={stock}
          onAdd={(quantity) =>
            console.log("has agregado ", quantity, "productos")
          }
        />
      </footer>
    </article>
  );
};

export default ItemDetail;

import CartItemQTY from "./CartItemQTY"

export default function CartItem ({item, addToCart, removeFromCart}) {
    return(
        <li>
            <div>
            {item.image}
            {item.name}
            </div>
            <CartItemQTY 
            item={item}
            removeFromCart={removeFromCart}
            addToCart={addToCart}
            />
        </li>
    );
}
export default function CartItemQTY ({item, addToCart, removeFromCart}) {
return (
    <div className="itemQTY">
        <button onClick={() => removeFromCart(item)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => addToCart(item)}>+</button>
    </div>
);
}
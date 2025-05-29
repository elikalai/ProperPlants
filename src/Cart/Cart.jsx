import CartItem from "./CartItem";

export default function Cart ({cart, addToCart, removeFromCart}){
    return (
        <section>
        <h2>Cart</h2>
        {cart.length === 0 ? (
            <p>cart is empty</p>
        ) : (
            <>
            <ul>
                {cart.map((item) => (
                    <CartItem 
                    key={item.id}
                    item={item}
                    removeFromCart={removeFromCart}
                    addToCart={addToCart}
                    />
                ))}
            </ul>
            </>
        )}
        </section>
    );
}
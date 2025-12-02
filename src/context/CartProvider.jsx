import { useState } from "react";
import { CartContext } from "./CartContext";

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    function isInCart(id) {
        return cart.some((item) => item.id === id);
    }

    function addToCart(product) {
        setCart((prev) => {
            const existing = prev.find((item) => item.id === product.id);

            if (existing) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item,
                );
            }

            return [...prev, { ...product, quantity: 1 }];
        });
    }

    function removeFromCart(id) {
        setCart((prev) => prev.filter((item) => item.id !== id));
    }

    function increaseQty(id) {
        setCart((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item,
            ),
        );
    }

    function decreaseQty(id) {
        setCart((prev) =>
            prev
                .map((item) =>
                    item.id === id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item,
                )
                .filter((item) => item.quantity > 0),
        );
    }

    function getQuantity(id) {
        const item = cart.find((i) => i.id === id);
        return item ? item.quantity : 0;
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                isInCart,
                addToCart,
                removeFromCart,
                increaseQty,
                decreaseQty,
                getQuantity,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

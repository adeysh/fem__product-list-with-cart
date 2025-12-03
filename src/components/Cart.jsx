import { useState, useEffect } from "react";
import OrderOverlay from "./OrderOverlay";
import { useCart } from "../hooks/useCart";
import CartItem from "./CartItem";

const Cart = () => {
    const { cart } = useCart();
    const [showOverlay, setShowOverlay] = useState(false);

    const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart
        .reduce((sum, item) => sum + item.quantity * item.price, 0)
        .toFixed(2);

    function handleConfirm() {
        // Only scroll on mobile/tablet
        if (window.innerWidth < 1024) {
            window.scrollTo({ top: 0, behavior: "smooth" });

            setTimeout(() => {
                setShowOverlay(true);
            }, 1000);
        } else {
            setShowOverlay(true);
        }
    }

    useEffect(() => {
        if (showOverlay) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [showOverlay]);

    if (cart.length === 0) {
        return (
            <section className="flex flex-col gap-8 rounded-xl bg-rose-50 p-8">
                <h2 className="text-2xl font-bold text-red">Your Cart (0)</h2>
                <div className="flex flex-col items-center gap-2">
                    <img
                        src="/assets/images/illustration-empty-cart.svg"
                        alt="Cake slice"
                    />
                    <p className="text-base font-semibold text-rose-500">
                        Your added items will appear here
                    </p>
                </div>
            </section>
        );
    }

    return (
        <>
            <section className="flex flex-col gap-4 rounded-xl bg-rose-50 p-6">
                <h2 className="text-2xl font-bold text-red">
                    Your Cart ({totalQty})
                </h2>

                <ul className="flex flex-col gap-0">
                    {cart.map((item) => (
                        <li
                            key={item.id}
                            className="flex items-center justify-between border-b-2 border-rose-100 py-4"
                        >
                            <CartItem item={item} />
                        </li>
                    ))}
                </ul>

                <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-rose-500">
                        Order Total
                    </span>
                    <span className="text-2xl font-bold text-rose-900">
                        ${totalPrice}
                    </span>
                </div>
                <div className="flex items-center justify-center gap-2 rounded-xl bg-rose-100 p-4">
                    <img
                        src="/assets/images/icon-carbon-neutral.svg"
                        alt="carbon neutral"
                    />
                    <p className="text-sm text-rose-900">
                        This is a{" "}
                        <span className="font-semibold">carbon-neutral</span>{" "}
                        delivery
                    </p>
                </div>
                <button
                    type="button"
                    className="transition-filter cursor-pointer rounded-full bg-red p-3 text-rose-50 duration-300 hover:bg-red hover:brightness-90"
                    onClick={handleConfirm}
                >
                    Confirm Order
                </button>
            </section>

            {showOverlay && (
                <OrderOverlay onClose={() => setShowOverlay(false)} />
            )}
        </>
    );
};

export default Cart;

import { useState, useEffect } from "react";
import OrderOverlay from "./OrderOverlay";
import { useCart } from "../hooks/useCart";
import CartItem from "./CartItem";
import PrimaryButton from "./PrimaryButton";

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

    // No scrolling after opening overlay
    useEffect(() => {
        document.body.classList.toggle("no-scroll", showOverlay);

        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, [showOverlay]);

    // Empty Cart UI
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
            {/* CART PANEL */}
            <section className="flex flex-col gap-4 rounded-xl bg-rose-50 p-6">
                <h2 className="text-2xl font-bold text-red">
                    Your Cart ({totalQty})
                </h2>

                {/* CART ITEMS */}
                <ul className="flex flex-col">
                    {cart.map((item) => (
                        <li
                            key={item.id}
                            className="flex items-center justify-between border-b-2 border-rose-100 py-4"
                        >
                            <CartItem item={item} />
                        </li>
                    ))}
                </ul>

                {/* TOTAL PRICE */}
                <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-rose-500">
                        Order Total
                    </span>
                    <span className="text-2xl font-bold text-rose-900">
                        ${totalPrice}
                    </span>
                </div>

                {/* CARBON NOTICE */}
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

                <PrimaryButton onClick={handleConfirm}>
                    Confirm Order
                </PrimaryButton>
            </section>

            {/* ORDER OVERLAY */}
            {showOverlay && (
                <OrderOverlay onClose={() => setShowOverlay(false)} />
            )}
        </>
    );
};

export default Cart;

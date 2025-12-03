import { useCart } from "../hooks/useCart";
import { useMediaQuery } from "../hooks/useMediaQuery";
import CartItem from "./CartItem";
import OrderSummaryItem from "./OrderSummaryItem";

const OrderOverlay = ({ onClose }) => {
    const { cart, clearCart } = useCart();
    const isLargeScreen = useMediaQuery("(width >= 64rem)");

    const totalPrice = cart
        .reduce((sum, item) => sum + item.quantity * item.price, 0)
        .toFixed(2);

    function handleStartNewOrder() {
        clearCart();
        onClose();
    }

    return (
        <div
            className={`fixed inset-0 z-50 flex bg-rose-500/50 backdrop-blur-[2px] ${isLargeScreen ? "items-center justify-center" : ""}`}
        >
            <div
                className={`flex animate-slide-up flex-col gap-8 overflow-auto bg-rose-50 shadow-2xl ${isLargeScreen ? "mt-0 rounded-xl p-10" : "mt-22 w-full rounded-t-xl p-6"}`}
            >
                <div>
                    <img
                        src="/assets/images/icon-order-confirmed.svg"
                        alt="Confirmed"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="text-4xl font-bold text-rose-900">
                        Order Confirmed
                    </h2>
                    <p className="text-rose-500">
                        We hope you enjoy your food!
                    </p>
                </div>

                <div className="flex flex-col gap-4 rounded-xl bg-rose-100 p-4">
                    <div className="max-h-80 overflow-y-auto pr-2">
                        <ul className="flex flex-col gap-4">
                            {cart.map((item) => (
                                <li
                                    key={item.id}
                                    className="flex items-center justify-between border-b-2 border-rose-300/10 pb-4"
                                >
                                    <OrderSummaryItem item={item} />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-rose-500">
                            Order Total
                        </span>
                        <span className="text-2xl font-bold text-rose-900">
                            ${totalPrice}
                        </span>
                    </div>
                </div>
                <button
                    type="button"
                    onClick={handleStartNewOrder}
                    className="cursor-pointer rounded-full bg-red p-3 text-rose-50"
                >
                    Start New Order
                </button>
            </div>
        </div>
    );
};

export default OrderOverlay;

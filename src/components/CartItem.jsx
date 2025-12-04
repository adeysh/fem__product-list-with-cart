import { useCart } from "../hooks/useCart";
import { useMediaQuery } from "../hooks/useMediaQuery";

const CartItem = ({ item }) => {
    const { removeFromCart } = useCart();
    const isLargeScreen = useMediaQuery("(width >= 64rem)");

    return (
        <div className="flex w-full items-center justify-between">
            {/* Left NAME + QTY */}
            <div className="flex flex-col gap-2">
                <p
                    className={`truncate font-semibold whitespace-nowrap text-rose-900 ${isLargeScreen ? "" : "max-w-item-name"}`}
                >
                    {item.name}
                </p>

                <div className="flex items-center gap-4 text-sm">
                    <span className="font-semibold text-red">
                        {item.quantity}x
                    </span>
                    <span className="text-rose-400">
                        @ ${item.price.toFixed(2)}
                    </span>
                    <span className="font-semibold text-rose-500">
                        ${(item.price * item.quantity).toFixed(2)}
                    </span>
                </div>
            </div>

            {/* REMOVE BUTTON */}
            <button
                type="button"
                onClick={() => removeFromCart(item.id)}
                className="group cursor-pointer rounded-full border-2 border-rose-300 p-0.5 hover:border-rose-900"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    fill="none"
                    viewBox="0 0 10 10"
                    alt="Remove"
                    className="fill-rose-300 transition-colors duration-300 ease-in-out group-hover:fill-rose-900"
                >
                    <path d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z" />
                </svg>
            </button>
        </div>
    );
};

export default CartItem;

import { useCart } from "../hooks/useCart";
import QuantityButton from "./QuantityButton";

const AddToCartButton = ({ selected, product }) => {
    const { addToCart, increaseQty, decreaseQty, getQuantity } = useCart();

    const quantity = getQuantity(product.id);

    if (!selected) {
        // Product NOT in cart → Show Add to Cart Button
        return (
            <button
                type="button"
                onClick={() => addToCart(product)}
                className={`add-to-cart-ui cursor-pointer items-center justify-center gap-2 px-6 py-2 transition-colors duration-300 ease-in-out hover:text-red focus:outline-none focus-visible:text-red focus-visible:ring-2 focus-visible:ring-red focus-visible:ring-offset-2 ${
                    selected ? "bg-red text-rose-50" : "border-red bg-rose-50"
                }`}
                aria-label={`Add ${product.name} to cart`}
            >
                <img
                    src="/assets/images/icon-add-to-cart.svg"
                    alt="Add to cart"
                    aria-hidden="true"
                />
                Add to Cart
            </button>
        );
    }

    // Product IS in cart → Show Quantity Selector
    return (
        <div
            className={`add-to-cart-ui items-center justify-between gap-12 px-3 py-2 ${
                selected
                    ? "border-red bg-red text-rose-50"
                    : "border-rose-400 bg-rose-50"
            }`}
            role="group"
            aria-label={`${product.name} quantity controls`}
        >
            {/* DECREASE BUTTON */}
            <QuantityButton
                onClick={() => decreaseQty(product.id)}
                aria-label={`Decrease quantity of ${product.name}`}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="2"
                    fill="none"
                    viewBox="0 0 10 2"
                    className="qty-icon"
                    aria-hidden="true"
                >
                    <path d="M0 .375h10v1.25H0V.375Z" />
                </svg>
            </QuantityButton>

            {/* QUANTITY DISPLAY */}
            <span className="inline-block w-2 text-center" aria-live="polite">
                {quantity}
            </span>

            {/* INCREASE BUTTON */}
            <QuantityButton
                onClick={() => increaseQty(product.id)}
                aria-label={`Increase quantity of ${product.name}`}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    fill="none"
                    viewBox="0 0 10 10"
                    className="qty-icon"
                    aria-hidden="true"
                >
                    <path d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" />
                </svg>
            </QuantityButton>
        </div>
    );
};

export default AddToCartButton;

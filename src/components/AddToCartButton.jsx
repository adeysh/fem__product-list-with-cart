import { useCart } from "../hooks/useCart";
import QuantityButton from "./QuantityButton";

const AddToCartButton = ({ selected, product }) => {
    const { addToCart, increaseQty, decreaseQty, getQuantity } = useCart();

    const quantity = getQuantity(product.id);

    if (!selected) {
        // Product NOT in cart → Show Add to Cart Button
        return (
            <button
                onClick={() => addToCart(product)}
                className={`absolute -bottom-5 left-1/2 flex -translate-x-1/2 cursor-pointer items-center justify-center gap-2 rounded-full border border-solid px-6 py-2 font-semibold whitespace-nowrap transition-colors duration-300 ease-in-out hover:text-red focus:outline-none focus-visible:text-red focus-visible:ring-2 focus-visible:ring-red focus-visible:ring-offset-2 ${
                    selected ? "bg-red text-rose-50" : "border-red bg-rose-50"
                }`}
            >
                <img
                    src="/assets/images/icon-add-to-cart.svg"
                    alt="Add to cart"
                />
                Add to Cart
            </button>
        );
    }

    // Product IS in cart → Show Quantity Selector
    return (
        <div
            className={`absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center justify-between gap-12 rounded-full border border-solid px-3 py-2 font-semibold whitespace-nowrap ${
                selected
                    ? "border-red bg-red text-rose-50"
                    : "border-rose-400 bg-rose-50"
            }`}
        >
            <QuantityButton onClick={() => decreaseQty(product.id)}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="2"
                    fill="none"
                    viewBox="0 0 10 2"
                    className="fill-rose-50 transition-colors duration-300 ease-in-out group-hover:fill-red group-focus-visible:fill-red"
                >
                    <path d="M0 .375h10v1.25H0V.375Z" />
                </svg>
            </QuantityButton>

            <span className="inline-block w-2 text-center">{quantity}</span>

            <QuantityButton onClick={() => increaseQty(product.id)}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    fill="none"
                    viewBox="0 0 10 10"
                    className="fill-rose-50 transition-colors duration-300 ease-in-out group-hover:fill-red group-focus-visible:fill-red"
                >
                    <path d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" />
                </svg>
            </QuantityButton>
        </div>
    );
};

export default AddToCartButton;

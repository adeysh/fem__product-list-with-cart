import { useCart } from "../hooks/useCart";

const AddToCartButton = ({ selected, product }) => {
    const { addToCart, increaseQty, decreaseQty, getQuantity } = useCart();

    const quantity = getQuantity(product.id);

    if (!selected) {
        // Product NOT in cart → Show Add to Cart Button
        return (
            <button
                onClick={() => addToCart(product)}
                className={`absolute -bottom-5 left-1/2 flex -translate-x-1/2 cursor-pointer items-center justify-center gap-2 rounded-full border border-solid px-6 py-2 font-semibold whitespace-nowrap ${
                    selected
                        ? "bg-red text-rose-50"
                        : "border-rose-400 bg-rose-50"
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
            className={`absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center justify-between gap-12 rounded-full border border-solid p-2 font-semibold whitespace-nowrap ${
                selected
                    ? "border-red bg-red text-rose-50"
                    : "border-rose-400 bg-rose-50"
            }`}
        >
            <button
                className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border border-rose-50 p-0"
                onClick={() => decreaseQty(product.id)}
            >
                <img
                    src="/assets/images/icon-decrement-quantity.svg"
                    alt="Decrement Quantity"
                />
            </button>

            <span className="inline-block w-2 text-center">{quantity}</span>

            <button
                className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border border-rose-50 p-0"
                onClick={() => increaseQty(product.id)}
            >
                <img
                    src="/assets/images/icon-increment-quantity.svg"
                    alt="Increment Quantity"
                />
            </button>
        </div>
    );
};

export default AddToCartButton;

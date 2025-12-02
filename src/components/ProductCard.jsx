import AddToCartButton from "./AddToCartButton";
import { useCart } from "../hooks/useCart";

const ProductCard = ({ product }) => {
    const { isInCart } = useCart();

    const selected = isInCart(product.id);

    return (
        <div className="flex flex-col gap-8">
            <div className="relative">
                <img
                    src={product.image.mobile}
                    alt={product.name}
                    className={`h-auto w-full rounded-xl border-2 object-cover ${
                        selected ? "border-red" : "border-transparent"
                    }`}
                />
                <AddToCartButton selected={selected} product={product} />
            </div>
            <div className="flex flex-col gap-1">
                <p className="font-sem text-sm text-rose-400">
                    {product.category}
                </p>
                <p className="text-body font-semibold text-rose-900">
                    {product.name}
                </p>
                <p className="text-body font-semibold text-red">
                    ${product.price.toFixed(2)}
                </p>
            </div>
        </div>
    );
};

export default ProductCard;

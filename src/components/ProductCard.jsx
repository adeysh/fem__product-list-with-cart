import AddToCartButton from "./AddToCartButton";
import { useCart } from "../hooks/useCart";

const ProductCard = ({ product }) => {
    const { isInCart } = useCart();
    const selected = isInCart(product.id);

    return (
        <div className="flex flex-col gap-8">
            <div className="relative">
                {/* RESPONSIVE IMAGE */}
                <picture>
                    {/* Desktop */}
                    <source
                        media="(width >= 64rem)"
                        srcSet={product.image.desktop}
                    />
                    {/* Tablet */}
                    <source
                        media="(width >= 40rem)"
                        srcSet={product.image.tablet}
                    />
                    {/* Mobile (default) */}
                    <img
                        src={product.image.mobile}
                        alt={product.name}
                        loading="lazy"
                        className={`h-auto w-full rounded-xl border-2 object-cover transition-colors duration-300 ${
                            selected ? "border-red" : "border-transparent"
                        }`}
                    />
                </picture>

                {/* ADD TO CART BUTTON */}
                <AddToCartButton selected={selected} product={product} />
            </div>

            {/* PRODUCT INFO */}
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

import ProductCard from "./ProductCard";

// Renders a responsive grid of product cards
const ProductList = ({ products = [] }) => {
    if (!products.length) return null;

    return (
        <section aria-label="Product list">
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                    <li key={product.id}>
                        <ProductCard product={product} />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default ProductList;

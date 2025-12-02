import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
    return (
        <section>
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => {
                    return (
                        <li key={product.id}>
                            <ProductCard product={product} />
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default ProductList;

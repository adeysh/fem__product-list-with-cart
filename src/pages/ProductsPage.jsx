import products from "/src/data.json";
import Cart from "../components/Cart";
import Header from "../components/Header";
import ProductList from "../components/ProductList";

const ProductsPage = () => {
    return (
        <main className="flex w-full flex-col gap-8 bg-rose-100 p-6 md:px-0">
            <Header />
            <ProductList products={products} />
            <Cart />
        </main>
    );
};

export default ProductsPage;

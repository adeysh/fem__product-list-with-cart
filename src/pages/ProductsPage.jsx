import products from "/src/data.json";
import Cart from "../components/Cart";
import Header from "../components/Header";
import ProductList from "../components/ProductList";

const ProductsPage = () => {
    return (
        <main className="flex w-full max-w-360 flex-col gap-8 bg-rose-100 p-6 lg:flex-row lg:p-24">
            <div className="flex w-full flex-2 flex-col gap-8">
                <Header />
                <ProductList products={products} />
            </div>
            <div className="flex w-full flex-1 flex-col">
                <Cart />
            </div>
        </main>
    );
};

export default ProductsPage;

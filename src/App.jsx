import ProductsPage from "./pages/ProductsPage";
import { CartProvider } from "./context/CartProvider";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            {/* Global Cart context for the whole application */}
            <CartProvider>
                {/* Main page layout */}
                <ProductsPage />
            </CartProvider>

            <Footer />
        </>
    );
}

export default App;

import ProductsPage from "./pages/ProductsPage";
import { CartProvider } from "./context/CartProvider";

function App() {
    return (
        // Global Cart context for the whole application
        <CartProvider>
            {/* Main page layout */}
            <ProductsPage />
        </CartProvider>
    );
}

export default App;

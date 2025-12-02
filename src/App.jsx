import ProductsPage from "./pages/ProductsPage";
import { CartProvider } from "./context/CartProvider";

function App() {
    return (
        <CartProvider>
            <ProductsPage />
        </CartProvider>
    );
}

export default App;

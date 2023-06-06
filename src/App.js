import Navbar from "./components/Navbar";
import Product from "./components/Product";
import { ProductContextProvider } from "./context/ProductContext";
import "./styles/App.css";

function App() {
  return (
    <ProductContextProvider>
      <Navbar />
      <Product />
    </ProductContextProvider>
  );
}

export default App;

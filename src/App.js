import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Deliver from "./pages/Deliver";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";
import { createContext, useEffect, useState } from "react";
import { getDocs } from "firebase/firestore/lite";
import { categoryCollection, productCollection } from "./firebase";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

// Создать контекст, который будет хранить данные.
export const AppContext = createContext({
  categories: [],
  products: [],

  //контекст для корзины
  cart: {}, //содержимое корзины
  setCart: () => {}, //изменить содержимое корзины
});

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  useEffect(() => {
    // выполнить только однажды
    getDocs(categoryCollection) // получить категории
      .then(({ docs }) => {
        // когда категории загрузились
        setCategories(
          // обновить состояние
          docs.map((doc) => ({
            // новый массив
            ...doc.data(), // из свойств name, slug
            id: doc.id, // и свойства id
          }))
        );
      });

    getDocs(productCollection) // получить категории
      .then(({ docs }) => {
        // когда категории загрузились
        setProducts(
          // обновить состояние
          docs.map((doc) => ({
            // новый массив
            ...doc.data(), // из свойств name, slug
            id: doc.id, // и свойства id
          }))
        );
      });
  }, []);

  return (
    <div className="App">
      <AppContext.Provider value={{ categories, products, cart, setCart }}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/delivery" element={<Deliver />} />
            <Route path="/categories/:slug" element={<Category />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/products/:slug" element={<Product />} />
            <Route path="/cart" elemant={<Cart />} />

          </Routes>
        </Layout>
      </AppContext.Provider>
    </div>
  );
}

export default App;

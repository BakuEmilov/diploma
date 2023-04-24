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
import { categoryCollection, onAuthChange, productCollection } from "./firebase";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import ThankYou from "./pages/ThankYou";

// Создать контекст, который будет хранить данные.
export const AppContext = createContext({
  categories: [],
  products: [],

  //контекст для корзины
  cart: {}, //содержимое корзины
  setCart: () => {}, //изменить содержимое корзины

  user: null,
});

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || {};
  });

  const [user, setUser] = useState(null);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

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
        )
      });

      getDocs(productCollection) // получить категории
      .then(({ docs }) => { // когда категории загрузились
        setProducts( // обновить состояние
          docs.map(doc => ({ // новый массив
            ...doc.data(), // из свойств name, slug
            id: doc.id // и свойства id
          }))
        )
      });

    onAuthChange(user => {
      setUser(user);
    });
  }, []);

  return (
    <div className="App">
      <AppContext.Provider value={{ categories, products, cart, setCart, user }}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/delivery" element={<Deliver />} />
            <Route path="/categories/:slug" element={<Category />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/products/:slug" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
        </Layout>
      </AppContext.Provider>
    </div>
  );
}

export default App;

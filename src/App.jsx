import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Checkout from "./pages/Checkout";

// Lazy loading for other pages
const Home = lazy(() => import("./pages/Home"));
const ProductList = lazy(() => import("./pages/ProductList"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const Contact = lazy(() => import("./pages/Contact")); // Add the lazy import for Contact page
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow p-4">
            <Suspense fallback={<div className="text-center text-lg">Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/contact" element={<Contact />} /> {/* Add route for Contact page */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;

import React, { lazy, Suspense } from "react"; // Import
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Routing
import { Provider } from "react-redux"; // Redux
import store from "./redux/store"; // Store
import Header from "./components/Header"; // Header
import Footer from "./components/Footer"; // Footer
import Checkout from "./pages/Checkout"; // Checkout

// Lazy loading for other pages
const Home = lazy(() => import("./pages/Home")); // Home
const ProductList = lazy(() => import("./pages/ProductList")); // Products
const ProductDetails = lazy(() => import("./pages/ProductDetails")); // Details
const Contact = lazy(() => import("./pages/Contact")); // Contact
const NotFound = lazy(() => import("./pages/NotFound")); // 404

const App = () => {
  return (
    <Provider store={store}> {/* Store */}
      <Router> {/* Router */}
        <div className="flex flex-col min-h-screen">
          <Header /> {/* Header */}
          <main className="flex-grow p-4"> {/* Main */}
            <Suspense fallback={<div className="text-center text-lg">Loading...</div>}> {/* Suspense */}
              <Routes> {/* Routes */}
                <Route path="/" element={<Home />} /> {/* Home */}
                <Route path="/products" element={<ProductList />} /> {/* Products */}
                <Route path="/product/:id" element={<ProductDetails />} /> {/* Details */}
                <Route path="/checkout" element={<Checkout />} /> {/* Checkout */}
                <Route path="/contact" element={<Contact />} /> {/* Contact */}
                <Route path="*" element={<NotFound />} /> {/* 404 */}
              </Routes>
            </Suspense>
          </main>
          <Footer /> {/* Footer */}
        </div>
      </Router>
    </Provider>
  );
};

export default App; // Export

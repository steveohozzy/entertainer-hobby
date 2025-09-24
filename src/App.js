import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import CheckoutLayout from "./components/layout/CheckoutLayout";
import Plp from "./routes/plp/Plp";
import Checkout from "./routes/checkout/Checkout";
import Cart from "./routes/cart/Cart";
import ProductDetails from "./routes/pdp/ProductDetails";
import Home from "./routes/home/Home";
import HomeTiled from "./routes/home/HomeTiled";
import Account from "./routes/account/Account";
import HomeTabs from "./routes/home/HomeTabs";
import Wishlist from "./routes/wishlist/Wishlist";
import Events from "./routes/events/Events";
import SearchResults from "./routes/search/Search";
import Brands from "./routes/brandsPage/Brands";
import PresentFinder from "./routes/presentFinder/PresentFinder";
import Confirmation from "./routes/confirmation/Confirmation";
import StoreFinderPage from "./routes/storeFinder/StoreFinder";
import Hotspot from "./routes/hotspot/Hotspot";

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/tabs" element={<HomeTabs />} />
        <Route path="/tiled" element={<HomeTiled />} />
        <Route path="/category/*" element={<Plp />} />
        <Route path="/search/:id" element={<SearchResults />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/account" element={<Account />} />
        <Route path="/events" element={<Events />} />
        <Route path="/brands/:id" element={<Brands />} />
        <Route path="/present-finder/*" element={<PresentFinder />} />
        <Route path="/confirmation/" element={<Confirmation />} />
        <Route path="/store-finder" element={<StoreFinderPage />} />
        <Route path="/hotspot" element={<Hotspot />} />
      </Route>
      <Route path="/" element={<CheckoutLayout />}>
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;

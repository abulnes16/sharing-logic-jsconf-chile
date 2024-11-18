import { NavBar } from '@e-commerce-sharling-logic/ui';
import {
  CartPage,
  HomePage,
  ProductDetailPage,
  ProfilePage,
  SuccessCartPage,
} from '@web/pages';
import { Routes, Route } from 'react-router-dom';

function HomeNavigator() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/success" element={<SuccessCartPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </>
  );
}

export default HomeNavigator;

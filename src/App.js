import React from "react";
import { Routes, Route } from "react-router-dom";

import { Navbar } from './components'
import { Home, AddProductAdmin, AddTopingAdmin, Cart, DetailProduct, IncomeTransactionAdmin, Profile } from './pages'

function App() {

  let isAdmin = true

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={ isAdmin ? <IncomeTransactionAdmin/> : <Home />} />
        <Route path="/add-product" element={<AddProductAdmin />} />
        <Route path="/add-toping" element={<AddTopingAdmin />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail-product/:id" element={<DetailProduct />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;

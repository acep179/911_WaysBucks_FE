import {React, useContext} from "react";
import { Routes, Route } from "react-router-dom";

import { Navbar, PrivateRoute } from './components'
import { UserContext } from "./context/userContext";
import { Home, AddProductAdmin, AddTopingAdmin, Cart, DetailProduct, IncomeTransactionAdmin, Profile } from './pages'

function App() {

  const [state] = useContext(UserContext)
  let isLogin = state.isLogin
  let isAdmin = state.user[0].status === "admin" ? true : false

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={ isLogin ? (isAdmin ? <IncomeTransactionAdmin/> : <Home />) : <Home/>} />
        <Route exact path="/" element={<PrivateRoute />}>
        <Route path="/add-product" element={<AddProductAdmin />} />
        <Route path="/add-toping" element={<AddTopingAdmin />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail-product/:id" element={<DetailProduct />} />
        <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

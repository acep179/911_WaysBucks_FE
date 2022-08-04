import { React } from "react"
import { Link } from 'react-router-dom'

import logo from "../assets/img/waysbuck_logo.png"
import iconCart from "./../assets/img/cart_icon.png"
import userPhoto from "./../assets/img/user_photo.png"
import userIcon from "./../assets/img/user_icon.png"
import logoutIcon from "./../assets/img/logout_icon.png"


function Navbar() {

  let isLogin = true
  let isAdmin = false

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white fixed-top">
        <div className="container-lg">
          <a className="navbar-brand me-5" href="/">
            <img src={logo} style={{ height: 60 }} alt="logo" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon bg-pink"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            {isLogin ? (
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 position-relative d-flex align-items-center">
                <li className="nav-item cursor-pointer">
                  <img src={iconCart} alt="cart" />
                </li>

                <li>
                  <div className="rounded-circle nav-photo ms-3" style={{ backgroundImage: `url(${userPhoto})` }}>
                    {isAdmin ? (
                      <div className="menu-drop" style={{ width: 300 }}>

                        <div>
                          <Link to='add-product' className="d-flex align-items-center p-3">
                            <img src={userIcon} alt="profile icon" />
                            <p className="ms-3">Add Product</p>
                          </Link>
                          <Link to='add-topping' className="d-flex align-items-center p-3">
                            <img src={userIcon} alt="profile icon" />
                            <p className="ms-3">Add Topping</p>
                          </Link>
                        </div>

                        <span className="d-flex align-items-center p-3">
                          <img src={logoutIcon} alt="logout icon" />
                          <p className="ms-3">Logout</p>
                        </span>

                      </div>
                    ) : (
                      <div className="menu-drop">
                        <div>
                          <Link to='profile' className="d-flex align-items-center p-3">
                            <img src={userIcon} alt="profile icon" />
                            <p className="ms-3">Profile</p>
                          </Link>
                        </div>
                        <span className="d-flex align-items-center p-3">
                          <img src={logoutIcon} alt="logout icon" />
                          <p className="ms-3">Logout</p>
                        </span>
                      </div>
                    )}
                  </div>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <button type="button" className="btn btn-reverse-red px-4 py-1" data-bs-toggle="modal" data-bs-target="#login">
                    Login
                  </button>
                </li>
                <li className="nav-item">
                  <button type="button" className="btn btn-red ms-3 px-4 py-1" data-bs-toggle="modal" data-bs-target="#register">
                    Register
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
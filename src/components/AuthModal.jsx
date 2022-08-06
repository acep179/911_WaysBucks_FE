import { React, useContext, useState } from 'react'
import { UserContext } from '../context/userContext';

import userData from './../fakeData/userData'

function AuthModal() {

  const [state, dispatch] = useContext(UserContext)
  const [message, setMessage] = useState(null)


  //. Login 
  const [formLogin, setFormLogin] = useState({
    loginEmail: '',
    loginPassword: '',
  });

  const { loginEmail, loginPassword } = formLogin;

  const handleChangeLogin = (e) => {
    setFormLogin({
      ...formLogin,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault()

    let response = userData.filter((item) => {
      return item.email === formLogin.loginEmail
    })

    if (response.length === 0) {
      setMessage(
        <div class="alert alert-danger" role="alert">
          Email Belum Terdaftar!
        </div>
      )
    } else if (response[0].password === formLogin.loginPassword) {
      response = {
        status: 'success',
        user: response
      }
    } else {
      response = { status: 'failed' }
    }

    if (response.status === 'success') {
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: response.user
      })

      setFormLogin({
        loginEmail: '',
        loginPassword: '',
      })
    }
    console.log(state)

  }

  // const register = {

  // }

  return (
    <div>
      <div className="modal fade" id="login" aria-hidden="true" aria-labelledby="loginLabel" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              {message && message}
              <h1 className="modal-title text-red bold mb-4" id="login">Login</h1>

              <form onSubmit={(e) => handleSubmitLogin(e)}>
                <div className="mb-3">
                  <input type="email" className="form-control input-red" id="loginEmail" name="loginEmail" value={loginEmail} onChange={handleChangeLogin} placeholder="Email" />
                </div>
                <div className="mb-3">
                  <input type="password" className="form-control input-red" id="loginPassword" name="loginPassword" value={loginPassword} onChange={handleChangeLogin} placeholder="Password" />
                </div>
                <div className="d-grid gap-2 mb-3">
                  <button className="btn btn-red">Login</button>
                </div>
              </form>

              <p className="text-center" >Don't have an account? Click <strong itemType='button' className="cursor-pointer" data-bs-target="#register" data-bs-toggle="modal">Here</strong></p>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="register" aria-hidden="true" aria-labelledby="loginLabel2" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <h1 className="modal-title text-red bold mb-4" id="register">Register</h1>

              <form id="register" >
                <div className="mb-3">
                  <input type="email" className="form-control input-red" id="registerEmail" name="registerEmail" placeholder="Email" />
                </div>
                <div className="mb-3">
                  <input type="password" className="form-control input-red" id="registerPassword" name="registerPassword" placeholder="Password" />
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control input-red" id="registerName" name="registerName" placeholder="Full Name" />
                </div>
                <div className="d-grid gap-2 mb-3">
                  <button className="btn btn-red" type="button">Register</button>
                </div>
              </form>

              <p className="text-center">Already have an account? Click <strong className="cursor-pointer" data-bs-target="#login" data-bs-toggle="modal">Here</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthModal
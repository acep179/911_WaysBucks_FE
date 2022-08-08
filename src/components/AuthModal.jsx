import { React, useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/userContext';

import userData from './../fakeData/userData'

function AuthModal() {

  const [state, dispatch] = useContext(UserContext)
  const [message, setMessage] = useState(null)

  let closeModal

  useEffect(() => {
    closeModal = document.getElementById('closeModal')
  })

  //. Login 
  const [formLogin, setFormLogin] = useState({
    loginEmail: '',
    loginPassword: '',
  });

  const handleChangeLogin = (e) => {
    setFormLogin({
      ...formLogin,
      [e.target.name]: e.target.value,
    });
  };

  const { loginEmail, loginPassword } = formLogin;

  const handleSubmitLogin = (e) => {
    e.preventDefault()

    let response = userData.filter((item) => {
      return item.email === loginEmail
    })

    if (response.length === 0) {
      setMessage(
        <div className="alert alert-danger" role="alert">
          Email Belum Terdaftar!
        </div>
      )
    } else if (response[0].password === loginPassword) {
      response = {
        status: 'success',
        user: response
      }
    } else {
      setMessage(
        <div className="alert alert-danger" role="alert">
          Password Salah!
        </div>
      )
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

      closeModal.click()
      console.log(state)
    }

  }


  //. Register 

  const [formRegister, setFormRegister] = useState({
    registerName: '',
    registerEmail: '',
    registerPassword: '',
  });

  const handleChangeRegister = (e) => {
    setFormRegister({
      ...formRegister,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitRegister = (e) => {
    e.preventDefault()

    userData.push(formRegister)
  }



  return (
    <div>
      <div className="modal fade" id="login" aria-hidden="true" aria-labelledby="loginLabel" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div data-bs-dismiss="modal" id='closeModal'></div>
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

              <form id="register" onSubmit={(e) => handleSubmitRegister(e)} >
                <div className="mb-3">
                  <input type="text" onChange={handleChangeRegister} className="form-control input-red" id="registerName" name="registerName" placeholder="Full Name" />
                </div>
                <div className="mb-3">
                  <input type="email" onChange={handleChangeRegister} className="form-control input-red" id="registerEmail" name="registerEmail" placeholder="Email" />
                </div>
                <div className="mb-3">
                  <input type="password" onChange={handleChangeRegister} className="form-control input-red" id="registerPassword" name="registerPassword" placeholder="Password" />
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
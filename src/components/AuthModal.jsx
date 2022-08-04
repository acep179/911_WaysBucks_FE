import React from 'react'

function AuthModal() {
  return (
    <div>
      <div className="modal fade" id="login" aria-hidden="true" aria-labelledby="loginLabel" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <h1 className="modal-title text-red bold mb-4" id="login">Login</h1>
              <form>
                <div className="mb-3">
                  <input type="email" className="form-control input-red" id="email" name="email" placeholder="Email" />
                </div>
                <div className="mb-3">
                  <input type="password" className="form-control input-red" id="password" name="password" placeholder="Password" />
                </div>
                <div className="d-grid gap-2 mb-3">
                  <button className="btn btn-red" type="button">Login</button>
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
                  <input type="email" className="form-control input-red" id="email" name="email" placeholder="Email" />
                </div>
                <div className="mb-3">
                  <input type="password" className="form-control input-red" id="password" name="password" placeholder="Password" />
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control input-red" id="fullName" name="fullName" placeholder="Full Name" />
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
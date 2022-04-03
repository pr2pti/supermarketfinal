import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
export default function Register() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <div className="register">
          <div className="container">
            <h2>Register Here</h2>
            <div className="login-form-grids">
              <h5>profile information</h5>

              <form >
                <div>
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    placeholder="First Name..."
                    required
                  />
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    placeholder="Last Name..."
                    required
                  />
                </div>
                <div className="register-check-box">
                  <div className="check">
                    <label className="checkbox">
                      <input type="checkbox" id="subsnews" name="subsnews" />
                      <i> </i>Subscribe to Newsletter
                    </label>
                  </div>
                </div>
                <h6>Login information</h6>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  required
                />
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  required
                />
                <input
                  type="password"
                  id="confirm_password"
                  name="confirm_password"
                  placeholder="Password Confirmation"
                  required
                />
                <input
                  type="number"
                  id="mobile_number"
                  name="mobile_number"
                  placeholder="Mobile Number"
                  maxLength={10}
                  required
                />
                <div className="register-check-box">
                  <div className="check">
                    <label className="checkbox">
                      <input type="checkbox" name="tnc" id="tnc" />
                      <i> </i>I accept the terms and conditions
                    </label>
                  </div>
                </div>
                <input type="submit" value="Register" />
              </form>
            </div>
            <div className="register-home">
              <Link to="/">Home</Link>
            </div>
          </div>
        </div>
<Footer/>
    </div>
  )
}

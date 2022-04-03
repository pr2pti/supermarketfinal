import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div>
        <Header/>
        <Navbar/>
      <div className="login">
		<div className="container">
			<h2>Login Form</h2>
		
			<div className="login-form-grids animated wow slideInUp" data-wow-delay=".5s">
				<form>
					<input type="email" placeholder="Email Address"  />
					<input type="password" placeholder="Password"  />
					<div className="forgot">
						<a href="#">Forgot Password?</a>
					</div>
					<input type="submit" value="Login"/>
				</form>
			</div>
			<h4>For New People</h4>
			<p> <Link to="/register">Register</Link> <span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span></p>
		</div>
	</div>
    <Footer/>
    </div>
  )
}

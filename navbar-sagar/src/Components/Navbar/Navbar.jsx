import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";



export default function Navbar () {

    return (
        <div>
            <div className="class">
            <Link to="/"><div className="logo"></div></Link>
            <ul class="happy-nav">
                <li class="  ">
                    <span className="header-sprite nav-icon-flights gr-append-right5">
                    </span><Link className="link" to="/flights">Flights</Link></li><li class="  ">
                
                    <span className="header-sprite nav-icon-hotels gr-append-right5">
                    </span><Link className="link" to="/hotels">Hotels</Link></li><li class="  ">
                
                    <span className="header-sprite nav-icon-trains gr-append-right5">
                    </span><Link className="link" to="/trains">Trains</Link></li><li class="  ">
                
                    <span className="header-sprite nav-icon-cabs gr-append-right5">
                    </span><Link className="link" to="/cabs">Cabs</Link></li><li class="active  ">
                
                    <span className="header-sprite nav-icon-bus gr-append-right5">
                    </span><Link className="link" to="/bus">Bus</Link></li>
            </ul>
            <div className="gr-make-flex hrtl-center gr-push-right">
               
                    <div className="mytrip__tab gr-append-right20" role="presentation">
                        <span className="header-sprite mytrip-icon gr-append-right10">
                        </span>
                        <span>
                            <div><p className="gr-font10 gr-light gr-helvetica gr-color666">Manage Booking</p>
                                <p className="gr-font14 gr-quicksand gr-bold gr-color333 hype">My Trips</p>
                            </div></span><div className="tooltip gr-grey-text--dark">
                            <p>Access your bookings, easy cancellation, date change and much more</p>
                        </div></div>
                <div className="login__tab gotrible" role="presentation">
                    <span className="header-sprite user-icon gr-append-right5">
                    </span>
                    <div className="gr-font10" role="presentation" id="get_sign_in">
                <p className="gr-cap-text gr-blue-text gr-bold" >Login or Signup</p>
                    </div></div></div>
            
            <div id="id01" className="sign-in">
                <div className="modal-content" action="">
                    <div className="left-container">
                        <div>
                            <h3>
                                <span>Smooth</span> Bus Rides
                            </h3>
                            
                            <ul className="benefits-container">
                                <li className="items">
                                    <span className="benefits-img"></span>
                                    <span className="benefits">Track live bus location</span>
                                </li>
                                <li className="items">
                                    <span className="benefits-img"></span>
                                    <span className="benefits">Exclusive bus operator deals</span>
                                </li>
                                <li className="items">
                                    <span className="benefits-img"></span>
                                    <span className="benefits">Manage and modify bookings</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="right-container">
                        <div className="close-login-page" >
                            <span>x</span>
                        </div>
                        <div>
                            <h2>Login/SignUp</h2>
                            <form >
                                <div className="login-details-div">
                                    <span className="mobile-number">Enter your Mobile Number</span>
                                    <span className="india-code">+91 -</span>
                                    <input name="mobile" className="input-box-for-login" type="text" maxlength="10" required />
                                </div>
                                <div>
                                    <button type="submit" className="login-button">Continue</button>
                                </div>
                            </form>
                            <div className="for-space"></div>
                            <form >
                                <div id="sign-in-button"></div>
                                <div className="login-details-div">
                                    <span className="mobile-number">Enter your OTP</span>
                                    <span className="india-code">OTP : </span>
                                    <input type="number"  name="otp" className="input-box-for-login" maxlength="10" required/>
                                </div>
                                <div>
                                    <button type="submit" className="login-button">Login</button>
                                </div>
                            </form>
                        </div>
                        <div>
                            <p className="privacy-policy">By proceeding, you agree to GoIbibo’s <a href>Privacy Policy</a>, <a href>User Agreement</a>  and <a href>Terms of Service</a></p>
                        </div>
                    </div>
                </div>
          </div>
          </div>
            </div>
    )
}
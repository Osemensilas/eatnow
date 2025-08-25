import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import { useRef } from "react";

const Header = () => {

    const router = useRouter();
    const signinRef = useRef(null);

    const logoClicked = () => {
        router.push('/');
    }

    const loginClick = () => {
        const signinContainer = signinRef.current;

        signinContainer.classList.add('active');
    }

    const cancelClicked = () => {
        const signinContainer = signinRef.current;

        signinContainer.classList.remove('active');
    }

    return ( 
        <>
        <header id="header">
            <div className="header">
                <div className="logo-container" onClick={logoClicked}>
                    <img src="/" alt="" className="logo" />
                </div>
                <form className="search-form">
                    <input type="text" className="search-form-input" placeholder="Enter your delivery location" />
                    <i className="fa fa-map-marker"></i>
                </form>
                <div className="signup-container">
                    <div className="no-user active">
                        <Link href="/help" className="help-link text-small"><i className="fa fa-question-circle"></i> Help</Link>
                        <button onClick={loginClick} className="login-btn btn"><i className="fa fa-user"></i> Login</button>
                    </div>
                    <div className="active-user">
                        <Link href="/"><i className="fa fa-shopping-cart"></i> Cart</Link>
                        <div className="user-container">
                            <Link href="/"><i className="fa fa-user"></i> SoloTech <i className="fa fa-chevron-down"></i></Link>
                            <ul className="active-user-menu">
                                <li className="active-user-items"><Link href={"/"}>Profile</Link></li>
                                <li className="active-user-items"><Link href={"/"}>Wallet</Link></li>
                                <li className="active-user-items"><Link href={"/"}>Orders</Link></li>
                                <li className="active-user-items"><Link href={"/"}>Sign Out</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <section id="signInContainer" ref={signinRef}>
            <form onSubmit={(e) => e.preventDefault()} className="signin-form">
                <div className="signin-form-top">
                    <button onClick={cancelClicked} className="goBack">
                        <i className="fa fa-arrow-left"></i> Back
                    </button>
                    <button onClick={cancelClicked} className="signin-btn-cancel">
                        <i className="fa fa-times"></i>
                    </button>
                </div>
                <div className="signin-form-bottom">
                    <h2>Welcome Back!!!</h2>
                    <p>Login below or create a new EatNow account</p>
                    <div className="signin-user-option">
                        <button className="active">Vendors</button>
                        <button>Riders</button>
                        <button>Customers</button>
                    </div>
                    <div className="signin-details">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" className="signin-detail" placeholder="Enter your email address" />
                    </div>
                    <div className="signin-details">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" className="signin-detail" placeholder="Enter your password" />
                    </div>
                    <div className="forget-pass-container">
                        <Link href={"/"}>Forget Password?</Link>
                    </div>
                    <div className="signin-btn-container">
                        <button className="signin-btn">Login</button>
                    </div>
                    <div className="dont">
                        Don't have an account? <Link href={"/"}>Sign Up In Seconds</Link>
                    </div>
                </div>
            </form>
        </section>
        </>
     );
}
 
export default Header;
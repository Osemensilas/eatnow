import Link from "next/link";

const Header = () => {
    return ( 
        <>
        <header id="header">
            <div className="header">
                <div className="logo-container">
                    <img src="/" alt="" className="logo" />
                </div>
                <form className="search-form">
                    <input type="text" className="search-form-input" placeholder="Enter your delivery location" />
                    <i className="fa fa-map-marker"></i>
                </form>
                <div className="signup-container">
                    <div className="no-user active">
                        <Link href="/" className="help-link text-small"><i className="fa fa-question-circle"></i> Help</Link>
                        <Link href="/" className="login-btn btn"><i className="fa fa-user"></i> Login</Link>
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
        </>
     );
}
 
export default Header;
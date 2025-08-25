import Link from "next/link";

const Footer = () => {
    return ( 
        <>
        <footer id="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <div className="logo-container">
                        <img src="/" alt="" className="logo" />
                    </div>
                    <form className="footer-form">
                        <label htmlFor="footer-email">Join our newsletter to stay up to date on news and releases</label>
                        <div className="details">
                            <input type="text" id="footer-email" className="detail" />
                            <button type="submit" className="footer-btn">Subscribe</button>
                        </div>
                        <div className="privacy-policy">
                            By subscribing, you agree to our <Link href="/">Privacy Policy</Link> and provide consent to recieve updates from our company.
                        </div>
                    </form>
                </div>
                <div className="footer-top-right">
                    <div className="footer-right-content">
                        <h2>Links</h2>
                        <Link href={"/"}>About</Link>
                        <Link href={"/"}>Vendor</Link>
                        <Link href={"/"}>Riders</Link>
                    </div>
                    <div className="footer-right-content">
                        <h2>Help</h2>
                        <Link href={"/"}>Support</Link>
                        <Link href={"/"}>FAQs</Link>
                        <Link href={"/"}>Resturants Nearby</Link>
                    </div>
                    <div className="footer-right-content">
                        <h2>Legal</h2>
                        <Link href={"/"}>Terms & Conditions</Link>
                        <Link href={"/"}>Privacy Policies</Link>
                        <Link href={"/"}>Cookies Policies</Link>
                    </div>
                    <div className="footer-right-content">
                        <h2>Contact Us</h2>
                        <Link href={"/"}>Tel: +234 8181527679</Link>
                        <Link href={"/"}>Email: info@eatnow.com</Link>
                        <div className="footer-social-conteiner">
                            <a href="#" target="_blank">
                                <i class="fa-brands fa-x-twitter"></i>
                            </a>
                            <a href="#" target="_blank">
                                <i className="fa fa-facebook"></i>
                            </a>
                            <a href="#" target="_blank">
                                <i className="fa fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-middle">
                <div className="footer-middle-content">
                    <h2>Payment Options</h2>
                    <div className="footer-middle-imgs">
                        <img src="/" alt="" />
                        <img src="/" alt="" />
                        <img src="/" alt="" />
                        <img src="/" alt="" />
                        <img src="/" alt="" />
                        <img src="/" alt="" />
                        <img src="/" alt="" />
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025 EatNow Limited. All rights reserved.</p>
            </div>
        </footer>
        </>
     );
}
 
export default Footer;
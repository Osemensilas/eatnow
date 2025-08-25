import Head from "next/head";
import Link from "next/link";

export default function Home() {

  const frequentClicked = (e) => {
    let dropDown = e.currentTarget;
    let dropDownAnswer = dropDown.parentElement.parentElement.children[0].children[1];
    
    if (dropDown.classList.contains('active')){
      dropDown.classList.remove('active');
      dropDownAnswer.classList.remove('active');
    }else{
      dropDown.classList.add('active');
      dropDownAnswer.classList.add('active');
    }
  }

  return (
    <>
      <Head>
        <title>EatNow - Home Page</title>
      </Head>
      <section id="hero">
        <div className="hero-content">
          <h2 className="text-largest">What's your next bite?</h2>
          <p className="comment">Within a few clicks, find meals that are accessible near you</p>
          <div className="hero-content-box">
            <div className="hero-content-box-top">
              <button className="hero-delivery"><i className="fa fa-motorcycle"></i> Delivery</button>
              <button className="hero-pickup"><i className="fa fa-briefcase"></i> Pickup</button>
            </div>
            <div className="hero-content-box-bottom">
              <button className="hero-food"><i className="fa fa-concierge-bell"></i> Find Food</button>
              <button className="hero-resturant">Find Resturants</button>
            </div>
          </div>
        </div>
      </section>
      <section id="popular">
        <header className="popular-header">
          <h2>Get Tasty Abuja Meals Delivered to You</h2>
          <div className="line-below"></div>
        </header>
        <p className="comment">Order you favourite meals from Abuja resturants with <strong>EatNow</strong>. Whether you want brakfast, launch, dinner or a snack, <strong>EatNow</strong> help you find tasty food nearby. Choose what you want, place your order and watch it as it get delivered to your door.</p>
        <div className="popular-container">
          <header className="popular-container-header">
            <h2>Popular Categories</h2>
            <div className="slide-icon-container">
              <button><i className="fa fa-arrow-left"></i></button>
              <button><i className="fa fa-arrow-right"></i></button>
            </div>
          </header>
          <div className="popular-content">
            <Link href={"/"} className="popular-card">
              <div className="popular-card-top">
                <img src="/" alt="" />
              </div>
              <div className="popular-card-bottom">
                <h3 className="">Burger & Fast food</h3>
                <p>21 Resturants</p>
              </div>
            </Link>
            <Link href={"/"} className="popular-card">
              <div className="popular-card-top">
                <img src="/" alt="" />
              </div>
              <div className="popular-card-bottom">
                <h3 className="">Salads</h3>
                <p>32 Resturants</p>
              </div>
            </Link>
            <Link href={"/"} className="popular-card">
              <div className="popular-card-top">
                <img src="/" alt="" />
              </div>
              <div className="popular-card-bottom">
                <h3 className="">Pasta & Casual</h3>
                <p>4 Resturants</p>
              </div>
            </Link>
            <Link href={"/"} className="popular-card">
              <div className="popular-card-top">
                <img src="/" alt="" />
              </div>
              <div className="popular-card-bottom">
                <h3 className="">Pizza</h3>
                <p>32 Resturants</p>
              </div>
            </Link>
            <Link href={"/"} className="popular-card">
              <div className="popular-card-top">
                <img src="/" alt="" />
              </div>
              <div className="popular-card-bottom">
                <h3 className="">Breakfast</h3>
                <p>4 Resturants</p>
              </div>
            </Link>
            <Link href={"/"} className="popular-card">
              <div className="popular-card-top">
                <img src="/" alt="" />
              </div>
              <div className="popular-card-bottom">
                <h3 className="">Soup</h3>
                <p>32 Resturants</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section id="resturants">
        <header className="resturants-header">
          <h2>Top resturants</h2>
          <p>Explore resturants near you serving delicious Nigerian food for delivery.</p>
        </header>
        <div className="resturant-container">
          <div className="resturant-content">
            <Link href={"/"} className="resturant-card">
              <div className="resturant-card-top">
                <img src="/" alt="" />
              </div>
              <div className="resturant-card-bottom">
                <h2>Jenny's Kitchen</h2>
                <div className="delivery-time"><i className="fa fa-clock-o"></i> 45 min</div>
              </div>
            </Link>
            <Link href={"/"} className="resturant-card">
              <div className="resturant-card-top">
                <img src="/" alt="" />
              </div>
              <div className="resturant-card-bottom">
                <h2>Jenny's Kitchen</h2>
                <div className="delivery-time"><i className="fa fa-clock-o"></i> 45 min</div>
              </div>
            </Link>
            <Link href={"/"} className="resturant-card">
              <div className="resturant-card-top">
                <img src="/" alt="" />
              </div>
              <div className="resturant-card-bottom">
                <h2>Jenny's Kitchen</h2>
                <div className="delivery-time"><i className="fa fa-clock-o"></i> 45 min</div>
              </div>
            </Link>
            <Link href={"/"} className="resturant-card">
              <div className="resturant-card-top">
                <img src="/" alt="" />
              </div>
              <div className="resturant-card-bottom">
                <h2>Jenny's Kitchen</h2>
                <div className="delivery-time"><i className="fa fa-clock-o"></i> 45 min</div>
              </div>
            </Link>
            <Link href={"/"} className="resturant-card">
              <div className="resturant-card-top">
                <img src="/" alt="" />
              </div>
              <div className="resturant-card-bottom">
                <h2>Jenny's Kitchen</h2>
                <div className="delivery-time"><i className="fa fa-clock-o"></i> 45 min</div>
              </div>
            </Link>
            <Link href={"/"} className="resturant-card">
              <div className="resturant-card-top">
                <img src="/" alt="" />
              </div>
              <div className="resturant-card-bottom">
                <h2>Jenny's Kitchen</h2>
                <div className="delivery-time"><i className="fa fa-clock-o"></i> 45 min</div>
              </div>
            </Link>
            <Link href={"/"} className="resturant-card">
              <div className="resturant-card-top">
                <img src="/" alt="" />
              </div>
              <div className="resturant-card-bottom">
                <h2>Jenny's Kitchen</h2>
                <div className="delivery-time"><i className="fa fa-clock-o"></i> 45 min</div>
              </div>
            </Link>
            <Link href={"/"} className="resturant-card">
              <div className="resturant-card-top">
                <img src="/" alt="" />
              </div>
              <div className="resturant-card-bottom">
                <h2>Jenny's Kitchen</h2>
                <div className="delivery-time"><i className="fa fa-clock-o"></i> 45 min</div>
              </div>
            </Link>
            <Link href={"/"} className="resturant-card">
              <div className="resturant-card-top">
                <img src="/" alt="" />
              </div>
              <div className="resturant-card-bottom">
                <h2>Jenny's Kitchen</h2>
                <div className="delivery-time"><i className="fa fa-clock-o"></i> 45 min</div>
              </div>
            </Link>
          </div>
          <div className="resturant-cta-btn-container">
            <div className="gray-background"></div>
            <Link href={"/"} className="resturant-cta">See More</Link>
          </div>
        </div>
      </section>
      <section id="growth">
        <header className="growth-header">
          <h2>Grow with Us - Rider & Resturants Welcome</h2>
          <p>All in One Place</p>
          <div className="line-below"></div>
        </header>
        <div className="growth-container">
          <img src="/" alt="" className="growth-background" />
          <div className="growth-content">
            <h2>Grow with every order.</h2>
            <p className="comment">Let us help you reach more customers and increase your daily sales.</p>
            <Link href={"/"}>Resturant <i className="fa fa-arrow-right"></i></Link>
          </div>
        </div>
        <div className="growth-container rider">
          <img src="/" alt="" className="growth-background" />
          <div className="growth-content">
            <h2>Ride with us.</h2>
            <p className="comment">Join as a delivery rider and earn by delivering meals. Enjoy flexibility, freedom, and exclusive reward !!!</p>
            <Link href={"/"}>Riders <i className="fa fa-arrow-right"></i></Link>
          </div>
        </div>
      </section>
      <section id="frequently">
        <header className="frequently-header">
          <h2>Frequently asked questions</h2>
        </header>
        <div className="frequently-container">
          <div className="frequent-question">
            <div className="frequent-question-left">
              <h2>How much does delivery cost?</h2>
              <div className="frequequent-question-left-content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias est corrupti nulla aliquid perspiciatis itaque qui nam, vero velit odio, sapiente totam reprehenderit iure ipsam ab deleniti, libero reiciendis natus.</p>
              </div>
            </div>
            <div className="frequent-question-right">
              <div onClick={frequentClicked} className="frequent-drop-down-container">
                <i className="fa fa-chevron-down"></i>
              </div>
            </div>
          </div>
          <div className="frequent-question">
            <div className="frequent-question-left">
              <h2>Can I place bulk orders?</h2>
              <div className="frequequent-question-left-content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias est corrupti nulla aliquid perspiciatis itaque qui nam, vero velit odio, sapiente totam reprehenderit iure ipsam ab deleniti, libero reiciendis natus.</p>
              </div>
            </div>
            <div className="frequent-question-right">
              <div onClick={frequentClicked} className="frequent-drop-down-container">
                <i className="fa fa-chevron-down"></i>
              </div>
            </div>
          </div>
          <div className="frequent-question">
            <div className="frequent-question-left">
              <h2>How do I place an order?</h2>
              <div className="frequequent-question-left-content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias est corrupti nulla aliquid perspiciatis itaque qui nam, vero velit odio, sapiente totam reprehenderit iure ipsam ab deleniti, libero reiciendis natus.</p>
              </div>
            </div>
            <div className="frequent-question-right">
              <div onClick={frequentClicked} className="frequent-drop-down-container">
                <i className="fa fa-chevron-down"></i>
              </div>
            </div>
          </div>
          <div className="frequent-question">
            <div className="frequent-question-left">
              <h2>I want to cancel my order. Will I be charged for cancellation?</h2>
              <div className="frequequent-question-left-content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias est corrupti nulla aliquid perspiciatis itaque qui nam, vero velit odio, sapiente totam reprehenderit iure ipsam ab deleniti, libero reiciendis natus.</p>
              </div>
            </div>
            <div className="frequent-question-right">
              <div onClick={frequentClicked} className="frequent-drop-down-container">
                <i className="fa fa-chevron-down"></i>
              </div>
            </div>
          </div>
          <div className="frequent-question">
            <div className="frequent-question-left">
              <h2>Where are the payment methods?</h2>
              <div className="frequequent-question-left-content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias est corrupti nulla aliquid perspiciatis itaque qui nam, vero velit odio, sapiente totam reprehenderit iure ipsam ab deleniti, libero reiciendis natus.</p>
              </div>
            </div>
            <div className="frequent-question-right">
              <div onClick={frequentClicked} className="frequent-drop-down-container">
                <i className="fa fa-chevron-down"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

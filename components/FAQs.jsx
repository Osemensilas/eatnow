const FAQs = () => {

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
 
export default FAQs;
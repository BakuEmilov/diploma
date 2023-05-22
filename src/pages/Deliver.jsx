import React from "react";

const Delivery = () => {
  return (
    <div className="delivery-container">
      <h2 className="delivery-heading">Fast and Reliable Delivery</h2>
      <p className="delivery-text">
        At Nike Shop, we offer quick and dependable delivery services to ensure
        you receive your products in no time.
      </p>
      <p className="delivery-text">
        Whether you're purchasing sneakers, apparel, or accessories, our
        dedicated delivery team works tirelessly to deliver your order securely
        to your doorstep.
      </p>
      <p className="delivery-text">
        Enjoy hassle-free shopping with our streamlined delivery process and
        stay updated with real-time tracking information for your package.
      </p>
      <p className="delivery-text">
        Experience the convenience of shopping at Nike Shop today and receive
        your items with speed and efficiency.
      </p>
      <div className="delivery-info">
        <div className="delivery-option">
          <i className="fas fa-shipping-fast"></i>
          <h3 className="delivery-option-heading">Fast Delivery</h3>
          <p className="delivery-option-text">
            Get your order delivered quickly and efficiently with our expedited
            shipping options.
          </p>
        </div>
        <div className="delivery-option">
          <i className="fas fa-shield-alt"></i>
          <h3 className="delivery-option-heading">Secure Delivery</h3>
          <p className="delivery-option-text">
            Rest assured that your package will be delivered securely and
            protected throughout the shipping process.
          </p>
        </div>
        <div className="delivery-option">
          <i className="fas fa-box"></i>
          <h3 className="delivery-option-heading">Track Your Order</h3>
          <p className="delivery-option-text">
            Easily track your order in real-time and stay updated on its
            delivery status.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Delivery;

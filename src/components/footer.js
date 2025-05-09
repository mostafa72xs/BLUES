"use client"
import React from "react";

function footer() {
  return (
    <div className="footer">
      <div className="logo">
        <h2 className="icon">BLUE S</h2>
        <p>Email:info@domain.com</p>
        <p>Phone: +1-012-3456-789</p>
      </div>
      <div className="ulist">
        
        <ul><h1>Products</h1>
          <li>
            Prices drop
          </li>
          <li>
            Best Sales
          </li>
          <li>
            New Products
          </li>
        </ul>
      </div>
      <div>
        <ul><h1>OUR COMPANY</h1>
          <li>
            Delivery
          </li>
          <li>
            Legal Notice
          </li>
          <li>
            About us
          </li>
          <li>
            Secure Payment
          </li>
          <li>
            Sitemap
          </li>
        </ul>
      </div>
      <div className="sal">
        <h1>GET IN TOUCH</h1>
        <p>Subscribe to our newsletter to get exclusive discounts</p>
        <input
          type="email"
          className="inputemail"
          placeholder="your email address"
        />
        <br />
        <span>
          You may unsubscribe at any moment. For that purpose, please find our
          contact info in the legal notice.
        </span>
      </div>
    </div>
  );
}

export default footer;

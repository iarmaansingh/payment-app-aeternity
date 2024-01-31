import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="componente-footer">
      <div className="title">
        <p className="logo">
          <strong>Zengrowth</strong>
        </p>
        <hr className="footer-divider"></hr>
       
      </div>
      
      <div className="social-network">
        <i className="fab fa-linkedin-in mr-4"></i>
        <i className="fab fa-staylinked"></i> 
      </div>
      <nav className="menu-footer">
        <ul className="footer-menu">
          <li>ABG </li>
          <li>Privacy </li>
          <li>Cookies </li>
          <li>Impressum </li>
        </ul>
      </nav>
      
      <div className="d-flex justify-content-around  copyright-wrapper">
          <span className="inner-copyright"> © 2020 Zengrowth. All rights reserved. </span>
          
            <div className="footer-fake-links">
              <span className="pr-2">ABG</span>
              <span className="pr-2">Privacy</span>
              <span className="pr-2">Cookies</span>

            </div>
        </div>
    </div>
  );
}

export default Footer;

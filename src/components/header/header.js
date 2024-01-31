import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.mobileNav = React.createRef();
    this.showNav = this.showNav.bind(this);
  }

  showNav() {
    if (this.state.show === false) {
      this.mobileNav.current.style.transform = "translateX(-30%)";
      this.setState({
        show: true,
      });
    } else {
      this.mobileNav.current.style.transform = "translateX(100%)";
      this.setState({
        show: false,
      });
    }
  }

  render() {
    return (
      <div className="header-component">
        <div className="logo">
          <p>Zengrowtch</p>
        </div>
        <div className="container-nav">
          <nav className="nav" ref={this.mobileNav}>
            <ul>
              <li>
                <div className="nav-link">
                  <p>Services</p>
                </div>
              </li>
              <li>
                <div className="nav-link">
                  <p>About</p>
                </div>
              </li>
              <li>
                <div className="nav-link">
                  <p>Blog</p>
                </div>
              </li>
              <li className="button">
                <div className="nav-link">
                  <p>Started</p>
                </div>
              </li>
              <li>
                <div className="nav-link">
                  <i className="fas fa-search"></i>
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mobile-menu">
          <div className="bars-menu" onClick={this.showNav}>
            <span className="line-1"></span>
            <span className="line-2"></span>
            <span className="line-3"></span>
          </div>
          <nav className="mobile-nav" ref={this.mobileNav}>
            <ul>
              <li>Services</li>
              <li>About</li>
              <li>Blog</li>
              <li>Get Started</li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;

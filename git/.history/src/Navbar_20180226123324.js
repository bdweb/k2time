import React from 'react';
import { Link, NavLink ,IndexLink  } from 'react-router-dom'
import  Navbar  from 'react-bootstrap';

export default class Navbar extends React.Component{
  render(){
    return(

      <header>
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse.collapse">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
            <div className="navbar-brand">
              <a href="index.html"><h1><span>Com</span>pany</h1></a>
            </div>
          </div>

          <div className="navbar-collapse collapse">
            <div className="menu">
              <ul className="nav nav-tabs" role="tablist">
                <li role="presentation">
                <NavLink exact  to="/" activeClassName="active">Home</NavLink >
                </li>
                <li role="presentation">
                <NavLink to="/about" activeClassName="active">About Us</NavLink>
                </li>
                <li role="presentation">
                <NavLink to="/services" activeClassName="active">Services</NavLink>
                </li>
                <li role="presentation">
                <NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>
                </li>
                <li role="presentation">
                <NavLink to="/contact" activeClassName="active">Contact</NavLink>
                </li>
                {/* <a href="index.html" className="active">Home</a></li>
                <li role="presentation"><a href="about.html">About Us</a></li>
                <li role="presentation"><a href="services.html">Services</a></li>
                <li role="presentation"><a href="portfolio.html">Portfolio</a></li>
                <li role="presentation"><a href="blog.html">Blog</a></li>
                <li role="presentation"><a href="contact.html">Contact</a></li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
          //  <div id="breadcrumb">
          //   <div className="container">
          //     <div className="breadcrumb">
          //       <li><a href="/">Home</a></li>
          //     </div>
          //   </div>
          // </div>
    
    )
  }

}
import React from 'react';
import { Link, NavLink ,IndexLink  } from 'react-router-dom'
import  {Navbar, Nav, NavItem, MenuItem, NavDropdown}  from 'react-bootstrap';

export default class Header extends React.Component{
  render(){
    return(

      <header>
   <Navbar inverse collapseOnSelect bsClass="navbar navbar-default">
   <div className="navigation">
   <div className="container">
  <Navbar.Header>
    <Navbar.Brand className="navbar-brand">
    <a href="index.html"><h1><span>Com</span>pany</h1></a>
    </Navbar.Brand>
    <Navbar.Toggle  className="navbar-toggle"/>
  </Navbar.Header>
  <Navbar.Collapse>
      <div className="menu">
    <Nav>
      <NavItem eventKey={1} href="#">
        Link
      </NavItem>
      <NavItem eventKey={2} href="#">
        Link
      </NavItem>
        </Nav>

    </div>
  </Navbar.Collapse>
  </div>
  </div>
</Navbar>;


{/* navbar-fixed-top */}
    <nav className="navbar navbar-default">
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
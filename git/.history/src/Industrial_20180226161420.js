import React from 'react';
import { Link, NavLink ,IndexLink  } from 'react-router-dom'
import Sidebarleft from './Sidebar';
export default class Industrial extends React.Component{
  constructor(){
    super();
  }
  render(){

    return(
      <div>
        <NavLink to="/industrial/a" activeClassName="active">Industrial</NavLink>
        
  {this.props.route.a ? <Sidebarleft/> : '' }
      
      <h1> Industrial</h1>
</div>
    
    )
  }

}
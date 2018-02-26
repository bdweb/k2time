import React from 'react';
import { Link, NavLink ,IndexLink  } from 'react-router-dom'
import { Sidebar, SidebarItem } from 'react-responsive-sidebar';
const items = [
  <SidebarItem>Dashboard</SidebarItem>,
  <SidebarItem>Profile</SidebarItem>,
  <SidebarItem>Settings</SidebarItem>,
];
export default class Sidebar extends React.Component{
  render(){
    return(

 <Sidebar content={items}>
    AAAAA
  </Sidebar>
    )
  }

}
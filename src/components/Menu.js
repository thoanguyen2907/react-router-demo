import React, { Component } from "react";
import { NavLink } from "react-router-dom";
const menus = [
  { to: "/", exact: true, name: "Home" },
  { to: "/about", exact: false, name: "About" },
  { to: "/product", exact: false, name: "Products" },
];

export default class Menu extends Component {
  render() {
    return (
  
      <nav className="navbar navbar-light bg-light">
          <ul className="list-group">
            {this.showMenu(menus)}
          </ul>
        </nav>
  
    );
  }
  showMenu(menus) {
    let xhml = null;
    if (menus.length > 0 && menus !== null) {
      xhml = menus.map((menu, index) => {
        return (
          <NavLink
            key={index}
            to={menu.to}
            exact={menu.exact}
            className="list-group-item"
          >
            {menu.name}
          </NavLink>
        );
      });
    }
    return xhml;
  }
}

import React, { Component } from "react";
import { NavLink } from "react-router-dom";
const menus = [
  { to: "/", exact: true, name: "Home" },
  { to: "/about", exact: false, name: "About" },
  { to: "/course", exact: false, name: "Course" },
];

export default class Menu extends Component {
  render() {
    return (
      <div className="col-4">
        <div className="card">
          <ul className="list-group list-group-flush">
            {this.showMenu(menus)}
          </ul>
        </div>
      </div>
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

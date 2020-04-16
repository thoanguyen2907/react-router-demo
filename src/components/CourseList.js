import React, { Component } from 'react';
import {NavLink,Route} from "react-router-dom";
import CourseItem from './CourseItem';
const menuCourses = [
{to:'/vue',exact: true, name:'Vuejs'},
{to:'/react',exact: true, name:'Reactjs'},
{to:'/nodejs',exact: true, name:'Nodejs'},
]
class CourseList extends Component {

    render() {      
        let {match} = this.props;

        return (
            <div className="card">
            <h3>Courses</h3>
            <div className="list-group list-group-flush">
             {this.showMenu(match.url,menuCourses)}
            </div>
            <Route exact path={`${match.url}/:id`} component={CourseItem}></Route>
          </div>
        );
    }
    showMenu(url,menus) {
        let xhml = null;
        if (menus.length > 0 && menus !== null) {
          xhml = menus.map((menu, index) => {
            return (
              <NavLink
                key={index}
                to={`${url}${menu.to}`}
                exact={menu.exact}
                className="list-group-item">
                {menu.name}
              </NavLink>
            );
          });
        }
        return xhml;
      }
}

export default CourseList;

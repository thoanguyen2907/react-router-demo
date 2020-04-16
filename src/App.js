import React, { Component } from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Title from "./components/Title";
import Menu from "./components/Menu";
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound'
import CourseList from "./components/CourseList";
import routes from './routes'; 
class App extends Component {
  render() {
    return (
      <Router>
      <div className="container pt-5">
          <div className="row">
         <Title />
         </div>
        <div className="row">
        <Menu />
        <div className="col-8">
          <div className="card bg-navy">
          <h5 className="card-title">Content</h5>
            <div className="card-body">
              <Switch>
              {this.showRoutes(routes)}
              </Switch>
            </div>
          </div>
        </div>
        </div>
      </div>
      </Router>
    );
  }
  showRoutes(routes){
    let xhml = null;
        if (routes.length > 0 && routes !== null) {
          xhml = routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                className="list-group-item"
                component={route.main}>
              </Route>
            );
          });
        }
        return xhml;
  }
}

export default App;

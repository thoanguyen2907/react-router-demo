import React, { Component } from 'react';
import {NavLink,Route} from "react-router-dom";
const vueLists = [
{
  name:'Vue1',
  to:'vue1'
},
{
  name:'Vue2',
  to:'vue2'
},
{
  name:'Vue3',
  to:'vue3'
},
{
  name:'Vue4',
  to:'vue4'
},
]
export default class VueList extends Component {
  
    render() {
      let {match}=this.props;
      console.log(match)
        return (
            <div className = "card">
            <div className="card-header">
              Welcome to Vue List Courses
            </div>
            <div className="list-group list-group-flush">
              {this. showVueList(match,vueLists)}        
          </div>

          </div>
        )
    }
  showVueList(match, vueLists){
    let xhml = null;
    if(vueLists.length > 0 && vueLists !==null){
      xhml = vueLists.map((list,index)=>{
      return  <NavLink key={index} to={`${match.url}/${list.to}`}className="list-group-item">{list.name}</NavLink>
      })
    }
    return xhml
  }
}

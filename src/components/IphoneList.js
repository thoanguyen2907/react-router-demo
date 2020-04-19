import React, { Component } from 'react';
import {NavLink,Route} from "react-router-dom";
const iphoneLists = [
{
  name:'Iphone1',
  to:'iphone1'
},
{
  name:'Iphone2',
  to:'iphone2'
},
{
  name:'Iphone3',
  to:'iphone3'
},
{
  name:'Iphone4',
  to:'iphone4'
},
]
 class IphoneList extends Component {
  
    render() {
      let {match}=this.props;
        return (
            <div className = "card">
            <div className="card-header">
              Welcome to iPhone Product List
            </div>
            <div className="list-group list-group-flush">
              {this. showiPhoneList(match,iphoneLists)}        
          </div>

          </div>
        )
    }
    showiPhoneList(match, iphoneLists){
    let xhml = null;
    if(iphoneLists.length > 0 && iphoneLists !==null){
      xhml = iphoneLists.map((list,index)=>{
      return  <NavLink key={index} to={`${match.url}/${list.to}`} className="list-group-item">{list.name}</NavLink>
      })
    }
    return xhml
  }
  
}
export default IphoneList;

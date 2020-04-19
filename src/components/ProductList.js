import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import IphoneList from './IphoneList';
const iphoneLists = [
{
  name:'iphone',
  to:'iphone'
},
{
  name:'samsung',
  to:'samsung'
},
{
  name:'oppo',
  to:'oppo'
},

]
class ProductListTest extends Component {
        render() {
      let {match}=this.props;
        return (
            <div className = "card">
            <div className="card-header">
              Welcome to  Product List
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

export default ProductListTest;

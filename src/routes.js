import React, { Component } from 'react';
import Menu from "./components/Menu";
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound'
import IphoneList from './components/IphoneList'; 
import IphoneItem from './components/IphoneItem';
import ProductList from './components/ProductList'; 
const routes = [
    {
      path: "/",
      exact: true,
      main: () => <Home/>
    },
    {
      path: "/about",
      exact: true,
      main: () =>  <About/>
    },
    {
      path: "/product",  
      exact: true,  
      main: ({match}) =>  <ProductList match = {match}/>
    },
   
      {
        path: "/product/iphone",  
        exact: true,  
        main: ({match}) =>  <IphoneList match = {match}/>
      },
      {
        path: "/product/iphone/iphone:id",  
        exact: true,  
        main: ({match}) =>  <IphoneItem match = {match}/>
      },
    {
        path: "",  
        exact: true,  
        main: () => <NotFound/>
      }
  ];
export default routes;
import React, { Component } from 'react';
import Menu from "./components/Menu";
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound'
import CourseList from "./components/CourseList";
import CourseItem from './components/CourseItem'; 
import VueList from './components/VueList'; 
import VueItem from './components/VueItem';
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
      path: "/course",  
      exact: true,  
      main: ({match}) =>  <CourseList match = {match}/>
    },
    {
        path: "/course:id",  
        exact: true,  
        main: ({match}) =>  <CourseItem match = {match}/>
      },
      {
        path: "/course/vue",  
        exact: true,  
        main: ({match}) =>  <VueList match = {match}/>
      },
      {
        path: "/course/vue/vue:id",  
        exact: true,  
        main: ({match}) =>  <VueItem match = {match}/>
      },
    {
        path: "",  
        exact: true,  
        main: () => <NotFound/>
      }
  ];
export default routes;
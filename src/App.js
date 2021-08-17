import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import styled from 'styled-components';
import { Landing } from "./pages/landing";
import { Account } from "./pages/account";
import { Navbar } from "./components/navbar";
import  FullMap  from "./components/Maps/FullMap"
// import { Profile } from "./pages/profile";
import  MyPosts from "./pages/MyPosts/index.js";


const App = () =>  {
    const[user, setUser] =useState();
    
      return (
        <AppContainer>
          <Navbar setUser={setUser}/>
        
          
        
          {user ? <Redirect to= '/profile'/> : <Redirect to = '/'/>}
          <Route exact path= '/'>
            <Landing setUser ={setUser}/>
          </Route>
          <Route path='/account'>
        <Account user={user}/>
      </Route>
         
          {/* <Route path='/profile'>
            <Profile user={user}/>
          </Route> */}
          <Route path='/MyPosts'>
            <MyPosts user={user}/>
            
          </Route>
          <Route path='/FullMap'>
          <FullMap />
          </Route>
        </AppContainer>
        
      );
    };
    const AppContainer = styled(Router)`
      width: 100vw;
      height: 100vh;
      background-color: black;
    `;
    
    export default App;
    
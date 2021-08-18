import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import styled from 'styled-components';
import { Landing } from "./pages/landing";
import { Account } from "./pages/account";
import { Navbar } from "./components/navbar";
import  FullMap  from "./components/Maps/FullMap"
import  Profile from "./pages/profile";
import  MyPosts from "./pages/MyPosts/index.js";


const App = () =>  {
    const[user, setUser] =useState();
    const[posts, setPosts] = useState([])
    const [bool, setBool] = useState(false);
    useEffect(async () => {
      const response = await fetch(`${process.env.REACT_APP_REST_API}posts`);
      const data = await response.json();
      setPosts(data)
      console.log(posts);
      setBool(true);
    }, [bool]);
    
      return (
        <AppContainer>
          {user ? <Redirect to= '/profile'/> : <Redirect to = '/'/>}
          <Route exact path= '/'>
            <Landing setUser ={setUser}/>
          </Route>
          <div>
          <Route path='/account'>
          <Navbar setUser={setUser}/>
        <Account user={user}/>
           </Route>
         
          <Route path='/profile'>
          <Navbar setUser={setUser}/>
            <Profile user={user}/>
          </Route>
          <Route path='/MyPosts'>
          <Navbar setUser={setUser}/>
            <MyPosts user={user}/>
            
          </Route>
          <Route path='/FullMap'>
          <Navbar setUser={setUser}/>
          <FullMap posts={posts}/>
          </Route>
          </div>
        </AppContainer>
        
      );
    };
    const AppContainer = styled(Router)`
      width: 100vw;
      height: 100vh;
      background-color: black;
    `;
    
    export default App;
    
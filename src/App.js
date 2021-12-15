import React from "react";
import Navbar from "./components/Navbar";
import Cnav from "./components/Cnav";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu";
// import { HeaderDev } from "./components";
import { UserProvider } from './contexts'
import { Protected } from "./components/Protected";
// import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  return (
    <>
    <UserProvider>
      <Router>
        <header>
        <Navbar />
        <Protected role="2">
        <Cnav />
        </Protected>
        </header>
        {/* <HeaderDev/> */}
       
        <Switch>
        <main style={{marginTop:80}}>
          <Menu />
          </main>
        </Switch>
       
        
      </Router>
      
      </UserProvider>
    
      
    </>
  );
}

export default App;

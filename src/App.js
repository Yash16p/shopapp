import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Footer from "./component/Footer";
import { useState } from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PrivateRoute from "./component/PrivateRoute";



function App() {

const[isLoggedIn, setIsLoggedIn] = useState(false);
  

  return (
    <div>
     <div className="bg-slate-900">
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </div>

      <Routes>
    
        <Route path="/" element={
      
        <Home />
        
        } />
       
        
        
        <Route path="/cart" element={<Cart />} />
        
       
        <Route path='/login' element= {<Login setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path='/signup' element= {<Signup setIsLogggedIn={setIsLoggedIn}/>} />
        
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;

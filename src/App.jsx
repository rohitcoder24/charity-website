import React, { useEffect, useState } from 'react'
import Navbar1 from './Component/Navbar1'
import Navbar2 from './Component/Navbar2'
import Home from './Component/Home'
import Footer from './Component/Footer'
import { Outlet } from 'react-router-dom'
import Loader from './Component/loader'

const App = () => {
  const [isloading, setIsLoading] = useState(true);

    useEffect(() =>{
    const fakedataFetch  = () =>{
      setTimeout(() => {
        setIsLoading(false);
        
      },3000);
    }
    fakedataFetch();

  },[])
  return isloading ? (
     <Loader/>)
     :(
      <>
     <Navbar1/> <Navbar2/>  <Outlet/>   <Footer/>
      </>
    );  
}

export default App
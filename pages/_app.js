import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { useState } from "react";
export default function App({ Component, pageProps }) {
  const [isLogin,setisLogin]=useState(false);
  
  return <>
    <Navbar isLogin={isLogin} setisLogin={setisLogin}/>
    <Component setisLogin={setisLogin} {...pageProps} />;
    <Footer/>
  </>
   
}

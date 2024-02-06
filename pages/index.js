import Navbar from "@/components/Navbar";
import {  useEffect } from "react";
import Products from "@/components/Products";
import Footer from "@/components/Footer";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Category from "@/components/Category";
export default function Home() {
  const images=["https://codeswear.nyc3.cdn.digitaloceanspaces.com/constants/landing/banner/6.webp",
                "https://codeswear.nyc3.cdn.digitaloceanspaces.com/constants/landing/banner/2.webp",
                 "https://codeswear.nyc3.cdn.digitaloceanspaces.com/constants/landing/banner/3.webp",
                "https://codeswear.nyc3.cdn.digitaloceanspaces.com/constants/landing/banner/5.webp",
              "https://codeswear.nyc3.cdn.digitaloceanspaces.com/constants/landing/banner/4.webp"]
let count=0;

  const [changePage,setChangePage]=useState(images[count]);
  useEffect(()=>{
    function handlecarousel(){
      setInterval(()=>{
        if(images.length===count){
          count=0;
        }
      setChangePage(images[count++])
      },5000)
     }
     handlecarousel();
  },[count])
 
  return (
    <>

<main className="bg-black">
<div>
<div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <Link href="/"> <Image src={changePage} className="w-full cursor-pointer" alt="fsd" height={96} width={1400} /></Link>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"> 
      <Link  href="/" className="btn btn-circle">❯</Link>
    </div>

  </div> 
 
</div>
</div>

<Products/>
<Category/>




</main>
   </>
  );
}

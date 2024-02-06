import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-pink-200 text-base-content">
  <aside>
    <Image src="/codeswearlogo.png" height={100} width={200}/>
    <p>CodesWear.com<br/>Providing All Products Across The Globe!</p>
  </aside> 
  <nav>
    <h6 className="footer-title">Services</h6> 
    <Link href="/Tshirts" className="link link-hover">Tshirts</Link>
    <Link href="/hoodies" className="link link-hover">Hoodies</Link>
    <Link href="/mousepads" className="link link-hover">Mousepads</Link>
    <Link href="/caps" className="link link-hover">Caps</Link>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <Link href='/about' className="link link-hover">About us</Link>
    <Link href='/contact' className="link link-hover">Contact</Link>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <Link href='/terms' className="link link-hover">Terms of use</Link>
    <Link href='/policy' className="link link-hover">Privacy policy</Link>
  </nav>
</footer>
    </div>
  )
}

export default Footer

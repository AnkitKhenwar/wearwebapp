import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Products = () => {
  return (
    <div className='cursor-pointer mx-20 my-20 justify-items-center'>
    <h1 className="text-center text-pink-200 text-3xl font-bold mt-8">Trending Products In Our Site</h1>
    <h1 className='text-center text-pink-800 font-bold text-2xl mt-3'>All Categories Are Available</h1>
      <section className="text-gray-600 body-font mb-8">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
  <figure><Link href="/"><img src="https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/71OHwuNZh8L._SY695_.jpg" alt="Shoes" /></Link></figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>Cockatoo Dynamic Running Shoes for Men, Lightweight, Breathable Running Shoes, (6 Month Warranty)</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
  <figure><Link href="/mugs"><img src="https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/51tJLy3ZZkL._AC_UL480_FMwebp_QL65_.jpg" className='object-fit' alt="Shoes" /></Link></figure>
  <div className="card-body">
    <h2 className="card-title">
      Mugs!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>LEAWALL Coffee Mug with Lid Insulated Stainless Steel for Tea Milk Mug Inner Stylist Double Wall Cup for Home Office Restaurant Use Gift Pack of 1 Pic(Navy Blue)</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
  <figure><Link href="/tshirts"><img src="https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/61CT4vIwZjL._SX679_.jpg" alt="Shoes" /></Link></figure>
  <div className="card-body">
    <h2 className="card-title">
      Tshirts
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>Holi-T-Shirt/Printed T-Shirt|Unisex Holi-T-Shirt|Demon Printed colouredwhite Tshirt</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Products</div>
    </div>
  </div>

      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
  <figure><Link href="/hoodies"><img style={{height: "948 px", width:"550 px"}} src="https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/81ZYZa-tsjL._SY741_.jpg" alt="Shoes" /></Link></figure>
  <div className="card-body">
    <h2 className="card-title">
      Hoodies
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>Brand: REPUBLIC
REPUBLIC Men's Cotton Fleece Hoodie Sweatshirt</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
      </div>
     
  </div>
  </div>
  <hr/>
</section>
</div>
  )
}

export default Products

import Link from 'next/link'
import React from 'react'

const Category = () => {
  return (
    <>
    <h2 className="text-3xl text-center text-pink-500 tracking-widest font-medium title-font mb-1">Get The Best Discounts On Buying Above Rs10k!!</h2>
    <h2 className="text-3xl text-center text-pink-500 my-7 tracking-widest font-medium title-font mb-1">No SHipping CHarges for Order Above Rs1000</h2>
      <section className="text-pink-600 body-font mb-28 my-0 mx-auto py--10 relative mt-10">
  <div className="container pb-16 mb-16 px-5 py-24 mx-auto mt-5">
    <div className="flex flex-col text-center w-full mb-20">
    
      <h2 className="text-xl text-pink-500 tracking-widest font-medium title-font mb-1">Codeswear Party </h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-pink-900">Wear The Code!</h1>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-pink-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-pink-500 text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <h2 className="text-pink-900 text-lg title-font font-medium">Products</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">Our T-shirts are crafted with the perfect blend of comfort and style. Made from high-quality, breathable cotton, they provide a soft and cozy feel against the skin. The shirts come in a variety of sizes, ensuring a perfect fit for everyone. Choose from a diverse range of colors and designs to express your unique style. Whether you prefer a classic, minimalist look or bold, vibrant patterns, our T-shirts are versatile and suitable for any occasion.</p>
            <Link href="/tshirts" className="mt-3 text-pink-500 inline-flex items-center">Explore More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-pink-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-pink-500 text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <h2 className="text-pink-900 text-lg title-font font-medium">Mugs</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">Our mugs are not just vessels for your favorite beverages; they're expressions of personality and taste. Crafted from durable.</p>
            <Link href="/mugs" className="mt-3 text-pink-500 inline-flex items-center">Explore More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-pink-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-pink-500 text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
            <h2 className="text-pink-900 text-lg title-font font-medium">Hoodies</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">A hoodie is a type of casual jacket with a hood. She wore jeans and a hoodie. A hoodie is a young person wearing a hoodie, thought by some people to be badly behaved or possibly criminal. He said he had felt threatened by a group of hoodies outside a shop..</p>
            <Link href="/hoodies" className="mt-3 text-pink-500 inline-flex items-center">Explore More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Category


import Link from 'next/link';
import React from 'react'
import Image from 'next/image';

const Smartphones = ({smartphones}) => {
  return (
   <>
   <div className='flex flex-col w-full mt-4 z-10 place-items-center'>
        <div className='flex w-full flex-wrap justify-center min-h-screen'>
          <p className='text-center text-white-600'>Stay warm and stylish with the wide selection of hoodies available at Codeswear.com. Our hoodies are perfect for every occasion, whether you're looking for a casual everyday hoodie or something to wear to the gym. We have a variety of styles to choose from, including coding hoodies, anime hoodies, and casual hoodies for everyday wear. All of our hoodies are made with high-quality materials and are designed to be comfortable and durable. Shop now and find the perfect hoodie for you!</p>
    {smartphones.map((smartphone) => {
          return <div className="w-[85%] md:w-[16rem]" key={smartphone._id}>
       <div className="md:h-[32rem] relative rounded-lg shadow-lg hover:shadow-xl cursor-pointer overflow-hidden m-2 dark:bg-white-700">
          <Link href={`/product/${smartphone.description}`}>
             <div className="relative">
                <div className="absolute object-contain flex justify-center bottom-0 h-96 md:h-80 z-10 opacity-100 transition-opacity duration-700 hover:opacity-0 w-full bg-white overflow-hidden dark:bg-white-800"><Image className="h-96 md:h-80 max-w-none" src={smartphone.images[0]} height={96} width={400} alt="safs"/></div>
                <div className="flex justify-center opacity-100 object-contain h-96 md:h-80 bottom-0 transition-opacity duration-700 hover:opacity-100 overflow-hidden w-full "><Image className="h-96 md:h-80 max-w-none" src={smartphone.images[1]} height={96}  width={400} alt="sdfdf"/></div>
             </div>
             <div className="px-6 py-4">
                <div className="text-white-400 font-bold text-xs mb-2">{smartphone.title}</div>
                <div title="Good Vibes Hoodie" className="font-bold mb-2 flex">{smartphone.title}</div>
                <div className="flex flex-row justify-between items-center mb-2">
                   <div className="text-sm font-semibold"><span className=" mx-2 text-white-400">Price:₹{smartphone.price}</span></div>
                </div>
             </div>
          </Link>
       </div>
    </div>
       
})}
</div>
        </div>
        <button >Page Next</button>
        </>
  )}
  export async function getStaticProps(context) {
   try {
     const result = await fetch('http://localhost:3000/api/smartphones');
     const smartphones = await result.json();
 
     return {
       props: {
         smartphones,
       },
     };
   } catch (error) {
     console.error('Error fetching data:', error);
 
     return {
       props: {
         smartphones: [], // You can set a default value or handle the error accordingly
       },
     };
   }
 }
 
export default Smartphones;

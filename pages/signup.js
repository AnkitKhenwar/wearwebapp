import { redirect } from 'next/dist/server/api-utils';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Signup = () => {
    const router=useRouter();
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")
    function handlesubmit(e){
        e.preventDefault();
        if(!name || !email || !password){
            toast.error("Field is Empty!")
            return;
        }
        try {
            
            fetch("http://localhost:3000/api/signup", {
                method: "POST",
                body: JSON.stringify({
                  name:name,
                 email:email,
              password:password
                }),
                headers: {
                  "Content-type": "application/json"
                },
              
              });
              toast.success("User SignedUp Successfully!")
              router.push("/")
        } catch (error) {
            alert(error);
            toast.error("Error While Signing Up")
        }
     
    }
  return (
    <>
    <ToastContainer/>
    <h1 className='text-center text-2xl text-pink-400 my-4 font-bold'>Sign Up-Create Your New Account</h1>
    <div className="relative flex flex-col justify-center h-screen overflow-hidden">
    <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-pink-700">CodesWear</h1>
        <form className="space-y-4">
            <div>
                <label className="label">
                    <span className="text-base label-text">Name</span>
                </label>
                <input type="text" placeholder="Name" className="w-full input input-bordered input-secondary" onChange={(e)=>setName(e.target.value)} required />
            </div>
            <div>
                <label className="label">
                    <span className="text-base label-text">Email</span>
                </label>
                <input type="text" placeholder="Email Address" className="w-full input input-bordered input-secondary" onChange={(e)=>setEmail(e.target.value)} required />
            </div>
            <div>
                <label className="label">
                    <span className="text-base label-text">Password</span>
                </label>
                <input type="password" placeholder="Enter Password"
                    className="w-full input input-bordered input-primary" onChange={(e)=>setPassword(e.target.value)} required />
            </div>
            <div>
                <button className="btn btn-block btn-secondary" onClick={handlesubmit}>Sign Up</button>
            </div>
            <span>Already have an account ?
                <Link href="/login" className="text-pink-600 hover:text-pink-800 hover:underline">Login</Link></span>
        </form>
    </div>
</div>
</>
  )
}

export default Signup

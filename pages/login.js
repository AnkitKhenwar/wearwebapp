import { useRouter } from "next/router";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = ({ setisLogin }) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function handlesubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Field is Empty!");
      return;
    }
    try {
      const result = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        headers: {
          "Content-type": "application/json",
        },
        
      });
      toast.success("User LogIn Successfully!");
      const ans = await result.json();
      const token = ans.token;
      localStorage.setItem("token", token);
     setisLogin(true)
      
      router.push("/");
    } catch (error) {
      alert(error);
      toast.error("Error While Signing Up");
    }
  }
  return (
    <>
      <h1 className="text-center text-2xl text-pink-500 font-bold my-4">
        Login To Your Account
      </h1>
      <ToastContainer autoClose={2000} />
      <div className="relative flex flex-col justify-center h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-lg">
          <h1 className="text-3xl font-semibold text-center text-pink-700">
            Codeswear
          </h1>
          <form className="space-y-4">
            <div>
              <label className="label">
                <span className="text-base label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Email Address"
                className="w-full input input-bordered input-secondary"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full input input-bordered input-secondary"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <a
              href="#"
              className="text-xs text-pink-600 hover:underline hover:text-pink-600"
            >
              Forget Password?
            </a>
            <div>
              <button className="btn btn-secondary" onClick={handlesubmit}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

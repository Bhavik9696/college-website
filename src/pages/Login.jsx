import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      if(email==="bbcd@gmail.com" && password==="bbcd@123"){
        navigate("/signup");
      }else{
        navigate("/student");
      }
    } catch (error) {
      console.error(error);
      alert("Invalid email or password.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white">
      <form
        onSubmit={handleLogin}
        className="bg-blue-200 p-20 pt-16 w-full max-w-sm dark:bg-gray-900 dark:text-white dark:border-2 dark:border-gray-400 shadow-2xl shadow-blue-500/50 transition duration-[2000ms] hover:transform hover:scale-105  rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full px-4 py-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-black"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full px-4 py-2 mb-6 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-black"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 "
        >
          Login
        </button>
      </form>
      {/* <div className="card bg-gray-900 pl-44">
        <img src="https://sdmntprwestus2.oaiusercontent.com/files/00000000-aab4-61f8-bc00-88e71112fa80/raw?se=2025-08-13T01%3A22%3A15Z&sp=r&sv=2024-08-04&sr=b&scid=645c484c-cf6b-55a9-93bf-b09e252c3a85&skoid=24a7dec3-38fc-4904-b888-8abe0855c442&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-12T20%3A52%3A13Z&ske=2025-08-13T20%3A52%3A13Z&sks=b&skv=2024-08-04&sig=YWxeX11kOKM835AsyUiuJ42eSJnfAwVz6BOfJMZV2%2BM%3D" alt="" className="rounded-full animate-bounce" width={200}/>
      </div> */}
    </div>
  );
}

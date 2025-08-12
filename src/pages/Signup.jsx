import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { auth, db } from '../firebase/firebase'; 

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg,setMsg]=useState('');
  const [errmsg,seterrMsg]=useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      // Step 1: Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const uid = userCredential.user.uid;
      setMsg("✅ Signup successful!");
       await setDoc(doc(db, "users", uid), {
    email,
    createdAt: new Date().toISOString(),
    // Add other fields if you want, e.g. name, dob, etc.
  });
    } catch (error) {
      console.error("Error during signup:", error.message);
      seterrMsg("❌ " + error.message);
    }
  };

  return (
   <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white">
    <h1 className='mb-10 bg-green-400 text-lg'>{msg}</h1>
    <h1 className='mb-10 bg-red-400 text-lg'>{errmsg}</h1>
    <form
      onSubmit={handleSignup}
      className="bg-blue-200 mb-40 p-8 rounded-lg shadow-md max-w-md   flex flex-col gap-4 dark:bg-gray-900 dark:text-white dark:border-2 dark:border-gray-400"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Sign Up Any Users You Want</h2>

      <label className="font-medium">Email:</label>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:text-black"
      />

      <label className="font-medium">Password:</label>
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:text-black"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors mt-2 font-semibold"
      >
        Sign Up
      </button>
    </form>
    </div>
  );
}

export default Signup;

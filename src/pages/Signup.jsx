import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { auth, db } from '../firebase/firebase'; // ✅ make sure your firebase.js exports auth & db

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      // Step 1: Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const uid = userCredential.user.uid;

      // Step 2: Store extra details in Firestore
      await setDoc(doc(db, "studentDetails", uid), {
        dob,
        department,
        year
      });

      alert("✅ Signup successful!");
    } catch (error) {
      console.error("Error during signup:", error.message);
      alert("❌ " + error.message);
    }
  };

  return (
    <form
      onSubmit={handleSignup}
      className="bg-gray-100 p-8 rounded-lg shadow-md max-w-md mx-auto mt-10 flex flex-col gap-4"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>

      <label className="font-medium">Email:</label>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <label className="font-medium">Password:</label>
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors mt-2 font-semibold"
      >
        Sign Up
      </button>
    </form>
  );
}

export default Signup;

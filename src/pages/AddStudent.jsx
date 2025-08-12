import React, { useState } from 'react';
import { db } from "../firebase/firebase";
import { collection, addDoc } from 'firebase/firestore';

function AddStudent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [year, setYear] = useState('');
  const [imgurl, setImgurl] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "students"), {
        name,
        email,
        year: Number(year),
        imgurl,
      });
      alert("Student added successfully!");
      setName('');
      setEmail('');
      setYear('');
      setImgurl('');
    } catch (error) {
      alert("Error adding student: " + error.message);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md flex flex-col gap-4"
    >
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Name"
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        value={year}
        onChange={e => setYear(e.target.value)}
        placeholder="Year"
        type="number"
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
       <input
        value={imgurl}
        onChange={e => setImgurl(e.target.value)}
        placeholder="imgUrl"
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 transition"
      >
        Add Student
      </button>
    </form>
  );
}

export default AddStudent;
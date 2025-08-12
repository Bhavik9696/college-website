import React, { useState } from 'react';
import { db } from "../firebase/firebase";
import { collection, addDoc } from 'firebase/firestore';

function AddStudent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [year, setYear] = useState('');
  const [imgurl, setImgurl] = useState('');
  const [smsg, setSmsg] = useState('');

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
      setSmsg('Student added successfully!')
      setName('');
      setEmail('');
      setYear('');
      setImgurl('');
    } catch (error) {
      alert("Error adding student: " + error.message);
      setSmsg("Error adding student: " + error.message)
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white">
      <h1 className='text-white'>{smsg}</h1>
    <form 
      onSubmit={handleSubmit} 
      className="max-w-md mx-auto  p-6 bg-blue-200 rounded-lg shadow-md flex flex-col gap-4 dark:bg-gray-900 border-2 border-gray-500 dark:text-black"
    >
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Name"
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-96 "
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
    </div>
  );
}

export default AddStudent;
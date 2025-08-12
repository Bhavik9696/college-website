import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

export default function StudentList() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchStudents = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "students"));
      if (querySnapshot.empty) {
        setError("No students found.");
      } else {
        const allStudents = querySnapshot.docs.map((docSnap) => ({
          id: docSnap.id,
          ...docSnap.data(),
        }));
        setStudents(allStudents);
      }
    } catch (err) {
      setError("Error fetching students: " + err.message);
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "students", id));
      setStudents((prev) => prev.filter((student) => student.id !== id)); 
    } catch (err) {
      console.error("Error deleting student:", err);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  if (loading) return <p>Loading students...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="w-full min-h-screen bg-white dark:bg-gray-900 dark:text-white flex flex-col items-center p-8">
      <h2 className="text-4xl font-bold mb-6 text-orange-500">All Students</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {students.map((student) => (
          <div
            key={student.id}
            className="bg-blue-200 dark:bg-gray-800 p-6 rounded-lg shadow-md border-2 flex flex-col items-center"
          >
            <p className="text-xl font-bold">{student.name}</p>
            <p className="text-lg">{student.email}</p>
            <p className="text-lg">Year: {student.year}</p>
            {student.imgurl && (
              <img
                src={student.imgurl}
                alt={student.name}
                className="mt-4 rounded w-40 h-40 object-cover"
              />
            )}
            <button
              onClick={() => handleDelete(student.id)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

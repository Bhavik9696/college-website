import React, { useEffect, useState } from "react";
import { db, auth } from "../firebase/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

export default function StudentDashboard() {
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudentData = async () => {
      if (!auth.currentUser) {
        setError("Not logged in");
        setLoading(false);
        return;
      }

      try {
        const userEmail = auth.currentUser.email;
        const q = query(collection(db, "students"), where("email", "==", userEmail));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
          setError("No student data found for this user.");
        } else {
          const docData = querySnapshot.docs[0].data();
          setStudentData(docData);
        }
      } catch (err) {
        setError("Error fetching student data: " + err.message);
      }

      setLoading(false);
    };

    fetchStudentData();
  }, []);

  if (loading) return <p className="">Loading your profile...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="w-full h-[100vh] bg-white rounded shadow-md dark:bg-gray-900 dark:text-white flex flex-col justify-center ">
    <div className="max-w-md mx-auto  bg-blue-200 rounded shadow-md dark:bg-gray-900 dark:text-white border-2 p-9">
      <h2 className="text-4xl font-bold mb-4 text-orange-500">Your Profile</h2>
      <p className="text-xl"><strong>Name:</strong> {studentData.name}</p>
      <p className="text-xl"><strong>Email:</strong> {studentData.email}</p>
      <p className="text-xl"><strong>Year:</strong> {studentData.year}</p>
      {studentData.imgurl && (
        <img src={studentData.imgurl} alt="Profile" className="mt-4 rounded w-40 h-40 object-cover" />
      )}
    </div>
    </div>
  );
}


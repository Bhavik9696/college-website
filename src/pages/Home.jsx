import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.jpg';


const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <header className="p-5 bg-blue-700 text-white  flex gap-6 md:pl-16">
        <img src={logo}
          alt="logo" width={70} className="rounded-full bg-p"
        />
        <h1 className="text-xl font-bold font-serif sm:text-2xl md:mt-6 sm:mt-4 md:text-3xl ">
          BBCD College Of Engineering and Technology
        </h1>
      </header>

      <main className="flex-grow container mx-auto px-4 pt-4">
        <h1 className="text-2xl font-semibold mb-1 font-mono sm:pt-4 ">
          Welcome to BBCD College!
        </h1>
        <p className="mb-6">
          Welcome to BBCD College, where education meets excellence and dreams take flight! At BBCD College, we are committed to nurturing bright minds through a blend of quality teaching, innovative learning, and a vibrant campus life. Our dedicated faculty and state-of-the-art facilities provide the perfect environment for students to explore their passions, develop critical skills, and prepare for successful careers. Whether you are stepping into your academic journey or advancing your expertise, BBCD College is your gateway to endless opportunities, personal growth, and lifelong friendships. Join us and be a part of a community that inspires, empowers, and transforms.
        </p>

        <div className="flex gap-4">
          <Link
            to="/courses"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            View Courses
          </Link>
          <Link
            to="/admissions"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Admissions
          </Link>
          <Link
            to="/faculty"
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
          >
            Meet Faculty
          </Link>
        </div>

        <section className="mt-10">
          <h3 className="text-xl font-semibold mb-2">Latest News</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Fall semester admissions open from Aug 1.</li>
            <li>Guest lecture on AI by Dr. Smith on Aug 15.</li>
            <li>Campus festival scheduled for Sept 10-12.</li>
          </ul>
        </section>
      </main>

      <footer className="bg-gray-800 text-gray-200 p-4 text-center">
        Contact us: info@awesomecollege.edu | +1 (555) 123-4567
      </footer>
    </div>
  );
};

export default Home;

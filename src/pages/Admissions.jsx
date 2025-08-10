import React from "react";

const Admissions = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10 md:px-20 lg:px-40">
      <h1 className="text-4xl font-bold mb-6 text-orange-400 font-serif">
        Admissions at BBCD College of Technology
      </h1>

      <p className="mb-6 text-lg leading-relaxed font-light text-gray-300">
        Welcome to the Admissions portal of BBCD College of Technology. We are
        dedicated to selecting the best and brightest minds to join our
        academic community. Our admissions process is designed to be
        transparent, fair, and student-friendly.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-orange-300">
        Admission Criteria
      </h2>
      <ul className="list-disc list-inside mb-6 text-gray-300 space-y-2">
        <li>Successful completion of 12th grade or equivalent with required marks.</li>
        <li>Entrance examination scores (if applicable).</li>
        <li>Submission of all required documents before deadlines.</li>
        <li>Personal interview or counseling session (if required).</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4 text-orange-300">
        How to Apply
      </h2>
      <ol className="list-decimal list-inside mb-6 text-gray-300 space-y-2">
        <li>Visit our official admissions portal online.</li>
        <li>Fill in the application form with accurate details.</li>
        <li>Upload necessary documents such as mark sheets, certificates, and ID proof.</li>
        <li>Pay the application fee via online payment methods.</li>
        <li>Submit your application and note down your application number.</li>
      </ol>

      <p className="mb-6 text-lg leading-relaxed font-light text-gray-300">
        For any assistance or queries regarding admissions, please contact our
        admissions office at <a href="mailto:admissions@bbcdtech.edu" className="text-orange-400 underline">admissions@bbcdtech.edu</a> or call
        +91 98348 58463.
      </p>
    </div>
  );
};

export default Admissions;


import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white text-black px-6 py-10 md:px-20 lg:px-40 dark:bg-gray-900 dark:text-white">
      <h1 className="text-4xl font-bold mb-6 text-orange-400 font-serif">
        About BBCD College of Technology
      </h1>
      <div className="para font-mono pl-11 pr-11">

      <p className="mb-6 leading-relaxed">
        BBCD College of Technology is a premier institution committed to
        excellence in engineering education, research, and innovation. Since
        its establishment, the college has been dedicated to nurturing talented
        individuals and equipping them with cutting-edge knowledge and skills.
      </p>

      <p className="mb-6 leading-relaxed  ">
        Our state-of-the-art campus provides a vibrant learning environment
        with modern laboratories, well-equipped libraries, and collaborative
        spaces. We focus on fostering creativity, critical thinking, and
        leadership qualities to prepare students for the challenges of the
        professional world.
      </p>

      <p className="mb-6 leading-relaxed">
        The faculty at BBCD College consists of experienced educators and
        industry experts dedicated to mentoring students and guiding them
        towards academic and career success. We also actively collaborate with
        industries and research institutions to keep our curriculum relevant
        and to provide students with practical exposure.
      </p>

      <p className="mb-6 text-lg leading-relaxed ">
        Join BBCD College of Technology to embark on a transformative journey
        where knowledge meets innovation, and dreams turn into reality.
      </p>
      </div>
    </div>
  );
};

export default AboutUs;

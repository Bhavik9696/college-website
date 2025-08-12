import React from "react";
import { Link } from "react-router-dom";
import clgimg from '../assets/clgimg.png';
import clgimg2 from '../assets/cligimg2.jpg';
import clgimg3 from '../assets/clgimg3.jpg';
import clgimg4 from '../assets/clgimg4.jpg';
import clgimg5 from '../assets/clgimg5.jpg';
import clgimg6 from '../assets/clgimg6.jpeg';
import clgimg7 from '../assets/clgimg7.jpg';
import { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../App.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';




const Home = () => {
   const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };


  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900 dark:text-white transition-colors">
      

      <main className="flex-grow container mx-auto px-4 pt-4 dark:bg-white-900 dark:text-white transition-colors">
        <h1 className="text-2xl font-semibold mb-1 font-mono sm:pt-4 text-orange-400 ">
          Welcome to BBCD College!
        </h1>
        <p className="mb-6  from-neutral-300 md:text-lg ">
          Welcome to BBCD College, where education meets excellence and dreams take flight! At BBCD College, we are committed to nurturing bright minds through a blend of quality teaching, innovative learning, and a vibrant campus life. Our dedicated faculty and state-of-the-art facilities provide the perfect environment for students to explore their passions, develop critical skills, and prepare for successful careers. Whether you are stepping into your academic journey or advancing your expertise, BBCD College is your gateway to endless opportunities, personal growth, and lifelong friendships. Join us and be a part of a community that inspires, empowers, and transforms.
        </p>

         <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide><img src={clgimg} alt="clgimg" className="rounded-xl mb-5 sm:h-96  md:ml-4 xl:ml-0 shadow-lg shadow-blue-500/90"/></SwiperSlide>
        <SwiperSlide><img src={clgimg2} alt="clgimg" className="rounded-xl mb-5 sm:h-96  md:ml-4 xl:ml-0 shadow-lg shadow-blue-500/90"/></SwiperSlide>
        <SwiperSlide><img src={clgimg3} alt="clgimg" className="rounded-xl mb-5 sm:h-96  md:ml-4 xl:ml-0 shadow-lg shadow-blue-500/90"/></SwiperSlide>
        <SwiperSlide><img src={clgimg4} alt="clgimg" className="rounded-xl mb-5 sm:h-96  md:ml-4 xl:ml-0 shadow-lg shadow-blue-500/90"/></SwiperSlide>
        <SwiperSlide><img src={clgimg5} alt="clgimg" className="rounded-xl mb-5 sm:h-96  md:ml-4 xl:ml-0 shadow-lg shadow-blue-500/90"/></SwiperSlide>
        <SwiperSlide><img src={clgimg6} alt="clgimg" className="rounded-xl mb-5 sm:h-96  md:ml-4 xl:ml-0 shadow-lg shadow-blue-500/90"/></SwiperSlide>
        <SwiperSlide><img src={clgimg7} alt="clgimg" className="rounded-xl mb-5 sm:h-96  md:ml-4 xl:ml-0 shadow-lg shadow-blue-500/90"/></SwiperSlide>
        
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>



        <section className="mt-10">
          <h3 className="text-3xl font-semibold mb-2 text-orange-500">Latest News</h3>
          <ul className="list-disc list-inside  from-neutral-300 mb-5 text-sm flex flex-col gap-3 md:flex-row md:text-lg xl:gap-8">
            <li>1. AI Workshop Series Kicks Off This Month!
Our Department of Computer Science is organizing a hands-on workshop on Artificial Intelligence and Machine Learning starting August 20th. Students will get to work with real datasets and build intelligent models.</li>
            <li>2.New State-of-the-Art Robotics Lab Inaugurated
The college has launched a new robotics research lab equipped with cutting-edge tools and 3D printers, fostering innovation in automation and AI-driven robotics.</li>
            <li>3. Internship Opportunities with Top Tech Companies
Several companies including Infosys, TCS, and Google have opened internship applications exclusively for our engineering students. Apply by September 5th for summer internships.

</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Home;

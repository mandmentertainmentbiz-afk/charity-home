import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import smile from "../assets/slider/smile.PNG";
import banner3 from "../assets/slider/banner3.png";
import img1 from "../assets/slider/img1.jpg";
import img2 from "../assets/slider/img2.jpg";
import img3 from "../assets/slider/img3.jpg";

const HeroSlider = () => {
  const images = [banner3, img1, img2, img3];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen pt-24">
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${images[index]})` }}
      />
      

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20" />

      <div className="relative z-10 flex items-center h-screen px-6 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-xl text-white"
        >
          <h1 className="text-4xl md:text-7xl font-bold mb-6">
            Elevate Hope & Care Association
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Transforming lives through love and education.
          </p>

          <div className="flex gap-4">
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
              Donate Now
            </button>

            <button className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="font-sans text-gray-800">
      <HeroSlider />

      {/* IMPACT */}
      <section className="py-20 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold mb-12">Our Impact</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
          {["500+ Children", "20+ Communities", "15+ Years"].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-10 rounded-2xl shadow-lg"
            >
              <h3 className="text-3xl font-bold text-yellow-500 mb-2">
                {item}
              </h3>
              <p className="text-gray-600">Lives impacted positively</p>
            </motion.div>
          ))}
        </div>
      </section>

       {/* ABOUT */}
      <section className="py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-12">
        <motion.img
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
          className="rounded-2xl shadow-xl w-full md:w-1/2"
          alt="about"
        />

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="max-w-xl"
        >
          <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
          <p className="text-gray-600 mb-6">
            EHCA is committed to empowering children with education,
            healthcare, and emotional support to build a brighter future.
          </p>

          <button className="bg-blue-900 text-white px-6 py-3 rounded-xl shadow hover:scale-105 transition">
            Learn More
          </button>
        </motion.div>
      </section>

     {/* WHAT WE DO */}
      <section className="text-center py-16 px-10">
        <h2 className="text-3xl font-bold mb-10">What We Do</h2>

        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="bg-white p-8 rounded-xl shadow w-72">
            <h3 className="text-xl font-bold mb-2">Care & Support</h3>
            <p>Helping vulnerable individuals with essential care.</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow w-72">
            <h3 className="text-xl font-bold mb-2">Education</h3>
            <p>Providing access to learning and skills training.</p>
          </div>
        

        
          <div className="bg-white p-8 rounded-xl shadow w-72">
            <h3 className="text-xl font-bold mb-2">Care & Support</h3>
            <p>Helping vulnerable individuals with essential care.</p>
          </div>

          
          <div className="bg-white p-8 rounded-xl shadow w-72">
            <h3 className="text-xl font-bold mb-2">Care & Support</h3>
            <p>Helping vulnerable individuals with essential care.</p>
          </div>
          </div>
      </section>


    </div>
  );
}

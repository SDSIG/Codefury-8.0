import React from "react";
import introData from "../data/introData";

const About = () => {
  return (
    <section
      id="about"
      className="w-full px-6 py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-lg md:text-xl text-purple-400 uppercase tracking-widest mb-2">
          {introData.presentedBy}
        </h3>
        <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-md">
          {introData.title}
        </h2>
        <p className="text-2xl md:text-3xl font-semibold text-purple-300 mb-4">
          {introData.tagline}
        </p>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
          {introData.description}
        </p>
        <p className="text-md md:text-lg text-gray-400 mb-8">
          📅 <span className="font-medium text-white">{introData.date}</span>
        </p>

        {introData.showTimer && (
          <div className="mb-10">
            {/* You can add a countdown here if needed */}
            <p className="text-sm uppercase tracking-wide text-yellow-400">
              Countdown Coming Soon...
            </p>
          </div>
        )}

        <a
          href="#register"
          className="inline-block bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-full text-white font-medium shadow-lg"
        >
          {introData.registerButton}
        </a>
      </div>

      {/* Logos Section */}
      <div className="max-w-4xl mx-auto mt-16 text-center">
        <h3 className="text-2xl font-semibold text-white mb-6">Presented By</h3>
        <div className="flex justify-center items-center gap-12 flex-wrap">
          <img
            src={introData.logos.ieee}
            alt="IEEE Logo"
            className="h-16 w-auto"
          />
          <img src={introData.logos.cs} alt="CS Logo" className="h-16 w-auto" />
        </div>
      </div>
    </section>
  );
};

export default About;

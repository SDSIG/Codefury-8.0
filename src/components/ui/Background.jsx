import React from "react";

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0f0f0f]">
      {/* Glowing Blobs */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500 opacity-30 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-400 opacity-20 rounded-full blur-2xl animate-pulse" />
      <div className="absolute top-1/2 left-2/3 w-60 h-60 bg-yellow-400 opacity-20 rounded-full blur-2xl animate-pulse" />

      {/* Rotating Rings */}
      <div className="absolute top-10 left-10 w-96 h-96 border border-fuchsia-500 rounded-full animate-spin-slow opacity-10" />
      <div className="absolute bottom-20 right-20 w-72 h-72 border border-cyan-300 rounded-full animate-spin-reverse-slow opacity-10" />

      {/* Moving Lines */}
      <div className="absolute w-px h-full bg-white opacity-5 animate-move-x left-1/3" />
      <div className="absolute w-px h-full bg-white opacity-5 animate-move-x left-2/3" />
    </div>
  );
};

export default Background;

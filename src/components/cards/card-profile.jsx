import React from "react"; 
import BorderImage from "../animations/border-image";

const CardProfile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br font-mono from-purple-600 to-violet-300 flex items-center justify-center p-6">
      <div className="bg-black/80 backdrop-blur-sm rounded-[2.5rem] p-8 max-w-sm w-full shadow-xl">
        <div className="flex flex-col items-center gap-5">
          <BorderImage/>
          <div className="space-y-2 text-center">
            <h2 className="text-white text-2xl font-semibold">Emily Brooks</h2>
            <p className="text-purple-400 text-sm">Full Stack Engineer</p>
            <p className="text-gray-400/90 text-sm leading-relaxed">
            Building robust and powerful, scalable applications with a strong focus 
            on delivering seamless user experiences.
            </p>
          </div>
          <div className="flex gap-3 mt-2">
            <button className="px-8 py-2.5 rounded-full bg-transparent border border-gray-700 text-white text-sm font-medium hover:bg-white/10 transition-all duration-300">
              Portfolio
            </button>
            <button className="px-8 py-2.5 rounded-full bg-violet-500 text-white hover:text-black text-sm font-medium hover:bg-violet-300 transition-all duration-300">
              Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProfile;

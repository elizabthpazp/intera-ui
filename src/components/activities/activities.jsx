"use client";

import { useState } from "react";

export default function Activities(){
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const activities = [
    { name: "Work hard", location: "At work", date: "1 April" },
    { name: "Study English", location: "At school", date: "2 April" },
    { name: "Make dinner", location: "At home", date: "3 April" },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-purple-200">
      <div className="relative max-w-md w-full p-4 rounded-3xl" style={{ marginTop: "-500px" }}>
        <div className="relative h-24">
          {activities.map((activity, index) => (
            <div key={index} style={{ marginTop: `${index === 0 ? 30 : index === 1 ? 20 : 10}px`}}
              className={`absolute font-sans left-0 right-0 top-0 w-full p-4 border-2 border-gray-200 rounded-3xl flex items-end justify-between transition-all duration-300 ease-out bg-white shadow-lg ${
                expanded ? `transform translate-y-${index * 28}` : `transform scale-90 z-10` }`}>
              <div className="flex">
                <span className="w-12 h-12 bg-purple-700 rounded-full"></span>
                <div className="ml-2">
                  <h2 className="m-0 text-purple-900 font-medium">
                    {activity.name}
                  </h2>
                  <span className="text-gray-500 text-sm">
                    {activity.location}
                  </span>
                </div>
              </div>
              <span className="text-gray-500 text-sm">{activity.date}</span>
            </div>
          ))}
        </div> 
        <div className="relative h-16 flex items-center justify-center" style={{ marginTop: "-160px" }}>
          <button onClick={toggleExpand} className="relative px-8 py-2 bg-white text-purple-900 rounded-full border-0 shadow text-sm font-semibold cursor-pointer after:content-[''] after:absolute   after:w-2 after:h-2 after:right-6 after:top-3 after:transition-all after:duration-300"
            style={{transform: expanded ? "rotate(0deg)" : "rotate(0deg)", ":after": {
                transform: expanded ? "rotate(45deg)" : "rotate(225deg)" }}}>
            {expanded ? "Hide" : "Show"}
          </button>
        </div>
      </div>
    </div>
  );
}; 
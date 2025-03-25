"use client";

import { useState } from "react";

export default function Activities({ activities, button1Text, button2Text, darkMode }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const tempActivities = [
    { name: "Work hard", location: "At work", date: "1 April" },
    { name: "Study English", location: "At school", date: "2 April" },
    { name: "Make dinner", location: "At home", date: "3 April" },
  ];

  const [activitiesList, setActivitiesList] = useState(
    activities ?? tempActivities
  );

  return (
    <div className="flex justify-center">
      <div className="relative max-w-md w-full p-4 rounded-xl">
        {activitiesList.length > 1 && (
          <div
            className={`
            flex items-center justify-center 
            transition-all duration-300 ease-out mb-4
          `}
          >
            <button
              onClick={toggleExpand}
              className={`
              relative px-8 py-2 rounded-2xl 
              border-2 shadow text-sm font-semibold 
              cursor-pointer after:content-[''] 
              after:absolute  
              after:w-2 after:h-2 after:right-6 
              after:top-3 after:transition-all 
              after:duration-300 
              ${expanded ? "after:rotate-45" : "after:rotate-225"}
              ${darkMode ? 'text-white bg-gray-900 border-zinc-800 hover:border-zinc-600' : 'border-zinc-200 hover:border-zinc-300 bg-white text-gray-900'}
            `}
            >
              {expanded ? button1Text ?? "Hide" : button2Text ?? "Show"}
            </button>
          </div>
        )}

        <div
          className="relative"
          style={{
            height: expanded
              ? `${activitiesList.length * 7}rem`
              : `${(activitiesList.length + 1) * 3}rem`,
          }}
        >
          {activitiesList.map((activity, index) => (
            <div
              key={index}
              className={`
              absolute top-0 left-0 right-0 w-full p-4 
              border-2 rounded-3xl 
              flex items-end justify-between 
              transition-all duration-300 ease-out 
               shadow-lg 
              ${darkMode ? 'bg-gray-900 border-zinc-800' : 'bg-white border-gray-200'}
              ${
                expanded
                  ? "transform-none"
                  : `transform scale-${95 - index * 5} z-${20 - index * 5}`
              }`}
              style={{
                top: expanded
                  ? `${index * 6}rem`
                  : `${index}rem`,
                transform: expanded ? "scale(1)" : `scale(${1 - index * 0.05})`,
                zIndex: activitiesList.length - index,
              }}
            >
              <div className="flex items-center">
                <span className={`${darkMode ? 'bg-gray-700' : 'bg-gray-300'} w-12 h-12 rounded-3xl mr-2`}></span>
                <div>
                  <h2 className={`${darkMode ? 'text-white' : 'text-gray-900'} m-0 text-base font-medium`}>
                    {activity.name || "Unnamed Activity"}
                  </h2>
                  <span className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-sm`}>
                    {activity.location || "Unknown Location"}
                  </span>
                </div>
              </div>
              <span className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-sm`}>
                {activity.date || "No Date"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
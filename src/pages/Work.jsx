import React from "react";
import { Link } from "react-router-dom";

function Work() {
  return (
    <div className="flex flex-col py-10">
      <div className="flex flex-col items-start">
        <div className="flex flex-row w-full justify-start">
          <h1 className="text-2xl underline underline-offset-8">work</h1>
        </div>
        <div className="grid grid-cols-2 grid-flow-col gap-2 mt-6 text-left">
          <div className="flex flex-col items-start h-full">
            <img
              src="https://via.placeholder.com/600x300"
              className="w-full mb-2"
            />
            <h1>garden</h1>
            <p className="flex-grow mt-2">
              🌱 a place to think about digital gardening
            </p>
            <div className="flex space-x-2 mt-4">
              <div className="flex items-center border border-black text-black px-1 rounded-full text-xs">
                typescript
              </div>
              <div className="flex items-center border border-black text-black px-1  rounded-full text-xs">
                node.js
              </div>
            </div>
            <p className="text-sm mt-2">{"GITHUB / SITE"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;

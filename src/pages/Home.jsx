import React from "react";

import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col justify-start py-12 h-full">
      <div className="flex flex-col items-start">
        <div className="flex flex-row w-full justify-start">
          <h1 className="text-2xl underline underline-offset-8">yash walia</h1>
        </div>
        <div className="flex text-left mt-4">
          <p>
            I work on developer experience tools and processes while leading
            teams to build elegant, responsive, and speedy software and websites
            at Graveflex. I mostly work across the stack and love thinking about
            project architecture, design systems, and component libraries. On
            the side, I'm working on Garden, which is a suite of tools for
            digital gardening. You can find some of my work here.
          </p>
        </div>
      </div>
      <div className="flex flex-col py-10">
        <div className="flex flex-row w-full justify-between">
          <h1 className="text-2xl underline underline-offset-8">
            recent projects
          </h1>
          <Link to="/work" className="underline">
            see more
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-6 text-left">
          <div className="flex flex-col items-start h-full">
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
            <div className="flex flex-row justify-center align-center">
              <a href="/" className="text-sm mt-2 hover:underline">
                {"GITHUB"}
              </a>
              <p className="text-sm mt-2 mx-1">{" / "}</p>
              <a href="/" className="text-sm mt-2 hover:underline">
                {"SITE"}
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start h-full">
            <h1>if-sf</h1>
            <p className="flex-grow mt-2">
              🔮 generate themes, theme objects, and theme tokens
            </p>
            <div className="flex space-x-2 mt-4">
              <div className="flex items-center border border-black text-black px-1  rounded-full text-xs">
                javascript
              </div>
              <div className="flex items-center border border-black text-black px-1  rounded-full text-xs">
                react
              </div>
            </div>
            <div className="flex flex-row justify-center align-center">
              <a href="/" className="text-sm mt-2 hover:underline">
                {"GITHUB"}
              </a>
              <p className="text-sm mt-2 mx-1">{" / "}</p>
              <a href="/" className="text-sm mt-2 hover:underline">
                {"SITE"}
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start h-full">
            <h1>next-mdx-relations</h1>
            <p className="flex-grow mt-2">
              🌿 a set of utilities for generating and creating relations
              between pages in Next.js using MD/X
            </p>
            <div className="flex space-x-2 mt-4">
              <div className="flex items-center border border-black text-black px-1  rounded-full text-xs">
                next.js
              </div>
              <div className="flex items-center border border-black text-black px-1  rounded-full text-xs">
                markdown
              </div>
            </div>
            <div className="flex flex-row justify-center align-center">
              <a href="/" className="text-sm mt-2 hover:underline">
                {"GITHUB"}
              </a>
              <p className="text-sm mt-2 mx-1">{" / "}</p>
              <a href="/" className="text-sm mt-2 hover:underline">
                {"SITE"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

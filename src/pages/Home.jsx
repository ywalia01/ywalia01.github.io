import React from "react";
import { Link } from "react-router-dom";
import yashImage from "../utils/images/yash3.png";
const RESUME_LINK = "https://ywalia01.github.io/resume/";

function Home() {
  return (
    <div className="flex flex-col justify-start py-12 h-full">
      <div className="flex flex-col items-start">
        <div className="flex flex-row w-full justify-start">
          {/* <h1 className="text-2xl underline underline-offset-8">yash walia</h1> */}
          <img src={yashImage} alt="Yash" className="h-12" />
        </div>
        <div className="flex flex-col text-left mt-2">
          <p>
            i'm a 22 year old student currently pursuing a masters degree in
            computer science engineering. i mostly work across the stack and
            love thinking about project architecture, design systems, and
            component libraries. i'm also passionate about communities and
            open-source.
          </p>
          <p>
            and if you couldn't already tell by the background and font, i'm a
            huge pink floyd fan
          </p>
          <p className="mt-2">
            You can find my resume{" "}
            <a className="underline" href={RESUME_LINK}>
              here
            </a>
            {" btw"}
          </p>
        </div>
      </div>
      <div className="flex flex-col py-10">
        <div className="flex flex-row w-full justify-between items-center">
          <h1 className="text-2xl underline underline-offset-8">
            recent projects
          </h1>
          <Link to="/work" className="underline">
            see more
          </Link>
        </div>
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-8 text-left">
          <div className="flex flex-col items-start h-full">
            <h1 className="font-medium">the dune api</h1>
            <p className="flex-grow mt-2">
              🌱 a simple api which provides you with book, character, movie and
              quotes json data
            </p>
            <div className="flex space-x-2 mt-2">
              <div className="flex items-center border border-black text-black px-1  rounded-full text-xs">
                node.js
              </div>
            </div>
            <div className="flex flex-row justify-center align-center mt-8">
              <a href="/" className="text-sm hover:underline">
                {"GITHUB"}
              </a>
              <p className="text-sm mx-1">{" / "}</p>
              <a href="/" className="text-sm hover:underline">
                {"SITE"}
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start h-full">
            <h1 className="font-medium">if-sf</h1>
            <p className="flex-grow mt-2">
              🔮 generate themes, theme objects, and theme tokens
            </p>
            <div className="flex space-x-2 mt-2">
              <div className="flex items-center border border-black text-black px-1  rounded-full text-xs">
                javascript
              </div>
              <div className="flex items-center border border-black text-black px-1  rounded-full text-xs">
                react
              </div>
            </div>
            <div className="flex flex-row justify-center align-center mt-8">
              <a href="/" className="text-sm hover:underline">
                {"GITHUB"}
              </a>
              <p className="text-sm mx-1">{" / "}</p>
              <a href="/" className="text-sm hover:underline">
                {"SITE"}
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start h-full">
            <h1 className="font-medium">next-mdx-relations</h1>
            <p className="flex-grow mt-2">
              🌿 a set of utilities for generating and creating relations
              between pages in Next.js using MD/X
            </p>
            <div className="flex space-x-2 mt-2">
              <div className="flex items-center border border-black text-black px-1  rounded-full text-xs">
                next.js
              </div>
              <div className="flex items-center border border-black text-black px-1  rounded-full text-xs">
                markdown
              </div>
            </div>
            <div className="flex flex-row justify-center align-center mt-8">
              <a href="/" className="text-sm hover:underline">
                {"GITHUB"}
              </a>
              <p className="text-sm mx-1">{" / "}</p>
              <a href="/" className="text-sm hover:underline">
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

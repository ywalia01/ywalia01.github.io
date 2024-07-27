import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Work from "./pages/Work.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bgGrid max-w-[768px] w-[768px] px-8 sm:px-8 md:px-0 ">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/work" element={<Work />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

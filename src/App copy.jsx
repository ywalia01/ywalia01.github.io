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
      <div className="grid grid-rows-[min-content_auto_min-content] grid-cols-[minmax(16px,1fr)_minmax(0,780px)_minmax(16px,1fr)] min-w-[320px] min-h-screen">
        <header className="flex items-center justify-between col-start-2 w-full flex-shrink-0">
          <Header />
        </header>
        <main className="col-start-2 w-full flex-shrink-0 my-0 mx-0 py-6 flex-grow">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/work" element={<Work />} />
          </Routes>
        </main>
        <footer className="flex items-center justify-between col-start-2 w-full flex-shrink-0">
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

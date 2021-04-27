import React from "react";
import './App.css';
import Header from './components//Header/Header';
import Container from './components//Container/Container';
import Footer from './components/Footer/Footer';
import ScrollButton from './components/ScrollButton/ScrollButton';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Container />
      <Footer />
      <ScrollButton />
    </div>
  );
}

export default App;

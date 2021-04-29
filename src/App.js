import React, { useEffect } from "react";
import './App.css';
import Header from './components//Header/Header';
import Container from './components//Container/Container';
import Footer from './components/Footer/Footer';
import ScrollButton from './components/ScrollButton/ScrollButton';
import { keepTheme } from './Util/themes';
import Toggle from './components/Toggle/Toggle';

function App() {
  useEffect(() => {
    keepTheme();
  })
  return (
    <div className="wrapper">
      <Toggle />
      <Header />
      <Container />
      <Footer />
      <ScrollButton />
    </div>
  );
}

export default App;

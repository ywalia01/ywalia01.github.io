import React, { useState } from 'react';
import './ScrollButton.css';
import { FaChevronUp } from 'react-icons/fa';
  
const ScrollButton = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200){
      setVisible(true)
    } 
    else if (scrolled <= 200){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <div className="scrollButton">
     <FaChevronUp onClick={scrollToTop} 
        style={{ display: visible ? 'inline' : 'none' }} />
    </div>
  );
}
  
export default ScrollButton;
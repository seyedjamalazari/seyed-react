import React from 'react';
import{useToggleSlider}from "react-toggle-slider";

const Slider = () => {
     const [toggleSlider, active] = useToggleSlider({padding:"30em"});
    
    return (
      
         
  
        <div>
            { toggleSlider }
            Slider is {active ? "active" : "inactive"}
        </div>
 
      
    );
};

export default Slider;
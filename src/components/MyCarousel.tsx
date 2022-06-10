import * as React from "react";
import Image from "./Image";

import "../img/Ass.png"
import "../img/jerry.png"
import "../img/rickMorty.png"
import "../img/Left.png"
import "../img/Right.png"
import "../img/DoteNav.png"
import "../img/ActiveDoteNav.png"


import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';


function MyCarousel() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          className: "sliderButtonRight",
          children: <Image src="img/Right.png"/>,
        }}
        backwardBtnProps={{
          className: "sliderButtonLeft",
          //here you can also pass className, or any other button element attributes
          children: <Image src="img/Left.png"/>,
        }}  
        responsiveProps={[
          {
            itemsToShow: 1,
            itemsToScroll: 1,
            minWidth: 680,
          },
        ]}
        dotsNav={{
          show: true,
          itemBtnProps: {
            className: "dotsNavSlider",
            children: <Image src="img/DoteNav.png"/>,
          },
          activeItemBtnProps: {
            className: "activeDotsNavSlider",
            children: <Image src="img/ActiveDoteNav.png"/>,
          }
        }}
        speed={400}
        easing="linear"
      >
        
        <div style={{ width: 678, height: 233}}>
          <Image className="ContentImgSlider" src="img/jerry.png"/>
        </div>
        <div style={{ width: 678, height: 233}}>
        <Image className="ContentImgSlider" src="img/rickMorty.png"/>
        </div>
        <div style={{ width: 678, height: 233}}>
        <Image className="ContentImgSlider" src="img/Ass.png"/>
        </div>
      </ReactSimplyCarousel>
    </div>
  );
}

export default MyCarousel;

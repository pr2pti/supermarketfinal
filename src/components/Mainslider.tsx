import { Component } from "react";
import Slider from "./Slider"
const sliders = [
  { imgSrc: "11.jpg", desc: "Buy Rice Products That Are Now OnLine With Us" },
  { imgSrc: "22.jpg", desc: "Whole Spices Products Are Now OnLine With Us" },
  { imgSrc: "44.jpg", desc: "Whole Spices Products Are Now OnLine With Us" },
];

class MainSlider extends Component {
  render() {
    return (
      <div>
        <ul id="demo1">
          {sliders.map((slider, index) => (
            <Slider key={index} {...slider} />
          ))}
        </ul>
      </div>
    );
  }
}

export default MainSlider;

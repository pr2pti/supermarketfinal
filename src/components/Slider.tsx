import { Component } from "react";

interface SliderProps {
  imgSrc: string;
  desc: string;
}

class Slider extends Component<SliderProps> {
  constructor(props: SliderProps) {
    super(props);
  }
  render() {
    const { imgSrc, desc } = { ...this.props };
    return (
      <li>
        <img src={"../../../assets/images/" + imgSrc} alt="" />
        <div className="slide-desc">
          <h3>{desc}</h3>
        </div>
      </li>
    );
  }
}

export default Slider;

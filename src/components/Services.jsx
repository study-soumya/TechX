import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../assets/python.jpg";
import img2 from "../assets/django.jpg";
import img3 from "../assets/hacking.jpg";
import img4 from "../assets/coding.jpg";

const Services = () => {
  return (
    <div className="services">
      <Carousel
        infiniteLoop
        autoPlay
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        interval={1000}
      >
        <div>
          <img src={img1} alt="Item 1" />
          <p className="legend">Python</p>
        </div>

        <div>
          <img src={img2} alt="Item 2" />
          <p className="legend">Django</p>
        </div>

        <div>
          <img src={img3} alt="Item 2" />
          <p className="legend">Ethical Hacking</p>
        </div>

        <div>
          <img src={img4} alt="Item 2" />
          <p className="legend">Web Development</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;

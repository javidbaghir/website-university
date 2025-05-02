import React, { useRef } from "react";
import "./testimonials.css";
import { ChevronLeft, ChevronRight, MoveRight } from "lucide-react";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  return (
    <div className="testimonials" id="testimonial">
      <span className="back-btn">
        <ChevronLeft color="white" onClick={slideBackward} />
      </span>

      <span className="next-btn">
        <ChevronRight color="white" onClick={slideForward} />
      </span>

      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img
                  src="https://www.malvernbh.com/wp-content/uploads/2023/02/shutterstock_1079701271-1-min-scaled.jpg"
                  alt=""
                />
                <div>
                  <h3>Magnus</h3>
                  <span>Ceyranbatan, Azerbaijan</span>
                </div>
              </div>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                dolore minima temporibus.
              </span>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img
                  src="https://www.malvernbh.com/wp-content/uploads/2023/02/shutterstock_1079701271-1-min-scaled.jpg"
                  alt=""
                />
                <div>
                  <h3>Soren</h3>
                  <span>Ceyranbatan, Azerbaijan</span>
                </div>
              </div>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                dolore minima temporibus.
              </span>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img
                  src="https://www.malvernbh.com/wp-content/uploads/2023/02/shutterstock_1079701271-1-min-scaled.jpg"
                  alt=""
                />
                <div>
                  <h3>Leon</h3>
                  <span>Ceyranbatan, Azerbaijan</span>
                </div>
              </div>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                dolore minima temporibus.
              </span>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img
                  src="https://www.malvernbh.com/wp-content/uploads/2023/02/shutterstock_1079701271-1-min-scaled.jpg"
                  alt=""
                />
                <div>
                  <h3>Nael</h3>
                  <span>Ceyranbatan, Azerbaijan</span>
                </div>
              </div>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                dolore minima temporibus.
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;

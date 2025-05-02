import React from "react";
import "./campus.css";
import { HiArrowLongRight } from "react-icons/hi2";

const Campus = () => {
  return (
    <div className="campus">
      <div className="gallery">
        <img
          src="https://www.malvernbh.com/wp-content/uploads/2023/02/shutterstock_1079701271-1-min-scaled.jpg"
          alt=""
        />
        <img
          src="https://www.malvernbh.com/wp-content/uploads/2023/02/shutterstock_1079701271-1-min-scaled.jpg"
          alt=""
        />
        <img
          src="https://www.malvernbh.com/wp-content/uploads/2023/02/shutterstock_1079701271-1-min-scaled.jpg"
          alt=""
        />
        <img
          src="https://www.malvernbh.com/wp-content/uploads/2023/02/shutterstock_1079701271-1-min-scaled.jpg"
          alt=""
        />
      </div>
      <button className="btn dark-btn">
        See more here
        <HiArrowLongRight />
      </button>
    </div>
  );
};

export default Campus;

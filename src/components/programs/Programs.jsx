import React from "react";
import "./programs.css";
import program_1 from "../../assets/program_1.jpg";
import program_2 from "../../assets/program_2.webp";
import program_3 from "../../assets/program_3.jpg";
import { BookOpen, GraduationCap, School } from "lucide-react";

const Programs = () => {
  return (
    <div className="programs" id="program">
      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
          <GraduationCap />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
          <BookOpen />
          <p>Masters Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="" />
        <div className="caption">
          <School />
          <p>Post Degree</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;

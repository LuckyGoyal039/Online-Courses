import { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard";
import Navbar from "../components/Navbar";
import "../style/courseListing.css";
import { getCourseData } from "../config/firebase";

const CourseListing = () => {
  const [courseData, setCourseData] = useState([]);
  useEffect(() => {
    getCourseData()
      .then((data) => setCourseData(data))
      .catch((error) => console.log("Error fetching data: ", error));
  }, []);
  return (
    <>
      <Navbar />
      <div className="outerContainer">
        <ul className="cardList">
          {courseData.map((ele, ind) => {
            return (
              <li key={ele.id} className="courseTemplate">
                <a href={`/course-detail/${ele.id}`}>
                  <CourseCard data={ele} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default CourseListing;

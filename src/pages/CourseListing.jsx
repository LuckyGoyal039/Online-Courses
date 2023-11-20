import { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard";
import Navbar from "../components/Navbar";
import { getCourseData } from "../config/firebase";
import { FcSearch } from "react-icons/fc";
import "../style/courseListing.css";

const CourseListing = () => {
  const [courseData, setCourseData] = useState(null);
  const [copyCourseData, setCopyCourseData] = useState(null);

  function allDetails() {
    return copyCourseData.length > 0 ? (
      copyCourseData?.map((ele, ind) => {
        return (
          <li key={ele.id} className="courseTemplate">
            <a href={`/course-detail/${ele.id}`}>
              <CourseCard data={ele} />
            </a>
          </li>
        );
      })
    ) : (
      <div className="dataNotFound">
        <span className="fcSearchIcon">
          <FcSearch />
        </span>
        <h1>Data Not Found!!</h1>
      </div>
    );
  }

  useEffect(() => {
    getCourseData()
      .then((data) => {
        setCourseData(data);
        setCopyCourseData(data);
      })
      .catch((error) => console.log("Error fetching data: ", error));
  }, []);

  return (
    <>
      <Navbar data={courseData} setData={setCopyCourseData} />
      <div className="outerContainer">
        <ul className="cardList">
          {copyCourseData === null ? (
            <div className="outerLoader">
              <div className="loader"></div>
            </div>
          ) : (
            allDetails()
          )}
        </ul>
      </div>
    </>
  );
};

export default CourseListing;

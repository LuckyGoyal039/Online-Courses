import CourseCard from "../components/CourseCard";
import Navbar from "../components/Navbar";
import "../style/courseListing.css";

const CourseListing = () => {
  return (
    <>
      <Navbar />
      <div className="outerContainer">
        <ul className="cardList">
          <li>
            <CourseCard />
          </li>
          <li>
            <CourseCard />
          </li>
          <li>
            <CourseCard />
          </li>
          <li>
            <CourseCard />
          </li>
          <li>
            <CourseCard />
          </li>
        </ul>
      </div>
    </>
  );
};

export default CourseListing;

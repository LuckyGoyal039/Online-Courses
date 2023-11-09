import { AiFillStar } from "react-icons/ai";
import "../style/courseCard.css";

const CourseCard = () => {
  const courseName = "Learn React for web development";
  const level = "Advanced";
  const duration = "12 hours";
  const instructure = "Lucky goyal";
  const courseImage =
    "https://miro.medium.com/v2/resize:fit:1200/1*y6C4nSvy2Woe0m7bWEn4BA.png";
  const rating = "4.7";

  return (
    <div className="card ml-2 main" style={{ width: "300px" }}>
      <img src={courseImage} className="card-img-top" alt="Course thumbnail" />
      <div className="card-body content">
        <h5 className="card-title">{courseName}</h5>
        <h5 className="card-text">Instructure: {instructure}</h5>
        <p className="card-text">Duration: {duration}</p>
        <p className="rating h6">
          <AiFillStar className="" />
          {rating} 
        </p>
        <p>{level}</p>
      </div>
    </div>
  );
};

export default CourseCard;

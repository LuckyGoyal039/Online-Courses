import { AiFillStar } from "react-icons/ai";
import { FaChalkboardTeacher } from "react-icons/fa";
import "../style/courseCard.css";
import { GiDuration } from "react-icons/gi";

const CourseCard = ({ data }) => {
  return (
    <div className="  card mainCard">
      <div className="imageBox">
        <img
          src={data.thumbnail}
          className="card-img-top"
          alt="Course thumbnail"
        />
      </div>
      <div className="card-body">
        <div className="content-1">
          <p>
            <span>
              <FaChalkboardTeacher className="instructorIcon" />
            </span>
            <span className="instructor">{data.instructor}</span>
          </p>
          <h5 className="cardTitle">{data.name}</h5>
        </div>
        <div className="content-2">
          <p className="rating">
            <span>
              <AiFillStar className="starIcon" />
            </span>
            <span>{data.rating}</span>
          </p>
          <div className="level">
            <span>{data.level}</span>
            <div className="duration">
              <span className="durationIconContainer">
                <GiDuration className="durationIcon" />
              </span>
              <span>{data.duration}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

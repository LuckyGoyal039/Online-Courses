import { useParams } from "react-router-dom";
import { getCourseData } from "../config/firebase";
import { useEffect } from "react";
import { useState } from "react";

const CourseDetails = () => {
  const [courseData, setCourseData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getCourseData()
      .then((res) => {
        const data = res.filter((ele) => {
          return ele.id === id ? true : false;
        });
        setCourseData(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      {courseData?.map((ele, index) => {
        return <p>{ele.id}</p>;
      })}
    </>
  );
};

export default CourseDetails;

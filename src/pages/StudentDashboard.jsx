import { useSelector } from "react-redux";

const StudentDashboard = () => {
  const user = useSelector((state) => state.global.user);
  console.log(user);
  return (
    <>
      <p>Student page</p>
    </>
  );
};

export default StudentDashboard;

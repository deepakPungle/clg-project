import StaffCard from "../../src/component/StaffCard";
import HODCard from "../../src/component/hodcard";

const CompFaculty = () => {
  return (
    <>
      <div className="container">
        <HODCard department={"Computer Engineering"} />
        <StaffCard />
      </div>
    </>
  );
};

export default CompFaculty;

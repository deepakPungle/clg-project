import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
const DepartmentPage = () => {
  return (
    <>
      <div className="outlet container bg-ffffff">
        <Outlet />
      </div>
    </>
  );
};
export default DepartmentPage;

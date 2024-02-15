import { Outlet } from "react-router-dom";
import ThemedNavbar from "../src/component/facultynav";

const ComputerDeptPage = () => {
  return (
    <>
      <ThemedNavbar />
      <Outlet />
    </>
  );
};
export default ComputerDeptPage;

import React from "react";
import Home from "../pages/home";
import "./App.css";
import Navbar from "./component/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DepartmentPage from "../pages/department";
import Footer from "../src/component/footer";
import CardGroup from "./component/cardgroup";
import BigCard from "./component/big-info-index";
import ComputerDeptPage from "../pages/computer-dept";
import CivilDeptPage from "../pages/civil-dept";
import MechanicalDeptPage from "../pages/mechanical-dept";
import ElectricalDeptPage from "../pages/Electrical-dept";
import ChemicalDeptPage from "../pages/chemical-dept";
import Header from "./component/header";
import PageNotFound from "../pages/PageNotFound";
import CompFaculty from "../pages/Faculty/computerFaculty";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/BigCard" element={<BigCard />} />
          <Route path="/cardGroup" element={<CardGroup />} />
          <Route path="/department" element={<DepartmentPage />}>
            <Route index element={<div>Department Home Page</div>} />
            <Route path="computer-department" element={<ComputerDeptPage />}>
              <Route path="faculty" element={<CompFaculty />} />
            </Route>
            <Route path="chemical-department" element={<ChemicalDeptPage />} />
            <Route path="civil-department" element={<CivilDeptPage />} />
            <Route
              path="electrical-department"
              element={<ElectricalDeptPage />}
            />
            <Route
              path="mechanical-department"
              element={<MechanicalDeptPage />}
            />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

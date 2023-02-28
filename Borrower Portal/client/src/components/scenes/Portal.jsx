import React from "react";
import Navbar from "../reusable/Navbar";
import { useSelector } from "react-redux";
import BorrowerDashboard from "./BorrowerDashboard";
import Documents from "./Documents";
import Signatures from "./Signatures";
import PersonalInfo from "./PersonalInfo";
import Employment from "./Employment";
import AssetsLiabilities from "./AssetsLiabilities";
import PropertyOwned from "./PropertyOwned";
import LoanInfo from "./LoanInfo";

const Portal = () => {
  const pageSelector = (page) => {
    if (page === "BorrowerDashboard") return <BorrowerDashboard />;
    else if (page === "Documents") return <Documents />;
    else if (page === "Signatures") return <Signatures />;
    else if (page === "PersonalInfo") return <PersonalInfo />;
    else if (page === "Employment") return <Employment />;
    else if (page === "AssetsLiabilities") return <AssetsLiabilities />;
    else if (page === "PropertyOwned") return <PropertyOwned />;
    else if (page === "LoanInfo") return <LoanInfo />;
  };
  const { activePage } = useSelector((state) => state.portal);
  return (
    <>
      <Navbar />
      {pageSelector(activePage)}
    </>
  );
};

export default Portal;

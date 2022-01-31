import React from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

const Scroole = () => {
  return (
    <div>
      <div className="scroole">
       
        <Link to={`/products/`}>T</Link>
      </div>

      <ScrollToTop />
    </div>
  );
};

export default Scroole;

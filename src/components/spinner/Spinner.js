import React from "react";

const Spinner = (props) => {
  return (
    <div className="w-100 h-100 justify-content-center d-flex align-items-center mt-3">
      <div className="spinner-border text-primary" role="status"></div>
    </div>
  );
};

export default Spinner;

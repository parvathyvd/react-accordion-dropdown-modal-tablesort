import React from "react";

const Panel = ({ className, children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`${className} bg-slate-50 cursor-pointer drop-shadow-sm p-3`}
    >
      {children}
    </div>
  );
};

export default Panel;

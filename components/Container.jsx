import React from "react";

function Container({ children, id, className }) {
  return (
    <div id={id} className="w-full lg:min-h-[calc(100vh-80px)] 2xl:min-h-0">
      <div className={`max-w-[1240px] m-auto py-16 ${className}`}>
        {children}
      </div>
    </div>
  );
}

export default Container;

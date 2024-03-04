import React from "react";

export default function Container({ children }){
  return (
    <div className="xl:max-w-[74rem] 2xl:max-w-[92rem] mx-auto px-2 md:px-10 lg:px-4 xl:px-10 mb-10">
      {children}
    </div>
  );
};

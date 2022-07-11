import React from "react";

const Header = () => {
  return (
    <>
      <div
        className="header flex flex-col border-2 border-black bg-cyan-200 
       w-1/2 h-40 text-left mx-auto m-10 rounded-lg 
       "
      >
        <h1 className=" font-bold text-2xl py-5 ml-8">Hi, Richard</h1>
        <p className="ml-6">
          Welcome back to your
          <span className="ml-1">
            <a href="/">Money Manager</a>
          </span>
        </p>
      </div>
    </>
  );
};

export default Header;

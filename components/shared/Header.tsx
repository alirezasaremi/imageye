import React from "react";

const Header = (props: { title: string; subtitle?: string }) => {
  return (
    <>
      <h2 className="h2-bold text-dark-600">{props.title}</h2>
      {props.subtitle && <p className="p-16-regular mt-4">{props.subtitle}</p>}
    </>
  );
};

export default Header;

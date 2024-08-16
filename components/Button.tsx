"use client";

import React from "react";

const Button = ({ onClickHandler, children }: any) => {
  return <p onClick={onClickHandler}>{children}</p>;
};

export default Button;

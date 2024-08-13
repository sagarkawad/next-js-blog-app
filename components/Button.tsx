"use client";

import React from "react";

const Post = ({ clickHandler, children }: any) => {
  return <button onClick={clickHandler}>{children}</button>;
};

export default Post;

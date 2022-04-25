import React from "react";
import { useMediaQuery } from "react-responsive";

export const Mobile = ({ children }) => {
  const Mobile = useMediaQuery({
    query: "(max-width:768px)",
  });
  return <>{Mobile && children}</>;
};

export const Desktop = ({ children }) => {
  const Desktop = useMediaQuery({
    query: "(min-width:769px)",
  });
  return <>{Desktop && children}</>;
};

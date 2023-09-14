import React from "react";
import "./Loader.css";
import { useLoading } from "../../hooks/useLoading";

const Loader = () => {
  const { isLoading } = useLoading();
  if (!isLoading) return;
  return (
    <div className="container">
      <span className="loader"></span>
    </div>
  );
};

export default Loader;

import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error-page container center">
      <h2>The page doesnt exist</h2>
      <Link to="/">
        <Button name={"Back Home"} />
      </Link>
    </div>
  );
};

export default ErrorPage;

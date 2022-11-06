import React from "react";
import { Link } from "react-router-dom";
import ErrorBack from "../components/ErrorBoundary";
import { ErrorBoundary } from "react-error-boundary";
import Pagination from "../components/Pagination";
import { ReactComponent as ArrowLeft } from "../assets/Arrow-Left2.svg";

function ErrorPage() {
  return (
    <div className="container error-container">
      <div className="top-navigation">
        <button className="back">
          <ArrowLeft />
          <Link to="/">Back to Homepage</Link>
        </button>
      </div>
      <div className="ErrorResult alert">
        <h1 className="error-header">Showing Error Boundary Result</h1>
        <ErrorBoundary FallbackComponent={ErrorBack}>
          <Pagination />
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default ErrorPage;

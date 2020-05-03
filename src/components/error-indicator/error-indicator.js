import React from "react";
import './error-indicator.css';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <span className="ooops">Ooops! Sorry... </span>
      <span>
        Something has gone terribly wrong
      </span>
      <span>
        (but we have already sent info about error to fix it)
      </span>
    </div>
  );
};

export default ErrorIndicator;
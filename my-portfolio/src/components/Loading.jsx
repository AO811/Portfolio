// src/components/Loading.jsx
import React from "react";
import "./Loading.css";

function Loading() {
  return (
    <div className="loading-screen">
      <div className="card">
        <div className="loader">
          <p>loading</p>
          <div className="words">
            <span className="word">awesomeness...</span>
            <span className="word">Git commits...</span>
            <span className="word">skills...</span>
            <span className="word">innovation...</span>
            <span className="word">portfolio universe...</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loading;

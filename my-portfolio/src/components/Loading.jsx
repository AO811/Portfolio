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
            <span className="word">buttons</span>
            <span className="word">forms</span>
            <span className="word">switches</span>
            <span className="word">cards</span>
            <span className="word">buttons</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loading;

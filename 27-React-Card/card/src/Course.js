import React from 'react';

function Course({ title, description }) {
  return (
    <div className="card">
      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{title}</p>
        </div>
        <div className="content">{description}</div>
      </div>
    </div>
  );
}

export default Course;

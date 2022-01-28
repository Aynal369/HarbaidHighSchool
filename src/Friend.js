import React from "react";

const Friend = ({ data }) => {
  const { name, pic } = data;
  return (
    <div className="col-lg-4">
      <div className="card h-100">
        <img src={pic} className="card-img-top" alt={name} height="420" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text"></p>
        </div>
        <div className="card-footer">
          <small className="text-muted"></small>
        </div>
      </div>
    </div>
  );
};

export default Friend;

import React from "react";
import useAuth from "../Hook/useAuth";

const FriendsList = () => {
  const { friends } = useAuth();
  return (
    <div className="container">
      <div className="row">
        <div className="card bg-light shadow p-3">
          {friends.map((data, index) => (
            <div key={data._id}>
              <div className="d-flex justify-content-evenly">
                <h5>{index + 1}</h5>
                <h6>{data.fullName}</h6> -
                <span className="text-muted"> {data.village}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FriendsList;

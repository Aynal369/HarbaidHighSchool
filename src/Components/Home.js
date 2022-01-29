import {
  faMapMarkedAlt,
  faMobileAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import useAuth from "../Hook/useAuth";
import LoadingSpinner from "./LoadingSpinner";

const Home = () => {
  const { friends, setFriends } = useAuth();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/friends")
      .then((res) => res.json())
      .then((data) => {
        setFriends(data);
        setLoading(true);
      });
  }, []);

  return (
    <div className="container-fluid bg-light min-vh-100 p-2 p-sm-4">
      <div className="row g-4">
        <h1 className="text-center text-muted bg-white p-2">
          Total: {friends.length}
        </h1>
        {loading ? (
          <>
            {friends.map((data) => (
              <div className="shadow p-2" key={data._id}>
                <div className="row g-3">
                  <div className="col-4 align-self-center">
                    <img
                      src={`data:image/jpg;base64,${data.image}`}
                      className="img-fluid rounded-pill"
                      alt={data.fullName}
                    />
                  </div>
                  <div className="col-8 align-self-center">
                    <div className="card-body p-0">
                      <h3 className="card-title">
                        <FontAwesomeIcon icon={faUser} color="#777" />
                        <span className="ms-3 text-primary">
                          {data.fullName}
                        </span>
                      </h3>
                      <p className="card-text">
                        <FontAwesomeIcon icon={faMapMarkedAlt} color="#777" />
                        <span className="ms-3 text-muted"> {data.village}</span>
                      </p>
                      <p className="card-text">
                        <FontAwesomeIcon icon={faMobileAlt} color="#777" />
                        <span className="ms-3 fw-bold text-muted">
                          {data.phoneNumber}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <LoadingSpinner />
        )}
      </div>
    </div>
  );
};

export default Home;

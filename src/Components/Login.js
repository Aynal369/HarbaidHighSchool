import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import useAuth from "../Hook/useAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { signInWithGoogle, setIsLoading, setUser } = useAuth();

  let navigate = useNavigate();

  const handleGoogleAuth = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        setIsLoading(true);
        setUser(user);
        navigate("/create-profile");
      })
      .catch((error) => {
        const errorMessage = error.message;
        //  const errorCode = error.code;
        alert(errorMessage);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <section id="login" className="bg-light">
      <div className="container pt-3">
        <div className="row justify-content-center">
          <div className="col-sm-8 col-md-6 col-lg-4">
            <div className="card shadow text-center p-3">
              <p className="display-2 text-success">Welcome</p>
              <h3 className="text-success">To</h3>
              <p className="fs-4 text-muted m-0 ">Harbaid High School</p>
              <p className="fs-4 text-muted">Batch 2005</p>
              <p>
                <small className="text-danger">
                  If you are batch 2005 then click login
                </small>
              </p>
              <div className=" pb-4">
                <button
                  onClick={handleGoogleAuth}
                  type="button"
                  className="btn btn-success rounded-pill px-5"
                >
                  <FontAwesomeIcon icon={faGoogle} /> Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

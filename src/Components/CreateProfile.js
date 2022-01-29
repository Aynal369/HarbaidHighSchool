import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../Hook/useAuth";

const CreateProfile = () => {
  const { user } = useAuth();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const fullName = user.displayName;
    const formFile = data.formFile[0];
    const phoneNumber = data.phoneNumber;
    const village = data.village;

    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("formFile", formFile);
    formData.append("phoneNumber", phoneNumber);
    formData.append("village", village);

    fetch("http://localhost:5000/friends", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("successfully added");
        }
      });
  };
  return (
    <div className="container-fluid bg-light min-vh-100">
      <div className="row">
        <div className="card bg-light shadow p-3">
          <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
            <div className="col-sm-6">
              <label htmlFor="fullName" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="fullName"
                {...register("fullName")}
                placeholder={user.displayName}
                disabled
              />
            </div>
            <div className="col-sm-6">
              <label htmlFor="formFile" className="form-label">
                Profile picture
              </label>
              <input
                className="form-control"
                type="file"
                id="formFile"
                placeholder="Enter post title here"
                {...register("formFile", {
                  required: "required",
                })}
              />
            </div>
            <div className="col-sm-6">
              <label htmlFor="phoneNumber" className="form-label">
                Phone Number
              </label>
              <input
                type="number"
                className="form-control"
                id="phoneNumber"
                {...register("phoneNumber", {
                  required: "required",
                })}
              />
            </div>
            <div className="col-sm-6">
              <label htmlFor="village" className="form-label">
                Village Name
              </label>
              <input
                type="text"
                className="form-control"
                id="village"
                {...register("village", {
                  required: "required",
                })}
              />
            </div>
            <div className="text-center pt-3">
              <button type="submit" className="btn btn-dark px-5">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;

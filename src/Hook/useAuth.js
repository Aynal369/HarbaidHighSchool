import { useContext } from "react";
import { authContext } from "../Authentication/Context/AuthProvider";

const useAuth = () => {
  return useContext(authContext);
};

export default useAuth;

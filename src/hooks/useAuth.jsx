import { useContext } from "react";
import { AllContext } from "../Provider/Authprovider";

const useAuth = () => {
    const auth = useContext(AllContext);
    return auth;
};

export default useAuth;
import { useContext } from "react";
import { firecontext } from "./AuthContext";
import { Navigate } from "react-router-dom";



const PrivateRoute = ({children}) => {

    const {user} = useContext(firecontext)

    if(user){

        return children
    
    }



    return <Navigate to="/login" ></Navigate> 
};

export default PrivateRoute;
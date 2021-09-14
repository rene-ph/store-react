import { Redirect } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { signOut } from "../../redux/authSlice";
import { removeLocalToken } from "../../utils/utils";


const Logout = () => {
    const dispatch = useDispatch();

    dispatch(signOut());
    removeLocalToken();

    return <Redirect to="/" />;
};

export default Logout;

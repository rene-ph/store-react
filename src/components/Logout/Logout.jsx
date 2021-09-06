import { Redirect } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { signOut } from "../../redux/authSlice";
import { unsetLogin } from "../../utils/utils";


const Logout = () => {
    const dispatch = useDispatch();

    dispatch(signOut());
    unsetLogin();

    return <Redirect to="/" />;
};

export default Logout;

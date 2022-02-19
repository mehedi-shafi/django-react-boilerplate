import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import AdminDashboard from './Admin';
import UserDashboard from './User';

let DashBoard = (props) => {
    let { userInfo } = useContext(AuthContext);

    return userInfo.is_superuser ? <AdminDashboard /> : <UserDashboard />;
};

export default DashBoard;

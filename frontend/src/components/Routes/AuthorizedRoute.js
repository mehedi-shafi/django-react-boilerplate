import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { Button, Dialog, DialogTitle, DialogActions } from '@mui/material';
import { AuthContext } from '../../contexts/AuthContext';

let AuthorizedRoute = (props) => {
    let { component: Component, ...rest } = props;
    let { token, userInfo } = useContext(AuthContext);

    let PermissionDeniedDialog = (props) => {
        return (
            <Dialog maxWidth="sm" open={true}>
                <DialogTitle>
                    You are not authorized to view this page
                </DialogTitle>
                <DialogActions>
                    <Button
                        onClick={() => props.history.push('/')}
                        color="primary"
                    >
                        Return Home
                    </Button>
                </DialogActions>
            </Dialog>
        );
    };

    let getComponent = (props) => {
        if (token && userInfo) {
            if (userInfo.is_superuser || rest.public) {
                return <Component {...props} />;
            } else {
                return <PermissionDeniedDialog />;
            }
        } else {
            return (
                <Navigate
                    to={{ pathname: '/login', state: { from: props.location } }}
                />
            );
        }
    };

    return getComponent(props);
};

export default AuthorizedRoute;

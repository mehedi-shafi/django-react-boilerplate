import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button, Grid, Paper } from '@mui/material';
import Snackbar from '../Snackbar';
import useStyles from './styles';
import { AuthContext } from '../../contexts/AuthContext';

let Login = () => {
    let classes = useStyles();
    let { userInfo, onLoginSuccess } = useContext(AuthContext);
    let loginStatePrimary = {
        username: '',
        password: '',
    };
    let notificationStatePrimary = {
        severity: 'warning',
        message: '',
    };
    let [values, setValues] = useState(loginStatePrimary);
    let [notification, setNotification] = useState(notificationStatePrimary);

    if (userInfo) {
        return <Navigate to="/" />;
    }

    let onInputChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    let onSubmit = (e) => {
        e.preventDefault();
        axios
            .post('/api/auth/token/login/', values)
            .then((response) => {
                setValues(loginStatePrimary);
                if (response.data && response.data.auth_token) {
                    onLoginSuccess(
                        response.data.auth_token,
                        response.data.user
                    );
                }
            })
            .catch((error) => {
                setValues(loginStatePrimary);
                if (
                    error.response.data &&
                    error.response.data.non_field_errors
                ) {
                    setNotification({
                        severity: 'error',
                        message: error.response.data.non_field_errors[0],
                    });
                }
            });
    };

    let clearNotification = () => {
        setNotification(notificationStatePrimary);
    };

    return (
        <div className={classes.container}>
            <Snackbar
                alert={{
                    show: notification.message !== '',
                    message: notification.message,
                    severity: notification.severity,
                }}
                handleClose={clearNotification}
            />
            <form onSubmit={onSubmit}>
                <Paper elevation={3} className={classes.loginBox}>
                    <Grid container spacing={2} style={{ width: '100%' }}>
                        <Grid item xs={12}>
                            <TextField
                                className={classes.input}
                                required
                                fullWidth
                                name="username"
                                label="Username"
                                type="text"
                                variant="outlined"
                                value={values.username}
                                onChange={onInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className={classes.input}
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                variant="outlined"
                                value={values.password}
                                onChange={onInputChange}
                            />
                        </Grid>
                        <Grid item xs={4}></Grid>
                        <Grid item xs={8} />
                        <Grid item xs={8} />
                        <Grid item xs={4}>
                            <Button
                                className={classes.input}
                                type="submit"
                                color="primary"
                                variant="contained"
                                fullWidth
                            >
                                Log In
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </form>
        </div>
    );
};

export default Login;

import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Menu,
    MenuItem,
    Divider,
} from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import useStyles from './styles';
import icon from './../../assets/icon.png';
import { AuthContext } from '../../contexts/AuthContext';

let Topbar = (props) => {
    let classes = useStyles();
    let { token, userInfo, onLogoutSuccess } = useContext(AuthContext);
    let [user, setUser] = useState(null);
    let [anchor, setAnchor] = useState(null);

    let onMenuClick = (event) => {
        setAnchor(event.currentTarget);
    };

    let onMenuClose = () => {
        setAnchor(null);
    };

    let onLogoutClick = () => {
        axios
            .post('/api/auth/token/logout/', null, {
                headers: { Authorization: `Token ${token}` },
            })
            .then((response) => {
                onLogoutSuccess();
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <AppBar className={classes.appBar} position="sticky">
            <Toolbar variant="dense">
                <Link to="/" className={classes.title}>
                    <img
                        className={classes.logo}
                        src={icon}
                        alt="Survey Logo"
                    />
                    Simple Survey
                </Link>
                <div style={{ flexGrow: 1 }} />
                {userInfo ? (
                    <>
                        <Typography
                            className={classes.welcomeText}
                            variant="body1"
                        >
                            Welcome,
                            <strong>
                                {userInfo.first_name !== '' ||
                                userInfo.last_name !== ''
                                    ? userInfo.first_name +
                                      ' ' +
                                      userInfo.last_name
                                    : userInfo.user_name}
                            </strong>
                        </Typography>
                        <IconButton onClick={onMenuClick}>
                            <AccountCircle fontSize="large" />
                        </IconButton>
                        <Menu
                            anchorEl={anchor}
                            onClose={onMenuClose}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchor)}
                        >                            
                            <MenuItem > Change Password </MenuItem> <Divider />
                            <MenuItem onClick={onLogoutClick}>Log out</MenuItem>
                        </Menu>
                    </>
                ) : (
                    <>
                        <Typography variant="subtitle1">
                            <Link className={classes.link} to="/login">
                                Log in
                            </Link>
                        </Typography>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Topbar;

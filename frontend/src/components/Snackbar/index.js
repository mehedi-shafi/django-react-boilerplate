import React from 'react';
import MuiSnackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

let Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
};

let Snackbar = ({ alert, handleClose }) =>
    alert.show ? (
        <MuiSnackbar
            open={true}
            autoHideDuration={3000}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
            <Alert onClose={handleClose} severity={alert.severity}>
                {alert.message}
            </Alert>
        </MuiSnackbar>
    ) : (
        <></>
    );

export default Snackbar;

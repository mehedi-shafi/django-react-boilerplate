import React from 'react';
import MuiSnackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

let Snackbar = ({ alert, handleClose }) => {
    return (
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
        )
    )
}
 

export default Snackbar;

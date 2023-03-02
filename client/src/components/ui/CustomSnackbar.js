import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import {Alert} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {snackbarMessage, isSnackbarOpen, snackbarType} from "../../store/accessors/snackbar";
import {hideSnackbar} from "../../store/actions/snackbar";

function CustomSnackbar() {
    const dispatch = useDispatch();

    const open = useSelector(isSnackbarOpen);
    const message = useSelector(snackbarMessage);
    const type = useSelector(snackbarType);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        dispatch(hideSnackbar())
    };

    return (
        <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
        >
            <Alert onClose={handleClose} severity={type || "warning"} sx={{width: '100%'}}>
                {message}
            </Alert>
        </Snackbar>
    );
}

export default CustomSnackbar;
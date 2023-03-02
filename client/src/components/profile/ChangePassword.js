import React, {useState} from 'react';
import {Button, TextField} from "@mui/material";
import {updateUserPassword} from "../../store/actions/user";
import {useDispatch} from "react-redux";

const ChangePassword = () => {

    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const dispatch = useDispatch();
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleNewPasswordChange = (event) => {
        setNewPassword(event.target.value);
    };

    const handlePasswordSubmit = (event) => {
        event.preventDefault();

        if (!password || !newPassword) {
            return;
        }

        dispatch(updateUserPassword(password, newPassword));
    };

    return (
        <div>
            <h2>Change password</h2>
            <form onSubmit={handlePasswordSubmit} style={{display: 'flex', flexDirection: 'column', width: '50%'}}>
                <TextField
                    label="Current Password"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}

                    margin="normal"
                    autoComplete="off"
                />
                <TextField
                    label="New Password"
                    type="password"
                    value={newPassword}
                    onChange={handleNewPasswordChange}

                    margin="normal"
                    autoComplete="off"
                />
                <Button type="submit" variant="contained" color="primary">
                    Change Password
                </Button>
            </form>
        </div>
    );
};

export default ChangePassword;
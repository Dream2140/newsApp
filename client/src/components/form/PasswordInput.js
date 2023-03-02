import React, {useEffect, useState} from 'react';
import {TextField} from "@mui/material";

const PasswordInput = ({onChange}) => {
    const [passwordError, setPasswordError] = useState(false);
    const [password, setPassword] = useState('');

    useEffect(() => {
        onChange(passwordError ? null : password);
    }, [password, passwordError, onChange]);

    const handleChange = (event) => {
        setPassword(event.target.value);
        setPasswordError(
            !/^[a-zA-Z0-9]+$/.test(event.target.value) ||
            event.target.value.length < 8 ||
            event.target.value.length > 25
        );
    };

    return (
        <TextField
            error={passwordError}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            helperText={
                passwordError
                    ? 'Only a-Z 0-9'
                    : ''
            }
            autoComplete="new-password"
            value={password}
            onChange={handleChange}
        />
    );
};

export default PasswordInput;
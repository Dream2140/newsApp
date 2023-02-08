import React, {useEffect, useRef, useState} from 'react';
import {TextField} from "@mui/material";

const EmailInput = ({onChange}) => {
    const [emailError, setEmailError] = useState(false);
    const [email,setEmail] = useState('')

    useEffect(() => {
        onChange(email);
    }, [email, onChange]);
    const handleChange = (event) => {
        setEmail(event.target.value);
        setEmailError(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(event.target.value));
        onChange(emailError ? null : email);
    };

    return (
        <TextField
            error={emailError}
            variant="outlined"
            helperText={emailError ? 'Invalid email format' : ''}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={handleChange}
        />
    );
};

export default EmailInput;
import React, {useEffect, useState} from 'react';
import {TextField} from "@mui/material";

const NicknameInput = ({onChange}) => {
    const [nicknameError, setNicknameError] = useState(false);
    const [nickname, setNickname] = useState('');

    useEffect(() => {
        onChange(nickname);
    }, [nickname, onChange]);
    const handleChange = (event) => {
        setNickname(event.target.value);
        setNicknameError(
            !/^[a-zA-Z0-9]+$/.test(event.target.value) ||
            event.target.value.length < 4 ||
            event.target.value.length > 25
        );

        onChange(nicknameError ? null : nickname);
    };

    return (
        <TextField
            error={nicknameError}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="nickname"
            label="Nickname"
            name="nickname"
            value={nickname}
            onChange={handleChange}
            helperText={
                nicknameError
                    ? 'Incorrect nickname'
                    : ''
            }
        />
    );
};

export default NicknameInput;
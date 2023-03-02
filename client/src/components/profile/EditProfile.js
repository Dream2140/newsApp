import React, {useState} from 'react';
import {TextField, Button, CircularProgress} from '@mui/material';
import {useDispatch, useSelector} from "react-redux";
import {getUserData, userLoading} from "../../store/accessors/user";
import {updateUserData} from "../../store/actions/user";

function EditProfile() {
    const userData = useSelector(getUserData);
    const [nickname, setNickname] = useState(userData.nickname);
    const [email, setEmail] = useState(userData.email);
    const dispatch = useDispatch();
    const loading = useSelector(userLoading);

    const handleSubmit = (event) => {
        event.preventDefault();
        const updatedFields = {};
        if (nickname !== userData.nickname) {
            updatedFields.nickname = nickname;
        }
        if (email !== userData.email) {
            updatedFields.email = email;
        }
        if (Object.keys(updatedFields).length === 0) {
            return;
        }

        dispatch(updateUserData(updatedFields))
    };

    return (
        <div>
            <h2>Edit Profile</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Nickname"
                    value={nickname}
                    fullWidth
                    sx={{marginBottom: 2}}
                    onChange={(e) => setNickname(e.target.value)}
                />
                <TextField
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    sx={{marginBottom: 2}}
                />
                <Button
                    variant="contained"
                    type="submit"
                    disabled={loading}
                    sx={{position: 'relative'}}
                >
                    {loading && (
                        <CircularProgress
                            size={24}
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                marginTop: '-12px',
                                marginLeft: '-12px'
                            }}
                        />
                    )}
                    Submit
                </Button>
            </form>
        </div>
    );
}

export default EditProfile;

import React, {useEffect, useState} from 'react';
import {Button, Fade, FormHelperText, Modal, useTheme} from "@mui/material";
import EmailInput from "./form/EmailInput";
import PasswordInput from "./form/PasswordInput";
import NicknameInput from "./form/NicknameInput";
import {useDispatch, useSelector} from "react-redux";
import {loginUser, registerUser} from "../store/actions/user";


const LoginModal = ({open, handleClose}) => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const [error, setError] = useState('')

    const errorMessage = useSelector(state => state.user.error);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');

    useEffect(()=>{
        setError(errorMessage)
    },[user.error])

    const [form, setForm] = useState({
        login: true,
        nickname: '',
        email: '',
        password: '',
    });

    useEffect(() => {
        setError('')
        setForm({...form, email, password, nickname});
    }, [email, password, nickname])

    const handleSubmit = async  (event) => {
        event.preventDefault();

        if (form.login) {
            await dispatch(loginUser(form))
        } else {
            await dispatch(registerUser(form))
        }

    }



    const handleSwitchForm = () => {
        setForm({...form, login: !form.login});
    };

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                open={open.isOpen}
                onClose={handleClose}
                closeAfterTransition
            >
                <Fade in={open.isOpen}>
                    <div style={{
                        backgroundColor: 'white',
                        border: '2px solid #000',
                        boxShadow: theme.shadows[5],
                        padding: theme.spacing(2, 4, 3),
                        zIndex: 2000
                    }}>
                        <form style={{
                            width: '100%',
                            marginTop: theme.spacing(1),
                        }}
                              onSubmit={handleSubmit}
                        >
                            {form.login ? (
                                <>
                                    <EmailInput onChange={setEmail}/>
                                    <PasswordInput onChange={setPassword}/>
                                    <FormHelperText error>{error?.message}</FormHelperText>
                                </>
                            ) : (
                                <>
                                    <EmailInput onChange={setEmail}/>
                                    <NicknameInput onChange={setNickname}/>
                                    <PasswordInput onChange={setPassword}/>
                                    <FormHelperText error>{error?.message}</FormHelperText>
                                </>
                            )}

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                sx={{margin: theme.spacing(3, 0, 2),}}
                                disabled={form.login ? !email || !password :
                                    (!nickname || !email || !password)}
                            >
                                {form.login ? 'Login' : 'Register'}
                            </Button>

                        </form>

                        <div style={{
                            cursor: 'pointer',
                            marginTop: theme.spacing(2),
                        }} onClick={handleSwitchForm}
                        >
                            {form.login ?
                                (<p>Dont have an account? <b>Register</b></p>)
                                :
                                (<p> Already have an account? <b>Login</b></p>)
                            }
                        </div>

                    </div>
                </Fade>
            </Modal>
        </div>
    );
};

export default LoginModal;
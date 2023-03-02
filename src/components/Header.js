import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LoginModal from "./LoginModal";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {closeModal, openModal} from "../store/actions/modal";
import {Avatar, Menu, MenuItem} from "@mui/material";
import {logoutUser} from "../store/actions/user";
import {Link, useLocation} from "react-router-dom";
import SearchBar from "./ui/SearchBar";
import {getUserRole} from "../store/accessors/user";

export default function Header() {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const modalOpen = useSelector(state => state.modal);
    const currentUserRole = useSelector(getUserRole);

    const handleOpen = () => {
        dispatch(openModal('loginModal'));
    };

    const handleClose = () => {
        dispatch(closeModal());
    };

    const [anchorEl, setAnchorEl] = useState(null);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const handleLogoutUser = () => {
        dispatch(logoutUser());
        handleCloseMenu();
    }

    return (
        <>
            <AppBar position="fixed">
                <Toolbar>
                    <Link to={'/'}>
                        <Typography
                            variant="h6"
                            noWrap
                            sx={{color: 'inherit', textDecoration: 'none'}}
                        >
                            Dream News
                        </Typography>
                    </Link>

                    {isHomePage && (
                        <SearchBar/>
                    )}
                    <Box sx={{flexGrow: 1}}/>
                    <Box gap={1}
                         sx={{display: 'flex', flexDirection: "row", justifyContent: 'center', alignItems: 'center'}}>
                        <Box><Typography sx={{}} variant={"subtitle2"} component={'h6'}>

                            {user.nickname || ''}
                        </Typography></Box>
                        <Box>

                            {user.isAuthenticated ? (
                                <>
                                    <IconButton
                                        size="large"
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        onClick={handleMenu}
                                        color="inherit"
                                    >
                                        <Avatar aria-label="author">
                                            {user.nickname[0]}
                                        </Avatar>
                                    </IconButton>
                                    <Menu
                                        id="menu-appbar"
                                        anchorEl={anchorEl}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={Boolean(anchorEl)}
                                        onClose={handleCloseMenu}
                                    >

                                        {currentUserRole === 'ADMIN' && (
                                            <MenuItem>
                                                <Link to={'/admin'}>Admin</Link>
                                            </MenuItem>
                                        )}
                                        <MenuItem>
                                            <Link to={'/profile'}>Profile</Link>
                                        </MenuItem>
                                        <MenuItem onClick={handleLogoutUser}>Logout</MenuItem>
                                    </Menu>
                                </>
                            ) : (<IconButton
                                    onClick={handleOpen}
                                    size="large"
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-haspopup="true"
                                    color="inherit"
                                >

                                    <AccountCircle/>
                                </IconButton>
                            )
                            }
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>

            <LoginModal
                open={modalOpen}
                handleClose={handleClose}
            />

        </>
    );
}

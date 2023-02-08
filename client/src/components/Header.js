import * as React from 'react';
import {alpha, styled} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LoginModal from "./LoginModal";
import {useState} from "react";
import Backdrop from "@mui/material/Backdrop";
import {useDispatch, useSelector} from "react-redux";
import {closeModal, openModal} from "../store/actions/modal";


const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export default function Header() {

    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const modalOpen = useSelector(state => state.modal);

    const handleOpen = () => {
        dispatch(openModal('loginModal'));
    };

    const handleClose = () => {
        dispatch(closeModal());
    };

    const menuId = 'primary-search-account-menu';

    return (
        <>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography
                        href="/"
                        variant="h6"
                        noWrap
                        component="a"
                        sx={{display: {xs: 'none', sm: 'block',}, color: 'inherit', textDecoration: 'none'}}
                    >
                        Dream News
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon/>
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{'aria-label': 'search'}}
                        />
                    </Search>
                    <Box sx={{flexGrow: 1}}/>
                    <Box gap={1}
                         sx={{display: 'flex', flexDirection: "row", justifyContent: 'center', alignItems: 'center'}}>
                        <Box><DarkModeIcon/> </Box>
                        <Box><Typography sx={{}} variant={"subtitle2"} component={'h6'}>

                            {user.nickname||''}
                        </Typography></Box>
                        <Box>
                            <IconButton
                                onClick={handleOpen}
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                color="inherit"
                            >

                                <AccountCircle/>
                            </IconButton>
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

import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
    Button,
    Checkbox,
    CircularProgress,
    MenuItem,
    Paper,
    Select,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField
} from "@mui/material";

import {useDispatch, useSelector} from "react-redux";
import {getUsersList, hasNextUsersListPage, isAdminLoading} from "../../store/accessors/admin";
import {LIMIT_OF_USERS} from "../../variables/variables";
import {adminUpdateUserData, fetchUsersList} from "../../store/actions/admin";
import {USER_ROLES} from "../../variables/variables"


function UserList() {

    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const loading = useSelector(isAdminLoading);
    const nextPage = useSelector(hasNextUsersListPage);
    const [editedUsers, setEditedUsers] = useState([]);
    const [isLoading] = useState(false);
    const users = useSelector(getUsersList);

    const params = useMemo(() => ({
        limit: LIMIT_OF_USERS,
        page
    }), [page]);

    useEffect(() => {
        dispatch(fetchUsersList(params))
    }, [dispatch, params])

    const handleScroll = useCallback(() => {
        if (
            window.innerHeight + document.documentElement.scrollTop
            !== document.documentElement.offsetHeight
        ) {
            return;
        }

        if (loading || !nextPage) {
            return;
        }

        setPage(page + 1);
    }, [loading, nextPage, page]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    const handleEdit = (userId, field, value) => {
        const editedUser = editedUsers.find(user => user._id === userId) || {_id: userId};
        editedUser[field] = value;
        setEditedUsers([...editedUsers.filter(user => user._id !== userId), editedUser]);
    };

    const handleSave = (userId) => {
        dispatch(adminUpdateUserData(userId, editedUsers[0]))
    };

    return (

        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Nickname</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>User Role</TableCell>
                        <TableCell>Activated</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user) => {
                        const isEdited = editedUsers.some(editedUser => editedUser._id === user._id);
                        return (
                            <TableRow key={user._id}>
                                <TableCell>
                                    <TextField
                                        name="nickname"
                                        value={isEdited && editedUsers.find(editedUser => editedUser._id === user._id)?.nickname || user.nickname}
                                        onChange={(event) => handleEdit(user._id, 'nickname', event.target.value)}
                                    />
                                </TableCell>
                                <TableCell>
                                    <TextField
                                        name="email"
                                        value={isEdited && editedUsers.find(editedUser => editedUser._id === user._id)?.email || user.email}
                                        onChange={(event) => handleEdit(user._id, 'email', event.target.value)}
                                    />
                                </TableCell>
                                <TableCell>
                                    <Select
                                        name="role"
                                        value={isEdited && editedUsers.find(editedUser => editedUser._id === user._id)?.role || user.role}
                                        label="Role"
                                        onChange={(event) => handleEdit(user._id, 'role', event.target.value)}
                                    >
                                        {USER_ROLES.map((role) => (
                                            <MenuItem key={role} value={role}>
                                                {role}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </TableCell>
                                <TableCell>
                                    <Checkbox
                                        name="isActivated"
                                        checked={isEdited && editedUsers.find(editedUser => editedUser._id === user._id)?.isActivated || user.isActivated}
                                        onChange={(event) => handleEdit(user._id, 'isActivated', event.target.checked)}
                                    />
                                </TableCell>
                                <TableCell>
                                    <Button
                                        variant="contained"
                                        disabled={!isEdited}
                                        onClick={() => handleSave(user._id)}
                                    >
                                        {isLoading[user.id] ? (
                                            <CircularProgress size={24}/>
                                        ) : (
                                            "Save changes"
                                        )}
                                    </Button>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default UserList;
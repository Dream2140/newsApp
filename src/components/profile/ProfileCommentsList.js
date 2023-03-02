import React, {useEffect} from 'react';
import Box from "@mui/material/Box";
import {Button, List, ListItem, ListItemText} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import Helper from "../../helpres/Helper";
import {deleteCommentOnProfile, getUserCommentsList} from "../../store/actions/profile";
import {getProfileCommentsList} from "../../store/accessors/profile";
import {getUserId} from "../../store/accessors/user";

const ProfileCommentsList = () => {
    const userId = useSelector(getUserId);
    const dispatch = useDispatch();
    const comments = useSelector(getProfileCommentsList);

    useEffect(() => {
        dispatch(getUserCommentsList(userId))
    }, [dispatch])
    const handleDeleteComment = (commentId) => {
        dispatch(deleteCommentOnProfile(commentId, userId));
    };

    return (
        <Box>
            <h2>Message List</h2>
            <List sx={{mt: 3}}>
                {comments.length === 0 ? (
                    <p>No comments yet</p>
                ) : (
                    comments.map((comment) => (
                        <ListItem key={comment._id}>
                            <ListItemText
                                primary={`${comment.title} - ${Helper.formatDate(comment.publishedAt)}`}
                                secondary={comment.content}
                            />
                            <Button variant="contained" color="secondary"
                                    onClick={() => handleDeleteComment(comment._id)}>
                                Delete
                            </Button>
                        </ListItem>
                    )))}
            </List>
        </Box>
    );
};

export default ProfileCommentsList;
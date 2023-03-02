import React, {useEffect} from 'react';
import CommentForm from "./CommentForm";
import Comment from "./CommentItem";
import Box from "@mui/material/Box";
import {Container, Grid} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {loadNewsComments} from "../../store/actions/comment";

const CommentsList = ({newsId}) => {

    const dispatch = useDispatch();
    const commentsList = useSelector(state => state.commentsList.comments)

    useEffect(() => {
        dispatch(loadNewsComments(newsId));
    }, [dispatch]);

    const isAuthenticated = useSelector(state => state.user.isAuthenticated);


    return (
        <Container>
            <Grid container spacing={2} sx={{minWidth: "150px", my: "50px"}}>

                {isAuthenticated ? (
                        <CommentForm/>
                    ) :
                    (<Box>Log in to write comments</Box>)}

                {commentsList.length ? (commentsList.map((comment) => (

                    <Comment key={comment._id} nickname={comment.nickname} date={comment.publishedAt}
                             text={comment.content}/>

                ))) : (
                    <Grid container justify="center">
                        <p> There are no comment yet</p>
                    </Grid>

                )}
            </Grid>
        </Container>
    );
};


export default CommentsList;
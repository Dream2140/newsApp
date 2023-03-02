import React, {useState} from 'react';
import {Button, Container, Grid, TextareaAutosize, useTheme} from "@mui/material";
import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import SendIcon from '@mui/icons-material/Send';
import {addComment} from "../../store/actions/comment";

const CommentForm = () => {
    const theme = useTheme();
    const {state} = useLocation();
    const {id} = state
    const userId = useSelector(state => state.user.id);
    const userNickname = useSelector(state => state.user.nickname);
    const dispatch = useDispatch();

    const [comment, setComment] = useState('');
    const handleSubmit = async (e) => {

        e.preventDefault();

        const commentData = {
            content: comment,
            nickname: userNickname,
            userId: userId,
            newsId: id,
            publishedAt: Date.now().toString()
        };

        dispatch(addComment(commentData))

        setComment('');
    };

    return (
        <Container>
            <form onSubmit={handleSubmit} style={{flexGrow: 1}}>
                <Grid container alignItems="center">
                    <Grid item xs={11}>
                        <TextareaAutosize
                            style={{width: '100%', minHeight: '45px'}}
                            label="Add a Comment"
                            variant="outlined"
                            value={comment}

                            onChange={(event) => setComment(event.target.value)}
                        />
                    </Grid>
                    <Grid item xs={1} style={{marginLeft: 'auto'}}>
                        <Button
                            type="submit"

                            color="primary"
                            startIcon={<SendIcon/>}
                            style={{
                                padding: theme.spacing(1),
                                width: theme.spacing(6),
                                height: theme.spacing(6)
                            }}
                        />
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
}

export default CommentForm;
import CommentService from "../../services/commentService";
import {
    ADD_COMMENT_FAILURE,
    ADD_COMMENT_REQUEST,
    ADD_COMMENT_SUCCESS,
    DELETE_COMMENT,
    DELETE_COMMENT_ERROR,
    DELETE_COMMENT_SUCCESS, LOAD_COMMENTS_FAILURE,
    LOAD_COMMENTS_REQUEST,
    LOAD_COMMENTS_SUCCESS
} from "../types/comment";

import ProfileService from "../../services/profileService";

export const loadCommentsRequest = () => ({
    type: LOAD_COMMENTS_REQUEST,
});

export const loadCommentsSuccess = (comments) => ({
    type: LOAD_COMMENTS_SUCCESS,
    payload: comments,
});

export const loadCommentsFailure = (error) => ({
    type: LOAD_COMMENTS_FAILURE,
    payload: error,
});

export const loadNewsComments = (newsId) => async dispatch => {
    try {

        dispatch(loadCommentsRequest());

        const comments = await CommentService.getNewsCommentsList(newsId);

        return dispatch(loadCommentsSuccess(comments));


    } catch (err) {
        console.error(err)

        return dispatch(loadCommentsFailure(err));
    }
};

export const addCommentRequest = () => ({
    type: ADD_COMMENT_REQUEST,
});

export const addCommentSuccess = (comment) => ({
    type: ADD_COMMENT_SUCCESS,
    payload: comment,
});

export const addCommentFailure = (error) => ({
    type: ADD_COMMENT_FAILURE,
    payload: error,
});

export const addComment = (commentData) => async dispatch => {
    try {

        dispatch(addCommentRequest());
        const comments = await CommentService.addComment(commentData);

        return dispatch(addCommentSuccess(comments));
    } catch (err) {
        console.error(err)

        return dispatch(addCommentFailure(err));
    }
};

export const deleteComment = (commentId) => async (dispatch) => {
    dispatch({
        type: DELETE_COMMENT,
    });
    try {
        const news = await ProfileService.deleteComment(commentId);

        dispatch({
            type: DELETE_COMMENT_SUCCESS
        });

    } catch (err) {
        console.error(err)

        dispatch({
            type: DELETE_COMMENT_ERROR,
            payload: err
        });
    }
};
import ProfileService from "../../services/profileService";
import {
    GET_USER_COMMENTS_LIST, GET_USER_COMMENTS_LIST_ERROR, GET_USER_COMMENTS_LIST_SUCCESS
} from "../types/profile";
import {deleteComment} from "./comment";


export const getUserCommentsList = (userId) => async (dispatch) => {
    dispatch({type: GET_USER_COMMENTS_LIST});
    try {
        if (!userId) return;

        const comments = await ProfileService.getUserCommentsList(userId);

        dispatch({
            type: GET_USER_COMMENTS_LIST_SUCCESS, payload: comments
        });


    } catch (err) {
        console.error(err)

        dispatch({
            type: GET_USER_COMMENTS_LIST_ERROR, payload: err
        });
    }
};

export const deleteCommentOnProfile = (commentId, userId) => async (dispatch) => {
    dispatch(deleteComment(commentId));
    dispatch(getUserCommentsList(userId))
};
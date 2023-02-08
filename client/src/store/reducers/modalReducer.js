import {CLOSE_MODAL, OPEN_MODAL} from "../../types/modal";

const initialState = {
    isOpen: false,
    modalType: null,
};

export default function modalReducer(state = initialState, action) {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                isOpen: true,
                modalType: action.modalType,
            };
        case CLOSE_MODAL:
            return {
                isOpen: false,
                modalType: null,
            };
        default:
            return state;
    }
}
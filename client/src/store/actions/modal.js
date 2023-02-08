import {CLOSE_MODAL, OPEN_MODAL} from "../../types/modal";

export function openModal(modalType) {
    return {
        type: OPEN_MODAL,
        modalType,
    };
}

export function closeModal() {
    return {
        type: CLOSE_MODAL,
    };
}
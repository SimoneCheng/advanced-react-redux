import axios from "axios";
import { SAVE_COMMENT, FETCH_COMMENTS } from "./types";

export function saveComment(comment) {
    return {
        type: SAVE_COMMENT,
        payload: comment
    };
}

export function fetchComments() {
    const responese = axios.get('https://jsonplaceholder.typicode.com/comments');

    return {
        type: FETCH_COMMENTS,
        payload: responese,
    };
}
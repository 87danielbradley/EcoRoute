import * as APIutil from "../util/messages_api_util";
import jwt_decode from "jwt-decode"

export const RECEIVE_MATRIX = "RECEIVE_MATRIX";



const receiveMatrix = (matrix) => ({
    type: RECEIVE_MATRIX,
    matrix
});


export const fetchMatrix = () => dispatch => APIutil.getMatrix()
    .then( (matrix) => dispatch(receiveMatrix(matrix)));
    


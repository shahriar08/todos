/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable default-case */
import {CREATE_TODOS_START,NEW_TODOS_START} from '../actions/type';

const initialState = {
    items:[]
}

export default function(state = initialState, action){
    switch(action.type){
        case NEW_TODOS_START:
            return{
                ...state,
                items:action.payload
            };
            default:
                return state;
    }
}
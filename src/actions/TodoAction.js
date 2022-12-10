import {CREATE_TODOS_START,NEW_TODOS_START} from './type';

// const initialState = {
//     items:[],
//     // counter
// }

// export default function (state = initialState,action){
//     swith
// }

export const fetchTodo = () => dispatch => {
fetch("https://jsonplaceholder.typicode.com/posts")
.then(res => res.json())
.then(posts =>
    dispatch({
        type:NEW_TODOS_START,
        payload: posts
    })
    )
}
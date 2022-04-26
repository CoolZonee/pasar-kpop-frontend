import * as api from '../api';
import CardDetails from '../interfaces/CardDetailsInterface';

export const getPosts = () => async (dispatch:any) => {
    try {
        const { data } = await api.fetchPosts()
        dispatch({ type: 'FETCH_ALL', payload: data })
    } 
    catch (error: any) {
        console.log(error.message)
    }   
}

export const createPost = (post: CardDetails) => async (dispatch:any) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({ type: 'CREATE', payload: data })
    } 
    catch (error: any) {
        console.log(error.message)
    }
}
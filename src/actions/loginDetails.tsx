import * as api from '../api';

export const login = (email: String, password: String) => async (dispatch:any) => {
    try {
        const { data } = await api.login(email, password);
        dispatch({ type: 'LOGIN', payload: data })
    } 
    catch (error: any) {
        console.log(error.message)
    }   
}

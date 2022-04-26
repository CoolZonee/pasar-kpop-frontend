interface LoginDetails {
    isLoggedIn: boolean,
    user: any[]
}

export default (loginDetails: LoginDetails = {isLoggedIn:false, user:[]}, action: { type: String, payload: [] }) => {
    switch (action.type) {
        case 'LOGIN':
            if (action.payload) {
                return Object.assign({}, loginDetails, {isLoggedIn: true, user: action.payload})
            }
            return Object.assign({}, loginDetails, {isLoggedIn: false, user: []})
        case 'LOGOUT':
            return Object.assign({}, loginDetails, {isLoggedIn: false, user: []})
        default:
            return loginDetails
    }
}
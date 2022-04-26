export default (users = [], action: { type: String, payload: [] }) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'LOGIN':
            return action.payload;
        default:
            return users;
    }
}
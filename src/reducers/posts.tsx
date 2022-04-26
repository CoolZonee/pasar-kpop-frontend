export default (posts = [], action: { type: String, payload: [] }) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [ ... posts, action.payload];
        default:
            return posts;
    }
}
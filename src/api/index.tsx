import axios from 'axios';
import CardDetails from '../interfaces/CardDetailsInterface';

const urlPrefix = 'http://localhost:5000';

export const login = (email: String, password: String) => axios.post(`${urlPrefix}/auth/login`, {"email": email, "password": password})

export const fetchPosts = () => axios.get(`${urlPrefix}/posts`);

export const createPost = (newPost: CardDetails) => axios.post(`${urlPrefix}/posts`, newPost);
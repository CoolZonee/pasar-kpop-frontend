import { combineReducers } from "redux";
import posts from './posts'
import users from './users'
import loginDetails  from "./loginDetails";

export default combineReducers({ posts, users, loginDetails })
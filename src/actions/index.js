import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
const CREATE_POST = 'create_post';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api/posts';
const API_KEY = '?key=DROgon0519';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/${API_KEY}`);
  
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(values, callback) {
  const request = axios.post(`${ROOT_URL}/${API_KEY}`, values)
    .then(() => callback())
  
  return {
    type: CREATE_POST,
    payload: request
  }
}

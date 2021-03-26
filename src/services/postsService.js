import axios from "axios";

export const fetchPosts = () => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/posts`)
    .then((response) => response.data);
};

export const fetchPost = (postId) => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((response) => response.data);
};

export const createPost = (post) => {
  return axios
    .post(`https://jsonplaceholder.typicode.com/posts`, post)
    .then((response) => response.data);
};

export const updatePost = (post) => {
  return axios
    .put(`https://jsonplaceholder.typicode.com/posts/${post.id}`, post)
    .then((response) => response.data);
};

export const deletePost = (postId) => {
  return axios
    .delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((response) => response.data);
};

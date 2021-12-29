import apiRoot from "./apiRoot";

const get = (page = 1) => apiRoot.get("/posts");
const post = (data) => apiRoot.post("/posts", data);
const put = (post, data) => apiRoot.put(`/posts/${post}`, data);
const remove = (post) => apiRoot.delete(`/posts/${post}`);

export default {
    get, post, put, remove
}

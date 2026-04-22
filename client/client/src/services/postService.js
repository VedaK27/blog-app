import API from "./api";
import { getToken } from "../utils/storage";

export const getPosts = async () => {
    return API.get("/posts");
};

export const createPost = async (data) => {
    return API.post(
        "/posts",
        data,
        {
            headers: {
                Authorization: getToken()
            }
        }
    );
};

export const deletePost = async (id) => {
    return API.delete(
        `/posts/${id}`,
        {
            headers: {
                Authorization: getToken()
            }
        }
    );
};
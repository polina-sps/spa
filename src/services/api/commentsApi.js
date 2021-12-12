import createInstance from '../instance';
import { commentsDataFromServer } from '../utils/dataFromServer';
import createInstance from '../instance';
import { commentsDataFromServer } from '../utils/dataFromServer';

const API = createInstance();

export const getAllComments = async() => {
    const response = await API.get('/posts');

    return commentsDataFromServer(response);
};

export const getSingleComment = async(id) => {
    const response = await API.get(`/comments/${id}`);

    return response;
};
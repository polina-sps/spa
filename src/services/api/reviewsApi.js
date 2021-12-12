import createInstance from '../instance';
import { reviewsDataFromServer } from '../utils/dataFromServer';

const API = createInstance();

export const getAllReviews = async () => {
  const response = await API.get('/');

  return reviewsDataFromServer(response);
};

export const createReview = async (data) => {
  const response = await API.post('/', data);

  return reviewsDataFromServer(response);
};

export const deleteReview = async (id) => {
  const response = await API.delete('/', { data: { id } });

  return reviewsDataFromServer(response);
};

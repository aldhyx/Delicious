import CONFIG from './config';

const { BASE_URL } = CONFIG;

const API = {
  GET_LIST: `${BASE_URL}list`,
  GET_DETAIL: (id) => `${BASE_URL}detail/${id}`,
  POST_REVIEW: `${BASE_URL}review`,
};

export default API;

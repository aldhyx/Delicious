import CONFIG from './config';

const { BASE_URL } = CONFIG;

const API = {
  GET_LIST: `${BASE_URL}list`,
  GET_DETAIL: (id) => `${BASE_URL}detail/${id}`,
};

export default API;

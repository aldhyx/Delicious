import API from '../globals/api';

class DeliciousSources {
  static async getList() {
    try {
      const response = await fetch(API.GET_LIST);
      const responseJson = await response.json();
      return Promise.resolve(responseJson.restaurants);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  static async getDetail(id) {
    const response = await fetch(API.GET_DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async postReview(jsonData) {
    const response = await fetch(API.POST_REVIEW, {
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': 12345,
      },
      method: 'POST',
      body: JSON.stringify(jsonData),
    });
    const responseJson = await response.json();
    return responseJson;
  }
}

export default DeliciousSources;

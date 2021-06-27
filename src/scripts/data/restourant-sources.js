import API from '../globals/api';

class DeliciousSources {
  static async getList() {
    const response = await fetch(API.GET_LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }
  static async getDetail(id) {
    const response = await fetch(API.GET_DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default DeliciousSources;

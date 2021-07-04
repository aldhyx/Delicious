import DeliciousSources from '../../data/restourant-sources';
import UrlParser from '../../routes/url-parser';
import LoaderHelper from '../../utils/loader-helper';
import { createRestaurantDetail } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
    <main class="loaderContainer"></main>
    <main id="restaurantContainer"></main>
    <aside id="reviewsContainer"></aside>
    `;
  },

  async afterRender() {
    const containerMain = document.querySelector('#restaurantContainer');
    const containerLoader = document.querySelector('.loaderContainer');
    LoaderHelper.renderLoader({ containerLoader });

    const { id } = UrlParser.parseActiveUrlWithoutCombiner();
    const detailRestaurants = await DeliciousSources.getDetail(id);
    LoaderHelper.removeLoader({ containerLoader });
    containerMain.innerHTML += createRestaurantDetail(detailRestaurants);

    console.log(
      '🚀 ~ file: detail.js ~ line 21 ~ afterRender ~ detailRestaurants',
      detailRestaurants
    );
  },
};

export default Detail;

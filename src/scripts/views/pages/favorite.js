import FavoriteRestaurantIdb from '../../data/database';
import LoaderHelper from '../../utils/loader-helper';
import { createRestaurantCatalogueTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <div>
        <h2 class="best-pick__label">
            <span>My</span>
            <span>Favorite</span>
        </h2>
    </div>
    <div class="loaderContainer"></div>
    <main class="posts" id="favoriteContainer">
    </main>
    `;
  },

  async afterRender() {
    const containerMain = document.querySelector('#favoriteContainer');
    const containerLoader = document.querySelector('.loaderContainer');
    LoaderHelper.renderLoader({ containerLoader });

    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    LoaderHelper.removeLoader({ containerLoader });
    if (!restaurants.length) {
      // Todo: render no favorite
      return;
    }

    restaurants.map(
      (any) =>
        (containerMain.innerHTML += createRestaurantCatalogueTemplate(any))
    );

    console.log(
      '🚀 ~ file: favorite.js ~ line 24 ~ afterRender ~ restaurants',
      restaurants
    );
  },
};

export default Favorite;

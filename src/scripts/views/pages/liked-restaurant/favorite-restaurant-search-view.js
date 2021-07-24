import { createCatalogueTemplate } from '../../templates/template-creator';

/* eslint-disable class-methods-use-this */
class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
    <div>
        <h2 class="best-pick__label">
            <span>My</span>
            <span>Favorite</span>
        </h2>
    </div>
    <input id="query" type="text">
    <div class="loaderContainer"></div>
    <main class="posts" id="favoriteContainer">
    </main>
    `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showRestaurants(restaurants) {
    this.showFavoriteRestaurants(restaurants);
  }

  showFavoriteRestaurants(restaurants = []) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce(
        (carry, movie) => carry.concat(createCatalogueTemplate(movie)),
        '',
      );
    } else {
      html = this._getEmptyRestaurantTemplate();
    }

    document.getElementById('favoriteContainer').innerHTML = html;

    document
      .getElementById('favoriteContainer')
      .dispatchEvent(new Event('restaurants:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return '<div class="restaurant-item__not__found">Tidak ada restauran untuk ditampilkan</div>';
  }
}

export default FavoriteRestaurantSearchView;

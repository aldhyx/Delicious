import DeliciousSources from '../../data/restourant-sources';
import {
  createLoader,
  createRestaurantCatalogueTemplate,
} from '../templates/template-creator';

const Catalogue = {
  async render() {
    return `
    <section class="best-pick" aria-label="Konten Utama">
        <h2 class="best-pick__label">
            <span>Best</span>
            <span>Pick</span>
        </h2>
        <div class="posts" id="renderPosts">
        </div>
    </section>
    `;
  },

  async afterRender() {
    const postsContainer = document.querySelector('#renderPosts');
    postsContainer.innerHTML = createLoader();
    const restaurants = await DeliciousSources.getList();
    postsContainer.innerHTML = '';
    restaurants.forEach((restaurant) => {
      postsContainer.innerHTML += createRestaurantCatalogueTemplate(restaurant);
    });
  },
};

export default Catalogue;

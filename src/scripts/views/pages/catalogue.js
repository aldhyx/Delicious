import DeliciousSources from '../../data/restaurant-sources';
import LoaderHelper from '../../utils/loader-helper';
import {
  createCatalogueTemplate,
  createErrorTemplate,
} from '../templates/template-creator';

const Catalogue = {
  async render() {
    return `
    <section class="hero">
        <div class="hero__inner">
            <h1 class="hero__title">Delicious</h1>
            <p class="hero__tagline">Resto & Cafe</p>
        </div>
    </section>
    <section class="best-pick" aria-label="Konten Utama">
        <h2 class="best-pick__label">
            <span>Best</span>
            <span>Pick</span>
        </h2>
        <div class="loader"></div>
        <div class="posts" id="renderPosts">
        </div>
    </section>
    `;
  },

  async afterRender() {
    const containerPosts = document.querySelector('#renderPosts');
    const containerLoader = document.querySelector('.loader');

    try {
      LoaderHelper.renderLoader({ containerLoader });

      const restaurants = await DeliciousSources.getList();
      LoaderHelper.removeLoader({ containerLoader });
      restaurants.forEach((restaurant) => {
        containerPosts.innerHTML += createCatalogueTemplate(restaurant);
      });
    } catch (e) {
      let errMessage = e.message || e;
      if (typeof errMessage === 'object') {
        errMessage = JSON.stringify(errMessage);
      }

      containerPosts.innerHTML = createErrorTemplate(errMessage);
      LoaderHelper.removeLoader({ containerLoader });
    }
  },
};

export default Catalogue;

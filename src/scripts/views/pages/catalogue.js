import DeliciousSources from '../../data/restaurant-sources';
import {
  createCatalogueTemplate,
  createErrorTemplate,
  createSkeletonCatalogueTemplate,
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
        <div class="posts" id="renderPosts">
          ${createSkeletonCatalogueTemplate(3)}
        </div>
    </section>
    `;
  },

  async afterRender() {
    const containerPosts = document.querySelector('#renderPosts');

    try {
      const restaurants = await DeliciousSources.getList();
      containerPosts.innerHTML = '';
      restaurants.forEach((restaurant) => {
        containerPosts.innerHTML += createCatalogueTemplate(restaurant);
      });
    } catch (e) {
      let errMessage = e.message || e;
      if (typeof errMessage === 'object') {
        errMessage = JSON.stringify(errMessage);
      }

      containerPosts.innerHTML = '';
      containerPosts.innerHTML = createErrorTemplate(errMessage);
    }
  },
};

export default Catalogue;

import FavoriteRestaurantIdb from '../../data/database';
import DeliciousSources from '../../data/restourant-sources';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import LoaderHelper from '../../utils/loader-helper';
import ReviewsFormInitiator from '../../utils/reviews-form-initiator';
import {
  createRestaurantDetail,
  createReviewsFormTemplate,
  createReviewsHeaderTemplate,
  createReviewsTemplate,
} from '../templates/template-creator';

const Detail = {
  async render() {
    return `
    <div class="loaderContainer"></div>
    <main id="restaurantContainer"></main>
    <aside id="reviewsContainer"></aside>
    <aside id="likeButtonContainer"></aside>
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
    containerMain.innerHTML += createReviewsHeaderTemplate(
      detailRestaurants.id,
    );

    const reviews = detailRestaurants.customerReviews.length > 0
        ? detailRestaurants.customerReviews.reverse().slice(0, 2)
        : [];

    containerMain.innerHTML += createReviewsTemplate({
      id: detailRestaurants.id,
      reviews,
    });

    containerMain.innerHTML += createReviewsFormTemplate();

    const reviewFormContainer = document.querySelector('#review-form');
    ReviewsFormInitiator.init({ reviewFormContainer, id: detailRestaurants.id });

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: detailRestaurants.id,
        name: detailRestaurants.name,
        address: detailRestaurants.address,
        city: detailRestaurants.city,
        description: detailRestaurants.description,
        menus: detailRestaurants.menus,
        rating: detailRestaurants.rating,
        pictureId: detailRestaurants.pictureId,
        categories: detailRestaurants.categories,
      },
    });
  },
};

export default Detail;

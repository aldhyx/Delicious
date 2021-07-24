import DeliciousSources from '../data/restaurant-sources';
import { createReviewsTemplate } from '../views/templates/template-creator';

const ReviewsFormInitiator = {
  async init({ reviewFormContainer, id }) {
    this._form = reviewFormContainer;
    this._id = id;
    this._onSubmit();
  },

  _onSubmit() {
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);

      const jsonData = {
        id: this._id,
        name: 'aldhyyy',
        review: formData.get('review'),
      };

      // eslint-disable-next-line no-param-reassign
      event.target[0].value = '';
      this._postReview(jsonData);
    });
  },

  async _postReview(jsonData) {
    const res = await DeliciousSources.postReview(jsonData);

    const reviewContainer = document.querySelector('.review-list');

    const reviews = res.customerReviews.length > 0
        ? res.customerReviews.reverse().slice(0, 2)
        : [];
    reviewContainer.innerHTML = '';
    reviewContainer.innerHTML += createReviewsTemplate({
      reviews,
    });
  },
};

export default ReviewsFormInitiator;

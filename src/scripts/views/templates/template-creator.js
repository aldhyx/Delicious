/* eslint-disable comma-dangle */
import CONFIG from '../../globals/config';

const createCatalogueTemplate = (restaurant) => `
<article class="post-item" tabindex="0" >
    <div class="post-item__header">
        <a href="/#/detail/${restaurant.id}">
            <img
            data-src="${
              CONFIG.BASE_IMAGE_URL_MEDIUM + restaurant.pictureId
              || 'https://picsum.photos/id/666/800/450?grayscale'
            }" 
            alt="${restaurant.name || ''}"
            class="lazyload post-item__thumbnail">
        </a>
        <div class="post-item__city">
            ${restaurant.city || ''}
        </div>
    </div>

    <div class="post-item__body">
        <p class="post-item__rating">
            <span>⭐</span>
            <span>
                ${restaurant.rating || '0'} / 4
            </span>
        </p>

        <h3 class="post-item__title">
            <a href="/#/detail/${restaurant.id}">
                ${restaurant.name || ''}
            </a>
        </h3>

        <p class="post-item__description">
        ${
          restaurant.description
            ? `${restaurant.description.substr(0, 300)}...`
            : ''
        }
        </p>
    </div>
</article>
`;

const createLoader = () => `
<div class="loader-wrapper">
    <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    <span>Sedang memuat data...</span>
</div>
`;

const createRestaurantDetail = (restaurant) => `
<section class="restaurant">
    <div class="restaurant-header">
        <div class="class="restaurant-header__bottom">
            <img src="${
              CONFIG.BASE_IMAGE_URL_MEDIUM + restaurant.pictureId
              || 'https://picsum.photos/id/666/800/450?grayscale'
            }" alt="${restaurant.name}" class="restaurant__img"/>
            <p class="restaurant__city">
            ${restaurant.city}
            </p>
        </div>
        
        <div class="restaurant-header__top">
            <p class="restaurant__rating">
                <span>⭐</span>
                <span>${restaurant.rating} / 4</span>
            </p>
            <p class="restaurant__address">
                <span>${restaurant.address}</span>
                <span>📍</span>
            </p>
        </div>
    </div>
    <article class="restaurant-body">
        <h2 class="restaurant__title">${restaurant.name}</h2>
        <p class="restaurant__desc">${restaurant.description}</p>
    </article>
</section>

<section class="restaurant-menu">
    <section class="restaurant-food">
        <h3 class="section__title">
            <span>🍜</span>
            <span>Makanan Tersedia</span>
        </h3>
        <ul class="restaurant-lists">
            ${restaurant.menus.foods
              .map(
                (any) => `<li class="restaurant-lists__item">${any.name}</li>`
              )
              .join('')}
        </ul>
    </section>

    <section class="restaurant-drink">
        <h3 class="section__title">
            <span>🍹</span>
            <span>Minuman Tersedia</span>
        </h3>
        <ul class="restaurant-lists">
            ${restaurant.menus.drinks
              .map(
                (any) => `<li class="restaurant-lists__item">${any.name}</li>`
              )
              .join('')}
        </ul>
    </section>
</section>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

const createReviewsHeaderTemplate = (id) => `
<section class="review">
    <div class="review-header">
        <h3 class="section__title">Ulasan Pengunjung</h3>
        <a href="/#/detail/${id}/reviews">Lihat Semua</a>
    </div>
</section>
`;

const createReviewsFormTemplate = () => `
<section class="review">
    <div class="review-footer">
        <form id="review-form" action="post">
            <textarea name="review" required placeholder="Ketik Ulasan..."></textarea>
            <button type="submit">Kirim 🚀</button>
        </form>
    </div>
</section>
`;

const createReviewsTemplate = ({ reviews = [] }) => `
<section class="review">
    <ul class="review-list">
    ${
      reviews.length > 0
      && reviews
        .map(
          (any) => `
            <li class="review-item">
                <h4 class="review-name">
                    <span>Oleh</span>
                    <span>${any.name}</span>
                </h4>
                <p class="review-content">
                    ${any.review}
                </p>
            </li>
        `
        )
        .join('')
    }
    </ul>
</section>
`;

const createErrorTemplate = (errMessage) => `
<div class="message message-error">
    <h6 class="message-header">
        <i class="fas fa-exclamation-triangle"></i>
        <span>
            Peringatan
        </span>
    </h6>
    <span>
    ${errMessage || 'Mohon maaf, Terjadi kesalahan pada sistem kami.'}
    </span>
</div>
`;

export {
  createCatalogueTemplate,
  createLoader,
  createRestaurantDetail,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createReviewsTemplate,
  createReviewsHeaderTemplate,
  createReviewsFormTemplate,
  createErrorTemplate,
};

import CONFIG from '../../globals/config';

const createRestaurantCatalogueTemplate = (restaurant) =>
  `
<article class="post-item" tabindex="0" >
    <div class="post-item__header">
        <a href="/#/detail/${restaurant.id}">
            <img
            src="${
              CONFIG.BASE_IMAGE_URL_MEDIUM + restaurant.pictureId ||
              'https://picsum.photos/id/666/800/450?grayscale'
            }" 
            alt="${restaurant.name || ''}"
            class="post-item__thumbnail">
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
            ? restaurant.description.substr(0, 300) + '...'
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
        <img src="${
          CONFIG.BASE_IMAGE_URL_MEDIUM + restaurant.pictureId ||
          'https://picsum.photos/id/666/800/450?grayscale'
        }" alt="${restaurant.name}" class="restaurant__img"/>
        <p class="restaurant__city">
        ${restaurant.city}
        </p>
    </div>
    <div class="restaurant-body">
        <div class="restaurant-body__top">
            <p class="restaurant__rating">
                <span>⭐</span>
                <span>${restaurant.rating} / 4</span>
            </p>
            <p class="restaurant__address">
                <span>${restaurant.address}</span>
                <span>📍</span>
            </p>
        </div>
        <article class="restaurant-body__bottom">
            <h2 class="restaurant__title">${restaurant.name}</h2>
            <p class="restaurant__desc">${restaurant.description}</p>
        </article>
    </div>
</section>

<section class="restaurant-food">
    <h3 class="section__title">
        <span>🍜</span>
        <span>Makanan Tersedia</span>
    </h3>
    <ul class="restaurant-lists">
        ${restaurant.menus.foods
          .map((any) => `<li class="restaurant-lists__item">${any.name}</li>`)
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
          .map((any) => `<li class="restaurant-lists__item">${any.name}</li>`)
          .join('')}
    </ul>
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

export {
  createRestaurantCatalogueTemplate,
  createLoader,
  createRestaurantDetail,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};

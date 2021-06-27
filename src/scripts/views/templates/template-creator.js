import CONFIG from '../../globals/config';

const createRestaurantCatalogueTemplate = (restaurant) =>
  `
<article class="post-item" tabindex="0" >
    <div class="post-item__header">
        <img
            src="${
              CONFIG.BASE_IMAGE_URL_MEDIUM + restaurant.pictureId ||
              'https://picsum.photos/id/666/800/450?grayscale'
            }" 
            alt="${restaurant.name || ''}"
            class="post-item__thumbnail">
        <div class="post-item__city">
            ${restaurant.city || ''}
        </div>
    </div>

    <div class="post-item__body">
        <p class="post-item__rating">
            <span>Rating:</span>
            <span>
                ${restaurant.rating || '0'}/4
            </span>
        </p>

        <h3 class="post-item__title">
            ${restaurant.name || ''}
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
export { createRestaurantCatalogueTemplate, createLoader };

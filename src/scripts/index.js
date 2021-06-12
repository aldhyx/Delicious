import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';

const loadJSON = (callback) => {
  const xObj = new XMLHttpRequest();
  xObj.overrideMimeType('application/json');
  xObj.open('GET', './data.json', true);

  xObj.onreadystatechange = function () {
    if (xObj.readyState === 4 && xObj.status === 200) {
      callback(xObj.responseText);
    }
  };
  xObj.send(null);
};

const createArticleTemplate = (data) => {
  const readyTemplates = `
  <article class="post-item" tabindex="0" >
      <div class="post-item__header">
          <img src="${data.pictureId || ''}" alt="${data.name || ''}"
              class="post-item__thumbnail">
          <div class="post-item__city">
              ${data.city || ''}
          </div>
      </div>

      <div class="post-item__body">
          <p class="post-item__rating">
              <span>
                  Rating:
              </span>
              <span>
                  ${data.rating || '0'}/4
              </span>
          </p>

          <h1 class="post-item__title">
              ${data.name || ''}
          </h1>

          <p class="post-item__description">
          ${
            data.description
              ? data.description.length > 250
                ? data.description.substr(0, 250) + '...'
                : data.description
              : ''
          }
          </p>
      </div>
  </article>
  `;

  return readyTemplates;
};

const renderToApp = (json = {}) => {
  const toRenderEl = document.getElementById('renderPosts');
  const articlesEl = json.restaurants
    .map((any) => createArticleTemplate(any))
    .join('');
  toRenderEl.innerHTML = articlesEl;
};

(function init() {
  loadJSON((response) => {
    let json = JSON.parse(response);
    console.log('your local JSON =', json);

    if (json && Object.keys(json).length > 0) {
      renderToApp(json);
    }
  });
})();

const hamburgerButtonElement = document.querySelector('#hamburger');
const drawerElement = document.querySelector('#drawer');
const closeHamburgerElement = document.querySelector('#closeHamburger');
const navBackgroundElement = document.querySelector('#navBackground');

hamburgerButtonElement.addEventListener('click', (event) => {
  drawerElement.classList.toggle('open');
  navBackgroundElement.classList.toggle('open');
});

closeHamburgerElement.addEventListener('click', (event) => {
  drawerElement.classList.remove('open');
  navBackgroundElement.classList.remove('open');
});

navBackgroundElement.addEventListener('click', (event) => {
  drawerElement.classList.remove('open');
  navBackgroundElement.classList.remove('open');
});

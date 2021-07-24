const assert = require('assert');

Feature('Liking Restaurant');

Scenario('like unlike one restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.post-item .post-item__title a');
  const firstFilm = locate('.post-item .post-item__title a').first();
  const firstFilmTitle = await I.grabTextFrom(firstFilm);
  I.click(firstFilm);

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.seeElement('.post-item');

  const likedFilmTitle = await I.grabTextFrom('.post-item .post-item__title a');
  assert.strictEqual(firstFilmTitle, likedFilmTitle);

  I.click(firstFilm);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.dontSeeElement('.post-item');
});

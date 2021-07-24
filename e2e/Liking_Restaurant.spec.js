const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.seeElement('#query');
  I.see('Tidak ada restauran untuk ditampilkan', '.post-item__not__found');
  I.dontSeeElement('.post-item');
});

Scenario('like a restaurant', async ({ I }) => {
  I.see('Tidak ada restauran untuk ditampilkan', '.post-item__not__found');
  I.dontSeeElement('.post-item');

  I.amOnPage('/');
  I.wait(1);
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
});

Scenario('unlike a restaurant', async ({ I }) => {
  I.see('Tidak ada restauran untuk ditampilkan', '.post-item__not__found');
  I.dontSeeElement('.post-item');

  I.amOnPage('/');
  I.wait(1);
  I.seeElement('.post-item .post-item__title a');

  const firstFilm = locate('.post-item .post-item__title a').first();
  I.click(firstFilm);

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.seeElement('.post-item');

  I.click(firstFilm);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.see('Tidak ada restauran untuk ditampilkan', '.post-item__not__found');
  I.dontSeeElement('.post-item');
});

const assert = require('assert');

Feature('Review Restaurant');

Scenario('post review for one restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.post-item .post-item__title a');
  const firstRestaurant = locate('.post-item .post-item__title a').first();
  I.click(firstRestaurant);

  I.seeElement('#review-form');
  I.seeElement('#review-form textarea');
  I.seeElement('#review-form button');

  const reviewText = 'awesome man';
  I.fillField('#review-form textarea', reviewText);
  I.click('#review-form button');

  I.wait(2);
  I.seeElement('.review-list .review-item');
  I.seeElement('.review-list .review-item .review-name');
  I.seeElement('.review-list .review-item .review-content');
  const myReview = locate('.review-list .review-item .review-content').first();
  const myReviewText = await I.grabTextFrom(myReview);
  assert.strictEqual(reviewText, myReviewText);
});

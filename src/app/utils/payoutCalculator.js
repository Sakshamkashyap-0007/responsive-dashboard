// src/app/utils/payoutCalculator.js

export const calculatePayout = (articles, ratePerArticle) => {
  return articles.length * ratePerArticle;  // Calculate the total payout
};

export const storePayoutData = (ratePerArticle, payout) => {
  localStorage.setItem('ratePerArticle', ratePerArticle);  // Store rate per article
  localStorage.setItem('totalPayout', payout);  // Store total payout
};

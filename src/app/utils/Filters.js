export const filterByAuthor = (articles, author) => {
    return articles.filter(article => article.author === author);
  };
  
  export const filterByDateRange = (articles, startDate, endDate) => {
    return articles.filter(article => {
      const date = new Date(article.publishedAt);
      return date >= new Date(startDate) && date <= new Date(endDate);
    });
  };
  
  export const filterByType = (articles, type) => {
    return articles.filter(article => article.type === type);
  };
  
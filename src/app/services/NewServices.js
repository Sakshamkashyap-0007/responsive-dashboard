import axios from 'axios';

export const fetchArticles = async () => {
  try {
    const response = await axios.get('https://newsapi.org/v2/everything', {
      params: { q: 'technology', apiKey: process.env.NEWS_API_KEY },
    });
    return response.data.articles;
  } catch (error) {
    throw new Error('Error fetching articles: ' + error.message);
  }
};

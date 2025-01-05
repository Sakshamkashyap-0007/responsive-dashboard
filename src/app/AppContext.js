import React, { createContext, useState, useContext } from 'react';

// Create the context
const AppContext = createContext();

// Provider component
export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null); // User authentication state
  const [articles, setArticles] = useState([]); // Fetched articles/blogs
  const [filters, setFilters] = useState({ author: '', dateRange: '', type: '' }); // Filters
  const [payout, setPayout] = useState(0); // Payout value per article/blog

  // Update articles and apply filters
  const updateArticles = (newArticles) => {
    setArticles(newArticles);
  };

  // Context value to provide
  const value = {
    user,
    setUser,
    articles,
    updateArticles,
    filters,
    setFilters,
    payout,
    setPayout,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Custom hook to use the context
export const useAppContext = () => {
  return useContext(AppContext);
};

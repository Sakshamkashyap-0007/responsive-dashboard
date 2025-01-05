import React, { createContext, useState, useContext } from 'react';


const AppContext = createContext();


export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [articles, setArticles] = useState([]); 
  const [filters, setFilters] = useState({ author: '', dateRange: '', type: '' }); 
  const [payout, setPayout] = useState(0); 

  
  const updateArticles = (newArticles) => {
    setArticles(newArticles);
  };

  
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


export const useAppContext = () => {
  return useContext(AppContext);
};

import React, { useState, useEffect, useContext, createContext } from 'react';
import axios from 'axios';
import { UserContext } from './userContext';

const ReportsContext = createContext();

const ReportsContextProvider = ({ children }) => {
  const { userInfo } = useContext(UserContext);
  const [allTransactions, setAllTransactions] = useState([]);
  const [chart, setChart] = useState('month');
  const [drink, setDrink] = useState(null);

  const thisWeek = () => {

  }

  return (
    <BarContext.Provider
      value={{
        allTransactions,
        setAllTransactions,
        chart,
        setChart,
        drink,
        setDrink,
      }}
    >
      {children}
    </BarContext.Provider>
  )
};

export { ReportsContext, ReportsContextProvider };

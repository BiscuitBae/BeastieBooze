import React, { useState, useEffect, useContext, createContext } from 'react';
import axios from 'axios';
import { UserContext } from './userContext';

const ReportsContext = createContext();

const ReportsContextProvider = ({ children }) => {
  const { userInfo } = useContext(UserContext);
  const [allTransactions, setAllTransactions] = setState([]);
  const [chart, setChart] = setState('month');
  const [drink, setDrink] = setState(null);

  const thisWeek = () => {

  }
};
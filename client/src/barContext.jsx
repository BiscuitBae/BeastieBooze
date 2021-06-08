import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

const BarContext = createContext();

const BarContextProvider = ({ children }) => {
  // Bar name
  const [barName, setBarName] = useState('');

  // Contact info which holds address, phone, and email.
  const [contactInformation, setContactInformation] = useState({
    address,
    phone,
    email,
  });
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  // Details holds hours of operation and a description.
  const [details, setDetails] = useState({
    hoursOfOperation,
    description
  });
  const [hoursOfOperation, setHoursOfOperation] = useState('');
  const [description, setDescription] = useState('');

  return (
    <BarContext.Provider
    value={{
      barName,
      contactInformation,
      address,
      phone,
      email,
      details,
      hoursOfOperation,
      description }}>
      {children}
      </BarContext.Provider>
  );
};

export {
  BarContext,
  BarContextProvider,
};

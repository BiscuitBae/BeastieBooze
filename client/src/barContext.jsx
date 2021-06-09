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
    description,
  });
  const [hoursOfOperation, setHoursOfOperation] = useState('');
  const [description, setDescription] = useState('');

  const [bars, setBars] = useState([]);

  const fetchBars = async () => {
    const response = await axios.get('/routes/businesses');
    return response.data;
  };

  useEffect(() => {
    fetchBars()
      .then((bars) => setBars(bars))
      .catch((err) => console.log(err));
  }, []);

  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <BarContext.Provider
      value={{
        barName,
        setBarName,
        contactInformation,
        address,
        setAddress,
        phone,
        setPhone,
        email,
        setEmail,
        details,
        hoursOfOperation,
        setHoursOfOperation,
        description,
        setDescription,
        showForm,
        toggleForm,
        bars,
      }}
    >
      {children}
    </BarContext.Provider>
  );
};

export { BarContext, BarContextProvider };

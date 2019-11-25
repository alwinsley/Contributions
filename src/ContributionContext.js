import React, { useState, createContext } from 'react';

export const ContributionContext = createContext();

export const ContributionProvider = (props) => {
  const [contributions, setContributions] = useState([
    {
      id: 1,
      name: 'Jojo',
      amount: 500
    },
    {
      id: 2,
      name: 'James',
      amount: 800
    },
    {
      id: 3,
      name: 'John',
      amount: 1200
    }
  ]);
  return (
    <ContributionContext.Provider value={[contributions, setContributions]}>
      {props.children}
    </ContributionContext.Provider>
  )
}
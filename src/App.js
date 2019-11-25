import React from 'react';
import './App.css';

import Form from './components/Form';
import ContributionList from './components/ContributionList';

import { ContributionProvider } from './ContributionContext';

function App() {

  return (
    <>
      <ContributionProvider>
        <Form />
        <ContributionList />
      </ContributionProvider>
    </>
  );
}

export default App;

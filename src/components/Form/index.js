import React, { useState, useContext } from 'react';
import './styles.css';

import { ContributionContext } from '../../ContributionContext';

const AddForm = () => {
  const [signup, setSignup] = useState(false);
  const [signin, setSignin] = useState(true);
  const [contributorName, setContributorName] = useState('');
  const [newContributor, setNewContributor] = useState('');
  const [amount, setAmount] = useState('')
  const [contributions, setContributions] = useContext(ContributionContext)

  const showSignup = e => {
    e.preventDefault();
    console.log('hidden!');
    setSignup(true);
    setSignin(false);
  }

  const showSignin = e => {
    e.preventDefault();
    setSignin(true);
    setSignup(false);
  }

  const handleChangeAmount = e => {
    setAmount(e.target.value)
  }

  const handleChangeName = e => {
    setContributorName(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    setContributions(prevContributions => [...prevContributions, { name: contributorName, amount: amount }])
    setContributorName('');
    setAmount('');
  }

  const handleAddName = e => {
    e.preventDefault();
    setContributions(prevContributions => [...prevContributions, { name: contributorName }])
    setContributorName('');
    setAmount('');
  }

  return (
    <>
      {signup && <section className="section sign-up">
        <div className="trapezoid"></div>
        <form onSubmit={handleAddName}>
          <input value={newContributor} type="text" name="name" placeholder="Name" />
          <button type="submit">Add Contributor</button>
          <p onClick={showSignin} className="opposite-btn2">Cancel</p>
        </form>
      </section>
      }

      {signin && <section className="section sign-in">
        <form onSubmit={handleSubmit}>
          <label>Choose Contributor:</label>
          <select value={contributorName} onSelect={handleChangeName} onChange={handleChangeName} name="contributorName">{contributions.map((x, y) => <option key={y}>{x.name}</option>)}</select>
          <input value={amount} onChange={handleChangeAmount} type="number" name="amount" placeholder="Amount" />
          <button type="submit">Add Contribution</button>
          <p onClick={showSignup} className="opposite-btn1">+ Add New Contributor</p>
        </form>
      </section>
      }
    </>
  )
}

export default AddForm;
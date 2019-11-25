import React, { useContext } from 'react'
import './styles.css';

import Contribution from '../Contribution';
import { ContributionContext } from '../../ContributionContext';



const ContributionList = () => {
  const [contributions] = useContext(ContributionContext);

  return (
    <>
      <div className="table-title">
        <h3>Contributions</h3>
      </div>
      <table className="table-fill">
        <thead>
          <tr>
            <th className="text-left">Name</th>
            <th className="text-left">Contribution</th>
          </tr>
        </thead>
        <tbody className="table-hover">
          {contributions.map(c =>
            <Contribution name={c.name} amount={c.amount} key={c.id} />
          )}

        </tbody>
      </table>
    </>
  );
}

export default ContributionList;
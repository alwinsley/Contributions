import React from 'react'

const Contribution = ({ name, amount }) => {

  return (

    <tr>
      <td className="text-left">{name}</td>
      <td className="text-left">${amount}</td>
    </tr>

  );
}

export default Contribution;
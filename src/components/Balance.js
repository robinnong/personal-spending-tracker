import React from 'react';
import { connect } from 'react-redux';

const calculateSum = data => {
  const values = data.map(item => item.price);
  return values.reduce((a, b) => a + b);
}

const mapStateToProps = state => ({ 
  total: calculateSum(state.items)
})

const Balance = ({ total }) => (
  <div className="balance">
    <h2 className="balance__label">Balance</h2>
    <p>
      {total < 0 ? "- " : " "}
      <span className="balance__value">${Math.abs(total)}</span> CAD
    </p>
  </div>
) 

export default connect(mapStateToProps)(Balance); 
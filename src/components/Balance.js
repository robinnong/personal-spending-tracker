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
  <div className="summary">
    <h2>Balance</h2>
    <p className="balance">
      {total < 0 ? "- " : " "}
      <span>${Math.abs(total)}</span> CAD
    </p>
  </div>
) 

export default connect(mapStateToProps)(Balance); 
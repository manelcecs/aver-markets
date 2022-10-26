import React from "react";

const Market = ({ market }) => {
  debugger;
  return (<div className="market-container">
      <p>{market.name} <strong className={market.internal_status}>{market.internal_status}</strong></p> 
      </div>);
};

export default Market;

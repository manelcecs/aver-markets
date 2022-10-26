import React from "react";

const Market = ({ market }) => {
    const outcomes = market.outcomes;

  const handleOnClick = () =>{
    console.log("Selectd")
  }

    return (
    <div className="market-container" onClick={handleOnClick}>
      <p>
        {market.name}{" "}
        <strong className={market.internal_status}>
          {market.internal_status}
        </strong>
      </p>
      
    </div>
  );
};

export default Market;

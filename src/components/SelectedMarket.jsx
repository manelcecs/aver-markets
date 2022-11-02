import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";


import { getAverMarket } from "../services/averMarkets.service";

const SelectedMarket = ({ market, onClose, open, action }) => {
  //const averMarket = await getAverMarket(market);
  debugger;
  const handleClose = () => {
    debugger;
    onClose();
  };

 
  return (
    <Dialog className="dialog" onClose={handleClose} open={open}>
      <DialogTitle>
        Placing an order
      </DialogTitle>
      
    </Dialog>
  );
};

const getMarketOutcomes =  (market, averMarket) => {
  return market?.outcomes.map((outcome) => {
    const betting_prices = {
      id: outcome.id,
      index: outcome.index,
      bid_name: outcome.description,
      best_ask_price: averMarket.getBestAskPrice(true),
      best_ask_bid: averMarket.getBestBidPrice(true),
    };
    debugger;
    return betting_prices;
  });
};
export default SelectedMarket;

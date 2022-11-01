import React from "react";
import Button from "@mui/material/Button";
import List from "@mui/material/List";

import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";

import ListItemText from "@mui/material/ListItemText";

import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";


import { getAverMarket } from "../services/averMarkets.service";

const SelectedMarket = ({ market, onClose, open }) => {
  //const averMarket = await getAverMarket(market);

  const handleClose = () => {
    debugger;
    onClose();
  };

 
  return (
    <Dialog className="dialog" onClose={handleClose} open={open}>
      <DialogTitle>
        Placing a bet!
      </DialogTitle>
      <List sx={{ pt: 0 }}>
        {market.outcomes.map((outcome) => (
          <ListItem key={outcome.id}>
            <ListItemAvatar>
              <Avatar>
                <img src={outcome.image_url} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={outcome.description} />

            
          </ListItem>
        ))}
        </List>
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

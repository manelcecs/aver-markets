import React from 'react';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

const SelectedMarket = ({market, onClose, open}) => {

  const handleClose = () => {
    onClose();
  };


  debugger;
  const outcomesOrderbook = market?.orderbooks.map((orderBook => {
    return {best_ask_price:orderBook.best_ask_price, best_ask_bid: orderBook.best_ask_price};
    //return {best_ask_price:outcome1Orderbook.getBestAskPrice(true), best_ask_bid: outcome1Orderbook.getBestBidPrice(true)};
  }));

debugger;
  return ( market ? 

    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{market.name}{" "} <strong className={market.status}>{market.status}</strong></DialogTitle>
      <List sx={{ pt: 0 }}>
        {market?.outcomeNames.map((outcome, i) =>( 

          <ListItem  key={outcome}>
            {outcome}
          </ListItem>

        ))}
        
      </List>
    </Dialog>
 : ''
  );
}

export default SelectedMarket;
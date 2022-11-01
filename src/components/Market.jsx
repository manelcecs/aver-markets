import React, { useState } from "react";
import { getAverMarket } from "../services/averMarkets.service";
import SelectedMarket from "./SelectedMarket";
import Button from "@mui/material/Button";
import List from "@mui/material/List";

import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";

import ListItemText from "@mui/material/ListItemText";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

const Market = ({ market }) => {
  const [open, setOpen] = useState(false);
  const [action, setAction] = useState(null);

  const handleClose = () => {
    setOpen(false);
  };

  const handleBet = () => {
    setAction('bet');
    setOpen(true);
  };

  const handleAsk = () => {
    setAction('ask');
    setOpen(true);
  };

  return (
    <Card className="market-container">
      <CardHeader title={market.name} />
      <CardContent>
        <List sx={{ pt: 0 }}>
          {market.outcomes.map((outcome) => (
            <ListItem key={outcome.id}>
              <ListItemAvatar>
                <Avatar>
                  <img src={outcome.image_url} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={outcome.description} />

              <Button variant="contained" onClick={handleBet}>
                Bet
              </Button>
              <Button variant="outlined" onClick={handleAsk}>
                Ask
              </Button>
            </ListItem>
          ))}
        </List>
      </CardContent>

      {selectedMarket ? (
        <SelectedMarket
          market={market}
          onClose={handleClose}
          open={open}
          action={action}
        />
      ) : (
        ""
      )}
    </Card>
  );
};

const printMarketInfo = (market) => {
  // console.log market data or specific properties
  console.log("-".repeat(10));
  console.log(`Market ${market?.pubkey} selected...`);
  console.log(`Market name: ${market?.name}`);

  console.log("-".repeat(10));
};

export default Market;

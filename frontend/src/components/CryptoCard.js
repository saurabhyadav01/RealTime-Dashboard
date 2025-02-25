import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { CurrencyBitcoin, AttachMoney } from "@mui/icons-material";

const CryptoCard = ({ crypto }) => {
  if (!crypto) return null;

  return (
    <Card
      sx={{
        boxShadow: 5,
        borderRadius: 3,
        p: 3,
        background: "linear-gradient(135deg, #f3f3f3, #ffffff)",
        transition: "all 0.3s ease-in-out",
        "&:hover": { boxShadow: 8 },
      }}
    >
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
          Cryptocurrency Prices
        </Typography>
        <Typography sx={{ fontSize: 16, fontWeight: 500 }}>
          <CurrencyBitcoin sx={{ verticalAlign: "middle", color: "gold", mr: 1 }} />
          Bitcoin: <strong>${crypto.bitcoin.toFixed(2)}</strong>
        </Typography>
        <Typography sx={{ fontSize: 16, fontWeight: 500, mt: 1 }}>
          <AttachMoney sx={{ verticalAlign: "middle", color: "green", mr: 1 }} />
          Ethereum: <strong>${crypto.ethereum.toFixed(2)}</strong>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CryptoCard;

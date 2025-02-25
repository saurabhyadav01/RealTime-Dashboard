import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { WbSunny, Opacity, Description, LocationOn } from "@mui/icons-material";

const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  return (
    <Card sx={{ boxShadow: 3, borderRadius: 3, p: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          <LocationOn sx={{ verticalAlign: "middle", color: "blue" }} /> Weather - {weather.city}
        </Typography>
        <Typography>
          <WbSunny sx={{ verticalAlign: "middle", color: "orange" }} /> {weather.temperature}°C
        </Typography>
        <Typography>
          <Opacity sx={{ verticalAlign: "middle", color: "blue" }} /> Humidity: {weather.humidity}%
        </Typography>
        <Typography>
          <Description sx={{ verticalAlign: "middle", color: "green" }} /> {weather.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;

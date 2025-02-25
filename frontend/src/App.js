import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaSyncAlt, FaTimes } from "react-icons/fa";
import {
  Container,
  Grid,
  Button,
  CircularProgress,
  Alert,
  Typography,
  Box,
} from "@mui/material";
import WeatherCard from "./components/WeatherCard";
import CryptoCard from "./components/CryptoCard";
import NewsCard from "./components/NewsCard";
import { fetchDashboardData } from "./utils/api"; // Import API utility
import { socket } from "./utils/socket"; // Import socket from utility

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    handleFetchData();
    socket.on("dashboardData", (updatedData) => {
      setData(updatedData);
    });

    return () => socket.off("dashboardData");
  }, []);

  const handleFetchData = async () => {
    setLoading(true);
    setError("");

    try {
      const dashboardData = await fetchDashboardData();
      setData(dashboardData);
    } catch (error) {
      setError("Failed to load data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      sx={{
        mt: 4,
        p: 4,
        boxShadow: 3,
        borderRadius: 3,
        backgroundColor: "#f9f9f9",
      }}
    >
      <Box
        component={motion.div}
        animate={{ scale: 1.05 }}
        sx={{
          textAlign: "center",
          backgroundColor: "#1976d2",
          color: "white",
          padding: "12px 24px",
          borderRadius: "8px",
          display: "inline-block",
          fontWeight: "bold",
          boxShadow: 3,
          mb: 3,
        }}
      >
        <Typography variant="h4">Real-Time Dashboard</Typography>
      </Box>

      <Button
        onClick={handleFetchData}
        variant="contained"
        color="primary"
        startIcon={<FaSyncAlt />}
        sx={{
          display: "block",
          mx: "auto",
          mb: 2,
          boxShadow: 2,
          "&:hover": { boxShadow: 4 },
        }}
      >
        Refresh
      </Button>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          <FaTimes style={{ marginRight: 5 }} />
          {error}
        </Alert>
      )}

      {loading && <CircularProgress sx={{ display: "block", mx: "auto", mt: 2 }} />}

      {!loading && data && (
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <WeatherCard weather={data.weather} />
          </Grid>
          <Grid item xs={12} md={4}>
            <CryptoCard crypto={data.crypto} />
          </Grid>
          <Grid item xs={12} md={4}>
            <NewsCard news={data.news} />
          </Grid>
        </Grid>
      )}
    </Container>
  );
}

export default App;

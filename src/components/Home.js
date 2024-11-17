import React from "react";
import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box sx={{ textAlign: "center", padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to car-website-test
      </Typography>
      <Typography variant="body1" paragraph>
        This site is still in development. Stay tuned for more updates!
      </Typography>
      <img
        src="/assets/image-asset_1.png"
        alt="Car Showcase"
        style={{ maxWidth: "100%", borderRadius: "10px", boxShadow: "0 6px 12px rgba(0,0,0,0.1)" }}
      />
    </Box>
  );
};

export default Home;

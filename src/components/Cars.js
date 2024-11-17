import React from "react";
import { Box, Grid, Typography, Card, CardMedia, CardContent, Button } from "@mui/material";

const Cars = () => {
  const carDetails = [
    { id: 1, name: "Car 1", image: "/assets/car1.png", price: "$30,000" },
    { id: 2, name: "Car 2", image: "/assets/car2.png", price: "$25,000" },
    { id: 3, name: "Car 3", image: "/assets/car3.png", price: "$40,000" },
    { id: 4, name: "Car 4", image: "/assets/car4.png", price: "$35,000" },
  ];

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Our Cars
      </Typography>
      <Grid container spacing={3}>
        {carDetails.map((car) => (
          <Grid item xs={12} sm={6} md={3} key={car.id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="200"
                image={car.image}
                alt={car.name}
              />
              <CardContent>
                <Typography variant="h6">{car.name}</Typography>
                <Typography variant="body1" color="textSecondary">{car.price}</Typography>
                <Button size="small" variant="contained" color="primary">View Details</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Cars;

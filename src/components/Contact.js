import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

const Contact = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <form>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <Button variant="contained" color="primary" fullWidth>
          Send Message
        </Button>
      </form>
    </Box>
  );
};

export default Contact;

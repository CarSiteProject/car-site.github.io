import React, { useState } from "react";
import { Box, Button, AppBar, Toolbar, Typography, Container, Switch } from "@mui/material";
import Home from "./components/Home";
import Cars from "./components/Cars";
import Contact from "./components/Contact";

const App = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleDarkModeToggle = (event) => {
    setDarkMode(event.target.checked);
    document.body.classList.toggle('dark-mode', event.target.checked);
    localStorage.setItem('darkMode', event.target.checked);
  };

  return (
    <Box>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            CAR-WEBSITE-TEST
          </Typography>
          <Button color="inherit" onClick={() => handleTabChange("home")}>Home</Button>
          <Button color="inherit" onClick={() => handleTabChange("cars")}>Cars</Button>
          <Button color="inherit" onClick={() => handleTabChange("contact")}>Contact</Button>
          <Switch checked={darkMode} onChange={handleDarkModeToggle} color="default" />
        </Toolbar>
      </AppBar>

      <Container sx={{ marginTop: 5 }}>
        {activeTab === "home" && <Home />}
        {activeTab === "cars" && <Cars />}
        {activeTab === "contact" && <Contact />}
      </Container>
    </Box>
  );
};

export default App;

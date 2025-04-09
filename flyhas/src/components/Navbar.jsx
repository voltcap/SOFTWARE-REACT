import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import logo from "/src/assets/flyhas-logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) return;
    setDrawerOpen(open);
  };

  const isLoggedIn = !!localStorage.getItem("userToken");
  const userName = localStorage.getItem("userName");
  const userRole = localStorage.getItem("userRole");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/Login");
  };

  const goToProfile = () => {
    if (userRole === "ADMIN") navigate("/AdminProfile/MyProfile");
    else if (userRole === "MANAGER") navigate("/ManagerProfile/MyProfile");
    else navigate("/UserProfile/MyProfile");
  };

  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: "#001F5B", position: "relative" }}>
        <Toolbar sx={{ position: "relative", zIndex: 2 }}>
          {/* LOGO and Title */}
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <img src={logo} alt="Logo" style={{ width: "90px", height: "90px", marginRight: "30px" }} />
            <Typography
              variant="h6"
              sx={{
                fontWeight: "300",
                fontFamily: "'Alfa Slab One', sans-serif",
                fontSize: "1.5rem",
                color: "white",
                cursor: "pointer",
              }}
              onClick={() => navigate("/")}
            >
              FLYHAS Flight Reservation
            </Typography>
          </Box>

          {/* Right-side buttons (desktop) */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 2,
              padding: "10px 20px",
            }}
          >
            <Button sx={{ color: "white" }} onClick={() => navigate("/Services")}>Services</Button>
            <Button sx={{ color: "white" }} onClick={() => navigate("/CityGuide")}>City Guide</Button>

            {isLoggedIn ? (
              <>
                <Typography sx={{ color: "white", alignSelf: "center" }}>
                  Welcome, {userName}
                </Typography>
                <Button onClick={goToProfile} sx={{ color: "white" }}>
                  My Profile
                </Button>
                <Button
                  startIcon={<LogoutIcon />}
                  onClick={handleLogout}
                  sx={{ color: "white" }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <Button
                startIcon={<LoginIcon />}
                onClick={() => navigate("/Login")}
                sx={{
                  backgroundColor: "#001F5B",
                  color: "white",
                  "&:hover": { backgroundColor: "#000E3B" },
                }}
              >
                Login
              </Button>
            )}
          </Box>

          {/* Hamburger for mobile */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>

        {/* Drawer (Mobile menu) */}
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          <List sx={{ width: 250 }}>
            <ListItem button onClick={() => { toggleDrawer(false); navigate("/Services"); }}>
              <ListItemText primary="Services" />
            </ListItem>
            <ListItem button onClick={() => { toggleDrawer(false); navigate("/CityGuide"); }}>
              <ListItemText primary="City Guide" />
            </ListItem>
            {isLoggedIn ? (
              <>
                <ListItem>
                  <ListItemText primary={`Welcome, ${userName}`} />
                </ListItem>
                <ListItem button onClick={() => { toggleDrawer(false); goToProfile(); }}>
                  <ListItemText primary="My Profile" />
                </ListItem>
                <ListItem button onClick={() => { toggleDrawer(false); handleLogout(); }}>
                  <ListItemText primary="Logout" />
                </ListItem>
              </>
            ) : (
              <ListItem button onClick={() => { toggleDrawer(false); navigate("/Login"); }}>
                <ListItemText primary="Login" />
              </ListItem>
            )}
          </List>
        </Drawer>
      </AppBar>
    </Box>
  );
};

export default Navbar;
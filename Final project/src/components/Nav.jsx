import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import logo from "../assets/Brown Modern Education Online Course Logo (2).png";

const navigation = [
  { name: "Z-Score", href: "/Zscore", current: false },
  { name: "Universities", href: "/University", current: false },
  { name: "Register Here", href: "https://ugc.ac.lk/", current: false },
];

function Example() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" sx={{ bgcolor: "#35374B" }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        ></IconButton>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ flexGrow: 1, cursor: "pointer" }}
        >
          <img
            src={logo}
            alt=""
            style={{ maxWidth: "50px", maxHeight: "50px" }}
          />
        </Typography>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {/* Navigation Links */}
          <nav>
            {navigation.map((item) => (
              <Button
                key={item.name}
                color="inherit"
                href={item.href}
                sx={{ marginRight: 2 }}
              >
                {item.name}
              </Button>
            ))}
          </nav>
        </div>

        {/* User Profile Dropdown */}
        <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          <AccountCircleIcon />
        </IconButton>

        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose} component={Link} to="/Profile">
            Your Profile
          </MenuItem>
          <MenuItem onClick={handleClose}>Sign out</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Example;

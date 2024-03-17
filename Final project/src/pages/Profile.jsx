import * as React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import profile from "../assets/tenex.png";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/28469aaaaaa.jpg";

const defaultTheme = createTheme();

export default function Profile() {
  const profileData = {
    username: "JohnDoe",
    email: "johndoe@example.com",
    country: "United States",
    cityTown: "New York",
  };

  return (
    <div style={{ display: "flex", paddingTop: "50px" }}>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          opacity: 0.7,
          zIndex: -1,
        }}
      />
      <div style={{ flex: 1, padding: "10px" }}>
        <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                boxShadow: 20,
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#F5F7F8", // Change the background color here
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <Typography
                sx={{ fontWeight: "bold" }}
                component="h1"
                variant="h5"
              >
                My Profile
              </Typography>
              <Box sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  fullWidth
                  label="Username"
                  name="username"
                  variant="outlined"
                  value={profileData.username}
                  disabled
                  sx={{
                    "& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "#333", // Change outline color here
                      },
                    "& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-input":
                      {
                        color: "#222831", // Change font color here
                      },
                  }}
                />
                <TextField
                  margin="normal"
                  fullWidth
                  label="Email Address"
                  name="email"
                  variant="outlined"
                  value={profileData.email}
                  disabled
                  sx={{
                    "& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "#333", // Change outline color here
                      },
                    "& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-input":
                      {
                        color: "#222831", // Change font color here
                      },
                  }}
                />
                <TextField
                  margin="normal"
                  fullWidth
                  label="Country"
                  name="country"
                  variant="outlined"
                  value={profileData.country}
                  disabled
                  sx={{
                    "& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "#333", // Change outline color here
                      },
                    "& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-input":
                      {
                        color: "#222831", // Change font color here
                      },
                  }}
                />
                <TextField
                  margin="normal"
                  fullWidth
                  label="City/Town"
                  name="cityTown"
                  variant="outlined"
                  value={profileData.cityTown}
                  disabled
                  sx={{
                    "& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "#333", // Change outline color here
                      },
                    "& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-input":
                      {
                        color: "#222831", // Change font color here
                      },
                  }}
                />
              </Box>
            </Box>
            <Link to="/Update-Profile">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Update Profile
              </Button>
            </Link>
            <Box sx={{ mt: 8, mb: 4 }} />
          </Container>
        </ThemeProvider>
      </div>
    </div>
  );
}

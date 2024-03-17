import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import backgroundImage from "../assets/weeee.jpg";

const defaultTheme = createTheme();

export default function UpdateProfile() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const profileData = {
      username: formData.get("username"),
      email: formData.get("email"),
      country: formData.get("country"),
      cityTown: formData.get("cityTown"),
    };
    console.log(profileData);
  };

  return (
    <div style={{ display: "flex", paddingTop: "50px" }}>
      {/* <DrawerList /> */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${backgroundImage})`,

          backgroundSize: "cover",
          opacity: 0.6, // Adjust the opacity value (from 0 to 1)
          zIndex: -1, // Ensures the background stays behind other content
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
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  marginTop: 10,
                  marginRight: 3,
                }}
              ></Box>
              <Typography component="h1" variant="h5">
                My Profile
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  fullWidth
                  label="Username"
                  name="username"
                  variant="outlined"
                  defaultValue="JohnDoe"
                />
                <TextField
                  margin="normal"
                  fullWidth
                  label="Email Address"
                  name="email"
                  variant="outlined"
                  defaultValue="johndoe@example.com"
                />
                <TextField
                  margin="normal"
                  fullWidth
                  label="Country"
                  name="country"
                  variant="outlined"
                  defaultValue="United States"
                />
                <TextField
                  margin="normal"
                  fullWidth
                  label="City/Town"
                  name="cityTown"
                  variant="outlined"
                  defaultValue="New York"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Update
                </Button>
              </Box>
            </Box>
            <Box sx={{ mt: 8, mb: 4 }} />
          </Container>
        </ThemeProvider>
      </div>
    </div>
  );
}

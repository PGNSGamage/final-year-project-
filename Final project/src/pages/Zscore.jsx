import * as React from "react";
import { Link } from "react-router-dom";
import Input from "@mui/material/Input";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

import backgroundImage from "../assets/weeee.jpg";

export default function MultiActionAreaCard() {
  const [stream, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}

      {/* Main Content */}
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
      >
        <div
          style={{
            flex: 1,
            padding: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <div style={{ padding: "400px" }}>
            <Card
              sx={{
                boxShadow: 20,
                marginTop: 8,
                backgroundColor: "#F5F7F8",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <CardContent>
                <Typography
                  component="h1"
                  variant="h5"
                  style={{ marginBottom: "20px", fontWeight: "bold" }}
                >
                  Find a university
                </Typography>
                <Input
                  disabled={false}
                  placeholder="Z-Score"
                  size="large"
                  variant="standard"
                  style={{ width: "100%", marginBottom: "20px" }}
                />
                <FormControl
                  variant="filled"
                  sx={{ minWidth: 120, width: "100%" }}
                >
                  <InputLabel id="demo-simple-select-filled-label">
                    Stream
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={stream}
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Maths</MenuItem>
                    <MenuItem value={20}>Science</MenuItem>
                    <MenuItem value={30}>Commerce</MenuItem>
                    <MenuItem value={40}>Technology</MenuItem>
                    <MenuItem value={50}>Art</MenuItem>
                  </Select>
                </FormControl>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  component={Link}
                  to="/Unis"
                >
                  Search
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

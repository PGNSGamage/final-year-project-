import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Box from "@mui/material/Box";

export default function UniversityCard({ name, url }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Card
      sx={{
        border: "6px solid #e0e0e0",
        maxWidth: 700,
        display: "flex",
        justifyContent: "space-between", // Align items horizontally
        alignItems: "center", // Center items vertically
        "&:hover": {
          bgcolor: hovered ? "#D3D3D3" : "#",
        },
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Box flexGrow={1}>
        <CardHeader
          titleTypographyProps={{
            variant: "h6",
            style: { fontWeight: "bold" },
          }}
          title={name}
        />
      </Box>
      {/* <Link to={url}> */}
      <Link to="/UniversityInfo">
        <IconButton
          sx={{
            bgcolor: "#50727B",
            mr: "10px",
            color: "#FFFFFF",
            fontSize: 13,
            "&:hover": {
              bgcolor: "#2A487E",
            },
          }}
          size="small"
        >
          <ArrowForwardIcon />
        </IconButton>
      </Link>
    </Card>
  );
}

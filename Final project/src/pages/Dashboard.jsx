import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import image1 from "../assets/d.jpg";
import image2 from "../assets/b.jpg";
import image3 from "../assets/c.jpg";

export default function Dashboard() {
  const items = [
    {
      image: image1,
    },
    {
      image: image2,
    },
    {
      image: image3,
    },
  ];

  return (
    <div>
      <br></br>
      <br></br>
      <Carousel>
        {items.map((item, index) => (
          <Paper key={index}>
            <img
              style={{ width: "100%", height: "490px", marginTop: "30px" }}
              src={item.image}
              alt={"Image " + (index + 1)}
            />
          </Paper>
        ))}
      </Carousel>
    </div>
  );
}

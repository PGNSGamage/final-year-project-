import { Typography, Grid, Container, Box } from "@mui/material";
import React from "react";
import backgroundImage from "../assets/weeee.jpg";

export default function UniversityInfo() {
  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${backgroundImage})`,

          backgroundSize: "cover",
          opacity: 0.4, // Adjust the opacity value (from 0 to 1)
          zIndex: -10, // Ensures the background stays behind other content
        }}
      />
      <Container>
        <Grid container spacing={3}>
          <Grid sx={{ mt: "60px" }} item xs={12}>
            <Typography
              variant="h3"
              sx={{ fontSize: "50px", fontWeight: "bold" }}
            >
              University of Knowledge
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              The University of Knowledge (UoK) is a leading institution
              dedicated to fostering academic excellence, research innovation,
              and global citizenship. Founded in 1950, UoK has been at the
              forefront of shaping future leaders and advancing knowledge across
              various disciplines. With state-of-the-art facilities,
              distinguished faculty, and a vibrant campus community, UoK offers
              a dynamic learning environment that prepares students to thrive in
              a rapidly evolving world.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h5"
              sx={{ fontSize: "30px", fontWeight: "bold" }}
            >
              Courses Offered:
            </Typography>

            <ul style={{ fontSize: "30px" }}>
              <li>
                <Typography variant="body2">
                  Bachelor of Science in Computer Science
                </Typography>
                <Typography variant="body2">Duration: 4 years</Typography>
                <Typography variant="body2">
                  Description: This program equips students with a strong
                  foundation in computer science principles, programming
                  languages, and software development methodologies. Students
                  gain hands-on experience through projects and internships,
                  preparing them for careers in the tech industry.
                </Typography>
              </li>
              <li>
                <Typography variant="body2">
                  Bachelor of Arts in Economics
                </Typography>
                <Typography variant="body2">Duration: 3 years</Typography>
                <Typography variant="body2">
                  Description: The Bachelor of Arts in Economics program offers
                  students a comprehensive understanding of economic theory,
                  policy analysis, and quantitative methods. Through coursework
                  and research opportunities, students develop critical thinking
                  skills and analytical abilities applicable to various
                  industries and policy settings.
                </Typography>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { Box, Grid, Container, Pagination } from "@mui/material";
import UniversityCard from "../components/UniversityCard";
import backgroundImage from "../assets/weeee.jpg";

const sampleData = [
  { id: 1, name: "Harvard University" },
  { id: 2, name: "Massachusetts Institute of Technology (MIT)" },
  { id: 3, name: "Stanford University" },
  { id: 4, name: "California Institute of Technology (Caltech)" },
  { id: 5, name: "University of Oxford" },
  { id: 6, name: "University of Cambridge" },
  { id: 7, name: "ETH Zurich - Swiss Federal Institute of Technology" },
  { id: 3, name: "Stanford University" },
  { id: 3, name: "Stanford University" },
  { id: 3, name: "Stanford University" },
  { id: 5, name: "University of Oxford" },
  { id: 5, name: "University of Oxford" },
  // Add more universities as needed
];

export default function University() {
  const [universities, setUniversities] = useState([]);
  const [page, setPage] = useState(1);
  const universitiesPerPage = 10; // Number of universities to display per page

  useEffect(() => {
    // Fetch universities data here if needed
    // For now, setting sample data
    setUniversities(sampleData);
  }, []);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * universitiesPerPage;
  const endIndex = startIndex + universitiesPerPage;
  const displayedUniversities = universities.slice(startIndex, endIndex);

  return (
    <div style={{ paddingTop: "100px" }}>
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
          opacity: 0.7, // Adjust the opacity value (from 0 to 1)
          zIndex: -1, // Ensures the background stays behind other content
        }}
      />
      <Container>
        <br></br>
        <Grid container spacing={2}>
          {displayedUniversities.map((sitem) => (
            <Grid item key={sitem.id} xs={12} sm={6}>
              <Box marginTop={1}>
                {/* Pass name as a prop */}
                <UniversityCard
                  name={sitem.name}
                  //   url={`/university/${sitem.id}`}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box
          mt={2}
          display="flex"
          justifyContent="center"
          sx={{
            bgcolor: "#393E46",
            width: "400px",
            borderRadius: "20px",
            ml: "350px",
            mt: "20px",
            mb: "20px",
            "& .MuiPaginationItem-root": {
              color: "#fff", // Change pagination number color
            },
            "& .MuiPaginationItem-root:hover": {
              backgroundColor: "#4ECCA3", // Change pagination hover color
            },
          }}
        >
          <Pagination
            count={Math.ceil(universities.length / universitiesPerPage)}
            page={page}
            onChange={handleChangePage}
          />
        </Box>
      </Container>
    </div>
  );
}

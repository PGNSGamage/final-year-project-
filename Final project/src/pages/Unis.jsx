import React, { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import backgroundImage from "../assets/weeee.jpg";

const sampleData = [
  { id: 1, name: "Harvard University" },
  { id: 2, name: "Massachusetts Institute of Technology (MIT)" },
  { id: 3, name: "Stanford University" },
  { id: 4, name: "California Institute of Technology (Caltech)" },
  { id: 5, name: "University of Oxford" },
  { id: 6, name: "University of Cambridge" },
  { id: 7, name: "ETH Zurich - Swiss Federal Institute of Technology" },
  { id: 8, name: "Princeton University" },
  { id: 9, name: "University of California, Berkeley (UCB)" },
  { id: 10, name: "University of Chicago" },
  { id: 11, name: "Yale University" },
  // Add more universities as needed
];

// Sample university details data
const universityDetails = {
  1: "Harvard University details",
  2: "MIT details",
  3: "Stanford University details",
  4: "Caltech details",
  5: "University of Oxford details",
  6: "University of Cambridge details",
  7: "ETH Zurich details",
  8: "Princeton University details",
  9: "UC Berkeley details",
  10: "University of Chicago details",
  11: "Yale University details",
};

export default function AccordionUsage() {
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    // For now, setting sample data
    setUniversities(sampleData);
  }, []);

  return (
    <div
      style={{
        paddingTop: "100px",
        top: 100,
        height: "100vh",
        overflowY: "auto", // Enable vertical scrolling for the entire page
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        opacity: 0.7,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "10px",
        }}
      >
        {universities.map((university) => (
          <Accordion
            key={university.id}
            sx={{
              boxShadow: 20,
              marginTop: 8,
              backgroundColor: "#F5F7F8",
              padding: "20px",
              borderRadius: "10px",
              width: "50%",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{ color: "black", text: "Bold" }}
            >
              {university.name}
            </AccordionSummary>
            <AccordionDetails>
              {/* Display university details */}
              {universityDetails[university.id]}
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
}

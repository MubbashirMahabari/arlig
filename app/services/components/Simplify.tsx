import React from "react";
import Image from "next/image";
import { Box, Container, Grid, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Simplify() {
  const product_data = [
    {
      id: 1,
      title: "What makes Arlig different from other Salesforce partners?",
      desc: "We lead with empathy, not estimation. Our focus is clarity, value, and long-term success — not billable hours.",
    },
    {
      id: 2,
      title: "Do you work with existing Salesforce setups?",
      desc: "Deliver seamless customer support experiences.",
    },
    {
      id: 3,
      title: "How quickly can we start a project?",
      desc: "Empower employees, partners, and customers with portals.",
    },
    {
      id: 4,
      title: "What makes Arlig different from other Salesforce partners?",
      desc: "Turn data into actionable insights.",
    }
  ];

  return (
    <Box
      sx={{
        padding: "40px 0",
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ marginTop: "40px", padding: { xs: "0px", md: "0px 30px" } }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid size={{ xs: 12, sm: 4, md: 5 }}>
              <Box>
                <Typography
                  sx={{ fontSize: "40px", fontWeight: "700", color: "#2E2E2E" }}
                >
                  You Ask. We Simplify.
                </Typography>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, sm: 4, md: 7 }}>
              <Box
                sx={{
                  maxHeight: { xs: "none", md: 600 },
                  overflowY: "auto",
                  overflowX: "hidden",
                  pr: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  "&::-webkit-scrollbar": { display: "none" },
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                {product_data.map((item, idx) => (
                  <Accordion
                    key={item.id}
                    disableGutters
                    elevation={0}
                    sx={{
                      mb: 2,
                    //   borderRadius: "16px",
                      border: "1px solid #E3EAFD",
                       borderLeft: "2px solid #003366",
                      boxShadow: "0 2px 8px 0 rgba(59,175,218,0.05)",
                      "&:before": { display: "none" },
                      "&.Mui-expanded": {
                        boxShadow: "0 8px 24px 0 rgba(59,175,218,0.15)",
                      },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      sx={{
                        px: 3,
                        py: 2,
                        "& .MuiAccordionSummary-content": {
                          margin: 0,
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: 600,
                          fontSize: "16px",
                          color: "#1E293B",
                        }}
                      >
                        {item.title}
                      </Typography>
                    </AccordionSummary>

                    <AccordionDetails sx={{ px: 3, pb: 3 }}>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          color: "#64748B",
                          lineHeight: 1.6,
                        }}
                      >
                        {item.desc}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

import Image from "next/image";
import React from "react";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import icon_1 from "../../../../public/assets/icons/like-shapes.png";
import icon_2 from "../../../../public/assets/icons/magic-star.png";
import icon_3 from "../../../../public/assets/icons/microscope.png";

export default function Approach() {
  const approach_data = [
    {
      id: 1,
      img: icon_1,
      title: "Campaign Management Automation",
      desc: "We help media companies automate proposal-to-delivery workflows, reducing manual coordination between sales and finance teams.",
    },
    {
      id: 2,
      img: icon_2,
      title: "Centralized Client Intelligence",
      desc: "Salesforce connects sales, operations, and finance data, giving every stakeholder 360° visibility into client performance and history.",
    },
    {
      id: 3,
      img: icon_3,
      title: "Performance Dashboards",
      desc: "Tableau CRM visualizes campaign ROI, utilization, and revenue in real-time — empowering faster decision-making and optimization.",
    },
  ];
  return (
    <Box sx={{ padding: "40px 0", backgroundColor: "#3BAFDA0A" }}>
      <Container maxWidth="xl">
        <Box>
          <Typography
            sx={{ fontSize: "40px", fontWeight: "700", color: "#2E2E2E" }}
          >
            Our Salesforce-Powered Approach
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{ fontSize: "18px", fontWeight: "400", color: "#6B7280" }}
          >
            How Arlig tailors Salesforce to address these challenges with proven
            methodologies.
          </Typography>
        </Box>
        <Box sx={{ marginTop: "20px" }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {approach_data.map((item, index) => (
              <Grid key={item.id} size={{ xs: 12, sm: 4, md: 4 }}>
                <Box
                  sx={{
                    gap: 2,
                    p: 3,
                    borderRight: index < 2 ? "2px solid #e5e7eb" : "none",
                    height: "100%",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                >
                  <Box sx={{ mb: 5 }}>
                    <Image
                      src={item.img}
                      alt={String(item.title)}
                      width={48}
                      height={48}
                    />
                  </Box>

                  <Box>
                    <Typography sx={{ fontWeight: '500', color: "#1f2937", fontSize: '18px' }}>
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{ color: "#4b5563", mt: 0.5, opacity: "0.5" }}
                    >
                      {item.desc}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

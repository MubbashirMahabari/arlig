import Image from "next/image";
import React from "react";
import { Box, Container, Typography, Grid, Button } from "@mui/material";

export default function Challenges() {
  const challenges_data = [
    {
      id: 1,
      img: "/assets/icons/icon_1.png",
      title: "Disconnected Campaign Data",
      desc: "Media teams often work in silos using different tools, leading to fragmented visibility and data loss across campaigns and client touchpoints.",
    },
    {
      id: 2,
      img: "/assets/icons/icon_2.png",
      title: "Manual Approval Cycles",
      desc: "Campaign proposals and budgets often pass through multiple email threads, slowing execution timelines and reducing competitive advantage.",
    },
    {
      id: 3,
      img: "/assets/icons/icon_3.png",
      title: "Inconsistent Client Visibility",
      desc: "Sales, finance, and delivery teams lack a single source of truth — making renewals and performance tracking inefficient.",
    },
    {
      id: 4,
      img: "/assets/icons/icon_4.png",
      title: "Limited Performance Insights",
      desc: "Campaign ROI and client profitability analysis happens manually, preventing real-time optimization and strategic decision-making.",
    },
  ];
  return (
    <Box sx={{ backgroundColor: "#3BAFDA0A", paddingBottom: "40px" }}>
      <Container maxWidth="xl">
        <Box sx={{ paddingTop: "20px" }}>
          <Typography
            sx={{ fontSize: "40px", fontWeight: "700", color: "#2E2E2E" }}
          >
            Industry Challenges We Address
          </Typography>
        </Box>
        <Box sx={{ paddingTop: "20px" }}>
          <Typography
            sx={{ fontSize: "16px", fontWeight: "400", color: "#6B7280" }}
          >
            The key obstacles Media & Advertising companies face before
            Salesforce transformation.
          </Typography>
        </Box>
        <Box sx={{ marginTop: "30px" }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {challenges_data.map((item) => (
              <Grid key={item.id} size={{ xs: 12, sm: 4, md: 6 }}>
                <Box
                  sx={{
                    gap: 2,
                    p: 3,
                    border: "1px solid #e5e7eb",
                    borderRadius: "12px",
                    backgroundColor: "#fff",
                    height: "100%",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                    },
                  }}
                >
                  <Box sx={{ mb: 2 }}>
                    <Image
                      src={item.img}
                      alt={String(item.title)}
                      width={48}
                      height={48}
                    />
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: 700,
                        color: "#1f2937",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography sx={{ color: "#4b5563", marginTop: "20px" }}>
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

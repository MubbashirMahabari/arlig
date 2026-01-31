import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import businessStrategy from "../../../public/assets/about/business_strategy.jpg";
import icon_1 from "../../../public/assets/expertise/social-network.png";
import icon_2 from "../../../public/assets/expertise/implementation.png";

export default function VisionMission() {
  const vision_mission = [
    {
      id: 1,
      img: icon_1,
      title: "Our Vision",
      desc: "To empower global businesses through Salesforce — connecting technology, people, and purpose.",
    },
    {
      id: 2,
      img: icon_2,
      title: "Our Mission",
      desc: "To simplify CRM and digital transformation through value-driven consulting, scalable solutions, and measurable business impact.",
    },
  ];
  return (
    <Box sx={{ backgroundColor: "#3BAFDA0A", padding: "40px 0" }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            textAlign: "center",
            padding: "10px 15px",
            backgroundColor: "#E0E0E0",
            borderRadius: "30px",
            border: "#E8E8E8 solid 1px",
            display: "inline-block",
          }}
        >
          <Typography sx={{ fontSize: "14px" }}>About</Typography>
        </Box>
        <Box sx={{ marginTop: "20px" }}>
          <Typography sx={{ fontSize: "40px", fontWeight: "700" }}>
            Our Vision & Mission
          </Typography>
        </Box>
        <Box sx={{marginTop: "40px" }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid size={{ xs: 12, sm: 4, md: 6 }}>
              <Box sx={{ width: "100%", height: "100%" }}>
                <Image
                  src={businessStrategy}
                  alt="business-strategy"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "20px",
                  }}
                />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 4, md: 6 }}>
              {vision_mission.map((item) => (
                <Box
                  key={item.id}
                  sx={{
                    gap: 2,
                    border: "1px solid #e5e7eb",
                    padding: "20px",
                    marginBottom: "20px",
                    borderRadius: "12px",
                    backgroundColor: "#fff",
                  }}
                >
                  <Box sx={{ mb: 4 }}>
                    <Image
                      src={item.img}
                      alt={String(item.title)}
                      width={48}
                      height={48}
                    />
                  </Box>

                  <Box>
                    <Typography sx={{ fontWeight: 700, color: "#1f2937" }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{ color: "#4b5563", marginTop: "20px" }}>
                      {item.desc}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

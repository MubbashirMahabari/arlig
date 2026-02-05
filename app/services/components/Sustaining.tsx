import React from "react";
import Image from "next/image";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import icon_1 from "../../../public/assets/icons/like-shapes.png";
import icon_2 from "../../../public/assets/icons/magic-star.png";
import icon_3 from "../../../public/assets/icons/microscope.png";



export default function Sustaining() {
  const sustain_data = [
    {
      id: 1,
      img: icon_1,
      title: "Admin & Support",
      desc: "Routine tasks, monitoring, and data maintenance.",
    },
    {
      id: 2,
      img: icon_2,
      title: "Enhancements",
      desc: "Automations, dashboard updates, and new features.",
    },
    {
      id: 3,
      img: icon_3,
      title: "Advisory",
      desc: "Reviews, optimization, and long-term Salesforce strategy.",
    },
  ];
  return (
    <Box
      sx={{
        backgroundColor: "#3BAFDA0A",
        padding: "40px 0",
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ paddingTop: "20px" }}>
          <Typography
            sx={{
              fontSize: "40px",
              fontWeight: "700",
              color: "#2E2E2E",
              textAlign: "center",
            }}
          >
            Managed Services - Sustaining
          </Typography>
          <Typography
            sx={{
              fontSize: "40px",
              fontWeight: "700",
              color: "#2E2E2E",
              textAlign: "center",
            }}
          >
            Salesforce Success
          </Typography>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            width: { xs: "100%", sm: "100%", md: "1000px" },
            margin: "0 auto",
            marginTop: "16px",
          }}
        >
          <Typography sx={{ color: "#6B7280", fontSize: "16px" }}>
            Your Salesforce journey doesn't end with go-live — it evolves. Our
            managed services keep your CRM optimized, secure, and scalable.
          </Typography>
        </Box>
        <Box sx={{ marginTop: "40px", padding: { xs: "0px", md: "0px 30px" } }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {sustain_data.map((item) => (
              <Grid key={item.id} size={{ xs: 12, sm: 4, md: 4 }}>
                <Box
                  sx={{
                    gap: 2,
                    p: 3,
                    border: "1px solid #0B1F33",
                    borderRadius: "12px",
                    backgroundColor: "#0B1F33",
                    height: "100%",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                    },
                  }}
                >
                  <Box sx={{ mb: 3 }}>
                    <Image
                      src={item.img}
                      alt={String(item.title)}
                      width={48}
                      height={48}
                      style={{ backgroundColor: "#fff", borderRadius: "30px", padding: "5px" }}
                    />
                  </Box>

                  <Box>
                    <Typography sx={{ fontWeight: 700, color: "#fff" }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{ color: "#fff", marginTop: "20px" }}>
                      {item.desc}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            width: { xs: "100%", sm: "100%", md: "1000px" },
            margin: "0 auto",
            marginTop: "16px",
          }}
        >
          <Typography sx={{ color: "#6B7280", fontSize: "16px" }}>
            A future-ready Salesforce org that continues to deliver clarity and
            growth.
          </Typography>
          <Typography sx={{ color: "#6B7280", fontSize: "16px" }}>
            From go-live to growth.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

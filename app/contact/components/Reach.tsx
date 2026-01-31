import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import icon_1 from "../../../public/assets/expertise/social-network.png";
import icon_2 from "../../../public/assets/expertise/implementation.png";
import icon_3 from "../../../public/assets/expertise/collaborate.png";
import Image from "next/image";

export default function Reach() {
  const contact_data = [
    {
      id: 1,
      img: icon_1,
      title: "Email Us",
      desc: "contact@arligtechnologies.com",
    },
    {
      id: 2,
      img: icon_2,
      title: "Visit Our Office",
      desc: "Sharjah Research, Technology & Innovation Park, UAE",
    },
    {
      id: 3,
      img: icon_3,
      title: "Call or WhatsApp",
      desc: "+971 507589158 (UAE Office)",
    },
  ];
  return (
    <Box sx={{ padding: "40px 0" }}>
      <Container maxWidth="xl">
        <Box>
          <Typography
            sx={{ fontSize: "40px", fontWeight: "700", color: "#2E2E2E" }}
          >
            How You Can Reach Us
          </Typography>
        </Box>

        <Box sx={{ marginTop: "20px" }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {contact_data.map((item, index) => (
              <Grid key={item.id} size={{ xs: 12, sm: 4, md: 4 }}>
                <Box
                  sx={{
                    gap: 2,
                    p: 3,
                    borderRight: index < 2 ? "2px solid #e5e7eb" : "none",
                    backgroundColor: "#fff",
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
                    <Typography sx={{ fontWeight: 600, color: "#1f2937" }}>
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

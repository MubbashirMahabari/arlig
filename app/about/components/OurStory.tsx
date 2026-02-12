import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

export default function OurStory() {
  const arligStory = `We didn't start Arlig Technologies because we wanted to build another consulting company. We started it because we were tired of seeing what consulting had become.

Before Arlig, we worked inside firms that had mastered the art of selling — but forgotten the essence of service. Projects were pitched with confidence, billed heavily, and delivered with shortcuts that left clients disappointed and developers frustrated. The focus had shifted from creating value to counting billable hours.

That didn't sit right with us.

So, two technologists — Sayyid Abrar and Javed Akkalkot — decided to do things differently. No business playbook. No investors. Just a shared belief that consulting should be honest, intelligent, and empathetic.

One late night, while working on a proof of concept for a client, we realized we didn't need to wait for a better ecosystem — we could build one. That moment became Arlig Technologies.

From our first project to our latest Salesforce implementation, our purpose has stayed the same: to simplify complexity, deliver with integrity, and make technology work for people — not the other way around.`;

  const arlig_data = [
    {
      id: 1,
      count: "5000+",
      desc: "Total Members",
    },
    {
      id: 2,
      count: "41+",
      desc: "Nationalities",
    },
    {
      id: 3,
      count: "95%",
      desc: "Presence in 15+ States in India",
    },
    {
      id: 4,
      count: "210255",
      desc: "Community Members",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#3BAFDA0A", padding: "40px 0" }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            textAlign: "center",
            padding: "10px 15px",
            backgroundColor: "#fff",
            borderRadius: "30px",
            border: "#E8E8E8 solid 1px",
            display: "inline-block",
          }}
        >
          <Typography sx={{ fontSize: "14px" }}>Our Story</Typography>
        </Box>
        <Box sx={{ marginTop: "20px" }}>
          <Typography sx={{ fontSize: "40px", fontWeight: "700" }}>
            The Why Behind Arlig
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              marginTop: "20px",
              fontSize: "16px",
              lineHeight: "28px",
              color: "#374151",
              whiteSpace: "pre-line",
            }}
          >
            {arligStory}
          </Typography>
        </Box>
        <Box sx={{ marginTop: "40px" }}>
          <Typography sx={{ fontSize: "24px", fontWeight: "600" }}>
            “ We believe consulting should be built on value, not billable hours
            ”
          </Typography>
        </Box>
        <Box
          sx={{
            marginTop: "40px",
            borderTop: "1px solid #6B7280",
            borderBottom: "1px solid #6B7280",
            padding: "30px",
          }}
        >
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            sx={{ margin: { xs: "0 auto", md: "0px" } }}
          >
            {arlig_data.map((item) => (
              <Grid key={item.id} size={{ xs: 12, sm: 12, md: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: { xs: "center", md: "flex-start" },
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "40px",
                        fontWeight: "500",
                        color: "#2E2E2E",
                      }}
                    >
                      {item.count}
                    </Typography>
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: "#2E2E2E",
                        mt: "10px",
                        fontWeight: "400",
                      }}
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

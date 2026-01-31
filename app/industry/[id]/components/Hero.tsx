import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import { it } from "node:test";
import Link from "next/link";
import industryDetailImage from "../../../../public/assets/services/service_hero.jpg";
type Industry = {
  img: string;
  title: string;
  desc: string;
};

type HeroProps = {
  industry: Industry;
};

export default function Hero({ industry }: HeroProps) {
  return (
    <Box sx={{ backgroundColor: "#3BAFDA0A", padding: "40px 0" }}>
      <Container maxWidth="xl">
        <Box sx={{ height: "50%" }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid size={{ xs: 12, sm: 4, md: 7 }}>
              <Box>
                {/* large text */}
                <Box>
                  <Typography
                    sx={{
                      fontSize: { xs: "40px", md: "65px" },
                      fontWeight: 700,
                      lineHeight: 1.1,
                      color: "#2E2E2E",
                    }}
                  >
                    Salesforce Solutions
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "40px", md: "65px" },
                      fontWeight: 700,
                      lineHeight: 1.1,
                      color: "#2E2E2E",
                    }}
                  >
                    for{" "}
                    <span style={{ color: "#1F4ED8" }}>{industry.title}</span>
                  </Typography>

                  <Typography
                    sx={{
                      marginTop: "20px",
                      fontSize: "16px",
                      color: "#6B7280",
                    }}
                  >
                    Empowering media firms with unified campaign visibility and
                    faster client engagement.
                  </Typography>
                </Box>
                {/* Buttons */}
                <Box
                  sx={{
                    backgroundColor: "#0B1F33",
                    padding: "5px",
                    borderRadius: "50px",
                    marginTop: "15px",
                    textAlign: "center",
                    alignContent: "center",
                    width: { xs: "100%", sm: "50%", md: "300px" },
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  <Button
                    sx={{
                      textTransform: "none",
                      color: "white",
                      textAlign: "center",
                      width: "100%",
                      alignContent: "center",
                    }}
                  >
                    <Link href="/" style={{ textDecoration: "none" }}>
                      <Typography sx={{ fontWeight: "400", color: "#fff" }}>
                        Talk to an Expert
                      </Typography>
                    </Link>
                  </Button>
                </Box>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, sm: 4, md: 5 }}>
              <Box
                sx={{
                  marginTop: "40px",
                  position: "relative",
                  width: "100%",
                  height: { xs: "220px", sm: "320px", md: "426px" }, // responsive height
                  borderRadius: "20px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={industryDetailImage}
                  alt={industry.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 100vw, 1200px"
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

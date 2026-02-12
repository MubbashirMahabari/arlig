'use client';
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import heroImage from "../../../public/assets/about/about_hero_image.jpg";
import Link from "next/link";
import { useStrategyModal } from "../../context/StrategyModalContext";
export default function Hero() {
  const { openModal } = useStrategyModal();
  return (
    <Box
      className="hero-section"
      sx={{ backgroundColor: "#3BAFDA0A", padding: { xs: "40px 0px", md: "40px 20px" } }}
    >
      <Container maxWidth="xl">
        <Box sx={{ height: "50%" }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid size={{ xs: 12, sm: 4, md: 6 }}>
              <Box>
                {/* large text */}
                <Box>
                  <Typography
                    component="h1"
                    sx={{
                      fontSize: { xs: "40px", md: "65px" },
                      fontWeight: 700,
                      lineHeight: 1.1,
                      color: "#2E2E2E",
                    }}
                  >
                    The <Box component="span" sx={{
                      fontSize: { xs: "40px", md: "65px" },
                      fontWeight: 700,
                      lineHeight: 1.1,
                      color: "#1F4ED8",
                    }}>People Behind</Box>
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "40px", md: "65px" },
                      fontWeight: 700,
                      lineHeight: 1.1,
                      color: "#2E2E2E",
                    }}
                  >
                    Arlig Technologies
                  </Typography>
                  <Typography
                    sx={{
                      marginTop: "20px",
                      fontSize: "16px",
                      color: "#6B7280",
                    }}
                  >
                    We're a Salesforce Partner built by technologists who
                    believed consulting could be more honest, intelligent, and
                    human.
                  </Typography>
                </Box>
                {/* Buttons */}
                <Box
                  sx={{
                    display: { xs: "block", md: "flex" },
                    marginTop: "30px",
                  }}
                >
                  <Box
                    sx={{
                      flexGrow: 0,
                      borderRadius: "50px",
                      backgroundColor: "#003366",
                      textAlign: "center",
                      padding: "10px 18px",
                    }}
                  >

                    <Button
                      onClick={openModal}
                      sx={{
                        p: 0,
                        color: "white",
                        textTransform: "none",
                        fontWeight: "500",
                      }}
                    >
                      Let's collaborate
                    </Button>

                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, sm: 4, md: 6 }}>
              <Box sx={{ width: "100%", height: "90%" }}>
                <Image
                  src={heroImage}
                  alt="The People Behind Arlig Technologies"
                  priority
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "20px",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

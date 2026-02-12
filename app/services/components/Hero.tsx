'use client';
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import heroImage from "../../../public/assets/services/service_hero.jpg";
import Link from "next/link";
import { useStrategyModal } from "../../context/StrategyModalContext";
export default function Hero() {
  const { openModal } = useStrategyModal();
  return (
    <Box sx={{ backgroundColor: "#3BAFDA0A", padding: { xs: "40px 0px", md: "40px 20px" } }}>
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
                    component="h1"
                    sx={{
                      fontSize: { xs: "40px", md: "62px" },
                      fontWeight: 700,
                      lineHeight: 1.1,
                      color: "#2E2E2E",
                      marginBottom: "10px",
                    }}
                  >
                    Transform Your Business
                    <span style={{ color: "#1F4ED8", display: "block" }}>
                      with Salesforce
                    </span>

                  </Typography>
                  <Typography
                    component="p"
                    sx={{
                      fontSize: { xs: "40px", md: "65px" },
                      fontWeight: 700,
                      lineHeight: 1.1,
                      color: "#2E2E2E",
                      marginBottom: "10px",
                    }}
                  >
                    From Strategy to Success
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
                    human. Built on trust. Powered by Salesforce. Delivered with
                    integrity.
                  </Typography>
                </Box>
                {/* Buttons */}
                <Box
                  sx={{
                    display: { xs: "block", md: "flex" },
                    justifyContent: "start",
                    marginTop: "30px",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#003366",
                      padding: "2px",
                      borderRadius: "50px",
                      border: "#003366 3px solid",
                      marginRight: { xs: "0px", md: "15px" },
                      marginBottom: { xs: "15px", md: "0px" },
                      textAlign: "center",
                      alignContent: "center",
                      width: "100%",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                      },
                    }}
                  >
                    
                      <Button
                       onClick={openModal}
                        sx={{
                          textTransform: "none",
                          color: "white",
                          textAlign: "center",
                          width: "100%",
                          alignContent: "center",
                        }}
                      >
                        <Typography>Talk to a Salesforce Expert</Typography>
                      </Button>
                   
                  </Box>

                  <Box
                    sx={{
                      backgroundColor: "white",
                      padding: "2px",
                      borderRadius: "50px",
                      border: "#1F4ED8 2px solid",
                      textAlign: "center",
                      width: "100%",
                      alignContent: "center",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: "0 10px 30px rgba(31, 78, 216, 0.2)",
                      },
                    }}
                  >
                    <Link href="/blog" style={{ textDecoration: "none" }} >
                      <Button
                        sx={{
                          textTransform: "none",
                          color: "#1F4ED8",
                          textAlign: "center",
                          width: "100%",
                          alignContent: "center",
                        }}
                      >
                        <Typography sx={{ fontWeight: "500" }}>
                          Explore Case Studies
                        </Typography>
                      </Button>
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, sm: 4, md: 5 }}>
              <Box sx={{ width: "100%", height: "100%" }}>
                <Image
                  src={heroImage}
                  alt="Arlig Salesforce Services and Solutions"
                  priority
                  style={{ width: "100%", height: "100%", borderRadius: "20px" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

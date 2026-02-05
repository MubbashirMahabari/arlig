import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import heroImage from "../../../public/assets/home-hero.png";
import Link from "next/link";

export default function Hero() {
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
            <Grid size={{ xs: 12, sm: 4, md: 7 }}>
              <Box>
                {/* large text */}
                <Box>
                  <Typography
                    component="h1"
                    sx={{
                      fontSize: { xs: "40px", md: "65px" },
                      fontWeight: 700,
                      lineHeight: 1.2,
                      color: "#2E2E2E",
                    }}
                  >
                    Transform Your Business With{" "}
                    <Box component="span" sx={{ color: "#1F4ED8", display: "block" }}>
                      Salesforce Expertise.
                    </Box>
                  </Typography>
                  <Typography
                    sx={{
                      marginTop: "20px",
                      fontSize: "16px",
                      color: "#6B7280",
                    }}
                  >
                    From Sales to HRMS to Industry Solutions - Arlig
                    Technologies helps growing businesses in UAE, KSA, and India
                    achieve more with Salesforce.
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
                      backgroundColor: "#0B1F33",
                      padding: "2px",
                      borderRadius: "50px",
                      border: "#0B1F33 3px solid",
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
                    <Link href="/contact" style={{ textDecoration: "none" }}>
                      <Button
                        sx={{
                          textTransform: "none",
                          color: "white",
                          textAlign: "center",
                          width: "100%",
                          alignContent: "center",
                        }}
                      >
                        <Typography>Schedule a Free Strategy Call</Typography>
                      </Button>
                    </Link>
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
                    <Link href="/services" style={{ textDecoration: "none" }} >
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
                          Explore Our Solutions
                        </Typography>
                      </Button>
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, sm: 4, md: 5 }}>
              <Box sx={{ width: "100%", height: "90%" }}>
                <Image
                  src={heroImage}
                  alt="Arlig Salesforce Expertise and Business Transformation"
                  priority
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

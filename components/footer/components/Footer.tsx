'use client';
import React from "react";
import Image from "next/image";
import { Box, Container, Typography, Grid, Button, Link } from "@mui/material";
import logo from "../../../public/assets/arlig_footer_logo.png";
import { useStrategyModal } from "../../../app/context/StrategyModalContext";
export default function Footer() {
   const { openModal } = useStrategyModal();

  return (
    <Box
      sx={{
        padding: { xs: "20px", md: "40px" },

        backgroundColor: "#0B1F33",
        borderRadius: "30px 30px 0px 0px",
      }}
    >
      <Box
        sx={{
          display: { xs: "block", md: "flex" },
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "40px",
              fontWeight: "700",
              color: "#FFFFFF",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Let's Build Together
          </Typography>
          <Typography
            sx={{
              marginTop: "10px",
              fontSize: "16px",
              fontWeight: "400",
              color: "#FFFFFF",
            }}
          >
            Ready to simplify your Salesforce journey?
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "white",
            marginTop: "20px",
            padding: "5px 20px",
            borderRadius: "50px",
            border: "#1F4ED8 2px solid",
            textAlign: "center",
            alignContent: "center",
            transition: "all 0.3s ease",
            cursor: "pointer",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0 10px 30px rgba(31, 78, 216, 0.2)",
            },
          }}
        >
          <Button
          onClick={openModal}
            sx={{
              textTransform: "none",
              color: "#fff",
              textAlign: "center",
              width: "100%",
              alignContent: "center",
            }}
          >

            <Typography sx={{ fontWeight: "600", color: "#003366" }}>
              Let's Talk
            </Typography>

          </Button>
        </Box>
      </Box>

      <Box
        sx={{ marginTop: "30px", height: "1px", color: "#fff", opacity: 0.2 }}
      >
        <hr />
      </Box>

      <Box sx={{ marginTop: "30px" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid size={{ xs: 12, sm: 4, md: 5 }}>
            <Box sx={{}}>
              <Link href="/">
                <Image
                  src={logo}
                  alt="logo"
                  style={{ width: "80px", height: "40px" }}
                />
              </Link>
              <Typography
                sx={{
                  marginTop: "10px",
                  color: "#ffffff",
                  fontSize: "14px",
                  opacity: "0.6",
                  fontWeight: "400",
                }}
              >
                Salesforce consulting built on honesty, intelligence, and
                empathy.
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 4, md: 7 }}>
            <Box>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                <Grid size={{ xs: 12, sm: 4, md: 4 }}>
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: "500",
                        color: "#FFFFFF",
                        fontSize: "20px",
                      }}
                    >
                      Services
                    </Typography>

                    <Link href="/" style={{ textDecoration: "none" }}>
                      <Typography
                        sx={{
                          marginTop: "10px",
                          fontWeight: "400",
                          color: "#FFFFFF",
                          fontSize: "14px",
                          opacity: "0.6",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            opacity: "1",
                          },
                        }}
                      >
                        Salesforce Implementation
                      </Typography>
                    </Link>
                    <Link href="/" style={{ textDecoration: "none" }}>
                      <Typography
                        sx={{
                          marginTop: "10px",
                          fontWeight: "400",
                          color: "#FFFFFF",
                          fontSize: "14px",
                          opacity: "0.6",
                          "&:hover": {
                            opacity: "1",
                          },
                        }}
                      >
                        CRM Consulting
                      </Typography>
                    </Link>

                    <Link href="/" style={{ textDecoration: "none" }}>
                      <Typography
                        sx={{
                          marginTop: "10px",
                          fontWeight: "400",
                          color: "#FFFFFF",
                          fontSize: "14px",
                          opacity: "0.6",
                          "&:hover": {
                            opacity: "1",
                          },
                        }}
                      >
                        Digital Transformation
                      </Typography>
                    </Link>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, sm: 4, md: 4 }}>
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: "500",
                        color: "#FFFFFF",
                        fontSize: "20px",
                      }}
                    >
                      Company
                    </Typography>

                    <Link href="/about" style={{ textDecoration: "none" }}>
                      <Typography
                        sx={{
                          marginTop: "10px",
                          fontWeight: "400",
                          color: "#FFFFFF",
                          fontSize: "14px",
                          opacity: "0.6",
                          "&:hover": {
                            opacity: "1",
                          },
                        }}
                      >
                        About Us
                      </Typography>
                    </Link>
                    <Link href="/" style={{ textDecoration: "none" }}>
                      <Typography
                        sx={{
                          marginTop: "10px",
                          fontWeight: "400",
                          color: "#FFFFFF",
                          fontSize: "14px",
                          opacity: "0.6",
                          "&:hover": {
                            opacity: "1",
                          },
                        }}
                      >
                        Case Studies
                      </Typography>
                    </Link>

                    <Link href="/career" style={{ textDecoration: "none" }}>
                      <Typography
                        sx={{
                          marginTop: "10px",
                          fontWeight: "400",
                          color: "#FFFFFF",
                          fontSize: "14px",
                          opacity: "0.6",
                          "&:hover": {
                            opacity: "1",
                          },
                        }}
                      >
                        Careers
                      </Typography>
                    </Link>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, sm: 4, md: 4 }}>
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: "500",
                        color: "#FFFFFF",
                        fontSize: "20px",
                      }}
                    >
                      Contact
                    </Typography>

                    <Typography
                      sx={{
                        marginTop: "10px",
                        fontWeight: "400",
                        color: "#FFFFFF",
                        fontSize: "14px",
                        opacity: "0.6",
                      }}
                    >
                      +91 7738443636
                    </Typography>

                    <Typography
                      sx={{
                        marginTop: "10px",
                        fontWeight: "400",
                        color: "#FFFFFF",
                        fontSize: "14px",
                        opacity: "0.6",
                      }}
                    >
                      info@arligtechnologies.com
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{ marginTop: "40px", height: "1px", color: "#fff", opacity: 0.2 }}
      >
        <hr />
      </Box>
      <Box
        sx={{
          marginTop: "20px",
          display: { xs: "block", md: "flex" },
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            marginTop: "10px",
            color: "#ffffff",
            fontSize: "14px",
            opacity: "0.6",
            fontWeight: "400",
          }}
        >
          © 2025 Arlig Technologies. All rights reserved.
        </Typography>

        <Link href="/" sx={{ textDecoration: "none", color: "#fff" }}>
          <Typography
            sx={{
              marginTop: "10px",
              color: "#ffffff",
              fontSize: "14px",
              opacity: "0.6",
              fontWeight: "400",
              "&:hover": {
                opacity: "1",
              },
            }}
          >
            User Terms & Conditions | Privacy Policy
          </Typography>
        </Link>
      </Box>
    </Box>
  );
}

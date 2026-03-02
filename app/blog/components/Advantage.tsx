'use client';
import React from "react";
import Image from "next/image";
import { Box, Container, Typography, Grid, Button, Link } from "@mui/material";
import connectBg from "../../../public/assets/connect_bg.jpg";
import { useStrategyModal } from "../../context/StrategyModalContext";
export default function Advantage() {
  const { openModal } = useStrategyModal();
  return (
    <Box
      sx={{
        marginTop: "30px",
        paddingBottom: "40px",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            backgroundImage: `url(${connectBg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "30px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "40px 20px",
          }}
        >
          <Box sx={{ paddingTop: "0px" }}>
            <Typography
              sx={{
                fontSize: "40px",
                fontWeight: "700",
                color: "#fff",
                textAlign: "center",
              }}
            >
              Let's Build Your Salesforce
            </Typography>
            <Typography
              sx={{
                fontSize: "40px",
                fontWeight: "700",
                color: "#fff",
                textAlign: "center",
              }}
            >
              Advantage
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                color: "#fff",
                fontSize: "18px",
                marginTop: "10px",
                textAlign: "center",
              }}
            >
              Ready to transform your business with Salesforce? Our team of
              certified experts is here to guide your journey from strategy to
              implementation.
            </Typography>
          </Box>

          <Box
            sx={{
              display: { xs: "block", md: "flex" },
              marginTop: "30px",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#fff",
                padding: "2px 15px",
                borderRadius: "50px",
                marginRight: { xs: "0px", md: "15px" },
                marginBottom: { xs: "15px", md: "0px" },
                textAlign: "center",
                alignContent: "center",
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
                  color: "#003366",
                  textAlign: "center",
                  width: "100%",
                  alignContent: "center",
                }}
              >

                <Typography sx={{ fontWeight: "600" }}>
                  Schedule Consultation
                </Typography>

              </Button>
            </Box>

            <Box
              sx={{
                backgroundColor: "transparent",
                padding: "2px 15px",

                borderRadius: "50px",
                border: "#fff 2px solid",
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
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  textAlign: "center",
                  width: "100%",
                  alignContent: "center",
                }}
              >
                <Link href="/services" sx={{ textDecoration: "none" }}>
                  <Typography sx={{ fontWeight: "400", color: "#fff" }}>
                    View Services
                  </Typography>
                </Link>
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

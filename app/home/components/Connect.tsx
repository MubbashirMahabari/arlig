'use client';
import React from "react";
import Image from "next/image";
import { Box, Container, Typography, Grid, Button, Link } from "@mui/material";
import connectBg from "../../../public/assets/connect_bg.png";
import { useStrategyModal } from "../../context/StrategyModalContext";
export default function Connect() {
   const { openModal } = useStrategyModal();
  return (
    <Box
      sx={{
        marginTop: "50px",
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
            padding: "40px 0px",
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
              Ready to Simplify Your
            </Typography>
            <Typography
              sx={{
                fontSize: "40px",
                fontWeight: "700",
                color: "#fff",
                textAlign: "center",
              }}
            >
              Salesforce Journey?
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
              Let’s bring your Sales, Post-Sales, and HR together on one
              reliable platform.
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
      </Container>
    </Box>
  );
}

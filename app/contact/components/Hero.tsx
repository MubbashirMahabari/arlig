import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";

export default function Hero() {
  return (
    <Box sx={{ backgroundColor: "#3BAFDA0A", padding: "40px 0" }}>
      <Container maxWidth="xl">
        <Box>
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: "30px", md: "65px" },
              fontWeight: 500,
              // lineHeight: 1.1,
              color: "#2E2E2E",
            }}
          >
            Let's Build Your{" "}
            <span style={{ color: "#1F4ED8" }}>Salesforce Advantage</span>
          </Typography>
          <Typography
            sx={{
              marginTop: "20px",
              fontSize: "16px",
              color: "#6B7280",
            }}
          >
            Whether you're exploring Salesforce or scaling an implementation,
            our team is ready to help.
          </Typography>
        </Box>

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
                Explore Start the Conversation
              </Typography>
            </Link>
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

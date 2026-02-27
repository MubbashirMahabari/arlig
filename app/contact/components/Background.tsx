import React from "react";
import Image from "next/image";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  TextField,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

export default function Background() {
  return (
    <Box sx={{ paddingBottom: "40px", backgroundColor: "#EBF3F9" }}>
      <Container maxWidth="xl">
        <Box sx={{ paddingTop: "20px" }}>
          <Typography
            sx={{
              fontSize: "40px",
              fontWeight: "700",
              color: "#2E2E2E",
              textAlign: "center",
            }}
          >
            For Employment or Background Verifications
          </Typography>
        </Box>
        <Box
          sx={{
            display: { xs: "block", md: "flex" },
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: { xs: "0px", md: "50px" },
              marginBottom: { xs: "20px", md: "0px" },
            }}
          >
            <EmailIcon sx={{ marginRight: "10px", color: "#2E2E2E" }} />
            <Typography sx={{ color: "#6B7280", fontSize: "16px" }}>
              info@arligtechnologies.com
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <LocalPhoneIcon sx={{ marginRight: "10px", color: "#2E2E2E" }} />
            <Typography sx={{ color: "#6B7280", fontSize: "16px" }}>
              +91 9480251667 (HR Department)
            </Typography>
          </Box>
        </Box>
        <Box sx={{ marginTop: "20px" }}>
          <Typography
            sx={{
              color: "#6B7280",
              fontSize: "16px",
              marginTop: "10px",
              textAlign: "center",
            }}
          >
            Verification requests are typically processed within 3–5 business
            days.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

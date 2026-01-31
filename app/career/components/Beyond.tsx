"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import { useTheme, useMediaQuery } from "@mui/material";

export default function Beyond() {
  const steps = [
    {
      title: "Continuous Learning",
      desc: "Through Salesforce certifications and real-world projects.",
      icon: <DonutSmallIcon />,
    },
    {
      title: "Expert Mentorship",
      desc: "From senior architects and solution leaders.",
      icon: <DragIndicatorIcon />,
    },
    {
      title: "Global Collaboration",
      desc: "Cross-geography collaboration with global clients.",
      icon: <ThumbUpIcon />,
    },
    {
      title: "Space to Innovate",
      desc: "Ideas matter, not hierarchy.",
      icon: <SettingsSuggestIcon />,
    },
  ];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box sx={{ backgroundColor: "#3BAFDA0A", padding: "40px 0" }}>
      <Container maxWidth="xl">
        <Box>
          <Typography
            sx={{
              fontSize: "40px",
              fontWeight: "700",
              color: "#2E2E2E",
              textAlign: "center",
            }}
          >
            Beyond Job Titles
          </Typography>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            width: { xs: "100%", sm: "100%", md: "1000px" },
            margin: "0 auto",
            marginTop: "16px",
          }}
        >
          <Typography sx={{ color: "#6B7280", fontSize: "16px" }}>
            We look for people who think like problem solvers — not just coders,
            admins, or consultants. At Arlig, you'll work closely with experts
            who build Salesforce-driven transformations for real businesses,
            across industries. What we value most: curiosity, integrity, and the
            drive to deliver impact.
          </Typography>
        </Box>
        <Box sx={{ backgroundColor: "#EBF3F9", padding:"40px 0px", marginTop:"40px" }}>
          <Box sx={{ position: "relative" }}>
            {/* Connector */}
            <Box
              sx={{
                position: "absolute",
                backgroundColor: "#2E2E2E",
                zIndex: 0,

                ...(isMobile
                  ? {
                      top: 0,
                      bottom: 0,
                      left: 18,
                      width: "2px", // vertical line
                    }
                  : {
                      top: 22,
                      left: "16%",
                      right: "16%",
                      height: "2px", // horizontal line
                    }),
              }}
            />

            <Box
              sx={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                justifyContent: "space-between",
                gap: isMobile ? 4 : 0,
              }}
            >
              {steps.map((step, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: isMobile ? "flex-start" : "center",
                    flexDirection: isMobile ? "row" : "column",
                    textAlign: isMobile ? "left" : "center",
                    width: isMobile ? "100%" : "25%",
                    zIndex: 1,
                  }}
                >
                  {/* Icon */}
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      backgroundColor: "#fff",
                      border: "2px solid #2E2E2E",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mr: isMobile ? 2 : 0,
                      mb: isMobile ? 0 : 1,
                    }}
                  >
                    {step.icon}
                  </Box>

                  {/* Text */}
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 700,
                        fontSize: "14px",
                        color: "#2E2E2E",
                      }}
                    >
                      {step.title}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "13px",
                        color: "#6B7280",
                        mt: 0.5,
                        maxWidth: isMobile ? "100%" : 200,
                      }}
                    >
                      {step.desc}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

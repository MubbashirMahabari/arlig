"use client";
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import { useTheme, useMediaQuery } from "@mui/material";

export default function Implementation() {
  const steps = [
    {
      title: "Discover",
      desc: "Define business objectives and technical needs.",
      icon: <DonutSmallIcon />,
    },
    {
      title: "Design",
      desc: "Architect scalable, user-centric Salesforce solutions.",
      icon: <DragIndicatorIcon />,
    },
    {
      title: "Deploy",
      desc: "Implement, test, and deliver with precision.",
      icon: <ThumbUpIcon />,
    },
    {
      title: "Adopt",
      desc: "Enable users and measure ROI.",
      icon: <SettingsSuggestIcon />,
    },
  ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ padding: "40px 0", backgroundColor: "#EBF3F9" }}>
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
            Salesforce Implementation
          </Typography>
          <Typography
            sx={{
              fontSize: "40px",
              fontWeight: "700",
              color: "#2E2E2E",
              textAlign: "center",
            }}
          >
            From Vision to Reality
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
            From defining your architecture to seamless go-live, our
            implementation team ensures every Salesforce project delivers
            measurable impact — faster adoption, cleaner data, and stronger ROI
          </Typography>
        </Box>

        <Box sx={{ mt: 6, position: "relative" }}>
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
      </Container>
    </Box>
  );
}

import React from "react";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import EastIcon from "@mui/icons-material/East";

import Image from "next/image";
import Link from "next/link";
type Industry = {
  img: string;
  title: string;
  paragraph_1: string;
};

type SuccessProps = {
  industry: Industry;
};
export default function Success({ industry }: SuccessProps) {
  return (
    <Box className="" sx={{ paddingBottom: "40px" }}>
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
            Success Spotlight
          </Typography>
          <Typography
            sx={{
              marginTop: "20px",
              fontSize: "18px",
              fontWeight: "400",
              color: "#6B7280",
              textAlign: "center",
            }}
          >
            Real results from our clients in the Media & Advertising space.
          </Typography>
        </Box>
        <Box
          sx={{
            padding: { xs: "20px", md: "50px" },
            background: "linear-gradient(180deg, #f2f4f7 60%, #a7d5ee 100%)",
            marginTop: "30px",
            borderRadius: "30px",
          }}
        >
          {/* grid 1 section */}

          <Box
            sx={{
              backgroundColor: "#fff",
              borderRadius: "40px",
              padding: "5px",
            }}
          >
            <Box
              sx={{
                gap: 2,
                p: 3,
                border: "1px solid #EDE9FC",
                borderRadius: "40px",
                backgroundColor: "#FBFAFE",
                height: "100%",
              }}
            >
              {/* profile */}
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "start",
                  mb: 2,
                  mt: "-60px",
                }}
              >
                <Box
                  sx={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "4px solid #fff",
                    backgroundColor: "#fff",
                  }}
                >
                  <Image
                    src={industry.img}
                    alt={String(industry.title)}
                    width={64}
                    height={64}
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontWeight: 700,
                    color: "#0B1F33",
                    fontSize: "20px",
                  }}
                >
                  {industry.title}
                </Typography>

                <Typography sx={{ color: "#4b5563", mt: "20px" }}>
                  {industry.paragraph_1}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                <Box
                  sx={{
                    marginTop: "20px",
                    textAlign: "center",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <Link href="/" style={{ textDecoration: "none" }}>
                    <Button
                      sx={{
                        textTransform: "none",
                        color: "#1F4ED8",
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{ marginRight: "10px", fontWeight: "500" }}
                      >
                        Read Case Study
                      </Typography>
                      <Box>
                        <EastIcon sx={{ color: "#1F4ED8" }} />
                      </Box>
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

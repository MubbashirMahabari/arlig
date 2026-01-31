import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import industryData from "../../../data/industryData";
import EastIcon from "@mui/icons-material/East";

export default function IndustryItems() {
  return (
    <Box sx={{ backgroundColor: "#3BAFDA0A", paddingBottom: "40px" }}>
      <Container maxWidth="xl">
        <Box sx={{ paddingTop: "20px" }}>
          <Typography
            sx={{ fontSize: "40px", fontWeight: "700", color: "#2E2E2E" }}
          >
            From real estate to logistics, Arlig Technologies helps businesses
            streamline operations, automate workflows, and unlock Salesforce for
            measurable growth.
          </Typography>
        </Box>
        <Box sx={{ marginTop: "30px" }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {industryData.map((item) => (
              <Grid key={item.id} size={{ xs: 12, sm: 4, md: 4 }}>
                <Box
                  sx={{
                    gap: 2,
                    p: 3,
                    border: "1px solid #e5e7eb",
                    borderRadius: "12px",
                    backgroundColor: "#fff",
                    height: "100%",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                    },
                  }}
                >
                  <Box sx={{ mb: 2 }}>
                    <Image
                      src={item.img}
                      alt={String(item.title)}
                      width={48}
                      height={48}
                    />
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: 700,
                        color: "#1f2937",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography sx={{ color: "#4b5563", marginTop: "20px" }}>
                      {item.desc}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
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
                      <Link
                        href={`/industry/${item.id}`}
                        style={{ textDecoration: "none" }}
                      >
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
                            View Case Study
                          </Typography>
                          <Box>
                            <EastIcon sx={{ color: "#1F4ED8" }} />
                          </Box>
                        </Button>
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

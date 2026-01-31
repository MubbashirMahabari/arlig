import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import arligLogo from "../../../../public/assets/arlig_logo.jpg";
import icon_1 from "../../../../public/assets/expertise/social-network.png";
import icon_2 from "../../../../public/assets/expertise/implementation.png";
import icon_3 from "../../../../public/assets/expertise/collaborate.png";
import icon_4 from "../../../../public/assets/expertise/staff-management.png";

export default function Results() {
  const feature_data1 = [
    {
      id: 1,
      count: "40%",
      desc: "Faster Client Onboarding Average time reduction",
    },
    {
      id: 2,
      count: "25%",
      desc: "Increase in Campaign ROI Through better visibility",
    },
  ];
  const feature_data2 = [
    {
      id: 1,
      count: "50%",
      desc: "Reduction in Manual Reporting Automated dashboards",
    },
    {
      id: 2,
      count: "100%",
      desc: "Visibility Across Accounts Single source of truth",
    },
  ];
  return (
    <Box sx={{ backgroundColor: "#3BAFDA0A", padding: "40px 0" }}>
      <Container maxWidth="xl">
        <Box>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid size={{ xs: 12, sm: 4, md: 6 }}>
              <Box sx={{ width: "100%" }}>
                <Box sx={{ marginTop: "10px" }}>
                  <Typography
                    sx={{
                      fontSize: "40px",
                      fontWeight: "700",
                      color: "#2E2E2E",
                    }}
                  >
                    Key Results Our Clients
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "40px",
                      fontWeight: "700",
                      color: "#2E2E2E",
                    }}
                  >
                    Achieved
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "#6B7280",
                      marginTop:"20px"
                    }}
                  >
                    The measurable outcomes from our Salesforce implementations
                    in the media industry.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 4, md: 6 }}>
              <Box
                sx={{
                  marginTop: "0px",
                  padding: { xs: "0px", md: "0px 30px" },
                }}
              >
                {/* grid 1 sesction */}
                <Grid
                  container
                  spacing={{ xs: 2, md: 3 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                >
                  {feature_data1.map((item) => (
                    <Grid key={item.id} size={{ xs: 12, sm: 12, md: 6 }}>
                      <Box
                        sx={{
                          gap: 2,
                          borderRadius: "12px",
                          backgroundColor: "transparent",
                          height: "100%",
                          transition: "all 0.3s ease",
                        }}
                      >
                        <Box>
                          <Typography
                            sx={{
                              fontSize: "90px",
                              fontWeight: "700",
                              color: "#2E2E2E",
                            }}
                          >
                            {item.count}
                          </Typography>
                        </Box>

                        <Box>
                          <Typography
                            sx={{
                              fontSize: "16px",
                              color: "#0B1F33",
                              mt: "10px",
                              fontWeight: "500",
                            }}
                          >
                            {item.desc}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
                <Box sx={{ marginTop: "40px" }}>
                  {/* grid 2 sesction */}
                  <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                  >
                    {feature_data2.map((item) => (
                      <Grid key={item.id} size={{ xs: 12, sm: 12, md: 6 }}>
                        <Box
                          sx={{
                            gap: 2,

                            borderRadius: "12px",
                            backgroundColor: "transparent",
                            height: "100%",
                            transition: "all 0.3s ease",
                          }}
                        >
                          <Box>
                            <Typography
                              sx={{
                                fontSize: "90px",
                                fontWeight: "700",
                                color: "#2E2E2E",
                              }}
                            >
                              {item.count}
                            </Typography>
                          </Box>

                          <Box>
                            <Typography
                              sx={{
                                fontSize: "16px",
                                color: "#0B1F33",
                                mt: "10px",
                                fontWeight: "500",
                              }}
                            >
                              {item.desc}
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

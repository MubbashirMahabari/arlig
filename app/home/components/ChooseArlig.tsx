import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import arligLogo from "../../../public/assets/arlig_logo.jpg";
import icon_1 from "../../../public/assets/expertise/social-network.png";
import icon_2 from "../../../public/assets/expertise/implementation.png";
import icon_3 from "../../../public/assets/expertise/collaborate.png";
import icon_4 from "../../../public/assets/expertise/staff-management.png";

export default function ChooseArlig() {
  const feature_data1 = [
    {
      id: 1,
      count: "100+",
      title: "Projects Delivered",
      desc: "Across multiple industries and region",
    },
    {
      id: 2,
      count: "10+",
      title: "Years of Salesforce Expertise",
      desc: "10+ Countries",
    },
  ];
  const feature_data2 = [
    {
      id: 1,
      count: "40+",
      title: "Partners",
      desc: "Salesforce Ridge Partner",
    },
    {
      id: 2,
      count: "75+",
      title: "Certifications",
      desc: "Certification across Salesforce Products",
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
                    Why Choose
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '40px',
                      fontWeight: "700",
                      color: "#2E2E2E",
                    }}
                  >
                    Arlig Technologies?
                  </Typography>
                </Box>
                <Image
                  src={arligLogo}
                  alt="logo"
                  style={{ width: "100%", opacity: "0.1" }}
                />
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
                          <Box
                            sx={{
                              textAlign: "center",
                              padding: "5px",
                              border: "#1F4ED8 2px solid",
                              borderRadius: "30px",
                              marginBottom: "20px",
                            }}
                          >
                            <Typography
                              sx={{ fontWeight: 700, color: "#1F4ED8" }}
                            >
                              {item.title}
                            </Typography>
                          </Box>

                          <Typography
                            sx={{
                              fontSize: "20px",
                              color: "#6B7280",
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
                            <Box
                              sx={{
                                textAlign: "center",
                                padding: "5px",
                                border: "#1F4ED8 2px solid",
                                borderRadius: "30px",
                                marginBottom: "5px",
                              }}
                            >
                              <Typography
                                sx={{ fontWeight: 700, color: "#1F4ED8" }}
                              >
                                {item.title}
                              </Typography>
                            </Box>
                            <Typography
                              sx={{
                                fontSize: "18px",
                                color: "#6B7280",
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

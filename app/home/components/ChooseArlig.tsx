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
    {
      id: 3,
      count: "40+",
      title: "Partners",
      desc: "Salesforce Ridge Partner",
    },
    {
      id: 4,
      count: "75+",
      title: "Certifications",
      desc: "Certification across Salesforce Products",
    },
  ];
  const feature_data2 = [
    
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

            <Grid size={{ xs: 12, sm: 6, md: 12 }}>
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


                    <Grid key={item.id} size={{ xs: 12, sm: 12, md: 3 }}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: { xs: "center", md: "flex-start" },
                          textAlign: { xs: "center", md: "left" },
                        }}
                      >
                        <Box>
                          <Typography
                            sx={{
                              fontSize: "70px",
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
                              border: "#1F4ED8 1px solid",
                              borderRadius: "30px",
                              marginBottom: "20px",
                            }}
                          >
                            <Typography
                              sx={{ fontWeight: 500, color: "#1F4ED8" }}
                            >
                              {item.title}
                            </Typography>
                          </Box>

                          <Typography
                            sx={{
                              fontSize: "18px",
                              color: "#6B7280",
                              mt: "10px",
                              fontWeight: "400",
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
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import testimonial_1 from "../../../public/assets/testimonial/testi-icon-5-1.png";
import testimonial_2 from "../../../public/assets/testimonial/testi-icon-5-2.png";
import testimonial_3 from "../../../public/assets/testimonial/testi-icon-5-3.png";
import testimonial_4 from "../../../public/assets/testimonial/testi-icon-2-3.png";
import testimonial_5 from "../../../public/assets/testimonial/testi-icon-5-5.png";
import testimonial_6 from "../../../public/assets/testimonial/testi-icon-2-1.png";

import Image from "next/image";
import XIcon from "@mui/icons-material/X";

export default function Client() {
  const feature_data1 = [
    {
      id: 1,
      img: testimonial_1,
      name: "Meharoopan Jeganathan",
      city: "V&N Infotech USA",
      desc: "As a US-based company, V&N Infotech has greatly improved our legal processes thanks to Arlig Technologies' seamless DocuSign integration. Their expertise and tailored approach ensured a smooth, efficient implementation.",
    },
    {
      id: 2,
      img: testimonial_2,
      city: "Senior Level IT Professional, Toronto, Canada",
      name: "Tahir Razak",
      desc: "Arlig Technologies has had a profound impact on our offshore operations. Their team consistently delivers top-tier resources, driving efficiency and excellence in every project.",
    },
    {
      id: 3,
      img: testimonial_3,
      city: "CEO, Brand New Galaxy - Dubai",
      name: "Adil Khan",
      desc: "As a CEO, Arlig Technologies has been instrumental in transforming our decision-making process through their exceptional delivery of Tableau CRM dashboards.",
    },
  ];
  const feature_data2 = [
    {
      id: 1,
      img: testimonial_4,
      city: "New york,USA",
      name: "Ahmed Ali",
      desc: "Replex exceeded our expectations. Its intuitive interface and customizable features make managing interactions effortless.",
    },
    {
      id: 2,
      img: testimonial_5,
      city: "Director, Lts Create LLC, USA",
      name: "Padmaja S",
      desc: "Arlig Technologies transformed our sales processes with their exceptional Salesforce expertise, resulting in increased productivity and revenue growth.",
    },
    {
      id: 3,
      img: testimonial_6,
      city: "CEO, Jain Launchpad, Bengaluru, India",
      name: "Nayaz Ahmed",
      desc: "Arlig Technologies delivered innovative solutions that perfectly addressed our complex business needs. Their deep understanding of our processes and ability to provide efficient results truly set them apart.",
    },
  ];

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
            What Our Clients Say
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              color: "#6B7280",
              fontSize: "16px",
              marginTop: "10px",
              textAlign: "center",
            }}
          >
            Arlig Technologies helped us simplify our operations and save 100+
            hours each month. Their Salesforce expertise is unmatched.
          </Typography>
        </Box>

        <Box
          className="client-expertise"
          sx={{
            padding: { xs: "20px", md: "50px" },
            background: "linear-gradient(180deg, #f2f4f7 60%, #a7d5ee 100%)",
            marginTop: "30px",
            borderRadius: "30px",
          }}
        >
          {/* grid 1 section */}
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {feature_data1.map((item) => (
              <Grid
                key={item.id}
                size={{ xs: 12, sm: 4, md: 4 }}
                sx={{ marginBottom: { xs: "40px", md: "0px" } }}
              >
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
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                      },
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
                          src={item.img}
                          alt={String(item.name)}
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
                        {item.name}
                      </Typography>
                      <Box
                        sx={{
                          display: { xs: "block", md: "flex" },
                          justifyContent: "space-between",
                          alignItems: "center",
                          gap: 1,
                        }}
                      >
                        <Typography sx={{ fontWeight: 500, color: "#4b5563",display: "-webkit-box",
                            WebkitLineClamp: 1,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden", }}>
                          {item.city}
                        </Typography>
                        {/* <Box
                          sx={{
                            padding: "10px",
                            borderRadius: "30px",
                            border: "#EDE9FC 2px solid",
                            marginTop: { xs: "10px", md: "0px" },
                            width: "50px",
                          }}
                        >
                          <XIcon sx={{ color: "#6366F1" }} />
                        </Box> */}
                      </Box>

                      <Typography sx={{
                        color: "#4b5563", mt: "20px", display: "-webkit-box",
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}>
                        {item.desc}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ marginTop: { xs: "40px", md: "70px" } }}>
            {/* grid 2 sesction */}
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {feature_data2.map((item) => (
                <Grid
                  key={item.id}
                  size={{ xs: 12, sm: 4, md: 4 }}
                  sx={{ marginBottom: { xs: "40px", md: "0px" } }}
                >
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
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                        "&:hover": {
                          transform: "scale(1.05)",
                          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                        },
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
                            src={item.img}
                            alt={String(item.name)}
                            width={64}
                            height={64}
                            style={{ objectFit: "cover" }}
                          />
                        </Box>
                      </Box>

                      <Box>
                        <Typography sx={{ fontWeight: 700, color: "#0B1F33", fontSize: "20px" }}>
                          {item.name}
                        </Typography>
                        <Box
                          sx={{
                            display: { xs: "block", md: "flex" },
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: 1,
                          }}
                        >
                          <Typography sx={{
                            fontWeight: 500, color: "#4b5563", display: "-webkit-box",
                            WebkitLineClamp: 1,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }}>
                            {item.city}
                          </Typography>
                          {/* <Box
                            sx={{
                              padding: "10px",
                              borderRadius: "30px",
                              border: "#EDE9FC 2px solid",
                              marginTop: { xs: "10px", md: "0px" },
                              width: "50px",
                            }}
                          >
                            <XIcon sx={{ color: "#6366F1" }} />
                          </Box> */}
                        </Box>
                        <Typography sx={{
                          color: "#4b5563", mt: "20px", display: "-webkit-box",
                          WebkitLineClamp: 4,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}>
                          {item.desc}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

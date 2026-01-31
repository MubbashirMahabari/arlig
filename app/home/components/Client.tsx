import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import icon_1 from "../../../public/assets/expertise/social-network.png";
import icon_2 from "../../../public/assets/expertise/implementation.png";
import icon_3 from "../../../public/assets/expertise/collaborate.png";
import icon_4 from "../../../public/assets/expertise/staff-management.png";
import Image from "next/image";
import XIcon from "@mui/icons-material/X";

export default function Client() {
  const feature_data1 = [
    {
      id: 1,
      img: icon_1,
      name: "Emily Parker",
      city: "New york,USA",
      desc: "Replex revolutionized our customer service. It's like having a dedicated team member, always ready to engage and assist our clients.",
    },
    {
      id: 2,
      img: icon_2,
      city: "New york,USA",
      name: "David Wong",
      desc: "As a small business owner, Replex saves me countless hours by automating repetitive tasks and ensuring timely responses.",
    },
    {
      id: 3,
      img: icon_2,
      city: "New york,USA",
      name: "Maria Rodriguez",
      desc: "Impressed by Replex's seamless integration across platforms. It's streamlined our communication workflow and boosted efficiency.",
    },
  ];
  const feature_data2 = [
    {
      id: 1,
      img: icon_3,
      city: "New york,USA",
      name: "Ahmed Ali",
      desc: "Replex exceeded our expectations. Its intuitive interface and customizable features make managing interactions effortless.",
    },
    {
      id: 2,
      img: icon_4,
      city: "New york,USA",
      name: "Emily Chen",
      desc: "With Replex, our support team handles inquiries with lightning speed, delighting customers and improving overall satisfaction.",
    },
    {
      id: 3,
      img: icon_4,
      city: "New york,USA",
      name: "Maria Santos",
      desc: "Replex's AI capabilities are truly impressive. It understands context and responds accurately, enhancing our brand's credibility.",
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
                        <Typography sx={{ fontWeight: 500, color: "#4b5563" }}>
                          {item.city}
                        </Typography>
                        <Box
                          sx={{
                            padding: "10px",
                            borderRadius: "30px",
                            border: "#EDE9FC 2px solid",
                            marginTop: { xs: "10px", md: "0px" },
                            width: "50px",
                          }}
                        >
                          <XIcon sx={{ color: "#6366F1" }} />
                        </Box>
                      </Box>

                      <Typography sx={{ color: "#4b5563", mt: "20px" }}>
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
                        <Typography sx={{ fontWeight: 700, color: "#0B1F33", fontSize:"20px" }}>
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
                        <Typography sx={{ fontWeight: 500, color: "#4b5563" }}>
                          {item.city}
                        </Typography>
                        <Box
                          sx={{
                            padding: "10px",
                            borderRadius: "30px",
                            border: "#EDE9FC 2px solid",
                            marginTop: { xs: "10px", md: "0px" },
                            width: "50px",
                          }}
                        >
                          <XIcon sx={{ color: "#6366F1" }} />
                        </Box>
                      </Box>
                        <Typography sx={{ color: "#4b5563", mt: "20px" }}>
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

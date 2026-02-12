import Image from "next/image";
import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import icon_1 from "../../../public/assets/icons/icon_1.png";
import icon_2 from "../../../public/assets/icons/icon_2.png";
import icon_3 from "../../../public/assets/icons/Integration.png";
import icon_4 from "../../../public/assets/icons/icon_4.png";
import icon_5 from "../../../public/assets/icons/icon_5.png";
import icon_6 from "../../../public/assets/icons/Industry Solution.png";

// feature data
const feature_data1 = [
  {
    id: 1,
    img: icon_1,
    title: "Consulting",
    desc: "Strategic guidance to maximize Salesforce ROI.",
  },
  {
    id: 2,
    img: icon_2,
    title: "Implementation",
    desc: "Fast, reliable setup with best practices",
  },
  {
    id: 3,
    img: icon_3,
    title: "Integration",
    desc: "Connect Salesforce with Finance, HR, Payroll, and third-party apps.",
  },
];
const feature_data2 = [
  {
    id: 1,
    img: icon_4,
    title: "Managed Services",
    desc: "Continuous support and optimization.",
  },
  {
    id: 2,
    img: icon_5,
    title: "HRMS on Salesforce",
    desc: "Payroll & employee lifecycle simplified on one platform.",
  },
  {
    id: 3,
    img: icon_6,
    title: "Industry Solutions",
    desc: "Built for Heavy Equipment Rentals, Real Estate, and Media.",
  },
];

const Expertise = () => {
  return (
    <Box
      className=""
      sx={{ backgroundColor: "#3BAFDA0A", paddingBottom: "40px" }}
    >
      <Container maxWidth="xl">
        <Box sx={{ paddingTop: "20px" }}>
          <Typography
            sx={{ fontSize: "40px", fontWeight: "700", color: "#2E2E2E" }}
          >
            Your Success, Our Expertise
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{ color: "#6B7280", fontSize: "16px", marginTop: "10px" }}
          >
            We deliver end-to-end Salesforce services tailored to your industry
            and business needs.
          </Typography>
        </Box>
        <Box sx={{ marginTop: "40px", padding: { xs: "0px", md: "0px 30px" } }}>
          {/* grid 1 sesction */}
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {feature_data1.map((item) => (
              <Grid key={item.id} size={{ xs: 12, sm: 4, md: 4 }}>
                <Box
                  sx={{
                    gap: 2,
                    p: 3,
                    borderRadius: "20px",
                    backgroundColor: "#3BAFDA0A",
                    height: "100%",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                      backgroundColor: "#fff",
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
                    <Typography sx={{ fontWeight: 700, color: "#1f2937" }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{ color: "#4b5563", mt: 0.5 }}>
                      {item.desc}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ marginTop: "20px" }}>
            {/* grid 2 sesction */}
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {feature_data2.map((item) => (
                <Grid key={item.id} size={{ xs: 12, sm: 4, md: 4 }}>
                  <Box
                    sx={{
                      gap: 2,
                      p: 3,
                      borderRadius: "20px",
                      backgroundColor: "#3BAFDA0A",
                      height: "100%",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                        backgroundColor: "#fff",
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
                      <Typography sx={{ fontWeight: 700, color: "#1f2937" }}>
                        {item.title}
                      </Typography>
                      <Typography sx={{ color: "#4b5563", mt: 0.5 }}>
                        {item.desc}
                      </Typography>
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
};

export default Expertise;

import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import icon_1 from "../../../public/assets/icons/icon_1.png";
import icon_2 from "../../../public/assets/icons/icon_2.png";
import icon_3 from "../../../public/assets/icons/icon_3.png";
import icon_4 from "../../../public/assets/icons/icon_4.png";
import icon_5 from "../../../public/assets/icons/Empathy Icon.png";
import icon_6 from "../../../public/assets/icons/Integration.png";

export default function Defines() {
  const defines_data1 = [
    {
      id: 1,
      img: icon_1,
      title: "Honesty",
      desc: "We say what we mean and deliver what we promise.",
    },
    {
      id: 2,
      img: icon_2,
      title: "Intelligence",
      desc: "We simplify the complex with clarity and precision.",
    },
    {
      id: 3,
      img: icon_5,
      title: "Empathy",
      desc: "We listen deeply and build for real impact.",
    },
  ];
  const defines_data2 = [
    {
      id: 1,
      img: icon_3,
      title: "Integrity",
      desc: "Every project reflects our commitment to doing right.",
    },
    {
      id: 2,
      img: icon_6,
      title: "Customer Success",
      desc: "Your outcomes define ours.",
    },
  ];
  return (
    <Box sx={{ backgroundColor: "#3BAFDA0A", padding: "40px 0" }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            textAlign: "center",
            padding: "10px 15px",
            backgroundColor: "#fff",
            borderRadius: "30px",
            border: "#E8E8E8 solid 1px",
            display: "inline-block",
          }}
        >
          <Typography sx={{ fontSize: "14px" }}>Our Values</Typography>
        </Box>
        <Box sx={{ marginTop: "20px" }}>
          <Typography sx={{ fontSize: "40px", fontWeight: "700" }}>
            What Defines Us
          </Typography>
        </Box>
        <Box sx={{ marginTop: "40px", padding: { xs: "0px", md: "0px 30px" } }}>
          {/* grid 1 sesction */}
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {defines_data1.map((item) => (
              <Grid key={item.id} size={{ xs: 12, sm: 4, md: 4 }}>
                <Box
                  sx={{
                    gap: 2,
                    p: 3,
                    border: "1px solid #e5e7eb",
                    borderRadius: "20px",
                    backgroundColor: "#3BAFDA0A",
                    height: "100%",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
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
              {defines_data2.map((item) => (
                <Grid key={item.id} size={{ xs: 12, sm: 4, md: 4 }}>
                  <Box
                    sx={{
                      gap: 2,
                      p: 3,
                      border: "1px solid #e5e7eb",
                      borderRadius: "20px",
                      backgroundColor: "#3BAFDA0A",
                      height: "100%",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
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
}

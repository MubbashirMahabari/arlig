import React from "react";
import Image from "next/image";
import BeliefImage from "../../../public/assets/about/belief_image.jpg";
import Link from "next/link";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

export default function Belief() {
  return (
    <Box sx={{ backgroundColor: "#3BAFDA0A", padding: "40px 0" }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            position: "relative",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "70%" }, 
              zIndex: 1,
            }}
          >
            <Image
              src={BeliefImage}
              alt="Belief"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "20px",
              }}
            />
          </Box>

          <Box
            sx={{
              width: { xs: "100%", md: "420px" },
              backgroundColor: "white",
              borderRadius: "20px",
              padding: "28px",
              boxShadow: "0px 12px 30px rgba(0,0,0,0.15)",

              ml: { md: "-120px" },
              mt: { xs: "20px", md: "0px" },

              zIndex: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: "32px",
                fontWeight: "700",
                color: "#0B1F33",
              }}
            >
              Our Belief
            </Typography>

            <Box sx={{ mt: "20px" }}>
              <ul
                style={{
                  paddingLeft: "20px",
                  margin: 0,
                  color: "#4B5563",
                  fontSize: "14px",
                  lineHeight: "26px",
                  listStyle: "inherit",
                }}
              >
                <li>
                  Technology should simplify processes, not complicate them.
                </li>
                <li>
                  Everything we do — from design to delivery, from consulting to
                  customer success — begins with this belief.
                </li>
              </ul>
            </Box>

            <Box sx={{ mt: "24px" }}>
              <Link href="/contact" style={{ textDecoration: "none" }}>
                <Button
                  sx={{
                    width: "100%",
                    backgroundColor: "#0B1F33",
                    color: "white",
                    borderRadius: "50px",
                    padding: "12px",
                    textTransform: "none",
                    fontWeight: "500",
                    "&:hover": {
                      backgroundColor: "#081726",
                    },
                  }}
                >
                  Let’s Collaborate
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

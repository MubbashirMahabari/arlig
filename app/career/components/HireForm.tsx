import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  TextField,
} from "@mui/material";
import React from "react";

export default function HireForm() {
  return (
    <Box id='career-form' sx={{ padding: "40px 0" }}>
      <Container maxWidth="xl">
        <Box>
          <Typography
            sx={{
              fontSize: "40px",
              fontWeight: "700",
              color: "#2E2E2E",
              textAlign: "center",
            }}
          >
            We'd Love to Hear From You.
          </Typography>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            width: { xs: "100%", sm: "100%", md: "1000px" },
            margin: "0 auto",
            marginTop: "16px",
          }}
        >
          <Typography sx={{ color: "#6B7280", fontSize: "16px" }}>
            We're not actively hiring right now - but we're always open to
            connecting with exceptional Salesforce professionals and emerging
            talent who resonate with our mission.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              flex: 1,
              backgroundColor: "#FBFBFB",
              padding: "30px",
              borderRadius: "20px",
              marginTop: "40px",
              width: "100%",
              maxWidth: "520px",
            }}
          >
            {/* First + Last Name */}
            <Box
              sx={{
                display: "flex",
                gap: "16px",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ fontSize: "14px", mb: 0.5 }}>
                  First Name <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="First Name"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "#fff",
                      borderRadius: "6px",
                      fontSize: "14px",
                      padding: "2px",
                    },
                  }}
                />
              </Box>

              <Box sx={{ flex: 1 }}>
                <Typography sx={{ fontSize: "14px", mb: 0.5 }}>
                  Last Name <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Last Name"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "#fff",
                      borderRadius: "6px",
                      fontSize: "14px",
                      padding: "2px",
                    },
                  }}
                />
              </Box>
            </Box>

            {/* Email */}
            <Box sx={{ mt: 2 }}>
              <Typography sx={{ fontSize: "14px", mb: 0.5 }}>
                Email Address <span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField
                fullWidth
                size="small"
                type="email"
                placeholder="Email Address"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "#fff",
                    borderRadius: "6px",
                    fontSize: "14px",
                    padding: "2px",
                  },
                }}
              />
            </Box>

            {/* Message */}
            <Box sx={{ mt: 2 }}>
              <Typography sx={{ fontSize: "14px", mb: 0.5 }}>
                LinkedIn Profile or Message
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={4}
                size="small"
                placeholder="Share your LinkedIn URL or tell us about yourself"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "#fff",
                    borderRadius: "6px",
                    fontSize: "14px",
                  },
                }}
              />
            </Box>

            {/* Button */}
            <Button
              fullWidth
              sx={{
                mt: 3,
                backgroundColor: "#0B1F33",
                color: "#fff",
                borderRadius: "50px",
                padding: "12px",
                textTransform: "none",
                fontWeight: 600,
                "&:hover": { backgroundColor: "#0B1F33" },
              }}
            >
              Share Your Profile
            </Button>
            <Box sx={{ marginTop: "20px", textAlign: "center" }}>
              <Typography sx={{ color: "#616161", fontSize: "14px" }}>
                Or email us directly at info@arligtechnologies.com
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

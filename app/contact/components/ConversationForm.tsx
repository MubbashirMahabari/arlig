"use client";
import React from "react";
import Image from "next/image";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  TextField,
} from "@mui/material";
import contactImage from "../../../public/assets/contact/contact_image.jpg";

export default function ConversationForm() {
  return (
    <Box id='contact-form'sx={{ padding: "40px 0" }}>
      <Container maxWidth="xl">
        <Box>
          <Box>
            <Typography
              sx={{ fontSize: "40px", fontWeight: "700", color: "#2E2E2E" }}
            >
              Start the Conversation
            </Typography>
          </Box>
          <Box sx={{ lineHeight: "20px" }}>
            <Typography
              sx={{ color: "#6B7280", fontSize: "16px", marginTop: "10px" }}
            >
              Tell us briefly about your goals or challenges - and we'll connect
            </Typography>
            <Typography
              sx={{ color: "#6B7280", fontSize: "16px", marginTop: "0px" }}
            >
              you with the right Salesforce consultant within 24 hours.
            </Typography>
          </Box>
          <Box sx={{ marginTop: "40px" }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              <Grid size={{ xs: 12, sm: 4, md: 5 }}>
                {/* form */}
                <Box
                  sx={{
                    flex: 1,
                    backgroundColor: "#FBFBFB",
                    padding: "30px",
                    borderRadius: "20px",
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
                        Full Name <span style={{ color: "red" }}>*</span>
                      </Typography>
                      <TextField
                        id="fullName"
                        fullWidth
                        size="small"
                        placeholder="Full Name"
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

                  {/* Company */}
                  <Box sx={{ mt: 2 }}>
                    <Typography sx={{ fontSize: "14px", mb: 0.5 }}>
                      Company
                    </Typography>
                    <TextField
                      id="company"
                      fullWidth
                      size="small"
                      placeholder="Company Name"
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

                  {/* Email */}
                  <Box sx={{ mt: 2 }}>
                    <Typography sx={{ fontSize: "14px", mb: 0.5 }}>
                      Work Email Address <span style={{ color: "red" }}>*</span>
                    </Typography>
                    <TextField
                      id="email"
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

                  {/* Mobile */}
                  <Box sx={{ mt: 2 }}>
                    <Typography sx={{ fontSize: "14px", mb: 0.5 }}>
                      Mobile
                    </Typography>
                    <TextField
                      id="mobile"
                      fullWidth
                      size="small"
                      placeholder="Mobile Number"
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
                      Message
                    </Typography>
                    <TextField
                      id="message"
                      fullWidth
                      multiline
                      rows={4}
                      size="small"
                      placeholder="Message"
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
                    Send Message
                  </Button>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, sm: 4, md: 7 }} sx={{}}>
                <Box sx={{ width: "100%" }}>
                  <Image
                    src={contactImage}
                    alt="contact"
                    style={{ width: "100%", borderRadius: "20px" }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

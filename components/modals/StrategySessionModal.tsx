"use client";

import React from "react";
import {
    Box,
    Typography,
    TextField,
    Button,
    Dialog,
    DialogContent,
    IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useStrategyModal } from "../../app/context/StrategyModalContext";

export default function StrategySessionModal() {
    const { isOpen, closeModal } = useStrategyModal();

    return (
        <Dialog
            open={isOpen}
            onClose={closeModal}
            maxWidth="xs"
            fullWidth
            PaperProps={{
                sx: {
                    borderRadius: "15px",
                    backgroundColor: "transparent",
                    boxShadow: "none",
                    scrollbarWidth: "none",
                    "&::-webkit-scrollbar": {
                        display: "none",
                    },
                },
            }}
        >

            <Box
                sx={{
                    position: "relative",
                    backgroundColor: "#FBFBFB",
                    padding: "25px",
                    borderRadius: "20px",
                    boxShadow: "0px 10px 40px rgba(0,0,0,0.1)",
                }}
            >

                <IconButton
                    aria-label="close"
                    onClick={closeModal}
                    sx={{
                        position: "absolute",
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>

                <Box
                    sx={{
                        flex: 1,
                    }}
                >
                    {/* <Box sx={{ mb: 3, textAlign:"center" }}>
                        <Typography
                            variant="h5"
                            sx={{ fontWeight: 700, color: "#0B1F33", mb: 0.5 }}
                        >
                            Contact Us
                        </Typography>
                        <Typography sx={{ fontSize: "14px", color: "#6B7280" }}>
                            We will get back to you asap
                        </Typography>
                    </Box> */}
                    {/* Full name */}
                    <Box sx={{ flex: 1 }}>
                        <Typography sx={{ fontSize: "14px", mb: 0.5 }}>
                            Full Name <span style={{ color: "red" }}>*</span>
                        </Typography>
                        <TextField
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

                    {/* Company */}
                    <Box sx={{ mt: 2 }}>
                        <Typography sx={{ fontSize: "14px", mb: 0.5 }}>
                            Company
                        </Typography>
                        <TextField
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
                            Work Email Address
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

                    {/* Mobile */}
                    <Box sx={{ mt: 2 }}>
                        <Typography sx={{ fontSize: "14px", mb: 0.5 }}>
                            Mobile
                        </Typography>
                        <TextField
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
            </Box>
        </Dialog>
    );
}

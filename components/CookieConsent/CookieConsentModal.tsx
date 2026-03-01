"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getConsent, saveConsent, CookieConsent } from "@/lib/cookieUtils";
import {
    Box,
    Typography,
    Button,
    IconButton,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Slide,
    Switch,
    FormControlLabel,
    Paper,
    useTheme,
    useMediaQuery,
    FormGroup,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CookieIcon from "@mui/icons-material/Cookie";
import { TransitionProps } from "@mui/material/transitions";

interface ConsentModalProps {
    onConsent?: (consent: CookieConsent) => void;
}

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function CookieConsentModal({ onConsent }: ConsentModalProps) {
    const router = useRouter();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const [isVisible, setIsVisible] = useState(false);
    const [showPreferences, setShowPreferences] = useState(false);
    const [preferences, setPreferences] = useState<CookieConsent>({
        necessary: true,
        analytics: true,
        marketing: true,
    });

    useEffect(() => {
        const consent = getConsent();
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleIdentify = (newConsent: CookieConsent) => {
        saveConsent(newConsent);
        setIsVisible(false);
        setShowPreferences(false);
        if (onConsent) onConsent(newConsent);
        router.refresh();
    };

    const handleAcceptAll = () => {
        handleIdentify({ necessary: true, analytics: true, marketing: true });
    };

    const handleRejectAll = () => {
        handleIdentify({ necessary: true, analytics: false, marketing: false });
    };

    const handleSavePreferences = () => {
        handleIdentify(preferences);
    };

    const togglePreference = (key: keyof CookieConsent) => {
        if (key === "necessary") return;
        setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    if (!isVisible && !showPreferences) return null;

    return (
        <>
            <Slide direction="up" in={isVisible && !showPreferences} mountOnEnter unmountOnExit>
                <Paper
                    elevation={6}
                    sx={{
                        position: "fixed",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        zIndex: 1300,
                        p: { xs: 3, md: 4 },
                        m: { xs: 0, md: 3 },
                        borderRadius: { xs: 0, md: 4 },
                        backgroundColor: "rgba(255, 255, 255, 0.95)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(0, 0, 0, 0.05)",
                        maxWidth: "1280px",
                        mx: { md: "auto" },
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column", md: "row" },
                            alignItems: { xs: "flex-start", md: "center" },
                            gap: 3,
                        }}
                    >
                        <Box sx={{ flex: 1 }}>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1 }}>
                                <CookieIcon sx={{ color: theme.palette.primary.main, fontSize: 28 }} />
                                <Typography variant="h6" fontWeight="bold" color="text.primary">
                                    We respect your privacy
                                </Typography>
                            </Box>
                            <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                                We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept Cookies", you consent to our use of cookies. Read our{" "}
                                <Link href="/" style={{ color: theme.palette.primary.main, textDecoration: "underline" }}>
                                    Privacy Policy
                                </Link>
                                .
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: { xs: "column", sm: "row" },
                                gap: 1.5,
                                width: { xs: "100%", md: "auto" },
                                minWidth: { xs: "0px", sx: "550px", md: "550px" },
                            }}
                        >
                            <Button
                                variant="contained"
                                onClick={handleAcceptAll}
                                fullWidth
                                sx={{
                                    borderRadius: "12px",
                                    textTransform: "none",
                                    fontWeight: 600,
                                    py: 1.5,
                                    boxShadow: "0 4px 14px 0 rgba(0,118,255,0.39)",
                                }}
                            >
                                Accept Cookies
                            </Button>
                            <Button
                                onClick={handleRejectAll}
                                fullWidth
                                sx={{
                                    borderRadius: "12px",
                                    textTransform: "none",
                                    border: "1px solid #0076ff63",
                                    fontWeight: 600,

                                    borderWidth: "1.5px",
                                    "&:hover": { borderWidth: "1.5px" },
                                }}
                            >
                                Reject All
                            </Button>
                            <Button
                                onClick={() => setShowPreferences(true)}
                                fullWidth
                                sx={{
                                    borderRadius: "12px",
                                    textTransform: "none",
                                    fontWeight: 500,
                                    color: "text.secondary",
                                    textDecoration: "underline",
                                }}
                            >
                                Manage Preferences
                            </Button>
                        </Box>
                    </Box>
                </Paper>
            </Slide>

            <Dialog
                open={showPreferences}
                onClose={() => setShowPreferences(false)}
                TransitionComponent={Transition}
                maxWidth="sm"
                fullWidth
                PaperProps={{
                    sx: {
                        borderRadius: 3,
                        p: 1,
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    },
                }}
            >
                <DialogTitle sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", pb: 1 }}>
                    <Typography fontWeight="bold">
                        Cookie Preferences
                    </Typography>
                    <IconButton onClick={() => setShowPreferences(false)} size="small">
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>

                <DialogContent dividers sx={{ borderTop: "none", borderBottom: "none" }}>
                    <Typography variant="body2" color="text.secondary" paragraph>
                        Customize your cookie preferences below. Essential cookies are required for the website to function properly.
                    </Typography>

                    <FormGroup sx={{ gap: 2, mt: 2 }}>
                        <Paper elevation={0} variant="outlined" sx={{ p: 2, borderRadius: 2, display: "flex", justifyContent: "space-between", alignItems: "center", bgcolor: "grey.50" }}>
                            <Box>
                                <Typography variant="subtitle1" fontWeight="600">Necessary</Typography>
                                <Typography variant="caption" color="text.secondary">Required for core functionality.</Typography>
                            </Box>
                            <Switch checked={true} disabled color="primary" />
                        </Paper>

                        <Paper elevation={0} variant="outlined" sx={{ p: 2, borderRadius: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Box>
                                <Typography variant="subtitle1" fontWeight="600">Analytics</Typography>
                                <Typography variant="caption" color="text.secondary">Helps us understand how you use our site.</Typography>
                            </Box>
                            <Switch
                                checked={preferences.analytics}
                                onChange={() => togglePreference("analytics")}
                                color="primary"
                            />
                        </Paper>

                        <Paper elevation={0} variant="outlined" sx={{ p: 2, borderRadius: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Box>
                                <Typography variant="subtitle1" fontWeight="600">Marketing</Typography>
                                <Typography variant="caption" color="text.secondary">Used to deliver relevant advertisements.</Typography>
                            </Box>
                            <Switch
                                checked={preferences.marketing}
                                onChange={() => togglePreference("marketing")}
                                color="primary"
                            />
                        </Paper>
                    </FormGroup>
                </DialogContent>

                <DialogActions sx={{ p: 3, pt: 1 }}>
                    <Button
                        onClick={() => setShowPreferences(false)}
                        sx={{ textTransform: "none", color: "text.secondary", fontWeight: 500 }}
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handleSavePreferences}
                        variant="contained"
                        sx={{
                            borderRadius: "10px",
                            px: 4,
                            py: 1,
                            textTransform: "none",
                            fontWeight: 600,
                            boxShadow: "0 4px 14px 0 rgba(0,118,255,0.39)",
                        }}
                    >
                        Save Preferences
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

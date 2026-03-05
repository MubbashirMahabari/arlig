"use client";

import React, { useState } from "react";
import {
    Box,
    Typography,
    Dialog,
    IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useStrategyModal } from "../../app/context/StrategyModalContext";
import SuccessModal from "./SuccessModal";

/* ─── Styles ──────────────────────────────────────────────────────── */
const fieldBase: React.CSSProperties = {
    width: "100%",
    backgroundColor: "#fff",
    border: "1px solid #c4c4c4",
    borderRadius: "6px",
    fontSize: "14px",
    padding: "8px 12px",
    boxSizing: "border-box",
    outline: "none",
    color: "#2E2E2E",
    fontFamily: "inherit",
};

const fieldErr: React.CSSProperties = {
    ...fieldBase,
    border: "1px solid #e53935",
};

/* ─── Types ───────────────────────────────────────────────────────── */
interface FormState {
    last_name: string;
    company: string;
    email: string;
    mobile: string;
    description: string;
}

interface FormErrors {
    last_name?: string;
    company?: string;
    email?: string;
    mobile?: string;
}

/* ─── Helpers ─────────────────────────────────────────────────────── */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DIGITS_RE = /^\d+$/;

function validate(f: FormState): FormErrors {
    const errs: FormErrors = {};
    if (!f.last_name.trim()) errs.last_name = "Full Name is required.";
    if (!f.company.trim()) errs.company = "Company is required.";
    if (f.email && !EMAIL_RE.test(f.email))
        errs.email = "Please enter a valid email address.";
    if (f.mobile && !DIGITS_RE.test(f.mobile))
        errs.mobile = "Mobile number must contain digits only.";
    return errs;
}

/* ─── Component ───────────────────────────────────────────────────── */
export default function StrategySessionModal() {
    const { isOpen, closeModal } = useStrategyModal();

    const [form, setForm] = useState<FormState>({
        last_name: "",
        company: "",
        email: "",
        mobile: "",
        description: "",
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [submitting, setSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        if (errors[name as keyof FormErrors]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    /* Block non-digit key presses for mobile field */
    const handleMobileKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const allowed = [
            "Backspace", "Delete", "Tab", "ArrowLeft", "ArrowRight", "Home", "End",
        ];
        if (!allowed.includes(e.key) && !/^\d$/.test(e.key)) {
            e.preventDefault();
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const errs = validate(form);
        if (Object.keys(errs).length > 0) {
            setErrors(errs);
            return;
        }

        setSubmitting(true);
        try {
            const body = new URLSearchParams({
                oid: "00DdN00000MPh8L",
                retURL: "/",
                last_name: form.last_name,
                company: form.company,
                email: form.email,
                mobile: form.mobile,
                description: form.description,
            });

            // Salesforce Web-to-Lead does not support CORS; use no-cors.
            // The lead is still created on Salesforce's side.
            await fetch(
                "https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DdN00000MPh8L",
                { method: "POST", mode: "no-cors", body }
            );

            closeModal();
            setShowSuccess(true);
        } catch {
            closeModal();
            setShowSuccess(true);
        } finally {
            setSubmitting(false);
        }
    };

    const handleSuccessClose = () => {
        setShowSuccess(false);
        setForm({ last_name: "", company: "", email: "", mobile: "", description: "" });
        setErrors({});
    };

    /* Field style helper */
    const fs = (field: keyof FormErrors) =>
        errors[field] ? fieldErr : fieldBase;

    const errText = (msg?: string) =>
        msg ? (
            <p style={{ color: "#e53935", fontSize: "12px", margin: "4px 0 0" }}>
                {msg}
            </p>
        ) : null;

    return (
        <>
            {showSuccess && <SuccessModal onClose={handleSuccessClose} />}

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
                        "&::-webkit-scrollbar": { display: "none" },
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
                    {/* Close button */}
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

                    <Box sx={{ flex: 1 }}>
                        <form onSubmit={handleSubmit} noValidate>
                            {/* Hidden Salesforce fields */}
                            <input type="hidden" name="oid" value="00DdN00000MPh8L" />
                            <input type="hidden" name="retURL" value="/" />

                            {/* Full Name */}
                            <Box sx={{ flex: 1 }}>
                                <Typography sx={{ fontSize: "14px", mb: 0.5 }}>
                                    Full Name <span style={{ color: "red" }}>*</span>
                                </Typography>
                                <input
                                    id="sf_last_name"
                                    name="last_name"
                                    type="text"
                                    maxLength={80}
                                    placeholder="Full Name"
                                    value={form.last_name}
                                    onChange={handleChange}
                                    style={fs("last_name")}
                                />
                                {errText(errors.last_name)}
                            </Box>

                            {/* Company */}
                            <Box sx={{ mt: 2 }}>
                                <Typography sx={{ fontSize: "14px", mb: 0.5 }}>
                                    Company <span style={{ color: "red" }}>*</span>
                                </Typography>
                                <input
                                    id="sf_company"
                                    name="company"
                                    type="text"
                                    maxLength={40}
                                    placeholder="Company Name"
                                    value={form.company}
                                    onChange={handleChange}
                                    style={fs("company")}
                                />
                                {errText(errors.company)}
                            </Box>

                            {/* Email */}
                            <Box sx={{ mt: 2 }}>
                                <Typography sx={{ fontSize: "14px", mb: 0.5 }}>
                                    Work Email Address
                                </Typography>
                                <input
                                    id="sf_email"
                                    name="email"
                                    type="email"
                                    maxLength={80}
                                    placeholder="Email Address"
                                    value={form.email}
                                    onChange={handleChange}
                                    style={fs("email")}
                                />
                                {errText(errors.email)}
                            </Box>

                            {/* Mobile */}
                            <Box sx={{ mt: 2 }}>
                                <Typography sx={{ fontSize: "14px", mb: 0.5 }}>
                                    Mobile
                                </Typography>
                                <input
                                    id="sf_mobile"
                                    name="mobile"
                                    type="text"
                                    inputMode="numeric"
                                    maxLength={40}
                                    placeholder="Mobile Number"
                                    value={form.mobile}
                                    onChange={handleChange}
                                    onKeyDown={handleMobileKeyDown}
                                    style={fs("mobile")}
                                />
                                {errText(errors.mobile)}
                            </Box>

                            {/* Message */}
                            <Box sx={{ mt: 2 }}>
                                <Typography sx={{ fontSize: "14px", mb: 0.5 }}>
                                    Message
                                </Typography>
                                <textarea
                                    id="sf_description"
                                    name="description"
                                    rows={4}
                                    placeholder="Message"
                                    value={form.description}
                                    onChange={handleChange}
                                    style={{ ...fieldBase, resize: "vertical" }}
                                />
                            </Box>

                            {/* Submit */}
                            <input
                                type="submit"
                                name="submit"
                                value={submitting ? "Sending…" : "Send Message"}
                                disabled={submitting}
                                style={{
                                    marginTop: "24px",
                                    width: "100%",
                                    backgroundColor: submitting ? "#6B7280" : "#0B1F33",
                                    color: "#fff",
                                    borderRadius: "50px",
                                    padding: "12px",
                                    border: "none",
                                    fontWeight: 600,
                                    fontSize: "14px",
                                    fontFamily: "inherit",
                                    cursor: submitting ? "not-allowed" : "pointer",
                                    letterSpacing: "0.3px",
                                    transition: "background-color 0.2s",
                                }}
                            />
                        </form>
                    </Box>
                </Box>
            </Dialog>
        </>
    );
}

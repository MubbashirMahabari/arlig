"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Box, Container, Grid, Typography } from "@mui/material";
import contactImage from "../../../public/assets/contact/contact_image.jpg";
import SuccessModal from "../../../components/modals/SuccessModal";

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

const fieldError: React.CSSProperties = {
  ...fieldBase,
  border: "1px solid #e53935",
};

/* ─── Types ──────────────────────────────────────────────────────── */
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


/* ─── Main Component ──────────────────────────────────────────────── */
export default function ConversationForm() {
  const router = useRouter();

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
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* Auto-redirect 3 s after showing the modal */
  useEffect(() => {
    if (showSuccess) {
      timerRef.current = setTimeout(() => router.push("/"), 3000);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [showSuccess, router]);

  const handleClose = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    router.push("/");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
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
        retURL: "http://",
        last_name: form.last_name,
        company: form.company,
        email: form.email,
        mobile: form.mobile,
        description: form.description,
      });

      // Salesforce Web-to-Lead does not support CORS; we use no-cors and
      // assume success (the lead is still created on Salesforce's side).
      await fetch(
        "https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DdN00000MPh8L",
        { method: "POST", mode: "no-cors", body }
      );

      setShowSuccess(true);
    } catch {
      // Even on network error the no-cors request may have gone through
      setShowSuccess(true);
    } finally {
      setSubmitting(false);
    }
  };

  /* ── Field style helper ── */
  const fs = (field: keyof FormErrors) =>
    errors[field] ? fieldError : fieldBase;

  return (
    <>
      {showSuccess && <SuccessModal onClose={handleClose} />}

      <Box id="contact-form" sx={{ padding: "40px 0" }}>
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
                Tell us briefly about your goals or challenges - and we&apos;ll
                connect
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
                  <Box
                    sx={{
                      flex: 1,
                      backgroundColor: "#FBFBFB",
                      padding: "30px",
                      borderRadius: "20px",
                    }}
                  >
                    <form onSubmit={handleSubmit} noValidate>
                      {/* Hidden Salesforce fields */}
                      <input type="hidden" name="oid" value="00DdN00000MPh8L" />
                      <input type="hidden" name="retURL" value="http://" />

                      {/* Full Name */}
                      <Box>
                        <Typography sx={{ fontSize: "14px", mb: 0.5 }}>
                          Full Name <span style={{ color: "red" }}>*</span>
                        </Typography>
                        <input
                          id="last_name"
                          name="last_name"
                          type="text"
                          maxLength={80}
                          placeholder="Full Name"
                          value={form.last_name}
                          onChange={handleChange}
                          style={fs("last_name")}
                        />
                        {errors.last_name && (
                          <p style={{ color: "#e53935", fontSize: "12px", margin: "4px 0 0" }}>
                            {errors.last_name}
                          </p>
                        )}
                      </Box>

                      {/* Company */}
                      <Box sx={{ mt: 2 }}>
                        <Typography sx={{ fontSize: "14px", mb: 0.5 }}>
                          Company <span style={{ color: "red" }}>*</span>
                        </Typography>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          maxLength={40}
                          placeholder="Company Name"
                          value={form.company}
                          onChange={handleChange}
                          style={fs("company")}
                        />
                        {errors.company && (
                          <p style={{ color: "#e53935", fontSize: "12px", margin: "4px 0 0" }}>
                            {errors.company}
                          </p>
                        )}
                      </Box>

                      {/* Email */}
                      <Box sx={{ mt: 2 }}>
                        <Typography sx={{ fontSize: "14px", mb: 0.5 }}>
                          Work Email Address
                        </Typography>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          maxLength={80}
                          placeholder="Email Address"
                          value={form.email}
                          onChange={handleChange}
                          style={fs("email")}
                        />
                        {errors.email && (
                          <p style={{ color: "#e53935", fontSize: "12px", margin: "4px 0 0" }}>
                            {errors.email}
                          </p>
                        )}
                      </Box>

                      {/* Mobile */}
                      <Box sx={{ mt: 2 }}>
                        <Typography sx={{ fontSize: "14px", mb: 0.5 }}>
                          Mobile
                        </Typography>
                        <input
                          id="mobile"
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
                        {errors.mobile && (
                          <p style={{ color: "#e53935", fontSize: "12px", margin: "4px 0 0" }}>
                            {errors.mobile}
                          </p>
                        )}
                      </Box>

                      {/* Message */}
                      <Box sx={{ mt: 2 }}>
                        <Typography sx={{ fontSize: "14px", mb: 0.5 }}>
                          Message
                        </Typography>
                        <textarea
                          id="description"
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
                </Grid>

                <Grid size={{ xs: 12, sm: 4, md: 7 }}>
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
    </>
  );
}

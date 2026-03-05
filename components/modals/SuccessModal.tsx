"use client";
import React from "react";

interface SuccessModalProps {
    onClose: () => void;
}

export default function SuccessModal({ onClose }: SuccessModalProps) {
    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                backgroundColor: "rgba(0,0,0,0.45)",
                zIndex: 9999,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "16px",
            }}
        >
            <div
                style={{
                    backgroundColor: "#fff",
                    borderRadius: "20px",
                    padding: "40px 36px",
                    maxWidth: "420px",
                    width: "100%",
                    textAlign: "center",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                    animation: "modalIn 0.3s ease",
                }}
            >
                {/* Check icon */}
                <div
                    style={{
                        width: "72px",
                        height: "72px",
                        borderRadius: "50%",
                        backgroundColor: "#E8F5E9",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 20px",
                    }}
                >
                    <svg
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#2E7D32"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polyline points="20 6 9 17 4 12" />
                    </svg>
                </div>

                <p
                    style={{
                        fontSize: "22px",
                        fontWeight: 700,
                        color: "#2E2E2E",
                        margin: "0 0 8px",
                    }}
                >
                    Message Sent!
                </p>
                <p
                    style={{
                        fontSize: "14px",
                        color: "#6B7280",
                        margin: "0 0 28px",
                        lineHeight: "1.6",
                    }}
                >
                    Thank you for reaching out. We&apos;ll connect you with the right
                    Salesforce consultant within 24 hours.
                </p>

                <button
                    onClick={onClose}
                    style={{
                        backgroundColor: "#0B1F33",
                        color: "#fff",
                        border: "none",
                        borderRadius: "50px",
                        padding: "12px 36px",
                        fontWeight: 600,
                        fontSize: "14px",
                        fontFamily: "inherit",
                        cursor: "pointer",
                        letterSpacing: "0.3px",
                    }}
                >
                    Back to Home
                </button>

                <p style={{ fontSize: "12px", color: "#9CA3AF", marginTop: "14px" }}>
                    Redirecting automatically in 3 s…
                </p>
            </div>

            <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.92); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
        </div>
    );
}

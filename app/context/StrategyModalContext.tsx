"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface StrategyModalContextType {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}

const StrategyModalContext = createContext<StrategyModalContextType | undefined>(
    undefined
);

export function StrategyModalProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <StrategyModalContext.Provider value={{ isOpen, openModal, closeModal }}>
            {children}
        </StrategyModalContext.Provider>
    );
}

export function useStrategyModal() {
    const context = useContext(StrategyModalContext);
    if (context === undefined) {
        throw new Error(
            "useStrategyModal must be used within a StrategyModalProvider"
        );
    }
    return context;
}

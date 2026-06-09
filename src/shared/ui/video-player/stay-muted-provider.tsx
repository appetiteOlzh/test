"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface StayMutedContextType {
  isMuted: boolean;
  setIsMuted: (muted: boolean) => void;
}

const StayMutedContext = createContext<StayMutedContextType | undefined>(
  undefined,
);

export const StayMutedProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isMuted, setIsMutedState] = useState(true);

  // Load from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("stayMuted");
      if (stored !== null) {
        setIsMutedState(stored === "true");
      }
    }
  }, []);

  const setIsMuted = (muted: boolean) => {
    setIsMutedState(muted);
    if (typeof window !== "undefined") {
      localStorage.setItem("stayMuted", String(muted));
      if (!muted) {
        (window as Window).isAudioUnlocked = true;
      }
    }
  };

  return (
    <StayMutedContext.Provider value={{ isMuted, setIsMuted }}>
      {children}
    </StayMutedContext.Provider>
  );
};

export const useStayMuted = () => {
  const context = useContext(StayMutedContext);
  if (context === undefined) {
    throw new Error("useStayMuted must be used within a StayMutedProvider");
  }
  return context;
};

import React, { useEffect, useRef } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const InactivityHandler: React.FC = () => {
  const navigate = useNavigate();
  const timerRef = useRef<number | null>(null);
  const timeout = 5 * 60 * 1000; // 5 minutes

  const resetTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = window.setTimeout(() => {
      // Destroy cookie and redirect
      Cookies.remove("login");
      alert("Session expired due to inactivity.");
      navigate("/login");
    }, timeout);
  };

  useEffect(() => {
    const events = ["mousemove", "keydown", "scroll", "click"];

    events.forEach((event) => window.addEventListener(event, resetTimer));

    resetTimer(); // Start timer on mount

    return () => {
      events.forEach((event) => window.removeEventListener(event, resetTimer));
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return null; // This component doesn't render anything
};

export default InactivityHandler;

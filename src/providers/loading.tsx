"use client";

import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";

export default function Loading({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data) to set loading to false after a delay
    const delay = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed

    // Clean up the timeout on component unmount
    return () => clearTimeout(delay);
  }, []);

  return (
    <div>
      {loading ?
      <Loader /> : <>{children}</>}
    </div>
  );
}

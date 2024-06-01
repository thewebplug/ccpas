"use client";

import { useEffect } from "react";

export default function Landing() {
  
  useEffect(() => {
    window.location.href = "/justice";
  }, [])

  return (
    <main></main>
  );
}

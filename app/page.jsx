"use client";

import { useEffect } from "react";

export default function Landing() {
  
  useEffect(() => {
    window.location.href = "/justice/request";
  }, [])

  return (
    <main></main>
  );
}

"use client";

import React, { useEffect, useState } from "react";

const Heading = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <div>Loading...</div>;
  return <h1>This is a heading</h1>;
};

export default Heading;

"use client";
import React from "react";
export default function Error({ error }: { error: Error }) {
  return (
    <h1>
      Ooops !!! {error.message} , {error.name}
    </h1>
  );
}

"use client";
import React, { useEffect } from "react";

type ErrroProps = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: ErrroProps) {
  const IS_DEV = process.env.NEXT_PUBLIC_APP_ENV
    ? process.env.NEXT_PUBLIC_APP_ENV === "development"
    : true;

  useEffect(() => {
    if (IS_DEV) {
      console.error("Error boundary caught: ", error);
    }
  }, [error]);
  return (
    <div className="p-4 bg-red-100 text-red-800 rounded">
      <h2>Something went wrong</h2>
      <p>{error.message}</p>
      <button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded cursor-pointer"
      >
        Try again
      </button>
    </div>
  );
}

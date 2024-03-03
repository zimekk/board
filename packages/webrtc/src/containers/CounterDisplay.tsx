import React from "react";

export default function CounterDisplay({ count }) {
  return (
    <>
      CounterDisplay
      <pre>{JSON.stringify(count, null, 2)}</pre>
    </>
  );
}

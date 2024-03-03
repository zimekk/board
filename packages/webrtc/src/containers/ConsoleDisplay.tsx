import React from "react";

export default function ConsoleDisplay({ data }: { data: any }) {
  return (
    <>
      ConsoleDisplay
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}

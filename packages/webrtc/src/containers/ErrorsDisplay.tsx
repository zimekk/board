import React from "react";

export default function ErrorsDisplay({ data }: { data: any }) {
  return (
    <>
      ErrorsDisplay
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}

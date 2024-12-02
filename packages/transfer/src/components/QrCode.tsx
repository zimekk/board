import qrcode from "qrcode";
import React, { useEffect, useRef } from "react";

export default function QrCode({ children }: { children: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    qrcode.toCanvas(
      canvasRef.current,
      children,
      { margin: 0, scale: 5 },
      function (error: Error) {
        if (error) {
          console.error(error);
        }
      },
    );
  }, [children]);

  return (
    <div
      style={{
        margin: "1em",
      }}
    >
      <a href={children} target="_blank">
        <canvas ref={canvasRef} width="125" height="125"></canvas>
      </a>
    </div>
  );
}

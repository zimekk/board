import React, { useCallback, useState } from "react";
import type { SchemaType } from "../schema";

export default function Section() {
  const [state, setState] = useState<SchemaType>(() => null);

  const handleInfo = useCallback(async () => {
    fetch("wled")
      .then((res) => res.json())
      .then((data) => setState(data));
  }, []);

  const handleEffect = useCallback(async (fx: number) => {
    fetch(`wled/state`, {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        seg: { fx },
      }),
      method: "post",
    })
      .then((res) => res.json())
      .then(console.log);
  }, []);

  return (
    <section>
      <h2>WLED</h2>
      {state && (
        <div>
          <h3>effects</h3>
          {state.effects.map((name, index) => (
            <div key={index}>
              <button onClick={() => handleEffect(index)}>{name}</button>
            </div>
          ))}
        </div>
      )}
      <button onClick={handleInfo}>info</button>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </section>
  );
}

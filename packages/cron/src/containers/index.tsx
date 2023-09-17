import React, { useMemo, useState } from "react";
import parser from "cron-parser";
import { format } from "date-fns";

function Cron({ expression }: { expression: string }) {
  const dates = useMemo(() => {
    var options = {
      currentDate: new Date("Wed, 26 Dec 2012 12:38:53 UTC"),
      endDate: new Date("Wed, 26 Dec 2012 14:40:00 UTC"),
      // iterator: true
    };
    const interval = parser.parseExpression(expression, options);
    const dates = [];
    while (interval.hasNext()) {
      dates.push(interval.next().toDate());
      if (dates.length > 5) {
        break;
      }
    }
    return dates;
  }, [expression]);

  return (
    <div>
      <div>
        <b>{expression}</b>
      </div>
      {dates.map((value, key) => (
        <div key={key}>{format(value, "yyyy-MM-dd HH:mm:ss")}</div>
      ))}
    </div>
  );
}
export default function Section() {
  const [cron] = useState(() => ["*/22 * * * *"]);

  return (
    <section>
      <h2>Cron</h2>
      {cron.map((expression, key) => (
        <Cron key={key} expression={expression} />
      ))}
    </section>
  );
}

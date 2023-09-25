import React, { useMemo, useState } from "react";
import parser from "cron-parser";
import { addDays, format, subDays } from "date-fns";

function Cron({ expression }: { expression: string }) {
  const dates = useMemo(() => {
    var options = {
      currentDate: subDays(new Date(), 1),
      endDate: addDays(new Date(), 30),
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
  // https://elmah.io/tools/cron-parser/#*_*_*_*_*
  const [cron] = useState(() => [
    // "*/22 * * * *",
    "0 9 1 * *", // "At 09:00 AM, on day 1 of the month"
    "0 9 1,5,10,15,20,25,30 * *", // "At 09:00 AM, on day 1, 5, 10, 15, 20, 25, and 30 of the month"
    "0 9 10 * *", // "At 09:00 AM, on day 10 of the month"
    "0 9 20 * *", // "At 09:00 AM, on day 20 of the month"
    "15 8 23 * *", // "At 08:15 AM, on day 23 of the month"
    "0 9 28 * *", // "At 09:00 AM, on day 28 of the month"
  ]);

  return (
    <section>
      <h2>Cron</h2>
      {cron.map((expression, key) => (
        <Cron key={key} expression={expression} />
      ))}
    </section>
  );
}

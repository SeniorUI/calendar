import Calendar from "./calendar/Calendar.tsx";
import SelectDate from "./selectDate/SelectDate.tsx";
import { useState } from "react";

export default function Datepicker() {
  const [isFullCalendarView, setFullCalendarView] = useState(false);

  return (
    <main className="h-auto w-64 select-none overflow-hidden rounded-lg bg-neutral-900 p-2 shadow-lg">
      {isFullCalendarView ? <Calendar /> : <SelectDate onChangeCalendarView={setFullCalendarView} />}
    </main>
  );
}

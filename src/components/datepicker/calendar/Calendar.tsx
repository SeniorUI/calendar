import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isBefore,
  isFirstDayOfMonth,
  isLastDayOfMonth,
  startOfMonth,
  startOfToday,
  subMonths,
} from "date-fns";
import { clsx } from "clsx";
import wrap from "../_wrap.ts";

const months = eachDayOfInterval({
  start: subMonths(startOfMonth(startOfToday()), 3),
  end: addMonths(endOfMonth(startOfToday()), 3),
});

type DayProps = {
  date: Date;
};

function Day({ date }: DayProps) {
  const formattedDate = format(date, "d");

  return (
    <div
      className={clsx(
        ["h-full w-full border-zinc-500"],
        [isLastDayOfMonth(date) && getDay(date) !== 0 && "border-r"],
        [isFirstDayOfMonth(date) && `col-start-${wrap(1, 8, getDay(date))}`],
        [+formattedDate <= 7 && "border-t"],
      )}
    >
      <div
        className={clsx(
          "flex h-full w-full flex-col items-center justify-center rounded p-2 hover:bg-blue-500 hover:bg-opacity-60",
          [isBefore(date, startOfToday()) && "text-zinc-500"],
          [+formattedDate <= 7 && "py-0"],
        )}
      >
        {isFirstDayOfMonth(date) && <span className="text-xs text-zinc-400">{format(date, "MMM")}</span>}
        <span>{formattedDate}</span>
      </div>
    </div>
  );
}

export default function Calendar() {
  return (
    <div className="relative max-h-72 overflow-scroll text-sm">
      <div className="sticky top-0 z-10 grid w-full grid-cols-7 place-items-center bg-neutral-900 pb-1 text-zinc-500 shadow-lg">
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
        <div>Sun</div>
      </div>

      <div className="grid grid-cols-7 place-items-center">
        {months.map((date) => (
          <Day date={date} />
        ))}
      </div>
    </div>
  );
}

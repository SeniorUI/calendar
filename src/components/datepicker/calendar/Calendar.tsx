import {
  addMonths,
  addYears,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isFirstDayOfMonth,
  isFriday,
  isMonday,
  isSameMonth,
  isSaturday,
  isSunday,
  isThursday,
  isTuesday,
  isWednesday,
  startOfMonth,
  startOfToday,
  startOfWeek,
  subMonths,
  subYears,
} from "date-fns";
import Label from "./Label.tsx";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/20/solid";
import { clsx } from "clsx";
import { MouseEventHandler, useEffect, useState } from "react";

const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState<Date>(startOfToday());

  const days = eachDayOfInterval({
    start: startOfWeek(startOfMonth(currentDate)),
    end: endOfWeek(endOfMonth(currentDate)),
  });

  const handleNextMonth: MouseEventHandler<HTMLButtonElement> = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const handlePrevMonth: MouseEventHandler<HTMLButtonElement> = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const handleNextYear: MouseEventHandler<HTMLButtonElement> = () => {
    setCurrentDate(addYears(currentDate, 1));
  };

  const handlePrevYear: MouseEventHandler<HTMLButtonElement> = () => {
    setCurrentDate(subYears(currentDate, 1));
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      event.stopPropagation();

      if (event.shiftKey && event.keyCode === 37) {
        setCurrentDate(subYears(currentDate, 1));
      } else if (event.shiftKey && event.keyCode === 39) {
        setCurrentDate(addYears(currentDate, 1));
      } else if (event.keyCode === 37) {
        setCurrentDate(subMonths(currentDate, 1));
      } else if (event.keyCode === 39) {
        setCurrentDate(addMonths(currentDate, 1));
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [currentDate]);

  return (
    <div>
      <div className="mb-4 flex items-center justify-between bg-neutral-900 py-1 text-zinc-500">
        <div className="flex space-x-1">
          <button onClick={handlePrevYear}>
            <ChevronDoubleLeftIcon className="h-5 w-5" />
          </button>
          <button onClick={handlePrevMonth}>
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
        </div>

        <h2 className="text-sm text-zinc-200">
          <span>{format(currentDate, "MMMM yyyy")}</span>
        </h2>

        <div className="flex space-x-1">
          <button onClick={handleNextMonth}>
            <ChevronRightIcon className="h-5 w-5" />
          </button>
          <button onClick={handleNextYear}>
            <ChevronDoubleRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      <ul className="grid-rows-calendar grid grid-cols-7 justify-items-center text-sm">
        {labels.map((label) => {
          return <Label label={label} />;
        })}

        {days.map((date: Date) => {
          return (
            <div
              className={clsx(
                "flex w-full flex-col items-center justify-center rounded-md px-1 py-2 hover:bg-blue-500 hover:bg-opacity-50",
                !isSameMonth(date, currentDate) && "text-zinc-500",
                isFirstDayOfMonth(date) && {
                  "col-start-1": isMonday(date),
                  "col-start-2": isTuesday(date),
                  "col-start-3": isWednesday(date),
                  "col-start-4": isThursday(date),
                  "col-start-5": isFriday(date),
                  "col-start-6": isSaturday(date),
                  "col-start-7": isSunday(date),
                },
              )}
            >
              {format(date, "d")}
            </div>
          );
        })}
      </ul>
    </div>
  );
}

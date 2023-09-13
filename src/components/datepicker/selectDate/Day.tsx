import { clsx } from "clsx";
import {
  format,
  isFriday,
  isMonday,
  isSaturday,
  isSunday,
  isThursday,
  isToday,
  isTuesday,
  isWednesday,
} from "date-fns";
import { StarIcon } from "@heroicons/react/20/solid";

type DayProps = {
  date: Date;
};

export default function Day({ date }: DayProps) {
  return (
    <time
      dateTime={format(date, "yyyy-MM-dd")}
      className={clsx(
        "flex w-full justify-center rounded-lg p-0.5 py-1.5",
        "hover:cursor-pointer hover:bg-blue-400 hover:bg-opacity-60",
        isToday(date) && "hover:bg-transparent",
        isToday(date) && {
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
      {isToday(date) ? <StarIcon className="h-4 w-4 text-zinc-500" /> : <span>{format(date, "d")}</span>}
    </time>
  );
}

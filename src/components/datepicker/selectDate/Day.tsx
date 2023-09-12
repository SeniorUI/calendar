import { clsx } from "clsx";
import { format, getDay, isToday, startOfToday } from "date-fns";
import { StarIcon } from "@heroicons/react/20/solid";
import wrap from "../_wrap.ts";

type DayProps = {
  date: Date;
};

export default function Day({ date }: DayProps) {
  return (
    <div
      className={clsx(
        [
          "flex w-full justify-center rounded-lg p-0.5 py-1.5",
          "hover:cursor-pointer hover:bg-blue-400 hover:bg-opacity-60",
        ],
        [isToday(date) && `hover:bg-transparent col-start-${wrap(1, 8, getDay(startOfToday()))}`],
      )}
    >
      {isToday(date) ? <StarIcon className="h-4 w-4 text-zinc-500" /> : <span>{format(date, "d")}</span>}
    </div>
  );
}

import { ArchiveBoxIcon, ChevronRightIcon, MoonIcon, PlusIcon, StarIcon } from "@heroicons/react/20/solid";
import Label from "./Label.tsx";
import Day from "./Day.tsx";
import { startOfToday } from "date-fns";
import getDaysFrom from "./_getDaysFrom.ts";

const days = getDaysFrom(startOfToday());
const labels = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

export default function SelectDate() {
  return (
    <div>
      <h2 className="mb-2 text-center text-sm">Select date</h2>

      <ul className="mb-2 flex flex-col space-y-0.5 text-sm">
        <li className="flex items-center space-x-1 rounded p-0.5 hover:cursor-pointer hover:bg-blue-500">
          <StarIcon className="h-4 w-4 text-yellow-300" />
          <span>Today</span>
        </li>
        <li className="flex items-center space-x-1 rounded p-0.5 hover:cursor-pointer hover:bg-blue-500">
          <MoonIcon className="h-4 w-4 text-sky-200" />
          <span>This Evening</span>
        </li>
      </ul>

      <section className="grid grid-cols-7 place-items-center text-sm">
        {labels.map((label) => (
          <Label label={label} />
        ))}

        {days.map((date) => (
          <Day date={date} />
        ))}

        <button className="flex w-full items-center justify-center rounded-lg p-0.5 py-1.5 hover:bg-blue-400 hover:bg-opacity-60">
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </section>

      <ul className="mb-2 flex flex-col space-y-0.5 text-sm">
        <li className="flex items-center space-x-1 rounded p-0.5 hover:cursor-pointer hover:bg-blue-500">
          <ArchiveBoxIcon className="h-4 w-4 text-orange-100" />
          <span>Someday</span>
        </li>

        <li className="group flex items-center space-x-1 rounded p-0.5 hover:cursor-pointer hover:bg-blue-500">
          <PlusIcon className="h-5 w-5 text-zinc-500 group-hover:text-white" />
          <span className="text-zinc-500 group-hover:text-white">Add Reminder</span>
        </li>
      </ul>
    </div>
  );
}

import { addDays, eachDayOfInterval, getDay } from "date-fns";
import wrap from "../_wrap.ts";

export default function getDaysFrom(startDay: Date): Date[] {
  return eachDayOfInterval({
    start: startDay,
    end: addDays(startDay, 27 - wrap(1, 8, getDay(startDay))),
  });
}

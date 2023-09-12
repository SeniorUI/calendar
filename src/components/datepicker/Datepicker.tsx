import { setDefaultOptions } from "date-fns";
import { enUS } from "date-fns/locale";
import SelectDate from "./selectDate/SelectDate.tsx";

setDefaultOptions({
  locale: enUS,
  weekStartsOn: 1,
});

export default function Datepicker() {
  return (
    <main className="h-auto w-64 select-none overflow-hidden rounded-lg bg-neutral-900 p-2 shadow-lg">
      <SelectDate />
    </main>
  );
}

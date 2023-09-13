import SelectDate from "./selectDate/SelectDate.tsx";

export default function Datepicker() {
  return (
    <main className="h-auto w-64 select-none overflow-hidden rounded-lg bg-neutral-900 p-2 shadow-lg">
      <SelectDate />
    </main>
  );
}

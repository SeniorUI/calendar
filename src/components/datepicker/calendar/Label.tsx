type LabelProps = {
  label: string;
};

export default function Label({ label }: LabelProps) {
  return <div className="row-start-1 text-sm font-medium text-zinc-500">{label}</div>;
}

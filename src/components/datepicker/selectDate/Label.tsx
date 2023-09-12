type LabelProps = {
  label: string;
};

export default function Label({ label }: LabelProps) {
  return <div className="text-zinc-500">{label}</div>;
}

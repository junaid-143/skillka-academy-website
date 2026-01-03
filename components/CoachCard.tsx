type Props = {
  name: string;
  title?: string;
};

export default function CoachCard({ name, title }: Props) {
  return (
    <div className="border-2 border-support rounded-lg p-4 shadow-sm hover:border-accent hover:shadow-md transition-all bg-white">
      <h3 className="font-semibold text-base text-support">{name}</h3>
      {title && <p className="text-sm mt-2 text-black/70">{title}</p>}
    </div>
  );
}

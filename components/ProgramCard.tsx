type Props = {
  title: string;
  description?: string;
};

export default function ProgramCard({ title, description }: Props) {
  return (
    <div className="border-2 border-support rounded-lg p-4 shadow-sm hover:border-accent hover:shadow-md transition-all bg-white">
      <h3 className="font-semibold text-base text-support">{title}</h3>
      {description && <p className="text-sm mt-2 text-black/70">{description}</p>}
    </div>
  );
}

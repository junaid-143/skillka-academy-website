type Props = {
  title: string;
};

export default function GalleryCard({ title }: Props) {
  return (
    <div className="border border-support rounded-lg p-2">
      <div className="bg-secondary/30 h-40 rounded" />
      <p className="text-sm mt-2">{title}</p>
    </div>
  );
}

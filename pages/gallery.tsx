import type { GetServerSideProps } from 'next';
import { useState } from 'react';

type Image = { title: string; url: string; event?: string; date?: string };
type Props = { images: Image[] };

export default function Gallery({ images }: Props) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Image | null>(null);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-accent via-support to-support text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 chess-pattern opacity-20"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <div className="text-6xl mb-4">📸</div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-xl text-white/80">Moments from our chess journey</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-primary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((img, i) => (
              <button
                key={img.url}
                onClick={() => {
                  setSelected(img);
                  setOpen(true);
                }}
                className="card-hover group relative overflow-hidden rounded-2xl shadow-lg border-2 border-support"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="aspect-square bg-gradient-to-br from-secondary to-primary relative">
                  <img 
                    src={img.url} 
                    alt={img.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div className="text-white">
                      <p className="font-semibold text-sm">{img.title}</p>
                      {img.event && <p className="text-xs text-accent">{img.event}</p>}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {open && selected && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setOpen(false)}
        >
          <div 
            className="max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl animate-slide-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img 
                src={selected.url} 
                alt={selected.title}
                className="w-full h-auto max-h-[70vh] object-contain bg-gray-100"
              />
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition"
              >
                ✕
              </button>
            </div>
            <div className="p-6 border-t-4 border-accent">
              <h3 className="text-2xl font-bold text-blue-700 mb-2">{selected.title}</h3>
              {selected.event && (
                <p className="text-accent font-semibold mb-1">📍 {selected.event}</p>
              )}
              {selected.date && (
                <p className="text-gray-500 text-sm">📅 {new Date(selected.date).toLocaleDateString()}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ req }) => {
  const proto = (req.headers['x-forwarded-proto'] as string) || 'http';
  const host = req.headers.host;
  const url = `${proto}://${host}/api/gallery`;
  const res = await fetch(url);
  const data = await res.json();
  return { props: { images: data.images || [] } };
};

import { FormEvent, useState } from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import Card from '../ui/Card';

export default function GalleryUploader() {
  const [status, setStatus] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  async function uploadImage(file: File): Promise<string> {
    const form = new FormData();
    form.append('file', file);
    const res = await fetch('/api/admin/upload', { method: 'POST', body: form });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Upload failed');
    return data.url;
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);
    setUploading(true);
    const form = new FormData(e.currentTarget);
    try {
      const file = form.get('image') as File;
      if (!file || file.size === 0) throw new Error('Image required');
      const url = await uploadImage(file);
      const payload = {
        title: form.get('title'),
        url,
        event: form.get('event'),
        date: form.get('date') ? new Date(form.get('date') as string) : undefined
      };
      const res = await fetch('/api/admin/gallery', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed');
      setStatus('Image uploaded!');
      e.currentTarget.reset();
      setPreview(null);
    } catch (err: any) {
      setStatus(err.message || 'Something went wrong');
    } finally {
      setUploading(false);
    }
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  }

  return (
    <Card>
      <form className="grid gap-3" onSubmit={onSubmit}>
        <Input label="Image Title" name="title" required />
        <Input label="Event Name (optional)" name="event" placeholder="e.g., Training / Tournament" />
        <Input label="Date (optional)" name="date" type="date" />
        <label className="grid gap-1 text-sm">
          <span className="font-medium">Image *</span>
          <input type="file" name="image" accept="image/*" className="text-sm" onChange={handleFileChange} required />
        </label>
        {preview && <img src={preview} alt="Preview" className="w-full max-w-xs rounded" />}
        {status && <div className="text-sm p-3 rounded bg-primary/20 text-black border border-primary">{status}</div>}
        <Button type="submit" disabled={uploading}>{uploading ? 'Uploading...' : 'Upload Image'}</Button>
      </form>
    </Card>
  );
}

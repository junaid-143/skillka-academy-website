import { FormEvent, useState } from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import Card from '../ui/Card';

export default function AchievementUploader() {
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
      let imageUrl = '';
      const file = form.get('image') as File;
      if (file && file.size > 0) {
        imageUrl = await uploadImage(file);
      }
      const payload = {
        studentName: form.get('studentName'),
        title: form.get('title'),
        description: form.get('description'),
        imageUrl: imageUrl || undefined
      };
      const res = await fetch('/api/admin/achievements', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed');
      setStatus('Achievement created!');
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
        <Input label="Student Name" name="studentName" required />
        <Input label="Achievement Title" name="title" required />
        <label className="grid gap-1 text-sm">
          <span className="font-medium">Description</span>
          <textarea className="min-h-[100px] w-full rounded border border-support p-3 focus:outline-none focus:ring-2 focus:ring-support" name="description" />
        </label>
        <label className="grid gap-1 text-sm">
          <span className="font-medium">Image (optional)</span>
          <input type="file" name="image" accept="image/*" className="text-sm" onChange={handleFileChange} />
        </label>
        {preview && <img src={preview} alt="Preview" className="w-full max-w-xs rounded" />}
        {status && <div className="text-sm p-3 rounded bg-primary/20 text-black border border-primary">{status}</div>}
        <Button type="submit" disabled={uploading}>{uploading ? 'Uploading...' : 'Create Achievement'}</Button>
      </form>
    </Card>
  );
}

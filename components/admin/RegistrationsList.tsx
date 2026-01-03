import { useEffect, useState } from 'react';
import Card from '../ui/Card';

type Registration = {
  _id: string;
  name: string;
  chessLevel: string;
  age: number;
  availableTime: string;
  batch: string;
  isClubMember: boolean;
  createdAt: string;
  processed?: boolean;
};

export default function RegistrationsList() {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/admin/registrations')
      .then((r) => r.json())
      .then((d) => {
        setRegistrations(d.registrations || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-sm">Loading...</p>;

  return (
    <div className="grid gap-3">
      {registrations.map((r) => (
        <Card key={r._id}>
          <div className="grid gap-1 text-sm">
            <p className="font-semibold">{r.name}</p>
            <p>Level: {r.chessLevel} • Age: {r.age}</p>
            <p>Time: {r.availableTime}</p>
            <p>Batch: {r.batch}</p>
            <p>Club Member: {r.isClubMember ? 'Yes' : 'No'}</p>
            <p className="text-xs text-black/60">Registered: {new Date(r.createdAt).toLocaleString()}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}

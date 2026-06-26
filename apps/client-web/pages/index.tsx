import Header from '../components/Header';
import LocationCard from '../components/LocationCard';
import api from '../lib/api';
import { useEffect, useState } from 'react';

export default function Home() {
  const [locations, setLocations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    api.get('/locations')
      .then(r => {
        if (mounted) setLocations(r.data || []);
      })
      .catch(() => {
        // ignore
      })
      .finally(() => mounted && setLoading(false));
    return () => { mounted = false; };
  }, []);

  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto p-4">
        <section>
          <h1 className="text-2xl font-bold mb-4">Discover</h1>
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-44 bg-white rounded-md animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {locations.map(loc => <LocationCard key={loc.id || loc._id || Math.random()} location={loc} />)}
            </div>
          )}
        </section>
      </main>
    </>
  );
}

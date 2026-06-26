export default function LocationCard({ location }: { location: any }) {
  return (
    <article className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="h-44 w-full bg-gray-100 flex items-center justify-center overflow-hidden">
        {location.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={location.image} alt={location.name} className="object-cover w-full h-full" />
        ) : (
          <div className="text-sm text-gray-400">No image</div>
        )}
      </div>
      <div className="p-3">
        <h3 className="text-lg font-semibold">{location.name}</h3>
        <p className="text-sm text-gray-500 mt-1">{location.country}</p>
      </div>
    </article>
  );
}

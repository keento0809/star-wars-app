export function LoadingSpinner() {
  return (
    <div className="animate-pulse p-4 border rounded">
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
      {[1, 2, 3].map((n) => (
        <div key={n} className="space-y-3 mb-4">
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
      ))}
    </div>
  );
}

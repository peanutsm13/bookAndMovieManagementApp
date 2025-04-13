// ResultList.tsx
type ResultItem = {
  id: number | string;
  title: string;
  authorOrDirector: string;
  rating: number;
  image: string;
};

type Props = {
  results: ResultItem[];
};
export default function ResultList({ results }: { results: any[] }) {
  return (
    <div className="flex overflow-x-auto space-x-4 mt-6 pb-4">
      {results.map((item) => (
        <div
          key={item.id}
          className="flex-none w-40 bg-white p-4 rounded shadow"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-52 object-cover mb-2"
          />
          <h2 className="text-base font-semibold">{item.title}</h2>
          <p className="text-sm text-gray-600">{item.authorOrDirector}</p>
          <p className="text-sm text-yellow-500">⭐ {item.rating}</p>
        </div>
      ))}
    </div>
  );
}

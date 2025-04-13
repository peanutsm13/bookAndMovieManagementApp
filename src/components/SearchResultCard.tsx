// src/components/SearchResultCard.tsx
import { Item } from "../types/Item";

export default function SearchResultCard({ item }: { item: Item }) {
  return (
    <div className="flex gap-4 p-4 border rounded shadow-sm bg-white">
      <img
        src={item.image}
        alt={item.title}
        className="w-20 h-28 object-cover rounded"
      />
      <div className="flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="text-sm text-gray-600">
            {item.type === "movie" ? "監督" : "著者"}: {item.authorOrDirector}
          </p>
        </div>
        <p className="text-yellow-500 mt-1">{"★".repeat(item.rating)}</p>
      </div>
    </div>
  );
}

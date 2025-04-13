// src/pages/Search.tsx
import { useState } from "react";

type Item = {
  id: number;
  type: "movie" | "book";
  title: string;
  authorOrDirector: string;
};

const sampleData: Item[] = [
  {
    id: 1,
    type: "movie",
    title: "Inception",
    authorOrDirector: "Christopher Nolan",
  },
  {
    id: 2,
    type: "book",
    title: "The Great Gatsby",
    authorOrDirector: "F. Scott Fitzgerald",
  },
  {
    id: 3,
    type: "movie",
    title: "Spirited Away",
    authorOrDirector: "Hayao Miyazaki",
  },
  {
    id: 4,
    type: "book",
    title: "Norwegian Wood",
    authorOrDirector: "Haruki Murakami",
  },
];

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Item[]>([]);

  const handleSearch = () => {
    const filtered = sampleData.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">映画・書籍検索</h1>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="タイトルで検索..."
        className="w-full p-2 border border-gray-300 rounded mb-2"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        検索
      </button>

      <ul className="mt-6 space-y-2">
        {results.map((item) => (
          <li key={item.id} className="p-4 border rounded shadow-sm bg-white">
            <p className="font-bold">
              [{item.type === "movie" ? "🎬映画" : "📚書籍"}] {item.title}
            </p>
            <p className="text-gray-600">
              {item.type === "movie" ? "監督" : "著者"}: {item.authorOrDirector}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

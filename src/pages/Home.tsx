import { useState } from "react";

const dummyMovies = [
  {
    id: 1,
    title: "Inception",
    authorOrDirector: "Christopher Nolan",
    rating: 4.8,
    image: "https://via.placeholder.com/150x220?text=Inception",
  },
  {
    id: 2,
    title: "The Matrix",
    authorOrDirector: "Wachowski Sisters",
    rating: 4.7,
    image: "https://via.placeholder.com/150x220?text=Matrix",
  },
];

const dummyBooks = [
  {
    id: 1,
    title: "The Great Gatsby",
    authorOrDirector: "F. Scott Fitzgerald",
    rating: 4.5,
    image: "https://via.placeholder.com/150x220?text=Gatsby",
  },
  {
    id: 2,
    title: "1984",
    authorOrDirector: "George Orwell",
    rating: 4.6,
    image: "https://via.placeholder.com/150x220?text=1984",
  },
];

export default function Home() {
  const [tab, setTab] = useState<"movie" | "book">("movie");
  const [query, setQuery] = useState("");

  const data = tab === "movie" ? dummyMovies : dummyBooks;
  const filtered = data.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">映画・書籍管理アプリ</h1>
      {/* タブ */}
      <div className="flex justify-center mb-6 space-x-2">
        <button
          className={`px-6 py-2 rounded-t-xl font-bold transition ${
            tab === "movie"
              ? "bg-white text-blue-600 shadow"
              : "bg-gray-200 text-gray-600"
          }`}
          onClick={() => setTab("movie")}
        >
          🎬 映画
        </button>
        <button
          className={`px-6 py-2 rounded-t-xl font-bold transition ${
            tab === "book"
              ? "bg-white text-blue-600 shadow"
              : "bg-gray-200 text-gray-600"
          }`}
          onClick={() => setTab("book")}
        >
          📚 本
        </button>
      </div>

      {/* 検索バー */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          className="w-full max-w-lg px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder={tab === "movie" ? "映画を検索..." : "本を検索..."}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* 結果 */}
      <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.authorOrDirector}</p>
              <div className="text-yellow-500">⭐️ {item.rating}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

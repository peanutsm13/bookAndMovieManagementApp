import { useState } from "react";
import SearchTabs from "../components/SearchTabs";
import SearchInput from "../components/SearchInput";
import ResultList from "../components/ResultList";

export default function Home() {
  const [tab, setTab] = useState<"movie" | "book">("movie");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const apiKey = "e8bdbf27";

  const handleSearch = async () => {
    if (!query.trim()) return;

    setLoading(true);

    try {
      if (tab === "movie") {
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(
            query
          )}&page=1`
        );
        const data = await res.json();
        if (data.Response === "True") {
          const movies = data.Search.map((item: any) => ({
            id: item.imdbID,
            title: item.Title,
            authorOrDirector: item.Director || "不明",
            rating: item.imdbRating || "N/A",
            image: item.Poster || "",
          }));
          setResults(movies);
        } else {
          setResults([]);
        }
      }

      if (tab === "book") {
        // 書籍APIなどをここに追加する（例：Google Books API）
        const res = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
            query
          )}`
        );
        const data = await res.json();

        if (data.items.length !== 0) {
          const books = data.items.map((item: any) => ({
            id: item.id,
            title: item.volumeInfo.title,
            authorOrDirector: item.volumeInfo.authors?.[0] || "不明",
            rating: item.volumeInfo.averageRating || 0,
            image: item.volumeInfo.imageLinks?.thumbnail || "",
          }));
          setResults(books);
        } else {
          setResults([]);
        }
      }
    } catch (err) {
      console.error("検索失敗:", err);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">映画・書籍管理アプリ</h1>

      <SearchTabs currentTab={tab} onTabChange={setTab} />
      <div className="flex items-center gap-2 mb-4">
        <div className="flex-1">
          <SearchInput
            query={query}
            onQueryChange={setQuery}
            placeholder={tab === "movie" ? "映画を検索..." : "本を検索..."}
          />
        </div>
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          検索
        </button>
      </div>
      {loading ? <p>検索中...</p> : <ResultList results={results} />}
    </div>
  );
}

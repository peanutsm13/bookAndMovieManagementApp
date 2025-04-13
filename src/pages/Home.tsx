import SearchTabs from "../components/SearchTabs";
import SearchInput from "../components/SearchInput";
import ResultList from "../components/ResultList";
import { useEffect, useState } from "react";

export default function Home() {
  const [tab, setTab] = useState<"movie" | "book">("movie");
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<any[]>([]); // 映画のデータ
  const [books, setBooks] = useState<any[]>([]); // 書籍のデータ
  const [loading, setLoading] = useState(true); // ローディング状態
  const [error, setError] = useState<string | null>(null); // エラーメッセージ

  const apiKey = "e8bdbf27";

  // APIから映画データを取得する
  const fetchMovies = async (searchQuery: string) => {
    setLoading(true); // ローディング開始
    try {
      const response = await fetch(
        `const url = https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(
          query
        )}&language=ja`
      );
      const data = await response.json();
      setMovies(data); // データをセット
    } catch (err) {
      setError("映画データの取得に失敗しました");
    } finally {
      setLoading(false); // ローディング終了
    }
  };

  // APIから書籍データを取得する
  const fetchBooks = async (query: string) => {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
        query
      )}`
    );
    const data = await response.json();

    const books =
      data.items?.map((item: any) => ({
        id: item.id,
        title: item.volumeInfo.title,
        authorOrDirector: item.volumeInfo.authors?.[0] || "不明",
        rating: item.volumeInfo.averageRating || 0,
        image:
          item.volumeInfo.imageLinks?.thumbnail ||
          "https://via.placeholder.com/150x220?text=No+Image",
      })) || [];

    setBooks(books);
  };

  // 初回レンダリング時にデータを取得
  useEffect(() => {
    fetchMovies(query); // 初期検索クエリで映画データを取得
    if (tab === "book" && query.trim() !== "") {
      fetchBooks(query);
    } // 初期検索クエリで書籍データを取得
  }, [tab, query]);

  // タブ切り替え時にデータを取得
  useEffect(() => {
    if (tab === "movie") {
      fetchMovies(query);
    } else {
      fetchBooks(query);
    }
  }, [tab, query]);

  // タブに応じたデータの取得
  const data = tab === "movie" ? movies : books;

  // 検索結果をフィルタリング
  // const filtered = data.filter((item) =>
  //   item.title.toLowerCase().includes(query.toLowerCase())
  // );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">映画・書籍管理アプリ</h1>

      {/* タブ切り替え */}
      <SearchTabs currentTab={tab} onTabChange={setTab} />

      {/* 検索バー */}
      <SearchInput
        query={query}
        onQueryChange={setQuery}
        placeholder={tab === "movie" ? "映画を検索..." : "本を検索..."}
      />

      {/* ローディング中の表示 */}
      {loading && <p>Loading...</p>}

      {/* エラーメッセージ */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* 結果リストの表示 */}
      <ResultList results={data} />
    </div>
  );
}

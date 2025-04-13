import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddMovie() {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log({ title, genre, rating });
    // 保存処理はここに追加
    navigate("/");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">映画追加</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-sm">
        <input
          type="text"
          placeholder="タイトル"
          className="border p-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="ジャンル"
          className="border p-2 rounded"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="評価 (1〜5)"
          className="border p-2 rounded"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          min="1"
          max="5"
          required
        />
        <button type="submit" className="bg-green-500 text-white py-2 rounded">
          追加
        </button>
      </form>
    </div>
  );
}

export default AddMovie;

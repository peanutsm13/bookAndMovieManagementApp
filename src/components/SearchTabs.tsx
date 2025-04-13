import React from "react";

type Props = {
  currentTab: "movie" | "book";
  onTabChange: (tab: "movie" | "book") => void;
};

export default function SearchTabs({ currentTab, onTabChange }: Props) {
  return (
    <div className="flex justify-center mb-6 space-x-2">
      <button
        className={`px-6 py-2 rounded-t-xl font-bold transition ${
          currentTab === "movie"
            ? "bg-white text-blue-600 shadow"
            : "bg-gray-200 text-gray-600"
        }`}
        onClick={() => onTabChange("movie")}
      >
        🎬 映画
      </button>
      <button
        className={`px-6 py-2 rounded-t-xl font-bold transition ${
          currentTab === "book"
            ? "bg-white text-blue-600 shadow"
            : "bg-gray-200 text-gray-600"
        }`}
        onClick={() => onTabChange("book")}
      >
        📚 本
      </button>
    </div>
  );
}

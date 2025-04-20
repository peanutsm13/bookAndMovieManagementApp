import React from "react";
import "../css/SearchTabs.css"; // ここでCSSをインポート

type TabType = "movie" | "book" | "mypage";
type Props = {
  currentTab: TabType;
  onTabChange: (tab: TabType) => void;
};

export default function SearchTabs({ currentTab, onTabChange }: Props) {
  return (
    <div className="tabs-container">
      <button
        className={`tab-button ${currentTab === "movie" ? "active" : ""}`}
        onClick={() => onTabChange("movie")}
      >
        🎬 映画
      </button>
      <button
        className={`tab-button ${currentTab === "book" ? "active" : ""}`}
        onClick={() => onTabChange("book")}
      >
        📚 本
      </button>
      <button
        className={`tab-button ${currentTab === "mypage" ? "active" : ""}`}
        onClick={() => onTabChange("mypage")}
      >
        🏠 マイページ
      </button>
    </div>
  );
}

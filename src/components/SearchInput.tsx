import React from "react";
import "../css/styles.css"; // CSSファイルをインポート

type Props = {
  query: string;
  placeholder: string;
  onQueryChange: (q: string) => void;
};

export default function SearchInput({
  query,
  placeholder,
  onQueryChange,
}: Props) {
  return (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder={placeholder}
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
      />
    </div>
  );
}

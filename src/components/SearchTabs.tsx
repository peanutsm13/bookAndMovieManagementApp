// src/components/SearchTabs.tsx
type Props = {
  activeTab: "movie" | "book";
  onChange: (tab: "movie" | "book") => void;
};

export default function SearchTabs({ activeTab, onChange }: Props) {
  return (
    <div className="flex mb-4 border-b">
      {["movie", "book"].map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab as "movie" | "book")}
          className={`flex-1 py-2 px-4 text-center ${
            activeTab === tab
              ? "border-b-2 border-blue-500 font-bold"
              : "text-gray-500"
          }`}
        >
          {tab === "movie" ? "映画" : "書籍"}
        </button>
      ))}
    </div>
  );
}

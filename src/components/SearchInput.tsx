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
    <div className="flex justify-center mb-6">
      <input
        type="text"
        className="w-full max-w-lg px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder={placeholder}
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
      />
    </div>
  );
}

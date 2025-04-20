type BookCardProps = {
  title: string;
  genre: string;
};

export const BookCard = ({ title, genre }: BookCardProps) => {
  return (
    <div className="border p-4 mb-2 rounded-lg shadow-md">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-500">{genre}</p>
    </div>
  );
};

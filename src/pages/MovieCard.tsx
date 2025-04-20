import React from "react";

type MovieCardProps = {
  title: string;
  genre: string;
};

export const MovieCard: React.FC<MovieCardProps> = ({ title, genre }) => {
  return (
    <div className="border p-4 mb-2 rounded-lg shadow-md">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-500">{genre}</p>
    </div>
  );
};

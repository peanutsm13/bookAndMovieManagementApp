import React from "react";

type Props = {
  id: number;
  title: string;
  authorOrDirector: string;
  rating: number;
  image: string;
};

export default function ResultCard({
  title,
  authorOrDirector,
  rating,
  image,
}: Props) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-gray-600">{authorOrDirector}</p>
        <div className="text-yellow-500">⭐️ {rating}</div>
      </div>
    </div>
  );
}

import React from "react";
import "../css/styles.css";

type MovieCardProps = {
  title: string;
  genre: string;
};

export const MovieCard: React.FC<MovieCardProps> = ({ title, genre }) => {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <p className="card-genre">{genre}</p>
    </div>
  );
};

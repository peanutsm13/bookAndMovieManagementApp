import React from "react";
import { MovieCard } from "./MovieCard";
import { BookCard } from "./BookCard";
import "../css/styles.css"; // 作成したCSSファイルをインポート

const MyPage = () => {
  const movies = [{ title: "Inception", genre: "Sci-Fi" }];
  const books = [{ title: "1984", genre: "Dystopian" }];

  return (
    <div className="my-page-container">
      <div className="movie-section">
        <h2>Movies</h2>
        {movies.map((movie, index) => (
          <MovieCard key={index} title={movie.title} genre={movie.genre} />
        ))}
      </div>

      <div className="book-section">
        <h2>Books</h2>
        {books.map((book, index) => (
          <BookCard key={index} title={book.title} genre={book.genre} />
        ))}
      </div>
    </div>
  );
};

export default MyPage;

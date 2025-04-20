import { MovieCard } from "./MovieCard";
import { BookCard } from "./BookCard";

const MyPage = () => {
  const movies = [{ title: "Inception", genre: "Sci-Fi" }];
  const books = [{ title: "1984", genre: "Dystopian" }];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">My Page</h1>

      <div className="mb-6">
        <h2 className="text-2xl mb-2">Movies</h2>
        {movies.map((movie, index) => (
          <MovieCard key={index} title={movie.title} genre={movie.genre} />
        ))}
      </div>

      <div>
        <h2 className="text-2xl mb-2">Books</h2>
        {books.map((book, index) => (
          <BookCard key={index} title={book.title} genre={book.genre} />
        ))}
      </div>
    </div>
  );
};

export default MyPage;

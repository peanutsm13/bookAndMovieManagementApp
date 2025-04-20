import "../css/styles.css";

type BookCardProps = {
  title: string;
  genre: string;
};

export const BookCard = ({ title, genre }: BookCardProps) => (
  <div className="card">
    <h3 className="card-title">{title}</h3>
    <p className="card-genre">{genre}</p>
  </div>
);

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">
        My Movie & Book Manager
      </h1>
      <div className="grid gap-6 sm:grid-cols-2">
        <Link
          to="/movies"
          className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition duration-300"
        >
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            映画を管理する
          </h2>
          <p className="text-gray-500">観たい映画や観た映画を記録しよう</p>
        </Link>
        <Link
          to="/books"
          className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition duration-300"
        >
          <h2 className="text-2xl font-semibold text-green-600 mb-2">
            本を管理する
          </h2>
          <p className="text-gray-500">読みたい本や読んだ本を記録しよう</p>
        </Link>
      </div>
    </div>
  );
}

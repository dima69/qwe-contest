import type { NextPage } from "next";
import Head from "next/head";


const Leaderboard: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Leaderboards</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-gray-50">
        <div className="flex text-3xl max-w-3xl justify-between mx-auto">
          <a
            className="text-blue-500 hover:bg-green-50 py-2 px-5 rounded-md hover:shadow-md hover:text-green-600"
            href="/"
          >
            Face-to-face
          </a>
          <a
            className="text-blue-500 hover:bg-pink-50 py-2 px-5 rounded-md hover:shadow-md hover:text-pink-600"
            href="/individual"
          >
            Individual
          </a>
          <a
            className="text-blue-500 hover:bg-yellow-50 py-2 px-5 rounded-md hover:shadow-md hover:text-yellow-600"
            href="/leaderboard"
          >
            Leaderboard
          </a>
        </div>
      </header>

      <main>
        <span className="text-center">Leaderboard page</span>
      </main>

      <footer className="flex items-center justify-center w-full h-10 bg-gray-200">
        <span>@@@footer text with icon</span>
      </footer>
    </div>
  );
};

export default Leaderboard;

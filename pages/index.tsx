import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex items-center w-full justify-center text-3xl bg-gray-50">
        <a
          className="text-blue-500 hover:bg-green-50 py-2 px-5 md:px-20 rounded-md hover:shadow-md hover:text-green-600"
          href="/"
        >
          Go
        </a>
        <a
          className="text-blue-500 hover:bg-pink-50 py-2 px-5 md:px-20 rounded-md hover:shadow-md hover:text-pink-600"
          href="/leaderboard"
        >
          Leaderboard
        </a>
        <a
          className="text-blue-500 hover:bg-yellow-50 py-2 px-5 md:px-20 rounded-md hover:shadow-md hover:text-yellow-600"
          href="history"
        >
          History
        </a>
      </header>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <div>first</div>
          <div>
            <span>VS.</span>
          </div>
          <div>second</div>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-10 bg-gray-200">
        <span>@@@footer text with icon</span>
      </footer>
    </div>
  );
};

export default Home;

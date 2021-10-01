import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* max width and items between and center */}
      <header className="bg-gray-50">
        <div className="flex text-3xl max-w-3xl justify-between mx-auto">
          <a
            className="text-blue-500 hover:bg-green-50 py-2 px-5 rounded-md hover:shadow-md hover:text-green-600"
            href="/"
          >
            Go
          </a>
          <a
            className="text-blue-500 hover:bg-pink-50 py-2 px-5 rounded-md hover:shadow-md hover:text-pink-600"
            href="/leaderboard"
          >
            Leaderboard
          </a>
          <a
            className="text-blue-500 hover:bg-yellow-50 py-2 px-5 rounded-md hover:shadow-md hover:text-yellow-600"
            href="history"
          >
            History
          </a>
        </div>
      </header>

      <main>
        {/* <div className="flex flex-wrap max-w-7xl mx-auto">
          <div className="relative min-w-max w-1/2 h-96">
            <Image src="/me.jpg" layout="fill" objectFit="scale-down" />
          </div>
          <div className="relative min-w-max w-1/2 h-96">
            <Image src="/me1.jpg" layout="fill" objectFit="scale-down" />
          </div>
        </div> */}
        <div className="grid grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-1">
          <div className="relative h-96 min-w-full my-2">
            <Image src="/me.jpg" layout="fill" objectFit="scale-down" className="hover:brightness-95 hover:cursor-pointer" />
          </div>
          <div className="relative h-96 min-w-full my-2">
            <Image src="/me1.jpg" layout="fill" objectFit="scale-down" className="hover:brightness-95 hover:cursor-pointer" />
          </div>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-10 bg-gray-200">
        <span>@@@footer text with icon</span>
      </footer>
    </div>
  );
};

export default Home;

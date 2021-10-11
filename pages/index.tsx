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
      <main className="h-full">
        <div className="flex flex-wrap justify-evenly items-center h-full">
          <div className="m-2 flex-1-1-576 max-w-2xl">
            <img src="/me.jpg" alt="" className="hover:brightness-95 max-h-screen" />
            <a className="text-blue-400" href="/">open original</a>
          </div>
          <div className="m-2 flex-1-1-576 max-w-2xl">
            <img src="/me3.jpeg" alt="" className="hover:brightness-95 max-h-screen" />
            <a className="text-blue-400 text-right" href="/me3.jpeg">open original</a>
          </div>
          {/* <div className="relative flex-1-1-300">
            <Image src="/me.jpg" layout="fill" objectFit="scale-down" />
          </div> */}
          {/* <div className="relative flex-1-1-300">
            <Image src="/me1.jpg" layout="fill" objectFit="scale-down" />
          </div> */}
        </div>
      </main>
    </div>
  );
};

export default Home;

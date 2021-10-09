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
    </div>
  );
};

export default Home;

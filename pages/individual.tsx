import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Individual: NextPage = () => {
  return (
    <>
      <Head>
        <title>Individual ratings</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <span className="text-center">Individual ratings page</span>
        <div className="grid grid-cols-3 max-w-max mx-auto gap-2">
          <img src="/me.jpg" alt="" className="hover:brightness-95 max-h-56" />
          <img src="/me.jpg" alt="" className="hover:brightness-95 max-h-56" />
          <img src="/me.jpg" alt="" className="hover:brightness-95 max-h-56" />
          <img src="/me.jpg" alt="" className="hover:brightness-95 max-h-56" />
        </div>
      </main>
    </>
  );
};

export default Individual;

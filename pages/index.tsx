import type { NextPage } from "next";
import Image from "next/image";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home: NextPage = () => {
  const { data, error } = useSWR<ContestantData[]>("/api/getPair", fetcher, {
    revalidateOnFocus: false,
  });
  if (error) return <div>failed to load {error}</div>;
  if (!data) return <div>loading...</div>;

  return (
    <main className="h-full">
      <div className="flex flex-wrap justify-evenly items-center h-full">
        {/* @@@ button? */}
        {data.map((item) => (
          <div
            className="flex-1 w-full min-w-[350px] max-w-[600px] m-1 border hover:brightness-90 bg-red-200 box-border cursor-pointer"
            key={item.user_id}
          >
            <Image
              src={item.image_url}
              layout="responsive"
              width={600}
              height={600}
              objectFit="cover"
              alt=""
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;

import type { NextPage } from "next";
import { useState } from "react";
import useSWR from "swr";
import PhotoGrid from "../components/PhotoGrid";
import PhotoFeedWithComments from "../components/PhotoFeedWithComments";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Feed: NextPage = () => {
  // const { data, error } = useSWR<PhotoData[]>("/api/getAllPosts", fetcher);
  const { data, error } = useSWR<PostData[]>("/api/getPostsWithComments", fetcher);


  // @@@ todo
  const [gridLayout, setGridLayout] = useState("columns");

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <main className="max-w-6xl mx-auto">
      <div className="my-2 ">
        <label className="bg-green-100 py-2 mx-2">
          <input
            type="radio"
            value="columns"
            checked={gridLayout === "columns"}
            onChange={() => setGridLayout("columns")}
          />
          columns
        </label>
        <label className="bg-green-100 py-2 mx-2">
          <input
            type="radio"
            value="rows"
            checked={gridLayout === "rows"}
            onChange={() => setGridLayout("rows")}
          />
          rows
        </label>
      </div>
      <PhotoFeedWithComments data={data} />
      {/* <PhotoGrid photos_list={data} layout_style={gridLayout} /> */}
    </main>
  );
};

export default Feed;

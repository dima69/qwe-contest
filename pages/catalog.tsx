import type { NextPage } from "next";
import { useState } from "react";
import useSWR from "swr";
import PhotoGrid from "../components/PhotoGrid";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Feed: NextPage = () => {
  const { data, error } = useSWR<PhotoData[]>("/api/getAllPosts", fetcher);

  // @@@ todo
  const [pageLayout, setPageLayout] = useState("columns");

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <main>
      <div className="my-2">
        <label className="bg-green-100 py-2 mx-2">
          <input
            type="radio"
            value="columns"
            checked={pageLayout === "columns"}
            onChange={() => setPageLayout("columns")}
          />
          columns
        </label>
        <label className="bg-green-100 py-2 mx-2">
          <input
            type="radio"
            value="rows"
            checked={pageLayout === "rows"}
            onChange={() => setPageLayout("rows")}
          />
          rows
        </label>
      </div>
      <PhotoGrid photos_list={data} />
    </main>
  );
};

export default Feed;

import type { NextPage } from "next";
import { useRouter } from "next/router";
import useSWR from "swr";
import PhotoGrid from "../../components/PhotoGrid";
import Image from "next/image";
import Link from "next/link";
import CommentsSection from "../../components/CommentsSection";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Item: NextPage = () => {
  const router = useRouter();
  const post_id = router.query.id as string;

  const { data: postData, error: postError } = useSWR<PostData>(
    `/api/getPost?user_id=${post_id}`,
    fetcher
  );
  const { data: allPosts, error: allPostsError } = useSWR<PhotoData[]>(
    "/api/getAllPosts",
    fetcher
  );
  if (!postData) return <>loading...</>;

  return (
    <div className="py-2">
      <div className="max-w-5xl mx-auto w-full box-content">
        <div className="">
          {/* @@@ change it to router go -1 */}
          <Link href="/catalog">
            <a className="hover:font-medium">
              <div className="flex py-2 hover:font-bold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                back to list
              </div>
            </a>
          </Link>
        </div>
        <div className="flex flex-row flex-wrap justify-center">
          <div className="w-full max-w-xl">
            <Image
              src={`/${post_id}.png`}
              width={500}
              height={500}
              layout="responsive"
              objectFit="cover"
              alt=""
            />
          </div>
          <div className="max-h-[400px] overflow-auto lg:max-h-[576px] w-full max-w-[448px]" key={post_id}>
            {postData ? (
              <CommentsSection comments={postData.comments} />
            ) : (
              <>loading...</>
            )}
          </div>
        </div>
      </div>

      {/* @@@ get photos with graphql */}
      {allPosts ? (
        <>
          <div className="py-2 my-2 " />
          <PhotoGrid photos_list={allPosts} />
        </>
      ) : null}
    </div>
  );
};

export default Item;

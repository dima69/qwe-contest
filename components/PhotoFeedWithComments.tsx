import Image from "next/image";
import Link from "next/link";
import CommentsSection from "./CommentsSection";

const Comments = ({ comments }: { comments: PostComment[] }) => {
  return (
    <div className="max-h-[400px] overflow-auto">
      {comments.map((comment) => (
        <div key={comment.comment_id}>
          <b>{comment.author}</b>
          {": "}
          <span>{comment.text}</span>
        </div>
      ))}
    </div>
  );
};

const PhotoFeedWithComments = ({ data }: { data: PostData[] }) => {
  return (
    <div className="grid-fuck gap-y-10">
      {data.map((post) => (
        <div key={post.photo_id} className="bg-red-100 grid-eba">
          <Link href={`/p/${post.photo_id}`}>
            <a className="bg-indigo-700">
              <Image
                src={post.image_url}
                width={500}
                height={500}
                alt=""
                layout="responsive"
                className="hover:brightness-90"
              />
            </a>
          </Link>
          <Comments comments={post.comments} />
        </div>
      ))}
    </div>
  );
};

export default PhotoFeedWithComments;

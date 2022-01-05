import { useEffect, useState } from "react";
import ButtonWithShadow from "./ButtonWithShadow";

const PostingForm = () => {
  return (
    <div className="">
      <div className="flex flex-col mt-2 mx-2">
        <input
          type="text"
          maxLength={6}
          placeholder="name, max 6 (not required)"
          className="outline-none px-2 py-1 border-black border-b-0 border-2"
        />
        <textarea
          rows={3}
          placeholder="Add a comment here..."
          className="outline-none px-2 py-1 border-black border-2"
        />
        <div className="flex justify-end">
          <ButtonWithShadow />
        </div>
      </div>
    </div>
  );
};

const CommentsSection = ({ comments }: { comments: PostComment[] }) => {
  const [showForm, setShowForm] = useState(false);


  return (
    <div className="flex flex-col break-words justify-between overflow-auto">
      {comments.length > 0 ? (
        <div className="mx-2">
          {comments.map((item: PostComment) => (
            <div
              className="flex font-medium max-w-sm my-1"
              key={item.comment_id}
            >
              <b className="min-w-[6ch] mr-2 text-right">{item.author}</b>{" "}
              <span>{item.text}</span>
            </div>
            // <div className="font-medium max-w-xs px-1 my-1" key={item.comment_id}>{item.author}: {item.text}</div>
          ))}
        </div>
      ) : (
        <span className="mx-2 mt-2 text-center">No comments yet...</span>
      )}
      {showForm ? (
        <PostingForm />
      ) : (
        <button
          className="text-gray-400 italic border-t hover:bg-gray-300"
          onClick={() => {
            setShowForm(true);
          }}
        >
          show posting form..
        </button>
      )}
    </div>
  );
};

export default CommentsSection;

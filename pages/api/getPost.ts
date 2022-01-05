// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PostData>
) {
  let { user_id } = req.query;
  const generated_comments = [];
  for (let index = 0; index < 20; index++) {
    let random_string_comment = Math.random().toString(36).substring(2, 10);
    let random_string_author = Math.random().toString(36).substring(2, 8)
    generated_comments.push({
      comment_id: index,
      author: random_string_author,
      text: random_string_comment,
    });
  }
  generated_comments.push({
    comment_id: 21,
    author: "anon56",
    text: "leoca in vitae turpiss massa sed elementum tempus egestas sed seds risuse pretiume quama vulputate dignissim suspendisse",
  });
  generated_comments.push({
    comment_id: 22,
    author: "antona",
    text: "leoca in vitae turpiss massa sed elementum tempus egestas sed seds risuse pretiume quama vulputate dignissim suspendisse",
  });
  res.status(200).json({
    pic_id: user_id as string,
    comments: generated_comments,
    average_score: 4.3,
    image_url: `/${user_id}.png`,
  });
}

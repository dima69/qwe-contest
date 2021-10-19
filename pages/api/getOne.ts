// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  pic_id: number,
  comments: string[],
  average_score: number,
  image_url: string,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    pic_id: 1,
    comments: ['good looking', 'handsome'],
    average_score: 4.3,
    image_url: 'me.jpg'
  })
};

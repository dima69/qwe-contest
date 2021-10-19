import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs';

type Data = {
  pic_id: number,
  comments: string[],
  average_score: number,
  image_url: string,
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data[]>) {
  const directory = './public/';
  let files_list = fs.readdirSync(directory);
  let response: Data[] = [];
  for (let index = 0; index < files_list.length; index++) {
    const filename = files_list[index];
    response.push({
      pic_id: index+1,
      comments: ['asd', 'qwe'],
      average_score: 4.3,
      image_url: filename,
    })
  }
  res.status(200).json(response)
};

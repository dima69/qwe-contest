import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs';

export default function handler(req: NextApiRequest, res: NextApiResponse<PhotoData[]>) {
  const directory = './public/';
  
  const files_list = fs.readdirSync(directory);
  const response: PhotoData[] = [];
  for (let index = 0; index < files_list.length; index++) {
    const filename = files_list[index];
    response.push({
      photo_id: index + 1,
      image_url: `/${filename}`,
    })
  }
  res.status(200).json(response)
};

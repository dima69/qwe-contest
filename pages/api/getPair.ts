import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const directory = './public/';
  let files_list = fs.readdirSync(directory);  
  let response = [];
  const shuffled_array = files_list.sort(() => 0.5 - Math.random());
  let two_selected_items = shuffled_array.slice(0, 2);
  for (const filename of two_selected_items) {
    // @@@
    response.push({
      user_id: filename.slice(0, 1),
      image_url: `/${filename}`,
    })
  }
  res.status(200).json(response)
};

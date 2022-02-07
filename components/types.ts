interface PhotoData {
  photo_id: number;
  image_url: string;
}

interface PostComment {
  comment_id: number;
  author: string;
  text: string;
}

interface PostData {
  photo_id: string;
  comments: PostComment[];
  average_score: number;
  image_url: string;
}


interface ContestantData {
  user_id: string;
  image_url: string;
}
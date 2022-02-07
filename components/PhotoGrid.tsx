import Image from "next/image";
import Link from "next/link";

const PhotoGrid = ({
  photos_list,
  layout_style,
}: {
  photos_list: PhotoData[];
  layout_style: string;
}) => {
  const gridLayoutStyle = 'grid grid-bitch gap-1 justify-items-center items-center max-w-max mx-auto';

  return (
    <div className="grid grid-cols-1">
      {photos_list.map((photo) => (
        <Link href={`/p/${photo.photo_id}`} key={photo.photo_id}>
          {/* @@@ height is weird when width size < 720px */}
          <a className="bg-indigo-700">
            <Image
              src={photo.image_url}
              width={250}
              height={250}
              alt=""
              layout="responsive"
              className="hover:brightness-90"
            />
          </a>
        </Link>
      ))}
    </div>
  );
};

export default PhotoGrid;
